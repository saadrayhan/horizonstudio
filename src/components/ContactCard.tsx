import { useSectionReveal } from "@/hooks/useSectionReveal";
import { useBlurReveal } from "@/hooks/useBlurReveal";

const ContactCard = () => {
  const { ref, isVisible } = useSectionReveal(0.1);
  const { ref: headRef, isVisible: headVisible } = useBlurReveal(0.2);

  return (
    <section
      id="contact"
      ref={ref}
      className="px-6 md:px-12 lg:px-16 py-8"
      style={{ backgroundColor: "#F5F4F0" }}
    >
      <div
        className="max-w-[1200px] mx-auto rounded-[20px] p-10 md:p-16 lg:p-20"
        style={{
          backgroundColor: "#FFFFFF",
          border: "1px solid rgba(0,0,0,0.06)",
          boxShadow: "0 12px 60px rgba(0,0,0,0.06)",
          opacity: isVisible ? 1 : 0,
          transform: isVisible ? "translateY(0) scale(1)" : "translateY(40px) scale(0.98)",
          transition: "all 1s cubic-bezier(0.16,1,0.3,1)",
        }}
      >
        <span
          className="font-geist text-[11px] uppercase tracking-[0.14em] block mb-4"
          style={{ color: "#888880" }}
        >
          CONTACT US
        </span>

        <div ref={headRef}>
          <h2
            className={`font-satoshi text-[36px] md:text-[56px] lg:text-[72px] font-bold leading-[1.05] max-w-[800px] blur-reveal ${headVisible ? "visible" : ""}`}
            style={{ color: "#0A0A09" }}
          >
            Your Vision, Our Expertise. Let's connect.
          </h2>
        </div>

        <a
          href="mailto:hello@studio.dev"
          className="magnetic-hover inline-flex items-center justify-center mt-12 font-satoshi text-[13px] font-medium uppercase tracking-[0.06em] rounded-lg cursor-pointer"
          style={{
            backgroundColor: "#0A0A09",
            color: "#FFFFFF",
            padding: "16px 40px",
          }}
        >
          Let's talk
        </a>
      </div>
    </section>
  );
};

export default ContactCard;
