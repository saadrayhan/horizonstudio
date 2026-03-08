import { useSectionReveal } from "@/hooks/useSectionReveal";

const services = [
  { num: "01", name: "User Research", desc: "Deep understanding of your users before any design begins." },
  { num: "02", name: "Product Design", desc: "Interface design and systems built around real human behavior." },
  { num: "03", name: "Branding", desc: "Visual identity systems that make products unforgettable." },
  { num: "04", name: "Mobile & Web Development", desc: "Full-stack engineering that ships fast and scales cleanly." },
];

const ServicesCard = () => {
  const { ref, isVisible } = useSectionReveal(0.08);

  return (
    <section
      id="services"
      ref={ref}
      className="px-6 md:px-12 lg:px-16 pb-8"
      style={{ backgroundColor: "#F5F4F0" }}
    >
      <div
        className="max-w-[1200px] mx-auto rounded-[20px] overflow-hidden"
        style={{
          backgroundColor: "#FFFFFF",
          border: "1px solid rgba(0,0,0,0.06)",
          boxShadow: "0 12px 60px rgba(0,0,0,0.06)",
        }}
      >
        {/* Image placeholder */}
        <div
          className="w-full relative overflow-hidden card-rise"
          style={{
            backgroundColor: "#E8E6E0",
            height: "420px",
            ...(isVisible ? { animation: "card-rise 1s cubic-bezier(0.16,1,0.3,1) forwards" } : {}),
          }}
        >
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="font-geist text-[14px] uppercase tracking-[0.2em]" style={{ color: "#B0AEA6" }}>
              STUDIO
            </span>
          </div>
        </div>

        {/* Content */}
        <div className="p-8 md:p-12 lg:p-16">
          {/* Statement */}
          <h2
            className="font-satoshi text-[28px] md:text-[40px] lg:text-[48px] font-bold leading-[1.12] max-w-[720px] mb-16"
            style={{
              color: "#0A0A09",
              opacity: isVisible ? 1 : 0,
              filter: isVisible ? "blur(0px)" : "blur(10px)",
              transform: isVisible ? "translateY(0)" : "translateY(20px)",
              transition: "all 0.9s cubic-bezier(0.16,1,0.3,1) 0.2s",
            }}
          >
            We help businesses design, develop, and position their products as formidable solutions that inspire.
          </h2>

          {/* Service rows */}
          {services.map((s, i) => (
            <div
              key={i}
              className="service-row group flex items-center gap-6 md:gap-8 py-5 cursor-pointer"
              style={{
                borderTop: "1px solid rgba(0,0,0,0.06)",
                opacity: isVisible ? 1 : 0,
                transform: isVisible ? "translateY(0)" : "translateY(16px)",
                transition: `all 0.7s cubic-bezier(0.16,1,0.3,1) ${300 + i * 100}ms`,
              }}
            >
              <span className="font-geist text-[12px] shrink-0 w-8" style={{ color: "#B0AEA6" }}>{s.num}</span>
              <h3 className="font-satoshi text-[18px] md:text-[22px] font-medium flex-1 group-hover:translate-x-2 transition-transform duration-300" style={{ color: "#0A0A09" }}>
                {s.name}
              </h3>
              <span className="font-satoshi text-[13px] hidden md:block opacity-0 group-hover:opacity-100 transition-opacity duration-300" style={{ color: "#888880" }}>
                {s.desc}
              </span>
              <span className="font-satoshi text-[18px] opacity-0 group-hover:opacity-100 transition-opacity duration-300" style={{ color: "#0A0A09" }}>→</span>
            </div>
          ))}

          {/* Learn more */}
          <a
            href="#services"
            className="magnetic-hover flex items-center justify-center w-full mt-8 font-satoshi text-[12px] uppercase tracking-[0.08em] py-4 rounded-xl cursor-pointer"
            style={{
              border: "1px solid rgba(0,0,0,0.1)",
              backgroundColor: "transparent",
              color: "#0A0A09",
              opacity: isVisible ? 1 : 0,
              transition: "all 0.5s ease 0.8s",
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
          </a>
        </div>
      </div>
    </section>
  );
};

export default ServicesCard;
