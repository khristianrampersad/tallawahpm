import React from 'react';

const projects = [
  {
    client: 'Kiewit',
    project: 'Long Harbour Processing Plant',
    description: 'Comprehensive project controls and management for a major processing plant, ensuring timely delivery and risk mitigation.'
  },
  {
    client: 'Burns and McDonnell',
    project: 'Genesee 330P 500-kV Substation Expansion',
    description: 'Led the expansion of a critical substation, providing expert scheduling, cost analysis, and project oversight.'
  },
  {
    client: 'Hydro One',
    project: 'Old School Distribution Station, K4 Transmission Line Refurbishment, Sir Adam Beck Substation Project',
    description: 'Delivered multiple infrastructure upgrades, including distribution, transmission, and substation projects, with a focus on quality and safety.'
  },
  {
    client: 'Confidential Transit Client',
    project: 'Automatic Train Control Project',
    description: 'Supported the implementation of advanced train control systems, improving operational efficiency and safety.'
  }
];

const Projects: React.FC = () => {
  return (
    <section id="projects" className="section-padding bg-secondary-50">
      <div className="container-max">
        <div className="text-center mb-12 lg:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-secondary-900 mb-4">
            Project Experience
          </h2>
          <p className="text-lg sm:text-xl text-secondary-600 max-w-3xl mx-auto">
            A selection of recent projects delivered for leading clients in the energy, infrastructure, and industrial sectors.
          </p>
        </div>
        <div className="grid sm:grid-cols-2 gap-6 lg:gap-8">
          {projects.map((project, idx) => (
            <div key={idx} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 p-6 flex flex-col h-full">
              <div className="mb-3">
                <span className="text-xs sm:text-sm font-medium text-primary-600 bg-primary-100 px-2 sm:px-3 py-1 rounded-full">
                  {project.client}
                </span>
              </div>
              <h3 className="text-lg sm:text-xl font-semibold text-secondary-900 mb-2">
                {project.project}
              </h3>
              <p className="text-secondary-600 mb-4 leading-relaxed text-sm sm:text-base flex-1">
                {project.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects; 