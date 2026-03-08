import { useSectionReveal } from "@/hooks/useSectionReveal";
import { useBlurReveal } from "@/hooks/useBlurReveal";

const IntroCard = () => {
  const { ref, isVisible } = useSectionReveal(0.1);
  const { ref: headRef, isVisible: headVisible } = useBlurReveal(0.2);

  return (
    <section
      ref={ref}
      className="py-24 md:py-32 px-6 md:px-12 lg:px-16"
      style={{ backgroundColor: "#F5F4F0" }}
    >
      {/* Top label - left aligned, like flabbergast */}
      <div
        className="max-w-[1200px] mx-auto mb-8"
        style={{
          opacity: isVisible ? 1 : 0,
          transform: isVisible ? "translateY(0)" : "translateY(20px)",
          transition: "all 0.8s cubic-bezier(0.16,1,0.3,1)",
        }}
      >
        <span className="font-geist text-[11px] uppercase tracking-[0.14em] block" style={{ color: "#888880" }}>
          STUNNINGLY SIMPLE — OUR APPROACH IS FOCUSED ON UNCOMPLICATED AND COMMON SENSE SOLUTIONS.
        </span>
      </div>

      {/* Giant statement — full width, no card, like flabbergast intro */}
      <div
        ref={headRef}
        className="max-w-[1200px] mx-auto"
      >
        <h2
          className={`font-satoshi text-[36px] md:text-[56px] lg:text-[72px] font-bold leading-[1.08] blur-reveal ${headVisible ? "visible" : ""}`}
          style={{ color: "#0A0A09" }}
        >
          It takes more than just deliverables — you need direct communicators, resourceful experts and sharp thinkers.
        </h2>
      </div>

      {/* CTA */}
      <div
        className="max-w-[1200px] mx-auto mt-12"
        style={{
          opacity: isVisible ? 1 : 0,
          transform: isVisible ? "translateY(0)" : "translateY(20px)",
          transition: "all 0.8s cubic-bezier(0.16,1,0.3,1) 0.4s",
        }}
      >
        <a
          href="#contact"
          className="magnetic-hover inline-flex items-center justify-center font-satoshi text-[12px] font-medium uppercase tracking-[0.08em] rounded-lg cursor-pointer"
          style={{
            border: "1px solid rgba(0,0,0,0.15)",
            backgroundColor: "transparent",
            color: "#0A0A09",
            padding: "14px 36px",
            transition: "all 0.2s ease",
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.backgroundColor = "#0A0A09";
            e.currentTarget.style.color = "#FFFFFF";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.backgroundColor = "transparent";
            e.currentTarget.style.color = "#0A0A09";
          }}
        >
          LET'S TALK
        </a>
      </div>
    </section>
  );
};

export default IntroCard;
