import { useScrollAnimation } from "./useScrollAnimation";

const ContactCard = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section
      id="contact"
      ref={ref}
      className="px-6 md:px-16 py-20"
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
        <span className="font-geist text-[11px] uppercase tracking-[0.12em] block mb-4" style={{ color: "#888880" }}>
          CONTACT US
        </span>
        <h2
          className="font-satoshi text-[40px] md:text-[72px] font-bold leading-[1.0]"
          style={{ color: "#0A0A09" }}
        >
          Your vision, our craft. Let's build.
        </h2>
        <a
          href="mailto:hello@studio.dev"
          className="inline-block mt-10 font-satoshi text-[13px] font-medium uppercase tracking-[0.06em] rounded-lg transition-colors duration-150 cursor-pointer"
          style={{
            backgroundColor: "#0A0A09",
            color: "#FFFFFF",
            padding: "14px 32px",
          }}
          onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = "#333330")}
          onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = "#0A0A09")}
        >
          LET'S TALK
        </a>
      </div>
    </section>
  );
};

export default ContactCard;
