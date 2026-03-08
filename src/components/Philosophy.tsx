import { useScrollAnimation } from "./useScrollAnimation";

const principles = [
  {
    statement: "Design before code.",
    explanation:
      "We design the full experience before development begins. This prevents expensive rebuilds and produces better products.",
  },
  {
    statement: "Understand before execute.",
    explanation:
      "We take time to understand the problem, the user, and the business before proposing solutions.",
  },
  {
    statement: "Communicate like partners.",
    explanation:
      "We give clients full visibility into progress. No black boxes, no surprises at delivery.",
  },
  {
    statement: "We say no to projects we can't do well.",
    explanation:
      "We're selective. If a project isn't right for our team, we'll tell you honestly.",
  },
];

const Philosophy = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="philosophy" className="py-[140px] bg-studio-bg">
      <div ref={ref} className="max-w-[1200px] mx-auto px-6 md:px-12">
        <div className="text-center mb-20">
          <span className="section-label block mb-5">How We Work</span>
          <h2
            className="font-serif-display text-[36px] md:text-[52px] lg:text-[60px] text-studio-text max-w-[700px] mx-auto"
            style={{
              opacity: isVisible ? 1 : 0,
              transform: isVisible ? "translateY(0)" : "translateY(24px)",
              transition: "opacity 0.6s ease-out, transform 0.6s ease-out",
            }}
          >
            Strong opinions, carefully held.
          </h2>
        </div>

        <div className="max-w-[960px] mx-auto">
          {principles.map((p, i) => (
            <div
              key={i}
              className="py-10 md:py-14 grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-16 border-t border-studio-border"
              style={{
                opacity: isVisible ? 1 : 0,
                transform: isVisible ? "translateY(0)" : "translateY(20px)",
                transition: `opacity 0.6s ease-out ${(i + 1) * 100}ms, transform 0.6s ease-out ${(i + 1) * 100}ms`,
              }}
            >
              <h3 className="font-serif-display text-[28px] md:text-[36px] leading-[1.15] text-studio-text">
                {p.statement}
              </h3>
              <p className="font-sans-body text-[14px] md:text-[15px] leading-[1.75] text-studio-muted md:pt-2">
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
