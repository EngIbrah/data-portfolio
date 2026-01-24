import { ArrowUpRight, Github, FolderKanban, Database, Brain, TrendingUp } from "lucide-react";

/* Projects – Data Analyst first, ML & Full-Stack supported */
const projects = [
  {
    title: "Mental Health AI-Powered Assistant",
    description: "AI-powered assistant that analyzes user input, delivers intelligent mental health insights, and supports therapist booking through a full-stack web platform.",
    image: "/projects/mindcare.png",
    tags: ["Python", "Machine Learning", "NLP", "React", "Node.js"],
    link: "#",
    github: "https://github.com/EngIbrah/mindcare-ai-based-mental-health-platform",
  },
  {
    title: "Customer Shopping Behaviour Analysis",
    description: "Exploratory data analysis focused on customer purchasing patterns, segmentation, and insights to support data-driven business decisions.",
    image: "/projects/customer.png",
    tags: ["Python", "Pandas", "EDA", "Data Analysis", "Visualization"],
    link: "#",
    github: "https://github.com/EngIbrah/Customer-Shopping-Behaviour-Analysis",
  },
  {
    title: "Call Center Performance Analysis",
    description: "Analysis of call center KPIs including response time, resolution rate, and agent efficiency using SQL queries and interactive dashboards.",
    image: "/projects/call-center.png",
    tags: ["SQL", "Power BI", "Data Visualization", "KPIs"],
    link: "#",
    github: "https://github.com/EngIbrah/Call-Center-Performance-Analysis",
  },
  {
    title: "Financial Health Prediction (Zindi Challenge)",
    description: "Machine learning classification project developed for a Zindi competition to predict financial health status from structured datasets.",
    image: "/projects/financial.png",
    tags: ["Python", "Scikit-learn", "Machine Learning", "Zindi"],
    link: "#",
    github: "https://github.com/EngIbrah/Financial-Inclusion-in-Africa-Zindi-Competition",
  },
];

export const Projects = () => {
  return (
    <section id="projects" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        {/* Minimal Header */}
        <div className="max-w-3xl mx-auto mb-12">
          <div className="text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-50 border border-blue-100 text-sm font-medium text-blue-700 mb-4">
              <FolderKanban className="w-4 h-4" />
              Featured Projects
            </div>
            
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Data-Driven Projects with
              <span className="block text-gradient bg-gradient-to-r from-blue-600 to-teal-500">
                Real-World Impact
              </span>
            </h2>
            
            <p className="text-gray-600 max-w-2xl mx-auto">
              Selected projects in data analysis, machine learning, and data-driven applications built using real-world datasets.
            </p>
          </div>
        </div>

        {/* Project Categories */}
        <div className="flex flex-wrap justify-center gap-4 mb-8">
          <div className="flex items-center gap-2 px-4 py-2 rounded-lg bg-blue-50 text-blue-700 text-sm font-medium">
            <Database className="w-4 h-4" />
            Data Analysis
          </div>
          <div className="flex items-center gap-2 px-4 py-2 rounded-lg bg-teal-50 text-teal-700 text-sm font-medium">
            <Brain className="w-4 h-4" />
            Machine Learning
          </div>
          <div className="flex items-center gap-2 px-4 py-2 rounded-lg bg-purple-50 text-purple-700 text-sm font-medium">
            <TrendingUp className="w-4 h-4" />
            Full-Stack Apps
          </div>
        </div>

        {/* Projects Grid with Better Images */}
        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((project, idx) => (
            <div
              key={idx}
              className="group bg-white border border-gray-200 rounded-lg overflow-hidden hover:border-blue-300 hover:shadow-sm transition-all duration-300"
            >
              {/* Image Container - Fixed for consistency */}
              <div className="relative h-56 bg-gradient-to-br from-gray-100 to-gray-200 overflow-hidden">
                {/* Fallback gradient background */}
                <div className="absolute inset-0 bg-gradient-to-br from-blue-50/20 to-teal-50/20" />
                
                {/* Project Image */}
                <img
                  src={project.image}
                  alt={project.title}
                  className="relative w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                  onError={(e) => {
                    e.target.style.display = 'none';
                    e.target.previousElementSibling.style.opacity = '1';
                  }}
                />
                
                {/* GitHub Link */}
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="absolute top-4 right-4 p-2.5 bg-white/95 backdrop-blur-sm rounded-lg shadow-sm hover:shadow-md hover:bg-white transition-all duration-300"
                  aria-label={`View ${project.title} on GitHub`}
                >
                  <Github className="w-4 h-4 text-gray-700" />
                </a>
                
                {/* Category Badge */}
                <div className="absolute top-4 left-4">
                  <div className="px-3 py-1.5 bg-white/95 backdrop-blur-sm rounded-md text-xs font-medium text-gray-700 shadow-sm">
                    {idx === 0 ? "AI/ML" : idx === 1 ? "Data Analysis" : idx === 2 ? "Data Viz" : "ML Challenge"}
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="p-5">
                {/* Title */}
                <h3 className="text-lg font-semibold text-gray-900 mb-2 line-clamp-1">
                  {project.title}
                </h3>

                {/* Description */}
                <p className="text-gray-600 text-sm mb-4 line-clamp-2 leading-relaxed">
                  {project.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-1.5 mb-4">
                  {project.tags.slice(0, 4).map((tag, tagIdx) => (
                    <span
                      key={tagIdx}
                      className="px-2.5 py-1 text-xs font-medium text-gray-700 bg-gray-100 rounded-md border border-gray-200 hover:bg-blue-50 hover:text-blue-700 hover:border-blue-200 transition-colors duration-200"
                    >
                      {tag}
                    </span>
                  ))}
                  {project.tags.length > 4 && (
                    <span className="px-2.5 py-1 text-xs text-gray-500 bg-gray-100 rounded-md">
                      +{project.tags.length - 4}
                    </span>
                  )}
                </div>

                {/* Actions */}
                <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-sm text-gray-700 hover:text-blue-600 transition-colors duration-300"
                  >
                    <Github className="w-4 h-4" />
                    <span>View Code</span>
                  </a>
                  
                  {project.link !== "#" && (
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-sm text-gray-700 hover:text-blue-600 transition-colors duration-300"
                    >
                      <span>Live Demo</span>
                      <ArrowUpRight className="w-4 h-4" />
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-12 pt-8 border-t border-gray-200">
          <a
            href="https://github.com/EngIbrah"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 text-gray-700 border border-gray-300 rounded-lg hover:border-blue-600 hover:text-blue-600 hover:shadow-sm transition-all duration-300"
          >
            <Github className="w-5 h-5" />
            <span>Explore All Projects on GitHub</span>
          </a>
          
          <p className="text-gray-500 text-sm mt-4">
            Focused on data analysis, machine learning, and full-stack development
          </p>
        </div>
      </div>
    </section>
  );
};