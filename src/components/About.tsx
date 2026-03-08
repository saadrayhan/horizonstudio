import { useScrollAnimation } from "./useScrollAnimation";

const About = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section
      id="about"
      ref={ref}
      className="py-20 px-6 md:px-16"
      style={{ backgroundColor: "#F5F4F0" }}
    >
      <div className="max-w-[1100px] mx-auto flex flex-col md:flex-row gap-12 md:gap-16">
        {/* Left column */}
        <div
          className="md:w-[45%]"
          style={{
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? "translateY(0)" : "translateY(16px)",
            transition: "opacity 0.5s cubic-bezier(0.16,1,0.3,1), transform 0.5s cubic-bezier(0.16,1,0.3,1)",
          }}
        >
          <span className="font-geist text-[11px] uppercase tracking-[0.12em] block mb-6" style={{ color: "#888880" }}>
            THE TEAM
          </span>
          <h2 className="font-satoshi text-[28px] md:text-[40px] font-medium leading-[1.2]" style={{ color: "#0A0A09" }}>
            A handpicked team driven by problem-solving and a deep disdain for mediocrity.
          </h2>
          <p className="font-satoshi text-[16px] leading-[1.7] mt-6" style={{ color: "#888880" }}>
            No bloated processes. No unnecessary layers. We take individual ownership of every project and do whatever it takes to bring real value.
          </p>
        </div>

        {/* Right column */}
        <div
          className="md:w-[55%] md:pl-16"
          style={{
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? "translateY(0)" : "translateY(16px)",
            transition: "opacity 0.5s cubic-bezier(0.16,1,0.3,1) 100ms, transform 0.5s cubic-bezier(0.16,1,0.3,1) 100ms",
          }}
        >
          {/* Placeholder image */}
          <div
            className="w-full rounded-2xl mb-10"
            style={{ backgroundColor: "#E8E6E0", height: "400px" }}
          />

          {/* Stats */}
          {[
            { label: "PROJECTS DELIVERED", value: "12+" },
            { label: "TEAM SIZE", value: "5" },
          ].map((stat, i) => (
            <div
              key={i}
              className="py-6"
              style={{ borderTop: "1px solid rgba(0,0,0,0.08)" }}
            >
              <span className="font-geist text-[11px] uppercase tracking-[0.1em] block mb-3" style={{ color: "#888880" }}>
                {stat.label}
              </span>
              <div
                className="pl-5"
                style={{ borderLeft: "2px solid rgba(0,0,0,0.15)" }}
              >
                <span className="font-satoshi text-[56px] md:text-[72px] font-bold" style={{ color: "#0A0A09" }}>
                  {stat.value}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
