import React from 'react';
import { Link } from 'react-router-dom';

const HeroSection = () => (
  <div className="relative overflow-hidden">
    <div className="absolute inset-0 bg-gradient-to-b from-black via-gray-900 to-black">
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0zNiAzNGM0LjQxOCAwIDgtMy41ODIgOC04cy0zLjU4Mi04LTgtOC04IDMuNTgyLTggOCAzLjU4MiA4IDggOHoiIHN0cm9rZT0iIzAwMCIgc3Ryb2tlLW9wYWNpdHk9Ii4wNSIvPjwvZz48L3N2Zz4=')] opacity-20"></div>
    </div>
    <div className="relative max-w-7xl mx-auto px-4 py-24 sm:py-32 lg:py-40">
      <div className="text-center">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 animate-fade-in">
          <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 text-transparent bg-clip-text">
            Manage Your Sports Events
          </span>
          <span className="block text-cyan-200 mt-2">Effortlessly</span>
        </h1>
        <p className="text-lg sm:text-xl max-w-2xl mx-auto mb-8 text-gray-300 font-light">
          Create, schedule, and track all your college or local community sports events in one place.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link 
            to="/create-event" 
            className="px-8 py-3 bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 text-white rounded-full hover:from-cyan-300 hover:via-blue-400 hover:to-purple-500 transition-all transform hover:scale-105 shadow-lg font-medium"
          >
            Create Event
          </Link>
          <Link 
            to="/events" 
            className="px-8 py-3 border-2 border-cyan-400 text-cyan-400 rounded-full hover:bg-cyan-400/10 transition-all transform hover:scale-105 font-medium"
          >
            Browse Events
          </Link>
        </div>
      </div>
    </div>
  </div>
);

export default HeroSection;
