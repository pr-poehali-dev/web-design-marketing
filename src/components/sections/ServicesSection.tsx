import React from 'react';
import { ArrowRight, Code, PieChart, Search, Target, Megaphone, LineChart } from 'lucide-react';
import { Button } from '@/components/ui/button';
import ServiceCard from '@/components/ServiceCard';

const ServicesSection = () => {
  const services = [
    {
      title: 'Разработка сайтов',
      description: 'Создаем современные и функциональные сайты с высокой конверсией, адаптированные для всех устройств',
      icon: Code,
      highlights: [
        'Лендинги и корпоративные сайты',
        'Интернет-магазины',
        'Веб-приложения'
      ],
      color: 'bg-brand-100'
    },
    {
      title: 'SEO-продвижение',
      description: 'Выводим сайты в топ поисковых систем и увеличиваем органический трафик',
      icon: Search,
      highlights: [
        'Внутренняя оптимизация',
        'Работа с ссылочной массой',
        'Семантическое ядро'
      ],
      color: 'bg-violet-light'
    },
    {
      title: 'Контекстная реклама',
      description: 'Настраиваем эффективные рекламные кампании в Яндекс.Директ и Google Ads',
      icon: Target,
      highlights: [
        'Поисковая реклама',
        'Ремаркетинг',
        'Реклама в сетях'
      ],
      color: 'bg-accent'
    },
    {
      title: 'Маркетинговая аналитика',
      description: 'Анализируем эффективность сайта и маркетинговых каналов для увеличения конверсии',
      icon: PieChart,
      highlights: [
        'Аналитика конверсий',
        'A/B тестирование',
        'Веб-аналитика'
      ],
      color: 'bg-brand-100'
    },
    {
      title: 'SMM-продвижение',
      description: 'Продвигаем ваш бизнес в социальных сетях и привлекаем целевую аудиторию',
      icon: Megaphone,
      highlights: [
        'Ведение групп и аккаунтов',
        'Таргетированная реклама',
        'Создание контента'
      ],
      color: 'bg-violet-light'
    },
    {
      title: 'Сопровождение и поддержка',
      description: 'Обеспечиваем стабильную работу сайта и его постоянное развитие',
      icon: LineChart,
      highlights: [
        'Техническая поддержка',
        'Обновление контента',
        'Мониторинг и отчетность'
      ],
      color: 'bg-accent'
    }
  ];

  return (
    <section className="py-16 bg-muted/50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="section-title mb-4">Наши <span className="highlight-text">услуги</span></h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Мы предлагаем комплексные решения для развития вашего бизнеса в интернете — от разработки сайта до продвижения и рекламы
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <ServiceCard
              key={index}
              title={service.title}
              description={service.description}
              icon={service.icon}
              highlights={service.highlights}
              color={service.color}
            />
          ))}
        </div>

        <div className="text-center mt-12">
          <Button variant="outline" size="lg" className="btn-hover-effect">
            Все услуги <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
