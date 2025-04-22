
import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { ArrowRight, CheckCircle } from 'lucide-react';
import { Link } from 'react-router-dom';

interface PortfolioItem {
  id: number;
  title: string;
  category: string;
  description: string;
  image: string;
  conversion: number;
  challenge: string;
  solution: string;
  results: string[];
  link: string;
}

const portfolioItems: PortfolioItem[] = [
  {
    id: 1,
    title: "Интернет-магазин электроники",
    category: "Разработка",
    description: "Полная разработка интернет-магазина с нуля с интеграцией платежных систем и CRM",
    image: "/placeholder.svg",
    conversion: 7.4,
    challenge: "Клиент столкнулся с низкой конверсией и устаревшим дизайном, который не вызывал доверия у посетителей.",
    solution: "Мы создали современный адаптивный сайт с удобной навигацией, оптимизировали воронку продаж и внедрили систему персонализированных рекомендаций.",
    results: [
      "Рост конверсии с 1.2% до 7.4%",
      "Увеличение среднего чека на 23%",
      "Снижение показателя отказов на 45%"
    ],
    link: "#"
  },
  {
    id: 2,
    title: "Сайт юридической компании",
    category: "SEO продвижение",
    description: "Комплексное SEO-продвижение с выводом сайта в топ-5 по высококонкурентным запросам",
    image: "/placeholder.svg",
    conversion: 45,
    challenge: "Юридическая фирма не получала заявок с сайта и имела низкую видимость в поисковых системах.",
    solution: "Мы провели аудит, оптимизировали контент, исправили технические ошибки и разработали стратегию наращивания естественной ссылочной массы.",
    results: [
      "Рост органического трафика на 320%",
      "Конверсия заявок из форм обратной связи — 45%",
      "Снижение стоимости привлечения клиента на 60%"
    ],
    link: "#"
  },
  {
    id: 3,
    title: "Лендинг для образовательного курса",
    category: "Реклама",
    description: "Разработка высококонверсионного лендинга и настройка рекламной кампании",
    image: "/placeholder.svg",
    conversion: 60,
    challenge: "Образовательный проект запускал новый курс и нуждался в эффективном инструменте продаж.",
    solution: "Мы разработали лендинг с сильным УТП, продуманной структурой и психологическими триггерами, а также настроили таргетированную рекламу.",
    results: [
      "Конверсия из посетителя в лид — 60%",
      "Конверсия из лида в покупателя — 22%",
      "ROI рекламной кампании — 430%"
    ],
    link: "#"
  },
  {
    id: 4,
    title: "Корпоративный сайт для строительной компании",
    category: "Разработка",
    description: "Создание имиджевого сайта с внедрением CRM для автоматизации работы с клиентами",
    image: "/placeholder.svg",
    conversion: 12.8,
    challenge: "Строительная компания не имела цифрового представительства, что снижало доверие клиентов.",
    solution: "Мы разработали корпоративный сайт с каталогом услуг, портфолио проектов и интерактивным калькулятором стоимости.",
    results: [
      "Конверсия из посетителя в заявку — 12.8%",
      "Автоматизация 80% рутинных процессов",
      "Рост количества заказов на 42%"
    ],
    link: "#"
  }
];

const Portfolio = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <div className="pt-16 flex-grow">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-brand-50 to-background py-20">
          <div className="container mx-auto px-4">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Наше портфолио</h1>
            <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mb-10">
              Проекты, которые приносят реальные результаты нашим клиентам. Ознакомьтесь с нашими кейсами и убедитесь в эффективности нашего подхода.
            </p>
          </div>
        </section>
        
        {/* Portfolio Grid */}
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {portfolioItems.map((item) => (
                <div key={item.id} className="rounded-xl overflow-hidden border border-border bg-card shadow-sm hover:shadow-md transition-shadow duration-300">
                  <div className="aspect-w-16 aspect-h-9 bg-muted">
                    <img src={item.image} alt={item.title} className="object-cover w-full h-full" />
                  </div>
                  <div className="p-6">
                    <div className="flex justify-between items-start mb-4">
                      <div>
                        <span className="text-sm text-brand-500 font-medium">{item.category}</span>
                        <h3 className="text-xl font-bold mt-1">{item.title}</h3>
                      </div>
                      <div className="bg-brand-100 text-brand-700 font-bold px-3 py-1 rounded-full text-sm">
                        Конверсия: {item.conversion}%
                      </div>
                    </div>
                    
                    <p className="text-muted-foreground mb-6">{item.description}</p>
                    
                    <div className="mb-6">
                      <h4 className="font-semibold mb-2">Задача:</h4>
                      <p className="text-muted-foreground">{item.challenge}</p>
                    </div>
                    
                    <div className="mb-6">
                      <h4 className="font-semibold mb-2">Решение:</h4>
                      <p className="text-muted-foreground">{item.solution}</p>
                    </div>
                    
                    <div className="mb-6">
                      <h4 className="font-semibold mb-2">Результаты:</h4>
                      <ul className="space-y-2">
                        {item.results.map((result, index) => (
                          <li key={index} className="flex items-start">
                            <CheckCircle className="h-5 w-5 text-brand-500 mr-2 flex-shrink-0 mt-0.5" />
                            <span>{result}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <Link to={item.link}>
                      <Button variant="outline" className="w-full group">
                        Подробнее о проекте 
                        <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                      </Button>
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
        
        {/* CTA Section */}
        <section className="py-20 bg-brand-50">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Готовы создать ваш успешный проект?</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-10">
              Мы применим наш опыт и экспертизу, чтобы ваш бизнес достиг аналогичных или даже лучших результатов.
            </p>
            <Link to="/contact">
              <Button size="lg" className="bg-brand-500 hover:bg-brand-600">
                Обсудить проект
              </Button>
            </Link>
          </div>
        </section>
      </div>
      
      <Footer />
    </div>
  );
};

export default Portfolio;
