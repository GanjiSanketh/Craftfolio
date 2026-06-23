"use client";
import { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollReveal, StaggerContainer, StaggerItem } from "@/components/animations/ScrollReveal";
import { siteConfig } from "@/data/portfolio";

gsap.registerPlugin(ScrollTrigger);

export function About() {
  const sectionRef = useRef<HTMLElement>(null);
  const headingRef = useRef<HTMLHeadingElement>(null);
  const textRef = useRef<HTMLParagraphElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Parallax heading
      gsap.to(headingRef.current, {
        y: -60,
        ease: "none",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top bottom",
          end: "bottom top",
          scrub: true,
        },
      });

      // Text lines stagger
      const lines = textRef.current?.querySelectorAll(".text-line");
      if (lines) {
        gsap.fromTo(
          lines,
          { y: 30, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            stagger: 0.08,
            duration: 0.9,
            ease: "power3.out",
            scrollTrigger: {
              trigger: textRef.current,
              start: "top 80%",
              toggleActions: "play none none none",
            },
          }
        );
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const highlights = [
    { label: "Specialization", value: "Full Stack Development" },
    { label: "Current Role", value: "Software Developer @ GTET" },
    { label: "Education", value: "B.Tech Computer Science" },
    { label: "Location", value: siteConfig.location },
  ];

  const textLines = siteConfig.longBio.split(". ").filter(Boolean);

  return (
    <section
      id="about"
      ref={sectionRef}
      className="relative section-padding overflow-hidden"
    >
      {/* Background label */}
      <div className="absolute right-0 top-1/2 -translate-y-1/2 pointer-events-none select-none overflow-hidden">
        <h2
          ref={headingRef}
          className="font-display text-[15vw] font-bold text-[#0f0f0f] leading-none tracking-tight uppercase"
        >
          ABOUT
        </h2>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-start">
          {/* Left */}
          <div>
            <ScrollReveal delay={0}>
              <div className="flex items-center gap-4 mb-8">
                <span className="font-mono text-xs text-[#c9a84c] tracking-[0.4em] uppercase">
                  01. About
                </span>
                <div className="flex-1 h-px bg-[#1a1a1a]" />
              </div>
            </ScrollReveal>

            <ScrollReveal delay={0.1}>
              <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-[#f0ede8] leading-tight tracking-tight mb-8">
                Crafting software that{" "}
                <em className="text-[#c9a84c] not-italic">matters</em>.
              </h2>
            </ScrollReveal>

            <div ref={textRef} className="space-y-3 mb-12">
              {textLines.map((line, i) => (
                <p
                  key={i}
                  className="text-line text-[#888] text-base md:text-lg leading-relaxed opacity-0"
                >
                  {line}.
                </p>
              ))}
            </div>

            {/* Download CV */}
            <ScrollReveal delay={0.2}>
              <a
                href={siteConfig.resumeUrl}
                download
                className="inline-flex items-center gap-3 px-6 py-3 border border-[#c9a84c]/30 rounded-full hover:border-[#c9a84c] transition-all duration-300 group"
                data-cursor="pointer"
              >
                <span className="font-mono text-xs text-[#c9a84c] tracking-widest uppercase">
                  Download Resume
                </span>
                <svg className="w-4 h-4 text-[#c9a84c] group-hover:translate-y-0.5 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 4v12m0 0l-4-4m4 4l4-4M4 20h16" />
                </svg>
              </a>
            </ScrollReveal>
          </div>

          {/* Right */}
          <div className="space-y-6">
            {/* Portrait placeholder / abstract */}
            <ScrollReveal delay={0.15} direction="left">
              <div
                ref={imageRef}
                className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden glass border border-white/5"
              >
                {/* Abstract grid pattern */}
                <div className="absolute inset-0 bg-gradient-to-br from-[#c9a84c]/5 via-transparent to-[#6c63ff]/5" />
                <div
                  className="absolute inset-0 opacity-10"
                  style={{
                    backgroundImage:
                      "linear-gradient(rgba(201,168,76,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(201,168,76,0.3) 1px, transparent 1px)",
                    backgroundSize: "40px 40px",
                  }}
                />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center">
                    <div className="w-24 h-24 rounded-full border border-[#c9a84c]/30 flex items-center justify-center mx-auto mb-4">
                      <span className="font-display text-3xl text-[#c9a84c]">SG</span>
                    </div>
                    <p className="font-mono text-xs text-[#444] tracking-widest uppercase">
                      Sanketh Ganji
                    </p>
                  </div>
                </div>
              </div>
            </ScrollReveal>

            {/* Highlights */}
            <StaggerContainer staggerDelay={0.07}>
              <div className="grid grid-cols-2 gap-3">
                {highlights.map((item, i) => (
                  <StaggerItem key={i}>
                    <div className="p-4 rounded-xl glass border border-white/5 hover:border-[#c9a84c]/20 transition-colors duration-300">
                      <p className="font-mono text-xs text-[#c9a84c] tracking-widest uppercase mb-1">
                        {item.label}
                      </p>
                      <p className="text-sm text-[#f0ede8] font-medium">{item.value}</p>
                    </div>
                  </StaggerItem>
                ))}
              </div>
            </StaggerContainer>
          </div>
        </div>
      </div>
    </section>
  );
}
