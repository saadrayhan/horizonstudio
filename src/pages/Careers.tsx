import { Link } from "react-router-dom";
import { useReveal } from "@/hooks/useReveal";
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
  const { ref, visible } = useReveal(0.1);

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <section className="pt-32 pb-20 px-6 lg:px-12 max-w-[1200px] mx-auto">
        <p className="text-[11px] font-mono text-muted-foreground uppercase tracking-wider mb-4">Careers</p>
        <h1 className="text-4xl md:text-6xl font-semibold tracking-tight max-w-[700px] animate-blur-in">
          Build things that matter.
        </h1>
        <p className="text-lg text-muted-foreground mt-6 max-w-[520px] leading-relaxed animate-blur-in" style={{ animationDelay: "150ms" }}>
          We're always looking for talented people who care deeply about craft. No bureaucracy, no politics — just meaningful work.
        </p>
      </section>

      <div className="border-t border-border" />

      {/* Perks */}
      <section className="py-16 px-6 lg:px-12 max-w-[1200px] mx-auto">
        <h2 className="text-xl font-semibold mb-8">Why join us</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {perks.map((p, i) => (
            <div key={i} className="py-4 px-5 rounded-lg bg-secondary text-[14px] font-medium">
              {p}
            </div>
          ))}
        </div>
      </section>

      <div className="border-t border-border" />

      {/* Open roles */}
      <section ref={ref} className="py-16 px-6 lg:px-12 max-w-[1200px] mx-auto">
        <h2 className="text-xl font-semibold mb-2">Open positions</h2>
        <p className="text-[14px] text-muted-foreground mb-10">{jobs.length} roles available</p>

        {jobs.map((j, i) => (
          <Link
            to={`/careers/${j.slug}`}
            key={j.slug}
            className="group flex flex-col md:flex-row md:items-center justify-between py-6 border-t border-border scroll-fade hover:bg-secondary/50 -mx-4 px-4 rounded-lg transition-colors"
            style={{
              transitionDelay: `${i * 80}ms`,
              ...(visible ? { opacity: 1, transform: "translateY(0)" } : {}),
            }}
          >
            <div>
              <h3 className="text-lg font-semibold group-hover:underline">{j.title}</h3>
              <p className="text-[13px] text-muted-foreground mt-1">{j.team}</p>
            </div>
            <div className="flex items-center gap-6 mt-3 md:mt-0">
              <span className="text-[13px] text-muted-foreground">{j.location}</span>
              <span className="text-[12px] font-mono text-muted-foreground bg-secondary px-3 py-1 rounded-full">{j.type}</span>
              <span className="text-[13px] text-foreground font-medium opacity-0 group-hover:opacity-100 transition-opacity">
                Apply →
              </span>
            </div>
          </Link>
        ))}
      </section>

      <div className="border-t border-border" />

      {/* General application */}
      <section className="py-24 px-6 lg:px-12 max-w-[1200px] mx-auto text-center">
        <h2 className="text-3xl font-semibold">Don't see your role?</h2>
        <p className="text-muted-foreground mt-3 max-w-[400px] mx-auto">
          We're always open to hearing from talented people. Send us your portfolio.
        </p>
        <a
          href="mailto:careers@studio.dev"
          className="inline-block mt-6 text-[14px] font-medium bg-foreground text-background px-6 py-3 rounded-lg hover:opacity-90 transition-opacity"
        >
          Send your portfolio →
        </a>
      </section>

      <Footer />
    </div>
  );
};

export default Careers;
