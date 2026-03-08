import { Link, useLocation } from "react-router-dom";
import { useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <div className="min-h-screen bg-background noise-overlay">
      <Navbar />
      <section className="pt-40 pb-32 px-6 lg:px-10 max-w-[1200px] mx-auto text-center">
        <p className="text-[80px] md:text-[120px] font-semibold text-foreground/10 leading-none">404</p>
        <h1 className="text-2xl font-semibold text-foreground mt-4">Page not found</h1>
        <p className="text-[15px] text-muted-foreground mt-3 max-w-[360px] mx-auto">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <Link
          to="/"
          className="inline-block mt-8 text-[13px] font-medium text-primary-foreground bg-foreground px-6 py-2.5 rounded-lg hover:bg-foreground/90 transition-colors"
        >
          Back to home
        </Link>
      </section>
      <Footer />
    </div>
  );
};

export default NotFound;
