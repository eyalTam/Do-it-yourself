import { useState } from 'react'
import { useHistory } from "react-router-dom";
// import { WorkoutBuilder } from './WorkoutBuilder/WorkoutBuilder'
// import { ProcessReview } from './ProcessReview/ProcessReview'
// import { UserSchedule } from './Schedule/userSchedule'
import { Footer } from '../../components/Templates/Footer/Footer'
import { Auxiliary } from '../../components/Auxiliary/Auxiliary'
import './UserContent.css'
import processImage from './process-icon.jpg'
import scheduleImage from './schedule-icon.jpg'
import builderIcon from './workout-builder-icon.jpg'


export const UserContent = () => {

    const [processHovered,setProcessHovered] = useState(false);
    const [scheduleHovered,setScheduleHovered] = useState(false);
    const [builderHovered,setBuilderHovered] = useState(false);

    let history = useHistory();

    const notHovered = 'notHovered';

    let processStyle = notHovered;
    if(processHovered)
    {
        processStyle = 'hoveredBtn';
    }
    let scheduleStyle = notHovered;
    if(scheduleHovered)
    {
        scheduleStyle = 'hoveredBtn';
    }
    let builderStyle = notHovered;
    if(builderHovered)
    {
        builderStyle = 'hoveredBtn';
    }


    return (
        <Auxiliary>
            <div className="user_content_container">
                <div className="top_btns">
                    <div 
                        className="btn_container"
                        onMouseOver={()=>setProcessHovered(true)}
                        onMouseLeave={()=>setProcessHovered(false)}
                        onClick={() => history.push('/process-review')}>
                        {/* <div className={processStyle}>
                            <h1>Watch the workout you did recently</h1>
                        </div> */}
                        <img src={processImage} alt=""/>
                        <h2 className="content_title">Review your process</h2>
                    </div>
                    <div 
                        className="btn_container"
                        onMouseOver={()=>setScheduleHovered(true)}
                        onMouseLeave={()=>setScheduleHovered(false)}
                        onClick={() => history.push('/schedule')} >
                        {/* <div className={scheduleStyle}>
                            <h1>hey im hidden!</h1>
                        </div> */}
                        <img src={scheduleImage} alt=""/>
                        <h2 className="content_title">View your schedule</h2>
                    </div>
                </div >
                <div className="bottom_btn">
                    <div 
                        className="btn_container"
                        onMouseOver={()=>setBuilderHovered(true)}
                        onMouseLeave={()=>setBuilderHovered(false)}
                        onClick={() => history.push('/workout-builder')}>
                        {/* <div className={builderStyle}>
                            <h1>hey im hidden!</h1>
                        </div> */}
                    <img src={builderIcon} alt=""/>
                    <h2 className="content_title">Build a new workout </h2>   
                    </div>              
                </div>
            </div>
            <Footer />
        </Auxiliary>
        )
}