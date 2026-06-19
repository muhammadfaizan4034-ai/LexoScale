import React, { useEffect } from "react";
import { motion } from "framer-motion";
import { ArrowRight, Mail, TrendingUp, Eye, Zap } from "lucide-react";

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
      className="calendly-inline-widget w-full rounded-xl overflow-hidden"
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
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.75, delay, ease: [0.21, 0.47, 0.32, 0.98] }}
    >
      {children}
    </motion.div>
  );
};

function App() {
  return (
    <div className="min-h-[100dvh] bg-black text-white font-sans overflow-x-hidden selection:bg-primary/30 selection:text-white">

      {/* Nav */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-black/70 backdrop-blur-2xl border-b border-white/[0.06] transition-all duration-300">
        <div className="max-w-7xl mx-auto px-8 h-24 flex items-center justify-center relative">
          <a href="#" className="flex items-center justify-center group">
            <img
              src="/logo.png?v=4"
              alt="LexoScale"
              className="h-20 w-auto transition-opacity group-hover:opacity-75"
            />
          </a>
          <a
            href="#cta"
            data-testid="nav-cta"
            className="absolute right-8 hidden sm:inline-flex h-11 items-center justify-center rounded-lg bg-primary px-7 text-sm font-semibold text-white tracking-wide shadow-[0_0_20px_rgba(124,58,237,0.35)] hover:shadow-[0_0_30px_rgba(124,58,237,0.65)] hover:bg-primary/90 transition-all duration-300"
          >
            Book A Free Strategy Call
          </a>
        </div>
      </header>

      <main>

        {/* Hero */}
        <section className="relative pt-44 pb-28 md:pt-56 md:pb-36 overflow-hidden">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[900px] h-[500px] bg-primary/15 blur-[140px] rounded-full pointer-events-none" />
          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full h-px bg-gradient-to-r from-transparent via-primary/25 to-transparent" />

          <div className="max-w-6xl mx-auto px-8 relative z-10 text-center flex flex-col items-center">
            <FadeIn>
              <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-4 py-1.5 text-xs font-medium text-white/70 backdrop-blur-sm mb-10 tracking-widest uppercase">
                <span className="h-1.5 w-1.5 rounded-full bg-primary animate-pulse"></span>
                Exclusively for Law Firms
              </div>
            </FadeIn>

            <FadeIn delay={0.1}>
              <h1 className="text-6xl md:text-7xl lg:text-[90px] font-extrabold tracking-tight text-white mb-8 leading-[1.05]">
                The Only Growth Layer{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-300 via-purple-400 to-primary">
                  For Your Law Firm.
                </span>
              </h1>
            </FadeIn>

            <FadeIn delay={0.2}>
              <p className="text-xl md:text-2xl text-white/50 max-w-2xl mx-auto mb-12 leading-relaxed font-light">
                We help law firms generate consistent qualified inquiries using our fully managed AI powered acquisition system.
              </p>
            </FadeIn>

            <FadeIn delay={0.3}>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <a
                  href="https://calendly.com/admin-lexoscale/30min"
                  target="_blank"
                  rel="noreferrer"
                  data-testid="hero-cta-primary"
                  className="inline-flex h-14 items-center justify-center rounded-xl bg-primary px-10 text-base font-bold text-white tracking-wide shadow-[0_0_30px_rgba(124,58,237,0.45)] hover:shadow-[0_0_45px_rgba(124,58,237,0.75)] hover:bg-primary/90 transition-all duration-300"
                >
                  Book A Free Strategy Call
                  <ArrowRight className="ml-2.5 h-5 w-5" />
                </a>
                <a
                  href="#how-it-works"
                  data-testid="hero-cta-secondary"
                  className="inline-flex h-14 items-center justify-center rounded-xl border border-white/12 bg-white/[0.03] px-10 text-base font-medium text-white/80 hover:bg-white/[0.07] hover:border-white/20 transition-all duration-300"
                >
                  See How It Works
                </a>
              </div>
            </FadeIn>
          </div>
        </section>

        {/* Stats bar */}
        <section className="border-y border-white/[0.06] bg-[#080808] py-10">
          <div className="max-w-5xl mx-auto px-8">
            <div className="grid grid-cols-3 gap-8 text-center">
              {[
                { value: "25+", label: "Qualified Inquiries Guaranteed" },
                { value: "60", label: "Days to First Results" },
                { value: "100%", label: "Risk Free Guarantee" },
              ].map((stat, i) => (
                <FadeIn key={i} delay={i * 0.1} direction="none">
                  <div className="flex flex-col items-center gap-1">
                    <span className="text-3xl md:text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-violet-300 to-primary">
                      {stat.value}
                    </span>
                    <span className="text-sm text-white/40 tracking-wide">{stat.label}</span>
                  </div>
                </FadeIn>
              ))}
            </div>
          </div>
        </section>

        {/* Problem Section */}
        <section id="problem" className="py-28 md:py-36 bg-black relative">
          <div className="max-w-7xl mx-auto px-8">
            <FadeIn>
              <div className="text-center mb-20">
                <h2 className="text-4xl md:text-6xl font-bold">
                  The Reality For{" "}
                  <span className="text-white/35">Most Law Firms</span>
                </h2>
              </div>
            </FadeIn>

            <div className="grid md:grid-cols-3 gap-5">
              {[
                {
                  icon: TrendingUp,
                  number: "01",
                  title: "Your pipeline runs on luck",
                  desc: "Every month it's the same question: will enough referrals come in this month? You have zero control over your own growth. No system. No predictability. Just hope that someone mentions your firm to someone who needs a lawyer.",
                },
                {
                  icon: Eye,
                  number: "02",
                  title: "You are invisible online",
                  desc: "Right now someone in your city is searching for a lawyer. They found three of your competitors first. Not because those firms are better than yours. Because they showed up and you did not. Every day that continues is revenue walking out the door.",
                },
                {
                  icon: Zap,
                  number: "03",
                  title: "Slow replies are killing you",
                  desc: "A lead contacted your firm. Your team got back to them four hours later. By then they had already hired someone else. This is not a one-off. It is happening every week and you have no idea how many clients you have already lost this way.",
                },
              ].map((item, i) => (
                <FadeIn key={i} delay={i * 0.12} direction="up">
                  <div className="group relative h-full border border-transparent rounded-2xl p-8 hover:border-primary/20 transition-all duration-500 overflow-hidden">
                    <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    <div className="absolute -top-6 -right-4 text-[80px] font-black text-white/[0.025] select-none leading-none">
                      {item.number}
                    </div>
                    <div className="relative z-10">
                      <div className="h-11 w-11 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center mb-7 group-hover:bg-primary/15 transition-colors duration-300">
                        <item.icon className="h-5 w-5 text-primary" />
                      </div>
                      <h3 className="text-xl font-bold mb-4 text-white">{item.title}</h3>
                      <p className="text-white/45 leading-relaxed text-[15px]">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                </FadeIn>
              ))}
            </div>

            <FadeIn delay={0.4}>
              <div className="text-center mt-16">
                <p className="text-2xl md:text-3xl font-bold text-white/60 italic">Sound familiar?</p>
              </div>
            </FadeIn>
          </div>
        </section>

        {/* How It Works */}
        <section id="how-it-works" className="py-28 md:py-36 bg-[#060606] relative overflow-hidden">
          <div className="absolute right-0 top-1/4 w-[500px] h-[500px] bg-primary/8 blur-[120px] rounded-full pointer-events-none" />
          <div className="absolute left-0 bottom-1/4 w-[300px] h-[300px] bg-primary/5 blur-[100px] rounded-full pointer-events-none" />

          <div className="max-w-6xl mx-auto px-8 relative z-10">
            <FadeIn>
              <div className="text-center mb-20">
                <p className="text-xs tracking-[0.3em] uppercase text-primary/80 font-semibold mb-4">The System</p>
                <h2 className="text-4xl md:text-6xl font-bold">Our Process</h2>
              </div>
            </FadeIn>

            <div className="space-y-6">
              {[
                {
                  num: "01",
                  title: "Visibility",
                  tag: "Google Domination",
                  desc: "We optimise your Google Business Profile and activate Google Local Service Ads so your firm appears at the very top when potential clients search for a lawyer near them. Most firms are not even set up correctly. We fix that and build from there.",
                },
                {
                  num: "02",
                  title: "Authority",
                  tag: "Trust at Scale",
                  desc: "We build a systematic review generation engine that runs in the background of your practice. Your firm accumulates verified five-star reviews automatically. When a client is choosing between you and a competitor they choose the firm with the stronger reputation.",
                },
                {
                  num: "03",
                  title: "Capture",
                  tag: "Zero Leads Lost",
                  desc: "We install automated instant response so every single enquiry receives a reply within minutes. Not hours. Not the next morning. Minutes. Because the firm that responds first almost always wins the client.",
                },
              ].map((step, i) => (
                <FadeIn key={i} delay={i * 0.15}>
                  <div className="group flex flex-col md:flex-row gap-8 md:gap-12 items-start bg-[#0a0a0a] border border-white/[0.07] rounded-2xl p-8 md:p-10 hover:border-primary/30 transition-all duration-500">
                    <div className="shrink-0 flex flex-col items-center gap-2">
                      <span className="text-6xl md:text-7xl font-black text-primary/15 group-hover:text-primary/40 transition-colors duration-500 leading-none font-mono">
                        {step.num}
                      </span>
                    </div>
                    <div className="flex-1 pt-1">
                      <div className="flex flex-wrap items-center gap-3 mb-4">
                        <h3 className="text-2xl font-bold text-white">{step.title}</h3>
                        <span className="text-xs font-semibold tracking-widest uppercase text-primary/70 border border-primary/20 bg-primary/5 rounded-full px-3 py-1">
                          {step.tag}
                        </span>
                      </div>
                      <p className="text-white/45 leading-relaxed text-[15px] max-w-2xl">
                        {step.desc}
                      </p>
                    </div>
                  </div>
                </FadeIn>
              ))}
            </div>
          </div>
        </section>

        {/* Guarantee */}
        <section id="guarantee" className="py-28 md:py-44 bg-black relative overflow-hidden">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/10 blur-[180px] rounded-full pointer-events-none" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-primary/15 blur-[80px] rounded-full pointer-events-none" />

          <div className="max-w-4xl mx-auto px-8 relative z-10">
            <FadeIn>
              <div className="relative rounded-3xl border border-primary/25 bg-black p-10 md:p-20 text-center overflow-hidden shadow-[0_0_80px_rgba(124,58,237,0.12)]">
                <div className="absolute inset-0 rounded-3xl bg-gradient-to-b from-primary/5 via-transparent to-transparent pointer-events-none" />
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-px bg-gradient-to-r from-transparent via-primary/60 to-transparent" />

                <div className="relative z-10">
                  <p className="text-xs tracking-[0.3em] uppercase text-primary font-bold mb-8">The LexoScale Guarantee</p>
                  <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white mb-6 tracking-tight leading-[1.1]">
                    We Guarantee To Get You{" "}
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-300 to-primary">
                      25+ Qualified Enquiries
                    </span>{" "}
                    Under 60 Days. All Done For You.
                  </h2>
                  <h3 className="text-2xl md:text-3xl font-semibold text-white/60 mb-10">
                    If We Don't Deliver. We Refund The Difference.
                  </h3>
                  <p className="text-lg text-white/40 mb-14 max-w-xl mx-auto leading-relaxed">
                    Most law firms rely on referrals. We build you a predictable systemised AI powered lead engine. If we fall short of 25 qualified enquiries in 60 days you do not pay for every lead we miss. No results. No fee.
                  </p>
                  <a
                    href="https://calendly.com/admin-lexoscale/30min"
                    target="_blank"
                    rel="noreferrer"
                    data-testid="guarantee-cta"
                    className="inline-flex h-16 items-center justify-center rounded-xl bg-white px-12 text-lg font-extrabold text-black tracking-wide shadow-[0_0_40px_rgba(255,255,255,0.15)] hover:shadow-[0_0_60px_rgba(255,255,255,0.3)] hover:bg-gray-100 transition-all duration-300"
                  >
                    Claim Your Guarantee. Book A Call.
                  </a>
                </div>
              </div>
            </FadeIn>
          </div>
        </section>

        {/* About */}
        <section id="about" className="py-24 bg-[#060606] border-y border-white/[0.06]">
          <div className="max-w-4xl mx-auto px-8 text-center">
            <FadeIn>
              <div className="w-14 h-14 mx-auto mb-10 flex items-center justify-center rounded-2xl bg-primary/10 border border-primary/20">
                <img src="/logo.png?v=4" alt="LexoScale" className="h-9 w-auto object-contain" />
              </div>
              <p className="text-xs tracking-[0.3em] uppercase text-primary/70 font-semibold mb-8">About LexoScale</p>
              <p className="text-2xl md:text-3xl font-medium leading-relaxed text-white/80 mb-8">
                LexoScale is a specialist acquisition partner working exclusively with law firms.
              </p>
              <p className="text-lg text-white/45 leading-relaxed max-w-3xl mx-auto mb-6">
                We help legal practices move away from inconsistent referrals and build a reliable flow of qualified enquiries from people actively seeking legal support.
              </p>
              <p className="text-lg text-white/45 leading-relaxed max-w-3xl mx-auto mb-6">
                LexoScale was created after seeing the same issue across the industry. Strong firms with excellent reputations but no predictable way to generate demand. Growth depended on timing and chance rather than a structured system.
              </p>
              <p className="text-lg text-white/45 leading-relaxed max-w-3xl mx-auto mb-6">
                We believe growth should not be left to unpredictability. It should be consistent measurable and controllable.
              </p>
              <p className="text-lg text-white/45 leading-relaxed max-w-3xl mx-auto mb-6">
                Our focus is simple. Put your firm in front of high intent searchers convert attention into consultation requests and ensure those opportunities are not lost due to poor follow up.
              </p>
              <p className="text-lg text-white/60 font-medium leading-relaxed max-w-3xl mx-auto">
                You focus on delivering legal outcomes. We focus on making sure the right people reach you consistently.
              </p>
            </FadeIn>
          </div>
        </section>

        {/* Final CTA */}
        <section id="cta" className="py-28 md:py-36 bg-black relative">
          <div className="max-w-7xl mx-auto px-8">
            <FadeIn>
              <div className="text-center mb-16">
                <p className="text-xs tracking-[0.3em] uppercase text-primary/80 font-semibold mb-4">Get Started</p>
                <h2 className="text-4xl md:text-6xl font-extrabold text-white mb-5">Ready to Fill Your Pipeline?</h2>
                <p className="text-lg text-white/40">Pick a time below and we will map out your growth strategy on the call.</p>
              </div>
            </FadeIn>

            <div className="grid lg:grid-cols-12 gap-10 max-w-6xl mx-auto items-start">
              <div className="lg:col-span-8 w-full">
                <FadeIn delay={0.1} direction="up">
                  <div className="rounded-2xl border border-white/[0.08] bg-[#090909] p-3 shadow-2xl">
                    <CalendlyEmbed />
                  </div>
                </FadeIn>
              </div>

              <div className="lg:col-span-4 flex flex-col gap-6 justify-center">
                <FadeIn delay={0.2} direction="left">
                  <div className="p-8 rounded-2xl border border-white/[0.08] bg-[#090909]">
                    <h3 className="text-xl font-bold text-white mb-3">Prefer email?</h3>
                    <p className="text-white/40 mb-8 text-sm leading-relaxed">
                      Send us your firm's details and we will come back to you with some initial thoughts on how we would approach your growth.
                    </p>
                    <a
                      href="mailto:hello@lexoscale.com?subject=Enquiry%20From%20Website"
                      data-testid="email-cta"
                      className="inline-flex h-12 w-full items-center justify-center rounded-xl border border-white/15 bg-transparent px-6 text-sm font-semibold text-white hover:bg-white/[0.05] hover:border-white/30 transition-all duration-300"
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
      <footer className="bg-[#040404] border-t border-white/[0.06] py-10">
        <div className="max-w-7xl mx-auto px-8 flex flex-col md:flex-row items-center justify-between gap-6">
          <img src="/logo.png?v=4" alt="LexoScale" className="h-8 w-auto opacity-50" />
          <p className="text-sm text-white/25">
            © {new Date().getFullYear()} LexoScale. All rights reserved.
          </p>
          <div className="flex items-center gap-7 text-sm text-white/35">
            <a href="#how-it-works" className="hover:text-white transition-colors duration-200">Process</a>
            <a href="#guarantee" className="hover:text-white transition-colors duration-200">Guarantee</a>
            <a href="#about" className="hover:text-white transition-colors duration-200">About</a>
          </div>
        </div>
      </footer>

    </div>
  );
}

export default App;
