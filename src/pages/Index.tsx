import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import IntroCard from "@/components/IntroCard";
import ServicesCard from "@/components/ServicesCard";
import Projects from "@/components/Projects";
import About from "@/components/About";
import ContactCard from "@/components/ContactCard";
import RedFooter from "@/components/RedFooter";

const Index = () => {
  return (
    <div className="min-h-screen" style={{ backgroundColor: "#F5F4F0" }}>
      <Navigation />
      <Hero />
      <IntroCard />
      <ServicesCard />
      <Projects />
      <About />
      <ContactCard />
      <RedFooter />
    </div>
  );
};

export default Index;
