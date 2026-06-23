"use client";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import dynamic from "next/dynamic";
import { MagneticButton } from "@/components/animations/MagneticButton";
import { siteConfig } from "@/data/portfolio";
import { getLenis } from "@/hooks/useLenis";

const HeroCanvas = dynamic(
  () => import("@/components/canvas/HeroCanvas").then((m) => m.HeroCanvas),
  { ssr: false }
);

export function Hero() {
  const containerRef = useRef<HTMLElement>(null);
  const eyebrowRef = useRef<HTMLParagraphElement>(null);
  const nameRef = useRef<HTMLHeadingElement>(null);
  const roleRef = useRef<HTMLDivElement>(null);
  const descRef = useRef<HTMLParagraphElement>(null);
  const statsRef = useRef<HTMLDivElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ delay: 3.6 });

      tl.fromTo(
        eyebrowRef.current,
        { y: 20, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.8, ease: "power3.out" }
      )
        .fromTo(
          nameRef.current?.querySelectorAll(".name-char") ?? [],
          { y: "120%", opacity: 0, rotateX: -60 },
          {
            y: "0%",
            opacity: 1,
            rotateX: 0,
            stagger: 0.035,
            duration: 1.0,
            ease: "power4.out",
          },
          "-=0.4"
        )
        .fromTo(
          roleRef.current,
          { y: 20, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.7, ease: "power3.out" },
          "-=0.5"
        )
        .fromTo(
          descRef.current,
          { y: 20, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.7, ease: "power3.out" },
          "-=0.5"
        )
        .fromTo(
          statsRef.current?.querySelectorAll(".stat-item") ?? [],
          { y: 20, opacity: 0 },
          { y: 0, opacity: 1, stagger: 0.1, duration: 0.6, ease: "power3.out" },
          "-=0.4"
        )
        .fromTo(
          ctaRef.current?.querySelectorAll(".cta-btn") ?? [],
          { y: 20, opacity: 0 },
          { y: 0, opacity: 1, stagger: 0.1, duration: 0.6, ease: "power3.out" },
          "-=0.4"
        )
        .fromTo(
          scrollRef.current,
          { opacity: 0 },
          { opacity: 1, duration: 0.8 },
          "-=0.2"
        );
    }, containerRef);

    return () => ctx.revert();
  }, []);

  const scrollToWork = () => {
    const el = document.getElementById("projects");
    const lenis = getLenis();
    if (lenis && el) lenis.scrollTo(el, { duration: 1.6 });
  };

  const scrollToContact = () => {
    const el = document.getElementById("contact");
    const lenis = getLenis();
    if (lenis && el) lenis.scrollTo(el, { duration: 1.6 });
  };

  const stats = [
    { value: `${siteConfig.yearsOfExperience}+`, label: "Years" },
    { value: `${siteConfig.projectsDelivered}+`, label: "Projects" },
    { value: `${siteConfig.technologiesMastered}+`, label: "Technologies" },
  ];

  const nameChars = "SANKETH GANJI".split("");

  return (
    <section
      id="hero"
      ref={containerRef}
      className="relative min-h-screen flex items-center overflow-hidden"
    >
      {/* Three.js Canvas */}
      <HeroCanvas />

      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#030303] via-[#030303]/80 to-transparent pointer-events-none" />
      <div className="absolute inset-0 bg-gradient-to-t from-[#030303] via-transparent to-transparent pointer-events-none" />

      {/* Content */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 md:px-12 pt-24 pb-16">
        <div className="max-w-3xl">
          {/* Eyebrow */}
          <p
            ref={eyebrowRef}
            className="font-mono text-xs text-[#c9a84c] tracking-[0.5em] uppercase mb-6 flex items-center gap-3 opacity-0"
          >
            <span className="w-8 h-px bg-[#c9a84c]" />
            Software Engineer
          </p>

          {/* Name */}
          <div className="overflow-hidden mb-4">
            <h1
              ref={nameRef}
              className="font-display text-6xl md:text-8xl lg:text-[9rem] font-bold text-[#f0ede8] leading-[0.9] tracking-tight"
              aria-label="Sanketh Ganji"
            >
              {nameChars.map((char, i) =>
                char === " " ? (
                  <span key={i} className="name-char inline-block" style={{ opacity: 0 }}>
                    &nbsp;
                  </span>
                ) : (
                  <span
                    key={i}
                    className="name-char inline-block will-change-transform"
                    style={{ opacity: 0, transformStyle: "preserve-3d" }}
                  >
                    {char}
                  </span>
                )
              )}
            </h1>
          </div>

          {/* Role */}
          <div ref={roleRef} className="flex items-center gap-4 mb-6 opacity-0">
            <div className="h-px w-12 bg-gradient-to-r from-[#c9a84c] to-transparent" />
            <p className="font-mono text-sm text-[#888] tracking-widest uppercase">
              Building enterprise software with precision
            </p>
          </div>

          {/* Description */}
          <p
            ref={descRef}
            className="text-[#888] text-base md:text-lg leading-relaxed max-w-xl mb-10 opacity-0"
          >
            {siteConfig.shortBio}
          </p>

          {/* Stats */}
          <div ref={statsRef} className="flex items-center gap-8 mb-12">
            {stats.map((stat, i) => (
              <div key={i} className="stat-item opacity-0">
                <p className="font-display text-3xl md:text-4xl font-bold text-[#f0ede8]">
                  {stat.value}
                </p>
                <p className="font-mono text-xs text-[#555] tracking-widest uppercase mt-1">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>

          {/* CTAs */}
          <div ref={ctaRef} className="flex flex-wrap items-center gap-4">
            <MagneticButton
              className="cta-btn opacity-0"
              strength={0.3}
              onClick={scrollToWork}
            >
              <div className="relative px-8 py-4 bg-[#c9a84c] rounded-full overflow-hidden group">
                <span className="font-mono text-sm font-bold text-black tracking-widest uppercase relative z-10 group-hover:text-black transition-colors">
                  View Work
                </span>
                <div className="absolute inset-0 bg-[#e8c76a] scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-500" />
              </div>
            </MagneticButton>

            <MagneticButton
              className="cta-btn opacity-0"
              strength={0.3}
              onClick={scrollToContact}
            >
              <div className="px-8 py-4 border border-[#333] rounded-full hover:border-[#c9a84c]/50 transition-colors duration-300">
                <span className="font-mono text-sm text-[#888] tracking-widest uppercase hover:text-[#c9a84c] transition-colors">
                  Get in Touch
                </span>
              </div>
            </MagneticButton>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div
        ref={scrollRef}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-0"
      >
        <span className="font-mono text-xs text-[#444] tracking-widest uppercase">Scroll</span>
        <div className="w-px h-12 bg-gradient-to-b from-[#c9a84c]/60 to-transparent relative overflow-hidden">
          <div className="absolute top-0 w-full h-1/2 bg-[#c9a84c] animate-[scrollDot_1.6s_ease-in-out_infinite]" />
        </div>
      </div>
    </section>
  );
}
