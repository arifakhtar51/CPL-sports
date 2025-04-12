import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [isRegistering, setIsRegistering] = useState(false);
  const [registerData, setRegisterData] = useState({
    name: '',
    email: '',
    studentId: '',
    password: '',
    confirmPassword: ''
  });
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    setError('');

    // Demo login logic
    if (username === 'admin' && password === 'admin') {
      localStorage.setItem('userRole', 'admin');
      localStorage.setItem('isLoggedIn', 'true');
      navigate('/create-event');
    } else {
      setError('Invalid credentials');
    }
  };

  const handleRegister = (e) => {
    e.preventDefault();
    setError('');

    if (registerData.password !== registerData.confirmPassword) {
      setError('Passwords do not match');
      return;
    }

    // Demo registration logic
    localStorage.setItem('userRole', 'student');
    localStorage.setItem('isLoggedIn', 'true');
    localStorage.setItem('studentData', JSON.stringify(registerData));
    navigate('/');
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-black via-gray-900 to-black py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8 bg-black/40 backdrop-blur-md p-8 rounded-2xl border border-white/10 shadow-xl">
        <div>
          <h2 className="mt-6 text-center text-3xl font-extrabold bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 text-transparent bg-clip-text">
            {isRegistering ? 'Student Registration' : 'Login to CPL Sports T11'}
          </h2>
        </div>

        {!isRegistering ? (
          <form className="mt-8 space-y-6" onSubmit={handleLogin}>
            <div className="rounded-md shadow-sm space-y-4">
              <div>
                <label htmlFor="username" className="sr-only">Username</label>
                <input
                  id="username"
                  name="username"
                  type="text"
                  required
                  className="appearance-none rounded-lg relative block w-full px-3 py-2 border border-cyan-400/30 bg-black/40 placeholder-gray-400 text-white focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                  placeholder="Username"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                />
              </div>
              <div>
                <label htmlFor="password" className="sr-only">Password</label>
                <input
                  id="password"
                  name="password"
                  type="password"
                  required
                  className="appearance-none rounded-lg relative block w-full px-3 py-2 border border-cyan-400/30 bg-black/40 placeholder-gray-400 text-white focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                  placeholder="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
            </div>

            {error && (
              <div className="text-red-500 text-sm text-center">{error}</div>
            )}

            <div>
              <button
                type="submit"
                className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-lg text-white bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 hover:from-cyan-300 hover:via-blue-400 hover:to-purple-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-cyan-500"
              >
                Sign in
              </button>
            </div>

            <div className="text-center">
              <button
                type="button"
                onClick={() => setIsRegistering(true)}
                className="text-cyan-400 hover:text-cyan-300"
              >
                New student? Register here
              </button>
            </div>
          </form>
        ) : (
          <form className="mt-8 space-y-6" onSubmit={handleRegister}>
            <div className="rounded-md shadow-sm space-y-4">
              <div>
                <input
                  type="text"
                  required
                  className="appearance-none rounded-lg relative block w-full px-3 py-2 border border-cyan-400/30 bg-black/40 placeholder-gray-400 text-white focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                  placeholder="Full Name"
                  value={registerData.name}
                  onChange={(e) => setRegisterData({...registerData, name: e.target.value})}
                />
              </div>
              <div>
                <input
                  type="email"
                  required
                  className="appearance-none rounded-lg relative block w-full px-3 py-2 border border-cyan-400/30 bg-black/40 placeholder-gray-400 text-white focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                  placeholder="Email"
                  value={registerData.email}
                  onChange={(e) => setRegisterData({...registerData, email: e.target.value})}
                />
              </div>
              <div>
                <input
                  type="text"
                  required
                  className="appearance-none rounded-lg relative block w-full px-3 py-2 border border-cyan-400/30 bg-black/40 placeholder-gray-400 text-white focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                  placeholder="Student ID"
                  value={registerData.studentId}
                  onChange={(e) => setRegisterData({...registerData, studentId: e.target.value})}
                />
              </div>
              <div>
                <input
                  type="password"
                  required
                  className="appearance-none rounded-lg relative block w-full px-3 py-2 border border-cyan-400/30 bg-black/40 placeholder-gray-400 text-white focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                  placeholder="Password"
                  value={registerData.password}
                  onChange={(e) => setRegisterData({...registerData, password: e.target.value})}
                />
              </div>
              <div>
                <input
                  type="password"
                  required
                  className="appearance-none rounded-lg relative block w-full px-3 py-2 border border-cyan-400/30 bg-black/40 placeholder-gray-400 text-white focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                  placeholder="Confirm Password"
                  value={registerData.confirmPassword}
                  onChange={(e) => setRegisterData({...registerData, confirmPassword: e.target.value})}
                />
              </div>
            </div>

            {error && (
              <div className="text-red-500 text-sm text-center">{error}</div>
            )}

            <div>
              <button
                type="submit"
                className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-lg text-white bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 hover:from-cyan-300 hover:via-blue-400 hover:to-purple-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-cyan-500"
              >
                Register
              </button>
            </div>

            <div className="text-center">
              <button
                type="button"
                onClick={() => setIsRegistering(false)}
                className="text-cyan-400 hover:text-cyan-300"
              >
                Already have an account? Login here
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
};

export default Login; 