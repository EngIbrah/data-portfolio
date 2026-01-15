import { ArrowUpRight, Github } from "lucide-react";
import { AnimatedBorderButton } from "@/components/AnimatedBorderButton";

/* Projects – Data Analyst first, ML & Full-Stack supported */
const projects = [
  {
    title: "Mental Health AI-Powered Assistant",
    description:
      "AI-powered assistant that analyzes user input, delivers intelligent mental health insights, and supports therapist booking through a full-stack web platform.",
    image: "/projects/mindcare.png",
    tags: ["Python", "Machine Learning", "NLP", "React", "Node.js"],
    link: "#",
    github: "https://github.com/EngIbrah/mindcare-ai-based-mental-health-platform",
  },
  {
    title: "Customer Shopping Behaviour Analysis",
    description:
      "Exploratory data analysis focused on customer purchasing patterns, segmentation, and insights to support data-driven business decisions.",
    image: "/projects/customer.png",
    tags: ["Python", "Pandas", "EDA", "Data Analysis", "Visualization"],
    link: "#",
    github: "https://github.com/EngIbrah/Customer-Shopping-Behaviour-Analysis",
  },
  {
    title: "Call Center Performance Analysis",
    description:
      "Analysis of call center KPIs including response time, resolution rate, and agent efficiency using SQL queries and interactive dashboards.",
    image: "/projects/call-center.png",
    tags: ["SQL", "Power BI", "Data Visualization", "KPIs"],
    link: "#",
    github: "https://github.com/EngIbrah/Call-Center-Performance-Analysis",
  },
  {
    title: "Financial Health Prediction (Zindi Challenge)",
    description:
      "Machine learning classification project developed for a Zindi competition to predict financial health status from structured datasets.",
    image: "/projects/financial.png",
    tags: ["Python", "Scikit-learn", "Machine Learning", "Zindi"],
    link: "#",
    github: "https://github.com/EngIbrah/Financial-Inclusion-in-Africa-Zindi-Competition",
  },
];

export const Projects = () => {
  return (
    <section id="projects" className="py-32 relative overflow-hidden">
      {/* Background glows */}
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 left-0 w-64 h-64 bg-highlight/5 rounded-full blur-3xl" />

      <div className="container mx-auto px-6 relative z-10">
        {/* Header */}
        <div className="text-center mx-auto max-w-3xl mb-16">
          <span className="text-secondary-foreground text-sm font-medium tracking-wider uppercase animate-fade-in">
            Projects
          </span>

          <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6 animate-fade-in animation-delay-100 text-secondary-foreground">
            Data-driven projects with
            <span className="font-serif italic font-normal text-white">
              {" "}
              real-world impact
            </span>
          </h2>

          <p className="text-muted-foreground animate-fade-in animation-delay-200">
            Selected projects in data analysis, machine learning, and data-driven
            applications built using real-world datasets.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, idx) => (
            <div
              key={idx}
              className="group glass rounded-2xl overflow-hidden animate-fade-in"
              style={{ animationDelay: `${(idx + 1) * 120}ms` }}
            >
              {/* Image */}
              <div className="relative overflow-hidden aspect-video">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-card via-card/50 to-transparent opacity-70" />

                {project.link !== "#" && (
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="View live project"
                    className="absolute top-4 right-4 p-2 rounded-full glass hover:bg-primary hover:text-primary-foreground transition-all"
                  >
                    <ArrowUpRight className="w-4 h-4" />
                  </a>
                )}
              </div>

              {/* Content */}
              <div className="p-6 space-y-4">
                {/* Title + GitHub */}
                <div className="flex items-start justify-between gap-4">
                  <h3 className="text-xl font-semibold group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>

                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="View source code on GitHub"
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    <Github className="w-5 h-5" />
                  </a>
                </div>

                <p className="text-muted-foreground text-sm">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, tagIdx) => (
                    <span
                      key={tagIdx}
                      className="px-4 py-1.5 rounded-full bg-surface text-xs font-medium border border-border/50 text-muted-foreground hover:border-primary/50 hover:text-primary transition-all duration-300"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-12 animate-fade-in animation-delay-500">
          <AnimatedBorderButton>
            View All Projects
            <ArrowUpRight className="w-5 h-5" />
          </AnimatedBorderButton>
        </div>
      </div>
    </section>
  );
};
