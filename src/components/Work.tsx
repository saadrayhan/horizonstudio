import { useScrollAnimation } from "./useScrollAnimation";

const projects = [
  {
    category: "Fintech",
    name: "Apex Dashboard",
    desc: "Redesigned the core dashboard experience, resulting in 40% faster user onboarding.",
  },
  {
    category: "Health Tech",
    name: "Vero Health",
    desc: "Full product design and development from zero to launch in 12 weeks.",
  },
];

const Work = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="work" className="py-[140px] bg-studio-cream">
      <div ref={ref} className="max-w-[1200px] mx-auto px-6 md:px-12">
        <div className="text-center mb-20">
          <span className="section-label block mb-5">Selected Work</span>
          <h2
            className="font-serif-display text-[36px] md:text-[52px] lg:text-[60px] text-studio-text"
            style={{
              opacity: isVisible ? 1 : 0,
              transform: isVisible ? "translateY(0)" : "translateY(24px)",
              transition: "opacity 0.6s ease-out, transform 0.6s ease-out",
            }}
          >
            A few things we've built.
          </h2>
        </div>

        <div className="space-y-6">
          {projects.map((p, i) => (
            <div
              key={i}
              className="rounded-2xl overflow-hidden bg-studio-card group cursor-pointer transition-all duration-300 hover:shadow-[0_2px_12px_rgba(0,0,0,0.06)]"
              style={{
                opacity: isVisible ? 1 : 0,
                transform: isVisible ? "translateY(0)" : "translateY(24px)",
                transition: `opacity 0.6s ease-out ${(i + 1) * 150}ms, transform 0.6s ease-out ${(i + 1) * 150}ms`,
              }}
            >
              <div className="grid grid-cols-1 md:grid-cols-2">
                <div className="p-8 md:p-12 flex flex-col justify-center">
                  <span className="inline-block w-fit font-sans-body text-[11px] uppercase tracking-[0.1em] font-medium px-3 py-1.5 rounded-full mb-6 bg-studio-green-light text-studio-green">
                    {p.category}
                  </span>
                  <h3 className="font-serif-display text-[28px] md:text-[36px] text-studio-text mb-3">
                    {p.name}
                  </h3>
                  <p className="font-sans-body text-[14px] md:text-[15px] leading-[1.7] text-studio-muted">
                    {p.desc}
                  </p>
                </div>
                <div className="h-[220px] md:h-auto bg-studio-border transition-transform duration-500 group-hover:scale-[1.02]" />
              </div>
            </div>
          ))}
        </div>

        <p className="text-center mt-14 font-sans-body text-[13px] tracking-[0.06em] text-studio-muted">
          More work coming soon →
        </p>
      </div>
    </section>
  );
};

export default Work;
