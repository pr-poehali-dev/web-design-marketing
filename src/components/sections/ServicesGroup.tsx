import React from 'react';
import { LucideIcon } from 'lucide-react';
import ServiceDetails from '@/components/ServiceDetails';

interface ServiceData {
  icon: LucideIcon;
  title: string;
  description: string;
  features: string[];
  price: string;
}

interface ServicesGroupProps {
  title: string;
  subtitle: string;
  description: string;
  badgeText: string;
  badgeClass: string;
  services: ServiceData[];
  bgClass?: string;
}

const ServicesGroup: React.FC<ServicesGroupProps> = ({
  title,
  subtitle,
  description,
  badgeText,
  badgeClass,
  services,
  bgClass = ""
}) => {
  return (
    <section className={`py-16 ${bgClass}`}>
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <div className={`inline-block ${badgeClass} text-primary font-medium px-4 py-1 rounded-full mb-4`}>
            {badgeText}
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">{title}</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            {description}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
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
  );
};

export default ServicesGroup;
