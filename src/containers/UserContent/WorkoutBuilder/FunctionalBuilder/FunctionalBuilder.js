import { useState , useContext } from 'react'
import './FunctionalBuilder.css'
import { InputSelection } from '../../../../components/Templates/InputSelection/InputSelection'
import { 
    CORE , 
    FUNCTIONAL , 
    HIT , 
    LOW_IMPACT ,
    YOGA ,
    durationDropBox 
    
} from './FunctionalBuilderUtility.js'
import { workoutContext } from '../../../../Context/WorkoutContext/WorkoutContext'
import coreIcon from './icons/core.jpg'
import functionalIcon from './icons/functional.jpg'
import hitIcon from './icons/hit.jpg'
import lowImpactIcon from './icons/low-impact.jpg'
import yogaIcon from './icons/yoga.jpg'


export const FunctionalBuilder = () => {

    const WorkoutContext = useContext(workoutContext);

    const [ trainingType , setTrainingType ] = useState('');
    const [ trainingDuration , setTrainingDuration ] = useState('');
    
    const functionalWorkOutSubmitHandler = () => {
        //IMPLEMENTAION OF A POST REQUEST FOR A NEW WORKOUT
        const updatedWorkout = {
            type:'Functional',
            additionalInfo: {
                trainingType:trainingType,
                trainingDuration:trainingDuration
            }};
        
        WorkoutContext.postWorkout(updatedWorkout);
    }

    console.log(trainingDuration)

    return (
        <div className="functional_workout_container">

            <div className="side_guide">
                <p>
                    Welcome to the innovative fitness site<br/> that offers you workouts that can<br/> be performed anywhere, anytime.<br/><br/>
                    Feel free to go in and choose the training <br/>that suits you according to your level<br/> and the type of training you want to perform.<br/><br/>
                    On the website you can schedule future trainings
                </p>
                <hr></hr>
                <button 
                    id="set-workout-btn" 
                    disabled={trainingType.trim() === '' || trainingDuration.trim() === ''}
                    onClick={functionalWorkOutSubmitHandler}>Give me my workout</button>
            </div>

            <div className="custom-select">    
                <InputSelection 
                    direction="ltr" 
                    selection={durationDropBox}
                    changed={e => {setTrainingDuration(e.target.value)}}
                    />
            </div>

            <div className="functional_content ">
                <div className={trainingType === CORE ? "tooltip selected" : "tooltip"}>
                    <img src={coreIcon}  alt="" onClick={ () => setTrainingType(CORE)}/>
                    <div className="tooltiptext">
                        Strong core muscles are what separate us from a strong, healthy and painless body and that is how we train them properly.
                    </div>
                </div>

                <div className={trainingType === FUNCTIONAL ? "tooltip selected" : "tooltip"}>
                    <img src={functionalIcon} alt="" onClick={ () => setTrainingType(FUNCTIONAL)} />
                    <div className="tooltiptext">
                        Functional training leads to significant calorie burning and it combines different groups of muscles and core muscles. 
                    </div>
                </div>

                <div className={trainingType === HIT ? "tooltip selected" : "tooltip"}>
                    <img src={hitIcon} alt="" onClick={ () => setTrainingType(HIT)} />
                    <div className="tooltiptext">
                        Hit training is training at high intensity and pulse intervals. 
                        This is a continuous training divided into work segments that combine aerobic training and strength, an effective and especially challenging training.  
                    </div>
                </div>

                <div className={trainingType === LOW_IMPACT ? "tooltip selected" : "tooltip"}>
                    <img src={lowImpactIcon} alt="" onClick={ () => setTrainingType(LOW_IMPACT)} />
                    <div className={"tooltiptext"}>
                        Cardio training without jumps LOW-IMPACT - is the ultimate solution for anyone who is less connected to jumps and jumps. 
                        High-intensity training, and what a surprise it will be when you end up sweating like you did not stop jumping. 
                    </div>
                </div>
                
                <div className={trainingType === YOGA ? "tooltip selected" : "tooltip"}>
                    <img src={yogaIcon} alt="" onClick={ () => setTrainingType(YOGA)} />
                    <div className="tooltiptext">
                        Connection between body and mind. 
                        Combining breathing and relaxation is important and constructive work for all the muscles of the body.
                    </div>
                </div>       
            </div>
            
        </div>
    )
}