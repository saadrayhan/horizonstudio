import { Link } from "react-router-dom";
import { useCountUp, useStaggerReveal } from "@/hooks/useReveal";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import processImg from "@/assets/process-image.jpg";
import heroImg from "@/assets/hero-landscape.jpg";
import illustrationAbout from "@/assets/illustration-about.png";

const team = [
  { name: "Ahmed R.", role: "Founder & Design Lead" },
  { name: "Farhan K.", role: "Full-Stack Developer" },
  { name: "Nadia S.", role: "UX Researcher" },
  { name: "Tanvir H.", role: "Frontend Engineer" },
  { name: "Riya M.", role: "Visual Designer" },
];

const principles = [
  { icon: "✓", text: "We hold ourselves to the highest standard — and give our team the latitude to make decisions." },
  { icon: "✓", text: "We move quickly, but never at the expense of quality." },
  { icon: "✓", text: "We say no to projects that don't align with our values." },
];

const values = [
  { title: "Design before code", desc: "We design the complete experience before development begins." },
  { title: "Understand before execute", desc: "We spend real time understanding your problem before proposing solutions." },
  { title: "Communicate like partners", desc: "Full visibility, always. No black boxes." },
  { title: "Say no when we should", desc: "We protect quality by being selective." },
];

const About = () => {
  const { ref: c1, count: n1 } = useCountUp(12, 1400);
  const { ref: c2, count: n2 } = useCountUp(5, 1200);
  const { ref: teamRef, visibleItems: teamVis } = useStaggerReveal(5, 0.1, 100);
  const { ref: valRef, visibleItems: valVis } = useStaggerReveal(4, 0.1, 100);

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero — split with illustration */}
      <section className="pt-[72px] border-b border-border">
        <div className="max-w-[1240px] mx-auto grid grid-cols-1 md:grid-cols-[1.2fr_1fr]">
          <div className="px-6 lg:px-10 py-20 md:py-28 flex flex-col justify-end">
            <h1 className="font-serif text-[42px] md:text-[52px] text-foreground leading-[1.06] animate-blur-in">
              [STUDIO] is a design-first <span className="italic">product studio</span>
            </h1>
            <p className="text-[14px] text-muted-foreground mt-5 max-w-[420px] leading-relaxed animate-blur-in" style={{ animationDelay: "150ms" }}>
              We build products for startups and growing companies — with craft, conviction, and transparency.
            </p>
            <div className="mt-6 animate-blur-in" style={{ animationDelay: "250ms" }}>
              <Link to="/work" className="text-[12px] font-semibold uppercase tracking-wider bg-foreground text-primary-foreground px-6 py-2.5 rounded-full hover:bg-foreground/90 transition-colors inline-flex">
                See our work →
              </Link>
            </div>
          </div>
          <div className="border-l border-border hidden md:flex items-end justify-center px-10 pb-0">
            <img src={illustrationAbout} alt="Architecture" className="w-full max-w-[300px] h-auto object-contain" />
          </div>
        </div>
      </section>

      {/* Two-col value statement */}
      <section className="border-b border-border">
        <div className="max-w-[1240px] mx-auto grid grid-cols-1 md:grid-cols-2">
          <div className="px-6 lg:px-10 py-16 border-r border-border">
            <h2 className="font-serif text-[28px] text-foreground leading-[1.15]">
              Here to deliver the <span className="italic">value</span> expected on day one.
            </h2>
          </div>
          <div className="px-6 lg:px-10 py-16">
            <h2 className="font-serif text-[28px] text-foreground leading-[1.15]">
              At the highest <span className="italic">quality</span> possible.
            </h2>
          </div>
        </div>
      </section>

      {/* Bento — photo + text */}
      <section className="border-b border-border">
        <div className="max-w-[1240px] mx-auto grid grid-cols-1 md:grid-cols-2">
          <div className="bg-secondary/40 px-6 lg:px-10 py-12 border-r border-border">
            <p className="text-[11px] font-mono text-muted-foreground uppercase tracking-wider mb-3">The future of product</p>
            <p className="text-[14px] text-foreground/80 leading-relaxed max-w-[380px] mb-6">
              We believe the best products come from small, focused teams with strong opinions and full ownership.
            </p>
            <Link to="/work" className="text-[12px] font-semibold uppercase tracking-wider text-foreground hover:text-muted-foreground transition-colors">
              See projects →
            </Link>
          </div>
          <div>
            <img src={processImg} alt="Team working" className="w-full h-full object-cover aspect-[4/3]" />
          </div>
        </div>
      </section>

      {/* DNA + principles */}
      <section className="border-b border-border">
        <div className="max-w-[1240px] mx-auto grid grid-cols-1 md:grid-cols-2">
          <div className="px-6 lg:px-10 py-16 md:py-20 border-r border-border">
            <h2 className="font-serif text-[28px] md:text-[36px] text-foreground leading-[1.1]">
              Our DNA is defined by holding an uncompromisingly high bar for who we hire, and giving them wide latitude to make <span className="italic">decisions.</span>
            </h2>
          </div>
          <div className="px-6 lg:px-10 py-16 md:py-20 flex flex-col justify-center">
            {principles.map((p, i) => (
              <div key={i} className="flex items-start gap-3 py-3 border-t border-border first:border-t-0">
                <span className="w-5 h-5 rounded-full bg-foreground text-primary-foreground flex items-center justify-center text-[10px] font-bold shrink-0 mt-0.5">{p.icon}</span>
                <p className="text-[13px] text-foreground/70 leading-relaxed">{p.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats — 4 bordered cells */}
      <section className="border-b border-border">
        <div className="max-w-[1240px] mx-auto grid grid-cols-2 md:grid-cols-4">
          <div ref={c1} className="px-6 lg:px-10 py-8 border-r border-border">
            <p className="text-[11px] font-mono text-muted-foreground uppercase tracking-wider">Projects</p>
            <p className="text-[32px] font-mono font-semibold text-foreground mt-1">{n1}+</p>
          </div>
          <div ref={c2} className="px-6 lg:px-10 py-8 border-r border-border">
            <p className="text-[11px] font-mono text-muted-foreground uppercase tracking-wider">Team</p>
            <p className="text-[32px] font-mono font-semibold text-foreground mt-1">{n2}</p>
          </div>
          <div className="px-6 lg:px-10 py-8 border-r border-border">
            <p className="text-[11px] font-mono text-muted-foreground uppercase tracking-wider">Founded</p>
            <p className="text-[32px] font-mono font-semibold text-foreground mt-1">2026</p>
          </div>
          <div className="px-6 lg:px-10 py-8">
            <p className="text-[11px] font-mono text-muted-foreground uppercase tracking-wider">Based in</p>
            <p className="text-[32px] font-semibold text-foreground mt-1">Dhaka</p>
          </div>
        </div>
      </section>

      {/* Principles + values */}
      <section className="border-b border-border">
        <div className="max-w-[1240px] mx-auto grid grid-cols-1 md:grid-cols-2">
          <div className="px-6 lg:px-10 py-16 md:py-20 border-r border-border">
            <h2 className="font-serif text-[28px] text-foreground">
              Our principles<br/>guide how we do things
            </h2>
            <Link to="/work" className="text-[12px] font-semibold uppercase tracking-wider bg-foreground text-primary-foreground px-5 py-2 rounded-full hover:bg-foreground/90 transition-colors inline-flex mt-6">
              See our process →
            </Link>
          </div>
          <div className="px-6 lg:px-10 py-16 md:py-20">
            <div ref={valRef}>
              {values.map((v, i) => (
                <div key={i} className={`py-4 border-t border-border first:border-t-0 transition-all duration-400 ${valVis[i] ? "opacity-100 translate-y-0" : "opacity-0 translate-y-3"}`}>
                  <h3 className="text-[15px] font-semibold text-foreground mb-1">{v.title}</h3>
                  <p className="text-[13px] text-muted-foreground leading-relaxed">{v.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Team — bordered columns */}
      <section className="border-b border-border">
        <div className="max-w-[1240px] mx-auto">
          <div className="px-6 lg:px-10 py-12">
            <h2 className="font-serif text-[28px] md:text-[36px] text-foreground">
              Meet the team <span className="italic">building</span><br/>the future of product
            </h2>
          </div>
          <div ref={teamRef} className="grid grid-cols-2 md:grid-cols-5 border-t border-border">
            {team.map((m, i) => (
              <div key={m.name} className={`border-r border-border last:border-r-0 [&:nth-child(2n)]:border-r-0 md:[&:nth-child(2n)]:border-r px-4 lg:px-5 py-6 transition-all duration-500 ${teamVis[i] ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}>
                <p className="font-serif text-[18px] text-foreground italic mb-2">
                  {m.name.split(' ')[0]}<br/><span className="text-foreground/60">{m.name.split(' ')[1] || ''}</span>
                </p>
                <div className="aspect-[3/4] bg-muted overflow-hidden mb-3">
                  <img src={processImg} alt={m.name} className="w-full h-full object-cover grayscale" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Apply CTA — bordered split */}
      <section className="border-b border-border">
        <div className="max-w-[1240px] mx-auto grid grid-cols-1 md:grid-cols-2">
          <div className="px-6 lg:px-10 py-16 md:py-20 border-r border-border">
            <p className="text-[11px] font-mono text-muted-foreground uppercase tracking-wider mb-3">Apply to join our team</p>
            <p className="text-[14px] text-muted-foreground max-w-[360px] leading-relaxed mb-6">
              We're always looking for talented people who care about craft.
            </p>
            <Link to="/careers" className="text-[12px] font-semibold uppercase tracking-wider bg-foreground text-primary-foreground px-6 py-2.5 rounded-full hover:bg-foreground/90 transition-colors inline-flex">
              View careers →
            </Link>
          </div>
          <div>
            <img src={processImg} alt="Join us" className="w-full h-full object-cover aspect-[16/10]" />
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;
