import React from 'react';
import ServicesGroup from '@/components/sections/ServicesGroup';
import { serviceCategories } from '@/data/servicesData';

/**
 * Контейнер для всех групп услуг
 * Получает данные из файла servicesData.ts и передает их в компоненты ServicesGroup
 */
const ServicesContainer: React.FC = () => {
  return (
    <>
      {serviceCategories.map((category, index) => (
        <ServicesGroup 
          key={index}
          title={category.title}
          subtitle={category.subtitle}
          description={category.description}
          badgeText={category.badgeText}
          badgeClass={category.badgeClass}
          services={category.services}
          bgClass={category.bgClass}
        />
      ))}
    </>
  );
};

export default ServicesContainer;
