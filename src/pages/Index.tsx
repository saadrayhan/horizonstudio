import { Link } from "react-router-dom";
import { useReveal, useCountUp, useStaggerReveal } from "@/hooks/useReveal";
import { useEffect, useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const projects = [
  { slug: "branch-management", name: "Branch Management System", category: "Product Design", year: "2025", color: "from-[hsl(258,50%,20%)] to-[hsl(258,30%,12%)]" },
  { slug: "evwork", name: "EVwork Platform", category: "UI/UX Design", year: "2025", color: "from-[hsl(210,50%,18%)] to-[hsl(210,30%,10%)]" },
  { slug: "ecommerce-app", name: "E-Commerce Mobile App", category: "Design + Dev", year: "2024", color: "from-[hsl(170,40%,16%)] to-[hsl(170,25%,9%)]" },
];

const features = [
  { icon: "◆", title: "Product Design", desc: "Research, interface design, and design systems built for real users and real constraints." },
  { icon: "▲", title: "Development", desc: "Full-stack engineering that ships fast, scales cleanly, and doesn't break on weekends." },
  { icon: "●", title: "Strategy", desc: "Discovery and scoping before a single line of code is written. We help you build the right thing." },
  { icon: "◇", title: "Branding", desc: "Visual identity systems that make products memorable and coherent across every touchpoint." },
];

const clients = ["Startup A", "Startup B", "Startup C", "Startup D", "Startup E", "Startup F"];

const Index = () => {
  const [loaded, setLoaded] = useState(false);
  const { ref: statsRef, visible: statsVisible } = useReveal(0.15);
  const { ref: c1Ref, count: c1 } = useCountUp(12, 1400);
  const { ref: c2Ref, count: c2 } = useCountUp(5, 1200);
  const { ref: c3Ref, count: c3 } = useCountUp(2026, 800);
  const { ref: featRef, visibleItems: featVisible } = useStaggerReveal(4, 0.1, 120);
  const { ref: projRef, visibleItems: projVisible } = useStaggerReveal(3, 0.1, 150);

  useEffect(() => { setTimeout(() => setLoaded(true), 50); }, []);

  return (
    <div className="min-h-screen bg-background noise-overlay">
      <Navbar />

      {/* Hero */}
      <section className="hero-gradient relative pt-36 pb-28 px-6 lg:px-10 max-w-[1200px] mx-auto">
        <div className={loaded ? "animate-blur-in" : "opacity-0"}>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-border bg-secondary/50 mb-8">
            <span className="w-1.5 h-1.5 rounded-full bg-[hsl(var(--gradient-start))] animate-pulse" />
            <span className="text-[12px] font-mono text-muted-foreground">Available for Q3 2026 projects</span>
          </div>
        </div>
        <h1
          className={`text-5xl md:text-7xl lg:text-[80px] font-semibold tracking-[-0.03em] leading-[1.05] max-w-[900px] ${loaded ? "animate-blur-in" : "opacity-0"}`}
          style={{ animationDelay: "150ms" }}
        >
          We design & build
          <br />
          <span className="gradient-text">products that ship.</span>
        </h1>
        <p
          className={`text-[17px] text-muted-foreground mt-7 max-w-[520px] leading-relaxed ${loaded ? "animate-blur-in" : "opacity-0"}`}
          style={{ animationDelay: "300ms" }}
        >
          A small, focused product studio. No middlemen, no layers — just design and engineering, end to end.
        </p>
        <div
          className={`flex items-center gap-3 mt-10 ${loaded ? "animate-blur-in" : "opacity-0"}`}
          style={{ animationDelay: "450ms" }}
        >
          <Link
            to="/contact"
            className="text-[13px] font-medium text-primary-foreground bg-foreground px-5 py-2.5 rounded-lg hover:bg-foreground/90 transition-colors"
          >
            Start a project →
          </Link>
          <Link
            to="/work"
            className="text-[13px] font-medium text-foreground px-5 py-2.5 rounded-lg border border-border hover:bg-secondary transition-colors"
          >
            View work
          </Link>
        </div>

        {/* Trusted by strip */}
        <div className={`mt-20 pt-8 border-t border-border ${loaded ? "animate-blur-in" : "opacity-0"}`} style={{ animationDelay: "600ms" }}>
          <p className="text-[11px] font-mono text-muted-foreground uppercase tracking-wider mb-5">Trusted by founders building</p>
          <div className="flex items-center gap-8 flex-wrap">
            {clients.map((c) => (
              <span key={c} className="text-[14px] text-muted-foreground/50 font-medium">{c}</span>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="border-t border-border">
        <div ref={statsRef} className="max-w-[1200px] mx-auto px-6 lg:px-10 py-16 grid grid-cols-2 md:grid-cols-4 gap-8">
          {[
            { ref: c1Ref, label: "Projects shipped", val: `${c1}+` },
            { ref: c2Ref, label: "Team members", val: String(c2) },
            { ref: c3Ref, label: "Founded", val: String(c3) },
            { ref: null, label: "Location", val: "Dhaka" },
          ].map((s, i) => (
            <div
              key={i}
              ref={s.ref}
              className="scroll-fade"
              style={{ transitionDelay: `${i * 80}ms`, ...(statsVisible ? { opacity: 1, transform: "translateY(0)" } : {}) }}
            >
              <p className="text-[11px] font-mono text-muted-foreground uppercase tracking-wider mb-2">{s.label}</p>
              <p className="text-4xl md:text-5xl font-semibold text-foreground tracking-tight">{s.val}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Features / Services */}
      <section className="border-t border-border">
        <div className="max-w-[1200px] mx-auto px-6 lg:px-10 py-20">
          <div className="flex items-end justify-between mb-14">
            <div>
              <p className="text-[11px] font-mono text-muted-foreground uppercase tracking-wider mb-3">What we do</p>
              <h2 className="text-3xl md:text-4xl font-semibold tracking-tight gradient-text-subtle">
                Built for builders.
              </h2>
            </div>
          </div>
          <div ref={featRef} className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {features.map((f, i) => (
              <div
                key={i}
                className={`feature-card p-6 rounded-xl border border-border bg-card transition-all duration-300 ${
                  featVisible[i] ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
                }`}
                style={{ transitionDelay: `${i * 100}ms` }}
              >
                <div className="flex items-start gap-4">
                  <span className="text-[18px] text-muted-foreground mt-0.5">{f.icon}</span>
                  <div>
                    <h3 className="text-[16px] font-semibold text-foreground mb-2">{f.title}</h3>
                    <p className="text-[14px] text-muted-foreground leading-relaxed">{f.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Selected Work */}
      <section className="border-t border-border">
        <div className="max-w-[1200px] mx-auto px-6 lg:px-10 py-20">
          <div className="flex items-end justify-between mb-14">
            <div>
              <p className="text-[11px] font-mono text-muted-foreground uppercase tracking-wider mb-3">Selected work</p>
              <h2 className="text-3xl md:text-4xl font-semibold tracking-tight gradient-text-subtle">Recent projects.</h2>
            </div>
            <Link to="/work" className="text-[13px] text-muted-foreground hover:text-foreground transition-colors hidden md:block">
              View all →
            </Link>
          </div>
          <div ref={projRef} className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {projects.map((p, i) => (
              <Link
                to={`/work/${p.slug}`}
                key={p.slug}
                className={`group block transition-all duration-500 ${
                  projVisible[i] ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                }`}
              >
                <div className={`aspect-[16/10] bg-gradient-to-br ${p.color} rounded-xl mb-4 overflow-hidden relative border border-border/50`}>
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <span className="text-[13px] font-medium text-foreground bg-background/80 backdrop-blur-sm px-4 py-2 rounded-full border border-border">
                      View project →
                    </span>
                  </div>
                  <div className="absolute bottom-4 left-4">
                    <span className="text-[11px] font-mono text-foreground/40">{p.year}</span>
                  </div>
                </div>
                <h3 className="text-[15px] font-semibold text-foreground group-hover:text-foreground/80 transition-colors">{p.name}</h3>
                <p className="text-[12px] text-muted-foreground mt-0.5">{p.category}</p>
              </Link>
            ))}
          </div>
          <Link to="/work" className="text-[13px] text-muted-foreground hover:text-foreground transition-colors mt-8 inline-block md:hidden">
            View all projects →
          </Link>
        </div>
      </section>

      {/* CTA */}
      <section className="border-t border-border">
        <div className="max-w-[1200px] mx-auto px-6 lg:px-10 py-24 text-center">
          <h2 className="text-3xl md:text-5xl font-semibold tracking-tight gradient-text-subtle">
            Ready to build?
          </h2>
          <p className="text-muted-foreground mt-4 max-w-[420px] mx-auto text-[15px]">
            Tell us about your project. We'll tell you honestly if we're the right team.
          </p>
          <Link
            to="/contact"
            className="inline-block mt-8 text-[13px] font-medium text-primary-foreground bg-foreground px-7 py-3 rounded-lg hover:bg-foreground/90 transition-colors"
          >
            Start a project →
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
