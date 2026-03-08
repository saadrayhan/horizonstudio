import { useScrollAnimation } from "./useScrollAnimation";

const FooterCTA = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <>
      {/* CTA content */}
      <section id="contact" className="pt-[140px] pb-0 bg-base">
        <div
          ref={ref}
          className="max-w-[700px] mx-auto px-6 md:px-12 text-center"
          style={{
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? "translateY(0)" : "translateY(20px)",
            transition: "opacity 0.5s cubic-bezier(0.16,1,0.3,1), transform 0.5s cubic-bezier(0.16,1,0.3,1)",
          }}
        >
          {/* Pill */}
          <span
            className="inline-block font-body text-[11px] uppercase tracking-[0.1em] font-medium px-3.5 py-1.5 rounded-[20px] text-gold mb-4"
            style={{ backgroundColor: "rgba(196,163,90,0.12)" }}
          >
            Let's talk
          </span>

          <h2 className="font-display text-[42px] md:text-[60px] lg:text-[72px] text-cream leading-[1.05] max-w-[680px] mx-auto">
            Have something worth building?
          </h2>
          <p className="font-body text-[16px] md:text-[18px] text-sage leading-[1.65] max-w-[460px] mx-auto mt-5">
            Tell us about your project. We'll tell you honestly if we're the right team for it.
          </p>
          <a
            href="mailto:hello@studio.com"
            className="inline-block font-body text-[15px] font-medium px-8 py-3 rounded-lg mt-10 transition-opacity duration-150 hover:opacity-[0.88] active:scale-[0.97]"
            style={{ backgroundColor: "#C4A35A", color: "#141F14" }}
          >
            Start a project →
          </a>
        </div>

        {/* Landscape SVG */}
        <div className="mt-20 w-full overflow-hidden" style={{ lineHeight: 0 }}>
          <svg
            viewBox="0 0 1440 220"
            className="w-full h-[140px] md:h-[220px]"
            preserveAspectRatio="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            {/* Layer 1 - back hills */}
            <path
              d="M0,120 C240,60 480,90 720,70 C960,50 1200,80 1440,100 L1440,220 L0,220 Z"
              fill="#1C2A1C"
            />
            {/* Layer 2 */}
            <path
              d="M0,140 C180,100 420,120 660,95 C900,70 1100,110 1440,120 L1440,220 L0,220 Z"
              fill="#172217"
            />
            {/* Dock silhouette */}
            <rect x="700" y="108" width="40" height="2" fill="#0C140C" rx="1" />
            <rect x="708" y="102" width="2" height="8" fill="#0C140C" />
            <rect x="730" y="102" width="2" height="8" fill="#0C140C" />
            {/* Layer 3 */}
            <path
              d="M0,160 C300,130 500,145 720,125 C940,105 1200,140 1440,145 L1440,220 L0,220 Z"
              fill="#131D13"
            />
            {/* Layer 4 */}
            <path
              d="M0,175 C200,155 500,170 720,150 C940,130 1150,165 1440,160 L1440,220 L0,220 Z"
              fill="#0F180F"
            />
            {/* Layer 5 - front, most dramatic */}
            <path
              d="M0,195 C300,170 600,185 820,175 C1040,165 1300,190 1440,180 L1440,220 L0,220 Z"
              fill="#0C140C"
            />
          </svg>
        </div>
      </section>
    </>
  );
};

export default FooterCTA;
