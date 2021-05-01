import '../WorkoutBuilder.css'
import './StrengthWorkout.css'
import { useState , useEffect } from 'react'
import { strengthMusclesMap } from './StrengthBuilderUtility';

export const MuscleOptionDisplay  = props => {

    const [ currentExercisesChosen , setCurrentExercisesChosen] = useState([]);
    
    useEffect(() => 
    {
        setCurrentExercisesChosen([]);
    } , [props.choicesSubmitted] );


    const exerciseClickedHandler = exercise => 
    {
        const isExerciseChosen = currentExercisesChosen.includes(exercise);
        let updatedExercises;

        if(isExerciseChosen)
        {
            updatedExercises = currentExercisesChosen.filter(e => e !== exercise);
            setCurrentExercisesChosen(updatedExercises);
            props.exercisesUpdate(props.muscle,updatedExercises);
        }
        
        else if(currentExercisesChosen.length < props.exercisesToChoose )
        {
            updatedExercises = [...currentExercisesChosen, exercise];
            setCurrentExercisesChosen(updatedExercises);
            props.exercisesUpdate(props.muscle,updatedExercises);
        }
        
    }

    const getExercises = muscle => 
    {
        const exercisesToDisplay = [];
        const categoryExercises = strengthMusclesMap.get(muscle);

        for(let exerciseIndex = 0 ; exerciseIndex < categoryExercises.length ; exerciseIndex ++)
        {
            const exercise = categoryExercises[exerciseIndex];
            exercisesToDisplay.push(
                    <p 
                        className={ currentExercisesChosen.includes(exercise) ? "muscle_chosen" : ""}
                        key={exerciseIndex}
                        onClick={ () => exerciseClickedHandler(exercise)}>
                        {exercise} </p>
            );
        }
        return exercisesToDisplay;
    }

    let content = '';

    if(props.choicesSubmitted && props.isMuscleSelected)
    {
        content = 
        <div className="chosen_muscle_wrapper">
            <div className='strength_grid_cube selected '>
                    <img 
                        src={props.imageSource} 
                        alt=""
                        onClick={() => 
                        {
                            if(!props.choicesSubmitted)
                            {
                                props.setMuscleSelected();
                            }
                        }}/>
                </div>
                <div className="cube_content ">
                    {getExercises(props.muscle)} 
            </div>        
        </div>
    }
    else if(!props.choicesSubmitted)
    {
        content = 
            <div className={props.isMuscleSelected ? 'strength_grid_cube selected' : 'strength_grid_cube'}>
                <img 
                    src={props.imageSource} 
                    alt=""
                    onClick={() => 
                    {
                        if(!props.choicesSubmitted)
                        {
                            props.setMuscleSelected();
                        }
                    }}/>
            </div> ;
    }
    
    return content;
}
