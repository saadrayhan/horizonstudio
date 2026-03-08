import heroLandscape from "@/assets/hero-landscape.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex flex-col">
      {/* Text content - centered over the top portion */}
      <div className="relative z-10 flex flex-col items-center justify-center pt-[140px] md:pt-[160px] pb-12 px-6">
        <h1
          className="font-serif-display text-[42px] sm:text-[56px] md:text-[72px] lg:text-[80px] leading-[1.08] text-center max-w-[900px] text-studio-text animate-fade-up"
        >
          Products built to think and feel right.
        </h1>
        <p
          className="font-sans-body text-[15px] md:text-[16px] leading-[1.8] text-center max-w-[480px] mt-6 text-studio-muted animate-fade-up"
          style={{ animationDelay: "150ms", animationFillMode: "both" }}
        >
          A design-first studio helping early-stage startups go from idea to shipped product.
        </p>

        {/* Trusted by label */}
        <span
          className="section-label mt-10 animate-fade-up"
          style={{ animationDelay: "300ms", animationFillMode: "both" }}
        >
          Trusted by founders worldwide
        </span>
      </div>

      {/* Full-bleed landscape image */}
      <div className="relative flex-1 min-h-[400px] md:min-h-[500px] animate-hero-fade">
        <img
          src={heroLandscape}
          alt="Serene landscape with rolling hills, trees, and a reflective lake"
          className="w-full h-full object-cover object-center"
        />
        {/* Gradient overlay at top for text readability */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background: "linear-gradient(to bottom, hsl(var(--studio-bg)) 0%, hsl(var(--studio-bg) / 0.6) 15%, transparent 40%)",
          }}
        />
      </div>
    </section>
  );
};

export default Hero;
