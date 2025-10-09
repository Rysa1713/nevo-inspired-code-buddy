import Sidebar from "@/components/Sidebar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import TechStack from "@/components/TechStack";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";

const Index = () => {
  return (
    <div className="portfolio-container">
      <Sidebar />
      <main className="main-content">
        <Hero />
        <About />
        <TechStack />
        <Experience />
        <Projects />
      </main>
    </div>
  );
};

export default Index;
