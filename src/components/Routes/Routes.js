import { useContext } from 'react'
import { Switch, Route } from 'react-router-dom';

import { Layout } from '../../containers/Layout/Layout';
import { TrainingOptions } from '../Templates/SideDrawer/TrainingOptions/TrainingOptions'
import { WorkoutBuilder } from '../../containers/UserContent/WorkoutBuilder/WorkoutBuilder'
import { FunctionalBuilder } from '../../containers/UserContent/WorkoutBuilder/FunctionalBuilder/FunctionalBuilder'
import { StrengthBuilder } from '../../containers/UserContent/WorkoutBuilder/StrengthBuilder/StrengthBuilder'
import { RunningBuilder } from '../../containers/UserContent/WorkoutBuilder/RunningBuilder/RunningBuilder'
import { UserContent } from '../../containers/UserContent/UserContent'
import { HomePage } from '../Templates/HomePage/HomePage'
import { AuthenticationContext } from '../../Context/AuthContext/AuthContext'
import WorkoutContext from '../../Context/WorkoutContext/WorkoutContext'


export const  Routes = props => {

    const authContext = useContext(AuthenticationContext);

    return (
        <Layout>
            <Switch>
                <Route path="/training-options" >
                    <TrainingOptions />
                </Route>
                <Route path="/workout-builder" >
                    <WorkoutBuilder />
                </Route>
                <Route path='/functional-builder'>
                    <WorkoutContext><FunctionalBuilder /></WorkoutContext>
                </Route>
                <Route path='/strength-builder'>
                    <WorkoutContext><StrengthBuilder /></WorkoutContext>
                </Route>
                <Route path='/running-builder'>
                    <WorkoutContext><RunningBuilder /></WorkoutContext>
                </Route>
                <Route path="/" >
                    {authContext.isAuthenticated ? <UserContent/> : <HomePage/>}
                </Route>
            </Switch>
        </Layout>
    );
}