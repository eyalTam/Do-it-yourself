import './HomePage.css'
import { Footer } from '../Footer/Footer'
import { Auxiliary } from '../../Auxiliary/Auxiliary'
import { NavigationLayer } from './NavigationLayer'
import SideDrawer from '../SideDrawer/SideDrawer'
import homePageImage from './background.jpg'

export const HomePage = () => {
    // document.body.style.position = 'fixed';
    // document.body.style.overflow = 'hidden';
    return (
        <Auxiliary>
            <div className="homepage_container ">
                <div className="content">
                    <p>
                        Welcome to the innovative fitness site<br/> that offers you workouts that can<br/> be performed anywhere, anytime.<br/><br/>
                        Feel free to go in and choose the training <br/>that suits you according to your level<br/> and the type of training you want to perform.<br/><br/>
                        On the website you can schedule future trainings<br/> and even invite a friend to do the training with you,<br/>
                        and what is the most fun? <br/>You can see which trainings the site<br/> users have recommended and do them yourself.<br/>
                        So what are you waiting for? 
                    </p>
                    <button className="joinus_button">join us</button>
                    </div>             
                    <img src={homePageImage} alt=""/>
            </div>
            <NavigationLayer />
            <Footer />
        </Auxiliary>
        )
}