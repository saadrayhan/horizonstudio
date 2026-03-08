import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const Contact = () => (
  <div className="min-h-screen bg-background">
    <Navbar />

    <section className="pt-[72px] border-b border-border">
      <div className="max-w-[1240px] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2">
          {/* Left — info */}
          <div className="px-6 lg:px-10 py-20 md:py-28 md:border-r border-border">
            <h1 className="font-serif text-[40px] md:text-[48px] text-foreground leading-[1.08] animate-blur-in">
              Let's build something <span className="italic">great.</span>
            </h1>
            <p className="text-[14px] text-muted-foreground mt-5 max-w-[360px] leading-relaxed animate-blur-in" style={{ animationDelay: "150ms" }}>
              Tell us about your project. We'll tell you honestly if we're the right team.
            </p>

            <div className="mt-12">
              {[
                { label: "Email", value: "hello@studio.dev" },
                { label: "Based in", value: "Dhaka, Bangladesh" },
                { label: "Available for", value: "Projects worldwide" },
              ].map((item) => (
                <div key={item.label} className="py-4 border-t border-border">
                  <p className="text-[11px] font-mono text-muted-foreground uppercase tracking-wider mb-1">{item.label}</p>
                  <p className="text-[15px] font-medium text-foreground">{item.value}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Right — form */}
          <div className="px-6 lg:px-10 py-20 md:py-28 animate-blur-in" style={{ animationDelay: "200ms" }}>
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
              <button type="submit" className="text-[12px] font-semibold uppercase tracking-wider bg-foreground text-primary-foreground px-6 py-3 rounded-full hover:bg-foreground/90 transition-colors w-full md:w-auto">
                Send message →
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>

    <Footer />
  </div>
);

export default Contact;
