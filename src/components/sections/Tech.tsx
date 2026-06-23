import { motion } from "framer-motion";

import { SectionWrapper } from "../../hoc";
import { styles } from "../../constants/styles";
import { fadeIn } from "../../utils/motion";

interface TechItem {
  name: string;
  color: string;
}

interface Category {
  name: string;
  techs: TechItem[];
}

const CATEGORIES: Category[] = [
  {
    name: "Frontend",
    techs: [
      { name: "Angular", color: "#DD0031" },
      { name: "TypeScript", color: "#3178C6" },
      { name: "HTML5", color: "#E34F26" },
      { name: "CSS3", color: "#1572B6" },
      { name: "Bootstrap", color: "#7952B3" },
      { name: "GSAP", color: "#88CE02" },
    ],
  },
  {
    name: "Backend",
    techs: [
      { name: ".NET Core", color: "#512BD4" },
      { name: "C#", color: "#239120" },
      { name: "REST APIs", color: "#25A162" },
      { name: "SignalR", color: "#512BD4" },
      { name: "Entity Framework", color: "#6366F1" },
    ],
  },
  {
    name: "Database",
    techs: [
      { name: "PostgreSQL", color: "#336791" },
      { name: "Oracle SQL", color: "#F80000" },
      { name: "LINQ", color: "#239120" },
      { name: "SQL Server", color: "#CC2927" },
    ],
  },
  {
    name: "Tools & Mobile",
    techs: [
      { name: "Flutter", color: "#0553B1" },
      { name: "Dart", color: "#0175C2" },
      { name: "Power BI", color: "#F2C811" },
      { name: "Docker", color: "#2496ED" },
      { name: "Git", color: "#F05032" },
      { name: "Figma", color: "#F24E1E" },
    ],
  },
];

const CATEGORY_ICONS: Record<string, string> = {
  Frontend: "⬡",
  Backend: "⚙",
  Database: "◻",
  "Tools & Mobile": "◈",
};

const CATEGORY_COLORS: Record<string, string> = {
  Frontend: "#6366F1",
  Backend: "#8B5CF6",
  Database: "#0EA5E9",
  "Tools & Mobile": "#10B981",
};

const TechPill = ({ name, color }: TechItem) => (
  <motion.div
    whileHover={{ scale: 1.03, y: -2 }}
    transition={{ duration: 0.15 }}
    className="flex items-center gap-2 px-3 py-2 rounded-lg bg-surface border border-border hover:border-gold/25 transition-all duration-200"
    style={{ boxShadow: "0 1px 2px rgba(0,0,0,0.03)" }}
  >
    <div className="w-2 h-2 rounded-full flex-shrink-0" style={{ backgroundColor: color }} />
    <span className="text-[12.5px] font-medium text-white-100 whitespace-nowrap">{name}</span>
  </motion.div>
);

const CategorySection = ({
  category,
  index,
}: {
  category: Category;
  index: number;
}) => {
  const accentColor = CATEGORY_COLORS[category.name];

  return (
    <motion.div
      variants={fadeIn("up", "spring", index * 0.1, 0.6)}
      className="p-6 rounded-2xl border border-border bg-surface"
      style={{ boxShadow: "0 1px 3px rgba(0,0,0,0.04)" }}
    >
      {/* Category header */}
      <div className="flex items-center gap-3 mb-5">
        <div
          className="w-9 h-9 rounded-xl flex items-center justify-center text-base"
          style={{ backgroundColor: `${accentColor}14`, color: accentColor }}
        >
          {CATEGORY_ICONS[category.name]}
        </div>
        <div>
          <h3 className="text-[15px] font-bold text-white-100">{category.name}</h3>
          <p className="text-[11px] text-secondary font-mono-custom">{category.techs.length} technologies</p>
        </div>
      </div>

      {/* Tech pills */}
      <div className="flex flex-wrap gap-2">
        {category.techs.map((tech) => (
          <TechPill key={tech.name} {...tech} />
        ))}
      </div>
    </motion.div>
  );
};

const Tech = () => (
  <div>
    <motion.div variants={fadeIn("", "", 0, 0.5)} className="mb-12">
      <p className={styles.sectionSubText}>What I work with</p>
      <h2 className={`${styles.sectionHeadText} mt-2`}>
        Tech <span className="text-gradient-gold">Stack</span>
      </h2>
      <p className="text-secondary text-[15px] leading-relaxed mt-4 max-w-2xl">
        Technologies I use daily to build enterprise-grade applications — from frontend to infrastructure.
      </p>
    </motion.div>

    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
      {CATEGORIES.map((cat, i) => (
        <CategorySection key={cat.name} category={cat} index={i} />
      ))}
    </div>
  </div>
);

export default SectionWrapper(Tech, "tech");
