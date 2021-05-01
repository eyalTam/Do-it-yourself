import './Form.css'
import { useContext } from 'react'
import { AuthenticationContext } from '../../../Context/AuthContext/AuthContext'
import { useState } from 'react'
import { useHistory } from "react-router-dom"
import { Auxiliary } from '../../Auxiliary/Auxiliary'
import  Backdrop from '../Backdrop/Backdrop' 
import axios from 'axios'

const SigninForm = props => {

    const authContext = useContext(AuthenticationContext);

    const history = useHistory();

    const [userName, setUserName] = useState('Enter user name');
    const [password, setPassword] = useState('Enter password');
    const [alert, setAlert] = useState('');

    const loginHandler = (e) => {
        authContext.signin(userName);
        props.exitForm();
        history.push('/');
        // e.preventDefault();
        // axios.post(`http://localhost:3001/login`,{
        //     headers: {
        //         'Content-type': 'application/json'
        //     }, 
        //     userName:userName,
        //     password:password
        //     })
        // .then(resData => {
        //     localStorage.setItem('token', resData.data.token);
        //     localStorage.setItem('userId', resData.data.userId);
        //     const remainingMilliseconds = 60 * 60 * 1000;
        //     const expiryDate = new Date(
        //       new Date().getTime() + remainingMilliseconds
        //     );
        //     localStorage.setItem('expiryDate', expiryDate.toISOString());
        //     authContext.signin(userName);
        //     props.exitForm();
        //     history.push('/');
        // })
        // .catch(err => {
        //     setAlert(err.response.data.message);
        // });
    }

    
    return (
        <Auxiliary>
            <div className="form_container">
                <h1 id="form_title">sign in</h1>
                <form>
            
                    <input 
                        type="text" 
                        name="email" value={userName}
                        onFocus={() => {setUserName(userName !== 'Enter user name' ? userName : '')}}
                        onChange={e => setUserName(e.target.value)}
                    />
            
                    <input 
                        type={password !== 'Enter password' ? 'password' : 'text'} 
                        name="password" 
                        value={password} 
                        onFocus={() => {setPassword(password !== 'Enter password' ? password : '')}}
                        onChange={e => setPassword(e.target.value)}
                    />
                    <h1 className="auth_failed_text"> {alert} </h1>
                    {/* <Link to="/" className="password_ret_link" >Forgot your password?</Link> */}
                    <button 
                        className="button" 
                        onClick={event => loginHandler(event)}>
                            Login
                    </button>
                </form>
            </div>
            <Backdrop clicked={props.exitForm} />
        </Auxiliary>
    )
}

export default SigninForm;