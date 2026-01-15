import { BarChart3, Brain, Code2, Lightbulb } from "lucide-react";

const highlights = [
  {
    icon: BarChart3,
    title: "Data Analysis",
    description:
      "Exploring, cleaning, and analyzing data to uncover insights that support business and operational decisions.",
  },
  {
    icon: Brain,
    title: "Machine Learning",
    description:
      "Building and evaluating predictive models using real datasets, including competitive ML challenges on Zindi.",
  },
  {
    icon: Code2,
    title: "Full-Stack Development",
    description:
      "Developing data-driven web applications using React, Node.js, and APIs to turn insights into usable products.",
  },
  {
    icon: Lightbulb,
    title: "Applied AI",
    description:
      "Integrating AI and analytics into practical systems such as dashboards, decision tools, and intelligent assistants.",
  },
];

export const About = () => {
  return (
    <section id="about" className="py-32 relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* LEFT: Narrative */}
          <div className="space-y-8">
            <div className="animate-fade-in">
              <span className="text-secondary-foreground text-sm font-medium tracking-wider uppercase">
                About Me
              </span>
            </div>

            <h2 className="text-4xl md:text-5xl font-bold leading-tight animate-fade-in animation-delay-100 text-secondary-foreground">
              Analyzing data,
              <span className="font-serif italic font-normal text-white">
                {" "}
                solving real problems
              </span>
            </h2>

            <div className="space-y-4 text-muted-foreground animate-fade-in animation-delay-200">
              <p>
                I am a <strong>final-year Computer Engineering student</strong>{" "}
                with a strong focus on <strong>Data Analysis</strong>, supported
                by hands-on experience in <strong>Machine Learning</strong> and
                <strong> Full-Stack Web Development</strong>.
              </p>

              <p>
                My interest in data comes from working with real datasets —
                analyzing customer behavior, operational performance, and
                financial patterns to extract insights that support informed
                decision-making. I use tools such as{" "}
                <strong>Python, SQL, and Power BI</strong> to explore data,
                visualize trends, and communicate results clearly.
              </p>

              <p>
                Alongside analytics, I build and evaluate machine learning models
                through applied projects and <strong>Zindi challenges</strong>,
                and I develop data-driven web applications using the{" "}
                <strong>MERN stack</strong> to deploy insights into usable
                systems.
              </p>
            </div>

            <div className="glass rounded-2xl p-6 glow-border animate-fade-in animation-delay-300">
              <p className="text-lg font-medium italic text-foreground">
                “My goal is to turn raw data into clear insights and practical
                solutions — combining analytics, machine learning, and software
                engineering to create real impact.”
              </p>
            </div>
          </div>

          {/* RIGHT: Highlights */}
          <div className="grid sm:grid-cols-2 gap-6">
            {highlights.map((item, idx) => (
              <div
                key={idx}
                className="glass p-6 rounded-2xl animate-fade-in"
                style={{ animationDelay: `${(idx + 1) * 120}ms` }}
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 hover:bg-primary/20 transition-colors">
                  <item.icon className="w-6 h-6 text-primary" />
                </div>

                <h3 className="text-lg font-semibold mb-2">
                  {item.title}
                </h3>

                <p className="text-sm text-muted-foreground">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
