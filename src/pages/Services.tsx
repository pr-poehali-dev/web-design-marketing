import React from 'react';
import Header from '@/components/Header';
import { ArrowRight, Code, PieChart, Search, Target, Megaphone, LineChart, Layers, Database, Globe, BarChart4, Settings, Users } from 'lucide-react';
import { Button } from '@/components/ui/button';
import CTASection from '@/components/CTASection';

const ServiceDetails = ({ icon: Icon, title, description, features, price }: { 
  icon: React.ElementType, 
  title: string, 
  description: string, 
  features: string[],
  price: string
}) => {
  return (
    <div className="bg-card rounded-lg overflow-hidden transition-all duration-300 hover:shadow-lg border border-border">
      <div className="bg-muted/50 p-8">
        <div className="w-16 h-16 rounded-full bg-brand-100 flex items-center justify-center mb-5">
          <Icon className="h-8 w-8 text-primary" />
        </div>
        <h3 className="text-2xl font-bold mb-3">{title}</h3>
        <p className="text-muted-foreground mb-6">{description}</p>
        <div className="text-2xl font-bold text-primary">{price}</div>
      </div>
      <div className="p-8">
        <h4 className="text-lg font-medium mb-4">Что включено:</h4>
        <ul className="space-y-3">
          {features.map((feature, index) => (
            <li key={index} className="flex items-start">
              <div className="mr-3 mt-1 text-primary">✓</div>
              <span>{feature}</span>
            </li>
          ))}
        </ul>
        <Button className="w-full mt-8">Заказать услугу</Button>
      </div>
    </div>
  );
};

const Services = () => {
  const webDevelopmentServices = [
    {
      icon: Code,
      title: "Разработка сайтов",
      description: "Создаем современные и функциональные сайты с высокой конверсией, адаптированные для всех устройств",
      features: [
        "Адаптивный дизайн для всех устройств",
        "SEO-оптимизация на этапе разработки",
        "Интеграция с CRM и аналитикой",
        "Высокая скорость загрузки",
        "Техническая поддержка"
      ],
      price: "от 60 000 ₽"
    },
    {
      icon: Layers,
      title: "Лендинги",
      description: "Разрабатываем продающие одностраничные сайты, заточенные на конверсию посетителей в клиентов",
      features: [
        "Продающая структура страницы",
        "A/B тестирование элементов",
        "Интеграция форм с CRM",
        "Настройка целей аналитики",
        "Оптимизация скорости"
      ],
      price: "от 40 000 ₽"
    },
    {
      icon: Database,
      title: "Интернет-магазины",
      description: "Создаем функциональные онлайн-магазины с удобным управлением товарами и интеграцией платежных систем",
      features: [
        "Удобный каталог товаров",
        "Интеграция платежных систем",
        "Личный кабинет пользователя",
        "Система управления заказами",
        "Интеграция с 1С и CRM"
      ],
      price: "от 120 000 ₽"
    }
  ];

  const seoServices = [
    {
      icon: Search,
      title: "SEO-продвижение",
      description: "Выводим сайты в топ поисковых систем и увеличиваем органический трафик",
      features: [
        "Аудит и анализ сайта",
        "Составление семантического ядра",
        "Внутренняя оптимизация",
        "Работа с внешними факторами",
        "Ежемесячная отчетность"
      ],
      price: "от 30 000 ₽/мес"
    },
    {
      icon: Globe,
      title: "Техническая оптимизация",
      description: "Исправляем технические ошибки, которые мешают продвижению сайта в поисковых системах",
      features: [
        "Поиск и устранение ошибок",
        "Оптимизация скорости загрузки",
        "Настройка robots.txt и sitemap",
        "Оптимизация мета-тегов",
        "Устранение дублей страниц"
      ],
      price: "от 25 000 ₽"
    },
    {
      icon: BarChart4,
      title: "Контент-маркетинг",
      description: "Создаем полезный контент, который привлекает целевую аудиторию и повышает авторитет сайта",
      features: [
        "Разработка контент-стратегии",
        "Создание SEO-текстов",
        "Оптимизация существующего контента",
        "Ведение блога компании",
        "Анализ эффективности"
      ],
      price: "от 35 000 ₽/мес"
    }
  ];

  const advertisingServices = [
    {
      icon: Target,
      title: "Контекстная реклама",
      description: "Настраиваем эффективные рекламные кампании в Яндекс.Директ и Google Ads",
      features: [
        "Анализ ниши и конкурентов",
        "Составление семантического ядра",
        "Настройка таргетинга",
        "Создание креативов",
        "Оптимизация рекламных кампаний"
      ],
      price: "от 20 000 ₽/мес"
    },
    {
      icon: Megaphone,
      title: "SMM-продвижение",
      description: "Продвигаем ваш бизнес в социальных сетях и привлекаем целевую аудиторию",
      features: [
        "Разработка SMM-стратегии",
        "Создание и оформление аккаунтов",
        "Создание контент-плана",
        "Настройка таргетированной рекламы",
        "Аналитика и отчетность"
      ],
      price: "от 25 000 ₽/мес"
    },
    {
      icon: Settings,
      title: "Комплексный интернет-маркетинг",
      description: "Разрабатываем и внедряем комплексную стратегию продвижения для достижения максимальных результатов",
      features: [
        "Аудит текущего состояния",
        "Разработка маркетинговой стратегии",
        "SEO + контекстная реклама + SMM",
        "Email-маркетинг",
        "Регулярная аналитика и отчетность"
      ],
      price: "от 80 000 ₽/мес"
    }
  ];

  const supportServices = [
    {
      icon: LineChart,
      title: "Сопровождение и поддержка",
      description: "Обеспечиваем стабильную работу сайта и его постоянное развитие",
      features: [
        "Мониторинг работоспособности",
        "Регулярное обновление CMS",
        "Исправление ошибок",
        "Резервное копирование",
        "Консультации и поддержка"
      ],
      price: "от 15 000 ₽/мес"
    },
    {
      icon: PieChart,
      title: "Аналитика и улучшение конверсии",
      description: "Анализируем эффективность сайта и маркетинговых каналов для увеличения конверсии",
      features: [
        "Настройка систем аналитики",
        "Отслеживание конверсионных целей",
        "Анализ пользовательского поведения",
        "A/B тестирование элементов",
        "Рекомендации по улучшению"
      ],
      price: "от 30 000 ₽/мес"
    },
    {
      icon: Users,
      title: "Обучение и консалтинг",
      description: "Обучаем вашу команду эффективно управлять интернет-маркетингом и развитием сайта",
      features: [
        "Индивидуальные консультации",
        "Корпоративные тренинги",
        "Разработка инструкций",
        "Аудит внутренних процессов",
        "Стратегическое планирование"
      ],
      price: "от 50 000 ₽"
    }
  ];

  return (
    <div className="min-h-screen">
      <Header />
      <main>
        {/* Герой-секция */}
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

        {/* Разработка сайтов */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <div className="inline-block bg-brand-100 text-primary font-medium px-4 py-1 rounded-full mb-4">Разработка</div>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Разработка сайтов и веб-приложений</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Создаем современные, функциональные и красивые сайты, которые приносят реальные результаты вашему бизнесу
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {webDevelopmentServices.map((service, index) => (
                <ServiceDetails 
                  key={index}
                  icon={service.icon}
                  title={service.title}
                  description={service.description}
                  features={service.features}
                  price={service.price}
                />
              ))}
            </div>
          </div>
        </section>

        {/* SEO-продвижение */}
        <section className="py-16 bg-muted/50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <div className="inline-block bg-violet-light text-primary font-medium px-4 py-1 rounded-full mb-4">SEO</div>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">SEO-продвижение и оптимизация</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Выводим сайты в топ поисковых систем и увеличиваем органический трафик для привлечения целевых клиентов
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {seoServices.map((service, index) => (
                <ServiceDetails 
                  key={index}
                  icon={service.icon}
                  title={service.title}
                  description={service.description}
                  features={service.features}
                  price={service.price}
                />
              ))}
            </div>
          </div>
        </section>

        {/* Реклама */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <div className="inline-block bg-accent text-primary font-medium px-4 py-1 rounded-full mb-4">Реклама</div>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Реклама и продвижение</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Настраиваем эффективные рекламные кампании, которые привлекают целевую аудиторию и увеличивают продажи
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {advertisingServices.map((service, index) => (
                <ServiceDetails 
                  key={index}
                  icon={service.icon}
                  title={service.title}
                  description={service.description}
                  features={service.features}
                  price={service.price}
                />
              ))}
            </div>
          </div>
        </section>

        {/* Поддержка */}
        <section className="py-16 bg-muted/50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <div className="inline-block bg-brand-100 text-primary font-medium px-4 py-1 rounded-full mb-4">Поддержка</div>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Сопровождение и аналитика</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Обеспечиваем стабильную работу сайта, его постоянное развитие и улучшение показателей эффективности
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {supportServices.map((service, index) => (
                <ServiceDetails 
                  key={index}
                  icon={service.icon}
                  title={service.title}
                  description={service.description}
                  features={service.features}
                  price={service.price}
                />
              ))}
            </div>
          </div>
        </section>

        {/* Процесс работы */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Как мы работаем</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Прозрачный и эффективный процесс сотрудничества для достижения максимальных результатов
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 rounded-full bg-brand-100 flex items-center justify-center mx-auto mb-4">
                  <span className="text-primary font-bold text-xl">1</span>
                </div>
                <h3 className="text-xl font-bold mb-2">Анализ требований</h3>
                <p className="text-muted-foreground">Изучаем ваш бизнес, цели и потребности</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 rounded-full bg-violet-light flex items-center justify-center mx-auto mb-4">
                  <span className="text-primary font-bold text-xl">2</span>
                </div>
                <h3 className="text-xl font-bold mb-2">Разработка стратегии</h3>
                <p className="text-muted-foreground">Создаем план реализации проекта</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 rounded-full bg-accent flex items-center justify-center mx-auto mb-4">
                  <span className="text-primary font-bold text-xl">3</span>
                </div>
                <h3 className="text-xl font-bold mb-2">Реализация</h3>
                <p className="text-muted-foreground">Воплощаем проект в жизнь согласно плану</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 rounded-full bg-brand-100 flex items-center justify-center mx-auto mb-4">
                  <span className="text-primary font-bold text-xl">4</span>
                </div>
                <h3 className="text-xl font-bold mb-2">Анализ и улучшение</h3>
                <p className="text-muted-foreground">Постоянно оптимизируем показатели</p>
              </div>
            </div>
          </div>
        </section>

        <CTASection />
      </main>

      <footer className="bg-foreground text-background py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4">WebProfi.Studio</h3>
              <p className="text-background/70 mb-4">
                Создаем высококонверсионные сайты, которые работают на ваш бизнес 24/7
              </p>
              <p className="text-background/70">
                © 2023 WebProfi.Studio. Все права защищены.
              </p>
            </div>
            
            <div>
              <h4 className="font-bold mb-4">Услуги</h4>
              <ul className="space-y-2">
                <li><a href="/services" className="text-background/70 hover:text-background">Разработка сайтов</a></li>
                <li><a href="/services" className="text-background/70 hover:text-background">SEO-продвижение</a></li>
                <li><a href="/services" className="text-background/70 hover:text-background">Контекстная реклама</a></li>
                <li><a href="/services" className="text-background/70 hover:text-background">SMM-продвижение</a></li>
                <li><a href="/services" className="text-background/70 hover:text-background">Аналитика</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-bold mb-4">Компания</h4>
              <ul className="space-y-2">
                <li><a href="/about" className="text-background/70 hover:text-background">О нас</a></li>
                <li><a href="/portfolio" className="text-background/70 hover:text-background">Портфолио</a></li>
                <li><a href="#" className="text-background/70 hover:text-background">Блог</a></li>
                <li><a href="/contact" className="text-background/70 hover:text-background">Контакты</a></li>
                <li><a href="#" className="text-background/70 hover:text-background">Карьера</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-bold mb-4">Контакты</h4>
              <ul className="space-y-2">
                <li className="text-background/70">Москва, ул. Пример, д. 1</li>
                <li><a href="tel:+78001234567" className="text-background/70 hover:text-background">+7 (800) 123-45-67</a></li>
                <li><a href="mailto:info@webprofi.studio" className="text-background/70 hover:text-background">info@webprofi.studio</a></li>
              </ul>
              <div className="flex space-x-4 mt-4">
                <a href="#" className="text-background/70 hover:text-background">VK</a>
                <a href="#" className="text-background/70 hover:text-background">TG</a>
                <a href="#" className="text-background/70 hover:text-background">YT</a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Services;
