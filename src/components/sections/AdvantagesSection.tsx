import React from 'react';

const AdvantagesSection = () => {
  const advantages = [
    {
      icon: '🚀',
      title: 'Высокая конверсия',
      description: 'Наши сайты не просто красивые — они конвертируют посетителей в клиентов',
      color: 'bg-brand-100'
    },
    {
      icon: '⚡',
      title: 'Скорость работы',
      description: 'Быстрая разработка и запуск проектов без ущерба для качества',
      color: 'bg-violet-light'
    },
    {
      icon: '💼',
      title: 'Комплексный подход',
      description: 'Разработка, продвижение и поддержка — все услуги в одном месте',
      color: 'bg-accent'
    },
    {
      icon: '📱',
      title: 'Адаптивный дизайн',
      description: 'Сайты одинаково хорошо работают на всех устройствах',
      color: 'bg-brand-100'
    },
    {
      icon: '🔍',
      title: 'SEO-оптимизация',
      description: 'Все сайты оптимизированы для поисковых систем с момента запуска',
      color: 'bg-violet-light'
    },
    {
      icon: '📊',
      title: 'Прозрачная аналитика',
      description: 'Подробные отчеты о результатах работы и рекомендации по улучшению',
      color: 'bg-accent'
    }
  ];

  return (
    <section className="py-16 bg-muted/50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="section-title mb-4">Почему <span className="highlight-text">выбирают нас</span></h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Наш подход к работе и ключевые отличия, которые делают нас лучшими в своей области
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {advantages.map((advantage, index) => (
            <div key={index} className="bg-card p-6 rounded-lg shadow-sm">
              <div className={`${advantage.color} w-12 h-12 rounded-full flex items-center justify-center mb-4`}>
                <span className="text-xl">{advantage.icon}</span>
              </div>
              <h3 className="text-xl font-bold mb-3">{advantage.title}</h3>
              <p className="text-muted-foreground">{advantage.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AdvantagesSection;
