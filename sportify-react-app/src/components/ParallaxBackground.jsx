import React, { useEffect, useState } from 'react';

const ParallaxBackground = () => {
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setOffset(window.pageYOffset);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="fixed inset-0 -z-10 w-full h-full overflow-hidden">
      {/* Base background image with reduced brightness */}
      <div 
        className="absolute inset-0 w-full h-full bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: 'url(/bg1.png)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          transform: `translateY(${offset * 0.2}px)`,
          transition: 'transform 0.1s ease-out'
        }}
      />
      {/* Dark overlay with parallax effect */}
      <div 
        className="absolute inset-0 w-full h-full bg-gradient-to-b from-black/70 via-black/50 to-black/70"
        style={{
          transform: `translateY(${offset * 0.1}px)`,
          transition: 'transform 0.1s ease-out'
        }}
      />
      {/* Side gradient overlay */}
      <div 
        className="absolute inset-0 w-full h-full bg-gradient-to-r from-black/60 via-transparent to-black/60"
        style={{
          transform: `translateY(${offset * 0.05}px)`,
          transition: 'transform 0.1s ease-out'
        }}
      />
    </div>
  );
};

export default ParallaxBackground; 