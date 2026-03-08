import { Link } from "react-router-dom";
import { useReveal, useCountUp, useStaggerReveal } from "@/hooks/useReveal";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const team = [
  { name: "Ahmed R.", role: "Founder & Design Lead" },
  { name: "Farhan K.", role: "Full-Stack Developer" },
  { name: "Nadia S.", role: "UX Researcher" },
  { name: "Tanvir H.", role: "Frontend Engineer" },
  { name: "Riya M.", role: "Visual Designer" },
];

const values = [
  { title: "Design before code", desc: "We design the complete experience before development begins. Prototyping isn't optional — it's how we de-risk." },
  { title: "Understand before execute", desc: "We spend real time understanding your problem before proposing solutions. Premature solutions are expensive." },
  { title: "Communicate like partners", desc: "Full visibility, always. No black boxes. You'll know what we're working on and why." },
  { title: "Say no when we should", desc: "If a project isn't right, we tell you. We protect quality by being selective about what we take on." },
];

const About = () => {
  const { ref: c1, count: n1 } = useCountUp(12, 1400);
  const { ref: c2, count: n2 } = useCountUp(5, 1200);
  const { ref: teamRef, visibleItems: teamVis } = useStaggerReveal(5, 0.1, 100);
  const { ref: valRef, visibleItems: valVis } = useStaggerReveal(4, 0.1, 120);

  return (
    <div className="min-h-screen bg-background noise-overlay">
      <Navbar />

      <section className="pt-32 pb-16 px-6 lg:px-10 max-w-[1200px] mx-auto">
        <p className="text-[11px] font-mono text-muted-foreground uppercase tracking-wider mb-3">About us</p>
        <h1 className="text-4xl md:text-6xl font-semibold tracking-[-0.03em] max-w-[800px] animate-blur-in gradient-text-subtle">
          Small team. Strong opinions. High standards.
        </h1>
        <p className="text-[17px] text-muted-foreground mt-6 max-w-[520px] leading-relaxed animate-blur-in" style={{ animationDelay: "150ms" }}>
          We're a design-first product studio. No middlemen, no bloated processes — individual ownership of every project.
        </p>
      </section>

      {/* Stats */}
      <section className="border-t border-border">
        <div className="max-w-[1200px] mx-auto px-6 lg:px-10 py-16 grid grid-cols-2 md:grid-cols-4 gap-8">
          <div ref={c1}>
            <p className="text-[11px] font-mono text-muted-foreground uppercase tracking-wider mb-2">Projects</p>
            <p className="text-5xl font-semibold text-foreground">{n1}+</p>
          </div>
          <div ref={c2}>
            <p className="text-[11px] font-mono text-muted-foreground uppercase tracking-wider mb-2">Team</p>
            <p className="text-5xl font-semibold text-foreground">{n2}</p>
          </div>
          <div>
            <p className="text-[11px] font-mono text-muted-foreground uppercase tracking-wider mb-2">Founded</p>
            <p className="text-5xl font-semibold text-foreground">2026</p>
          </div>
          <div>
            <p className="text-[11px] font-mono text-muted-foreground uppercase tracking-wider mb-2">Based in</p>
            <p className="text-5xl font-semibold text-foreground">Dhaka</p>
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="border-t border-border">
        <div className="max-w-[1200px] mx-auto px-6 lg:px-10 py-20">
          <p className="text-[11px] font-mono text-muted-foreground uppercase tracking-wider mb-3">The team</p>
          <h2 className="text-2xl md:text-3xl font-semibold mb-12 gradient-text-subtle">The people behind the pixels.</h2>
          <div ref={teamRef} className="grid grid-cols-2 md:grid-cols-5 gap-5">
            {team.map((m, i) => (
              <div
                key={m.name}
                className={`transition-all duration-500 ${teamVis[i] ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}
              >
                <div className="aspect-[3/4] bg-gradient-to-br from-secondary to-accent rounded-xl mb-4 border border-border/50" />
                <p className="text-[14px] font-medium text-foreground">{m.name}</p>
                <p className="text-[12px] text-muted-foreground mt-0.5">{m.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="border-t border-border">
        <div className="max-w-[1200px] mx-auto px-6 lg:px-10 py-20">
          <p className="text-[11px] font-mono text-muted-foreground uppercase tracking-wider mb-3">How we work</p>
          <h2 className="text-2xl md:text-3xl font-semibold max-w-[500px] mb-12 gradient-text-subtle">
            Principles, not process.
          </h2>
          <div ref={valRef}>
            {values.map((v, i) => (
              <div
                key={i}
                className={`grid grid-cols-1 md:grid-cols-[1fr_1fr] gap-4 py-8 border-t border-border transition-all duration-500 ${
                  valVis[i] ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
                }`}
              >
                <h3 className="text-xl md:text-2xl font-semibold text-foreground">{v.title}</h3>
                <p className="text-[14px] text-muted-foreground leading-relaxed">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="border-t border-border">
        <div className="max-w-[1200px] mx-auto px-6 lg:px-10 py-24 text-center">
          <h2 className="text-3xl md:text-5xl font-semibold tracking-tight gradient-text-subtle">Want to work with us?</h2>
          <div className="flex items-center justify-center gap-3 mt-8">
            <Link to="/contact" className="text-[13px] font-medium text-primary-foreground bg-foreground px-5 py-2.5 rounded-lg hover:bg-foreground/90 transition-colors">
              Start a project →
            </Link>
            <Link to="/careers" className="text-[13px] font-medium border border-border px-5 py-2.5 rounded-lg hover:bg-secondary transition-colors text-foreground">
              View open roles
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;
