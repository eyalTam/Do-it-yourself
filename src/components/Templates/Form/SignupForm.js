import './Form.css'
import { useState } from 'react'
import { useHistory } from "react-router-dom"
import Backdrop from '../Backdrop/Backdrop'
import { Auxiliary } from '../../Auxiliary/Auxiliary'
import axios from 'axios';

const SignupForm = props => {

    const history = useHistory();

    const [userName,setUserName] = useState('Enter user name');

    const [password,setPassword] = useState({
        value: 'Enter password',
        isValid: false
    });

    const [ signupFailedMessage, setSignupFailedMessage] = useState({
        failed: false,
        message: ''
    });
    
    const passwordCheckHandler = (event) => 
    {
        const updatedPassword = event.target.value;
        let isValid = false;
        if(!updatedPassword.includes(' ') && updatedPassword.trim().length >= 8)
        {
            isValid = true;
        }
        setPassword({value : updatedPassword , isValid : isValid});
    }

    const signupHandler = (e) => 
    {
        props.exitForm();
        history.push('/');
        e.preventDefault();
        
        // axios.post(`http://localhost:3001/signup`,{
        //     headers: {'Content-type': 'application/json'}, 
        //     userName: userName,
        //     password: password.value
        //     })
        // .then(res => {
        //     console.log(res);
        //     props.exitForm();
        //     history.push('/');
        // })
        // .catch(err => {
        //     console.log('hii')
        //     invalidDetailsHandler(err.response.data.message);
        // })
    }

    const invalidDetailsHandler = (message) => 
    { 
        setSignupFailedMessage({
            failed:true,
            message:message
        });
    } 

    return (
        <Auxiliary>
            <div className="form_container">
                <form >
                    <h1 id="form_title">sign up</h1>
                    <input 
                            type="text" 
                            name="userName" value={userName}
                            onFocus={() => {setUserName(userName !== 'Enter user name' ? userName : '')}}
                            onChange={e => setUserName(e.target.value)}
                        />

                    <input 
                        type={password.value !== 'Enter password' ? 'password' : 'text'}
                        name="password" 
                        value={password.value} 
                        className={password.isValid === false && password.value !== 'Enter password' ? "invalid_input" : ''}
                        onFocus={() => {setPassword({...password,value: password.value !== 'Enter password' ? password.value : ''})}}
                        onChange={e => passwordCheckHandler(e)}
                    />

                    {signupFailedMessage.failed ? <h1 className="auth_failed_text"> {signupFailedMessage.message} </h1>: null}
                    <button 
                        className="button signup_bottom" 
                        type="submit"
                        disabled={!password.isValid || userName.trim() === '' || userName.includes(' ')}
                        onClick={e => signupHandler(e)}
                        >
                            Sign Up
                    </button>
                    <p >User name must not contain white space<br/> password must contain at list 8 characters</p>
                    
                </form>
                
            </div>
            <Backdrop clicked={props.exitForm}/>
        </Auxiliary>
    );
}

export default SignupForm;