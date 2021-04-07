import { useState , useEffect } from 'react';
import { Switch , Route } from 'react-router-dom'
import './Layout.css'
import Backdrop from '../../components/Templates/Backdrop/Backdrop'
import SigninForm from '../../components/Templates/Form/SigninForm'
import SignupForm from '../../components/Templates/Form/SignupForm'
import { Toolbar } from '../../components/Templates/Toolbar/Toolbar'
import { Footer } from '../../components/Templates/Footer/Footer'
// import AuthContext from '../../src/AuthContext';
import SideDrawer from '../../components/Templates/SideDrawer/SideDrawer'
import { TrainingOptions } from '../../components/Templates/SideDrawer/TrainingOptions/TrainingOptions'
import { Auxiliary } from '../../components/Auxiliary/Auxiliary'
import { WorkoutBuilder } from '../UserContent/WorkoutBuilder/WorkoutBuilder'
import { HomePage } from '../../components/Templates/HomePage/HomePage'
import { UserContent } from '../UserContent/UserContent'
import { StrengthBuilder } from '../UserContent/WorkoutBuilder/StrengthBuilder/StrengthBuilder'

export const Layout = () => {

    const [sideDrawer,setSideDrawer] = useState(true);
    const [backDrop,setBackdrop] = useState(false);
    const [signupDisplay,setSignupDisplay] = useState(false);
    const [signinDisplay,setSigninDisplay] = useState(false);
    const [isAuth,setIsAuth] = useState(true);

    useEffect(()=> {
        if(!backDrop)
        {
            setSignupDisplay(false);
            setSigninDisplay(false);
        }
    },[backDrop]);

    let drawerView = null;
    if(sideDrawer === true)
    {
        drawerView = <SideDrawer />;
    }

    // const FormDisplay = !backDrop ? null : signupDisplay ? <SignupForm /> : <SigninForm />;

    let backDropView = null;
    if(backDrop === true)
    {
        backDropView = <Backdrop clicked={
                        () => {
                            setBackdrop(false)
                        document.body.style.overflow = 'initial';
        }}/>;
    }
    
    return (
        <Auxiliary >
            <div className="wrapper">
                <Toolbar 
                        signupClicked = { () => {
                            setSignupDisplay(true);
                            setBackdrop(true);
                            document.body.style.overflow = 'hidden';
                        }}
                        signinClicked = {() => {
                            setSigninDisplay(true);
                            setBackdrop(true);
                            document.body.style.overflow = 'hidden';
                        }}
                        signOutClicked = {() => {
                            setIsAuth(false)
                        }}
                        isAuth={isAuth}
                    />
                {signinDisplay ? <SigninForm /> : signupDisplay ? <SignupForm /> : null}
                <Switch>
                    <Route path="/training-options" >
                        <TrainingOptions />
                    </Route>
                    <Route path="/workout-builder" >
                        <WorkoutBuilder />
                    </Route>
                    <Route path='/user-content'>
                        <UserContent />
                    </Route>
                    <Route path='/strength-builder'>
                        <StrengthBuilder />
                    </Route>
                    <Route path="/" >
                        <HomePage/>
                    </Route>
                </Switch>
            </div>
            {backDropView}
            <Footer />
        </Auxiliary>
        );
}
