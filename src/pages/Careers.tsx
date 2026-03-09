import { Link } from "react-router-dom";
import { Reveal, StaggerContainer, StaggerItem, motion } from "@/components/motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import processImg from "@/assets/process-image.jpg";
import illustrationCareers from "@/assets/illustration-careers.png";
import teamSaad from "@/assets/team-saad.jpg";
import teamJoy from "@/assets/team-joy.jpg";
import teamRintu from "@/assets/team-rintu.jpg";

const cultureBlocks = [
  { text: "Our ambitions are to be category defining. This means pursuing an experience that's nothing short of extraordinary." },
  { text: "We have a vibrant, in-office culture based out of our studio in Dhaka." },
  { text: "Our team has deep experience from best-of-breed tech companies and design agencies." },
];

const departments: { name: string; jobs: { slug: string; title: string; location: string; type: string }[] }[] = [
  {
    name: "Design",
    jobs: [
      { slug: "senior-product-designer", title: "Senior Product Designer", location: "Remote / Dhaka", type: "Full-time" },
      { slug: "design-intern", title: "Design Intern", location: "Dhaka", type: "Internship" },
    ],
  },
  {
    name: "Engineering",
    jobs: [
      { slug: "frontend-engineer", title: "Frontend Engineer", location: "Remote", type: "Full-time" },
      { slug: "fullstack-developer", title: "Full-Stack Developer", location: "Remote / Dhaka", type: "Full-time" },
    ],
  },
];

const Careers = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero */}
      <section className="pt-[72px] border-b border-border">
        <div className="mx-auto grid grid-cols-1 md:grid-cols-[1.3fr_1fr]">
          <div className="px-[50px] py-20 md:py-28">
            <motion.h1
              className="font-serif text-[42px] md:text-[52px] text-foreground leading-[1.06]"
              initial={{ opacity: 0, y: 20, filter: "blur(8px)" }}
              animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              transition={{ type: "spring", stiffness: 100, damping: 20, delay: 0.1 }}
            >
              Careers <span className="italic">at Horizon Studio</span>
            </motion.h1>
            <motion.p
              className="text-[14px] text-muted-foreground mt-4 max-w-[460px] leading-relaxed"
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ type: "spring", stiffness: 100, damping: 20, delay: 0.25 }}
            >
              We're looking for talented people who hold themselves to the highest standard. No bureaucracy — just meaningful work.
            </motion.p>
          </div>
          <motion.div
            className="border-l border-border hidden md:flex items-end justify-center px-[50px] pb-0"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ type: "spring", stiffness: 80, damping: 20, delay: 0.3 }}
          >
            <img src={illustrationCareers} alt="Eagle illustration" className="w-full max-w-[220px] h-auto object-contain" />
          </motion.div>
        </div>
      </section>

      {/* Culture DNA */}
      <section className="border-b border-border">
        <Reveal className="mx-auto px-[50px] py-16 md:py-20">
          <h2 className="font-serif text-[28px] md:text-[36px] text-foreground leading-[1.1] max-w-[500px]">
            Our DNA is defined by holding an uncompromisingly high bar for who we hire, and giving them wide latitude to make <span className="italic">decisions.</span>
          </h2>
        </Reveal>
      </section>

      {/* Photo bento */}
      <section className="border-b border-border">
        <StaggerContainer className="mx-auto grid grid-cols-1 md:grid-cols-3">
          {cultureBlocks.map((b, i) => {
            const culturePhotos = [teamSaad, teamJoy, teamRintu];
            return (
            <StaggerItem key={i} className="border-r border-border last:border-r-0 border-b md:border-b-0 last:border-b-0">
              <div className="aspect-[4/3] bg-muted overflow-hidden">
                <motion.img
                  src={culturePhotos[i]}
                  alt="Team culture"
                  className="w-full h-full object-cover"
                  whileHover={{ scale: 1.03 }}
                  transition={{ type: "spring", stiffness: 200, damping: 20 }}
                />
              </div>
              <div className="px-[50px] py-6">
                <p className="text-[13px] text-foreground/70 leading-relaxed">{b.text}</p>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </section>

      {/* Job listings */}
      <section className="border-b border-border">
        <div className="mx-auto px-[50px] py-16 md:py-20">
          <Reveal><h2 className="font-serif text-[28px] text-foreground mb-8">Apply to join our team</h2></Reveal>

          <StaggerContainer>
            {departments.map((dept) => (
              <StaggerItem key={dept.name}>
                <div className="mb-6">
                  <p className="text-[13px] font-semibold text-foreground mb-1">{dept.name}</p>
                  {dept.jobs.map((j) => (
                    <Link
                      to={`/careers/${j.slug}`}
                      key={j.slug}
                      className="list-row group flex items-center justify-between py-4 border-t border-border"
                    >
                      <div className="flex items-center gap-4">
                        <span className="text-[14px] text-foreground group-hover:text-muted-foreground transition-colors">{j.title}</span>
                        {j.type !== "Full-time" && (
                          <span className="text-[10px] font-mono text-muted-foreground px-2 py-0.5 border border-border">{j.type}</span>
                        )}
                      </div>
                      <div className="flex items-center gap-3">
                        <span className="text-[12px] text-muted-foreground hidden sm:block">{j.location}</span>
                        <span className="text-foreground/40 group-hover:text-foreground group-hover:translate-x-1 transition-all">→</span>
                      </div>
                    </Link>
                  ))}
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Quote band */}
      <section className="border-b border-border">
        <div className="mx-auto">
          <Reveal className="px-[50px] py-10">
            <h2 className="font-serif text-[28px] text-foreground">What we're looking for</h2>
          </Reveal>
          <div className="border-t border-border bg-foreground">
            <motion.div
              className="mx-auto px-[50px] py-16 md:py-20 flex items-center justify-center"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <p className="text-[18px] md:text-[24px] font-serif text-primary-foreground italic text-center max-w-[500px]">
                "What ultimately matters is someone who values creating value for people."
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Careers;