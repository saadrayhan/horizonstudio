import { Link } from "react-router-dom";
import { useStaggerReveal } from "@/hooks/useReveal";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const jobs = [
  { slug: "senior-product-designer", title: "Senior Product Designer", type: "Full-time", location: "Remote / Dhaka", team: "Design" },
  { slug: "frontend-engineer", title: "Frontend Engineer", type: "Full-time", location: "Remote", team: "Engineering" },
  { slug: "fullstack-developer", title: "Full-Stack Developer", type: "Full-time", location: "Remote / Dhaka", team: "Engineering" },
  { slug: "design-intern", title: "Design Intern", type: "Internship", location: "Dhaka", team: "Design" },
];

const perks = [
  { icon: "◆", text: "Fully remote-first" },
  { icon: "◆", text: "Competitive salary" },
  { icon: "◆", text: "Flexible hours" },
  { icon: "◆", text: "Learning budget" },
  { icon: "◆", text: "Small team, big impact" },
  { icon: "◆", text: "No micromanagement" },
];

const Careers = () => {
  const { ref: jobsRef, visibleItems: jobsVis } = useStaggerReveal(jobs.length, 0.1, 100);
  const { ref: perksRef, visibleItems: perksVis } = useStaggerReveal(perks.length, 0.1, 80);

  return (
    <div className="min-h-screen bg-background noise-overlay">
      <Navbar />

      <section className="pt-32 pb-16 px-6 lg:px-10 max-w-[1200px] mx-auto">
        <p className="text-[11px] font-mono text-muted-foreground uppercase tracking-wider mb-3">Careers</p>
        <h1 className="text-4xl md:text-6xl font-semibold tracking-[-0.03em] max-w-[700px] animate-blur-in gradient-text-subtle">
          Build things that matter.
        </h1>
        <p className="text-[17px] text-muted-foreground mt-6 max-w-[520px] leading-relaxed animate-blur-in" style={{ animationDelay: "150ms" }}>
          We're looking for talented people who care deeply about craft. No bureaucracy, no politics — just meaningful work.
        </p>
      </section>

      {/* Perks */}
      <section className="border-t border-border">
        <div className="max-w-[1200px] mx-auto px-6 lg:px-10 py-16">
          <p className="text-[11px] font-mono text-muted-foreground uppercase tracking-wider mb-8">Why join us</p>
          <div ref={perksRef} className="grid grid-cols-2 md:grid-cols-3 gap-3">
            {perks.map((p, i) => (
              <div
                key={i}
                className={`feature-card p-4 rounded-xl border border-border bg-card transition-all duration-400 ${
                  perksVis[i] ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
                }`}
              >
                <span className="text-[11px] text-muted-foreground">{p.icon}</span>
                <p className="text-[14px] font-medium text-foreground mt-1">{p.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Open roles */}
      <section className="border-t border-border">
        <div className="max-w-[1200px] mx-auto px-6 lg:px-10 py-16">
          <div className="flex items-end justify-between mb-2">
            <p className="text-[11px] font-mono text-muted-foreground uppercase tracking-wider">Open positions</p>
            <span className="text-[12px] font-mono text-muted-foreground">{jobs.length} roles</span>
          </div>

          <div ref={jobsRef}>
            {jobs.map((j, i) => (
              <Link
                to={`/careers/${j.slug}`}
                key={j.slug}
                className={`group flex flex-col md:flex-row md:items-center justify-between py-5 border-t border-border hover:bg-secondary/30 -mx-4 px-4 rounded-lg transition-all duration-400 ${
                  jobsVis[i] ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
                }`}
              >
                <div>
                  <h3 className="text-[16px] font-semibold text-foreground group-hover:text-foreground/80 transition-colors">{j.title}</h3>
                  <p className="text-[12px] text-muted-foreground mt-0.5">{j.team}</p>
                </div>
                <div className="flex items-center gap-4 mt-3 md:mt-0">
                  <span className="text-[12px] text-muted-foreground">{j.location}</span>
                  <span className="text-[11px] font-mono text-muted-foreground px-2.5 py-0.5 rounded-md border border-border">{j.type}</span>
                  <span className="text-[12px] text-foreground font-medium opacity-0 group-hover:opacity-100 transition-opacity">
                    Apply →
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* General */}
      <section className="border-t border-border">
        <div className="max-w-[1200px] mx-auto px-6 lg:px-10 py-24 text-center">
          <h2 className="text-3xl font-semibold gradient-text-subtle">Don't see your role?</h2>
          <p className="text-muted-foreground mt-3 max-w-[400px] mx-auto text-[15px]">
            We're always open to hearing from talented people. Send us your portfolio.
          </p>
          <a
            href="mailto:careers@studio.dev"
            className="inline-block mt-6 text-[13px] font-medium text-primary-foreground bg-foreground px-6 py-2.5 rounded-lg hover:bg-foreground/90 transition-colors"
          >
            Send your portfolio →
          </a>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Careers;
