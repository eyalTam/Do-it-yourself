import './Toolbar.css'
import { useContext } from 'react'
import { AuthenticationContext} from '../../../Context/AuthContext/AuthContext'
import { Link } from 'react-router-dom';
import websiteLogo from './main-logo.jpg'

export const Toolbar = props => {

    const authContext = useContext(AuthenticationContext);

    return (
        <div className="toolbar">
            <Link 
                to="/" 
                className="link_style">
            <img src={websiteLogo} alt="home"/>
            </Link> 
            {authContext.isAuthenticated ?
                <Link 
                    to="/" 
                    onClick={authContext.signoutHandler} 
                    className="link_style">
                    Sign out
                </Link> : 
                <div>
                    <p className="link_style" 
                        onClick={props.signinClicked} 
                        >
                        Sign in
                    </p>
                    {/* <p className="link_style" 
                        onClick={props.signupClicked} 
                        >
                        Sign up
                    </p> */}
                    {/* <Link 
                        to="/signup"
                        onClick={props.signupClicked} 
                        className="link_style">
                        Sign up
                    </Link> */}
                </div>}
            {/* <div className="bars_container">
                <Link 
                    to="/about"
                    className="link_style">
                    About
                </Link>
                <Link 
                    to="/contact"
                    className="link_style">
                    Contact Us
                </Link>
            </div> */}
        </div>
    )
}   
