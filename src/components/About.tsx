import { useSectionReveal } from "@/hooks/useSectionReveal";
import { useBlurReveal } from "@/hooks/useBlurReveal";
import { useCountUp } from "@/hooks/useCountUp";

const About = () => {
  const { ref, isVisible } = useSectionReveal(0.1);
  const { ref: headRef, isVisible: headVisible } = useBlurReveal(0.15);
  const { ref: countRef1, count: count1 } = useCountUp(100, 2000, 0.3);
  const { ref: countRef2, count: count2 } = useCountUp(30, 1600, 0.3);

  return (
    <section
      id="about"
      ref={ref}
      className="py-24 md:py-32 px-6 md:px-12 lg:px-16"
      style={{ backgroundColor: "#F5F4F0" }}
    >
      <div className="max-w-[1200px] mx-auto">
        {/* Two-column layout like flabbergast */}
        <div className="flex flex-col lg:flex-row gap-16 lg:gap-24">
          {/* Left — statement */}
          <div className="lg:w-[50%]" ref={headRef}>
            <h2
              className={`font-satoshi text-[32px] md:text-[44px] lg:text-[52px] font-bold leading-[1.1] blur-reveal ${headVisible ? "visible" : ""}`}
              style={{ color: "#0A0A09" }}
            >
              A handpicked team of experts, driven by problem-solving and a deeply rooted disdain for mediocrity.
            </h2>
          </div>

          {/* Right — description + stats */}
          <div className="lg:w-[50%]">
            <p
              className="font-satoshi text-[17px] leading-[1.75] mb-16"
              style={{
                color: "#888880",
                opacity: isVisible ? 1 : 0,
                transform: isVisible ? "translateY(0)" : "translateY(20px)",
                transition: "all 0.8s cubic-bezier(0.16,1,0.3,1) 0.2s",
              }}
            >
              With no project managers, we take individual responsibility and do whatever it takes to bring value — taking ownership of every project. Unorthodox to some, but works for us. People here thrive on responsibility, constructive criticism, and high standards.
            </p>

            {/* Stats with counter animation */}
            <div>
              {/* Stat 1 */}
              <div
                className="py-8"
                style={{
                  borderTop: "1px solid rgba(0,0,0,0.06)",
                  opacity: isVisible ? 1 : 0,
                  transform: isVisible ? "translateY(0)" : "translateY(20px)",
                  transition: "all 0.8s cubic-bezier(0.16,1,0.3,1) 0.4s",
                }}
              >
                <span className="font-geist text-[11px] uppercase tracking-[0.14em] block mb-4" style={{ color: "#888880" }}>
                  DIGITAL PRODUCTS DELIVERED
                </span>
                <div
                  ref={countRef1}
                  className="flex items-baseline gap-1"
                  style={{ borderLeft: "2px solid rgba(0,0,0,0.1)", paddingLeft: "16px" }}
                >
                  <span className="font-satoshi text-[64px] md:text-[80px] font-bold leading-[1]" style={{ color: "#0A0A09" }}>
                    {count1}
                  </span>
                  <span className="font-satoshi text-[40px] font-bold" style={{ color: "#0A0A09" }}>+</span>
                </div>
              </div>

              {/* Stat 2 */}
              <div
                className="py-8"
                style={{
                  borderTop: "1px solid rgba(0,0,0,0.06)",
                  opacity: isVisible ? 1 : 0,
                  transform: isVisible ? "translateY(0)" : "translateY(20px)",
                  transition: "all 0.8s cubic-bezier(0.16,1,0.3,1) 0.6s",
                }}
              >
                <span className="font-geist text-[11px] uppercase tracking-[0.14em] block mb-4" style={{ color: "#888880" }}>
                  NUMBER OF PEOPLE
                </span>
                <div
                  ref={countRef2}
                  className="flex items-baseline"
                  style={{ borderLeft: "2px solid rgba(0,0,0,0.1)", paddingLeft: "16px" }}
                >
                  <span className="font-satoshi text-[64px] md:text-[80px] font-bold leading-[1]" style={{ color: "#0A0A09" }}>
                    {count2}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
