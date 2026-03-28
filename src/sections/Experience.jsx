import { Briefcase, Calendar, Building, Zap } from "lucide-react";

const experiences = [
  {
    period: "Jun 2025 — Nov 2025",
    role: "ICT & Data Engineering Intern",
    company: "KUWASA",
    description: "Modernized data workflows by implementing automated Python scripts. Optimized relational database queries to improve reporting speed by 20%.",
    technologies: ["Python", "SQL", "PostgreSQL", "Pandas"],
    current: false,
  },
  {
    period: "Jun 2024 — Nov 2024",
    role: "Full-Stack Developer",
    company: "AMANZI App",
    description: "Built secure RESTful APIs using Node.js and managed MongoDB for real-time sensor data and user billing.",
    technologies: ["React", "Node.js", "MongoDB", "Express"],
    current: false,
  },
  {
    period: "Jul 2023 — Nov 2023",
    role: "Data Analyst Intern",
    company: "TANESCO",
    description: "Analyzed customer payment trends using SQL and Power BI. Identified bottlenecks in the revenue cycle to reduce payment delays.",
    technologies: ["SQL", "Python", "Power BI", "Data Modeling"],
    current: false,
  },
  {
    period: "Jan 2026 — Present",
    role: "Software Engineering & ML Research",
    company: "Academic & Personal Labs",
    description: "Designing end-to-end AI solutions, including Computer Vision models for quality control and full-stack ecosystems.",
    technologies: ["TypeScript", "Computer Vision", "PostgreSQL", "Next.js"],
    current: true,
  },
];

export const Experience = () => {
  return (
    <section id="experience" className="py-24 bg-white">
      <div className="container mx-auto px-6">
        
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-100 text-[10px] font-bold text-blue-600 uppercase tracking-widest mb-4">
            <Briefcase className="w-3 h-3" />
            Engineering Roadmap
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Practical Experience</h2>
        </div>

        <div className="relative max-w-5xl mx-auto">
          {/* THE GLOWING VERTICAL LINE - Now more visible */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-[2px] bg-blue-100 shadow-[0_0_10px_rgba(37,99,235,0.1)] md:-translate-x-1/2" />

          {/* Reduced space-y from 12 to 8 to bring cards closer together */}
          <div className="space-y-8">
            {experiences.map((exp, idx) => (
              <div key={idx} className="relative group">
                
                {/* Timeline Node - Connection point */}
                <div className={`absolute left-4 md:left-1/2 top-12 -translate-x-[5px] md:-translate-x-1/2 w-3 h-3 rounded-full border-2 border-white z-20 transition-all duration-500 
                  ${exp.current ? 'bg-blue-600 shadow-[0_0_15px_rgba(37,99,235,0.8)]' : 'bg-gray-300 group-hover:bg-blue-500 group-hover:shadow-[0_0_10px_rgba(37,99,235,0.5)]'}
                `} />

                <div className={`flex flex-col md:flex-row gap-6 items-start ${idx % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>
                  
                  {/* The Card with Visible Border and Hover Glow */}
                  <div className="w-full md:w-[46%] ml-10 md:ml-0">
                    <div className="relative p-6 md:p-8 rounded-[1.5rem] border border-gray-200 bg-white transition-all duration-500 
                      hover:border-blue-500 hover:shadow-[0_10px_40px_rgba(37,99,235,0.12)] group-hover:-translate-y-1">
                      
                      {/* Inner light glow */}
                      <div className="absolute inset-0 rounded-[1.5rem] bg-gradient-to-br from-blue-50/0 to-transparent group-hover:from-blue-50/40 transition-all duration-500 -z-10" />

                      <div className="flex items-center justify-between mb-4">
                        <span className="text-[10px] font-bold uppercase tracking-widest text-blue-500">
                          {exp.period}
                        </span>
                        {exp.current && (
                          <span className="flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-blue-50 text-blue-700 text-[10px] font-bold uppercase">
                            <span className="w-1.5 h-1.5 rounded-full bg-blue-600 animate-pulse" />
                            Current
                          </span>
                        )}
                      </div>

                      <h3 className="text-xl font-bold text-gray-900 mb-1 leading-tight">
                        {exp.role}
                      </h3>
                      <p className="text-sm font-semibold text-gray-400 mb-6 flex items-center gap-2">
                        <Building className="w-4 h-4" />
                        {exp.company}
                      </p>

                      <p className="text-gray-600 text-sm leading-relaxed mb-6">
                        {exp.description}
                      </p>

                      <div className="flex flex-wrap gap-2">
                        {exp.technologies.map((tech, tIdx) => (
                          <span
                            key={tIdx}
                            className="px-3 py-1 text-[10px] font-bold text-gray-500 bg-gray-50 rounded-lg border border-gray-100 group-hover:border-blue-100 group-hover:text-blue-600 transition-colors"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Desktop Spacer */}
                  <div className="hidden md:block md:w-[46%]" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};