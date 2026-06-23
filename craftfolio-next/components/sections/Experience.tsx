"use client";
import { useRef, useEffect, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { motion } from "framer-motion";
import { experiences } from "@/data/portfolio";
import { ScrollReveal } from "@/components/animations/ScrollReveal";

gsap.registerPlugin(ScrollTrigger);

export function Experience() {
  const sectionRef = useRef<HTMLElement>(null);
  const lineRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Animate the vertical timeline line
      gsap.fromTo(
        lineRef.current,
        { scaleY: 0, transformOrigin: "top center" },
        {
          scaleY: 1,
          ease: "none",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 60%",
            end: "bottom 60%",
            scrub: true,
          },
        }
      );

      // Card animations
      const cards = sectionRef.current?.querySelectorAll(".exp-card");
      cards?.forEach((card, i) => {
        gsap.fromTo(
          card,
          { x: i % 2 === 0 ? -60 : 60, opacity: 0 },
          {
            x: 0,
            opacity: 1,
            duration: 0.9,
            ease: "power3.out",
            scrollTrigger: {
              trigger: card,
              start: "top 80%",
              toggleActions: "play none none none",
              onEnter: () => setActiveIndex(i),
            },
          }
        );
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="experience"
      ref={sectionRef}
      className="relative section-padding overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#050505] to-transparent pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Header */}
        <ScrollReveal className="mb-16">
          <div className="flex items-center gap-4 mb-6">
            <span className="font-mono text-xs text-[#c9a84c] tracking-[0.4em] uppercase">
              02. Experience
            </span>
            <div className="flex-1 h-px bg-[#1a1a1a]" />
          </div>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-[#f0ede8] leading-tight">
            Where I've{" "}
            <span className="text-gradient-gold">worked</span>
          </h2>
        </ScrollReveal>

        {/* Timeline */}
        <div className="relative">
          {/* Center line */}
          <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-px bg-[#1a1a1a] md:-translate-x-px">
            <div
              ref={lineRef}
              className="absolute inset-0 bg-gradient-to-b from-[#c9a84c] via-[#c9a84c]/60 to-transparent"
              style={{ scaleY: 0, transformOrigin: "top center" }}
            />
          </div>

          <div className="space-y-16 md:space-y-0">
            {experiences.map((exp, i) => (
              <div
                key={exp.id}
                className={`exp-card relative pl-14 md:pl-0 md:w-1/2 opacity-0 ${
                  i % 2 === 0
                    ? "md:pr-16 md:ml-0 md:text-right"
                    : "md:pl-16 md:ml-auto"
                }`}
              >
                {/* Dot */}
                <div
                  className={`absolute top-6 w-3 h-3 rounded-full border-2 ${
                    activeIndex >= i
                      ? "border-[#c9a84c] bg-[#c9a84c]/20"
                      : "border-[#333] bg-[#0a0a0a]"
                  } transition-all duration-500 ${
                    i % 2 === 0
                      ? "left-[18px] md:left-auto md:-right-[7px]"
                      : "left-[18px] md:-left-[7px]"
                  }`}
                />

                {/* Card */}
                <div
                  className={`group p-6 rounded-2xl glass border border-white/5 hover:border-[#c9a84c]/20 transition-all duration-500 mb-8 ${
                    i % 2 === 0 ? "md:text-right" : ""
                  }`}
                >
                  {/* Period */}
                  <p className="font-mono text-xs text-[#c9a84c] tracking-widest uppercase mb-3">
                    {exp.period}
                  </p>

                  {/* Role */}
                  <h3 className="font-display text-xl md:text-2xl font-bold text-[#f0ede8] mb-1">
                    {exp.role}
                  </h3>

                  {/* Company */}
                  <p className="text-sm text-[#888] mb-4 flex items-center gap-2 justify-start md:justify-end">
                    <span
                      className={`w-1.5 h-1.5 rounded-full flex-shrink-0 ${
                        exp.type === "full-time" ? "bg-[#c9a84c]" : "bg-[#6c63ff]"
                      }`}
                    />
                    {exp.company}
                    <span className="font-mono text-xs text-[#444] uppercase">
                      {exp.type === "full-time" ? "FT" : "FL"}
                    </span>
                  </p>

                  {/* Points */}
                  <ul
                    className={`space-y-2 mb-4 ${i % 2 === 0 ? "md:text-right" : ""}`}
                  >
                    {exp.description.map((point, pi) => (
                      <li
                        key={pi}
                        className="text-sm text-[#666] leading-relaxed flex items-start gap-2"
                      >
                        <span className="text-[#c9a84c]/60 mt-1 flex-shrink-0">▸</span>
                        {point}
                      </li>
                    ))}
                  </ul>

                  {/* Tech tags */}
                  <div
                    className={`flex flex-wrap gap-2 ${
                      i % 2 === 0 ? "md:justify-end" : ""
                    }`}
                  >
                    {exp.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="font-mono text-xs px-2 py-1 rounded-full bg-[#c9a84c]/8 border border-[#c9a84c]/20 text-[#c9a84c]"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
