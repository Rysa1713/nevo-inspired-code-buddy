const About = () => {
  return (
    <section id="about" className="about-section">
      <h2 className="about-title">
        I believe in a user centered design approach, ensuring that every project I work on is tailored to meet the specific needs of its users.
      </h2>
      
      <div className="about-grid">
        <div className="about-column">
          <h3 className="about-subtitle">This is me.</h3>
          <p className="about-text">
            I'm a Web developer with a relentless drive for excellence, skilled in creating and maintaining functional and responsive web applications and websites.
          </p>
          <p className="about-text">
            A passionate frontend web developer. Dedicated to turning ideas into creative solutions. I specialize in creating seamless and intuitive user experiences.
          </p>
        </div>
        
        <div className="about-column">
          <p className="about-text">
            My approach focuses on creating scalable, high-performing solutions tailored to both user needs and business objectives. By prioritizing performance, accessibility, and responsiveness, I strive to deliver experiences that not only engage users but also drive tangible results.
          </p>
          <p className="about-quote">
            i can't stop configuring my code editor
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
