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
    <section id="experience" className="experience-section">
      <h2 className="section-title">Experience</h2>
      
      <div className="experience-list">
        {experiences.map((exp, index) => (
          <div key={index} className="experience-card">
            <div className="experience-header">
              <h3 className="experience-title">{exp.title}</h3>
              <span className="experience-period">{exp.period}</span>
            </div>
            <p className="experience-company">{exp.company}</p>
            <p className="experience-description">{exp.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experience;
