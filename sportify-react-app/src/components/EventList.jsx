import React, { useState } from 'react';
import EventCard from './EventCard';

const sports = ['All', 'Football', 'Basketball', 'Volleyball', 'Cricket', 'Tennis'];

const EventList = ({ events }) => {
  const [selectedSport, setSelectedSport] = useState('All');

  const filteredEvents = selectedSport === 'All' 
    ? events 
    : events.filter(event => event.sport === selectedSport);

  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      <div className="flex flex-col items-center mb-12">
        <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 text-transparent bg-clip-text">
          Upcoming Events
        </h2>
        <div className="flex flex-wrap gap-3 justify-center">
          {sports.map((sport) => (
            <button
              key={sport}
              onClick={() => setSelectedSport(sport)}
              className={`px-6 py-2 rounded-full transition-all transform hover:scale-105 ${
                selectedSport === sport
                  ? 'bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 text-white shadow-lg'
                  : 'bg-black/40 text-cyan-300 border border-cyan-400/30 hover:bg-cyan-400/10'
              }`}
            >
              {sport}
            </button>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredEvents.map((event) => (
          <EventCard key={event.id} event={event} />
        ))}
      </div>
    </div>
  );
};

export default EventList;
