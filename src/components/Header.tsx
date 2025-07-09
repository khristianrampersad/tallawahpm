import React, { useState } from 'react';
import logo from '../assets/logos/Logo.png';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50 border-b border-primary-100">
      <div className="container-max">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <div className="flex items-center">
            <a href="#home" className="block w-36 sm:w-44">
              <img src={logo} alt="Logo" className="h-14 sm:h-20 w-auto object-contain" />
            </a>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            <a href="#home" className="text-primary-600 hover:text-primary-800 transition-colors duration-200 font-medium">
              Home
            </a>
            <a href="#services" className="text-primary-600 hover:text-primary-800 transition-colors duration-200 font-medium">
              Services
            </a>
            <a href="#projects" className="text-primary-600 hover:text-primary-800 transition-colors duration-200 font-medium">
              Projects
            </a>
            <a href="#about" className="text-primary-600 hover:text-primary-800 transition-colors duration-200 font-medium">
              About
            </a>
            <a href="#contact" className="text-primary-600 hover:text-primary-800 transition-colors duration-200 font-medium">
              Contact
            </a>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 -mr-2 text-primary-600 hover:text-primary-800 transition-colors duration-200"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-primary-100">
            <nav className="flex flex-col space-y-4">
              <a href="#home" className="text-primary-600 hover:text-primary-800 transition-colors duration-200 font-medium py-2">
                Home
              </a>
              <a href="#services" className="text-primary-600 hover:text-primary-800 transition-colors duration-200 font-medium py-2">
                Services
              </a>
              <a href="#projects" className="text-primary-600 hover:text-primary-800 transition-colors duration-200 font-medium py-2">
                Projects
              </a>
              <a href="#about" className="text-primary-600 hover:text-primary-800 transition-colors duration-200 font-medium py-2">
                About
              </a>
              <a href="#contact" className="text-primary-600 hover:text-primary-800 transition-colors duration-200 font-medium py-2">
                Contact
              </a>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header; 