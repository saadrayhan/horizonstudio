import { Link, useLocation } from "react-router-dom";
import { useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const NotFound = () => {
  const location = useLocation();
  useEffect(() => { console.error("404:", location.pathname); }, [location.pathname]);

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <section className="pt-40 pb-32 px-[50px] mx-auto text-center">
        <p className="font-serif text-[100px] md:text-[140px] text-foreground/5 leading-none">404</p>
        <h1 className="font-serif text-3xl text-foreground mt-4">Page not found</h1>
        <p className="text-[15px] text-muted-foreground mt-3 max-w-[360px] mx-auto">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <Link to="/" className="inline-block mt-8 text-[13px] font-medium bg-foreground text-primary-foreground px-7 py-3 rounded-full hover:bg-foreground/90 transition-colors">
          Back to home
        </Link>
      </section>
      <Footer />
    </div>
  );
};

export default NotFound;