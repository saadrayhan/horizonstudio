import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const Contact = () => (
  <div className="min-h-screen bg-background">
    <Navbar />

    <section className="pt-32 pb-20 px-6 lg:px-12 max-w-[1200px] mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
        {/* Left */}
        <div>
          <p className="text-[11px] font-mono text-muted-foreground uppercase tracking-wider mb-4">Contact</p>
          <h1 className="text-4xl md:text-5xl font-semibold tracking-tight animate-blur-in">
            Have something worth building?
          </h1>
          <p className="text-muted-foreground mt-6 max-w-[400px] leading-relaxed animate-blur-in" style={{ animationDelay: "150ms" }}>
            Tell us about your project. We'll tell you honestly if we're the right team for it.
          </p>

          <div className="mt-12 space-y-6">
            {[
              { label: "Email", value: "hello@studio.dev" },
              { label: "Based in", value: "Dhaka, Bangladesh" },
              { label: "Available for", value: "Projects worldwide" },
            ].map((item) => (
              <div key={item.label} className="border-t border-border pt-4">
                <p className="text-[11px] font-mono text-muted-foreground uppercase tracking-wider mb-1">{item.label}</p>
                <p className="text-[15px] font-medium">{item.value}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Right — form */}
        <div className="animate-blur-in" style={{ animationDelay: "250ms" }}>
          <form className="space-y-6">
            {[
              { label: "Name", type: "text", placeholder: "Your name" },
              { label: "Email", type: "email", placeholder: "you@company.com" },
              { label: "Company", type: "text", placeholder: "Your company (optional)" },
            ].map((f) => (
              <div key={f.label}>
                <label className="text-[13px] font-medium block mb-2">{f.label}</label>
                <input
                  type={f.type}
                  placeholder={f.placeholder}
                  className="w-full px-4 py-3 rounded-lg border border-border bg-background text-[14px] focus:outline-none focus:ring-2 focus:ring-foreground/20 transition-shadow"
                />
              </div>
            ))}
            <div>
              <label className="text-[13px] font-medium block mb-2">Tell us about your project</label>
              <textarea
                rows={5}
                placeholder="What are you building? What stage are you at?"
                className="w-full px-4 py-3 rounded-lg border border-border bg-background text-[14px] resize-none focus:outline-none focus:ring-2 focus:ring-foreground/20 transition-shadow"
              />
            </div>
            <button
              type="submit"
              className="w-full text-[14px] font-medium bg-foreground text-background py-3.5 rounded-lg hover:opacity-90 transition-opacity"
            >
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
