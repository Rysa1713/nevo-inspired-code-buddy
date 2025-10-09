const TechStack = () => {
  const frontend = [
    { name: "HTML", icon: "🌐" },
    { name: "CSS", icon: "🎨" },
    { name: "JavaScript", icon: "⚡" },
    { name: "TypeScript", icon: "📘" },
    { name: "React", icon: "⚛️" },
    { name: "Next.js", icon: "▲" },
    { name: "Tailwind", icon: "💨" },
  ];

  const tools = [
    { name: "Git", icon: "🔀" },
    { name: "GitHub", icon: "🐙" },
    { name: "VS Code", icon: "💻" },
    { name: "Figma", icon: "🎯" },
  ];

  return (
    <section className="stack-section">
      <h2 className="section-title">My Stack</h2>
      
      <div className="stack-category">
        <h3 className="stack-subtitle">FRONTEND</h3>
        <div className="stack-grid">
          {frontend.map((tech) => (
            <div key={tech.name} className="tech-card">
              <span className="tech-icon">{tech.icon}</span>
              <span className="tech-name">{tech.name}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="stack-category">
        <h3 className="stack-subtitle">TOOLS</h3>
        <div className="tools-grid">
          {tools.map((tool) => (
            <div key={tool.name} className="tech-card">
              <span className="tech-icon">{tool.icon}</span>
              <span className="tech-name">{tool.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechStack;
