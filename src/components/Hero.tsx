const Hero = () => {
  return (
    <section id="home" className="hero-section">
      <div className="geometric-bg"></div>
      <div className="geometric-shape-1"></div>
      <div className="geometric-shape-2"></div>
      
      <div className="hero-content">
        <h1 className="hero-title">
          FRONTEND<br/>
          <span className="hero-highlight">DEVELOPER</span>
        </h1>
        <p className="hero-description">
          Hi! I'm <span className="name-highlight">Your Name</span> also known as <span className="alias-highlight">ALIAS</span>. 
          A Frontend Developer with hands-on experience through building high-performance, scalable, and responsive web solutions.
        </p>
        <a href="#" className="hero-button">Resume</a>
      </div>
    </section>
  );
};

export default Hero;
