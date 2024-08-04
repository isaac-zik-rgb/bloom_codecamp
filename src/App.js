import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LoginSignUp from './Components/LoginSignUp/LoginSignUp';
import Dashboard from './Components/LearnerDashBoard/Dashboard';
// import  PrivateRoute from './Components/Auth/PrivateRoute';
// import { AuthProvider } from './Components/Auth/AuthContext';
function App() {
  return (
    
    <Router>
      <Routes>
        <Route path='/login' element={<LoginSignUp />}/>
        <Route path='/dashboard' element={<Dashboard />}/>
      </Routes>
    </Router>
    
  );
}

export default App;
