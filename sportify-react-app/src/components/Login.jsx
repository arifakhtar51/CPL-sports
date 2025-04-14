import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [isRegistering, setIsRegistering] = useState(false);
  const [selectedRole, setSelectedRole] = useState('player');
  const [registerData, setRegisterData] = useState({
    name: '',
    email: '',
    id: '',
    role: 'player',
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
    } else if (username === 'coach' && password === 'coach') {
      localStorage.setItem('userRole', 'coach');
      localStorage.setItem('isLoggedIn', 'true');
      navigate('/');
    } else if (username === 'player' && password === 'player') {
      localStorage.setItem('userRole', 'player');
      localStorage.setItem('isLoggedIn', 'true');
      navigate('/');
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
    localStorage.setItem('userRole', registerData.role);
    localStorage.setItem('isLoggedIn', 'true');
    localStorage.setItem('userData', JSON.stringify(registerData));
    navigate('/');
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-black via-gray-900 to-black py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8 bg-black/40 backdrop-blur-md p-8 rounded-2xl border border-white/10 shadow-xl">
        <div>
          <h2 className="mt-6 text-center text-3xl font-extrabold bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 text-transparent bg-clip-text">
            {isRegistering ? 'Register to CPL Sports T11' : 'Login to CPL Sports T11'}
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
                New user? Register here
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
                  placeholder={selectedRole === 'player' ? 'Player ID' : 'Coach ID'}
                  value={registerData.id}
                  onChange={(e) => setRegisterData({...registerData, id: e.target.value})}
                />
              </div>
              <div className="flex space-x-4">
                <button
                  type="button"
                  onClick={() => {
                    setSelectedRole('player');
                    setRegisterData({...registerData, role: 'player'});
                  }}
                  className={`flex-1 px-4 py-2 rounded-lg border ${
                    selectedRole === 'player'
                      ? 'bg-cyan-500/20 border-cyan-400 text-cyan-300'
                      : 'border-cyan-400/30 text-cyan-400 hover:bg-cyan-500/10'
                  }`}
                >
                  Player
                </button>
                <button
                  type="button"
                  onClick={() => {
                    setSelectedRole('coach');
                    setRegisterData({...registerData, role: 'coach'});
                  }}
                  className={`flex-1 px-4 py-2 rounded-lg border ${
                    selectedRole === 'coach'
                      ? 'bg-blue-500/20 border-blue-400 text-blue-300'
                      : 'border-blue-400/30 text-blue-400 hover:bg-blue-500/10'
                  }`}
                >
                  Coach
                </button>
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