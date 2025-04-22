import React from 'react';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import ServicesSection from '@/components/sections/ServicesSection';
import PortfolioSection from '@/components/sections/PortfolioSection';
import AdvantagesSection from '@/components/sections/AdvantagesSection';
import CTASection from '@/components/CTASection';
import Footer from '@/components/Footer';

/**
 * Главная страница сайта веб-студии
 * Содержит основные секции: герой-секция, услуги, портфолио, преимущества и CTA
 */
const Index = () => {
  return (
    <div className="min-h-screen">
      {/* Шапка сайта с навигацией */}
      <Header />
      
      <main>
        {/* Герой-секция с основным предложением */}
        <Hero />

        {/* Секция с услугами компании */}
        <ServicesSection />

        {/* Секция с портфолио проектов */}
        <PortfolioSection />

        {/* Секция с преимуществами компании */}
        <AdvantagesSection />

        {/* Призыв к действию */}
        <CTASection />
      </main>

      {/* Подвал сайта */}
      <Footer />
    </div>
  );
};

export default Index;
