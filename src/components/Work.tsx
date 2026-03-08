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
    <section id="work" className="py-[120px]" style={{ backgroundColor: "#fff" }}>
      <div ref={ref} className="max-w-[1200px] mx-auto px-6 md:px-8">
        <span className="section-label block mb-4">Selected Work</span>
        <h2
          className="font-serif-display text-[36px] md:text-[52px] mb-16"
          style={{
            color: "var(--studio-text)",
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? "translateY(0)" : "translateY(20px)",
            transition: "opacity 0.5s ease-out, transform 0.5s ease-out",
          }}
        >
          A few things we've built.
        </h2>

        <div className="space-y-8">
          {projects.map((p, i) => (
            <div
              key={i}
              className="rounded-2xl p-8 md:p-12 grid grid-cols-1 md:grid-cols-2 gap-8 items-center"
              style={{
                backgroundColor: "var(--studio-card-bg)",
                opacity: isVisible ? 1 : 0,
                transform: isVisible ? "translateY(0)" : "translateY(20px)",
                transition: `opacity 0.5s ease-out ${(i + 1) * 150}ms, transform 0.5s ease-out ${(i + 1) * 150}ms`,
              }}
            >
              <div>
                <span
                  className="inline-block font-sans-body text-[11px] uppercase tracking-[0.08em] font-medium px-3 py-1 rounded-full mb-4"
                  style={{ backgroundColor: "var(--studio-accent-light)", color: "var(--studio-accent)" }}
                >
                  {p.category}
                </span>
                <h3
                  className="font-serif-display text-[28px] md:text-[36px] mb-3"
                  style={{ color: "var(--studio-text)" }}
                >
                  {p.name}
                </h3>
                <p
                  className="font-sans-body text-[15px] md:text-[16px] leading-[1.7]"
                  style={{ color: "var(--studio-muted)" }}
                >
                  {p.desc}
                </p>
              </div>
              <div
                className="h-[200px] md:h-[260px] rounded-2xl"
                style={{ backgroundColor: "var(--studio-border)" }}
              />
            </div>
          ))}
        </div>

        <p
          className="text-center mt-12 font-sans-body text-[14px]"
          style={{ color: "var(--studio-muted)" }}
        >
          More work coming soon →
        </p>
      </div>
    </section>
  );
};

export default Work;
