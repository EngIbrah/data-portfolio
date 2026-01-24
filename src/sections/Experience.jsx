import { Briefcase, Calendar, Building, TrendingUp } from "lucide-react";

const experiences = [
  {
    period: "Jun 2025 — Nov 2025",
    role: "ICT & Data Intern",
    company: "KUWASA (Kigoma Urban Water Supply & Sanitation Authority)",
    description: "Supported ICT operations and data-related tasks including data cleaning, reporting, and system support. Assisted in analyzing operational data to improve processes and service delivery.",
    technologies: ["Python", "Excel", "Data Cleaning", "Reporting", "ICT Support"],
    current: false,
  },
  {
    period: "Jun 2024 — Nov 2024",
    role: "Full-Stack Developer (Project-Based)",
    company: "AMANZI App",
    description: "Built frontend and backend features, integrated APIs, and delivered data-driven functionalities for water-service monitoring applications.",
    technologies: ["React", "Node.js", "MongoDB", "REST APIs", "JavaScript"],
    current: false,
  },
  {
    period: "Jul 2023 — Nov 2023",
    role: "Data Analyst Intern",
    company: "TANESCO (Tanzania Electric Supply Company)",
    description: "Analyzed customer service operations data, identified trends in delayed/incomplete payments, and delivered insights for operational improvement.",
    technologies: ["Python", "SQL", "Excel", "Power BI", "Data Analysis"],
    current: false,
  },
  {
    period: "Jun 2025 — Present",
    role: "Full-Stack & ML Projects",
    company: "Academic & Personal Projects (Zindi, Coursework)",
    description: "Developed multiple full-stack applications and ML projects including predictive models, data visualizations, and AI-powered solutions.",
    technologies: ["React", "Node.js", "Python", "Machine Learning", "MongoDB", "Zindi"],
    current: true,
  },
];

export const Experience = () => {
  return (
    <section id="experience" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        {/* Minimal Header */}
        <div className="max-w-3xl mx-auto mb-12">
          <div className="text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-50 border border-blue-100 text-sm font-medium text-blue-700 mb-4">
              <Briefcase className="w-4 h-4" />
              Experience Timeline
            </div>
            
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">
              Practical Experience in
              <span className="block text-gradient bg-gradient-to-r from-blue-600 to-teal-500">
                Full-Stack & Data
              </span>
            </h2>
            
            <p className="text-gray-600 max-w-2xl mx-auto">
              Hands-on experience through internships, personal projects, and real-world applications.
            </p>
          </div>
        </div>

        {/* Timeline Container */}
        <div className="relative max-w-5xl mx-auto">
          {/* Vertical Line */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-200 via-blue-300 to-blue-200 md:-translate-x-1/2" />

          {/* Timeline Items */}
          <div className="space-y-8">
            {experiences.map((exp, idx) => (
              <div
                key={idx}
                className="relative"
              >
                {/* Timeline Dot */}
                <div className={`
                  absolute left-4 md:left-1/2 top-6 w-3 h-3 rounded-full z-10
                  ${exp.current ? 'bg-blue-600' : 'bg-blue-400'}
                  ${idx % 2 === 0 ? 'md:-translate-x-[calc(0.5rem+1px)]' : 'md:-translate-x-[calc(0.5rem+1px)]'}
                `}>
                  {exp.current && (
                    <span className="absolute inset-0 rounded-full bg-blue-600 animate-ping opacity-20" />
                  )}
                </div>

                {/* Experience Card */}
                <div className={`
                  ml-12 md:ml-0 md:w-[calc(50%-2rem)]
                  ${idx % 2 === 0 ? 'md:mr-auto md:pr-12' : 'md:ml-auto md:pl-12'}
                `}>
                  <div className="bg-white border border-gray-200 rounded-lg p-5 hover:border-blue-300 hover:shadow-sm transition-all duration-300">
                    {/* Header */}
                    <div className="flex items-start justify-between mb-3">
                      <div>
                        <div className="flex items-center gap-2 text-sm text-blue-600 font-medium mb-1">
                          <Calendar className="w-3.5 h-3.5" />
                          {exp.period}
                          {exp.current && (
                            <span className="px-2 py-0.5 text-xs bg-blue-50 text-blue-700 rounded-full">
                              Current
                            </span>
                          )}
                        </div>
                        
                        <h3 className="text-lg font-semibold text-gray-900">
                          {exp.role}
                        </h3>
                        
                        <div className="flex items-center gap-1.5 text-gray-600 text-sm mt-1">
                          <Building className="w-3.5 h-3.5" />
                          {exp.company}
                        </div>
                      </div>
                    </div>

                    {/* Description */}
                    <p className="text-gray-600 text-sm leading-relaxed mb-4">
                      {exp.description}
                    </p>

                    {/* Technologies */}
                    <div className="flex flex-wrap gap-1.5">
                      {exp.technologies.map((tech, techIdx) => (
                        <span
                          key={techIdx}
                          className="px-2.5 py-1 text-xs font-medium text-gray-700 bg-gray-100 rounded-md border border-gray-200 hover:bg-blue-50 hover:text-blue-700 hover:border-blue-200 transition-colors duration-200"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    {/* Timeline Progress Indicator */}
                    {idx < experiences.length - 1 && (
                      <div className={`
                        absolute top-full left-4 md:left-1/2 w-0.5 h-8
                        ${idx % 2 === 0 ? 'md:-translate-x-[calc(0.5rem+1px)]' : 'md:-translate-x-[calc(0.5rem+1px)]'}
                        bg-gradient-to-b from-blue-200 to-blue-100
                      `} />
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Career Progress Summary */}
          <div className="mt-12 pt-8 border-t border-gray-200">
            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center p-4">
                <div className="text-2xl font-bold text-blue-600 mb-2">3+</div>
                <div className="text-sm text-gray-600">Professional Roles</div>
              </div>
              
              <div className="text-center p-4">
                <div className="text-2xl font-bold text-teal-600 mb-2">2+</div>
                <div className="text-sm text-gray-600">Years Experience</div>
              </div>
              
              <div className="text-center p-4">
                <div className="text-2xl font-bold text-purple-600 mb-2">15+</div>
                <div className="text-sm text-gray-600">Technologies Used</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};