import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { Menu, X, Rocket } from "lucide-react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="fixed w-full z-50 bg-background/60 backdrop-blur-md border-b border-primary/20">
      <div className="container mx-auto px-4 flex items-center justify-between h-16">
        <div className="flex items-center">
          <Link to="/" className="flex items-center gap-2">
            <Rocket className="h-5 w-5 text-primary animate-pulse-glow" />
            <span className="text-xl font-bold text-primary">Cosmic</span>
            <span className="text-xl font-bold">Web</span>
          </Link>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <Link to="/" className="text-foreground hover:text-primary transition-colors">
            Главная
          </Link>
          <Link to="/services" className="text-foreground hover:text-primary transition-colors">
            Услуги
          </Link>
          <Link to="/portfolio" className="text-foreground hover:text-primary transition-colors">
            Портфолио
          </Link>
          <Link to="/about" className="text-foreground hover:text-primary transition-colors">
            О нас
          </Link>
          <Link to="/contact" className="text-foreground hover:text-primary transition-colors">
            Контакты
          </Link>
        </nav>

        <div className="hidden md:block">
          <Button className="bg-primary hover:bg-primary/90 btn-hover-effect shadow-neon">
            Начать полет
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden p-2 text-foreground hover:text-primary"
          onClick={toggleMenu}
          aria-label="Меню"
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-card/90 backdrop-blur-md border-b border-primary/20">
          <nav className="container mx-auto px-4 py-4 flex flex-col space-y-4">
            <Link 
              to="/" 
              className="text-foreground hover:text-primary transition-colors py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Главная
            </Link>
            <Link 
              to="/services" 
              className="text-foreground hover:text-primary transition-colors py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Услуги
            </Link>
            <Link 
              to="/portfolio" 
              className="text-foreground hover:text-primary transition-colors py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Портфолио
            </Link>
            <Link 
              to="/about" 
              className="text-foreground hover:text-primary transition-colors py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              О нас
            </Link>
            <Link 
              to="/contact" 
              className="text-foreground hover:text-primary transition-colors py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Контакты
            </Link>
            <Button className="bg-primary hover:bg-primary/90 w-full mt-4 shadow-neon">
              Начать полет
            </Button>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
