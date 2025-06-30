import React from 'react';

const Hero: React.FC = () => {
  return (
    <section id="home" className="bg-gradient-to-br from-primary-50 to-secondary-50 section-padding">
      <div className="container-max">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Content */}
          <div className="space-y-6 lg:space-y-8">
            <div className="space-y-4">
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-secondary-900 leading-tight">
                Transform Your Projects with
                <span className="text-primary-600 block">Expert Management</span>
              </h1>
              <p className="text-lg sm:text-xl text-secondary-600 leading-relaxed">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="btn-primary text-lg px-6 sm:px-8 py-3 sm:py-4">
                Start Your Project
              </button>
              <button className="btn-secondary text-lg px-6 sm:px-8 py-3 sm:py-4">
                View Our Work
              </button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-4 sm:gap-8 pt-6 sm:pt-8 border-t border-secondary-200">
              <div className="text-center">
                <div className="text-2xl sm:text-3xl font-bold text-primary-600">150+</div>
                <div className="text-sm sm:text-base text-secondary-600">Projects Completed</div>
              </div>
              <div className="text-center">
                <div className="text-2xl sm:text-3xl font-bold text-primary-600">98%</div>
                <div className="text-sm sm:text-base text-secondary-600">Client Satisfaction</div>
              </div>
              <div className="text-center">
                <div className="text-2xl sm:text-3xl font-bold text-primary-600">10+</div>
                <div className="text-sm sm:text-base text-secondary-600">Years Experience</div>
              </div>
            </div>
          </div>

          {/* Image/Visual */}
          <div className="relative order-first lg:order-last">
            <div className="bg-gradient-to-br from-primary-400 to-primary-600 rounded-2xl p-6 sm:p-8 shadow-2xl">
              <div className="bg-white rounded-xl p-4 sm:p-6 shadow-lg">
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <div className="w-3 h-3 bg-primary-500 rounded-full"></div>
                    <div className="w-3 h-3 bg-secondary-300 rounded-full"></div>
                    <div className="w-3 h-3 bg-secondary-300 rounded-full"></div>
                  </div>
                  <div className="space-y-3">
                    <div className="h-4 bg-secondary-100 rounded w-3/4"></div>
                    <div className="h-4 bg-secondary-100 rounded w-1/2"></div>
                    <div className="h-4 bg-secondary-100 rounded w-5/6"></div>
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