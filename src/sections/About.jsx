import { BarChart3, Brain, Code2, Lightbulb, User, GraduationCap, Target } from "lucide-react";

const highlights = [
  {
    icon: BarChart3,
    title: "Data Analysis",
    description: "Exploring and analyzing datasets to uncover insights that drive informed decisions.",
  },
  {
    icon: Brain,
    title: "Machine Learning",
    description: "Building predictive models and integrating them into web applications for real-world use.",
  },
  {
    icon: Code2,
    title: "Full-Stack Development",
    description: "Developing responsive web applications using React, Node.js, Express, and MongoDB (MERN stack).",
  },
  {
    icon: Lightbulb,
    title: "Applied AI",
    description: "Integrating analytics and AI into practical solutions such as dashboards, apps, and automation tools.",
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
                About Me
              </div>

              <h2 className="text-4xl md:text-5xl font-bold leading-tight text-gray-900 animate-fade-in-up animation-delay-100">
                Building
                <span className="block text-gradient bg-gradient-to-r from-blue-600 to-teal-500">
                  Apps & Solutions
                </span>
                That Scale
              </h2>
            </div>

            {/* Narrative Content */}
            <div className="space-y-6 text-gray-600 leading-relaxed">
              <div className="space-y-4 animate-fade-in-up animation-delay-200">
                <p className="flex items-start gap-2">
                  <GraduationCap className="w-5 h-5 text-blue-600 mt-1 flex-shrink-0" />
                  <span>
                    I am a <strong className="text-gray-900">final-year Computer Engineering student</strong> with hands-on experience in
                    <strong className="text-gray-900"> Full-Stack Web Development</strong> and <strong className="text-gray-900">Data Analysis</strong>.
                  </span>
                </p>

                <p>
                  I build modern web applications using <strong className="text-gray-900">React, Node.js, and MERN stack</strong>, and integrate 
                  analytics or ML models to deliver real-world solutions.
                </p>

                <p>
                  I combine programming, database management, and frontend development to deploy responsive, efficient, and scalable applications.
                </p>
              </div>
            </div>

            {/* Personal Mission Statement */}
            <div className="pt-4 animate-fade-in-up animation-delay-300">
              <div className="p-6 rounded-xl border border-blue-100 bg-gradient-to-r from-blue-50/50 to-white">
                <div className="flex items-center gap-3 mb-3">
                  <Target className="w-5 h-5 text-blue-600" />
                  <h3 className="font-semibold text-gray-900">My Mission</h3>
                </div>
                <p className="text-gray-700 italic leading-relaxed">
                  "I transform ideas into functional, full-stack web applications — combining design, code, and data-driven logic to create impact."
                </p>
              </div>
            </div>
          </div>

          {/* RIGHT: Expertise Highlights */}
          <div className="grid sm:grid-cols-2 gap-6">
            {highlights.map((item, idx) => (
              <div
                key={idx}
                className="card hover-lift animate-fade-in-up"
                style={{ 
                  animationDelay: `${(idx + 1) * 100}ms`,
                  animationFillMode: 'both'
                }}
              >
                <div className="p-6">
                  {/* Icon Container */}
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-50 to-blue-100 flex items-center justify-center mb-4 transition-all duration-300 group-hover:from-blue-100 group-hover:to-blue-200">
                    <item.icon className={`w-6 h-6 ${
                      idx === 0 ? 'text-blue-600' :
                      idx === 1 ? 'text-teal-600' :
                      idx === 2 ? 'text-purple-600' :
                      'text-amber-600'
                    }`} />
                  </div>

                  {/* Content */}
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    {item.title}
                  </h3>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    {item.description}
                  </p>
                </div>

                {/* Subtle bottom accent */}
                <div className={`h-1 rounded-b-xl ${
                  idx === 0 ? 'bg-blue-600/20' :
                  idx === 1 ? 'bg-teal-600/20' :
                  idx === 2 ? 'bg-purple-600/20' :
                  'bg-amber-600/20'
                }`} />
              </div>
            ))}
          </div>
        </div>

        {/* Education & Approach Footer */}
        <div className="mt-20 pt-10 border-t border-gray-100">
          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-4 animate-fade-in-up">
              <h3 className="text-lg font-semibold text-gray-900 flex items-center gap-2">
                <GraduationCap className="w-5 h-5 text-blue-600" />
                Engineering Foundation
              </h3>
              <p className="text-gray-600">
                My computer engineering background provides a strong foundation in systems thinking, 
                problem-solving, and understanding how software interacts with hardware — essential for 
                building efficient, scalable applications.
              </p>
            </div>
            
            <div className="space-y-4 animate-fade-in-up animation-delay-200">
              <h3 className="text-lg font-semibold text-gray-900 flex items-center gap-2">
                <Lightbulb className="w-5 h-5 text-teal-600" />
                Practical Approach
              </h3>
              <p className="text-gray-600">
                I focus on delivering working solutions first, then iterating for optimization. 
                Whether it's a full-stack app or data pipeline, my goal is to create maintainable 
                systems that solve real problems.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};