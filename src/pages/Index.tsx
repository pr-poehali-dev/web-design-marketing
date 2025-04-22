import React from 'react';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import ServiceCard from '@/components/ServiceCard';
import CaseCard from '@/components/CaseCard';
import CTASection from '@/components/CTASection';
import { ArrowRight, Code, PieChart, Search, Target, Megaphone, LineChart } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />

        {/* Услуги */}
        <section className="py-16 bg-muted/50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="section-title mb-4">Наши <span className="highlight-text">услуги</span></h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Мы предлагаем комплексные решения для развития вашего бизнеса в интернете — от разработки сайта до продвижения и рекламы
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <ServiceCard 
                title="Разработка сайтов"
                description="Создаем современные и функциональные сайты с высокой конверсией, адаптированные для всех устройств"
                icon={Code}
                highlights={[
                  "Лендинги и корпоративные сайты", 
                  "Интернет-магазины", 
                  "Веб-приложения"
                ]}
                color="bg-brand-100"
              />
              <ServiceCard 
                title="SEO-продвижение"
                description="Выводим сайты в топ поисковых систем и увеличиваем органический трафик"
                icon={Search}
                highlights={[
                  "Внутренняя оптимизация", 
                  "Работа с ссылочной массой", 
                  "Семантическое ядро"
                ]}
                color="bg-violet-light"
              />
              <ServiceCard 
                title="Контекстная реклама"
                description="Настраиваем эффективные рекламные кампании в Яндекс.Директ и Google Ads"
                icon={Target}
                highlights={[
                  "Поисковая реклама", 
                  "Ремаркетинг", 
                  "Реклама в сетях"
                ]}
                color="bg-accent"
              />
              <ServiceCard 
                title="Маркетинговая аналитика"
                description="Анализируем эффективность сайта и маркетинговых каналов для увеличения конверсии"
                icon={PieChart}
                highlights={[
                  "Аналитика конверсий", 
                  "A/B тестирование", 
                  "Веб-аналитика"
                ]}
                color="bg-brand-100"
              />
              <ServiceCard 
                title="SMM-продвижение"
                description="Продвигаем ваш бизнес в социальных сетях и привлекаем целевую аудиторию"
                icon={Megaphone}
                highlights={[
                  "Ведение групп и аккаунтов", 
                  "Таргетированная реклама", 
                  "Создание контента"
                ]}
                color="bg-violet-light"
              />
              <ServiceCard 
                title="Сопровождение и поддержка"
                description="Обеспечиваем стабильную работу сайта и его постоянное развитие"
                icon={LineChart}
                highlights={[
                  "Техническая поддержка", 
                  "Обновление контента", 
                  "Мониторинг и отчетность"
                ]}
                color="bg-accent"
              />
            </div>

            <div className="text-center mt-12">
              <Button variant="outline" size="lg" className="btn-hover-effect">
                Все услуги <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </div>
        </section>

        {/* Портфолио */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="section-title mb-4">Наши <span className="highlight-text">кейсы</span></h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Реальные проекты, которые привели нашим клиентам новых покупателей и увеличили их продажи
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <CaseCard 
                image="/placeholder.svg"
                title="Интернет-магазин электроники"
                description="Редизайн и оптимизация, которые привели к увеличению продаж на 45%"
                category="Интернет-магазин"
                conversion="7,4%"
                link="#"
              />
              <CaseCard 
                image="/placeholder.svg"
                title="Сайт для строительной компании"
                description="Разработка корпоративного сайта с высокой конверсией заявок"
                category="Корпоративный сайт"
                conversion="45%"
                link="#"
              />
              <CaseCard 
                image="/placeholder.svg"
                title="Лендинг для образовательных курсов"
                description="Продающий лендинг с высоким процентом регистраций"
                category="Лендинг"
                conversion="60%"
                link="#"
              />
            </div>

            <div className="text-center mt-12">
              <Button variant="outline" size="lg" className="btn-hover-effect">
                Все проекты <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </div>
        </section>

        {/* Преимущества */}
        <section className="py-16 bg-muted/50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="section-title mb-4">Почему <span className="highlight-text">выбирают нас</span></h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Наш подход к работе и ключевые отличия, которые делают нас лучшими в своей области
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-card p-6 rounded-lg shadow-sm">
                <div className="bg-brand-100 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                  <span className="text-xl">🚀</span>
                </div>
                <h3 className="text-xl font-bold mb-3">Высокая конверсия</h3>
                <p className="text-muted-foreground">Наши сайты не просто красивые — они конвертируют посетителей в клиентов</p>
              </div>
              
              <div className="bg-card p-6 rounded-lg shadow-sm">
                <div className="bg-violet-light w-12 h-12 rounded-full flex items-center justify-center mb-4">
                  <span className="text-xl">⚡</span>
                </div>
                <h3 className="text-xl font-bold mb-3">Скорость работы</h3>
                <p className="text-muted-foreground">Быстрая разработка и запуск проектов без ущерба для качества</p>
              </div>
              
              <div className="bg-card p-6 rounded-lg shadow-sm">
                <div className="bg-accent w-12 h-12 rounded-full flex items-center justify-center mb-4">
                  <span className="text-xl">💼</span>
                </div>
                <h3 className="text-xl font-bold mb-3">Комплексный подход</h3>
                <p className="text-muted-foreground">Разработка, продвижение и поддержка — все услуги в одном месте</p>
              </div>
              
              <div className="bg-card p-6 rounded-lg shadow-sm">
                <div className="bg-brand-100 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                  <span className="text-xl">📱</span>
                </div>
                <h3 className="text-xl font-bold mb-3">Адаптивный дизайн</h3>
                <p className="text-muted-foreground">Сайты одинаково хорошо работают на всех устройствах</p>
              </div>
              
              <div className="bg-card p-6 rounded-lg shadow-sm">
                <div className="bg-violet-light w-12 h-12 rounded-full flex items-center justify-center mb-4">
                  <span className="text-xl">🔍</span>
                </div>
                <h3 className="text-xl font-bold mb-3">SEO-оптимизация</h3>
                <p className="text-muted-foreground">Все сайты оптимизированы для поисковых систем с момента запуска</p>
              </div>
              
              <div className="bg-card p-6 rounded-lg shadow-sm">
                <div className="bg-accent w-12 h-12 rounded-full flex items-center justify-center mb-4">
                  <span className="text-xl">📊</span>
                </div>
                <h3 className="text-xl font-bold mb-3">Прозрачная аналитика</h3>
                <p className="text-muted-foreground">Подробные отчеты о результатах работы и рекомендации по улучшению</p>
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
                <li><a href="#" className="text-background/70 hover:text-background">Разработка сайтов</a></li>
                <li><a href="#" className="text-background/70 hover:text-background">SEO-продвижение</a></li>
                <li><a href="#" className="text-background/70 hover:text-background">Контекстная реклама</a></li>
                <li><a href="#" className="text-background/70 hover:text-background">SMM-продвижение</a></li>
                <li><a href="#" className="text-background/70 hover:text-background">Аналитика</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-bold mb-4">Компания</h4>
              <ul className="space-y-2">
                <li><a href="#" className="text-background/70 hover:text-background">О нас</a></li>
                <li><a href="#" className="text-background/70 hover:text-background">Портфолио</a></li>
                <li><a href="#" className="text-background/70 hover:text-background">Блог</a></li>
                <li><a href="#" className="text-background/70 hover:text-background">Контакты</a></li>
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

export default Index;
