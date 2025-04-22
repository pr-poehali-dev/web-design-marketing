import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="fixed w-full z-50 bg-background/95 backdrop-blur-sm border-b border-border">
      <div className="container mx-auto px-4 flex items-center justify-between h-16">
        <div className="flex items-center">
          <Link to="/" className="flex items-center">
            <span className="text-xl font-bold text-brand-500">WebProfi</span>
            <span className="text-xl font-bold">.Studio</span>
          </Link>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <Link to="/" className="text-foreground hover:text-brand-500 transition-colors">
            Главная
          </Link>
          <Link to="/services" className="text-foreground hover:text-brand-500 transition-colors">
            Услуги
          </Link>
          <Link to="/portfolio" className="text-foreground hover:text-brand-500 transition-colors">
            Портфолио
          </Link>
          <Link to="/about" className="text-foreground hover:text-brand-500 transition-colors">
            О нас
          </Link>
          <Link to="/contact" className="text-foreground hover:text-brand-500 transition-colors">
            Контакты
          </Link>
        </nav>

        <div className="hidden md:block">
          <Button className="bg-brand-500 hover:bg-brand-600 btn-hover-effect">
            Заказать проект
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden p-2 text-foreground"
          onClick={toggleMenu}
          aria-label="Меню"
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-background border-b border-border">
          <nav className="container mx-auto px-4 py-4 flex flex-col space-y-4">
            <Link 
              to="/" 
              className="text-foreground hover:text-brand-500 transition-colors py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Главная
            </Link>
            <Link 
              to="/services" 
              className="text-foreground hover:text-brand-500 transition-colors py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Услуги
            </Link>
            <Link 
              to="/portfolio" 
              className="text-foreground hover:text-brand-500 transition-colors py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Портфолио
            </Link>
            <Link 
              to="/about" 
              className="text-foreground hover:text-brand-500 transition-colors py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              О нас
            </Link>
            <Link 
              to="/contact" 
              className="text-foreground hover:text-brand-500 transition-colors py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Контакты
            </Link>
            <Button className="bg-brand-500 hover:bg-brand-600 w-full mt-4">
              Заказать проект
            </Button>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
