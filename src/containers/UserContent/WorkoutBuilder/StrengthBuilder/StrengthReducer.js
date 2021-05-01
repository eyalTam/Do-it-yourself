import 
{ 
    CHEST,
    ARMS,
    SHOULDERS,
    LEGS,
    BACK,
    ABS,
} from './StrengthBuilderUtility'
import { CLEAR_CHOICES } from '../WorkoutBuilder'


export const musclesReducer = (curMusclesChoice,action) => 
{

    switch (action.type)
    {
        case CHEST: 
            return { 
                ...curMusclesChoice , 
                currentMusclesChosenAmount: curMusclesChoice.CHEST === true ? curMusclesChoice.currentMusclesChosenAmount - 1 : curMusclesChoice.currentMusclesChosenAmount + 1,
                CHEST: !curMusclesChoice.CHEST, 
                    };
        case ARMS: 
            return {
                ...curMusclesChoice , 
                currentMusclesChosenAmount: curMusclesChoice.ARMS === true ? curMusclesChoice.currentMusclesChosenAmount - 1 : curMusclesChoice.currentMusclesChosenAmount + 1,
                ARMS: !curMusclesChoice.ARMS, 
            };
        case SHOULDERS: 
            return {
                ...curMusclesChoice , 
                currentMusclesChosenAmount: curMusclesChoice.SHOULDERS === true ? curMusclesChoice.currentMusclesChosenAmount - 1 : curMusclesChoice.currentMusclesChosenAmount + 1,
                SHOULDERS: !curMusclesChoice.SHOULDERS, 
            };
        case LEGS: 
            return {
                ...curMusclesChoice , 
                currentMusclesChosenAmount: curMusclesChoice.LEGS === true ? curMusclesChoice.currentMusclesChosenAmount - 1 : curMusclesChoice.currentMusclesChosenAmount + 1,
                LEGS: !curMusclesChoice.LEGS, 
            };
        case BACK: 
            return {
                ...curMusclesChoice , 
                currentMusclesChosenAmount: curMusclesChoice.BACK === true ? curMusclesChoice.currentMusclesChosenAmount - 1 : curMusclesChoice.currentMusclesChosenAmount + 1,
                BACK: !curMusclesChoice.BACK, 
            };
        case ABS: 
            return {
                ...curMusclesChoice , 
                currentMusclesChosenAmount: curMusclesChoice.ABS === true ? curMusclesChoice.currentMusclesChosenAmount - 1 : curMusclesChoice.currentMusclesChosenAmount + 1,
                ABS: !curMusclesChoice.ABS, 
            };
        case CLEAR_CHOICES:
            return {
                CHEST: false,
                ARMS: false,
                SHOULDERS: false,
                LEGS: false,
                BACK: false,
                ABS: false,
                currentMusclesChosenAmount: 0
            };
        default:
            throw new Error('Something went wrong')
    }
}


export const exercisesReducer = (curExercisesChoice,action) => 
{
    switch (action.musclesAmount)
    {
        case 2:
            return { musclesAmount: action.musclesAmount , numOfExercisesPerMuscle: 4};
        case 3:
            return { musclesAmount: action.musclesAmount , numOfExercisesPerMuscle: 3};
        case 4:
            return { musclesAmount: action.musclesAmount , numOfExercisesPerMuscle: 2};
        case 5:
            return { musclesAmount: action.musclesAmount , numOfExercisesPerMuscle: 2};
        case 6:
            return { musclesAmount: action.musclesAmount , numOfExercisesPerMuscle: 2};
        default:
            return { musclesAmount: -1 , numOfExercisesPerMuscle: 0};
    }
        
}