import { useScrollAnimation } from "./useScrollAnimation";

const principles = [
  {
    statement: "Design before code.",
    explanation: "We design the complete experience before development begins. This prevents costly rebuilds and produces better products.",
  },
  {
    statement: "Understand before execute.",
    explanation: "We spend real time understanding your problem before proposing solutions. Discovery is not a formality.",
  },
  {
    statement: "Communicate like partners.",
    explanation: "Full visibility, always. No black boxes, no surprise deliveries. You know exactly where things stand at every stage.",
  },
  {
    statement: "We say no when we should.",
    explanation: "If a project isn't the right fit, we tell you honestly. We protect our quality by being selective.",
  },
];

const Philosophy = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section
      id="philosophy"
      className="relative py-[140px] bg-base"
    >
      {/* Subtle radial glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: "radial-gradient(ellipse 60% 50% at 50% 50%, rgba(196,163,90,0.05), transparent)",
        }}
      />

      <div ref={ref} className="relative z-10 max-w-[1100px] mx-auto px-6 md:px-12">
        <div className="text-center mb-16">
          <span className="section-label block mb-3">How We Work</span>
          <h2
            className="font-display text-[36px] md:text-[54px] text-cream max-w-[600px] mx-auto"
            style={{
              opacity: isVisible ? 1 : 0,
              transform: isVisible ? "translateY(0)" : "translateY(20px)",
              transition: "opacity 0.5s cubic-bezier(0.16,1,0.3,1), transform 0.5s cubic-bezier(0.16,1,0.3,1)",
            }}
          >
            We have opinions. Strong ones.
          </h2>
          <p
            className="font-body text-[17px] text-sage max-w-[440px] mx-auto mt-4 leading-[1.65]"
            style={{
              opacity: isVisible ? 1 : 0,
              transform: isVisible ? "translateY(0)" : "translateY(20px)",
              transition: "opacity 0.5s cubic-bezier(0.16,1,0.3,1) 80ms, transform 0.5s cubic-bezier(0.16,1,0.3,1) 80ms",
            }}
          >
            Most studios say yes to everything. We don't. Here's what working with us actually means.
          </p>
        </div>

        <div className="max-w-[780px] mx-auto">
          {principles.map((p, i) => (
            <div
              key={i}
              className="py-12 grid grid-cols-1 md:grid-cols-[65%_35%] gap-4 md:gap-12"
              style={{
                borderTop: "1px solid rgba(255,255,255,0.06)",
                opacity: isVisible ? 1 : 0,
                transform: isVisible ? "translateY(0)" : "translateY(20px)",
                transition: `opacity 0.5s cubic-bezier(0.16,1,0.3,1) ${(i + 1) * 120}ms, transform 0.5s cubic-bezier(0.16,1,0.3,1) ${(i + 1) * 120}ms`,
              }}
            >
              <h3 className="font-display text-[28px] md:text-[36px] leading-[1.15] text-cream">
                {p.statement}
              </h3>
              <p className="font-body text-[15px] leading-[1.7] text-sage md:flex md:items-center">
                {p.explanation}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Philosophy;
