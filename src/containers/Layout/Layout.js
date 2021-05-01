import { useEffect , useContext , useState } from 'react'

import { AuthenticationContext } from '../../Context/AuthContext/AuthContext'
import { Toolbar } from '../../components/Templates/Toolbar/Toolbar'
import { Footer } from '../../components/Templates/Footer/Footer'
import { Auxiliary } from '../../components/Auxiliary/Auxiliary'

import SigninForm from '../../components/Templates/Form/SigninForm'
import SignupForm from '../../components/Templates/Form/SignupForm'

import './Layout.css'

export const Layout = props => {

    const authContext = useContext(AuthenticationContext);

    const [ signinForm, setSigninForm ] = useState(false);
    const [ signupForm, setSignupForm ] = useState(false);
    
    
    useEffect(() => {
        if(!signinForm && !signupForm)
        {
            document.body.style.overflow = 'initial';
        }
        else 
        {
            document.body.style.overflow = 'hidden';
        }
    },[signinForm , signupForm])

    return (
        <Auxiliary> 
            <div className="main_wrapper">
                <Toolbar 
                    signupClicked = { () => setSignupForm(true)}
                    signinClicked = {() => setSigninForm(true)}
                    signOutClicked = {authContext.changeAuthStatus}
                />
                { signinForm ? <SigninForm exitForm={() => setSigninForm(false)}/> : 
                  signupForm ? <SignupForm exitForm={() => setSignupForm(false)}/> : null }
                { props.children }
            </div>
            <Footer />
        </Auxiliary>
        );
}

