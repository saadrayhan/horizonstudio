import { useScrollAnimation } from "./useScrollAnimation";

const FooterCTA = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section
      id="contact"
      className="py-[160px]"
      style={{ backgroundColor: "var(--studio-accent-light)" }}
    >
      <div
        ref={ref}
        className="max-w-[1200px] mx-auto px-6 md:px-8 text-center"
        style={{
          opacity: isVisible ? 1 : 0,
          transform: isVisible ? "translateY(0)" : "translateY(20px)",
          transition: "opacity 0.5s ease-out, transform 0.5s ease-out",
        }}
      >
        <h2
          className="font-serif-display text-[40px] sm:text-[52px] md:text-[64px] mb-6"
          style={{ color: "var(--studio-text)" }}
        >
          Have something to build?
        </h2>
        <p
          className="font-sans-body text-[16px] md:text-[17px] leading-[1.7] max-w-[520px] mx-auto mb-10"
          style={{ color: "var(--studio-muted)" }}
        >
          Tell us about your project — we'll tell you honestly if we're the right team for it.
        </p>
        <a
          href="mailto:hello@studio.com"
          className="inline-block font-sans-body text-[15px] font-medium px-10 py-5 rounded-lg transition-transform duration-150 active:scale-[0.98]"
          style={{ backgroundColor: "var(--studio-accent)", color: "#fff" }}
        >
          Start a project →
        </a>
      </div>
    </section>
  );
};

export default FooterCTA;
