import React, { useState } from 'react';

const AdminDashboard = () => {
  const [users, setUsers] = useState([
    {
      id: 'P001',
      name: 'John Doe',
      email: 'john@example.com',
      role: 'player',
      registrationDate: '2024-04-12'
    },
    {
      id: 'C001',
      name: 'Jane Smith',
      email: 'jane@example.com',
      role: 'coach',
      registrationDate: '2024-04-11'
    }
  ]);

  return (
    <div className="min-h-screen bg-gradient-to-b from-black via-gray-900 to-black py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="bg-black/40 backdrop-blur-md rounded-2xl border border-white/10 shadow-xl p-8">
          <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 text-transparent bg-clip-text">
            Admin Dashboard
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <div className="bg-black/40 p-6 rounded-xl border border-cyan-400/30">
              <h3 className="text-xl font-semibold text-cyan-300 mb-2">Total Users</h3>
              <p className="text-4xl font-bold text-cyan-400">{users.length}</p>
            </div>
            <div className="bg-black/40 p-6 rounded-xl border border-blue-400/30">
              <h3 className="text-xl font-semibold text-blue-300 mb-2">Players</h3>
              <p className="text-4xl font-bold text-blue-400">{users.filter(u => u.role === 'player').length}</p>
            </div>
            <div className="bg-black/40 p-6 rounded-xl border border-purple-400/30">
              <h3 className="text-xl font-semibold text-purple-300 mb-2">Coaches</h3>
              <p className="text-4xl font-bold text-purple-400">{users.filter(u => u.role === 'coach').length}</p>
            </div>
          </div>

          <div className="bg-black/40 p-6 rounded-xl border border-white/10">
            <h3 className="text-xl font-semibold text-white mb-4">All Registrations</h3>
            <div className="overflow-x-auto">
              <table className="min-w-full">
                <thead>
                  <tr className="border-b border-white/10">
                    <th className="px-6 py-3 text-left text-xs font-medium text-cyan-400 uppercase tracking-wider">ID</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-cyan-400 uppercase tracking-wider">Name</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-cyan-400 uppercase tracking-wider">Email</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-cyan-400 uppercase tracking-wider">Role</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-cyan-400 uppercase tracking-wider">Registration Date</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-white/10">
                  {users.map((user) => (
                    <tr key={user.id} className="hover:bg-white/5">
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-300">{user.id}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-300">{user.name}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-300">{user.email}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm">
                        <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
                          user.role === 'player' 
                            ? 'bg-cyan-500/20 text-cyan-300' 
                            : 'bg-blue-500/20 text-blue-300'
                        }`}>
                          {user.role}
                        </span>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-300">{user.registrationDate}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard; 