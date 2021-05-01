import React , { useState , useContext , useEffect } from 'react'
import DatePicker from "react-datepicker";
import './RunningBuilder.css'
import { InputSelection } from '../../../../components/Templates/InputSelection/InputSelection'
import { difficultyLevelDropBox } from '../WorkoutBuilder'
import {
     runningDistanceDropBox ,
     runningEasyLevelMap ,
     runningMediumLevelMap ,
     runningHardLevelMap
    
} from './RunningBuilderUtility'
import { workoutContext } from '../../../../Context/WorkoutContext/WorkoutContext'

export const RunningBuilder = () => {

    const WorkoutContext = useContext(workoutContext);

    const [ distance , setDistance] = useState('');
    const [ difficultyLevel, setDifficultyLevel ] = useState('');
    const [ chosenRunningContent, setChosenRunningContent ] = useState([]);
    

    useEffect(() => 
    {   
        if(distance.trim() !== '' && difficultyLevel.trim() !== '')
        {
            let updatedContent;
            
            switch(difficultyLevel)
            {
                case 'Easy':
                    updatedContent = runningEasyLevelMap.get(distance);
                    break;
                case 'Medium':
                    updatedContent = runningMediumLevelMap.get(distance);
                    break;
                case 'Hard':
                    updatedContent = runningHardLevelMap.get(distance);
                    break;
                default :
                updatedContent = '';
                break;
            }
            updatedContent = updatedContent.split('\n');
            setChosenRunningContent(updatedContent);
        }
    },[distance,difficultyLevel]);

    const runningWorkOutSubmitHandler = () => {
        const updatedWorkout = {
            type:"Running",
            additionalInfo: {
                distance:distance ,
                difficultyLevel:difficultyLevel ,
                description: chosenRunningContent.join(' ')
            }};
        WorkoutContext.postWorkout(updatedWorkout);
    }

    return (
        <div className="running_workout_container">

            <div className="side_guide">
                <p>
                    Easy - low-intensity training, most of which is done at a relatively low pulse. Suitable for beginner trainees, trainees with knee problems or those looking for something light.<br/><br/>
                    Medium - high-intensity but not very intense training, including sections of short and long heart rate boost, intended for people who are relatively fit and able to combine the ladies during the run.<br/><br/>
                    Hard - High-intensity training almost throughout the training, intended for trainees who run and persevere in training.
                </p>
                <hr></hr>
    
                <button 
                    id="set-workout-btn"
                    disabled={distance.trim() === '' || difficultyLevel.trim() === ''}
                    onClick={runningWorkOutSubmitHandler}>
                        Give me my workout
                </button>
                <div className="rainbow-p-vertical_large rainbow-p-horizontal_xx-large rainbow-m-horizontal_xx-large">
                    <p>Choose a training date</p>
                    <DatePicker 
                        className="datepicker"
                        selected={WorkoutContext.workout.date}
                        onChange={date => WorkoutContext.updateWorkout({date:date})}
                        minDate={new Date()}
                        />
                </div>
            </div>

            <div className="custom-select">
                <InputSelection 
                    direction="ltr" 
                    selection={runningDistanceDropBox}
                    value={distance}
                    disable={false}
                    changed={e => setDistance(e.target.value)}
                     />
                <InputSelection 
                    direction="ltr" 
                    selection={difficultyLevelDropBox}
                    value={difficultyLevel}
                    disable={false}
                    changed={e => setDifficultyLevel(e.target.value)}
                    />
            </div>

            <div className="running_content">
            
                <p id='running_description'>{chosenRunningContent.map( item => <React.Fragment key={item.toString()}>{item}<br/></React.Fragment>)}</p>
            </div>

        </div>
    )
}