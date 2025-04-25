import React from 'react';

interface StarProps {
  count?: number;
}

/**
 * Компонент для создания космического фона со звездами
 */
const CosmicBackground: React.FC<StarProps> = ({ count = 10 }) => {
  return (
    <div className="absolute inset-0 overflow-hidden">
      {/* Солнце */}
      <div className="absolute -top-20 right-1/4 w-64 h-64 bg-planet-saturn/30 rounded-full blur-3xl"></div>
      
      {/* Орбитальная линия */}
      <div className="w-[140%] h-[140%] absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 border border-primary/5 rounded-full"></div>
      <div className="w-[120%] h-[120%] absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 border border-primary/10 rounded-full"></div>
      
      {/* Планеты */}
      <div className="absolute -top-10 -left-10 w-32 h-32 bg-planet-earth/20 rounded-full blur-xl opacity-50 floating" style={{animationDelay: '1s'}}></div>
      <div className="absolute bottom-20 right-20 w-40 h-40 bg-planet-mars/10 rounded-full blur-xl opacity-30 floating" style={{animationDelay: '2s'}}></div>
      
      {/* Звезды */}
      {Array.from({length: count}).map((_, i) => (
        <div 
          key={i}
          className="star"
          style={{
            width: `${Math.random() * 2 + 1}px`, 
            height: `${Math.random() * 2 + 1}px`,
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
            animationDelay: `${Math.random() * 5}s`
          }}
        ></div>
      ))}
    </div>
  );
};

export default CosmicBackground;
