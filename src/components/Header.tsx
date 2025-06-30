import React, { useState } from 'react';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="container-max">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <div className="flex items-center">
            <h1 className="text-xl sm:text-2xl font-bold text-primary-600">ProjectFlow</h1>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            <a href="#home" className="text-secondary-600 hover:text-primary-600 transition-colors duration-200 font-medium">
              Home
            </a>
            <a href="#services" className="text-secondary-600 hover:text-primary-600 transition-colors duration-200 font-medium">
              Services
            </a>
            <a href="#projects" className="text-secondary-600 hover:text-primary-600 transition-colors duration-200 font-medium">
              Projects
            </a>
            <a href="#about" className="text-secondary-600 hover:text-primary-600 transition-colors duration-200 font-medium">
              About
            </a>
            <a href="#contact" className="text-secondary-600 hover:text-primary-600 transition-colors duration-200 font-medium">
              Contact
            </a>
          </nav>

          {/* CTA Button */}
          <div className="hidden md:block">
            <button className="btn-primary">
              Get Started
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 -mr-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-secondary-200">
            <nav className="flex flex-col space-y-4">
              <a href="#home" className="text-secondary-600 hover:text-primary-600 transition-colors duration-200 font-medium py-2">
                Home
              </a>
              <a href="#services" className="text-secondary-600 hover:text-primary-600 transition-colors duration-200 font-medium py-2">
                Services
              </a>
              <a href="#projects" className="text-secondary-600 hover:text-primary-600 transition-colors duration-200 font-medium py-2">
                Projects
              </a>
              <a href="#about" className="text-secondary-600 hover:text-primary-600 transition-colors duration-200 font-medium py-2">
                About
              </a>
              <a href="#contact" className="text-secondary-600 hover:text-primary-600 transition-colors duration-200 font-medium py-2">
                Contact
              </a>
              <button className="btn-primary w-full mt-4">
                Get Started
              </button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header; 