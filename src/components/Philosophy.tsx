import { useScrollAnimation } from "./useScrollAnimation";

const principles = [
  {
    statement: "Design before code.",
    explanation: "We design the full experience before development begins. This prevents expensive rebuilds and produces better products.",
  },
  {
    statement: "Understand before execute.",
    explanation: "We take time to understand the problem, the user, and the business before proposing solutions.",
  },
  {
    statement: "Communicate like partners.",
    explanation: "We give clients full visibility into progress. No black boxes, no surprises at delivery.",
  },
  {
    statement: "We say no to projects we can't do well.",
    explanation: "We're selective. If a project isn't right for our team, we'll tell you honestly.",
  },
];

const Philosophy = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="philosophy" className="py-[120px]" style={{ backgroundColor: "var(--studio-bg)" }}>
      <div ref={ref} className="max-w-[1200px] mx-auto px-6 md:px-8">
        <span className="section-label block mb-4">How We Work</span>
        <h2
          className="font-serif-display text-[36px] md:text-[52px] mb-16 max-w-[700px]"
          style={{
            color: "var(--studio-text)",
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? "translateY(0)" : "translateY(20px)",
            transition: "opacity 0.5s ease-out, transform 0.5s ease-out",
          }}
        >
          We have strong opinions about how products should be built.
        </h2>

        <div>
          {principles.map((p, i) => (
            <div
              key={i}
              className="py-12 grid grid-cols-1 md:grid-cols-5 gap-4 md:gap-12"
              style={{
                borderTop: "1px solid var(--studio-border)",
                opacity: isVisible ? 1 : 0,
                transform: isVisible ? "translateY(0)" : "translateY(20px)",
                transition: `opacity 0.5s ease-out ${(i + 1) * 100}ms, transform 0.5s ease-out ${(i + 1) * 100}ms`,
              }}
            >
              <h3
                className="md:col-span-3 font-serif-display text-[28px] md:text-[34px] leading-[1.2]"
                style={{ color: "var(--studio-text)" }}
              >
                {p.statement}
              </h3>
              <p
                className="md:col-span-2 font-sans-body text-[14px] md:text-[15px] leading-[1.7]"
                style={{ color: "var(--studio-muted)" }}
              >
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
