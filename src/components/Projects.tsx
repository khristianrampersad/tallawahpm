import React from 'react';

const Projects: React.FC = () => {
  const projects = [
    {
      title: "E-commerce Platform Development",
      category: "Technology",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      duration: "6 months",
      team: "12 members",
      image: "bg-gradient-to-br from-blue-400 to-blue-600"
    },
    {
      title: "Corporate Office Renovation",
      category: "Construction",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      duration: "8 months",
      team: "8 members",
      image: "bg-gradient-to-br from-green-400 to-green-600"
    },
    {
      title: "Marketing Campaign Launch",
      category: "Marketing",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      duration: "3 months",
      team: "6 members",
      image: "bg-gradient-to-br from-purple-400 to-purple-600"
    },
    {
      title: "Product Launch Strategy",
      category: "Strategy",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      duration: "4 months",
      team: "10 members",
      image: "bg-gradient-to-br from-orange-400 to-orange-600"
    }
  ];

  return (
    <section id="projects" className="section-padding bg-secondary-50">
      <div className="container-max">
        <div className="text-center mb-12 lg:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-secondary-900 mb-4">
            Recent Projects
          </h2>
          <p className="text-lg sm:text-xl text-secondary-600 max-w-3xl mx-auto">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 gap-6 lg:gap-8">
          {projects.map((project, index) => (
            <div key={index} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
              <div className={`h-40 sm:h-48 ${project.image} flex items-center justify-center`}>
                <div className="text-white text-2xl sm:text-4xl font-bold opacity-20">
                  {project.title.split(' ')[0]}
                </div>
              </div>
              <div className="p-4 sm:p-6">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-xs sm:text-sm font-medium text-primary-600 bg-primary-100 px-2 sm:px-3 py-1 rounded-full">
                    {project.category}
                  </span>
                  <span className="text-xs sm:text-sm text-secondary-500">
                    {project.duration}
                  </span>
                </div>
                <h3 className="text-lg sm:text-xl font-semibold text-secondary-900 mb-3">
                  {project.title}
                </h3>
                <p className="text-secondary-600 mb-4 leading-relaxed text-sm sm:text-base">
                  {project.description}
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-xs sm:text-sm text-secondary-500">
                    Team: {project.team}
                  </span>
                  <button className="text-primary-600 hover:text-primary-700 font-medium transition-colors duration-200 text-sm sm:text-base">
                    View Details →
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <button className="btn-primary">
            View All Projects
          </button>
        </div>
      </div>
    </section>
  );
};

export default Projects; 