import { Github, Linkedin, Twitter } from "lucide-react";

const socialLinks = [
  { icon: Github, href: "https://github.com/EngIbrah", label: "GitHub" },
  { icon: Linkedin, href: "https://www.linkedin.com/in/ibrahim-ndagiwe/", label: "LinkedIn" },
  { icon: Twitter, href: "#", label: "Twitter" },
];

const footerLinks = [
  { href: "#about", label: "About" },
  { href: "#projects", label: "Projects" },
  { href: "#experience", label: "Experience" },
  { href: "#contact", label: "Contact" },
];

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-12 bg-white border-t border-muted-foreground">
      <div className="container mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-8">
        {/* Logo & Copyright */}
        <div className="text-center md:text-left">
          <a href="#" className="text-xl font-bold tracking-tight">
            Ibrahim <span className="text-primary">Ndagiwe</span>
          </a>
          <p className="text-sm text-muted-foreground mt-2">
            © {currentYear} Ibrahim Ndagiwe. All rights reserved.
          </p>
        </div>

        {/* Links */}
        <nav className="flex flex-wrap justify-center gap-6">
          {footerLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Social Links */}
        <div className="flex items-center gap-4">
          {socialLinks.map((social) => (
            <a
              key={social.label}
              href={social.href}
              aria-label={social.label}
              className="p-2 rounded-full border border-muted-foreground hover:bg-primary hover:text-white transition-all"
            >
              <social.icon className="w-5 h-5" />
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
};
