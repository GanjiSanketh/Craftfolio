import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { gsap } from "gsap";
import { getLenis } from "../../hooks/useLenis";

const STATS = [
  { value: "3+", label: "Years Experience" },
  { value: "8+", label: "Projects Shipped" },
  { value: "5K+", label: "Users Served" },
];

interface BadgeConfig {
  label: string;
  color: string;
  abbr: string;
  posStyle: React.CSSProperties;
  delay: number;
}

const TECH_BADGES: BadgeConfig[] = [
  { label: "Angular",    color: "#DD0031", abbr: "A", posStyle: { top: "-20px",  left: "-44px" }, delay: 0 },
  { label: ".NET Core",  color: "#512BD4", abbr: "N", posStyle: { top: "-12px",  right: "-52px" }, delay: 0.4 },
  { label: "PostgreSQL", color: "#336791", abbr: "P", posStyle: { bottom: "-20px", left: "-36px" }, delay: 0.8 },
  { label: "Flutter",    color: "#0553B1", abbr: "F", posStyle: { bottom: "-16px", right: "-44px" }, delay: 1.2 },
];

const FloatingBadge = ({ label, color, abbr, posStyle, delay }: BadgeConfig) => (
  <motion.div
    animate={{ y: [0, -7, 0] }}
    transition={{ duration: 3.5 + delay, repeat: Infinity, ease: "easeInOut", delay }}
    className="absolute flex items-center gap-2 bg-white rounded-xl px-3 py-2 z-10"
    style={{ ...posStyle, boxShadow: "0 4px 12px rgba(0,0,0,0.08), 0 0 0 1px rgba(0,0,0,0.05)" }}
  >
    <div
      className="w-5 h-5 rounded-md flex items-center justify-center text-[10px] font-bold text-white flex-shrink-0"
      style={{ backgroundColor: color }}
    >
      {abbr}
    </div>
    <span className="text-xs font-semibold text-white-100 whitespace-nowrap">{label}</span>
  </motion.div>
);

const Hero = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const eyebrowRef = useRef<HTMLDivElement>(null);
  const headRef = useRef<HTMLDivElement>(null);
  const subRef = useRef<HTMLParagraphElement>(null);
  const statsRef = useRef<HTMLDivElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);
  const codeRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ delay: 0.15 });

      tl.fromTo(eyebrowRef.current, { y: 12, opacity: 0 }, { y: 0, opacity: 1, duration: 0.6, ease: "power3.out" })
        .fromTo(headRef.current?.querySelectorAll(".hero-line") ?? [], { y: 24, opacity: 0 }, {
          y: 0, opacity: 1, stagger: 0.1, duration: 0.75, ease: "power4.out",
        }, "-=0.3")
        .fromTo(subRef.current, { y: 14, opacity: 0 }, { y: 0, opacity: 1, duration: 0.6, ease: "power3.out" }, "-=0.4")
        .fromTo(statsRef.current?.querySelectorAll(".stat") ?? [], { y: 14, opacity: 0 }, {
          y: 0, opacity: 1, stagger: 0.08, duration: 0.5, ease: "power3.out",
        }, "-=0.35")
        .fromTo(ctaRef.current?.querySelectorAll(".cta-btn") ?? [], { y: 14, opacity: 0 }, {
          y: 0, opacity: 1, stagger: 0.1, duration: 0.5, ease: "power3.out",
        }, "-=0.35")
        .fromTo(codeRef.current, { x: 30, opacity: 0 }, { x: 0, opacity: 1, duration: 0.9, ease: "power4.out" }, "-=0.7");
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    const lenis = getLenis();
    if (lenis && el) lenis.scrollTo(el, { duration: 1.4 });
    else el?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="hero"
      ref={sectionRef}
      className="relative w-full min-h-screen flex items-center overflow-hidden"
    >
      {/* Background dot grid */}
      <div className="absolute inset-0 dot-grid pointer-events-none opacity-60" />

      {/* Gradient blobs */}
      <div
        className="absolute -top-48 -right-48 w-[700px] h-[700px] pointer-events-none"
        style={{ background: "radial-gradient(circle, rgba(99,102,241,0.1) 0%, rgba(139,92,246,0.05) 40%, transparent 70%)" }}
      />
      <div
        className="absolute -bottom-32 -left-32 w-[500px] h-[500px] pointer-events-none"
        style={{ background: "radial-gradient(circle, rgba(139,92,246,0.07) 0%, transparent 65%)" }}
      />

      {/* Main content */}
      <div className="section-container w-full pt-28 pb-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">

          {/* Left — text */}
          <div>
            {/* Availability badge */}
            <div
              ref={eyebrowRef}
              style={{ opacity: 0, background: "rgba(99,102,241,0.06)" }}
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full mb-7 border border-gold/25"
            >
              <div className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span className="text-xs font-medium text-gold tracking-wide">Available for opportunities</span>
            </div>

            {/* Headline */}
            <div ref={headRef} className="mb-6 overflow-hidden">
              <h1 className="font-extrabold text-white-100 text-[clamp(2.4rem,5.5vw,4.75rem)] leading-[1.06] tracking-tight">
                <span className="hero-line block" style={{ opacity: 0 }}>Building Software</span>
                <span className="hero-line block" style={{ opacity: 0 }}>
                  That{" "}
                  <span className="text-gradient-gold">Scales.</span>
                </span>
              </h1>
            </div>

            {/* Description */}
            <p
              ref={subRef}
              style={{ opacity: 0 }}
              className="text-secondary text-[1rem] sm:text-[1.05rem] leading-relaxed mb-10 max-w-xl"
            >
              Software Engineer specializing in Angular, .NET Core, and PostgreSQL — engineering enterprise applications that serve thousands of users and drive real business value.
            </p>

            {/* Stats */}
            <div ref={statsRef} className="flex items-center gap-10 mb-10">
              {STATS.map((s, i) => (
                <div key={i} className="stat" style={{ opacity: 0 }}>
                  <p className="text-[2rem] font-extrabold text-white-100 tabular-nums leading-none">{s.value}</p>
                  <p className="text-xs text-secondary mt-1 tracking-wide">{s.label}</p>
                </div>
              ))}
            </div>

            {/* CTAs */}
            <div ref={ctaRef} className="flex flex-wrap gap-3">
              <button
                className="cta-btn px-6 py-3 rounded-xl bg-gold text-white text-sm font-semibold hover:bg-gold-light transition-all duration-200 shadow-indigo"
                style={{ opacity: 0 }}
                onClick={() => scrollTo("work")}
              >
                View My Work
              </button>
              <button
                className="cta-btn px-6 py-3 rounded-xl border border-border text-white-100 text-sm font-semibold hover:border-gold/40 hover:bg-gold/5 transition-all duration-200"
                style={{ opacity: 0 }}
                onClick={() => scrollTo("contact")}
              >
                Get in Touch
              </button>
            </div>
          </div>

          {/* Right — code window */}
          <div ref={codeRef} className="hidden lg:flex items-center justify-center" style={{ opacity: 0 }}>
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
              className="relative"
            >
              {/* Glow halo */}
              <div
                className="absolute inset-0 rounded-2xl scale-110"
                style={{ background: "radial-gradient(ellipse at center, rgba(99,102,241,0.18) 0%, transparent 70%)", filter: "blur(24px)" }}
              />

              {/* VS Code–style terminal */}
              <div
                className="relative rounded-2xl overflow-hidden w-[420px]"
                style={{ boxShadow: "0 24px 48px rgba(99,102,241,0.18), 0 0 0 1px rgba(99,102,241,0.12)" }}
              >
                {/* Window chrome */}
                <div className="bg-[#1E1E2E] px-4 py-3 flex items-center gap-2">
                  <div className="flex gap-1.5">
                    <div className="w-3 h-3 rounded-full bg-[#FF5F57]" />
                    <div className="w-3 h-3 rounded-full bg-[#FEBC2E]" />
                    <div className="w-3 h-3 rounded-full bg-[#28C840]" />
                  </div>
                  <span className="ml-3 text-[#6B7280] text-xs font-mono">developer.ts</span>
                  <span className="ml-auto text-[#4B5563] text-[10px] font-mono">TypeScript</span>
                </div>

                {/* Code body */}
                <div className="bg-[#13131A] px-6 py-5 font-mono text-[13px] leading-[1.7] select-none">
                  <p><span className="text-[#C084FC]">const </span><span className="text-[#60A5FA]">developer</span><span className="text-[#94A3B8]"> = {"{"}</span></p>
                  <p className="pl-5"><span className="text-[#6EE7B7]">name</span><span className="text-[#94A3B8]">: </span><span className="text-[#F87171]">"Sanketh Ganji"</span><span className="text-[#94A3B8]">,</span></p>
                  <p className="pl-5"><span className="text-[#6EE7B7]">role</span><span className="text-[#94A3B8]">: </span><span className="text-[#F87171]">"Software Engineer"</span><span className="text-[#94A3B8]">,</span></p>
                  <p className="pl-5"><span className="text-[#6EE7B7]">skills</span><span className="text-[#94A3B8]">: [</span></p>
                  <p className="pl-10"><span className="text-[#F87171]">"Angular"</span><span className="text-[#94A3B8]">, </span><span className="text-[#F87171]">".NET Core"</span><span className="text-[#94A3B8]">,</span></p>
                  <p className="pl-10"><span className="text-[#F87171]">"PostgreSQL"</span><span className="text-[#94A3B8]">, </span><span className="text-[#F87171]">"Flutter"</span><span className="text-[#94A3B8]">,</span></p>
                  <p className="pl-5"><span className="text-[#94A3B8]">],</span></p>
                  <p className="pl-5"><span className="text-[#6EE7B7]">experience</span><span className="text-[#94A3B8]">: </span><span className="text-[#F87171]">"3+ years"</span><span className="text-[#94A3B8]">,</span></p>
                  <p className="pl-5"><span className="text-[#6EE7B7]">status</span><span className="text-[#94A3B8]">: </span><span className="text-[#A3E635]">"open to work 🚀"</span><span className="text-[#94A3B8]">,</span></p>
                  <p><span className="text-[#94A3B8]">{"}"}</span></p>
                </div>

                {/* Status bar */}
                <div className="bg-[#6366F1] px-4 py-1.5 flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-white/60" />
                  <span className="text-white text-[10px] font-mono">No errors · TypeScript</span>
                  <span className="ml-auto text-white/60 text-[10px] font-mono">Ln 10, Col 1</span>
                </div>
              </div>

              {/* Floating tech badges */}
              {TECH_BADGES.map((badge, i) => (
                <FloatingBadge key={badge.label} {...badge} delay={i * 0.4} />
              ))}
            </motion.div>
          </div>
        </div>

        {/* Scroll cue */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-60">
          <span className="font-mono-custom text-[10px] text-secondary tracking-widest uppercase">Scroll</span>
          <div className="w-px h-10 bg-gradient-to-b from-gold/60 to-transparent relative overflow-hidden">
            <div className="absolute top-0 w-full h-1/2 bg-gold animate-scrollDot" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
