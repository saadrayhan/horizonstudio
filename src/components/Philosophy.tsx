import { useScrollAnimation } from "./useScrollAnimation";

const items = [
  {
    statement: "Design before code.",
    explanation: "We design the complete experience before development begins. This prevents costly rebuilds and produces better products.",
  },
  {
    statement: "Understand before execute.",
    explanation: "We spend real time understanding your problem before proposing solutions. Discovery is not optional.",
  },
  {
    statement: "Communicate like partners.",
    explanation: "Full visibility at every stage. No black boxes. No surprise deliveries. You always know where things stand.",
  },
  {
    statement: "We say no when we should.",
    explanation: "If a project isn't right for us, we tell you honestly. We protect our quality by being selective.",
  },
];

const Philosophy = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="process" className="py-[140px] px-6 md:px-16" style={{ backgroundColor: "#0A0A0A" }} ref={ref}>
      <div className="mb-20">
        <span className="font-geist text-[11px] uppercase tracking-[0.1em]" style={{ color: "#333330" }}>
          HOW WE WORK
        </span>
      </div>

      <div>
        {items.map((item, i) => (
          <div
            key={i}
            className="grid grid-cols-1 md:grid-cols-[60%_40%] py-14 gap-6 md:gap-0"
            style={{
              borderTop: "1px solid rgba(255,255,255,0.06)",
              opacity: isVisible ? 1 : 0,
              transform: isVisible ? "translateY(0)" : "translateY(12px)",
              transition: `opacity 0.4s cubic-bezier(0.16,1,0.3,1) ${i * 100}ms, transform 0.4s cubic-bezier(0.16,1,0.3,1) ${i * 100}ms`,
            }}
          >
            <h3
              className="font-satoshi text-[26px] md:text-[42px] font-medium leading-[1.1]"
              style={{ color: "#FFFFFF" }}
            >
              {item.statement}
            </h3>
            <p
              className="font-satoshi text-[15px] leading-[1.7] md:pt-2"
              style={{ color: "#666660" }}
            >
              {item.explanation}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Philosophy;
