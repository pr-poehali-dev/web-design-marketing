import React from 'react';
import { Button } from "@/components/ui/button";
import { Rocket } from 'lucide-react';

const CTASection = () => {
  return (
    <section className="py-16 md:py-24 relative overflow-hidden">
      {/* Солнце */}
      <div className="absolute -top-60 left-1/2 transform -translate-x-1/2 w-96 h-96 bg-planet-saturn/30 rounded-full blur-3xl"></div>
      
      {/* Планета */}
      <div className="absolute bottom-10 right-10 w-32 h-32 bg-planet-earth/20 rounded-full blur-xl opacity-50 floating"></div>
      
      {/* Звезды */}
      {Array.from({length: 15}).map((_, i) => (
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
      
      {/* Астероиды */}
      <div className="absolute top-1/3 left-20 w-3 h-3 bg-gray-400 rounded-full opacity-30 floating" style={{animationDelay: '2s'}}></div>
      <div className="absolute bottom-1/4 right-1/3 w-2 h-2 bg-gray-500 rounded-full opacity-30 floating" style={{animationDelay: '1s'}}></div>
      
      <div className="container mx-auto px-4">
        <div className="cosmic-card p-8 md:p-12 relative overflow-hidden">
          {/* Фоновое сияние */}
          <div className="absolute inset-0 bg-gradient-to-br from-space-blue/20 via-space-purple/10 to-transparent z-0"></div>
          
          {/* Орбитальные частицы */}
          <div className="w-80 h-80 planet-orbit absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 opacity-30" style={{animationDuration: '40s'}}>
            <div className="absolute w-3 h-3 bg-primary rounded-full shadow-neon" style={{top: '0%', left: '50%', transform: 'translate(-50%, -50%)'}}></div>
          </div>
          
          <div className="w-60 h-60 planet-orbit absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 opacity-30" style={{animationDuration: '20s'}}>
            <div className="absolute w-2 h-2 bg-secondary rounded-full shadow-neon" style={{top: '0%', left: '50%', transform: 'translate(-50%, -50%)'}}></div>
          </div>
          
          <div className="relative z-10 text-center max-w-3xl mx-auto">
            {/* Космонавт */}
            <div className="w-20 h-20 mx-auto mb-6 floating">
              <img 
                src="https://cdn.iconscout.com/icon/free/png-256/free-astronaut-3-432710.png?f=webp" 
                alt="Космонавт"
                className="w-full h-full"
              />
            </div>
            
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Готовы запустить свой <span className="gradient-text">космический проект</span>?
            </h2>
            <p className="text-muted-foreground mb-8 text-lg">
              Давайте вместе создадим сайт, который будет выделяться среди миллионов других и привлекать клиентов со скоростью света
            </p>
            
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Button size="lg" className="bg-primary hover:bg-primary/90 btn-hover-effect shadow-neon">
                <Rocket className="mr-2 h-5 w-5" /> Начать проект
              </Button>
              <Button size="lg" variant="outline" className="border-primary/30 text-primary hover:bg-primary/10 btn-hover-effect">
                Посмотреть примеры работ
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
