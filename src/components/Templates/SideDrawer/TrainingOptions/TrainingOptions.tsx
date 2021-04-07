import './TrainingOptions.css'
import { Footer } from '../../Footer/Footer'
import { Auxiliary } from '../../../Auxiliary/Auxiliary'
import  SideDrawer  from '../SideDrawer'

export const TrainingOptions = () => {
    return (
        <Auxiliary>
            <div className="container">
                <div className="option">
                <div className="option__info">
                    <h1 className="option__name">Running</h1>
                    <p className="option__text">
                        By choosing the distance and level of difficulty you will get a running workout that is tailored just for you.
                        You will end up writing how long you did the training and we will already calculate for you your results during the training.
                        So go ahead and it's time to find a friend to join you or some nice playlist to hear and get going.
                    </p>
                </div>
                <div className="option__image-container">
                    <div className="option__image">
                    </div>
                </div>
                </div> 
                <div className="option" id="training-2">
                <div className="option__image-container">
                    <div className="option__image">
                    </div>
                </div>
                <div className="option__info">
                    <h1 className="option__name">Strength</h1>
                    <p className="option__text">
                        Here you will find workouts with or without weights.
                        You have the option to build a workout according to the muscles you want to focus on or a full body workout where you will work on all the body muscles.
                        And all of course according to your level
                    </p>
                </div>
                </div> 
                <div className="option">
                <div className="option__info">
                    <h1 className="option__name">Functional</h1>
                    <p className="option__text">
                        The site offers a wide range of functional training.
                        You can choose a more relaxed workout in which you work hard on the muscles, such as toning and shaping / low impact, 
                        or a bounce hit workout that will raise your heart rate while you will also feel all the muscles working. 
                        Feel free to come in and see the different options and of course the length of the training of your choice.
                    </p>
                </div>
                <div className="option__image-container">
                    <div className="option__image">
                    </div>
                </div>
                </div>
            </div>
            <Footer />
        </Auxiliary>
    )
}