import React from 'react';
import { Button } from "@/components/ui/button";
import { ArrowRight, BarChart2, Rocket, Code } from 'lucide-react';

const Hero = () => {
  return (
    <section className="pt-24 pb-16 md:pt-32 md:pb-24">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row md:items-center">
          <div className="md:w-1/2 mb-10 md:mb-0 md:pr-8">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Создаем <span className="gradient-text">сайты</span> с высокой конверсией
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-lg">
              Мы разрабатываем и продвигаем веб-проекты, которые превращают посетителей в клиентов и увеличивают вашу прибыль
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="bg-brand-500 hover:bg-brand-600 btn-hover-effect">
                Обсудить проект <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <Button size="lg" variant="outline" className="btn-hover-effect">
                Смотреть кейсы
              </Button>
            </div>
            <div className="flex items-center mt-8 text-sm text-muted-foreground">
              <span className="mr-2">🔥</span>
              <span>Более 100+ успешных проектов за 5 лет работы</span>
            </div>
          </div>
          <div className="md:w-1/2 relative">
            <div className="bg-gradient-to-br from-brand-100 to-violet-light p-6 rounded-2xl shadow-xl relative overflow-hidden">
              <div className="absolute inset-0 bg-white/10 backdrop-blur-sm rounded-2xl"></div>
              <div className="relative z-10">
                <img 
                  src="/placeholder.svg" 
                  alt="Современный веб-дизайн" 
                  className="w-full rounded-lg shadow-lg animate-float"
                />
                
                <div className="absolute -top-4 -right-4 bg-white p-3 rounded-lg shadow-lg animate-fade-in">
                  <div className="flex items-center">
                    <BarChart2 className="w-5 h-5 text-success mr-2" />
                    <span className="font-bold text-sm">Конверсия до 60%</span>
                  </div>
                </div>
                
                <div className="absolute top-1/2 -left-4 bg-white p-3 rounded-lg shadow-lg animate-fade-in" style={{animationDelay: '0.2s'}}>
                  <div className="flex items-center">
                    <Rocket className="w-5 h-5 text-violet mr-2" />
                    <span className="font-bold text-sm">SEO продвижение</span>
                  </div>
                </div>
                
                <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 bg-white p-3 rounded-lg shadow-lg animate-fade-in" style={{animationDelay: '0.4s'}}>
                  <div className="flex items-center">
                    <Code className="w-5 h-5 text-brand-500 mr-2" />
                    <span className="font-bold text-sm">Современные технологии</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
