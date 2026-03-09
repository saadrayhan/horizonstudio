import { Link } from "react-router-dom";
import { Reveal, StaggerContainer, StaggerItem, HoverLift, MagneticButton, motion, useInView } from "@/components/motion";
import { useCountUp } from "@/hooks/useReveal";
import { useEffect, useState, useRef } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import heroIllustration from "@/assets/illustration-hero.png";
import processImg from "@/assets/process-image.jpg";
import caseStudyImg from "@/assets/case-study-1.jpg";

const decisions = [
  { title: "You're building your first product →", desc: "First-time founders need a partner who can translate vision into a shippable product — without burning through runway." },
  { title: "Your product needs a redesign →", desc: "Existing products that have outgrown their original design need a strategic rethink, not just a reskin." },
  { title: "You need to ship faster →", desc: "Scaling teams need design and engineering support that integrates seamlessly with their existing workflows." },
];

const howSteps = [
  { num: "1", title: "See what's at stake", desc: "We map your product landscape, users, and constraints before proposing anything." },
  { num: "2", title: "Work from first principles", desc: "We prototype and test ideas with real users before committing to code." },
  { num: "3", title: "Move with conviction", desc: "We ship production-grade code incrementally — with full visibility every week." },
];

const projects = [
  { slug: "branch-management", name: "Branch Management System", category: "Product Design", year: "2025" },
  { slug: "evwork", name: "EVwork Platform", category: "UI/UX Design", year: "2025" },
  { slug: "ecommerce-app", name: "E-Commerce Mobile App", category: "Design + Dev", year: "2024" },
];

const team = [
  { name: "Saad R.", role: "Creative Director & CEO" },
  { name: "Joy S.", role: "CTO & Backend Developer" },
  { name: "Maqibul T.", role: "Product Designer & Sales" },
];

const Index = () => {
  const [loaded, setLoaded] = useState(false);
  const { ref: c1Ref, count: c1 } = useCountUp(12, 1400);
  const { ref: c2Ref, count: c2 } = useCountUp(5, 1200);
  const caseRef = useRef<HTMLDivElement>(null);
  const caseInView = useInView(caseRef, { once: true, amount: 0.1 });

  useEffect(() => { setTimeout(() => setLoaded(true), 60); }, []);

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* ===== HERO ===== */}
      <section className="pt-[72px] border-b border-border">
        <div className="mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-[1fr_1fr] min-h-[calc(100vh-72px)]">
            <div className="flex flex-col justify-end px-[50px] py-16 md:py-20">
              <motion.h1
                className="font-serif text-[42px] md:text-[52px] lg:text-[60px] text-foreground leading-[1.06]"
                initial={{ opacity: 0, y: 20, filter: "blur(8px)" }}
                animate={loaded ? { opacity: 1, y: 0, filter: "blur(0px)" } : {}}
                transition={{ type: "spring", stiffness: 100, damping: 20, delay: 0.1 }}
              >
                The product studio for
                high-stakes <span className="italic">decisions</span>
              </motion.h1>
              <motion.p
                className="text-[15px] text-muted-foreground mt-6 max-w-[400px] leading-relaxed"
                initial={{ opacity: 0, y: 16 }}
                animate={loaded ? { opacity: 1, y: 0 } : {}}
                transition={{ type: "spring", stiffness: 100, damping: 20, delay: 0.25 }}
              >
                We help founders navigate product strategy, design, and engineering — with a dedicated team and a proven process.
              </motion.p>
              <motion.div
                className="flex items-center gap-4 mt-8"
                initial={{ opacity: 0, y: 12 }}
                animate={loaded ? { opacity: 1, y: 0 } : {}}
                transition={{ type: "spring", stiffness: 100, damping: 20, delay: 0.4 }}
              >
                <MagneticButton>
                  <Link
                    to="/contact"
                    className="text-[12px] font-semibold uppercase tracking-wider bg-foreground text-primary-foreground px-6 py-3 rounded-full hover:bg-foreground/90 transition-colors inline-flex"
                  >
                    Get started →
                  </Link>
                </MagneticButton>
                <Link to="/work" className="text-[12px] font-semibold uppercase tracking-wider text-muted-foreground hover:text-foreground transition-colors flex items-center gap-1.5">
                  See why
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <circle cx="12" cy="12" r="10" />
                    <polygon points="10,8 16,12 10,16" fill="currentColor" stroke="none" />
                  </svg>
                </Link>
              </motion.div>
            </div>

            <motion.div
              className="hidden md:flex items-end justify-center border-l border-border px-[50px] pb-0"
              initial={{ opacity: 0, scale: 0.96 }}
              animate={loaded ? { opacity: 1, scale: 1 } : {}}
              transition={{ type: "spring", stiffness: 80, damping: 20, delay: 0.3 }}
            >
              <img src={heroIllustration} alt="City skyline illustration" className="w-full max-w-[480px] h-auto object-contain" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats strip */}
      <section className="border-b border-border">
        <div className="mx-auto grid grid-cols-2 md:grid-cols-4">
          <Reveal className="px-[50px] py-6 border-r border-border" delay={0}>
            <p className="text-[11px] font-mono text-muted-foreground uppercase tracking-wider">Avg. Delivery</p>
            <p className="text-[28px] font-serif text-foreground mt-1">8 weeks</p>
          </Reveal>
          <div ref={c1Ref} className="px-[50px] py-6 border-r border-border">
            <p className="text-[11px] font-mono text-muted-foreground uppercase tracking-wider">Projects</p>
            <p className="text-[28px] font-mono font-semibold text-foreground mt-1">{c1}+</p>
          </div>
          <div ref={c2Ref} className="px-[50px] py-6 border-r border-border">
            <p className="text-[11px] font-mono text-muted-foreground uppercase tracking-wider">Team</p>
            <p className="text-[28px] font-mono font-semibold text-foreground mt-1">{c2}</p>
          </div>
          <Reveal className="px-[50px] py-6" delay={0.15}>
            <p className="text-[11px] font-mono text-muted-foreground uppercase tracking-wider">Fee</p>
            <p className="text-[28px] font-mono font-semibold text-foreground mt-1">$0</p>
          </Reveal>
        </div>
      </section>

      {/* ===== MATTERS MOST ===== */}
      <section className="border-b border-border">
        <div className="mx-auto">
          <Reveal className="px-[50px] py-12">
            <h2 className="font-serif text-[32px] md:text-[40px] text-foreground leading-[1.1]">
              Horizon Studio matters most for <span className="italic">high-stakes decisions</span>
            </h2>
          </Reveal>
          <StaggerContainer className="grid grid-cols-1 md:grid-cols-3 border-t border-border">
            {decisions.map((d, i) => (
              <StaggerItem key={i}>
                <HoverLift className="px-[50px] py-8 border-b md:border-b-0 md:border-r border-border last:border-r-0 last:border-b-0 h-full">
                  <h3 className="text-[16px] font-semibold text-foreground mb-3 leading-snug">{d.title}</h3>
                  <p className="text-[13px] text-muted-foreground leading-relaxed">{d.desc}</p>
                </HoverLift>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* ===== HOW WE ADD VALUE ===== */}
      <section className="border-b border-border">
        <div className="mx-auto px-[50px] py-16 md:py-20">
          <Reveal>
            <h2 className="font-serif text-[32px] md:text-[40px] text-foreground leading-[1.1] mb-4">
              How we add value
            </h2>
          </Reveal>
          <StaggerContainer className="mt-10">
            {howSteps.map((step, i) => (
              <StaggerItem key={i}>
                <div className="grid grid-cols-[32px_1fr] md:grid-cols-[48px_200px_1fr] gap-4 md:gap-6 py-6 border-t border-border">
                  <span className="text-[14px] font-mono text-muted-foreground self-start mt-0.5">{step.num}</span>
                  <h3 className="text-[16px] font-semibold text-foreground">{step.title}</h3>
                  <p className="text-[13px] text-muted-foreground leading-relaxed col-start-2 md:col-start-3">{step.desc}</p>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
          <Reveal className="mt-6 pt-6 border-t border-border" delay={0.2}>
            <MagneticButton className="inline-flex">
              <Link
                to="/about"
                className="text-[12px] font-semibold uppercase tracking-wider bg-foreground text-primary-foreground px-6 py-2.5 rounded-full hover:bg-foreground/90 transition-colors inline-flex"
              >
                Learn more →
              </Link>
            </MagneticButton>
          </Reveal>
        </div>
      </section>

      {/* ===== BENTO ===== */}
      <section className="border-b border-border">
        <div className="mx-auto grid grid-cols-1 md:grid-cols-2">
          <Reveal className="px-[50px] py-16 md:py-20 flex flex-col justify-center border-r border-border">
            <h2 className="font-serif text-[28px] md:text-[36px] text-foreground leading-[1.12]">
              Let us <span className="italic">show you</span> our best work
            </h2>
            <p className="text-[14px] text-muted-foreground mt-4 max-w-[380px] leading-relaxed">
              Every project gets our full attention. We don't scale — we focus.
            </p>
          </Reveal>
          <motion.div
            initial={{ opacity: 0, scale: 1.03 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ type: "spring", stiffness: 80, damping: 20 }}
          >
            <img src={processImg} alt="Our process" className="w-full h-full object-cover aspect-[4/3]" />
          </motion.div>
        </div>
      </section>

      {/* ===== SELECTED WORK ===== */}
      <section className="border-b border-border">
        <div className="mx-auto px-[50px] py-16 md:py-20">
          <Reveal className="flex items-end justify-between mb-2">
            <h2 className="font-serif text-[28px] md:text-[36px] text-foreground">
              Selected <span className="italic">projects</span>
            </h2>
            <Link to="/work" className="text-[12px] font-mono text-muted-foreground hover:text-foreground transition-colors uppercase tracking-wider">
              View all →
            </Link>
          </Reveal>

          <StaggerContainer>
            {projects.map((p) => (
              <StaggerItem key={p.slug}>
                <Link
                  to={`/work/${p.slug}`}
                  className="list-row group flex items-center justify-between py-5 border-t border-border"
                >
                  <div className="flex items-center gap-6">
                    <span className="text-[12px] font-mono text-muted-foreground w-16">{p.year}</span>
                    <h3 className="text-[16px] font-semibold text-foreground group-hover:text-muted-foreground transition-colors">{p.name}</h3>
                  </div>
                  <div className="flex items-center gap-4">
                    <span className="text-[12px] text-muted-foreground hidden sm:block">{p.category}</span>
                    <motion.span
                      className="text-foreground"
                      whileHover={{ x: 4 }}
                      transition={{ type: "spring", stiffness: 300, damping: 20 }}
                    >→</motion.span>
                  </div>
                </Link>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* ===== TEAM ===== */}
      <section className="border-b border-border">
        <div className="mx-auto">
          <Reveal className="px-[50px] py-12">
            <h2 className="font-serif text-[28px] md:text-[36px] text-foreground">
              Meet the <span className="italic">advisors</span> you'll work with
            </h2>
          </Reveal>

          <StaggerContainer className="grid grid-cols-1 sm:grid-cols-3 border-t border-border">
            {team.map((m) => (
              <StaggerItem key={m.name} className="border-r border-border last:border-r-0 border-b sm:border-b-0 last:border-b-0">
                <HoverLift className="px-[50px] py-8">
                  <p className="font-serif text-[22px] text-foreground italic mb-3">
                    {m.name.split(' ')[0]}<br/>{m.name.split(' ')[1] || ''}
                  </p>
                  <div className="aspect-[3/4] bg-muted overflow-hidden mb-3">
                    <motion.img
                      src={processImg}
                      alt={m.name}
                      className="w-full h-full object-cover grayscale"
                      whileHover={{ scale: 1.04 }}
                      transition={{ type: "spring", stiffness: 200, damping: 20 }}
                    />
                  </div>
                </HoverLift>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* ===== CASE STUDY ===== */}
      <section className="border-b border-border">
        <div className="mx-auto">
          <motion.div
            ref={caseRef}
            className="grid grid-cols-1 md:grid-cols-2"
            initial={{ opacity: 0, y: 30 }}
            animate={caseInView ? { opacity: 1, y: 0 } : {}}
            transition={{ type: "spring", stiffness: 80, damping: 20 }}
          >
            <div className="px-[50px] py-16 md:py-20 flex flex-col justify-center border-r border-border">
              <p className="text-[11px] font-mono text-muted-foreground uppercase tracking-wider mb-4">Client Spotlight</p>
              <h2 className="font-serif text-[28px] md:text-[36px] text-foreground leading-[1.12]">
                How we redesigned a fashion brand's <span className="italic">mobile experience</span>
              </h2>
              <p className="text-[14px] text-muted-foreground mt-4 leading-relaxed max-w-[400px]">
                "They understood our product from day one. The team was responsive, opinionated in the best way, and delivered something we're genuinely proud of."
              </p>
              <div className="flex items-center gap-3 mt-6">
                <div className="w-10 h-10 rounded-full bg-muted" />
                <div>
                  <p className="text-[13px] font-semibold text-foreground">Sarah K.</p>
                  <p className="text-[12px] text-muted-foreground">Founder, Fashion Startup</p>
                </div>
              </div>

              <div className="grid grid-cols-2 mt-10 border-t border-border">
                <div className="py-4 pr-6 border-r border-border">
                  <p className="text-[11px] font-mono text-muted-foreground uppercase tracking-wider">Conversion</p>
                  <p className="text-[28px] font-mono font-semibold text-foreground mt-1">+40%</p>
                </div>
                <div className="py-4 pl-6">
                  <p className="text-[11px] font-mono text-muted-foreground uppercase tracking-wider">Timeline</p>
                  <p className="text-[28px] font-mono font-semibold text-foreground mt-1">8 wks</p>
                </div>
              </div>

              <MagneticButton className="inline-flex mt-6">
                <Link to="/work/ecommerce-app" className="text-[12px] font-semibold uppercase tracking-wider bg-foreground text-primary-foreground px-6 py-2.5 rounded-full hover:bg-foreground/90 transition-colors inline-flex">
                  Read case study →
                </Link>
              </MagneticButton>
            </div>

            <motion.div
              initial={{ opacity: 0, scale: 1.05 }}
              animate={caseInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ type: "spring", stiffness: 80, damping: 20, delay: 0.15 }}
            >
              <img src={caseStudyImg} alt="Case study" className="w-full h-full object-cover" />
            </motion.div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;