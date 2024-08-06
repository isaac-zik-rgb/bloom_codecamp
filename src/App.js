import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LoginSignUp from './Components/LoginSignUp/LoginSignUp';
import Dashboard from './Components/LearnerDashBoard/Dashboard';
import { AuthProvider } from './Components/Auth/AuthContext';
import ProtectedRoute from './Components/Auth/ProtectedRoute';
import Assignment from './Components/AssignmentPage/Assignment';


function App() {
  return (
    <AuthProvider>
    <Router>
    <Routes>
    <Route path="/login" element={<LoginSignUp />} />
    <Route 
    path="/dashboard" 
    element={
    <ProtectedRoute>
    <Dashboard />
    </ProtectedRoute>
    
    } 
    />
    <Route
    path="/assignments"
    element={
      <ProtectedRoute>
        <Assignment />
      </ProtectedRoute>
    }
    />
    </Routes>
    </Router>
    </AuthProvider>
    );
}

export default App;
