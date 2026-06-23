"use client";
import { useRef, useEffect, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { motion, AnimatePresence } from "framer-motion";
import { projects } from "@/data/portfolio";
import { ScrollReveal } from "@/components/animations/ScrollReveal";
import { MagneticButton } from "@/components/animations/MagneticButton";

gsap.registerPlugin(ScrollTrigger);

export function Projects() {
  const sectionRef = useRef<HTMLElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const [activeProject, setActiveProject] = useState(0);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const track = trackRef.current;
      if (!track) return;

      const totalWidth = track.scrollWidth - track.offsetWidth;

      const tween = gsap.to(track, {
        x: -totalWidth,
        ease: "none",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top top",
          end: () => `+=${totalWidth + window.innerHeight}`,
          scrub: 1,
          pin: true,
          anticipatePin: 1,
          onUpdate: (self) => {
            const idx = Math.round(self.progress * (projects.length - 1));
            setActiveProject(Math.min(idx, projects.length - 1));
          },
        },
      });

      return () => tween.kill();
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="projects"
      ref={sectionRef}
      className="relative overflow-hidden bg-[#030303]"
    >
      {/* Header - outside pinned area */}
      <div className="section-padding pb-8">
        <div className="max-w-7xl mx-auto">
          <ScrollReveal>
            <div className="flex items-center justify-between">
              <div>
                <div className="flex items-center gap-4 mb-4">
                  <span className="font-mono text-xs text-[#c9a84c] tracking-[0.4em] uppercase">
                    03. Work
                  </span>
                  <div className="w-16 h-px bg-[#1a1a1a]" />
                </div>
                <h2 className="font-display text-4xl md:text-5xl font-bold text-[#f0ede8]">
                  Selected{" "}
                  <span className="text-gradient-gold">Projects</span>
                </h2>
              </div>
              {/* Progress */}
              <div className="hidden md:flex items-center gap-3">
                <span className="font-mono text-xs text-[#444]">
                  {String(activeProject + 1).padStart(2, "0")} /{" "}
                  {String(projects.length).padStart(2, "0")}
                </span>
                <div className="w-24 h-px bg-[#1a1a1a] relative overflow-hidden">
                  <div
                    className="absolute inset-y-0 left-0 bg-[#c9a84c] transition-all duration-500"
                    style={{
                      width: `${((activeProject + 1) / projects.length) * 100}%`,
                    }}
                  />
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>

      {/* Horizontal scroll track */}
      <div className="h-screen flex items-center overflow-hidden">
        <div
          ref={trackRef}
          className="flex gap-6 pl-6 md:pl-12 pr-[30vw] will-change-transform"
          style={{ width: "max-content" }}
        >
          {projects.map((project, i) => (
            <ProjectCard
              key={project.id}
              project={project}
              index={i}
              isActive={i === activeProject}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

function ProjectCard({
  project,
  index,
  isActive,
}: {
  project: (typeof projects)[0];
  index: number;
  isActive: boolean;
}) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      className="flex-shrink-0 w-[85vw] md:w-[60vw] lg:w-[50vw] xl:w-[42vw] h-[65vh] relative rounded-2xl overflow-hidden glass border border-white/5 cursor-none"
      animate={{
        scale: isActive ? 1 : 0.95,
        opacity: isActive ? 1 : 0.5,
      }}
      transition={{ duration: 0.5, ease: [0.19, 1, 0.22, 1] }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#0d0d0d] to-[#0a0a0a]" />
      <div
        className="absolute inset-0 opacity-0 transition-opacity duration-500 bg-gradient-to-br from-[#c9a84c]/5 to-[#6c63ff]/5"
        style={{ opacity: isHovered ? 1 : 0 }}
      />

      {/* Grid pattern */}
      <div
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage:
            "linear-gradient(rgba(201,168,76,0.4) 1px, transparent 1px), linear-gradient(90deg, rgba(201,168,76,0.4) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      {/* Content */}
      <div className="relative h-full flex flex-col p-8 md:p-10">
        {/* Top row */}
        <div className="flex items-start justify-between mb-auto">
          <div>
            <span className="font-mono text-xs text-[#444] tracking-widest">
              {String(index + 1).padStart(2, "0")}
            </span>
            <p className="font-mono text-xs text-[#c9a84c] tracking-widest uppercase mt-1">
              {project.category}
            </p>
          </div>
          <div className="flex items-center gap-2">
            <div
              className={`w-2 h-2 rounded-full ${
                project.status === "live"
                  ? "bg-green-400"
                  : project.status === "development"
                  ? "bg-yellow-400"
                  : "bg-[#555]"
              }`}
            />
            <span className="font-mono text-xs text-[#555] capitalize">{project.status}</span>
          </div>
        </div>

        {/* Main content */}
        <div className="mt-auto">
          <h3 className="font-display text-3xl md:text-4xl font-bold text-[#f0ede8] mb-4 leading-tight">
            {project.title}
          </h3>

          <p className="text-[#666] text-sm md:text-base leading-relaxed mb-6 line-clamp-3">
            {project.description}
          </p>

          {/* Features */}
          <AnimatePresence>
            {isHovered && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 10 }}
                transition={{ duration: 0.3 }}
                className="mb-6 space-y-1"
              >
                {project.features.slice(0, 3).map((f, fi) => (
                  <p key={fi} className="text-xs text-[#888] flex items-center gap-2">
                    <span className="text-[#c9a84c]">+</span> {f}
                  </p>
                ))}
              </motion.div>
            )}
          </AnimatePresence>

          {/* Tech tags */}
          <div className="flex flex-wrap gap-2 mb-6">
            {project.technologies.map((tech) => (
              <span
                key={tech}
                className="font-mono text-xs px-2.5 py-1 rounded-full border border-[#c9a84c]/20 text-[#c9a84c]/80 bg-[#c9a84c]/5"
              >
                {tech}
              </span>
            ))}
          </div>

          {/* Year */}
          <div className="flex items-center justify-between">
            <span className="font-mono text-xs text-[#333]">{project.year}</span>
            <MagneticButton strength={0.3}>
              <div className="w-10 h-10 rounded-full border border-[#c9a84c]/30 flex items-center justify-center hover:border-[#c9a84c] hover:bg-[#c9a84c]/10 transition-all duration-300">
                <svg className="w-4 h-4 text-[#c9a84c]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M7 17L17 7M17 7H7M17 7v10" />
                </svg>
              </div>
            </MagneticButton>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
