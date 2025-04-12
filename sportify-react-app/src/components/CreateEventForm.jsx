import React, { useState } from 'react';

const CreateEventForm = () => {
  const [form, setForm] = useState({
    name: '',
    venue: '',
    date: '',
    sport: '',
    description: '',
    maxParticipants: '',
    registrationDeadline: '',
    contactEmail: ''
  });

  const sports = ['Football', 'Basketball', 'Cricket', 'Tennis', 'Swimming', 'Volleyball'];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Event Created:', form);
    alert('Event Created Successfully!');
  };

  return (
    <div className="min-h-screen py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-2xl mx-auto">
        <div className="bg-purple-900/50 backdrop-blur-sm shadow-xl rounded-lg overflow-hidden border border-purple-700/30">
          <div className="px-6 py-8">
            <h2 className="text-3xl font-bold text-center text-white mb-8">Create New Event</h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-purple-100">Event Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  className="mt-1 block w-full rounded-md border-purple-700 bg-purple-800/50 text-white shadow-sm focus:border-purple-500 focus:ring-purple-500"
                  placeholder="Enter event name"
                  required
                />
              </div>

              <div>
                <label htmlFor="sport" className="block text-sm font-medium text-purple-100">Sport</label>
                <select
                  id="sport"
                  name="sport"
                  value={form.sport}
                  onChange={handleChange}
                  className="mt-1 block w-full rounded-md border-purple-700 bg-purple-800/50 text-white shadow-sm focus:border-purple-500 focus:ring-purple-500"
                  required
                >
                  <option value="">Select a sport</option>
                  {sports.map(sport => (
                    <option key={sport} value={sport}>{sport}</option>
                  ))}
                </select>
              </div>

              <div>
                <label htmlFor="venue" className="block text-sm font-medium text-purple-100">Venue</label>
                <input
                  type="text"
                  id="venue"
                  name="venue"
                  value={form.venue}
                  onChange={handleChange}
                  className="mt-1 block w-full rounded-md border-purple-700 bg-purple-800/50 text-white shadow-sm focus:border-purple-500 focus:ring-purple-500"
                  placeholder="Enter venue"
                  required
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="date" className="block text-sm font-medium text-purple-100">Event Date</label>
                  <input
                    type="date"
                    id="date"
                    name="date"
                    value={form.date}
                    onChange={handleChange}
                    className="mt-1 block w-full rounded-md border-purple-700 bg-purple-800/50 text-white shadow-sm focus:border-purple-500 focus:ring-purple-500"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="registrationDeadline" className="block text-sm font-medium text-purple-100">Registration Deadline</label>
                  <input
                    type="date"
                    id="registrationDeadline"
                    name="registrationDeadline"
                    value={form.registrationDeadline}
                    onChange={handleChange}
                    className="mt-1 block w-full rounded-md border-purple-700 bg-purple-800/50 text-white shadow-sm focus:border-purple-500 focus:ring-purple-500"
                    required
                  />
                </div>
              </div>

              <div>
                <label htmlFor="maxParticipants" className="block text-sm font-medium text-purple-100">Maximum Participants</label>
                <input
                  type="number"
                  id="maxParticipants"
                  name="maxParticipants"
                  value={form.maxParticipants}
                  onChange={handleChange}
                  className="mt-1 block w-full rounded-md border-purple-700 bg-purple-800/50 text-white shadow-sm focus:border-purple-500 focus:ring-purple-500"
                  placeholder="Enter maximum number of participants"
                  min="1"
                  required
                />
              </div>

              <div>
                <label htmlFor="contactEmail" className="block text-sm font-medium text-purple-100">Contact Email</label>
                <input
                  type="email"
                  id="contactEmail"
                  name="contactEmail"
                  value={form.contactEmail}
                  onChange={handleChange}
                  className="mt-1 block w-full rounded-md border-purple-700 bg-purple-800/50 text-white shadow-sm focus:border-purple-500 focus:ring-purple-500"
                  placeholder="Enter contact email"
                  required
                />
              </div>

              <div>
                <label htmlFor="description" className="block text-sm font-medium text-purple-100">Description</label>
                <textarea
                  id="description"
                  name="description"
                  value={form.description}
                  onChange={handleChange}
                  rows="4"
                  className="mt-1 block w-full rounded-md border-purple-700 bg-purple-800/50 text-white shadow-sm focus:border-purple-500 focus:ring-purple-500"
                  placeholder="Enter event description"
                  required
                />
              </div>

              <div>
                <button
                  type="submit"
                  className="w-full flex justify-center py-3 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-purple-600 hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500 transition-colors"
                >
                  Create Event
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreateEventForm;
