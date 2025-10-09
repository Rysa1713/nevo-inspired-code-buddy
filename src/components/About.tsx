const About = () => {
  return (
    <section id="about" className="min-h-screen py-20">
      <div className="container mx-auto px-6">
        <h2 className="text-5xl md:text-6xl font-bold mb-16 max-w-4xl leading-tight">
          I believe in a user centered design approach, ensuring that every project I work on is tailored to meet the specific needs of its users.
        </h2>
        
        <div className="grid md:grid-cols-2 gap-12 mt-20">
          <div>
            <h3 className="text-2xl font-bold mb-4">This is me.</h3>
            <p className="text-muted-foreground mb-6">
              I'm a Web developer with a relentless drive for excellence, skilled in creating and maintaining functional and responsive web applications and websites.
            </p>
            <p className="text-muted-foreground">
              A passionate frontend web developer. Dedicated to turning ideas into creative solutions. I specialize in creating seamless and intuitive user experiences.
            </p>
          </div>
          
          <div>
            <p className="text-muted-foreground mb-6">
              My approach focuses on creating scalable, high-performing solutions tailored to both user needs and business objectives. By prioritizing performance, accessibility, and responsiveness, I strive to deliver experiences that not only engage users but also drive tangible results.
            </p>
            <p className="text-sm text-primary italic">
              i can't stop configuring my code editor
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
