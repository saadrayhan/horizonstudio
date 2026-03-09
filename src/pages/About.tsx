import { Link } from "react-router-dom";
import { Reveal, StaggerContainer, StaggerItem, HoverLift, MagneticButton, motion } from "@/components/motion";
import { useCountUp } from "@/hooks/useReveal";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import teamGroup1 from "@/assets/team-group-1.jpg";
import teamGroup2 from "@/assets/team-group-2.jpg";
import teamGroup3 from "@/assets/team-group-3.jpg";
import illustrationAbout from "@/assets/illustration-about.png";
import teamSaad from "@/assets/team-saad.jpg";
import teamJoy from "@/assets/team-joy.jpg";
import teamTamim from "@/assets/team-tamim.jpg";
import teamRintu from "@/assets/team-rintu.jpg";
import teamMahfuz from "@/assets/team-mahfuz.jpg";

const team = [
{ name: "Saad Rayhan", role: "Creative Director & CEO", photo: "/lovable-uploads/289bf625-7941-4b25-8937-04af6bf1ee66.webp" },
{ name: "Joy Sorkar", role: "CTO & Backend Developer", photo: "/lovable-uploads/1185ed1f-40ce-49db-8622-fa8f37d05037.jpg" },
{ name: "Maqibul Hossain Tamim", role: "Product Designer & Sales Manager", photo: "/lovable-uploads/cd48d7fc-3eeb-46f1-b9ad-6e5dff31b558.jpg" },
{ name: "Ishrat Jahan Rintu", role: "Full Stack Developer & Business Development", photo: "/lovable-uploads/dd33dfa7-3a84-4fb1-8ca7-9133cba5afcb.jpg" },
{ name: "Rakibul Islam", role: "Full-Stack Developer & Sales Representative", photo: teamMahfuz }];


const principles = [
{ icon: "✓", text: "We hold ourselves to the highest standard — and give our team the latitude to make decisions." },
{ icon: "✓", text: "We move quickly, but never at the expense of quality." },
{ icon: "✓", text: "We say no to projects that don't align with our values." }];


const values = [
{ title: "Design before code", desc: "We design the complete experience before development begins." },
{ title: "Understand before execute", desc: "We spend real time understanding your problem before proposing solutions." },
{ title: "Communicate like partners", desc: "Full visibility, always. No black boxes." },
{ title: "Say no when we should", desc: "We protect quality by being selective." }];


const About = () => {
  const { ref: c1, count: n1 } = useCountUp(12, 1400);
  const { ref: c2, count: n2 } = useCountUp(5, 1200);

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero */}
      <section className="pt-[72px] border-b border-border">
        <div className="mx-auto grid grid-cols-1 md:grid-cols-[1.2fr_1fr]">
          <div className="px-[50px] py-20 md:py-28 flex flex-col justify-end">
            <motion.h1
              className="font-serif text-[42px] md:text-[52px] text-foreground leading-[1.06]"
              initial={{ opacity: 0, y: 20, filter: "blur(8px)" }}
              animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              transition={{ type: "spring", stiffness: 100, damping: 20, delay: 0.1 }}>
              
              Horizon Studio is a design-first <span className="italic">product studio</span>
            </motion.h1>
            <motion.p
              className="text-[14px] text-muted-foreground mt-5 max-w-[420px] leading-relaxed"
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ type: "spring", stiffness: 100, damping: 20, delay: 0.25 }}>
              
              We build products for startups and growing companies — with craft, conviction, and transparency.
            </motion.p>
            <motion.div
              className="mt-6"
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ type: "spring", stiffness: 100, damping: 20, delay: 0.35 }}>
              
              <MagneticButton className="inline-flex">
                <Link to="/work" className="text-[12px] font-semibold uppercase tracking-wider bg-foreground text-primary-foreground px-6 py-2.5 rounded-full hover:bg-foreground/90 transition-colors inline-flex">
                  See our work →
                </Link>
              </MagneticButton>
            </motion.div>
          </div>
          <motion.div
            className="border-l border-border hidden md:flex items-end justify-center px-[50px] pb-0"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ type: "spring", stiffness: 80, damping: 20, delay: 0.3 }}>
            
            <img src={illustrationAbout} alt="Architecture" className="w-full max-w-[300px] h-auto object-contain" />
          </motion.div>
        </div>
      </section>

      {/* Two-col value statement */}
      <section className="border-b border-border">
        <div className="mx-auto grid grid-cols-1 md:grid-cols-2">
          <Reveal className="px-[50px] py-16 border-r border-border">
            <h2 className="font-serif text-[28px] text-foreground leading-[1.15]">
              Here to deliver the <span className="italic">value</span> expected on day one.
            </h2>
          </Reveal>
          <Reveal className="px-[50px] py-16" delay={0.1}>
            <h2 className="font-serif text-[28px] text-foreground leading-[1.15]">
              At the highest <span className="italic">quality</span> possible.
            </h2>
          </Reveal>
        </div>
      </section>

      {/* Bento — photo + text */}
      <section className="border-b border-border">
        <div className="mx-auto grid grid-cols-1 md:grid-cols-2">
          <Reveal className="bg-secondary/40 px-[50px] py-12 border-r border-border">
            <p className="text-[11px] font-mono text-muted-foreground uppercase tracking-wider mb-3">The future of product</p>
            <p className="text-[14px] text-foreground/80 leading-relaxed max-w-[380px] mb-6">
              We believe the best products come from small, focused teams with strong opinions and full ownership.
            </p>
            <Link to="/work" className="text-[12px] font-semibold uppercase tracking-wider text-foreground hover:text-muted-foreground transition-colors">
              See projects →
            </Link>
          </Reveal>
          <motion.div
            initial={{ opacity: 0, scale: 1.03 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ type: "spring", stiffness: 80, damping: 20 }}>
            
            <img src={teamGroup3} alt="Team working" className="w-full h-full object-cover aspect-[4/3]" />
          </motion.div>
        </div>
      </section>

      {/* DNA + principles */}
      <section className="border-b border-border">
        <div className="mx-auto grid grid-cols-1 md:grid-cols-2">
          <Reveal className="px-[50px] py-16 md:py-20 border-r border-border">
            <h2 className="font-serif text-[28px] md:text-[36px] text-foreground leading-[1.1]">
              Our DNA is defined by holding an uncompromisingly high bar for who we hire, and giving them wide latitude to make <span className="italic">decisions.</span>
            </h2>
          </Reveal>
          <div className="px-[50px] py-16 md:py-20 flex flex-col justify-center">
            <StaggerContainer>
              {principles.map((p, i) =>
              <StaggerItem key={i}>
                  <div className="flex items-start gap-3 py-3 border-t border-border first:border-t-0">
                    <span className="w-5 h-5 rounded-full bg-foreground text-primary-foreground flex items-center justify-center text-[10px] font-bold shrink-0 mt-0.5">{p.icon}</span>
                    <p className="text-[13px] text-foreground/70 leading-relaxed">{p.text}</p>
                  </div>
                </StaggerItem>
              )}
            </StaggerContainer>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="border-b border-border">
        <div className="mx-auto grid grid-cols-2 md:grid-cols-4">
          <div ref={c1} className="px-[50px] py-8 border-r border-border">
            <p className="text-[11px] font-mono text-muted-foreground uppercase tracking-wider">Projects</p>
            <p className="text-[32px] font-mono font-semibold text-foreground mt-1">{n1}+</p>
          </div>
          <div ref={c2} className="px-[50px] py-8 border-r border-border">
            <p className="text-[11px] font-mono text-muted-foreground uppercase tracking-wider">Team</p>
            <p className="text-[32px] font-mono font-semibold text-foreground mt-1">{n2}</p>
          </div>
          <Reveal className="px-[50px] py-8 border-r border-border">
            <p className="text-[11px] font-mono text-muted-foreground uppercase tracking-wider">Founded</p>
            <p className="text-[32px] font-mono font-semibold text-foreground mt-1">2026</p>
          </Reveal>
          <Reveal className="px-[50px] py-8" delay={0.1}>
            <p className="text-[11px] font-mono text-muted-foreground uppercase tracking-wider">Based in</p>
            <p className="text-[32px] font-semibold text-foreground mt-1">Dhaka</p>
          </Reveal>
        </div>
      </section>

      {/* Principles + values */}
      <section className="border-b border-border">
        <div className="mx-auto grid grid-cols-1 md:grid-cols-2">
          <Reveal className="px-[50px] py-16 md:py-20 border-r border-border">
            <h2 className="font-serif text-[28px] text-foreground">
              Our principles<br />guide how we do things
            </h2>
            <MagneticButton className="inline-flex mt-6">
              <Link to="/work" className="text-[12px] font-semibold uppercase tracking-wider bg-foreground text-primary-foreground px-5 py-2 rounded-full hover:bg-foreground/90 transition-colors inline-flex">
                See our process →
              </Link>
            </MagneticButton>
          </Reveal>
          <div className="px-[50px] py-16 md:py-20">
            <StaggerContainer>
              {values.map((v, i) =>
              <StaggerItem key={i}>
                  <div className="py-4 border-t border-border first:border-t-0">
                    <h3 className="text-[15px] font-semibold text-foreground mb-1">{v.title}</h3>
                    <p className="text-[13px] text-muted-foreground leading-relaxed">{v.desc}</p>
                  </div>
                </StaggerItem>
              )}
            </StaggerContainer>
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="border-b border-border">
        <div className="mx-auto">
          <Reveal className="px-[50px] py-12">
            <h2 className="font-serif text-[28px] md:text-[36px] text-foreground">
              Meet the team <span className="italic">building</span><br />the future of product
            </h2>
          </Reveal>
          <StaggerContainer className="grid grid-cols-2 md:grid-cols-5 border-t border-border">
            {team.map((m) =>
            <StaggerItem key={m.name} className="border-r border-border last:border-r-0 [&:nth-child(2n)]:border-r-0 md:[&:nth-child(2n)]:border-r">
                <HoverLift className="px-4 lg:px-5 py-6">
                  <p className="font-serif text-[18px] text-foreground italic mb-2">
                    {m.name.split(' ')[0]}<br /><span className="text-foreground/60">{m.name.split(' ').slice(1).join(' ')}</span>
                  </p>
                  <div className="aspect-[3/4] bg-muted overflow-hidden mb-3">
                    <motion.img
                    src={m.photo}
                    alt={m.name}
                    className="w-full h-full object-cover grayscale"
                    whileHover={{ scale: 1.04 }}
                    transition={{ type: "spring", stiffness: 200, damping: 20 }} />
                  
                  </div>
                </HoverLift>
              </StaggerItem>
            )}
          </StaggerContainer>
        </div>
      </section>

      {/* Apply CTA */}
      <section className="border-b border-border">
        <div className="mx-auto grid grid-cols-1 md:grid-cols-2">
          <Reveal className="px-[50px] py-16 md:py-20 border-r border-border">
            <p className="text-[11px] font-mono text-muted-foreground uppercase tracking-wider mb-3">Apply to join our team</p>
            <p className="text-[14px] text-muted-foreground max-w-[360px] leading-relaxed mb-6">
              We're always looking for talented people who care about craft.
            </p>
            <MagneticButton className="inline-flex">
              <Link to="/careers" className="text-[12px] font-semibold uppercase tracking-wider bg-foreground text-primary-foreground px-6 py-2.5 rounded-full hover:bg-foreground/90 transition-colors inline-flex">
                View careers →
              </Link>
            </MagneticButton>
          </Reveal>
          <motion.div
            initial={{ opacity: 0, scale: 1.03 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ type: "spring", stiffness: 80, damping: 20 }}>
            
            <img alt="Join us" className="w-full h-full object-cover aspect-[16/10]" src="/lovable-uploads/2e0aab3c-4d3a-4bdb-ab4a-bdd97935eba4.jpg" />
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>);

};

export default About;