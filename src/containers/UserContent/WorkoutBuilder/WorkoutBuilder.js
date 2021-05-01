import './WorkoutBuilder.css'
import { Auxiliary } from '../../../components/Auxiliary/Auxiliary'
import { useHistory } from 'react-router-dom';
import functionalImg from './icons/functional-image.jpg'
import strengthImg from './icons/strength-image.jpg'
import runningImg from './icons/running-image.jpg'

export const EASY = 'Easy';
export const MEDIUM = 'Medium';
export const HARD = 'Hard';
export const CLEAR_CHOICES = 'CLEAR_CHOICES';

export const difficultyLevelDropBox = [
    <option value='' key='Select difficulty Level'>Select difficulty Level</option>,
    <option value={EASY} key={EASY}>{EASY}</option>,
    <option value={MEDIUM} key={MEDIUM}>{MEDIUM}</option>,
    <option value={HARD} key={HARD}>{HARD}</option>
];

export const WorkoutBuilder = () => {

        const history = useHistory();

        return (
            <Auxiliary>
                
                <div className="training_options_container">

                    <div className="training_option">
                        <p className = "workout_type_title">Running</p>
                        <img 
                            src={runningImg} 
                            alt=""
                            onClick={() => history.push('/running-builder')}
                        />
                    </div>

                    <div className="training_option">
                        <p className = "workout_type_title">Strength</p>
                        <img 
                            src={strengthImg} 
                            alt=""
                            onClick={() => history.push('/strength-builder')}
                        />
                    </div>
                    <div className="training_option">
                        <p className = "workout_type_title">Functional</p>
                        <img 
                            src={functionalImg} 
                            alt=""
                            onClick={() => history.push('/functional-builder')}
                        />
                    </div>
                </div>
            </Auxiliary>
            );
        }
