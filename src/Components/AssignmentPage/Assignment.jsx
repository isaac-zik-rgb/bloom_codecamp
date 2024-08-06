import React, {useContext, useState, useEffect} from "react";
import { useNavigate } from "react-router-dom";
import './Assignment.css';
import axios from "axios";
import { AuthContext } from "../Auth/AuthContext";


const Assignment = () => {
    const navigate = useNavigate();
    const [githubUrl, setGithubUrl] = useState('');
    const [branch, setBranch] = useState('');
    const [number, setNumber] = useState('');
    const { auth } = useContext(AuthContext);
    
    useEffect(() => {
    const numb = localStorage.getItem('number');
    if (numb) {
    setNumber(numb);
    }
    }, []);
    var token;
    token = localStorage.getItem('token');
    const dashboard = () => {
    navigate('/dashboard');
    };
    

    const handleSubmit = async (e) => {
    e.preventDefault();
    try {
        const response = await fetch('http://localhost:8080/api/assignments/', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            },
            body: JSON.stringify({ githubUrl, branch, number })
        });

    console.log('Assignment submitted:', response.data);
    if (response.status === 401) {
    localStorage.removeItem('token');
    navigate('/login');
    }
    } catch (error) {
    console.error('Error submitting assignment:', error);
    }
    };
    return (
        <div className="container">
            
           
            <header className="header">
            <div className="status">Pending Submition</div>
            <div className="text">Assignment Review App</div>
            <p className="underline"></p>
            
            </header>
            <form className="inputs">
           <div className="inputs">
          
           
            <div className="input">
            
                <input type="text" name="githuUrl" 
                id=""
                value={githubUrl}
                onChange={(e) => 
                    setGithubUrl(e.target.value)
                } 
                placeholder="Github Url"/>
            </div>
            
            <div className="input">
               <input type="text" name="branch" id=""
               value={branch}
               onChange={(e) =>
                setBranch(e.target.value)
               }
               placeholder="branch" />
            </div>
           
           </div>
          
           <div className="asst">
                <button className="submit">
                    Assignment#{localStorage.getItem('number')}
                </button>
                </div>
           <div className="submit-container">
            <div className="submit" onClick={handleSubmit}>Submit</div>
            <div className="submit" onClick={dashboard}>Back</div>
           </div>
           </form>
        </div>
    )
};

export default Assignment;