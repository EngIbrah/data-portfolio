import { Button } from "@/components/Button";
import {
  ArrowRight,
  ChevronDown,
  Github,
  Linkedin,
  Download,
} from "lucide-react";
import { AnimatedBorderButton } from "../components/AnimatedBorderButton";

/* Core skills – data-first, recruiter friendly */
const skills = [
  "Python",
  "SQL",
  "Power BI",
  "Pandas",
  "NumPy",
  "Scikit-learn",
  "Machine Learning",
  "Data Analysis",
  "Data Visualization",
  "Exploratory Data Analysis (EDA)",
  "React.js",
  "Node.js",
  "Express.js",
  "MongoDB",
  "PostgreSQL",
  "FastAPI",
  "Git",
  "Jupyter Notebook",
];

export const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background Overlay */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-b from-background/20 via-background/80 to-background" />
      </div>

      {/* Floating Data Points */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(28)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1.5 h-1.5 rounded-full opacity-60"
            style={{
              backgroundColor: "#3b82f6",
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animation: `slow-drift ${
                18 + Math.random() * 20
              }s ease-in-out infinite`,
              animationDelay: `${Math.random() * 5}s`,
            }}
          />
        ))}
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-6 pt-32 pb-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-14 items-center">
          {/* LEFT: Text */}
          <div className="space-y-8">
            <div className="animate-fade-in">
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass text-sm text-primary">
                <span className="w-2 h-2 bg-primary rounded-full animate-pulse" />
                Data Analyst • Machine Learning • Full-Stack (MERN)
              </span>
            </div>

            {/* Headline */}
            <div className="space-y-4">
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight animate-fade-in animation-delay-100">
                Turning <span className="text-primary glow-text">data</span>
                <br />
                into actionable
                <br />
                <span className="font-serif italic font-normal text-white">
                  insights & products
                </span>
              </h1>

              <p className="text-lg text-muted-foreground max-w-xl animate-fade-in animation-delay-200">
                Hi, I’m{" "}
                <span className="text-foreground font-medium">
                  Ibrahim Ndagiwe
                </span>{" "}
                — a <strong>Data Analyst</strong> with strong foundations in{" "}
                <strong>Machine Learning</strong> and{" "}
                <strong>Full-Stack (MERN)</strong> development. I analyze data,
                build predictive models, and develop data-driven applications
                that support informed decision-making.
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4 animate-fade-in animation-delay-300">
              <Button size="lg">
                Contact Me <ArrowRight className="w-5 h-5" />
              </Button>

              <AnimatedBorderButton>
                <Download className="w-5 h-5" />
                Download CV
              </AnimatedBorderButton>
            </div>

            {/* Social Links */}
            <div className="flex items-center gap-4 animate-fade-in animation-delay-400">
              <span className="text-sm text-muted-foreground">
                Find me online:
              </span>

              {[
                { icon: Github, href: "https://github.com/EngIbrah" },
                { icon: Linkedin, href: "https://www.linkedin.com/in/ibrahim-ndagiwe/" },
              ].map((social, idx) => (
                <a
                  key={idx}
                  href={social.href}
                  className="p-2 rounded-full glass hover:bg-primary/10 hover:text-primary transition-all duration-300"
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* RIGHT: Profile Card */}
          <div className="relative animate-fade-in animation-delay-300">
            <div className="relative max-w-md mx-auto">
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-primary/30 via-transparent to-secondary/10 blur-2xl animate-pulse" />

              <div className="relative glass rounded-3xl p-8 glow-border min-h-[420px] flex flex-col items-center justify-center">
                <div className="text-center space-y-6">
                  <div className="w-24 h-24 mx-auto rounded-full overflow-hidden border-2 border-primary/40 shadow-lg">
                  <img
                  src="/profile-1.jpg"
                  alt="Ibrahim Ndagiwe profile photo"
                  className="w-full h-full object-cover"
                />
            </div>
                  <div>
                    <h3 className="text-2xl font-bold mb-2">
                      Data Analytics & ML
                    </h3>
                    <p className="text-muted-foreground">
                      Analysis • Prediction • Data-driven applications
                    </p>
                  </div>

                  <div className="flex gap-6">
                    <div className="text-center">
                      <div className="text-xl font-bold text-primary">
                        Zindi
                      </div>
                      <div className="text-xs text-muted-foreground">
                        ML Challenges
                      </div>
                    </div>

                    <div className="text-center">
                      <div className="text-xl font-bold text-secondary">
                        Power BI
                      </div>
                      <div className="text-xs text-muted-foreground">
                        Dashboards
                      </div>
                    </div>

                    <div className="text-center">
                      <div className="text-xl font-bold text-highlight">
                        MERN
                      </div>
                      <div className="text-xs text-muted-foreground">
                        Web Apps
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Skills Marquee */}
        <div className="mt-20 animate-fade-in animation-delay-600">
          <p className="text-sm text-muted-foreground mb-6 text-center">
            Tools & technologies I work with
          </p>

          <div className="relative overflow-hidden">
            <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-background to-transparent z-10" />
            <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-background to-transparent z-10" />

            <div className="flex animate-marquee">
              {[...skills, ...skills].map((skill, idx) => (
                <div key={idx} className="flex-shrink-0 px-8 py-4">
                  <span className="text-lg font-medium text-muted-foreground/50 hover:text-muted-foreground transition-colors">
                    {skill}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-fade-in animation-delay-800">
        <a
          href="#about"
          className="flex flex-col items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
        >
          <span className="text-xs uppercase tracking-wider">Scroll</span>
          <ChevronDown className="w-6 h-6 animate-bounce" />
        </a>
      </div>
    </section>
  );
};
