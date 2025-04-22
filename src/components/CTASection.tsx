import React from 'react';
import { Button } from "@/components/ui/button";
import { ArrowRight } from 'lucide-react';

const CTASection = () => {
  return (
    <section className="py-16 bg-gradient-to-r from-brand-500 to-violet">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="md:w-2/3 mb-8 md:mb-0">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Готовы увеличить продажи вашего бизнеса?
            </h2>
            <p className="text-white/80 text-lg max-w-xl">
              Закажите создание сайта с высокой конверсией уже сегодня и получите бесплатный SEO-аудит в подарок!
            </p>
          </div>
          <div>
            <Button size="lg" className="bg-white text-brand-500 hover:bg-white/90 btn-hover-effect">
              Заказать проект <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
