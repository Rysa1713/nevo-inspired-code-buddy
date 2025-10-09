import { Card } from "@/components/ui/card";

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
    <section className="py-20 bg-secondary/30">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold mb-12">My Stack</h2>
        
        <div className="mb-12">
          <h3 className="text-sm font-semibold text-muted-foreground mb-6">FRONTEND</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-4">
            {frontend.map((tech) => (
              <Card key={tech.name} className="p-6 flex flex-col items-center justify-center gap-3 hover:border-primary transition-colors cursor-pointer bg-card">
                <span className="text-4xl">{tech.icon}</span>
                <span className="text-sm font-medium">{tech.name}</span>
              </Card>
            ))}
          </div>
        </div>

        <div>
          <h3 className="text-sm font-semibold text-muted-foreground mb-6">TOOLS</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {tools.map((tool) => (
              <Card key={tool.name} className="p-6 flex flex-col items-center justify-center gap-3 hover:border-primary transition-colors cursor-pointer bg-card">
                <span className="text-4xl">{tool.icon}</span>
                <span className="text-sm font-medium">{tool.name}</span>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TechStack;
