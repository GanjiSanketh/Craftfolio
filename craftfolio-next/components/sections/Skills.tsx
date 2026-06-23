"use client";
import { useRef, useEffect, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { motion } from "framer-motion";
import { skills } from "@/data/portfolio";
import { ScrollReveal, StaggerContainer, StaggerItem } from "@/components/animations/ScrollReveal";

gsap.registerPlugin(ScrollTrigger);

const categories = [
  { id: "frontend", label: "Frontend" },
  { id: "backend", label: "Backend" },
  { id: "database", label: "Database" },
  { id: "mobile", label: "Mobile" },
  { id: "tools", label: "Tools" },
] as const;

export function Skills() {
  const sectionRef = useRef<HTMLElement>(null);
  const [activeCategory, setActiveCategory] = useState<string>("all");

  const filteredSkills =
    activeCategory === "all"
      ? skills
      : skills.filter((s) => s.category === activeCategory);

  return (
    <section
      id="skills"
      ref={sectionRef}
      className="relative section-padding overflow-hidden"
    >
      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Header */}
        <ScrollReveal className="mb-12">
          <div className="flex items-center gap-4 mb-6">
            <span className="font-mono text-xs text-[#c9a84c] tracking-[0.4em] uppercase">
              05. Skills
            </span>
            <div className="flex-1 h-px bg-[#1a1a1a]" />
          </div>
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <h2 className="font-display text-4xl md:text-5xl font-bold text-[#f0ede8] leading-tight">
              Technical{" "}
              <span className="text-gradient-gold">Expertise</span>
            </h2>

            {/* Category filter */}
            <div className="flex flex-wrap gap-2">
              <button
                onClick={() => setActiveCategory("all")}
                className={`font-mono text-xs px-3 py-1.5 rounded-full border transition-all duration-300 ${
                  activeCategory === "all"
                    ? "border-[#c9a84c] text-[#c9a84c] bg-[#c9a84c]/10"
                    : "border-[#222] text-[#555] hover:border-[#444]"
                }`}
                data-cursor="pointer"
              >
                ALL
              </button>
              {categories.map((cat) => (
                <button
                  key={cat.id}
                  onClick={() => setActiveCategory(cat.id)}
                  className={`font-mono text-xs px-3 py-1.5 rounded-full border transition-all duration-300 ${
                    activeCategory === cat.id
                      ? "border-[#c9a84c] text-[#c9a84c] bg-[#c9a84c]/10"
                      : "border-[#222] text-[#555] hover:border-[#444]"
                  }`}
                  data-cursor="pointer"
                >
                  {cat.label.toUpperCase()}
                </button>
              ))}
            </div>
          </div>
        </ScrollReveal>

        {/* Skills grid */}
        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4"
        >
          {filteredSkills.map((skill, i) => (
            <motion.div
              key={skill.name}
              layout
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4, delay: i * 0.04, ease: [0.19, 1, 0.22, 1] }}
            >
              <SkillBar skill={skill} index={i} />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

function SkillBar({
  skill,
  index,
}: {
  skill: (typeof skills)[0];
  index: number;
}) {
  const barRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );
    if (barRef.current) observer.observe(barRef.current);
    return () => observer.disconnect();
  }, []);

  const categoryColors = {
    frontend: "#4da6ff",
    backend: "#c9a84c",
    database: "#6c63ff",
    mobile: "#4dffb4",
    tools: "#ff6b6b",
  };

  const color = categoryColors[skill.category];

  return (
    <div
      ref={barRef}
      className="group p-5 rounded-xl glass border border-white/5 hover:border-white/10 transition-all duration-300"
    >
      <div className="flex items-center justify-between mb-3">
        <span className="text-sm font-medium text-[#f0ede8]">{skill.name}</span>
        <span className="font-mono text-xs text-[#555]">{skill.level}%</span>
      </div>

      {/* Bar */}
      <div className="h-1 bg-[#111] rounded-full overflow-hidden">
        <motion.div
          className="h-full rounded-full relative overflow-hidden"
          style={{ background: `linear-gradient(90deg, ${color}80, ${color})` }}
          initial={{ width: 0 }}
          animate={{ width: isVisible ? `${skill.level}%` : 0 }}
          transition={{
            duration: 1.2,
            delay: index * 0.05,
            ease: [0.19, 1, 0.22, 1],
          }}
        >
          {/* Shimmer */}
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
        </motion.div>
      </div>

      {/* Category badge */}
      <p
        className="font-mono text-xs tracking-widest uppercase mt-2"
        style={{ color: `${color}60` }}
      >
        {skill.category}
      </p>
    </div>
  );
}
