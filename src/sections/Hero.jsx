import { Button } from "@/components/Button";
import { ArrowRight, ChevronDown, Github, Linkedin, Download, Sparkles, Code, Database, Cpu } from "lucide-react";

const skills = [
  "React.js", "Node.js", "Express.js", "MongoDB", "PostgreSQL",
  "Python", "SQL", "Tailwind CSS", "TypeScript", "Git", "Next.js",
  "FastAPI", "Docker", "AWS", "Data Analysis", "Machine Learning"
];

const expertiseAreas = [
  {
    title: "Frontend Development",
    description: "React, Next.js, TypeScript",
    icon: Code,
    color: "text-blue-600"
  },
  {
    title: "Backend & APIs",
    description: "Node.js, Python, REST/GraphQL",
    icon: Database,
    color: "text-teal-600"
  },
  {
    title: "Data & AI",
    description: "Python, SQL, ML Models",
    icon: Cpu,
    color: "text-purple-600"
  }
];

export const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-white">
      {/* Subtle grid pattern background */}
      <div className="absolute inset-0 bg-gradient-to-br from-white via-gray-50/30 to-white" />
      <div className="absolute inset-0 grid-pattern opacity-[0.03]" />

      <div className="container mx-auto px-6 pt-24 pb-16 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">

          {/* LEFT: Text Content */}
          <div className="space-y-8">
            {/* Value Proposition Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-50 border border-blue-100 text-sm font-medium text-blue-700 animate-fade-in-up">
              <Sparkles className="w-4 h-4" />
              Full-Stack Developer • Data-Driven Solutions
            </div>

            {/* Headline with Personal Branding */}
            <div className="space-y-4">
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight text-gray-900 animate-fade-in-up animation-delay-100">
                <span className="block">Hi, I'm</span>
                <span className="text-gradient bg-gradient-to-r from-blue-600 to-teal-500">
                  Ibrahim Ndagiwe
                </span>
              </h1>
              
              <h2 className="text-2xl md:text-3xl text-gray-600 font-semibold animate-fade-in-up animation-delay-200">
                Building <span className="text-blue-600">scalable web apps</span> &{" "}
                <span className="text-teal-600">data solutions</span>
              </h2>
            </div>

            {/* Professional Summary */}
            <p className="text-lg text-gray-600 max-w-xl leading-relaxed animate-fade-in-up animation-delay-300">
              I specialize in creating full-stack applications with React/Node.js 
              and developing data-driven solutions with Python. Focused on 
              building products that are not just functional, but scalable, 
              maintainable, and deliver real business value.
            </p>

            {/* Expertise Areas */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2 animate-fade-in-up animation-delay-400">
              {expertiseAreas.map((area, idx) => (
                <div
                  key={idx}
                  className="p-4 rounded-lg border border-gray-200 bg-white hover:border-blue-200 hover:shadow-sm transition-all duration-300"
                >
                  <div className="flex items-center gap-3 mb-2">
                    <div className={`p-2 rounded-lg ${area.color} bg-opacity-10`}>
                      <area.icon className="w-5 h-5" />
                    </div>
                    <span className="font-semibold text-gray-800 text-sm">
                      {area.title}
                    </span>
                  </div>
                  <p className="text-xs text-gray-500">{area.description}</p>
                </div>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4 pt-4 animate-fade-in-up animation-delay-500">
              <Button size="lg" asChild variant="outline">
                <a href="#projects" className="flex items-center gap-2">
                  View My Work <ArrowRight className="w-5 h-5" />
                </a>
              </Button>

              <Button
                size="lg"
                variant="secondary"
                asChild
                className="border-gray-300 text-gray-700 hover:border-blue-600 hover:text-blue-600"
              >
                <a
                  href="/ibrahim_ndagiwe_cv.pdf"
                  download="Ibrahim_Ndagiwe_CV.pdf"
                  className="flex items-center gap-2"
                >
                  <Download className="w-5 h-5" />
                  Download CV
                </a>
              </Button>
            </div>

            {/* Social Links */}
            <div className="flex items-center gap-4 pt-6 animate-fade-in-up animation-delay-600">
              <span className="text-sm text-gray-500">Connect with me:</span>
              <div className="flex gap-3">
                {[
                  {
                    icon: Github,
                    href: "https://github.com/EngIbrah",
                    label: "GitHub"
                  },
                  {
                    icon: Linkedin,
                    href: "https://www.linkedin.com/in/ibrahim-ndagiwe/",
                    label: "LinkedIn"
                  },
                ].map((social, idx) => (
                  <a
                    key={idx}
                    href={social.href}
                    aria-label={social.label}
                    className="p-2.5 rounded-full border border-gray-300 bg-white hover:border-blue-600 hover:text-blue-600 hover:shadow-sm transition-all duration-300"
                  >
                    <social.icon className="w-5 h-5" />
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* RIGHT: Profile Card */}
          <div className="relative animate-fade-in">
            <div className="relative max-w-md mx-auto">
              {/* Main Profile Card */}
              <div className="bg-white rounded-2xl border border-gray-200 shadow-sm p-8 hover:shadow-md transition-shadow duration-300">
                {/* Profile Image with subtle accent */}
                <div className="relative w-32 h-32 mx-auto">
                  <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-100 to-teal-100 animate-pulse-subtle" />
                  <img
                    src="/profile-1.jpg"
                    alt="Ibrahim Ndagiwe - Full-Stack Developer"
                    className="relative w-full h-full rounded-full object-cover border-4 border-white shadow-md"
                  />
                </div>

                {/* Name & Role */}
                <div className="text-center mt-6 space-y-1">
                  <h3 className="text-2xl font-bold text-gray-900">
                    Ibrahim Ndagiwe
                  </h3>
                  <p className="text-gray-600">
                    Full-Stack & Data Developer
                  </p>
                </div>

                {/* Current Focus */}
                <div className="mt-6 p-4 rounded-lg bg-blue-50 border border-blue-100">
                  <div className="flex items-center gap-2 text-blue-700 text-sm font-medium mb-1">
                    <Sparkles className="w-4 h-4" />
                    Currently Focused On
                  </div>
                  <p className="text-sm text-gray-600">
                    Building scalable MERN applications & data pipelines with Python
                  </p>
                </div>

                {/* Quick Stats */}
                <div className="grid grid-cols-3 gap-4 mt-6 pt-6 border-t border-gray-100">
                  {[
                    { value: "3+", label: "Years Experience", color: "text-blue-600" },
                    { value: "20+", label: "Projects", color: "text-teal-600" },
                    { value: "Full", label: "Stack", color: "text-purple-600" },
                  ].map((stat, idx) => (
                    <div key={idx} className="text-center">
                      <div className={`text-2xl font-bold ${stat.color}`}>
                        {stat.value}
                      </div>
                      <div className="text-xs text-gray-500 mt-1">{stat.label}</div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Floating Skill Elements */}
              <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-gradient-to-br from-teal-500 to-blue-600 rounded-2xl rotate-6 opacity-10" />
              <div className="absolute -top-4 -left-4 w-20 h-20 bg-gradient-to-tr from-purple-500 to-pink-500 rounded-full -rotate-12 opacity-10" />
            </div>
          </div>
        </div>

        {/* Skills Section - Refined */}
        <div className="mt-24 animate-fade-in-up animation-delay-700">
          <div className="text-center mb-8">
            <h3 className="text-xl font-semibold text-gray-800 mb-2">
              Technologies I Build With
            </h3>
            <p className="text-gray-500 max-w-lg mx-auto">
              Proficient in modern web technologies, databases, and data tools
            </p>
          </div>
          
          <div className="flex flex-wrap justify-center gap-3">
            {skills.map((skill, idx) => (
              <span
                key={idx}
                className="skill-badge hover-lift"
                style={{ animationDelay: `${idx * 30}ms` }}
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll Indicator - Minimal */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-fade-in">
        <a
          href="#about"
          className="flex flex-col items-center gap-1 text-gray-400 hover:text-blue-600 transition-colors"
          aria-label="Scroll to next section"
        >
          <span className="text-xs uppercase tracking-wider font-medium">
            Explore
          </span>
          <ChevronDown className="w-5 h-5 animate-bounce" />
        </a>
      </div>
    </section>
  );
};