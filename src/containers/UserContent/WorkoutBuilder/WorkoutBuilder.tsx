import './WorkoutBuilder.css'
import { Auxiliary } from '../../../components/Auxiliary/Auxiliary'
import { Footer } from '../../../components/Templates/Footer/Footer'
import { useHistory } from "react-router-dom";
import icon from './lilach_running.jpg'

export const WorkoutBuilder = () => {

        const history = useHistory();

        return (
            <Auxiliary>
                <div className="training_options_container">
                    <h1 className="training_options_title">Choose your training</h1>
                    <div className="training_option">
                        <img 
                            src={icon} 
                            alt=""
                            onClick={() => history.push('/')}
                        />
                            <p className="description">Running</p>
                    </div>
                    <div className="training_option">
                        <img 
                            src={icon} 
                            alt=""
                            onClick={() => history.push('/strength-builder')}
                        />
                    <p 
                        className="description"
                        onClick={() => history.push('/')}>
                            Strength
                    </p>
                    </div>
                    <div className="training_option">
                        <img 
                            src={icon} 
                            alt=""
                            onClick={() => history.push('/strength-builder')}
                        />
                    <p className="description">Functional</p>
                    </div>
                </div>
                <Footer />
            </Auxiliary>
            );
        }
