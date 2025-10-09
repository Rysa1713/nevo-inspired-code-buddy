import { ExternalLink, Github } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      title: "E-Commerce Platform",
      description: "A full-featured e-commerce platform built with React and modern technologies.",
      tags: ["React", "TypeScript", "Tailwind"],
      github: "#",
      demo: "#"
    },
    {
      title: "Task Management App",
      description: "Collaborative task management tool with real-time updates.",
      tags: ["Next.js", "React", "Supabase"],
      github: "#",
      demo: "#"
    },
    {
      title: "Portfolio Website",
      description: "Modern portfolio website with smooth animations and responsive design.",
      tags: ["React", "Framer Motion", "CSS"],
      github: "#",
      demo: "#"
    },
    {
      title: "Weather Dashboard",
      description: "Real-time weather information dashboard with location-based forecasts.",
      tags: ["React", "API", "Charts"],
      github: "#",
      demo: "#"
    }
  ];

  return (
    <section id="projects" className="projects-section">
      <h2 className="section-title">Projects</h2>
      
      <div className="projects-grid">
        {projects.map((project, index) => (
          <div key={index} className="project-card">
            <h3 className="project-title">{project.title}</h3>
            <p className="project-description">{project.description}</p>
            
            <div className="project-tags">
              {project.tags.map((tag) => (
                <span key={tag} className="project-tag">{tag}</span>
              ))}
            </div>
            
            <div className="project-links">
              <a href={project.github} target="_blank" rel="noopener noreferrer" className="project-link-outline">
                <Github className="link-icon" />
                Code
              </a>
              <a href={project.demo} target="_blank" rel="noopener noreferrer" className="project-link-primary">
                <ExternalLink className="link-icon" />
                Demo
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
