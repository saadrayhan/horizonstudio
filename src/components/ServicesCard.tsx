import { useScrollAnimation } from "./useScrollAnimation";

const services = [
  { num: "01", name: "Product Design", desc: "UX research, interface design, and systems built for real users." },
  { num: "02", name: "Full-Stack Development", desc: "Frontend and backend that ships fast and scales cleanly." },
  { num: "03", name: "Branding & Identity", desc: "Visual identity systems that make products memorable." },
  { num: "04", name: "Product Strategy", desc: "Discovery and scoping before a single line of code is written." },
];

const ServicesCard = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section
      id="services"
      ref={ref}
      className="px-6 md:px-16 pb-20"
      style={{ backgroundColor: "#F5F4F0" }}
    >
      <div
        className="max-w-[1100px] mx-auto rounded-3xl p-10 md:p-16"
        style={{
          backgroundColor: "#FFFFFF",
          border: "1px solid rgba(0,0,0,0.08)",
          boxShadow: "0 8px 40px rgba(0,0,0,0.08)",
          opacity: isVisible ? 1 : 0,
          transform: isVisible ? "translateY(0)" : "translateY(16px)",
          transition: "opacity 0.5s cubic-bezier(0.16,1,0.3,1), transform 0.5s cubic-bezier(0.16,1,0.3,1)",
        }}
      >
        {/* Placeholder image */}
        <div
          className="w-full rounded-xl flex items-center justify-center mb-12"
          style={{ backgroundColor: "#E8E6E0", height: "360px" }}
        >
          <span className="font-satoshi text-[14px]" style={{ color: "#888880" }}>Studio</span>
        </div>

        {/* Statement */}
        <h2
          className="font-satoshi text-[26px] md:text-[40px] font-medium leading-[1.2] mb-12 max-w-[680px]"
          style={{ color: "#0A0A09" }}
        >
          We help startups design, build, and launch products that solve real problems.
        </h2>

        {/* Service rows */}
        {services.map((s, i) => (
          <div
            key={i}
            className="grid grid-cols-1 md:grid-cols-[8%_52%_40%] py-6 items-start"
            style={{
              borderTop: "1px solid rgba(0,0,0,0.08)",
              opacity: isVisible ? 1 : 0,
              transform: isVisible ? "translateY(0)" : "translateY(12px)",
              transition: `opacity 0.5s cubic-bezier(0.16,1,0.3,1) ${i * 80}ms, transform 0.5s cubic-bezier(0.16,1,0.3,1) ${i * 80}ms`,
            }}
          >
            <span className="font-geist text-[12px] mb-2 md:mb-0" style={{ color: "#888880" }}>{s.num}</span>
            <h3 className="font-satoshi text-[20px] md:text-[22px] font-medium mb-2 md:mb-0" style={{ color: "#0A0A09" }}>{s.name}</h3>
            <p className="font-satoshi text-[14px] leading-[1.6]" style={{ color: "#888880" }}>{s.desc}</p>
          </div>
        ))}

        {/* Learn more button */}
        <button
          className="w-full mt-6 font-satoshi text-[12px] uppercase tracking-[0.08em] py-4 rounded-xl transition-colors duration-150 cursor-pointer"
          style={{
            border: "1px solid rgba(0,0,0,0.15)",
            backgroundColor: "transparent",
            color: "#0A0A09",
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
          LEARN MORE
        </button>
      </div>
    </section>
  );
};

export default ServicesCard;
