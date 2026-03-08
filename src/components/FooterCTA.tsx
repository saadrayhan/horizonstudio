import { useScrollAnimation } from "./useScrollAnimation";

const FooterCTA = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section
      id="contact"
      className="py-[160px] bg-studio-green-light"
    >
      <div
        ref={ref}
        className="max-w-[1200px] mx-auto px-6 md:px-12 text-center"
        style={{
          opacity: isVisible ? 1 : 0,
          transform: isVisible ? "translateY(0)" : "translateY(24px)",
          transition: "opacity 0.6s ease-out, transform 0.6s ease-out",
        }}
      >
        <h2 className="font-serif-display text-[40px] sm:text-[52px] md:text-[68px] text-studio-text mb-6">
          Have something to build?
        </h2>
        <p className="font-sans-body text-[15px] md:text-[16px] leading-[1.8] max-w-[500px] mx-auto mb-12 text-studio-muted">
          Tell us about your project — we'll tell you honestly if we're the right team for it.
        </p>
        <a
          href="mailto:hello@studio.com"
          className="inline-block font-sans-body text-[13px] font-semibold uppercase tracking-[0.08em] px-10 py-5 rounded-full transition-all duration-200 active:scale-[0.97] bg-studio-green text-studio-cream hover:opacity-90"
        >
          Start a project →
        </a>
      </div>
    </section>
  );
};

export default FooterCTA;
