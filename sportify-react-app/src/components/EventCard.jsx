import React from 'react';
import { Link } from 'react-router-dom';

const EventCard = ({ event }) => (
  <div className="bg-black/40 backdrop-blur-sm rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border border-white/10">
    <div className="relative h-48 bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600">
      <div className="absolute inset-0 bg-black opacity-20"></div>
      <div className="absolute bottom-4 left-4 right-4">
        <h3 className="text-2xl font-bold text-white">{event.name}</h3>
        <p className="text-cyan-200">{event.sport}</p>
      </div>
    </div>
    
    <div className="p-6">
      <div className="flex items-center text-cyan-300 mb-4">
        <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
        <span className="font-medium">{event.venue}</span>
      </div>
      
      <div className="flex items-center text-blue-300 mb-4">
        <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
        </svg>
        <span className="font-medium">{event.date}</span>
      </div>

      <div className="flex items-center justify-between">
        <div className="flex items-center">
          <svg className="w-5 h-5 mr-2 text-purple-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
          </svg>
          <span className="text-purple-300 font-medium">{event.participants} participants</span>
        </div>
        <Link 
          to={`/events/${event.id}`}
          className="px-4 py-2 bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 text-white rounded-full hover:from-cyan-300 hover:via-blue-400 hover:to-purple-500 transition-all transform hover:scale-105 shadow-md font-medium"
        >
          View Details
        </Link>
      </div>
    </div>
  </div>
);

export default EventCard;
