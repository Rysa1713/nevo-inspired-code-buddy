import { Github, Linkedin, FileText, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";

const Sidebar = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <aside className="fixed left-0 top-0 h-screen w-64 bg-card border-r border-border p-8 flex flex-col justify-between z-10">
      <div>
        <h2 className="text-sm font-semibold mb-6 text-muted-foreground">SOCIAL</h2>
        <div className="flex flex-col gap-3 mb-12">
          <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-foreground hover:text-primary transition-colors">
            <Github size={18} />
            <span className="text-sm">github</span>
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-foreground hover:text-primary transition-colors">
            <Linkedin size={18} />
            <span className="text-sm">linkedin</span>
          </a>
          <a href="#" className="flex items-center gap-2 text-foreground hover:text-primary transition-colors">
            <FileText size={18} />
            <span className="text-sm uppercase">resume</span>
          </a>
        </div>

        <h2 className="text-sm font-semibold mb-6 text-muted-foreground">MENU</h2>
        <nav className="flex flex-col gap-3 mb-12">
          <button onClick={() => scrollToSection("home")} className="text-left text-sm text-foreground hover:text-primary transition-colors">
            Home
          </button>
          <button onClick={() => scrollToSection("about")} className="text-left text-sm text-foreground hover:text-primary transition-colors">
            About Me
          </button>
          <button onClick={() => scrollToSection("experience")} className="text-left text-sm text-foreground hover:text-primary transition-colors">
            Experience
          </button>
          <button onClick={() => scrollToSection("projects")} className="text-left text-sm text-foreground hover:text-primary transition-colors">
            Projects
          </button>
        </nav>
      </div>

      <div>
        <h2 className="text-sm font-semibold mb-4 text-muted-foreground">GET IN TOUCH</h2>
        <a href="mailto:your.email@example.com" className="flex items-center gap-2 text-sm text-foreground hover:text-primary transition-colors">
          <Mail size={16} />
          your.email@example.com
        </a>
      </div>
    </aside>
  );
};

export default Sidebar;
