import { Link } from "react-router-dom";
import { Reveal, MagneticButton, motion } from "@/components/motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const Contact = () => (
  <div className="min-h-screen bg-background">
    <Navbar />

    <section className="pt-[72px] border-b border-border">
      <div className="max-w-[1240px] mx-auto grid grid-cols-1 md:grid-cols-2">
        {/* Left — info */}
        <div className="px-6 lg:px-10 py-20 md:py-28 border-r border-border">
          <motion.h1
            className="font-serif text-[40px] md:text-[48px] text-foreground leading-[1.08]"
            initial={{ opacity: 0, y: 20, filter: "blur(8px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{ type: "spring", stiffness: 100, damping: 20, delay: 0.1 }}
          >
            Let's build something <span className="italic">great.</span>
          </motion.h1>
          <motion.p
            className="text-[14px] text-muted-foreground mt-5 max-w-[360px] leading-relaxed"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ type: "spring", stiffness: 100, damping: 20, delay: 0.25 }}
          >
            Tell us about your project. We'll tell you honestly if we're the right team.
          </motion.p>

          <motion.div
            className="mt-12"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ type: "spring", stiffness: 100, damping: 20, delay: 0.35 }}
          >
            {[
              { label: "Email", value: "hello@horizonstudio.dev" },
              { label: "Based in", value: "Dhaka, Bangladesh" },
              { label: "Available for", value: "Projects worldwide" },
            ].map((item) => (
              <div key={item.label} className="py-4 border-t border-border">
                <p className="text-[11px] font-mono text-muted-foreground uppercase tracking-wider mb-1">{item.label}</p>
                <p className="text-[15px] font-medium text-foreground">{item.value}</p>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Right — form */}
        <motion.div
          className="px-6 lg:px-10 py-20 md:py-28"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ type: "spring", stiffness: 100, damping: 20, delay: 0.2 }}
        >
          <form className="space-y-5">
            {[
              { label: "Name", type: "text", placeholder: "Your name" },
              { label: "Email", type: "email", placeholder: "you@company.com" },
              { label: "Company", type: "text", placeholder: "Your company (optional)" },
            ].map((f) => (
              <div key={f.label}>
                <label className="text-[13px] font-medium block mb-2 text-foreground">{f.label}</label>
                <input
                  type={f.type}
                  placeholder={f.placeholder}
                  className="w-full px-4 py-3 border border-border bg-background text-[14px] text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:ring-2 focus:ring-foreground/10 transition-shadow"
                />
              </div>
            ))}
            <div>
              <label className="text-[13px] font-medium block mb-2 text-foreground">Tell us about your project</label>
              <textarea
                rows={5}
                placeholder="What are you building? What stage are you at?"
                className="w-full px-4 py-3 border border-border bg-background text-[14px] text-foreground placeholder:text-muted-foreground/50 resize-none focus:outline-none focus:ring-2 focus:ring-foreground/10 transition-shadow"
              />
            </div>
            <MagneticButton className="w-full md:w-auto">
              <button type="submit" className="text-[12px] font-semibold uppercase tracking-wider bg-foreground text-primary-foreground px-6 py-3 rounded-full hover:bg-foreground/90 transition-colors w-full md:w-auto">
                Send message →
              </button>
            </MagneticButton>
          </form>
        </motion.div>
      </div>
    </section>

    <Footer />
  </div>
);

export default Contact;
