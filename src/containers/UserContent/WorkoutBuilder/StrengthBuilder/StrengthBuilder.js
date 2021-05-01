import React , { useState , useReducer, useEffect , useContext } from 'react'
import '../WorkoutBuilder.css'
import { MuscleOptionDisplay } from './MuscleOptionDisplay'
import { InputSelection } from '../../../../components/Templates/InputSelection/InputSelection'
import 
{ 
    CHEST,
    ARMS,
    SHOULDERS,
    LEGS,
    BACK,
    ABS,
    musclesAmountDropBox,
} from './StrengthBuilderUtility';
import { StrengthSideDisplay } from './StrengthSideDisplay'
import { 
    CLEAR_CHOICES,
    difficultyLevelDropBox
 } from '../WorkoutBuilder'
import { musclesReducer , exercisesReducer  } from './StrengthReducer'
import { workoutContext } from '../../../../Context/WorkoutContext/WorkoutContext'
import chestIcon from '../icons/chest-muscle.jpg'
import armsIcon from '../icons/arms-muscle.jpg'
import shouldersIcon from '../icons/shoulders-muscle.jpg'
import legsIcon from '../icons/legs-muscle.jpg'
import backIcon from '../icons/back-muscle.jpg'
import absIcon from '../icons/abs-muscle.jpg'


export const StrengthBuilder = () => {
    
    const WorkoutContext = useContext(workoutContext);

    const [ userMusclesChoice , dispatchUserMusclesChoice ] = useReducer(musclesReducer , 
    {
        CHEST: false,
        ARMS: false,
        SHOULDERS: false,
        LEGS: false,
        BACK: false,
        ABS: false,
        currentMusclesChosenAmount: 0
    });

    const [ difficultyLevel, setDifficultyLevel ] = useState('');
    
    const [ userExercisesChoice , dispatchUserExercisesChoice ] = useReducer(exercisesReducer , 
    {
        numOfExercisesPerMuscle: 0,
        musclesAmount: -1
    });

    const [ choicesSubmitted , setChoicesSubmitted] = useState(false);

    const [ chosenExercisesMap , setChosenExercisesMap ] = useState(new Map());

    const updateExerciseHandler = (muscle,exercises) => 
    {
        const updatedChosenExercises = {...chosenExercisesMap};
        updatedChosenExercises[muscle] = exercises;
        setChosenExercisesMap(updatedChosenExercises);
    }

    useEffect(() => 
    {
        return () => 
        {
            if(choicesSubmitted)
            {
                dispatchUserExercisesChoice('');
                setDifficultyLevel('');
                setChosenExercisesMap(new Map());
            }
        }
    } , [choicesSubmitted] );

    const strengthWorkOutSubmitHandler = () => {
            const updatedWorkout = {
                type:'Strength',
                difficultyLevel: difficultyLevel,
                additionalInfo:chosenExercisesMap
            };
            WorkoutContext.postWorkout(updatedWorkout);
    }

    return (
            <div className="strength_workout_container">
              
                    <StrengthSideDisplay 
                        clearClicked = {() => {
                            dispatchUserMusclesChoice({type:CLEAR_CHOICES})
                            setChoicesSubmitted(false)
                            WorkoutContext.clearWorkout()
                        }}
                        currentMusclesChosenAmount={userMusclesChoice.currentMusclesChosenAmount}
                        musclesAmount={userExercisesChoice.musclesAmount}
                        difficultyLevel={difficultyLevel}
                        choiceSubmitted={choicesSubmitted}
                        submitClicked={() => setChoicesSubmitted(true)}
                        workoutSubmit={strengthWorkOutSubmitHandler}
                    />
                

                <div className="strength-custom-select">

                    <InputSelection 
                        value={difficultyLevel}
                        disable={choicesSubmitted}
                        direction="ltr" 
                        selection={difficultyLevelDropBox}
                        changed={e => setDifficultyLevel(e.target.value)} 
                        />
                    <InputSelection 
                        value={userExercisesChoice.musclesAmount}
                        disable={choicesSubmitted}
                        direction="ltr" 
                        selection={musclesAmountDropBox}
                        changed={e => dispatchUserExercisesChoice({ musclesAmount : parseInt(e.target.value,10)} )}
                        />
                </div>
                
                <div className ="strength_content_container">
                    <MuscleOptionDisplay 
                        muscle={CHEST}
                        setMuscleSelected={() => dispatchUserMusclesChoice({type:CHEST})}
                        isMuscleSelected={userMusclesChoice.CHEST}
                        imageSource={chestIcon}
                        choicesSubmitted={choicesSubmitted}
                        exercisesToChoose={userExercisesChoice.numOfExercisesPerMuscle}
                        exercisesUpdate={updateExerciseHandler}
                    />

                    <MuscleOptionDisplay 
                        muscle={ARMS}
                        setMuscleSelected={() => dispatchUserMusclesChoice({type:ARMS})}
                        isMuscleSelected={userMusclesChoice.ARMS}
                        imageSource={armsIcon}
                        choicesSubmitted={choicesSubmitted}
                        exercisesToChoose={userExercisesChoice.numOfExercisesPerMuscle}
                        exercisesUpdate={updateExerciseHandler}
                    />

                    <MuscleOptionDisplay 
                        muscle={SHOULDERS}
                        setMuscleSelected={() => dispatchUserMusclesChoice({type:SHOULDERS})}
                        isMuscleSelected={userMusclesChoice.SHOULDERS}
                        imageSource={shouldersIcon}
                        choicesSubmitted={choicesSubmitted}
                        exercisesToChoose={userExercisesChoice.numOfExercisesPerMuscle}
                        exercisesUpdate={updateExerciseHandler}
                    />
                    {/* <StrengthSideDisplay 
                        clearClicked = {() => {
                            dispatchUserMusclesChoice({type:CLEAR_CHOICES})
                            setChoicesSubmitted(false)
                        }}
                        currentMusclesChosenAmount={userMusclesChoice.currentMusclesChosenAmount}
                        musclesAmount={userExercisesChoice.musclesAmount}
                        difficultyLevel={difficultyLevel}
                        choiceSubmitted={choicesSubmitted}
                        submitClicked={musclesSubmitHandler}
                        workoutSubmit={workOutSubmitHandler}
                    /> */}

                    <MuscleOptionDisplay 
                        muscle={LEGS}
                        setMuscleSelected={() => dispatchUserMusclesChoice({type:LEGS})}
                        isMuscleSelected={userMusclesChoice.LEGS}
                        imageSource={legsIcon}
                        choicesSubmitted={choicesSubmitted}
                        exercisesToChoose={userExercisesChoice.numOfExercisesPerMuscle}
                        exercisesUpdate={updateExerciseHandler}
                    />

                    <MuscleOptionDisplay 
                        muscle={BACK}
                        setMuscleSelected={() => dispatchUserMusclesChoice({type:BACK})}
                        isMuscleSelected={userMusclesChoice.BACK}
                        imageSource={backIcon}
                        choicesSubmitted={choicesSubmitted}
                        exercisesToChoose={userExercisesChoice.numOfExercisesPerMuscle}
                        exercisesUpdate={updateExerciseHandler}
                    />

                    <MuscleOptionDisplay 
                        muscle={ABS}
                        setMuscleSelected={() => dispatchUserMusclesChoice({type:ABS})}
                        isMuscleSelected={userMusclesChoice.ABS}
                        imageSource={absIcon}
                        choicesSubmitted={choicesSubmitted}
                        exercisesToChoose={userExercisesChoice.numOfExercisesPerMuscle}
                        exercisesUpdate={updateExerciseHandler}
                    />  
                </div>

            </div>      
    );
}









// --------------------


// import React , { useState , useReducer } from 'react'
// import '../WorkoutBuilder.css'
// import { StrengthWorkoutOption } from './StrengthWorkoutOption'
// import { InputSelection } from '../../../../components/Templates/InputSelection/InputSelection'
// import { 
//     CHEST,
//     ARMS,
//     SHOULDERS,
//     LEGS,
//     BACK,
//     ABS,
//     difficultyLevelDropBox ,
//     musclesAmountDropBox,
//     CategoriesMap,
// } from './StrengthBuilderUtility';
// import { COMPLETE_CHOOSING } from '../WorkoutBuilder'
// import { musclesReducer } from './MusclesReducer'
// import chestIcon from '../icons/chest-muscle.jpg'
// import armsIcon from '../icons/arms-muscle.jpg'
// import shouldersIcon from '../icons/shoulders-muscle.jpg'
// import legsIcon from '../icons/legs-muscle.jpg'
// import backIcon from '../icons/back-muscle.jpg'
// import absIcon from '../icons/abs-muscle.jpg'


// export const StrengthBuilder = () => {
    
//     const [ userMusclesChoice , dispatchUserMusclesChoice] = useReducer(musclesReducer , {
//         CHEST:false,
//         ARMS:false,
//         SHOULDERS:false,
//         LEGS:false,
//         BACK:false,
//         ABS:false,
//         musclesChosenAmount:0,
//         COMPLETE_CHOOSING:false
//     });
    
//     const [ musclesAmount, setMusclesAmount] = useState(0);
//     const [ difficultyLevel, setDifficultyLevel] = useState('');
    
//     console.log(userMusclesChoice.musclesChosenAmount !== musclesAmount)

//     const displayMusclesExercies = (muscleChoice) => {
//         const exercisesToDisplay = [];
//         if(muscleChoice !== '')
//         {
//             const categoryExercises = CategoriesMap.get(muscleChoice);
//             for(let exerciseIndex = 0 ; exerciseIndex < categoryExercises.length ; exerciseIndex ++)
//             {
//                 exercisesToDisplay.push(
//                         <p >
//                                 {categoryExercises[exerciseIndex]}
//                         </p>
//                 );
//             }
//         }
//         return exercisesToDisplay;
//     }

//     // console.log(difficultyLevelSelected,amountOfMusclesSelected);
    
//     return (
//             <div className="strength_workout_container">

//                 <div className="difficulty-custom-select">
//                     <InputSelection 
//                         direction="ltr" 
//                         selection={difficultyLevelDropBox}
//                         changed={e => setDifficultyLevel(e.target.value)} 
//                         />
//                     <InputSelection 
//                         direction="ltr" 
//                         selection={musclesAmountDropBox}
//                         changed={e => setMusclesAmount(parseInt(e.target.value,10))}
//                         />
//                 </div>

//                 <StrengthWorkoutOption 
//                     setMuscleSelected={() => dispatchUserMusclesChoice({type:CHEST})}
//                     isMuscleSelected={userMusclesChoice.CHEST}
//                     muscle={CHEST}
//                     getNewDisplay={() => displayMusclesExercies (CHEST)}
//                     imageSource={chestIcon}
//                     completeChoosing={userMusclesChoice.COMPLETE_CHOOSING}
//                     styling={userMusclesChoice.CHEST === true ? 'strength_grid_cube_selected' : 'strength_grid_cube'}/>

//                 <StrengthWorkoutOption 
//                     setMuscleSelected={() => dispatchUserMusclesChoice({type:ARMS})}
//                     isMuscleSelected={userMusclesChoice.ARMS}
//                     muscle={ARMS}
//                     getNewDisplay={() => displayMusclesExercies (ARMS)}
//                     imageSource={armsIcon}
//                     completeChoosing={userMusclesChoice.COMPLETE_CHOOSING}
//                     styling={userMusclesChoice.ARMS === true ? 'strength_grid_cube_selected' : 'strength_grid_cube'}/>

//                 <StrengthWorkoutOption 
//                     setMuscleSelected={() => dispatchUserMusclesChoice({type:SHOULDERS})}
//                     isMuscleSelected={userMusclesChoice.SHOULDERS}
//                     muscle={SHOULDERS}
//                     getNewDisplay={() => displayMusclesExercies (SHOULDERS)}
//                     imageSource={shouldersIcon}
//                     completeChoosing={userMusclesChoice.COMPLETE_CHOOSING}
//                     styling={userMusclesChoice.SHOULDERS === true ? 'strength_grid_cube_selected' : 'strength_grid_cube'}/>

//                 <div className={userMusclesChoice.musclesChosenAmount === musclesAmount ? "side_guide": "workout_disabled side_guide"}>
//                     <p>
//                         Welcome to the innovative fitness site<br/> that offers you workouts that can<br/> be performed anywhere, anytime.<br/><br/>
//                         Feel free to go in and choose the training <br/>that suits you according to your level<br/> and the type of training you want to perform.<br/><br/>
//                         On the website you can schedule future trainings
//                     </p>
//                     <hr></hr>
//                     {<button 
//                         id="workout-submit" disabled={userMusclesChoice.musclesChosenAmount !== musclesAmount}
//                         onClick={() => dispatchUserMusclesChoice({type : COMPLETE_CHOOSING})}
//                         >Let me choose my exercies</button>}
//                 {/* DISPLAY WORKOUT CHOICES */}
//                 </div>

//                 <StrengthWorkoutOption 
//                     setMuscleSelected={() => dispatchUserMusclesChoice({type:LEGS})}
//                     isMuscleSelected={userMusclesChoice.LEGS}
//                     muscle={LEGS}
//                     getNewDisplay={() => displayMusclesExercies (LEGS)}
//                     imageSource={legsIcon}
//                     completeChoosing={userMusclesChoice.COMPLETE_CHOOSING}
//                     styling={userMusclesChoice.LEGS === true ? 'strength_grid_cube_selected' : 'strength_grid_cube'}/>

//                 <StrengthWorkoutOption 
//                     setMuscleSelected={() => dispatchUserMusclesChoice({type:BACK})}
//                     isMuscleSelected={userMusclesChoice.BACK}
//                     muscle={BACK}
//                     getNewDisplay={() => displayMusclesExercies (BACK)}
//                     imageSource={backIcon}
//                     completeChoosing={userMusclesChoice.COMPLETE_CHOOSING}
//                     styling={userMusclesChoice.BACK === true ? 'strength_grid_cube_selected' : 'strength_grid_cube'}/>

//                 <StrengthWorkoutOption 
//                     setMuscleSelected={() => dispatchUserMusclesChoice({type:ABS})}
//                     isMuscleSelected={userMusclesChoice.ABS}
//                     muscle={ABS}
//                     getNewDisplay={() => displayMusclesExercies (ABS)}
//                     imageSource={absIcon}
//                     completeChoosing={userMusclesChoice.COMPLETE_CHOOSING}
//                     styling={userMusclesChoice.ABS === true ? 'strength_grid_cube_selected' : 'strength_grid_cube'}/>  
//             </div>      
//     );
// }














// --------------------------------



// import React from 'react'
// import '../WorkoutBuilder.css'
// import { Auxiliary } from '../../../../components/Auxiliary/Auxiliary'
// import { StrengthWorkout } from './StrengthWorkout'
// import { 
//     CategoriesMap
// } from './MuscleTypes'


// export const StrengthBuilder = () => {

    
//     const setBuilderStateHandler = (muscleChoice) => {
        
//         const newDisplay = [];
//         if(muscleChoice !== '')
//         {
//             const categoryExercises = CategoriesMap.get(muscleChoice);
//             for(let exerciseIndex = 0 ; exerciseIndex < categoryExercises.length ; exerciseIndex ++)
//             {
//                 newDisplay.push(
//                         <p >
//                                 {categoryExercises[exerciseIndex]}
//                         </p>
//                 );
//             }
//         }
//         return newDisplay;
//     }
    
//     return (
//         <Auxiliary>
//             <StrengthWorkout getNewDisplay={setBuilderStateHandler}/>
//         </Auxiliary>
//     );
// }
