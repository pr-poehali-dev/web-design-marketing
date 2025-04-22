import React from 'react';
import { Button } from '@/components/ui/button';

const ServiceHero: React.FC = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-muted/50 to-background">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Услуги для роста вашего бизнеса</h1>
          <p className="text-xl text-muted-foreground mb-10">
            Мы предлагаем полный спектр услуг по разработке, продвижению и поддержке веб-проектов для увеличения ваших продаж
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg">Получить консультацию</Button>
            <Button variant="outline" size="lg">Скачать прайс</Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServiceHero;
