import './Form.css'
import { Link } from 'react-router-dom'
import { useState } from 'react'

const SigninForm = () => {

    const [email,setEmail] = useState('Enter email');
    const [password,setPassword] = useState('Enter password'); 

    return (
        <div className="form_container">
            <h1 id="form_title">sign in</h1>
            <form onSubmit={()=>console.log("to change")}>
                <ul>
                    <div className="input_container">
                        <input 
                            type="text" 
                            name="email" value={email}
                            onFocus={() => {setEmail(email !== 'Enter email' ? email : '')}}
                            onChange={e => setEmail(e.target.value)}
                        />
                    </div>
                    <div className="input_container">
                        <input 
                            type="text" 
                            name="password" 
                            value={password} 
                            onFocus={() => {setPassword(password !== 'Enter password' ? password : '')}}
                            onChange={e => setPassword(e.target.value)}
                        />
                    </div>
                    <Link to="/" className="password_ret_link" >Forgot your password?</Link>
                    <button className="button" type="submit">Login</button>
                </ul>
            </form>
        </div>
    );
}

export default SigninForm;