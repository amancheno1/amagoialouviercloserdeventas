import React, { useState, useEffect } from 'react';
import { Menu, X, Phone, Mail } from 'lucide-react';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  return (
    <header className={`fixed w-full z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white shadow-lg' : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center space-x-3">
            <img 
              src="/public/amagpia-closer2.jpg" 
              alt="Amagoia Louvier Logo" 
              className="h-12 w-12 rounded-full object-cover border-2 border-amber-400"
            />
            <div>
              <h1 className={`text-xl font-bold transition-colors duration-300 ${
                isScrolled ? 'text-gray-900' : 'text-white'
              }`}>
                Amagoia Louvier
              </h1>
              <p className={`text-sm transition-colors duration-300 ${
                isScrolled ? 'text-amber-600' : 'text-amber-300'
              }`}>
                Closer de Alto Ticket
              </p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <button 
              onClick={() => scrollToSection('about')}
              className={`transition-colors duration-300 hover:text-amber-500 ${
                isScrolled ? 'text-gray-700' : 'text-white'
              }`}
            >
              Sobre Mí
            </button>
            <button 
              onClick={() => scrollToSection('services')}
              className={`transition-colors duration-300 hover:text-amber-500 ${
                isScrolled ? 'text-gray-700' : 'text-white'
              }`}
            >
              Servicios
            </button>
            <button 
              onClick={() => scrollToSection('results')}
              className={`transition-colors duration-300 hover:text-amber-500 ${
                isScrolled ? 'text-gray-700' : 'text-white'
              }`}
            >
              Resultados
            </button>
            <a 
              href="tel:+34627985178"
              className="bg-amber-500 text-white px-6 py-2 rounded-full hover:bg-amber-600 transition-colors duration-300 flex items-center space-x-2"
            >
              <Phone size={16} />
              <span>Contactar</span>
            </a>
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className={`md:hidden transition-colors duration-300 ${
              isScrolled ? 'text-gray-900' : 'text-white'
            }`}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden bg-white border-t border-gray-200">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <button 
                onClick={() => scrollToSection('about')}
                className="block px-3 py-2 text-gray-700 hover:text-amber-500 transition-colors duration-300"
              >
                Sobre Mí
              </button>
              <button 
                onClick={() => scrollToSection('services')}
                className="block px-3 py-2 text-gray-700 hover:text-amber-500 transition-colors duration-300"
              >
                Servicios
              </button>
              <button 
                onClick={() => scrollToSection('results')}
                className="block px-3 py-2 text-gray-700 hover:text-amber-500 transition-colors duration-300"
              >
                Resultados
              </button>
              <a 
                href="tel:+34600000000"
                className="block px-3 py-2 bg-amber-500 text-white rounded-lg hover:bg-amber-600 transition-colors duration-300 text-center"
              >
                Contactar Ahora
              </a>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;