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
  "Fully remote-first", "Competitive salary", "Flexible hours",
  "Learning budget", "Small team, big impact", "No micromanagement",
];

const Careers = () => {
  const { ref: perksRef, visibleItems: perksVis } = useStaggerReveal(perks.length, 0.1, 80);
  const { ref: jobsRef, visibleItems: jobsVis } = useStaggerReveal(jobs.length, 0.1, 100);

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <section className="pt-[72px]">
        <div className="max-w-[1240px] mx-auto px-6 lg:px-10 py-20 md:py-28">
          <h1 className="font-serif text-[44px] md:text-[56px] text-foreground leading-[1.08] max-w-[600px] animate-blur-in italic">
            Build things that matter.
          </h1>
          <p className="text-[15px] text-muted-foreground mt-5 max-w-[480px] leading-relaxed animate-blur-in" style={{ animationDelay: "150ms" }}>
            We're looking for talented people who care deeply about craft. No bureaucracy — just meaningful work.
          </p>
        </div>
      </section>

      {/* Perks */}
      <section className="border-t border-border">
        <div className="max-w-[1240px] mx-auto px-6 lg:px-10 py-16">
          <p className="text-[11px] font-mono text-muted-foreground uppercase tracking-wider mb-8">Why join us</p>
          <div ref={perksRef} className="grid grid-cols-2 md:grid-cols-3 gap-3">
            {perks.map((p, i) => (
              <div key={i} className={`card-lift py-5 px-6 rounded-xl bg-secondary/60 border border-border transition-all duration-400 ${perksVis[i] ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}>
                <p className="text-[14px] font-medium text-foreground">{p}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Open Positions */}
      <section className="border-t border-border">
        <div className="max-w-[1240px] mx-auto px-6 lg:px-10 py-20">
          <div className="flex items-end justify-between mb-2">
            <h2 className="font-serif text-2xl md:text-3xl text-foreground italic">Open positions</h2>
            <span className="text-[12px] font-mono text-muted-foreground">{jobs.length} roles</span>
          </div>

          <div ref={jobsRef}>
            {jobs.map((j, i) => (
              <Link
                to={`/careers/${j.slug}`}
                key={j.slug}
                className={`group flex flex-col md:flex-row md:items-center justify-between py-6 border-t border-border transition-all duration-400 ${jobsVis[i] ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}
              >
                <div>
                  <h3 className="text-[16px] font-semibold text-foreground group-hover:text-muted-foreground transition-colors">{j.title}</h3>
                  <p className="text-[12px] text-muted-foreground mt-0.5">{j.team}</p>
                </div>
                <div className="flex items-center gap-4 mt-3 md:mt-0">
                  <span className="text-[12px] text-muted-foreground">{j.location}</span>
                  <span className="text-[11px] font-mono text-muted-foreground px-2.5 py-0.5 rounded-full border border-border">{j.type}</span>
                  <span className="text-[13px] text-foreground font-medium opacity-0 group-hover:opacity-100 transition-opacity">→</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* General app */}
      <section className="border-t border-border bg-secondary/40">
        <div className="max-w-[1240px] mx-auto px-6 lg:px-10 py-20 text-center">
          <h2 className="font-serif text-3xl md:text-4xl text-foreground italic">Don't see your role?</h2>
          <p className="text-muted-foreground mt-3 max-w-[400px] mx-auto text-[14px]">
            We're always open to hearing from talented people. Send us your portfolio.
          </p>
          <a href="mailto:careers@studio.dev" className="inline-block mt-6 text-[13px] font-medium bg-foreground text-primary-foreground px-7 py-3 rounded-full hover:bg-foreground/90 transition-colors">
            Send your portfolio →
          </a>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Careers;
