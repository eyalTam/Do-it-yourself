import { useState , useContext } from 'react'
import { useHistory } from "react-router-dom";
import { Auxiliary } from '../../components/Auxiliary/Auxiliary'
import { AuthenticationContext } from '../../Context/AuthContext/AuthContext'

import './UserContent.css'

export const UserContent = () => {

    // const authContext = useContext(AuthenticationContext);

    let history = useHistory();

    return (
        <Auxiliary>
            <div className="user_content_container">
                <h1 id="user_name_title"> </h1>
                <div className="user_content_section">
                    <h2 className="content_title">Your previous work outs</h2>
                    <div className="category_content"></div>
                </div>
                <div className="user_content_section">
                    <h2 className="content_title">Your future work outs</h2>
                    <div className="category_content"></div>
                </div>
                <div className="user_content_section">
                    <h2 className="content_title">Set up a new workout</h2>
                    <div className="category_content">
                        <p>
                            Build yourself a training of the kind you want<br/>after it is created it will be added to your training list and you can watch the process you did
                        </p>
                        <button 
                            id="create_workout_btn"
                            onClick={() => history.push('/workout-builder')}>
                                Get started
                        </button>
                    </div>
                </div>
            </div>
        </Auxiliary>
        
        )
}

//  <div className="top_btns"> 
//                      <div 
//                         className="btn_container"
//                         onMouseOver={()=>setProcessHovered(true)}
//                         onMouseLeave={()=>setProcessHovered(false)}>
                        
//                         <img 
//                             src={processImage} alt=""
//                             onClick={() => history.push('/process-review')}/>
//                         <h2 className="content_title">Review your process</h2>
//                     </div> 
//                     <div 
//                         className="btn_container"
//                         onMouseOver={()=>setScheduleHovered(true)}
//                         onMouseLeave={()=>setScheduleHovered(false)}>
//                         {/* <div className={scheduleStyle}>
//                             <h1>hey im hidden!</h1>
//                         </div> */}
//                         <img 
//                             src={scheduleImage} alt=""
//                             onClick={() => history.push('/schedule')} />
//                         <h2 className="content_title">Show me my activities</h2>
//                     </div>
//                 </div >
//                 <div className="bottom_btn">
//                     <div 
//                         className="btn_container"
//                         onMouseOver={()=>setBuilderHovered(true)}
//                         onMouseLeave={()=>setBuilderHovered(false)}>
//                         <div className={builderStyle}>
//                             <h1>hey im hidden!</h1>
//                         </div>
//                     <img 
//                         src={builderIcon} alt=""
//                         onClick={() => history.push('/workout-builder')}/>
//                     <h2 className="content_title">Build a new workout </h2>   
//                     </div>              
//                 </div>
//             </div> 