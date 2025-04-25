import React from 'react';
import ServiceHero from '@/components/ServiceHero';
import ServicesContainer from '@/components/services/ServicesContainer';
import WorkProcess from '@/components/sections/WorkProcess';
import CTASection from '@/components/CTASection';
import ServicesLayout from '@/components/services/ServicesLayout';

/**
 * Страница услуг
 * Использует компоненты ServicesLayout для основной структуры,
 * ServiceHero для заголовка, ServicesContainer для групп услуг,
 * WorkProcess для раздела о процессе работы и CTASection для призыва к действию
 */
const Services: React.FC = () => {
  return (
    <ServicesLayout>
      {/* Герой-секция */}
      <ServiceHero />

      {/* Группы сервисов */}
      <ServicesContainer />

      {/* Процесс работы */}
      <WorkProcess />

      {/* Секция с призывом к действию */}
      <CTASection />
    </ServicesLayout>
  );
};

export default Services;
