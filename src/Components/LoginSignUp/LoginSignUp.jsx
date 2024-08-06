import React, { useState, useContext } from 'react';
import { MdOutlineEmail } from "react-icons/md";
import './LoginSignUp.css'
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { AuthContext } from '../Auth/AuthContext';

const LoginSignUp = ({ history }) => {
const [username, setUsername] = useState('');
const [password, setPassword] = useState('');
const { login } = useContext(AuthContext);
const [errorMessage, setErrorMessage] = useState('');
const [action, SetAction] = useState('Login')
const navigate = useNavigate();

const handleSubmit = async (e) => {
e.preventDefault();
try {
const response = await axios.post('http://localhost:8080/api/auth/login', { username, password });
login(response.data.token);
console.log(response.data.token);
navigate('/dashboard');

} catch (error) {
console.error('Login failed', error);
setErrorMessage("Unauthorized! Invalid credentials");
setTimeout(() => {
    setErrorMessage('');
}, 5000);
}
};


    return (
        <dev className = "container">
           
            <div className='header'>
            {errorMessage && <div style={{ color: 'red', fontSize: '20px' }}> {errorMessage}</div>}
                <div className='text'>{action}</div>
                <div className='underline'></div>
            </div>
            <div className='inputs'>
                <form className='inputs'>
                <div className="input">
                    <img src="" alt="" />
                    <input type="text" placeholder='Username' 
                    name='username'
                    value={username}
                    onChange={(u) => setUsername(u.target.value)}
                    required/>
                </div>
                {action === "Login"? <div></div>: 
                <div className="input">
               <img src="" alt="" />
                <input type="email" placeholder='Email Id' />
            </div>
                
                }
                
                <div className="input">
                    <img src="" alt="" />
                    <input type="password" placeholder='Password' 
                    name='password'
                    value={password}
                    onChange={(p) => setPassword(p.target.value)}
                    required/>
                </div>
                </form>
            </div>
            {action === "Sign Up"? <div></div>:
            <div className="forgot-password">Lost Password? <span>Click Here!</span></div>
            }
            
            <div className="submit-container">
                <button type='button'
                className='btn'>
                <div className={action === "Login" ? "submit gray": "submit"} onClick={() => {SetAction("Sign Up")}}>SignUp</div>
                </button>
                <button type="button"
                    onClick={handleSubmit} className='btn'>
                        <div className={action === "Sign Up"? "submit gray": "submit"} onClick={() => {SetAction("Login")}}>
                   Login
                    </div>
                    </button>
            </div>
        </dev>
    )
}

export default LoginSignUp