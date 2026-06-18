import React, { useEffect } from "react";
import { motion } from "framer-motion";
import { ArrowRight, CheckCircle2, ChevronRight, Mail } from "lucide-react";

const CalendlyEmbed = () => {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://assets.calendly.com/assets/external/widget.js";
    script.async = true;
    document.body.appendChild(script);

    return () => {
      if (document.body.contains(script)) {
        document.body.removeChild(script);
      }
    };
  }, []);

  return (
    <div
      className="calendly-inline-widget w-full rounded-lg overflow-hidden border border-border/50 bg-card"
      data-url="https://calendly.com/admin-lexoscale/30min?hide_event_type_details=1&hide_gdpr_banner=1&background_color=0a0a0a&text_color=ffffff&primary_color=7c3aed"
      style={{ minWidth: "320px", height: "700px" }}
    />
  );
};

const FadeIn = ({
  children,
  delay = 0,
  direction = "up",
}: {
  children: React.ReactNode;
  delay?: number;
  direction?: "up" | "left" | "right" | "none";
}) => {
  const directions = {
    up: { y: 40, x: 0 },
    left: { x: 40, y: 0 },
    right: { x: -40, y: 0 },
    none: { x: 0, y: 0 },
  };

  return (
    <motion.div
      initial={{ opacity: 0, ...directions[direction] }}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.7, delay, ease: [0.21, 0.47, 0.32, 0.98] }}
    >
      {children}
    </motion.div>
  );
};

function App() {
  return (
    <div className="min-h-[100dvh] bg-black text-white font-sans overflow-x-hidden selection:bg-primary/30 selection:text-white">
      {/* Sticky Nav */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-black/60 backdrop-blur-xl border-b border-white/5 transition-all duration-300">
        <div className="max-w-7xl mx-auto px-6 h-28 flex items-center justify-center relative">
          <a href="#" className="flex items-center justify-center group">
            <img
              src="/logo.png"
              alt="LexoScale Logo"
              className="h-24 w-auto group-hover:opacity-80 transition-opacity"
            />
          </a>
          <a
            href="#cta"
            className="absolute right-6 hidden sm:inline-flex h-10 items-center justify-center rounded-md bg-primary px-6 text-sm font-medium text-primary-foreground shadow-[0_0_15px_rgba(124,58,237,0.3)] hover:shadow-[0_0_25px_rgba(124,58,237,0.6)] transition-all duration-300"
          >
            Book A Free Strategy Call
          </a>
        </div>
      </header>

      <main>
        {/* Hero Section */}
        <section className="relative pt-40 pb-24 md:pt-52 md:pb-32 overflow-hidden">
          {/* Subtle animated purple glow */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-primary/20 blur-[120px] rounded-[100%] pointer-events-none opacity-50" />
          
          <div className="max-w-7xl mx-auto px-6 relative z-10 text-center flex flex-col items-center">
            <FadeIn>
              <div className="inline-flex items-center rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-medium text-white/80 backdrop-blur-sm mb-8">
                <span className="flex h-2 w-2 rounded-full bg-primary mr-2"></span>
                Exclusively for UK Law Firms
              </div>
            </FadeIn>
            
            <FadeIn delay={0.1}>
              <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight text-white mb-8 leading-[1.1]">
                Growing Law Firms.<br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-primary/80">
                  Delivering Results.
                </span>
              </h1>
            </FadeIn>
            
            <FadeIn delay={0.2}>
              <p className="mt-4 text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 leading-relaxed">
                We help UK law firms consistently generate high-quality client enquiries from Google using a fully managed acquisition system.
              </p>
            </FadeIn>
            
            <FadeIn delay={0.3}>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto">
                <a
                  href="https://calendly.com/admin-lexoscale/30min"
                  target="_blank"
                  rel="noreferrer"
                  className="w-full sm:w-auto inline-flex h-14 items-center justify-center rounded-md bg-primary px-8 text-base font-semibold text-primary-foreground shadow-[0_0_20px_rgba(124,58,237,0.4)] hover:shadow-[0_0_35px_rgba(124,58,237,0.7)] transition-all duration-300"
                >
                  Book A Free Strategy Call
                  <ArrowRight className="ml-2 h-5 w-5" />
                </a>
                <a
                  href="#how-it-works"
                  className="w-full sm:w-auto inline-flex h-14 items-center justify-center rounded-md border border-white/10 bg-transparent px-8 text-base font-medium text-white hover:bg-white/5 transition-colors duration-300"
                >
                  See How It Works
                </a>
              </div>
            </FadeIn>
          </div>
        </section>

        {/* Divider */}
        <div className="h-px w-full bg-gradient-to-r from-transparent via-primary/20 to-transparent" />

        {/* Problem Section */}
        <section id="problem" className="py-24 md:py-32 bg-black relative">
          <div className="max-w-7xl mx-auto px-6">
            <FadeIn>
              <h2 className="text-3xl md:text-5xl font-bold mb-16 text-center">
                The Reality For <span className="text-muted-foreground">Most Law Firms</span>
              </h2>
            </FadeIn>

            <div className="grid md:grid-cols-3 gap-6">
              {[
                {
                  title: "Unpredictable Referrals",
                  desc: "Most firms' pipelines are built on hope, not systems. You can't scale a practice when you don't know where your next instruction is coming from.",
                },
                {
                  title: "Weak Google Visibility",
                  desc: "Potential clients can't find you when they search for a solicitor. If you aren't dominating local search, your competitors are taking your market share.",
                },
                {
                  title: "Slow Response Costs Clients",
                  desc: "Enquiries go cold in minutes; if you're not first, you're last. Modern clients expect immediate answers, and traditional firms are too slow.",
                },
              ].map((item, i) => (
                <FadeIn key={i} delay={i * 0.1} direction="up">
                  <div className="group h-full bg-card border border-white/5 rounded-2xl p-8 hover:border-primary/50 hover:bg-white/[0.02] transition-all duration-500 hover:-translate-y-1">
                    <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500">
                      <div className="h-2 w-2 rounded-full bg-primary" />
                    </div>
                    <h3 className="text-xl font-semibold mb-4 text-white">{item.title}</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                </FadeIn>
              ))}
            </div>
          </div>
        </section>

        {/* How It Works Section */}
        <section id="how-it-works" className="py-24 md:py-32 bg-[#050505] border-y border-white/5 relative overflow-hidden">
          <div className="absolute right-0 bottom-0 w-1/2 h-1/2 bg-primary/10 blur-[120px] rounded-full pointer-events-none" />
          
          <div className="max-w-7xl mx-auto px-6 relative z-10">
            <FadeIn>
              <h2 className="text-3xl md:text-5xl font-bold mb-16 text-center">Our Process</h2>
            </FadeIn>

            <div className="max-w-4xl mx-auto space-y-12">
              {[
                {
                  num: "01",
                  title: "Visibility",
                  desc: "We optimise your Google Business Profile and set up Google Local Service Ads so your firm appears at the very top when local people search for a solicitor.",
                },
                {
                  num: "02",
                  title: "Authority",
                  desc: "We build a consistent review generation system so your firm builds trust and gets chosen over competitors. Social proof engineered on autopilot.",
                },
                {
                  num: "03",
                  title: "Capture",
                  desc: "We set up automated instant response systems so every single enquiry gets a reply within minutes, ensuring no potential client is ever lost to a competitor.",
                },
              ].map((step, i) => (
                <FadeIn key={i} delay={i * 0.15}>
                  <div className="flex flex-col md:flex-row gap-6 md:gap-10 items-start group">
                    <div className="text-5xl md:text-7xl font-bold text-primary/20 group-hover:text-primary/60 transition-colors duration-500 font-mono tracking-tighter">
                      {step.num}
                    </div>
                    <div className="pt-2 md:pt-4 flex-1">
                      <h3 className="text-2xl font-bold text-white mb-3">{step.title}</h3>
                      <p className="text-lg text-muted-foreground leading-relaxed">
                        {step.desc}
                      </p>
                    </div>
                  </div>
                </FadeIn>
              ))}
            </div>
          </div>
        </section>

        {/* Guarantee Section */}
        <section id="guarantee" className="py-24 md:py-40 bg-black relative overflow-hidden">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-[600px] bg-primary/10 blur-[150px] pointer-events-none" />
          
          <div className="max-w-5xl mx-auto px-6 relative z-10">
            <FadeIn>
              <div className="rounded-3xl border border-primary/30 bg-black/50 backdrop-blur-md p-8 md:p-16 text-center shadow-[0_0_50px_rgba(124,58,237,0.15)] relative overflow-hidden group">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                
                <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 tracking-tight">
                  10+ Qualified Client Enquiries in 60 Days
                </h2>
                <h3 className="text-2xl md:text-3xl font-medium text-primary mb-8">
                  Or We Refund the Difference
                </h3>
                <p className="text-lg md:text-xl text-muted-foreground mb-12 max-w-2xl mx-auto leading-relaxed">
                  Most law firms rely on referrals. We build you a predictable, systemised enquiry engine — or you don't pay for what we fall short on. No enquiries, no fee.
                </p>
                <a
                  href="https://calendly.com/admin-lexoscale/30min"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex h-16 items-center justify-center rounded-md bg-white px-10 text-lg font-bold text-black hover:bg-gray-200 transition-colors duration-300 shadow-[0_0_30px_rgba(255,255,255,0.2)] hover:shadow-[0_0_40px_rgba(255,255,255,0.4)]"
                >
                  Claim Your Guarantee — Book A Call
                </a>
              </div>
            </FadeIn>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="py-24 bg-card border-y border-white/5">
          <div className="max-w-4xl mx-auto px-6 text-center">
            <FadeIn>
              <div className="w-16 h-16 mx-auto mb-8 flex items-center justify-center rounded-full bg-primary/10 border border-primary/20">
                <img src="/logo.png" alt="LexoScale Mark" className="h-8 w-auto object-contain opacity-80" />
              </div>
              <p className="text-xl md:text-3xl font-medium leading-relaxed text-white/90">
                "LexoScale is a specialist marketing agency exclusively focused on UK law firms. We help legal practices replace unpredictable referrals with a consistent, systemised client acquisition engine using Google and automation."
              </p>
            </FadeIn>
          </div>
        </section>

        {/* Final CTA Section */}
        <section id="cta" className="py-24 md:py-32 bg-black relative">
          <div className="max-w-7xl mx-auto px-6">
            <FadeIn>
              <div className="text-center mb-16">
                <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">Ready to Fill Your Pipeline?</h2>
                <p className="text-xl text-muted-foreground">Pick a time for your free strategy session below.</p>
              </div>
            </FadeIn>

            <div className="grid lg:grid-cols-12 gap-12 max-w-6xl mx-auto items-start">
              <div className="lg:col-span-8 w-full">
                <FadeIn delay={0.1} direction="up">
                  <div className="bg-card rounded-2xl border border-white/10 p-2 shadow-2xl">
                    <CalendlyEmbed />
                  </div>
                </FadeIn>
              </div>

              <div className="lg:col-span-4 flex flex-col gap-8 justify-center h-full">
                <FadeIn delay={0.2} direction="left">
                  <div className="p-8 rounded-2xl border border-white/10 bg-card/50">
                    <h3 className="text-xl font-bold text-white mb-4">Not ready for a call?</h3>
                    <p className="text-muted-foreground mb-8">
                      Send us an email with your firm's details and we'll get back to you with some initial thoughts.
                    </p>
                    <a
                      href="mailto:hello@lexoscale.com?subject=Enquiry%20From%20Website"
                      className="inline-flex h-12 w-full items-center justify-center rounded-md border border-white/20 bg-transparent px-6 text-sm font-medium text-white hover:bg-white/5 hover:border-white/40 transition-all duration-300"
                    >
                      <Mail className="mr-2 h-4 w-4" />
                      Email Us Instead
                    </a>
                  </div>
                </FadeIn>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-black border-t border-white/10 py-12">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-3">
            <img src="/logo.png" alt="LexoScale Logo" className="h-6 w-auto opacity-70 grayscale" />
          </div>
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} LexoScale. All rights reserved.
          </p>
          <div className="flex items-center gap-6 text-sm text-muted-foreground">
            <a href="#how-it-works" className="hover:text-white transition-colors">Process</a>
            <a href="#guarantee" className="hover:text-white transition-colors">Guarantee</a>
            <a href="#about" className="hover:text-white transition-colors">About</a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
