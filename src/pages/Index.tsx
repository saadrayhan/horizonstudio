import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import Work from "@/components/Work";
import Services from "@/components/Services";
import Philosophy from "@/components/Philosophy";
import FooterCTA from "@/components/FooterCTA";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen" style={{ backgroundColor: "#000000" }}>
      <Navigation />
      <Hero />
      <Work />
      <Services />
      <Philosophy />
      <FooterCTA />
      <Footer />
    </div>
  );
};

export default Index;
