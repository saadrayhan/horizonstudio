import { Link } from "react-router-dom";
import { useReveal, useCountUp } from "@/hooks/useReveal";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const team = [
  { name: "Ahmed R.", role: "Founder & Design Lead", img: "" },
  { name: "Farhan K.", role: "Full-Stack Developer", img: "" },
  { name: "Nadia S.", role: "UX Researcher", img: "" },
  { name: "Tanvir H.", role: "Frontend Engineer", img: "" },
  { name: "Riya M.", role: "Visual Designer", img: "" },
];

const values = [
  { title: "Design before code.", desc: "We design the complete experience before development begins." },
  { title: "Understand before execute.", desc: "We spend real time understanding your problem before proposing solutions." },
  { title: "Communicate like partners.", desc: "Full visibility, always. No black boxes, no surprise deliveries." },
  { title: "Say no when we should.", desc: "If a project isn't right, we tell you honestly. We protect quality by being selective." },
];

const About = () => {
  const { ref: vRef, visible: vVisible } = useReveal(0.1);
  const { ref: tRef, visible: tVisible } = useReveal(0.1);
  const { ref: c1, count: n1 } = useCountUp(12, 1400);
  const { ref: c2, count: n2 } = useCountUp(5, 1200);

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero */}
      <section className="pt-32 pb-20 px-6 lg:px-12 max-w-[1200px] mx-auto">
        <p className="text-[11px] font-mono text-muted-foreground uppercase tracking-wider mb-4">About us</p>
        <h1 className="text-4xl md:text-6xl font-semibold tracking-tight max-w-[800px] animate-blur-in">
          A small team with strong opinions and high standards.
        </h1>
        <p className="text-lg text-muted-foreground mt-6 max-w-[520px] leading-relaxed animate-blur-in" style={{ animationDelay: "150ms" }}>
          We're a design-first product studio. No middlemen, no bloated processes. We take individual ownership of every project.
        </p>
      </section>

      <div className="border-t border-border" />

      {/* Stats */}
      <section className="py-16 px-6 lg:px-12 max-w-[1200px] mx-auto grid grid-cols-2 md:grid-cols-4 gap-8">
        <div ref={c1}>
          <p className="text-[11px] font-mono text-muted-foreground uppercase tracking-wider mb-2">Projects</p>
          <p className="text-5xl font-semibold">{n1}+</p>
        </div>
        <div ref={c2}>
          <p className="text-[11px] font-mono text-muted-foreground uppercase tracking-wider mb-2">Team</p>
          <p className="text-5xl font-semibold">{n2}</p>
        </div>
        <div>
          <p className="text-[11px] font-mono text-muted-foreground uppercase tracking-wider mb-2">Founded</p>
          <p className="text-5xl font-semibold">2026</p>
        </div>
        <div>
          <p className="text-[11px] font-mono text-muted-foreground uppercase tracking-wider mb-2">Based in</p>
          <p className="text-5xl font-semibold">Dhaka</p>
        </div>
      </section>

      <div className="border-t border-border" />

      {/* Team */}
      <section ref={tRef} className="py-20 px-6 lg:px-12 max-w-[1200px] mx-auto">
        <h2 className="text-2xl font-semibold mb-12">The Team</h2>
        <div className="grid grid-cols-2 md:grid-cols-5 gap-6">
          {team.map((m, i) => (
            <div
              key={m.name}
              className="scroll-fade"
              style={{
                transitionDelay: `${i * 80}ms`,
                ...(tVisible ? { opacity: 1, transform: "translateY(0)" } : {}),
              }}
            >
              <div className="aspect-[3/4] bg-secondary rounded-lg mb-4 overflow-hidden">
                <div className="w-full h-full bg-muted" />
              </div>
              <p className="text-[14px] font-medium">{m.name}</p>
              <p className="text-[13px] text-muted-foreground">{m.role}</p>
            </div>
          ))}
        </div>
      </section>

      <div className="border-t border-border" />

      {/* Values */}
      <section ref={vRef} className="py-20 px-6 lg:px-12 max-w-[1200px] mx-auto">
        <p className="text-[11px] font-mono text-muted-foreground uppercase tracking-wider mb-4">How we work</p>
        <h2 className="text-2xl md:text-4xl font-semibold max-w-[500px] mb-12">
          We have opinions. Strong ones.
        </h2>
        {values.map((v, i) => (
          <div
            key={i}
            className="grid grid-cols-1 md:grid-cols-[1fr_1fr] gap-4 py-8 border-t border-border scroll-fade"
            style={{
              transitionDelay: `${i * 100}ms`,
              ...(vVisible ? { opacity: 1, transform: "translateY(0)" } : {}),
            }}
          >
            <h3 className="text-xl md:text-2xl font-semibold">{v.title}</h3>
            <p className="text-[14px] text-muted-foreground leading-relaxed">{v.desc}</p>
          </div>
        ))}
      </section>

      <div className="border-t border-border" />

      {/* CTA */}
      <section className="py-24 px-6 lg:px-12 max-w-[1200px] mx-auto text-center">
        <h2 className="text-3xl md:text-5xl font-semibold">Want to work with us?</h2>
        <div className="flex items-center justify-center gap-4 mt-8">
          <Link to="/contact" className="text-[14px] font-medium bg-foreground text-background px-6 py-3 rounded-lg hover:opacity-90 transition-opacity">
            Start a project →
          </Link>
          <Link to="/careers" className="text-[14px] font-medium border border-border px-6 py-3 rounded-lg hover:bg-secondary transition-colors">
            View open roles
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;
