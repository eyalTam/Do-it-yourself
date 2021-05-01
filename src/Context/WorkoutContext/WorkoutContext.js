import { createContext, useState } from 'react';
import axios from 'axios'
import moment from 'moment'

export const workoutContext = createContext();

const WorkoutContext = props => {

   const [ workout,setWorkout] = useState({
       date:new Date(),
       type: '',
       additionalInfo: null
   });

    const updateWorkoutHandler = (updatedWorkOut) => 
    {
        setWorkout({...workout , ...updatedWorkOut});
    }
    
    const postWorkoutHandler = (updatedWorkOut) => 
    {
            axios.post(`http://localhost:3001/hey`,{
                headers: {'Content-type': 'application/json'}, 
                date:moment(workout.date).format("YYYY-MM-DD").toString(),
                type: updatedWorkOut.type,
                additionalInfo:updatedWorkOut.additionalInfo
                })
            .then(res => {
            console.log(res.data);
            })
        .catch(err => console.log(err))
    }
    
    const clearWorkoutHandler = () => {
        setWorkout({
            date:new Date(),
            type: '',
            additionalInfo: null
        });
    }

    const changeDateHandler = (date) => 
    {
        setWorkout({...workout, date:date})
    }

    return (
        <workoutContext.Provider value={{
            workout: workout,
            updateWorkout:  updateWorkoutHandler,
            dateChanged: changeDateHandler,
            clearWorkout: clearWorkoutHandler,
            postWorkout: postWorkoutHandler
            }}>
                {props.children}
        </workoutContext.Provider>
    )
};

export default WorkoutContext;