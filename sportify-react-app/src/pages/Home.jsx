import React from 'react';
import HeroSection from '../components/HeroSection';
import EventList from '../components/EventList';

const sampleEvents = [
  {
    id: 1,
    name: 'Inter-College Football Championship',
    venue: 'University Sports Complex',
    date: '2025-04-30',
    sport: 'Football',
    participants: 24,
    description: 'Annual inter-college football championship featuring top teams from across the state.'
  },
  {
    id: 2,
    name: 'Basketball Knockout Tournament',
    venue: 'Indoor Sports Arena',
    date: '2025-05-02',
    sport: 'Basketball',
    participants: 16,
    description: 'Single elimination basketball tournament with cash prizes for top teams.'
  },
  {
    id: 3,
    name: 'Cricket Premier League',
    venue: 'City Cricket Ground',
    date: '2025-05-10',
    sport: 'Cricket',
    participants: 8,
    description: 'T20 cricket tournament featuring local clubs and college teams.'
  },
  {
    id: 4,
    name: 'Tennis Open Championship',
    venue: 'Tennis Club Courts',
    date: '2025-05-15',
    sport: 'Tennis',
    participants: 32,
    description: 'Open tennis championship for both singles and doubles categories.'
  },
  {
    id: 5,
    name: 'Volleyball League',
    venue: 'Sports Hall',
    date: '2025-05-25',
    sport: 'Volleyball',
    participants: 12,
    description: 'League format volleyball tournament with round-robin matches.'
  }
];

const Home = () => (
  <div>
    <HeroSection />
    <div className="py-12">
      <EventList events={sampleEvents} />
    </div>
  </div>
);

export default Home;
