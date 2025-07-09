import React from 'react';
import ttcImage from '../assets/images/ttc-subway-line-1.jpg';
import longHarbourImage from '../assets/images/LongHarbourProcessingPlant_LongHarbour-NL_34.jpg';

const projects = [
  {
    client: 'Kiewit',
    project: 'Long Harbour Processing Plant',
    description: 'Comprehensive project controls and management for a major processing plant, ensuring timely delivery and risk mitigation.',
    image: longHarbourImage
  },
  {
    client: 'Burns and McDonnell',
    project: 'Genesee 330P 500-kV Substation Expansion',
    description: 'Led the expansion of a critical substation, providing expert scheduling, cost analysis, and project oversight.',
    image: longHarbourImage
  },
  {
    client: 'Hydro One',
    project: 'Old School Distribution Station, K4 Transmission Line Refurbishment, Sir Adam Beck Substation Project',
    description: 'Delivered multiple infrastructure upgrades, including distribution, transmission, and substation projects, with a focus on quality and safety.',
    image: longHarbourImage
  },
  {
    client: 'Confidential Transit Client',
    project: 'Automatic Train Control Project',
    description: 'Supported the implementation of advanced train control systems, improving operational efficiency and safety.',
    image: ttcImage
  }
];

const Projects: React.FC = () => {
  return (
    <section id="projects" className="section-padding bg-primary-50">
      <div className="container-max">
        <div className="text-center mb-12 lg:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-primary-900 mb-4">
            Project Experience
          </h2>
          <p className="text-lg sm:text-xl text-primary-600 max-w-3xl mx-auto">
            A selection of recent projects delivered for leading clients in the energy, infrastructure, and industrial sectors.
          </p>
        </div>
        <div className="grid sm:grid-cols-2 gap-6 lg:gap-8">
          {projects.map((project, idx) => (
            <div key={idx} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 border border-primary-100">
              <div className="h-48 sm:h-56 overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.project}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-6 flex flex-col h-full">
                <div className="mb-3">
                  <span className="text-xs sm:text-sm font-medium text-primary-700 bg-primary-100 px-2 sm:px-3 py-1 rounded-full border border-primary-200">
                    {project.client}
                  </span>
                </div>
                <h3 className="text-lg sm:text-xl font-semibold text-primary-900 mb-2">
                  {project.project}
                </h3>
                <p className="text-primary-600 mb-4 leading-relaxed text-sm sm:text-base flex-1">
                  {project.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects; 