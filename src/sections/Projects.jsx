import { ArrowUpRight, Github, FolderKanban, Database, Brain, TrendingUp, Cpu, Layout } from "lucide-react";

/* Updated Projects – Focusing on Engineering & Scale */
const projects = [
  {
    title: "Rice Quality Analysis (Computer Vision)",
    description: "Developed a Computer Vision model to automate rice quality grading. Leveraged image processing to detect defects and categorize grains with high precision.",
    image: "/projects/rice-ai.png", 
    category: "AI / Computer Vision",
    tags: ["Python", "OpenCV", "TensorFlow", "Image Processing"],
    link: "#",
    github: "https://github.com/EngIbrah",
  },
  {
    title: "Full-Stack Restaurant Ecosystem",
    description: "A comprehensive digital platform featuring real-time menu management, secure checkout, and a relational database for order tracking and analytics.",
    image: "/projects/restaurant.png",
    category: "Full-Stack",
    tags: ["React", "Node.js", "PostgreSQL", "Tailwind CSS"],
    link: "#",
    github: "https://github.com/EngIbrah",
  },
  {
    title: "MindCare: AI Mental Health Platform",
    description: "Architected a full-stack platform using Next.js and Prisma. Features an AI assistant for sentiment analysis and a robust SQL backend for appointment scheduling.",
    image: "/projects/mindcare.png",
    category: "AI / Health-Tech",
    tags: ["Next.js", "Prisma", "SQL", "NLP", "Node.js"],
    link: "#",
    github: "https://github.com/EngIbrah/mindcare-ai-based-mental-health-platform",
  },
  {
    title: "AI Course Generator (Mobile)",
    description: "A mobile-first application using Gemini AI to generate structured learning paths, powered by Firebase for secure user data and progress persistence.",
    image: "/projects/ai-course-generator.png",
    category: "AI / Mobile",
    tags: ["React Native", "Expo", "Gemini AI", "Firebase"],
    link: "#",
    github: "https://github.com/EngIbrah/AI-Course-generator",
  },
  {
    title: "Call Center Performance Analysis",
    description: "Engineered a data pipeline to analyze call center KPIs. Optimized SQL queries to process large datasets for real-time performance visualization.",
    image: "/projects/call-center.png",
    category: "Data Engineering",
    tags: ["SQL", "PostgreSQL", "Power BI", "Data Analysis"],
    link: "#",
    github: "https://github.com/EngIbrah/Call-Center-Performance-Analysis",
  },
  {
    title: "Customer Behaviour Analysis",
    description: "Applied Exploratory Data Analysis (EDA) to large-scale retail datasets to identify purchasing patterns and optimize customer segmentation.",
    image: "/projects/customer.png",
    category: "Data Science",
    tags: ["Python", "Pandas", "EDA", "Statistical Modeling"],
    link: "#",
    github: "https://github.com/EngIbrah/Customer-Shopping-Behaviour-Analysis",
  },
];

export const Projects = () => {
  return (
    <section id="projects" className="py-24 bg-gray-50/50">
      <div className="container mx-auto px-6">
        
        {/* Header */}
        <div className="max-w-3xl mx-auto mb-16">
          <div className="text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-50 border border-blue-100 text-sm font-medium text-blue-700 mb-6">
              <FolderKanban className="w-4 h-4" />
              Engineering Portfolio
            </div>
            
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Scalable Systems &
              <span className="block text-gradient bg-gradient-to-r from-blue-600 to-teal-500">
                Data-Driven Solutions
              </span>
            </h2>
            
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Bridging the gap between robust software engineering and advanced data analytics through practical, real-world applications.
            </p>
          </div>
        </div>

        {/* Project Categories Filter (Visual only) */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {[
            { label: "Systems & Apps", icon: Cpu },
            { label: "Data & SQL", icon: Database },
            { label: "AI & Vision", icon: Brain }
          ].map((cat, i) => (
            <div key={i} className="flex items-center gap-2 px-5 py-2.5 rounded-xl bg-white border border-gray-200 text-gray-700 text-sm font-semibold shadow-sm">
              <cat.icon className="w-4 h-4 text-blue-600" />
              {cat.label}
            </div>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, idx) => (
            <div key={idx} className="group flex flex-col h-full bg-white rounded-2xl border border-gray-200 overflow-hidden hover:shadow-xl hover:border-blue-200 transition-all duration-300">
              
              {/* Image Container */}
              <div className="relative h-52 overflow-hidden bg-gray-100">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                   <p className="text-white text-xs font-medium uppercase tracking-widest">{project.category}</p>
                </div>
                
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="absolute top-4 right-4 p-2 bg-white/90 backdrop-blur-sm rounded-lg shadow-sm hover:bg-white transition-all"
                >
                  <Github className="w-5 h-5 text-gray-700" />
                </a>
              </div>

              {/* Content Container - Flex-grow ensures buttons align at bottom */}
              <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
                  {project.title}
                </h3>

                <p className="text-gray-600 text-sm mb-6 leading-relaxed flex-grow">
                  {project.description}
                </p>

                {/* Tech Tags */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.map((tag, tagIdx) => (
                    <span
                      key={tagIdx}
                      className="px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider text-gray-500 bg-gray-50 rounded-md border border-gray-100"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Action Footer */}
                <div className="pt-4 border-t border-gray-100 flex items-center justify-between mt-auto">
                  <a
                    href={project.github}
                    className="text-sm font-semibold text-gray-700 hover:text-blue-600 flex items-center gap-1.5 transition-colors"
                  >
                    View Source <Github className="w-4 h-4" />
                  </a>
                  
                  {project.link !== "#" && (
                    <a
                      href={project.link}
                      className="text-sm font-semibold text-blue-600 hover:text-blue-700 flex items-center gap-1 transition-colors"
                    >
                      Live Demo <ArrowUpRight className="w-4 h-4" />
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 text-center">
          <p className="text-gray-500 mb-6 font-medium">Want to see the system architecture for these?</p>
          <a
            href="https://github.com/EngIbrah"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 px-8 py-4 bg-gray-900 text-white rounded-xl hover:bg-blue-600 hover:shadow-lg transition-all duration-300 font-semibold"
          >
            <Github className="w-5 h-5" />
            Full Project Repository
          </a>
        </div>
      </div>
    </section>
  );
};