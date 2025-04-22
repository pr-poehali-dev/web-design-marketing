import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import CaseCard from '@/components/CaseCard';

const PortfolioSection = () => {
  const portfolioItems = [
    {
      image: '/placeholder.svg',
      title: 'Интернет-магазин электроники',
      description: 'Редизайн и оптимизация, которые привели к увеличению продаж на 45%',
      category: 'Интернет-магазин',
      conversion: '7,4%',
      link: '#'
    },
    {
      image: '/placeholder.svg',
      title: 'Сайт для строительной компании',
      description: 'Разработка корпоративного сайта с высокой конверсией заявок',
      category: 'Корпоративный сайт',
      conversion: '45%',
      link: '#'
    },
    {
      image: '/placeholder.svg',
      title: 'Лендинг для образовательных курсов',
      description: 'Продающий лендинг с высоким процентом регистраций',
      category: 'Лендинг',
      conversion: '60%',
      link: '#'
    }
  ];

  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="section-title mb-4">Наши <span className="highlight-text">кейсы</span></h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Реальные проекты, которые привели нашим клиентам новых покупателей и увеличили их продажи
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {portfolioItems.map((item, index) => (
            <CaseCard
              key={index}
              image={item.image}
              title={item.title}
              description={item.description}
              category={item.category}
              conversion={item.conversion}
              link={item.link}
            />
          ))}
        </div>

        <div className="text-center mt-12">
          <Button variant="outline" size="lg" className="btn-hover-effect">
            Все проекты <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default PortfolioSection;
