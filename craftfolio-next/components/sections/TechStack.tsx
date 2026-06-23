"use client";
import { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { motion } from "framer-motion";
import { techStack } from "@/data/portfolio";
import { ScrollReveal, StaggerContainer, StaggerItem } from "@/components/animations/ScrollReveal";

gsap.registerPlugin(ScrollTrigger);

export function TechStack() {
  const marqueeRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = marqueeRef.current;
    if (!el) return;

    const tween = gsap.to(el.querySelectorAll(".marquee-track"), {
      x: "-50%",
      ease: "none",
      duration: 20,
      repeat: -1,
    });

    return () => tween.kill();
  }, []);

  const categories = [...new Set(techStack.map((t) => t.category))];

  return (
    <section id="techstack" className="relative section-padding overflow-hidden">
      {/* Top gradient fade */}
      <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-[#030303] to-transparent pointer-events-none z-10" />
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#030303] to-transparent pointer-events-none z-10" />

      <div className="relative z-10 max-w-7xl mx-auto mb-16">
        <ScrollReveal>
          <div className="flex items-center gap-4 mb-6">
            <span className="font-mono text-xs text-[#c9a84c] tracking-[0.4em] uppercase">
              06. Stack
            </span>
            <div className="flex-1 h-px bg-[#1a1a1a]" />
          </div>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-[#f0ede8] leading-tight">
            Technologies I{" "}
            <span className="text-gradient-gold">use</span>
          </h2>
        </ScrollReveal>
      </div>

      {/* Marquee */}
      <div ref={marqueeRef} className="flex overflow-hidden py-4">
        <div className="marquee-track flex gap-6 flex-shrink-0">
          {[...techStack, ...techStack].map((tech, i) => (
            <TechPill key={i} tech={tech} />
          ))}
        </div>
        <div className="marquee-track flex gap-6 flex-shrink-0" aria-hidden>
          {[...techStack, ...techStack].map((tech, i) => (
            <TechPill key={i + "b"} tech={tech} />
          ))}
        </div>
      </div>

      {/* Grid */}
      <div className="relative z-10 max-w-7xl mx-auto mt-20">
        <StaggerContainer staggerDelay={0.05}>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {techStack.map((tech, i) => (
              <StaggerItem key={tech.name}>
                <TechCard tech={tech} />
              </StaggerItem>
            ))}
          </div>
        </StaggerContainer>
      </div>
    </section>
  );
}

function TechPill({ tech }: { tech: (typeof techStack)[0] }) {
  return (
    <div className="flex-shrink-0 flex items-center gap-2 px-4 py-2 rounded-full border border-white/5 bg-[#0a0a0a]">
      <div
        className="w-2 h-2 rounded-full flex-shrink-0"
        style={{ backgroundColor: tech.color }}
      />
      <span className="font-mono text-xs text-[#666] tracking-wide whitespace-nowrap">
        {tech.name}
      </span>
    </div>
  );
}

function TechCard({ tech }: { tech: (typeof techStack)[0] }) {
  return (
    <motion.div
      whileHover={{ y: -4, borderColor: `${tech.color}40` }}
      transition={{ duration: 0.2 }}
      className="group p-5 rounded-xl glass border border-white/5 transition-all duration-300 cursor-none"
      data-cursor="pointer"
    >
      {/* Color indicator */}
      <div
        className="w-8 h-1 rounded-full mb-4 opacity-70 group-hover:opacity-100 transition-opacity"
        style={{ backgroundColor: tech.color }}
      />

      <h3 className="text-sm font-medium text-[#f0ede8] mb-1">{tech.name}</h3>
      <p
        className="font-mono text-xs tracking-widest uppercase"
        style={{ color: `${tech.color}60` }}
      >
        {tech.category}
      </p>
    </motion.div>
  );
}
