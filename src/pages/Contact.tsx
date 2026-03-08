import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const Contact = () => (
  <div className="min-h-screen bg-background">
    <Navbar />

    <section className="pt-32 pb-20 px-6 lg:px-12 max-w-[1300px] mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
        <div>
          <p className="text-[11px] font-mono text-muted-foreground uppercase tracking-wider mb-3">Contact</p>
          <h1 className="font-serif text-4xl md:text-5xl text-foreground leading-[1.1] animate-blur-in">
            Let's build something great.
          </h1>
          <p className="text-[15px] text-muted-foreground mt-6 max-w-[400px] leading-relaxed animate-blur-in" style={{ animationDelay: "150ms" }}>
            Tell us about your project. We'll tell you honestly if we're the right team.
          </p>

          <div className="mt-12 space-y-5">
            {[
              { label: "Email", value: "hello@studio.dev" },
              { label: "Based in", value: "Dhaka, Bangladesh" },
              { label: "Available for", value: "Projects worldwide" },
            ].map((item) => (
              <div key={item.label} className="border-t border-border pt-4">
                <p className="text-[11px] font-mono text-muted-foreground uppercase tracking-wider mb-1">{item.label}</p>
                <p className="text-[15px] font-medium text-foreground">{item.value}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="animate-blur-in" style={{ animationDelay: "250ms" }}>
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
                  className="w-full px-4 py-3.5 rounded-xl border border-border bg-background text-[14px] text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-foreground/10 transition-shadow"
                />
              </div>
            ))}
            <div>
              <label className="text-[13px] font-medium block mb-2 text-foreground">Tell us about your project</label>
              <textarea
                rows={5}
                placeholder="What are you building? What stage are you at?"
                className="w-full px-4 py-3.5 rounded-xl border border-border bg-background text-[14px] text-foreground placeholder:text-muted-foreground resize-none focus:outline-none focus:ring-2 focus:ring-foreground/10 transition-shadow"
              />
            </div>
            <button type="submit" className="w-full text-[13px] font-medium bg-foreground text-primary-foreground py-3.5 rounded-xl hover:bg-foreground/90 transition-colors">
              Send message →
            </button>
          </form>
        </div>
      </div>
    </section>

    <Footer />
  </div>
);

export default Contact;
