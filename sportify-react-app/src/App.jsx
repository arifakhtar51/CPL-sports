import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import CreateEventForm from './components/CreateEventForm';
import Login from './components/Login';
import UserDashboard from './components/dashboards/UserDashboard';
import AdminDashboard from './components/dashboards/AdminDashboard';
import CoachDashboard from './components/dashboards/CoachDashboard';
import ParallaxBackground from './components/ParallaxBackground';

const PrivateRoute = ({ children, requiredRole }) => {
  const isLoggedIn = localStorage.getItem('isLoggedIn') === 'true';
  const userRole = localStorage.getItem('userRole');

  if (!isLoggedIn) {
    return <Navigate to="/login" />;
  }

  if (requiredRole && userRole !== requiredRole) {
    return <Navigate to="/" />;
  }

  return children;
};

const App = () => (
  <Router>
    <div className="min-h-screen w-full flex flex-col font-sans relative">
      <ParallaxBackground />
      <div className="relative z-10 w-full">
        <Navbar />
        <main className="flex-grow w-full">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route 
              path="/create-event" 
              element={
                <PrivateRoute requiredRole="admin">
                  <CreateEventForm />
                </PrivateRoute>
              } 
            />
            <Route 
              path="/dashboard" 
              element={
                <PrivateRoute>
                  {localStorage.getItem('userRole') === 'admin' ? (
                    <AdminDashboard />
                  ) : localStorage.getItem('userRole') === 'coach' ? (
                    <CoachDashboard />
                  ) : (
                    <UserDashboard />
                  )}
                </PrivateRoute>
              } 
            />
          </Routes>
        </main>
        <Footer />
      </div>
    </div>
  </Router>
);

export default App;
