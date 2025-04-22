import React from 'react';
import { Link } from 'react-router-dom';

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
      address: 'Москва, ул. Пример, д. 1',
      phone: '+7 (800) 123-45-67',
      email: 'info@webprofi.studio'
    },
    social: [
      { title: 'VK', link: '#' },
      { title: 'TG', link: '#' },
      { title: 'YT', link: '#' }
    ]
  };

  return (
    <footer className="bg-foreground text-background py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">WebProfi.Studio</h3>
            <p className="text-background/70 mb-4">
              Создаем высококонверсионные сайты, которые работают на ваш бизнес 24/7
            </p>
            <p className="text-background/70">
              © {currentYear} WebProfi.Studio. Все права защищены.
            </p>
          </div>
          
          <div>
            <h4 className="font-bold mb-4">Услуги</h4>
            <ul className="space-y-2">
              {footerSections.services.map((service, index) => (
                <li key={index}>
                  <Link to={service.link} className="text-background/70 hover:text-background transition-colors">
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
                  <Link to={item.link} className="text-background/70 hover:text-background transition-colors">
                    {item.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h4 className="font-bold mb-4">Контакты</h4>
            <ul className="space-y-2">
              <li className="text-background/70">{footerSections.contacts.address}</li>
              <li>
                <a href={`tel:${footerSections.contacts.phone.replace(/[^+\d]/g, '')}`} className="text-background/70 hover:text-background transition-colors">
                  {footerSections.contacts.phone}
                </a>
              </li>
              <li>
                <a href={`mailto:${footerSections.contacts.email}`} className="text-background/70 hover:text-background transition-colors">
                  {footerSections.contacts.email}
                </a>
              </li>
            </ul>
            <div className="flex space-x-4 mt-4">
              {footerSections.social.map((platform, index) => (
                <a key={index} href={platform.link} className="text-background/70 hover:text-background transition-colors">
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
