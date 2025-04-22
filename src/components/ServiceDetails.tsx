import React from 'react';
import { LucideIcon } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface ServiceDetailsProps { 
  icon: LucideIcon, 
  title: string, 
  description: string, 
  features: string[],
  price: string
}

const ServiceDetails = ({ icon: Icon, title, description, features, price }: ServiceDetailsProps) => {
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

export default ServiceDetails;
