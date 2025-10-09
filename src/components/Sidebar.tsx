import { Github, Linkedin, FileText, Mail } from "lucide-react";

const Sidebar = () => {
  return (
    <aside className="sidebar">
      <div>
        <h2 className="sidebar-title">SOCIAL</h2>
        <div className="sidebar-links">
          <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="sidebar-link">
            <Github size={18} />
            <span>github</span>
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="sidebar-link">
            <Linkedin size={18} />
            <span>linkedin</span>
          </a>
          <a href="#" className="sidebar-link">
            <FileText size={18} />
            <span>RESUME</span>
          </a>
        </div>

        <h2 className="sidebar-title">MENU</h2>
        <nav className="sidebar-nav">
          <a href="#home" className="nav-link">Home</a>
          <a href="#about" className="nav-link">About Me</a>
          <a href="#experience" className="nav-link">Experience</a>
          <a href="#projects" className="nav-link">Projects</a>
        </nav>
      </div>

      <div>
        <h2 className="sidebar-title">GET IN TOUCH</h2>
        <a href="mailto:your.email@example.com" className="contact-link">
          <Mail size={16} />
          your.email@example.com
        </a>
      </div>
    </aside>
  );
};

export default Sidebar;
