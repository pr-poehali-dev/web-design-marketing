import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface ServiceCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  features: string[];
  price: string;
  link: string;
  accent?: boolean;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ 
  title, 
  description, 
  icon, 
  features, 
  price, 
  link,
  accent = false 
}) => {
  return (
    <div className={`cosmic-card p-6 h-full relative overflow-hidden group ${accent ? 'border-primary/40' : 'border-accent/20'}`}>
      {/* Космический эффект */}
      <div className={`absolute -inset-1 opacity-0 group-hover:opacity-100 transition-opacity duration-700 z-0 ${accent ? 'bg-primary/20' : 'bg-secondary/10'} blur-xl rounded-xl`}></div>
      
      {/* Планета - только для акцентированной карточки */}
      {accent && (
        <div className="absolute top-4 right-4 w-20 h-20 bg-primary/10 rounded-full blur-md opacity-70 floating"></div>
      )}
      
      {/* Орбитальная частица - для всех карточек */}
      <div className="w-32 h-32 planet-orbit absolute -bottom-16 -right-16 opacity-20 group-hover:opacity-60 transition-opacity duration-700" style={{animationDuration: '15s'}}>
        <div className="absolute w-2 h-2 bg-secondary rounded-full shadow-neon" style={{top: '0%', left: '50%', transform: 'translate(-50%, -50%)'}}></div>
      </div>
      
      <div className="relative z-10">
        <div className={`flex items-center justify-center w-12 h-12 rounded-full mb-4 ${accent ? 'bg-primary/20 text-primary' : 'bg-accent/20 text-accent-foreground'}`}>
          {icon}
        </div>
        <h3 className="text-xl font-display font-bold mb-3">{title}</h3>
        <p className="text-muted-foreground mb-4">{description}</p>
        
        <ul className="space-y-2 mb-6">
          {features.map((feature, index) => (
            <li key={index} className="flex items-start">
              <span className="mr-2 text-primary">✓</span>
              <span className="text-sm">{feature}</span>
            </li>
          ))}
        </ul>
        
        <div className="mt-auto">
          <div className="text-2xl font-bold mb-4">{price}</div>
          <Button 
            variant={accent ? "default" : "outline"} 
            className={`w-full ${accent ? 'bg-primary hover:bg-primary/90 shadow-neon' : 'border-primary/30 text-primary hover:bg-primary/10'}`}
          >
            Выбрать <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;
