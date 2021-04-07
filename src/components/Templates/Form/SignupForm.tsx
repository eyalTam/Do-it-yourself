import './Form.css'
import { useState } from 'react'

const SignupForm = () => {

    const [email,setEmail] = useState('Enter email');
    const [password,setPassword] = useState('Enter password'); 
    const [conifrmPassword,setConifrmPassword] = useState('Conifrm password');

    return (
        <div className="form_container">
            <form onSubmit={()=>console.log("to change")}>
                <ul>
                    <input 
                            type="text" 
                            name="email" value={email}
                            onFocus={() => {setEmail(email !== 'Enter email' ? email : '')}}
                            onChange={e => setEmail(e.target.value)}
                        />
                    <div className="input_container">
                        <input 
                            type="text" 
                            name="password" 
                            value={password} 
                            onFocus={() => {setPassword(password !== 'Enter password' ? password : '')}}
                            onChange={e => setPassword(e.target.value)}
                        />
                    </div>
                    <div className="input_container">
                        <input 
                            type="text" 
                            name="conifrm-password" 
                            value={conifrmPassword} 
                            onFocus={() => {setConifrmPassword(conifrmPassword !== 'Conifrm password' ? password : '')}}
                            onChange={e => setConifrmPassword(e.target.value)}
                        />
                    </div>
                    <button className="button signup_bottom" type="submit">Sign Up</button>
                </ul>
            </form>
        </div>
    );
}

export default SignupForm;