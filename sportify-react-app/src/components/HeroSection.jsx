import React from 'react';
import { Link } from 'react-router-dom';

const HeroSection = () => {
  return (
    <div className="relative py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600">
            Manage Your Sports Events
            <br />
            <span className="text-5xl sm:text-6xl md:text-7xl">Effortlessly</span>
          </h1>
          <p className="text-lg sm:text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Create, schedule, and track all your college or local community sports events in one place.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link
              to="/create-event"
              className="px-8 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-lg hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-cyan-500/50"
            >
              Create Event
            </Link>
            <Link
              to="/"
              className="px-8 py-3 bg-transparent border-2 border-cyan-500 text-cyan-400 font-semibold rounded-lg hover:bg-cyan-500/10 transition-all duration-300 transform hover:scale-105"
            >
              Browse Events
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
