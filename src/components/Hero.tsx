import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Geometric background elements */}
      <div className="absolute top-0 right-0 w-2/3 h-full bg-primary opacity-90 -z-10 clip-geometric"></div>
      <div className="absolute top-20 right-20 w-96 h-96 bg-primary opacity-50 -z-10"></div>
      <div className="absolute bottom-40 right-40 w-64 h-64 bg-secondary opacity-30 -z-10"></div>
      
      <div className="container mx-auto px-6 z-10">
        <div className="max-w-4xl">
          <h1 className="text-7xl md:text-8xl font-bold mb-6 leading-tight">
            FRONTEND<br/>
            <span className="text-primary">DEVELOPER</span>
          </h1>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl">
            Hi! I'm <span className="text-foreground font-semibold">Your Name</span> also known as <span className="text-primary font-semibold">ALIAS</span>. 
            A Frontend Developer with hands-on experience through building high-performance, scalable, and responsive web solutions.
          </p>
          <Button variant="default" size="lg" className="bg-primary hover:bg-primary/90">
            Resume
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
