import React from 'react';
import { Rocket, BarChart2, Zap, Globe, UserCheck, Shield } from 'lucide-react';

const AdvantagesSection = () => {
  const advantages = [
    {
      icon: <Rocket className="h-6 w-6" />,
      title: 'Космическая скорость',
      description: 'Быстрая загрузка сайта увеличивает конверсию и улучшает позиции в поисковых системах'
    },
    {
      icon: <BarChart2 className="h-6 w-6" />,
      title: 'Высокая конверсия',
      description: 'Дизайн и функционал, ориентированные на превращение посетителей в клиентов'
    },
    {
      icon: <Globe className="h-6 w-6" />,
      title: 'SEO на орбите',
      description: 'Внутренняя оптимизация для высоких позиций в поисковых системах'
    },
    {
      icon: <Zap className="h-6 w-6" />,
      title: 'Межпланетный отклик',
      description: 'Адаптивный дизайн для идеального отображения на всех устройствах'
    },
    {
      icon: <UserCheck className="h-6 w-6" />,
      title: 'Земная поддержка',
      description: 'Оперативная техническая поддержка и обновления безопасности'
    },
    {
      icon: <Shield className="h-6 w-6" />,
      title: 'Защита от метеоритов',
      description: 'Высокая степень защиты от взлома и вредоносных программ'
    }
  ];

  return (
    <section className="py-16 md:py-24 relative overflow-hidden">
      {/* Космический фон */}
      <div className="absolute inset-0 bg-nebula opacity-20"></div>
      
      {/* Планеты */}
      <div className="absolute top-10 right-10 w-32 h-32 bg-planet-mars/20 rounded-full blur-xl opacity-40 floating"></div>
      <div className="absolute bottom-20 left-20 w-40 h-40 bg-planet-jupiter/10 rounded-full blur-xl opacity-40 floating" style={{animationDelay: '2s'}}></div>
      
      {/* Звезды */}
      {Array.from({length: 10}).map((_, i) => (
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
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="section-title">Наши межзвездные <span className="gradient-text">преимущества</span></h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Как космические инженеры для вашего бизнеса, мы создаем сайты, которые выделяются среди конкурентов и достигают звездных результатов
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {advantages.map((advantage, index) => (
            <div key={index} className="cosmic-card p-6 relative overflow-hidden group">
              {/* Подсветка при наведении */}
              <div className="absolute -inset-1 opacity-0 group-hover:opacity-100 transition-opacity duration-700 z-0 bg-primary/10 blur-xl rounded-xl"></div>
              
              <div className="relative z-10">
                <div className="flex items-center justify-center w-12 h-12 rounded-full mb-4 bg-primary/20 text-primary">
                  {advantage.icon}
                </div>
                <h3 className="text-xl font-display font-bold mb-3">{advantage.title}</h3>
                <p className="text-muted-foreground">{advantage.description}</p>
              </div>
              
              {/* Орбитальная частица */}
              <div className="w-20 h-20 planet-orbit absolute -bottom-10 -right-10 opacity-0 group-hover:opacity-40 transition-opacity duration-700" style={{animationDuration: `${10 + index * 2}s`}}>
                <div className="absolute w-1.5 h-1.5 bg-primary rounded-full shadow-neon" style={{top: '0%', left: '50%', transform: 'translate(-50%, -50%)'}}></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AdvantagesSection;
