import { useRef, useEffect, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { motion } from "framer-motion";

import { experiences } from "../../constants";
import { SectionWrapper } from "../../hoc";
import { styles } from "../../constants/styles";
import { fadeIn } from "../../utils/motion";
import { TExperience } from "../../types";

gsap.registerPlugin(ScrollTrigger);

const ExperienceCard = ({
  experience,
  index,
  isActive,
}: {
  experience: TExperience;
  index: number;
  isActive: boolean;
}) => (
  <div
    className={`exp-card relative pl-14 md:pl-0 md:w-1/2 ${
      index % 2 === 0 ? "md:pr-14 md:text-right md:ml-0" : "md:pl-14 md:ml-auto"
    }`}
  >
    {/* Timeline dot */}
    <div
      className={`absolute top-6 w-3.5 h-3.5 rounded-full border-2 transition-all duration-500 z-10 ${
        isActive ? "border-gold bg-gold/20 shadow-gold-sm" : "border-border bg-surface-elevated"
      } ${
        index % 2 === 0
          ? "left-[21px] md:left-auto md:-right-[7px]"
          : "left-[21px] md:-left-[7px]"
      }`}
    />

    {/* Card */}
    <div className="group mb-10 p-6 rounded-2xl bg-surface border border-border hover:border-gold/25 hover:shadow-card-hover transition-all duration-300">
      {/* Period badge */}
      <span className="inline-block font-mono-custom text-[11px] text-gold tracking-widest uppercase mb-3">
        {experience.date}
      </span>

      {/* Company + role */}
      <div className={`flex items-center gap-3 mb-4 ${index % 2 === 0 ? "md:flex-row-reverse" : ""}`}>
        <div
          className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0 border border-border"
          style={{ backgroundColor: experience.iconBg }}
        >
          <img src={experience.icon} alt={experience.companyName} className="w-6 h-6 object-contain" />
        </div>
        <div>
          <h3 className="text-[17px] font-bold text-white-100 leading-tight">{experience.title}</h3>
          <p className="text-sm text-gold/90 font-medium">{experience.companyName}</p>
        </div>
      </div>

      {/* Points */}
      <ul className="space-y-2">
        {experience.points.map((point, pi) => (
          <li
            key={pi}
            className={`text-[13px] text-secondary leading-relaxed flex items-start gap-2 ${
              index % 2 === 0 ? "md:flex-row-reverse md:text-right" : ""
            }`}
          >
            <span className="text-gold/60 mt-0.5 flex-shrink-0 text-[10px]">▸</span>
            {point}
          </li>
        ))}
      </ul>
    </div>
  </div>
);

const Experience = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const lineRef = useRef<HTMLDivElement>(null);
  const [activeIdx, setActiveIdx] = useState(0);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.set(lineRef.current, { scaleY: 0, transformOrigin: "top center" });
      gsap.to(lineRef.current as gsap.TweenTarget, {
        scaleY: 1,
        ease: "none",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 65%",
          end: "bottom 65%",
          scrub: true,
        },
      });

      const cards = sectionRef.current?.querySelectorAll(".exp-card");
      cards?.forEach((card, i) => {
        gsap.fromTo(
          card,
          { x: i % 2 === 0 ? -40 : 40, opacity: 0 },
          {
            x: 0, opacity: 1, duration: 0.8, ease: "power3.out",
            scrollTrigger: {
              trigger: card,
              start: "top 82%",
              toggleActions: "play none none none",
              onEnter: () => setActiveIdx(i),
            },
          }
        );
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={sectionRef}>
      <motion.div variants={fadeIn("", "", 0, 0.5)} className="mb-14">
        <p className={styles.sectionSubText}>My professional journey</p>
        <h2 className={`${styles.sectionHeadText} mt-2`}>
          Work <span className="text-gradient-gold">Experience</span>
        </h2>
      </motion.div>

      <div className="relative">
        {/* Timeline line */}
        <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-px bg-border md:-translate-x-px">
          <div
            ref={lineRef}
            className="absolute inset-0 bg-gradient-to-b from-gold via-gold/40 to-transparent"
          />
        </div>

        <div className="space-y-0">
          {experiences.map((exp, i) => (
            <ExperienceCard
              key={`exp-${i}`}
              experience={exp}
              index={i}
              isActive={activeIdx >= i}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default SectionWrapper(Experience, "work");
