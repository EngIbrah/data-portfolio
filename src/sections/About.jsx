import { BarChart3, Brain, Code2, Lightbulb, User, GraduationCap, Target, Database, Settings } from "lucide-react";

const highlights = [
  {
    icon: Database, // Changed to Database to emphasize SQL/Data priority
    title: "Database Architecture",
    description: "Designing relational schemas and optimizing SQL queries for high-performance data persistence and integrity.",
  },
  {
    icon: Settings, // Changed to Settings to emphasize OOP/Systems
    title: "System Design & OOP",
    description: "Applying Object-Oriented principles to build maintainable, modular software that scales with business needs.",
  },
  {
    icon: Code2,
    title: "Full-Stack Engineering",
    description: "Developing end-to-end applications using the MERN stack, focusing on secure APIs and responsive interfaces.",
  },
  {
    icon: Brain,
    title: "Predictive Analytics",
    description: "Engineering data pipelines and ML models to transform raw data into actionable business intelligence.",
  },
];

export const About = () => {
  return (
    <section id="about" className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-start">

          {/* LEFT: Narrative Section */}
          <div className="space-y-8">
            {/* Section Header */}
            <div className="space-y-4">
              <div className="inline-flex items-center gap-2 text-sm font-medium uppercase tracking-wider text-blue-600 animate-fade-in-up">
                <User className="w-4 h-4" />
                Engineering Profile
              </div>

              <h2 className="text-4xl md:text-5xl font-bold leading-tight text-gray-900 animate-fade-in-up animation-delay-100">
                Solving Problems Through
                <span className="block text-gradient bg-gradient-to-r from-blue-600 to-teal-500">
                  Software & Systems
                </span>
              </h2>
            </div>

            {/* Narrative Content */}
            <div className="space-y-6 text-gray-600 leading-relaxed">
              <div className="space-y-4 animate-fade-in-up animation-delay-200">
                <p className="flex items-start gap-2">
                  <GraduationCap className="w-5 h-5 text-blue-600 mt-1 flex-shrink-0" />
                  <span>
                    I am a <strong className="text-gray-900">Computer Engineering student (Class of 2026)</strong> focused on the intersection of robust software development and data-driven intelligence.
                  </span>
                </p>

                <p>
                  My approach is rooted in <strong className="text-gray-900">Systems Thinking</strong>. Beyond just writing code, I enjoy designing the underlying architecture—from relational database schemas in <strong className="text-gray-900">PostgreSQL</strong> to scalable backend services in <strong className="text-gray-900">Node.js</strong> and <strong className="text-gray-900">Python</strong>.
                </p>

                <p>
                  With internship experience at <strong className="text-gray-900">KUWASA</strong> and <strong className="text-gray-900">TANESCO</strong>, I have seen firsthand how critical efficient data management and automated workflows are to large-scale operations.
                </p>
              </div>
            </div>

            {/* Personal Mission Statement */}
            <div className="pt-4 animate-fade-in-up animation-delay-300">
              <div className="p-6 rounded-xl border border-blue-100 bg-gradient-to-r from-blue-50/50 to-white shadow-sm">
                <div className="flex items-center gap-3 mb-3">
                  <Target className="w-5 h-5 text-blue-600" />
                  <h3 className="font-semibold text-gray-900">The Engineering Goal</h3>
                </div>
                <p className="text-gray-700 italic leading-relaxed">
                  "To build software that isn't just functional, but architecturally sound—leveraging OOP principles and optimized data structures to solve complex real-world challenges."
                </p>
              </div>
            </div>
          </div>

          {/* RIGHT: Expertise Highlights */}
          <div className="grid sm:grid-cols-2 gap-6">
            {highlights.map((item, idx) => (
              <div
                key={idx}
                className="group relative bg-white p-8 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md hover:border-blue-100 transition-all duration-300 animate-fade-in-up"
                style={{ 
                  animationDelay: `${(idx + 1) * 100}ms`,
                  animationFillMode: 'both'
                }}
              >
                {/* Icon Container */}
                <div className="w-12 h-12 rounded-xl bg-blue-50 flex items-center justify-center mb-6 group-hover:bg-blue-600 group-hover:text-white transition-colors duration-300">
                  <item.icon className="w-6 h-6 text-blue-600 group-hover:text-white" />
                </div>

                {/* Content */}
                <h3 className="text-lg font-bold text-gray-900 mb-3">
                  {item.title}
                </h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                  {item.description}
                </p>
                
                {/* Visual Accent */}
                <div className="absolute top-0 right-0 p-4 opacity-0 group-hover:opacity-100 transition-opacity">
                   <div className="w-1 h-8 bg-blue-600 rounded-full" />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Engineering Philosophy Footer */}
        <div className="mt-20 pt-10 border-t border-gray-100">
          <div className="grid md:grid-cols-2 gap-12">
            <div className="space-y-4 animate-fade-in-up">
              <h3 className="text-lg font-semibold text-gray-900 flex items-center gap-2">
                <Code2 className="w-5 h-5 text-blue-600" />
                Clean Code & Scalability
              </h3>
              <p className="text-gray-600">
                I prioritize readability and modularity. By following <strong>SOLID principles</strong> and <strong>Object-Oriented patterns</strong>, I ensure that the applications I build are easy to debug, test, and extend.
              </p>
            </div>
            
            <div className="space-y-4 animate-fade-in-up animation-delay-200">
              <h3 className="text-lg font-semibold text-gray-900 flex items-center gap-2">
                <Database className="w-5 h-5 text-teal-600" />
                Data-First Methodology
              </h3>
              <p className="text-gray-600">
                A system is only as good as its data. I focus heavily on <strong>Relational Database Design</strong> and efficient indexing to ensure that data remains consistent and accessible even as the user base grows.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};