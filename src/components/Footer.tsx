import React from 'react';
import { Link } from 'react-router-dom';
import { Rocket } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  const footerSections = {
    services: [
      { title: 'Разработка сайтов', link: '/services#web-dev' },
      { title: 'SEO-продвижение', link: '/services#seo' },
      { title: 'Контекстная реклама', link: '/services#ppc' },
      { title: 'SMM-продвижение', link: '/services#smm' },
      { title: 'Аналитика', link: '/services#analytics' }
    ],
    company: [
      { title: 'О нас', link: '/about' },
      { title: 'Портфолио', link: '/portfolio' },
      { title: 'Блог', link: '/blog' },
      { title: 'Контакты', link: '/contacts' },
      { title: 'Карьера', link: '/career' }
    ],
    contacts: {
      address: 'Москва, Космическая ул., д. 42',
      phone: '+7 (800) 123-45-67',
      email: 'info@cosmicweb.ru'
    },
    social: [
      { title: 'VK', link: '#' },
      { title: 'TG', link: '#' },
      { title: 'YT', link: '#' }
    ]
  };

  return (
    <footer className="bg-card border-t border-primary/20 py-12 relative overflow-hidden">
      {/* Космический фон */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Звезды */}
        {Array.from({length: 15}).map((_, i) => (
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
        
        {/* Планета */}
        <div className="absolute -bottom-20 -right-20 w-40 h-40 bg-planet-earth/10 rounded-full blur-xl opacity-30"></div>
        
        {/* Орбитальная линия */}
        <div className="w-[120%] h-[140%] absolute top-full left-1/2 transform -translate-x-1/2 -translate-y-3/4 border border-primary/5 rounded-full"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Rocket className="h-5 w-5 text-primary" />
              <h3 className="text-xl font-bold">
                <span className="text-primary">Cosmic</span>Web
              </h3>
            </div>
            <p className="text-muted-foreground mb-4">
              Создаем высококонверсионные сайты, которые выводят ваш бизнес на космическую орбиту успеха
            </p>
            <p className="text-muted-foreground">
              © {currentYear} CosmicWeb. Все права защищены.
            </p>
          </div>
          
          <div>
            <h4 className="font-bold mb-4">Услуги</h4>
            <ul className="space-y-2">
              {footerSections.services.map((service, index) => (
                <li key={index}>
                  <Link to={service.link} className="text-muted-foreground hover:text-primary transition-colors">
                    {service.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h4 className="font-bold mb-4">Компания</h4>
            <ul className="space-y-2">
              {footerSections.company.map((item, index) => (
                <li key={index}>
                  <Link to={item.link} className="text-muted-foreground hover:text-primary transition-colors">
                    {item.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h4 className="font-bold mb-4">Контакты</h4>
            <ul className="space-y-2">
              <li className="text-muted-foreground">{footerSections.contacts.address}</li>
              <li>
                <a href={`tel:${footerSections.contacts.phone.replace(/[^+\d]/g, '')}`} className="text-muted-foreground hover:text-primary transition-colors">
                  {footerSections.contacts.phone}
                </a>
              </li>
              <li>
                <a href={`mailto:${footerSections.contacts.email}`} className="text-muted-foreground hover:text-primary transition-colors">
                  {footerSections.contacts.email}
                </a>
              </li>
            </ul>
            <div className="flex space-x-4 mt-4">
              {footerSections.social.map((platform, index) => (
                <a key={index} href={platform.link} className="text-muted-foreground hover:text-primary transition-colors">
                  {platform.title}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
