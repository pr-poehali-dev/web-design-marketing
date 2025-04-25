import React, { ReactNode } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

/**
 * Общий лейаут для страницы услуг
 */
interface ServicesLayoutProps {
  children: ReactNode;
}

const ServicesLayout: React.FC<ServicesLayoutProps> = ({ children }) => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default ServicesLayout;
