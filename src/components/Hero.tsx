import React from 'react';
import constructionBg from '../assets/images/illustration-construction-site.jpg';

const Hero: React.FC = () => {
  return (
    <section id="home" className="relative min-h-[80vh] flex items-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img 
          src={constructionBg} 
          alt="Construction site illustration" 
          className="w-full h-full object-cover object-bottom"
        />
        <div className="absolute inset-0 bg-primary-900 bg-opacity-60"></div>
      </div>
      
      <div className="container-max relative z-10 py-12 sm:py-16">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Content */}
          <div className="space-y-6 lg:space-y-8">
            <div className="space-y-4">
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">
                Execute Projects with
                <span className="text-primary-200 block">Confidence</span>
              </h1>
              <p className="text-lg sm:text-xl text-primary-100 leading-relaxed">
                Expert consultation, risk management, and dispute resolution support for your construction and infrastructure projects. We bring control and clarity to complex projects.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <a href="#contact" className="btn-primary text-lg px-6 sm:px-8 py-3 sm:py-4 text-center">
                Start Your Project
              </a>
              <a href="#projects" className="btn-secondary text-lg px-6 sm:px-8 py-3 sm:py-4 text-center">
                View Our Work
              </a>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-4 sm:gap-8 pt-6 sm:pt-8 border-t border-primary-200 border-opacity-30">
              <div className="text-center">
                <div className="text-2xl sm:text-3xl font-bold text-white">15+</div>
                <div className="text-sm sm:text-base text-primary-100">Projects Completed</div>
              </div>
              <div className="text-center">
                <div className="text-2xl sm:text-3xl font-bold text-white">10+</div>
                <div className="text-sm sm:text-base text-primary-100">Years Experience</div>
              </div>
            </div>
          </div>

          {/* Visual Element */}
          <div className="relative order-first lg:order-last">
            <div className="bg-white bg-opacity-90 backdrop-blur-sm rounded-2xl p-6 sm:p-8 shadow-2xl border border-white border-opacity-20">
              <div className="bg-white rounded-xl p-4 sm:p-6 shadow-lg">
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <div className="w-3 h-3 bg-primary-600 rounded-full"></div>
                    <div className="w-3 h-3 bg-primary-300 rounded-full"></div>
                    <div className="w-3 h-3 bg-primary-300 rounded-full"></div>
                  </div>
                  <div className="space-y-3">
                    <div className="h-4 bg-primary-100 rounded w-3/4"></div>
                    <div className="h-4 bg-primary-100 rounded w-1/2"></div>
                    <div className="h-4 bg-primary-100 rounded w-5/6"></div>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    <div className="bg-primary-100 text-primary-700 px-3 py-1 rounded-full text-sm font-medium">
                      Planning
                    </div>
                    <div className="bg-secondary-100 text-secondary-700 px-3 py-1 rounded-full text-sm font-medium">
                      In Progress
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero; 