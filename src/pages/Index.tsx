import { Link } from "react-router-dom";
import { useReveal, useCountUp } from "@/hooks/useReveal";
import { useEffect, useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const projects = [
  { slug: "branch-management", name: "Branch Management System", category: "Product Design", year: "2025" },
  { slug: "evwork", name: "EVwork Platform", category: "UI/UX Design", year: "2025" },
  { slug: "ecommerce-app", name: "E-Commerce Mobile App", category: "Design + Development", year: "2024" },
];

const services = [
  { num: "01", name: "Product Design", desc: "Research, interface design, and design systems built for real users." },
  { num: "02", name: "Development", desc: "Full-stack engineering that ships fast and scales cleanly." },
  { num: "03", name: "Strategy", desc: "Discovery and scoping before a single line of code is written." },
];

const ProjectCard = ({ p, i }: { p: typeof projects[0]; i: number }) => {
  const { ref, visible } = useReveal(0.1);
  return (
    <Link
      to={`/work/${p.slug}`}
      ref={ref}
      className="group block scroll-fade"
      style={{
        transitionDelay: `${i * 80}ms`,
        ...(visible ? { opacity: 1, transform: "translateY(0)" } : {}),
      }}
    >
      <div className="aspect-[16/10] bg-secondary rounded-lg mb-5 overflow-hidden">
        <div className="w-full h-full bg-muted group-hover:scale-[1.02] transition-transform duration-500" />
      </div>
      <div className="flex items-start justify-between">
        <div>
          <h3 className="text-lg font-semibold text-foreground group-hover:underline">{p.name}</h3>
          <p className="text-[13px] text-muted-foreground mt-1">{p.category}</p>
        </div>
        <span className="text-[13px] text-muted-foreground font-mono">{p.year}</span>
      </div>
    </Link>
  );
};

const Index = () => {
  const [loaded, setLoaded] = useState(false);
  const { ref: statsRef, visible: statsVisible } = useReveal(0.15);
  const { ref: c1Ref, count: c1 } = useCountUp(12, 1400);
  const { ref: c2Ref, count: c2 } = useCountUp(5, 1200);
  const { ref: servRef, visible: servVisible } = useReveal(0.1);

  useEffect(() => { setTimeout(() => setLoaded(true), 50); }, []);

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero */}
      <section className="pt-32 pb-24 px-6 lg:px-12 max-w-[1200px] mx-auto">
        <div className={`${loaded ? "animate-blur-in" : "opacity-0"}`}>
          <p className="text-[13px] text-muted-foreground font-mono mb-6" style={{ animationDelay: "100ms" }}>
            Design & Development Studio
          </p>
        </div>
        <h1
          className={`text-4xl md:text-6xl lg:text-7xl font-semibold tracking-tight leading-[1.08] max-w-[900px] ${loaded ? "animate-blur-in" : "opacity-0"}`}
          style={{ animationDelay: "200ms" }}
        >
          We design and build products founders are proud of.
        </h1>
        <p
          className={`text-lg text-muted-foreground mt-6 max-w-[520px] leading-relaxed ${loaded ? "animate-blur-in" : "opacity-0"}`}
          style={{ animationDelay: "350ms" }}
        >
          A small, focused team. No middlemen. We handle design and development — end to end, with craft and honesty.
        </p>
        <div
          className={`flex items-center gap-4 mt-10 ${loaded ? "animate-blur-in" : "opacity-0"}`}
          style={{ animationDelay: "500ms" }}
        >
          <Link
            to="/contact"
            className="text-[14px] font-medium bg-foreground text-background px-6 py-3 rounded-lg hover:opacity-90 transition-opacity"
          >
            Start a project →
          </Link>
          <Link
            to="/work"
            className="text-[14px] font-medium text-foreground px-6 py-3 rounded-lg border border-border hover:bg-secondary transition-colors"
          >
            See our work
          </Link>
        </div>
      </section>

      {/* Divider */}
      <div className="border-t border-border" />

      {/* Stats */}
      <section ref={statsRef} className="py-20 px-6 lg:px-12 max-w-[1200px] mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {[
            { label: "Projects delivered", refEl: c1Ref, val: c1, suffix: "+" },
            { label: "Team members", refEl: c2Ref, val: c2, suffix: "" },
            { label: "Founded", refEl: null, val: "2026", suffix: "" },
            { label: "Location", refEl: null, val: "Dhaka", suffix: "" },
          ].map((s, i) => (
            <div
              key={i}
              className="scroll-fade"
              ref={s.refEl || undefined}
              style={{
                transitionDelay: `${i * 100}ms`,
                ...(statsVisible ? { opacity: 1, transform: "translateY(0)" } : {}),
              }}
            >
              <p className="text-[11px] font-mono text-muted-foreground uppercase tracking-wider mb-3">{s.label}</p>
              <p className="text-4xl md:text-5xl font-semibold text-foreground">
                {typeof s.val === "number" ? s.val : s.val}{s.suffix}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Divider */}
      <div className="border-t border-border" />

      {/* Selected Work */}
      <section className="py-20 px-6 lg:px-12 max-w-[1200px] mx-auto">
        <div className="flex items-center justify-between mb-12">
          <h2 className="text-2xl font-semibold">Selected Work</h2>
          <Link to="/work" className="text-[13px] text-muted-foreground hover:text-foreground transition-colors">
            View all →
          </Link>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {projects.map((p, i) => (
            <ProjectCard key={p.slug} p={p} i={i} />
          ))}
        </div>
      </section>

      {/* Divider */}
      <div className="border-t border-border" />

      {/* Services */}
      <section ref={servRef} className="py-20 px-6 lg:px-12 max-w-[1200px] mx-auto">
        <p className="text-[11px] font-mono text-muted-foreground uppercase tracking-wider mb-4">What we do</p>
        <h2 className="text-2xl md:text-4xl font-semibold max-w-[500px] mb-12">
          Three ways we help you build.
        </h2>
        <div className="space-y-0">
          {services.map((s, i) => (
            <div
              key={i}
              className="group grid grid-cols-1 md:grid-cols-[60px_1fr_1fr] gap-4 py-8 border-t border-border scroll-fade cursor-default"
              style={{
                transitionDelay: `${i * 100}ms`,
                ...(servVisible ? { opacity: 1, transform: "translateY(0)" } : {}),
              }}
            >
              <span className="text-[13px] font-mono text-muted-foreground">{s.num}</span>
              <h3 className="text-xl font-semibold text-foreground group-hover:translate-x-1 transition-transform duration-200">{s.name}</h3>
              <p className="text-[14px] text-muted-foreground leading-relaxed">{s.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Divider */}
      <div className="border-t border-border" />

      {/* CTA */}
      <section className="py-24 px-6 lg:px-12 max-w-[1200px] mx-auto text-center">
        <h2 className="text-3xl md:text-5xl font-semibold">Have something worth building?</h2>
        <p className="text-muted-foreground mt-4 max-w-[420px] mx-auto">
          Tell us about your project. We'll tell you honestly if we're the right team.
        </p>
        <Link
          to="/contact"
          className="inline-block mt-8 text-[14px] font-medium bg-foreground text-background px-8 py-3.5 rounded-lg hover:opacity-90 transition-opacity"
        >
          Start a project →
        </Link>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
