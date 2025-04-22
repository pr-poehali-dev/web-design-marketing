import React from 'react';
import { LucideIcon } from 'lucide-react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight } from 'lucide-react';

interface ServiceCardProps {
  title: string;
  description: string;
  icon: LucideIcon;
  highlights?: string[];
  color?: string;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ 
  title, 
  description, 
  icon: Icon,
  highlights = [],
  color = "bg-brand-100"
}) => {
  return (
    <Card className="border border-border hover:shadow-lg transition-all duration-300 hover:-translate-y-1 h-full flex flex-col">
      <CardHeader>
        <div className={`${color} w-12 h-12 rounded-md flex items-center justify-center mb-4`}>
          <Icon className="w-6 h-6 text-brand-600" />
        </div>
        <CardTitle className="text-xl font-bold">{title}</CardTitle>
        <CardDescription className="text-muted-foreground">
          {description}
        </CardDescription>
      </CardHeader>
      <CardContent className="flex-grow">
        {highlights.length > 0 && (
          <ul className="space-y-2 mt-4">
            {highlights.map((highlight, index) => (
              <li key={index} className="flex items-start">
                <span className="text-brand-500 mr-2">✓</span>
                <span className="text-sm">{highlight}</span>
              </li>
            ))}
          </ul>
        )}
      </CardContent>
      <CardFooter>
        <Button variant="ghost" className="w-full justify-start hover:bg-transparent text-brand-500 hover:text-brand-600 p-0">
          Подробнее <ArrowRight className="ml-1 h-4 w-4" />
        </Button>
      </CardFooter>
    </Card>
  );
};

export default ServiceCard;
