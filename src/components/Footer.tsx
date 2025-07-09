import React from 'react';
import logo from '../assets/logos/Logo.png';

const Footer: React.FC = () => {
  return (
    <footer className="bg-white border-t border-secondary-200">
      <div className="container-max py-12 sm:py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <div className="mb-6">
              <img src={logo} alt="Logo" className="h-16 sm:h-20 w-auto object-contain" />
            </div>
            <p className="text-secondary-600 mb-6 leading-relaxed">
              We specialize in project management consultation, risk management, and dispute resolution for construction and infrastructure projects. Our expertise ensures your projects are delivered on time, within budget, and to the highest quality standards.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-secondary-500 hover:text-primary-600 transition-colors duration-200">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/>
                </svg>
              </a>
              <a href="#" className="text-secondary-500 hover:text-primary-600 transition-colors duration-200">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-secondary-900">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="#home" className="text-secondary-600 hover:text-primary-600 transition-colors duration-200">Home</a></li>
              <li><a href="#services" className="text-secondary-600 hover:text-primary-600 transition-colors duration-200">Services</a></li>
              <li><a href="#projects" className="text-secondary-600 hover:text-primary-600 transition-colors duration-200">Projects</a></li>
              <li><a href="#about" className="text-secondary-600 hover:text-primary-600 transition-colors duration-200">About</a></li>
              <li><a href="#contact" className="text-secondary-600 hover:text-primary-600 transition-colors duration-200">Contact</a></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-secondary-900">Services</h3>
            <ul className="space-y-2">
              <li><a href="#services" className="text-secondary-600 hover:text-primary-600 transition-colors duration-200">Project Management</a></li>
              <li><a href="#services" className="text-secondary-600 hover:text-primary-600 transition-colors duration-200">Recruitment & Selection</a></li>
              <li><a href="#services" className="text-secondary-600 hover:text-primary-600 transition-colors duration-200">Risk Analysis</a></li>
              <li><a href="#services" className="text-secondary-600 hover:text-primary-600 transition-colors duration-200">Training & Knowledge Sharing</a></li>
              <li><a href="#services" className="text-secondary-600 hover:text-primary-600 transition-colors duration-200">Performance Evaluation</a></li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-secondary-200 mt-8 pt-8 text-center">
          <p className="text-secondary-500">
            © 2024 ProjectFlow. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 