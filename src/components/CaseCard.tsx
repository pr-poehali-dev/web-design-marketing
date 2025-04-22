import React from 'react';
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink, ArrowRight } from 'lucide-react';

interface CaseCardProps {
  image: string;
  title: string;
  description: string;
  category: string;
  conversion: string;
  link?: string;
}

const CaseCard: React.FC<CaseCardProps> = ({ 
  image, 
  title, 
  description, 
  category,
  conversion,
  link 
}) => {
  return (
    <Card className="overflow-hidden border-0 shadow-lg">
      <div className="relative overflow-hidden">
        <img 
          src={image} 
          alt={title} 
          className="w-full h-56 object-cover transition-transform duration-500 hover:scale-105"
        />
        <div className="absolute top-3 left-3 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-medium">
          {category}
        </div>
        <div className="absolute top-3 right-3 bg-success px-3 py-1 rounded-full text-xs font-medium text-success-foreground">
          Конверсия: {conversion}
        </div>
      </div>
      <CardContent className="pt-5">
        <h3 className="text-xl font-bold mb-2">{title}</h3>
        <p className="text-muted-foreground text-sm">{description}</p>
      </CardContent>
      <CardFooter className="flex justify-between">
        <Button variant="ghost" className="text-brand-500 hover:text-brand-600 p-0">
          Подробнее <ArrowRight className="ml-1 h-4 w-4" />
        </Button>
        {link && (
          <Button variant="outline" size="sm" className="text-sm" asChild>
            <a href={link} target="_blank" rel="noopener noreferrer">
              Сайт <ExternalLink className="ml-1 h-3 w-3" />
            </a>
          </Button>
        )}
      </CardFooter>
    </Card>
  );
};

export default CaseCard;
