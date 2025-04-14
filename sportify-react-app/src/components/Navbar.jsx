import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();
  const isLoggedIn = localStorage.getItem('isLoggedIn') === 'true';
  const userRole = localStorage.getItem('userRole');

  const handleLogout = () => {
    localStorage.removeItem('isLoggedIn');
    localStorage.removeItem('userRole');
    localStorage.removeItem('userData');
    navigate('/login');
  };

  return (
    <nav className="relative z-10 px-4 py-3">
      <div className="max-w-7xl mx-auto">
        <div className="bg-black/40 backdrop-blur-md rounded-full border border-white/10 shadow-lg">
          <div className="px-6 py-3">
            <div className="flex items-center justify-between">
              <Link to="/" className="text-2xl font-bold bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 text-transparent bg-clip-text hover:from-cyan-300 hover:via-blue-400 hover:to-purple-500 transition-all">
                CPL Sports T11
              </Link>
              
              {/* Desktop Navigation */}
              <div className="hidden md:flex items-center space-x-1">
                <Link to="/" className="px-4 py-2 text-cyan-300 hover:text-cyan-200 rounded-full transition-colors font-medium">
                  Home
                </Link>
                {isLoggedIn && (
                  <Link to="/dashboard" className="px-4 py-2 text-blue-300 hover:text-blue-200 rounded-full transition-colors font-medium">
                    Dashboard
                  </Link>
                )}
                {isLoggedIn && userRole === 'admin' && (
                  <Link 
                    to="/create-event" 
                    className="ml-2 px-6 py-2 bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 text-white rounded-full hover:from-cyan-300 hover:via-blue-400 hover:to-purple-500 transition-all transform hover:scale-105 shadow-lg font-medium"
                  >
                    Create Event
                  </Link>
                )}
                {!isLoggedIn ? (
                  <Link 
                    to="/login" 
                    className="ml-2 px-6 py-2 bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 text-white rounded-full hover:from-cyan-300 hover:via-blue-400 hover:to-purple-500 transition-all transform hover:scale-105 shadow-lg font-medium"
                  >
                    Login
                  </Link>
                ) : (
                  <button
                    onClick={handleLogout}
                    className="ml-2 px-6 py-2 bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 text-white rounded-full hover:from-cyan-300 hover:via-blue-400 hover:to-purple-500 transition-all transform hover:scale-105 shadow-lg font-medium"
                  >
                    Logout
                  </button>
                )}
              </div>

              {/* Mobile Menu Button */}
              <button 
                className="md:hidden text-white focus:outline-none"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  {isMenuOpen ? (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  ) : (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                  )}
                </svg>
              </button>
            </div>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div className="md:hidden px-4 py-3 border-t border-white/10">
              <div className="flex flex-col space-y-2">
                <Link 
                  to="/" 
                  className="px-4 py-2 text-cyan-300 hover:bg-cyan-500/10 rounded-full transition-colors font-medium"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Home
                </Link>
                {isLoggedIn && (
                  <Link 
                    to="/dashboard" 
                    className="px-4 py-2 text-blue-300 hover:bg-blue-500/10 rounded-full transition-colors font-medium"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Dashboard
                  </Link>
                )}
                {isLoggedIn && userRole === 'admin' && (
                  <Link 
                    to="/create-event" 
                    className="px-4 py-2 bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 text-white rounded-full hover:from-cyan-300 hover:via-blue-400 hover:to-purple-500 transition-all font-medium"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Create Event
                  </Link>
                )}
                {!isLoggedIn ? (
                  <Link 
                    to="/login" 
                    className="px-4 py-2 bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 text-white rounded-full hover:from-cyan-300 hover:via-blue-400 hover:to-purple-500 transition-all font-medium"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Login
                  </Link>
                ) : (
                  <button
                    onClick={() => {
                      handleLogout();
                      setIsMenuOpen(false);
                    }}
                    className="px-4 py-2 bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 text-white rounded-full hover:from-cyan-300 hover:via-blue-400 hover:to-purple-500 transition-all font-medium"
                  >
                    Logout
                  </button>
                )}
              </div>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
