import React, {useState} from "react";
import { useNavigate } from "react-router-dom";
import './Dashboard.css'
import Cards from "./Card";

const Dashboard = () => {
    const navigate = useNavigate();
    var count = 0;
    const handleSubmit = () => {
        navigate("/assignments");
      
        count = localStorage.getItem('number');
        if (count == null) {
            count+=1;
            localStorage.setItem('number', count)
        }
    }
    return (
        <div className="container">
        <header className="header">
           <h2 >Welcome To Learner's DashBoard</h2>
           <p className="underline"></p>
           
           <div className="submit"> 
            <button type="button" className="btn" style={{fontSize: '19px', color: '#fff', cursor: 'pointer' }}
            onClick={handleSubmit}>Create Assignment</button>
            </div> 
            </header>
            <div className="wrapper">
            <div className="submitted">
                <Cards />

            </div>
         
            </div>
          
           
        
        </div>
    )
};

export default Dashboard;