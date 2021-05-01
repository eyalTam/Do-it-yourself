import { useContext } from 'react'
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { Auxiliary } from '../../../../components/Auxiliary/Auxiliary'
import '../WorkoutBuilder.css'
import { workoutContext } from '../../../../Context/WorkoutContext/WorkoutContext'


export const StrengthSideDisplay = props => {
    
    const WorkoutContext = useContext(workoutContext);

    return (               

            <div className={props.currentMusclesChosenAmount === props.musclesAmount && props.difficultyLevel.trim() !== '' ? "side_guide" : "side_guide workout_disabled"}>
                <p>
                    Welcome to the innovative fitness site<br/>
                     that offers you workouts that can<br/> 
                     be performed anywhere, anytime.<br/><br/>
                    Feel free to go in and choose the training <br/>
                    that suits you according to your level<br/> 
                    and the type of training you want to perform.<br/><br/>
                    On the website you can schedule future trainings
                </p>
                <hr></hr>

                {!props.choiceSubmitted ?
                    <button 
                        id="set-workout-btn" 
                        disabled={props.currentMusclesChosenAmount !== props.musclesAmount || props.difficultyLevel.trim() === ''}
                        onClick={props.submitClicked}>
                            Let me choose my exercises
                    </button>
                : 
                <Auxiliary>
                    <div className="workout-submit-container"> 
                        <button 
                            id="workout-submit-btn" 
                            onClick={props.workoutSubmit}>Submit workout</button> 
                        <button 
                            id="clean-options-btn" 
                            className="cancel-workout"
                            onClick={props.clearClicked}>
                            Clean my choices
                        </button>
                    </div>
                    <div className="rainbow-p-vertical_large rainbow-p-horizontal_xx-large rainbow-m-horizontal_xx-large">
                        <p>Choose a training date</p>
                        <DatePicker 
                            className="datepicker"
                            
                            selected={WorkoutContext.workout.date}
                            onChange={date => WorkoutContext.dateChanged(date)}
                            minDate={new Date()}
                            />
                    </div>
                </Auxiliary>
                }
                {/* DISPLAY WORKOUT CHOICES */}
            </div>
            );
}

