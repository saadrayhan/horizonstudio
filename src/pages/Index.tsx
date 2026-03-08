import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Philosophy from "@/components/Philosophy";
import Work from "@/components/Work";
import FooterCTA from "@/components/FooterCTA";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-studio-bg">
      <Navigation />
      <Hero />
      <Services />
      <Philosophy />
      <Work />
      <FooterCTA />
      <Footer />
    </div>
  );
};

export default Index;
