import React from 'react';
import { Button } from "@/components/ui/button";
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const PortfolioSection = () => {
  const cases = [
    {
      id: 1,
      title: 'Интернет-магазин космической техники',
      image: 'https://images.unsplash.com/photo-1446776811953-b23d57bd21aa?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
      category: 'E-commerce',
      conversion: '60%',
      description: 'Редизайн и оптимизация привели к росту продаж на 300% за 3 месяца'
    },
    {
      id: 2,
      title: 'Платформа для астрономов-любителей',
      image: 'https://images.unsplash.com/photo-1614732414444-096e5f1122d5?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
      category: 'Сообщество',
      conversion: '45%',
      description: 'Создание сайта с нуля, привлечение 10 000+ пользователей за первый месяц'
    },
    {
      id: 3,
      title: 'Сервис бронирования космических туров',
      image: 'https://images.unsplash.com/photo-1502306332668-d5c66df1351a?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
      category: 'Сервис',
      conversion: '7.4%',
      description: 'Запуск стартапа, который получил инвестиции после первых двух месяцев работы'
    }
  ];

  return (
    <section className="py-16 md:py-24 relative overflow-hidden">
      {/* Космический фон */}
      <div className="absolute -top-40 left-1/3 w-80 h-80 bg-space-purple/10 rounded-full blur-3xl"></div>
      <div className="absolute -bottom-20 right-20 w-60 h-60 bg-primary/10 rounded-full blur-3xl"></div>
      
      {/* Астероид */}
      <div className="absolute top-40 left-10 w-4 h-4 bg-gray-500 rounded-full opacity-40 floating" style={{animationDelay: '1.5s'}}></div>
      
      {/* Звезды */}
      {Array.from({length: 8}).map((_, i) => (
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
          <h2 className="section-title">Галактика наших <span className="gradient-text">проектов</span></h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Исследуйте вселенную наших работ с невероятными показателями конверсии и пользовательской вовлеченности
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {cases.map((caseItem) => (
            <div key={caseItem.id} className="cosmic-card group relative overflow-hidden">
              {/* Подсветка при наведении */}
              <div className="absolute -inset-1 opacity-0 group-hover:opacity-100 transition-opacity duration-700 z-0 bg-primary/20 blur-xl rounded-xl"></div>
              
              <div className="relative h-52 overflow-hidden rounded-t-lg">
                <img 
                  src={caseItem.image} 
                  alt={caseItem.title} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                
                {/* Космонавт на проекте с конверсией 60% */}
                {caseItem.conversion === '60%' && (
                  <div className="absolute bottom-4 right-4 w-12 h-12 bg-white/10 backdrop-blur-md rounded-full p-2 floating">
                    <img 
                      src="https://cdn.iconscout.com/icon/free/png-256/free-astronaut-3-432710.png?f=webp" 
                      alt="Космонавт"
                      className="w-full h-full"
                    />
                  </div>
                )}
                
                {/* Индикатор конверсии */}
                <div className="absolute top-4 left-4 bg-card/80 backdrop-blur-sm px-3 py-1 rounded-full text-sm font-semibold">
                  Конверсия: <span className="text-primary">{caseItem.conversion}</span>
                </div>
              </div>
              
              <div className="p-6 relative z-10">
                <div className="text-sm text-muted-foreground mb-2">{caseItem.category}</div>
                <h3 className="text-xl font-display font-bold mb-2">{caseItem.title}</h3>
                <p className="text-muted-foreground mb-4">{caseItem.description}</p>
                
                <Link to={`/portfolio/${caseItem.id}`}>
                  <Button variant="outline" className="w-full border-primary/30 text-primary hover:bg-primary/10">
                    Исследовать кейс <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </div>
              
              {/* Орбитальная частица */}
              <div className="w-32 h-32 planet-orbit absolute -bottom-16 -right-16 opacity-20 group-hover:opacity-70 transition-opacity duration-700" style={{animationDuration: '20s'}}>
                <div className="absolute w-2 h-2 bg-secondary rounded-full shadow-neon" style={{top: '0%', left: '50%', transform: 'translate(-50%, -50%)'}}></div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <Link to="/portfolio">
            <Button className="bg-primary hover:bg-primary/90 btn-hover-effect shadow-neon">
              Исследовать все проекты <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default PortfolioSection;
