import React from 'react';
import { Button } from "@/components/ui/button";
import { ArrowRight, BarChart2, Rocket, Code } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative pt-24 pb-16 md:pt-32 md:pb-24 overflow-hidden">
      {/* Космические элементы */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        {/* Планета */}
        <div className="absolute -top-20 -right-20 w-64 h-64 md:w-96 md:h-96 rounded-full bg-planet-earth/20 opacity-70 backdrop-blur-3xl floating"></div>
        
        {/* Астероиды */}
        <div className="absolute top-1/4 left-10 w-4 h-4 bg-gray-500 rounded-full opacity-60 animate-float" style={{animationDelay: '1s'}}></div>
        <div className="absolute bottom-1/3 right-1/4 w-3 h-3 bg-gray-400 rounded-full opacity-50 animate-float" style={{animationDelay: '2s'}}></div>
        
        {/* Звезды */}
        {Array.from({length: 5}).map((_, i) => (
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

      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col md:flex-row md:items-center">
          <div className="md:w-1/2 mb-10 md:mb-0 md:pr-8">
            <div className="absolute -top-4 -left-10 w-20 h-20 bg-primary/10 rounded-full blur-2xl"></div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Запускаем ваш бизнес в <span className="gradient-text">цифровую галактику</span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-lg">
              Мы создаем веб-проекты, которые работают как точно настроенные космические аппараты – привлекают посетителей и превращают их в клиентов
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="bg-primary hover:bg-primary/90 btn-hover-effect">
                Начать проект <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <Button size="lg" variant="outline" className="border-primary/30 text-primary hover:bg-primary/10 btn-hover-effect">
                Исследовать кейсы
              </Button>
            </div>
            <div className="flex items-center mt-8 text-sm text-muted-foreground">
              <span className="mr-2">🚀</span>
              <span>Более 100+ успешных запусков за 5 лет работы</span>
            </div>
          </div>
          <div className="md:w-1/2 relative">
            <div className="absolute -bottom-10 -right-10 w-32 h-32 bg-secondary/10 rounded-full blur-3xl"></div>
            <div className="cosmic-card p-6 relative overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1581822261290-991b38693d1b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                alt="Космический веб-дизайн" 
                className="w-full rounded-lg shadow-lg floating"
              />
              
              <div className="absolute -top-4 -right-4 cosmic-card p-3 animate-fade-in">
                <div className="flex items-center">
                  <BarChart2 className="w-5 h-5 text-primary mr-2" />
                  <span className="font-bold text-sm">Конверсия до 60%</span>
                </div>
              </div>
              
              <div className="absolute top-1/2 -left-4 cosmic-card p-3 animate-fade-in" style={{animationDelay: '0.2s'}}>
                <div className="flex items-center">
                  <Rocket className="w-5 h-5 text-secondary mr-2" />
                  <span className="font-bold text-sm">SEO продвижение</span>
                </div>
              </div>
              
              <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 cosmic-card p-3 animate-fade-in" style={{animationDelay: '0.4s'}}>
                <div className="flex items-center">
                  <Code className="w-5 h-5 text-primary mr-2" />
                  <span className="font-bold text-sm">Космические технологии</span>
                </div>
              </div>
              
              {/* Орбитальная частица */}
              <div className="w-60 h-60 planet-orbit absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2" style={{animationDuration: '30s'}}>
                <div className="absolute w-3 h-3 bg-secondary rounded-full shadow-neon" style={{top: '0%', left: '50%', transform: 'translate(-50%, -50%)'}}></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
