import React, { useState } from 'react';
import { MdOutlineEmail } from "react-icons/md";
import './LoginSignUp.css'
import { useNavigate } from 'react-router-dom';
// import { useAuth } from '../Auth/AuthContext';
const LoginSignUp = () => {

    const [action,SetAction] = useState("Login");

    // login fiunctionality
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const [errorMessage, setErrorMessage] = useState("");

    const navigate = useNavigate();
    //get the login function from AuthContext
    // const { login }  = useAuth();
    // function to handle login request

    const handleSubmit = async (e) => {
        e.preventDefault();

    const user = {
        username,
        password,
    };

    try {
        const response = await fetch("http://localhost:8080/api/auth/login", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(user),
        });
        if (response.status === 401){
            //set the error message
            setErrorMessage('Unauthorized: Invalid credentials');

            // clear the error message afeter 10 seconds
            setTimeout(() => {
                setErrorMessage('');
            }, 5000);
            return;
        }
        if (response.ok){
            const data = await response.json();
            console.log(data.token);
            localStorage.setItem("token", data.token);
            // login();
            navigate('/dashboard');
            
        }else {
            console.log(response);
        }
    }catch(error) {
        console.log(error);
       
        
    }
    }

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