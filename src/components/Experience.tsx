import { Card } from "@/components/ui/card";

const Experience = () => {
  const experiences = [
    {
      title: "Senior Frontend Developer",
      company: "Tech Company",
      period: "2023 - Present",
      description: "Leading frontend development initiatives and mentoring junior developers."
    },
    {
      title: "Frontend Developer",
      company: "Digital Agency",
      period: "2021 - 2023",
      description: "Developed responsive web applications using React and modern web technologies."
    },
    {
      title: "Junior Developer",
      company: "Startup Inc",
      period: "2019 - 2021",
      description: "Built and maintained various client websites and web applications."
    }
  ];

  return (
    <section id="experience" className="min-h-screen py-20">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold mb-12">Experience</h2>
        
        <div className="space-y-6">
          {experiences.map((exp, index) => (
            <Card key={index} className="p-8 hover:border-primary transition-all hover:translate-x-2 bg-card">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                <h3 className="text-2xl font-bold">{exp.title}</h3>
                <span className="text-sm text-muted-foreground">{exp.period}</span>
              </div>
              <p className="text-primary font-semibold mb-2">{exp.company}</p>
              <p className="text-muted-foreground">{exp.description}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
