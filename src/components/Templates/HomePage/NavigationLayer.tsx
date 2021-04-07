import { useHistory } from "react-router-dom";
import './HomePage.css'
import trainingOptionsLogo from './schedule-icon.jpg'; 
import usersReviewLogo from './workout-builder-icon.jpg'; 

export const NavigationLayer = () => {

    const history = useHistory();
    return (
        <div className="nav_container">
            <div className="nav_item ">
                <button 
                    // onMouseOver={}
                    // onMouseLeave={}
                    onClick={() => history.push('/training-options')} >
                    <img src={trainingOptionsLogo} alt=""/>
                </button>
                <h2 className="nav_description">Training options</h2>
            </div>

            <div className="nav_item ">
                <button 
                    // onMouseOver={}
                    // onMouseLeave={}
                    onClick={() => history.push('/users-reviews')} >
                    <img src={usersReviewLogo} alt=""/>
                </button>
                <h2 className="nav_description">Users reviews</h2>
            </div>
        </div>
    )
}