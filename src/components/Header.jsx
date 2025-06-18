import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import logo from '../assets/logo.svg'; // Adjust the path as necessary

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeTab, setActiveTab] = useState('О компании'); // Default active tab

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const navItems = ['О компании', 'Услуги', 'Кейсы', 'Контакты'];

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-slate-800 text-white shadow-lg">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo и Главная */}
          <div className="flex items-center space-x-2">
            <img src={logo} alt="Logo" className="w-14 h-16" />
            <a
              href="#"
              onClick={() => setActiveTab('Главная')}
              className={`text-lg font-semibold transition-transform duration-200 ${
                activeTab === 'Главная'
                  ? 'border-b-2 border-white'
                  : ''
              } hover:scale-105`}
            >
              Главная
            </a>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            {navItems.map((item) => (
              <a
                key={item}
                href="#"
                onClick={() => setActiveTab(item)}
                className={`transition-transform duration-200 ${
                  activeTab === item
                    ? 'border-b-2 border-white pb-1'
                    : ''
                } hover:scale-105`}
              >
                {item}
              </a>
            ))}
          </nav>

          {/* Desktop CTA Button */}
          <button className="hidden md:block bg-blue-600 hover:bg-blue-700 px-6 py-2 rounded-lg transition-colors">
            Оставить заявку
          </button>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMenu}
            className="md:hidden p-2 rounded-lg hover:bg-slate-700 transition-colors"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden border-t border-slate-700">
            <nav className="py-4 space-y-2">
              {navItems.map((item) => (
                <a
                  key={item}
                  href="#"
                  onClick={() => {
                    setActiveTab(item);
                    setIsMenuOpen(false);
                  }}
                  className={`block py-2 px-4 rounded transition-transform duration-200 ${
                    activeTab === item ? 'bg-slate-700 font-semibold' : ''
                  } hover:scale-105`}
                >
                  {item}
                </a>
              ))}
              <button className="w-full mt-4 bg-blue-600 hover:bg-blue-700 px-6 py-3 rounded-lg transition-colors">
                Оставить заявку
              </button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
