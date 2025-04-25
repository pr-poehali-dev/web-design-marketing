import React from 'react';
import { Globe, Rocket } from 'lucide-react';
import { Button } from '@/components/ui/button';
import CosmicBackground from '@/components/services/CosmicBackground';

const ServiceHero = () => {
  return (
    <section className="pt-32 pb-16 md:pt-40 md:pb-24 relative overflow-hidden">
      {/* Космический фон */}
      <CosmicBackground count={15} />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center max-w-4xl mx-auto">
          <div className="mb-6 flex justify-center">
            <div className="inline-flex items-center justify-center p-4 bg-primary/20 rounded-full">
              <Globe className="h-8 w-8 text-primary" />
            </div>
          </div>
          
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            Космические <span className="gradient-text">услуги</span> для вашего бизнеса
          </h1>
          
          <p className="text-xl text-muted-foreground mb-8">
            Мы создаем цифровые решения, которые выводят бизнес на новую орбиту развития и привлекают клиентов со скоростью света
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button size="lg" className="bg-primary hover:bg-primary/90 btn-hover-effect shadow-neon">
              <Rocket className="mr-2 h-5 w-5" /> Заказать услугу
            </Button>
            <Button size="lg" variant="outline" className="border-primary/30 text-primary hover:bg-primary/10 btn-hover-effect">
              Узнать стоимость
            </Button>
          </div>
          
          <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="cosmic-card p-4 text-center">
              <div className="text-3xl font-bold gradient-text">100+</div>
              <div className="text-sm text-muted-foreground">Запущенных проектов</div>
            </div>
            <div className="cosmic-card p-4 text-center">
              <div className="text-3xl font-bold gradient-text">5 лет</div>
              <div className="text-sm text-muted-foreground">На цифровой орбите</div>
            </div>
            <div className="cosmic-card p-4 text-center">
              <div className="text-3xl font-bold gradient-text">60%</div>
              <div className="text-sm text-muted-foreground">Максимальная конверсия</div>
            </div>
            <div className="cosmic-card p-4 text-center">
              <div className="text-3xl font-bold gradient-text">24/7</div>
              <div className="text-sm text-muted-foreground">Техническая поддержка</div>
            </div>
          </div>
          
          {/* Космонавт */}
          <div className="absolute bottom-10 right-10 w-24 h-24 opacity-70 floating hidden md:block">
            <img 
              src="https://cdn.iconscout.com/icon/free/png-256/free-astronaut-3-432710.png?f=webp" 
              alt="Космонавт"
              className="w-full h-full"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServiceHero;
