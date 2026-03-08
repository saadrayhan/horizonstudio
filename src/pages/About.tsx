import { Link } from "react-router-dom";
import { useCountUp, useStaggerReveal } from "@/hooks/useReveal";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import processImg from "@/assets/process-image.jpg";

const team = [
  { name: "Ahmed R.", role: "Founder & Design Lead" },
  { name: "Farhan K.", role: "Full-Stack Developer" },
  { name: "Nadia S.", role: "UX Researcher" },
  { name: "Tanvir H.", role: "Frontend Engineer" },
  { name: "Riya M.", role: "Visual Designer" },
];

const values = [
  { title: "Design before code", desc: "We design the complete experience before development begins. Prototyping isn't optional." },
  { title: "Understand before execute", desc: "We spend real time understanding your problem before proposing solutions." },
  { title: "Communicate like partners", desc: "Full visibility, always. No black boxes, no surprise deliveries." },
  { title: "Say no when we should", desc: "If a project isn't right, we tell you. We protect quality by being selective." },
];

const About = () => {
  const { ref: c1, count: n1 } = useCountUp(12, 1400);
  const { ref: c2, count: n2 } = useCountUp(5, 1200);
  const { ref: teamRef, visibleItems: teamVis } = useStaggerReveal(5, 0.1, 100);
  const { ref: valRef, visibleItems: valVis } = useStaggerReveal(4, 0.1, 120);

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <section className="pt-32 pb-16 px-6 lg:px-12 max-w-[1300px] mx-auto">
        <p className="text-[11px] font-mono text-muted-foreground uppercase tracking-wider mb-3">About us</p>
        <h1 className="font-serif text-5xl md:text-7xl text-foreground leading-[1.05] max-w-[800px] animate-blur-in">
          Small team. Strong opinions.
        </h1>
        <p className="text-[16px] text-muted-foreground mt-6 max-w-[520px] leading-relaxed animate-blur-in" style={{ animationDelay: "150ms" }}>
          We're a design-first product studio. No middlemen, no bloated processes — individual ownership of every project.
        </p>
      </section>

      {/* Stats */}
      <section className="border-t border-border">
        <div className="max-w-[1300px] mx-auto px-6 lg:px-12 py-16 grid grid-cols-2 md:grid-cols-4 gap-8">
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
      <section className="section-dark">
        <div className="max-w-[1300px] mx-auto px-6 lg:px-12 py-24">
          <p className="text-[11px] font-mono text-white/40 uppercase tracking-wider mb-3">The team</p>
          <h2 className="font-serif text-3xl md:text-4xl text-white mb-14">The people behind the pixels.</h2>
          <div ref={teamRef} className="grid grid-cols-2 md:grid-cols-5 gap-5">
            {team.map((m, i) => (
              <div key={m.name} className={`transition-all duration-500 ${teamVis[i] ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}>
                <div className="aspect-[3/4] bg-white/5 rounded-2xl mb-4 border border-white/10 overflow-hidden">
                  <img src={processImg} alt={m.name} className="w-full h-full object-cover opacity-60" />
                </div>
                <p className="text-[14px] font-medium text-white">{m.name}</p>
                <p className="text-[12px] text-white/45 mt-0.5">{m.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="bg-background">
        <div className="max-w-[1300px] mx-auto px-6 lg:px-12 py-24">
          <p className="text-[11px] font-mono text-muted-foreground uppercase tracking-wider mb-3">How we work</p>
          <h2 className="font-serif text-3xl md:text-4xl text-foreground max-w-[500px] mb-14">Principles, not process.</h2>
          <div ref={valRef}>
            {values.map((v, i) => (
              <div key={i} className={`grid grid-cols-1 md:grid-cols-[1fr_1fr] gap-4 py-8 border-t border-border transition-all duration-500 ${valVis[i] ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}>
                <h3 className="text-xl md:text-2xl font-semibold text-foreground">{v.title}</h3>
                <p className="text-[14px] text-muted-foreground leading-relaxed">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="border-t border-border bg-secondary/50">
        <div className="max-w-[1300px] mx-auto px-6 lg:px-12 py-24 text-center">
          <h2 className="font-serif text-4xl md:text-5xl text-foreground">Want to work with us?</h2>
          <div className="flex items-center justify-center gap-3 mt-8">
            <Link to="/contact" className="text-[13px] font-medium bg-foreground text-primary-foreground px-6 py-2.5 rounded-full hover:bg-foreground/90 transition-colors">
              Start a project →
            </Link>
            <Link to="/careers" className="text-[13px] font-medium border border-border px-6 py-2.5 rounded-full hover:bg-secondary transition-colors text-foreground">
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
