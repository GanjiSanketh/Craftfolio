import { useRef, useEffect } from "react";
import { motion } from "framer-motion";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import { SectionWrapper } from "../../hoc";
import { fadeIn } from "../../utils/motion";
import { styles } from "../../constants/styles";

gsap.registerPlugin(ScrollTrigger);

const FEATURES = [
  {
    icon: "⬡",
    title: "Full Stack Development",
    description: "End-to-end development from Angular frontends to .NET Core backends and PostgreSQL databases.",
    accent: "#6366F1",
  },
  {
    icon: "◈",
    title: "Enterprise Systems",
    description: "Large-scale applications built to serve thousands of users with reliability and performance.",
    accent: "#8B5CF6",
  },
  {
    icon: "◻",
    title: "Database Architecture",
    description: "Schema design and query optimization for complex business logic in relational databases.",
    accent: "#A855F7",
  },
  {
    icon: "◯",
    title: "Mobile Development",
    description: "Cross-platform Flutter apps with native performance and seamless user experiences.",
    accent: "#6366F1",
  },
];

const HIGHLIGHTS = [
  { label: "Specialization", value: "Full Stack Dev" },
  { label: "Current Role", value: "GTET — Hyderabad" },
  { label: "Education", value: "B.Tech Computer Science" },
  { label: "Status", value: "Open to Work 🟢" },
];

const About = () => {
  const linesRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const lines = linesRef.current?.querySelectorAll(".bio-line");
    if (lines) {
      gsap.fromTo(
        lines,
        { y: 20, opacity: 0 },
        {
          y: 0, opacity: 1, stagger: 0.08, duration: 0.7, ease: "power3.out",
          scrollTrigger: { trigger: linesRef.current, start: "top 80%", toggleActions: "play none none none" },
        }
      );
    }
  }, []);

  return (
    <div>
      {/* Section header */}
      <motion.div variants={fadeIn("", "", 0, 0.5)} className="mb-12">
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={`${styles.sectionHeadText} mt-2`}>
          About <span className="text-gradient-gold">Me</span>
        </h2>
      </motion.div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-start">
        {/* Left — bio + highlights */}
        <div>
          <div ref={linesRef} className="space-y-4 mb-10">
            <p className="bio-line text-secondary text-[16px] leading-[1.8]" style={{ opacity: 0 }}>
              I'm a Software Engineer with 3+ years of experience building enterprise applications
              that drive real business outcomes. I specialize in the Angular + .NET Core + PostgreSQL
              stack, with additional experience in Flutter for cross-platform mobile development.
            </p>
            <p className="bio-line text-secondary text-[16px] leading-[1.8]" style={{ opacity: 0 }}>
              Currently at Greater Than Educational Technologies, I've built systems serving 5,000+
              employees — from HRMS portals to complex approval management workflows. I care deeply
              about clean architecture, maintainable code, and software that actually solves problems.
            </p>
          </div>

          {/* Highlights grid */}
          <div className="grid grid-cols-2 gap-3">
            {HIGHLIGHTS.map((h, i) => (
              <motion.div
                key={i}
                variants={fadeIn("up", "spring", i * 0.08, 0.5)}
                className="p-4 rounded-xl border border-border hover:border-gold/30 transition-colors duration-200 bg-surface"
                style={{ boxShadow: "0 1px 3px rgba(0,0,0,0.04)" }}
              >
                <p className="font-mono-custom text-[10px] text-gold tracking-widest uppercase mb-1.5">
                  {h.label}
                </p>
                <p className="text-sm font-semibold text-white-100">{h.value}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Right — feature cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {FEATURES.map((feature, i) => (
            <motion.div
              key={i}
              variants={fadeIn("up", "spring", i * 0.1, 0.6)}
              whileHover={{ y: -3 }}
              transition={{ duration: 0.2 }}
              className="p-5 rounded-xl border border-border bg-surface hover:border-gold/30 transition-all duration-200"
              style={{ boxShadow: "0 1px 3px rgba(0,0,0,0.04)" }}
            >
              {/* Icon */}
              <div
                className="w-10 h-10 rounded-lg flex items-center justify-center text-lg mb-4"
                style={{ backgroundColor: `${feature.accent}14`, color: feature.accent }}
              >
                {feature.icon}
              </div>
              <h3 className="text-[15px] font-semibold text-white-100 mb-2 leading-tight">
                {feature.title}
              </h3>
              <p className="text-[13px] text-secondary leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SectionWrapper(About, "about");
