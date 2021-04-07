import React , { useState , useEffect } from 'react'
import '../WorkoutBuilder.css'
import { Auxiliary } from '../../../../components/Auxiliary/Auxiliary'
import { 
    CHEST, 
    ARMS,
    LEGS, 
    BACK, 
    ABS,
    CategoriesMap
} from './MuscleTypes'
import { Footer } from '../../../../components/Templates/Footer/Footer'


export const StrengthBuilder = () => {

    const [builderState,setBuilderState] = useState(
        {
            chosenMuscle:'' ,
            optionsDesplay: []
        }
    );

    const setBuilderStateHandler = (muscleChoice: string) => {
        
        const newDisplay : JSX.Element []= [];

        if(muscleChoice !== '')
        {
            const optionTitles: string[]= CategoriesMap.get(muscleChoice) as string[];
            for(let i = 0 ; i < optionTitles.length ; i ++)
            {
                newDisplay.push(
                        <li className="category_item">
                            {optionTitles[i]}
                        </li>
                );
            }
        }

        setBuilderState({
            chosenMuscle:muscleChoice,
            optionsDesplay:newDisplay as never
        });

    }
    
    const titleClassName : string = 'body_part_title';

    return (
        <Auxiliary>
            <div className="builder_container">
                <div 
                    className={
                        builderState.chosenMuscle.trim() === '' ||
                        builderState.chosenMuscle === CHEST ? 
                        titleClassName : 
                        titleClassName.concat(' body_part_title_hide')}
                    onClick={() => setBuilderStateHandler(builderState.chosenMuscle === CHEST ? '' : CHEST)}>{CHEST}
                </div>
                <div 
                    className={
                        builderState.chosenMuscle.trim() === '' ||
                        builderState.chosenMuscle === ARMS ? 
                        titleClassName.concat(' body_part_title_even') : 
                        titleClassName.concat(' body_part_title_hide body_part_title')}
                    onClick={() => setBuilderStateHandler(builderState.chosenMuscle === ARMS ? '' : ARMS)}>{ARMS}
                </div>
                <div   
                    className={
                        builderState.chosenMuscle.trim() === '' ||
                        builderState.chosenMuscle === LEGS ? 
                        titleClassName : 
                        titleClassName.concat(' body_part_title_hide')}
                    onClick={() => setBuilderStateHandler(builderState.chosenMuscle === LEGS ? '' : LEGS)}>{LEGS}
                </div>
                <div 
                    className={
                        builderState.chosenMuscle.trim() === '' ||
                        builderState.chosenMuscle === ABS ? 
                        titleClassName.concat(' body_part_title_even') : 
                        titleClassName.concat(' body_part_title_hide body_part_title_even')}
                    onClick={() => setBuilderStateHandler(builderState.chosenMuscle === ABS ? '' : ABS)}>{ABS}
                </div>
                <div 
                    className={
                        builderState.chosenMuscle.trim() === '' ||
                        builderState.chosenMuscle === BACK ? 
                        titleClassName : 
                        titleClassName.concat(' body_part_title_hide')}
                    onClick={() => setBuilderStateHandler(builderState.chosenMuscle === BACK ? '' : BACK)}>{BACK}
                </div>
                <ul className="category_items">
                    {builderState.optionsDesplay}
                </ul>
            </div>
            {/* <Footer /> */}
        </Auxiliary>
    );
}