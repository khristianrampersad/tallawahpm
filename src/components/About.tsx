import React from 'react';

const About: React.FC = () => {
  return (
    <section id="about" className="section-padding bg-white">
      <div className="container-max">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Content */}
          <div className="space-y-6">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-secondary-900">
              About Our Company
            </h2>
            <p className="text-base sm:text-lg text-secondary-600 leading-relaxed">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            </p>
            <p className="text-base sm:text-lg text-secondary-600 leading-relaxed">
              Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
            
            <div className="grid grid-cols-2 gap-4 sm:gap-6 pt-6">
              <div>
                <div className="text-xl sm:text-2xl font-bold text-primary-600 mb-2">10+</div>
                <div className="text-sm sm:text-base text-secondary-600">Years Experience</div>
              </div>
              <div>
                <div className="text-xl sm:text-2xl font-bold text-primary-600 mb-2">150+</div>
                <div className="text-sm sm:text-base text-secondary-600">Projects Completed</div>
              </div>
              <div>
                <div className="text-xl sm:text-2xl font-bold text-primary-600 mb-2">50+</div>
                <div className="text-sm sm:text-base text-secondary-600">Happy Clients</div>
              </div>
              <div>
                <div className="text-xl sm:text-2xl font-bold text-primary-600 mb-2">24/7</div>
                <div className="text-sm sm:text-base text-secondary-600">Support Available</div>
              </div>
            </div>
          </div>

          {/* Visual */}
          <div className="relative order-first lg:order-last">
            <div className="bg-gradient-to-br from-primary-100 to-secondary-100 rounded-2xl p-6 lg:p-8">
              <div className="grid grid-cols-2 gap-3 sm:gap-4">
                <div className="bg-white rounded-lg p-4 sm:p-6 shadow-md">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-primary-100 rounded-lg flex items-center justify-center mb-3 sm:mb-4">
                    <svg className="w-5 h-5 sm:w-6 sm:h-6 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <h3 className="font-semibold text-secondary-900 mb-2 text-sm sm:text-base">Quality Focus</h3>
                  <p className="text-xs sm:text-sm text-secondary-600">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </div>
                <div className="bg-white rounded-lg p-4 sm:p-6 shadow-md">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-primary-100 rounded-lg flex items-center justify-center mb-3 sm:mb-4">
                    <svg className="w-5 h-5 sm:w-6 sm:h-6 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </div>
                  <h3 className="font-semibold text-secondary-900 mb-2 text-sm sm:text-base">Innovation</h3>
                  <p className="text-xs sm:text-sm text-secondary-600">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </div>
                <div className="bg-white rounded-lg p-4 sm:p-6 shadow-md">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-primary-100 rounded-lg flex items-center justify-center mb-3 sm:mb-4">
                    <svg className="w-5 h-5 sm:w-6 sm:h-6 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                    </svg>
                  </div>
                  <h3 className="font-semibold text-secondary-900 mb-2 text-sm sm:text-base">Team Work</h3>
                  <p className="text-xs sm:text-sm text-secondary-600">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </div>
                <div className="bg-white rounded-lg p-4 sm:p-6 shadow-md">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-primary-100 rounded-lg flex items-center justify-center mb-3 sm:mb-4">
                    <svg className="w-5 h-5 sm:w-6 sm:h-6 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <h3 className="font-semibold text-secondary-900 mb-2 text-sm sm:text-base">Efficiency</h3>
                  <p className="text-xs sm:text-sm text-secondary-600">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About; 