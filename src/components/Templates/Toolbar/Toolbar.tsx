import './Toolbar.css'
import { Link } from 'react-router-dom';
import { ToolBarProps } from './ToolbarProps'


export const Toolbar: React.FC<ToolBarProps> = ({signupClicked,signinClicked,signOutClicked,isAuth}) => {
    
    return (
            <div className="toolbar">
                <Link 
                        to="/" 
                        className="link_style">
                        Home
                    </Link> 
                {isAuth ?
                    <Link 
                        to="/auth" 
                        onClick={signOutClicked} 
                        className="link_style">
                        Sign out
                    </Link> : 
                    <div>
                        <Link 
                            to="/signin" 
                            onClick={signinClicked} 
                            className="link_style">
                            Sign in
                        </Link>
                        <Link 
                            to="/signup"
                            onClick={signupClicked} 
                            className="link_style">
                            Sign up
                        </Link>
                    </div>}
                <div className="bars_container">
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
                </div>
        </div>
    )
}
