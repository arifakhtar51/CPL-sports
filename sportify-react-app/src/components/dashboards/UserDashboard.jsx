import React from 'react';

const UserDashboard = () => {
  const userData = JSON.parse(localStorage.getItem('userData') || '{}');

  return (
    <div className="min-h-screen bg-gradient-to-b from-black via-gray-900 to-black py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="bg-black/40 backdrop-blur-md rounded-2xl border border-white/10 shadow-xl p-8">
          <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 text-transparent bg-clip-text">
            Player Dashboard
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-black/40 p-6 rounded-xl border border-cyan-400/30">
              <h3 className="text-xl font-semibold text-cyan-300 mb-4">Profile Information</h3>
              <div className="space-y-3">
                <p className="text-gray-300"><span className="text-cyan-400">Name:</span> {userData.name}</p>
                <p className="text-gray-300"><span className="text-cyan-400">Email:</span> {userData.email}</p>
                <p className="text-gray-300"><span className="text-cyan-400">Player ID:</span> {userData.id}</p>
                <p className="text-gray-300"><span className="text-cyan-400">Role:</span> Player</p>
              </div>
            </div>

            <div className="bg-black/40 p-6 rounded-xl border border-blue-400/30">
              <h3 className="text-xl font-semibold text-blue-300 mb-4">Registered Events</h3>
              <div className="space-y-3">
                <p className="text-gray-300">No events registered yet.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserDashboard; 