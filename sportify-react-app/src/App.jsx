import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import CreateEventForm from './components/CreateEventForm';
import Login from './components/Login';

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
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-black via-gray-900 to-black font-sans">
      <Navbar />
      <main className="flex-grow">
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
        </Routes>
      </main>
      <Footer />
    </div>
  </Router>
);

export default App;
