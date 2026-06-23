import { motion } from "framer-motion";

import { SectionWrapper } from "../../hoc";
import { styles } from "../../constants/styles";
import { fadeIn } from "../../utils/motion";

interface CaseStudy {
  id: string;
  name: string;
  tagline: string;
  description: string;
  challenge: string;
  solution: string;
  tech: string[];
  impact: string;
  year: string;
  accentColor: string;
  sourceLink: string;
}

const CASE_STUDIES: CaseStudy[] = [
  {
    id: "01",
    name: "Nspira Employee Self Service Portal",
    tagline: "Enterprise HRMS · 5,000+ employees",
    description:
      "A comprehensive HR management system handling attendance, payroll processing, leave management, and employee lifecycle — deployed organization-wide at Nspira Management Services.",
    challenge:
      "Streamline complex HR operations across multiple departments with different approval workflows, compliance requirements, and real-time reporting needs.",
    solution:
      "Built a scalable HRMS with Angular frontend and .NET Core backend featuring real-time dashboards, automated multi-level workflows, and Power BI integration.",
    tech: ["Angular", ".NET Core", "PostgreSQL", "Power BI", "Bootstrap", "REST API"],
    impact: "5,000+ employees onboarded · 70% reduction in manual HR processing",
    year: "2024",
    accentColor: "#6366F1",
    sourceLink: "https://github.com/",
  },
  {
    id: "02",
    name: "NLeader Approval Management System",
    tagline: "Workflow automation · Multi-level approvals",
    description:
      "A configurable approval management system enabling dynamic multi-level hierarchical approvals with real-time notifications and complete audit trails for enterprise processes.",
    challenge:
      "Approval hierarchies varied per department with different rules, requiring flexible configuration without code changes and full traceability for compliance.",
    solution:
      "Designed a dynamic workflow engine with a visual hierarchy builder, SignalR real-time notifications, and a comprehensive audit trail with export capabilities.",
    tech: ["Angular", ".NET Core", "PostgreSQL", "SignalR", "REST API", "TypeScript"],
    impact: "60% faster approval cycles · Complete audit trail · Zero compliance gaps",
    year: "2024",
    accentColor: "#8B5CF6",
    sourceLink: "https://github.com/",
  },
  {
    id: "03",
    name: "Flight Booking Request System",
    tagline: "Cross-platform mobile · Corporate travel",
    description:
      "A Flutter-based mobile application for corporate flight booking requests with multi-level approval workflows, real-time status tracking, and push notifications.",
    challenge:
      "Provide a seamless mobile experience for travel requests with offline support, real-time sync, and integration with existing approval infrastructure.",
    solution:
      "Developed a Flutter app with .NET Core backend, implementing smart caching, push notifications via FCM, and a status tracking system integrated with NLeader.",
    tech: ["Flutter", "Dart", ".NET Core", "PostgreSQL", "FCM", "REST API"],
    impact: "Cross-platform iOS & Android · Real-time status tracking",
    year: "2023",
    accentColor: "#0EA5E9",
    sourceLink: "https://github.com/",
  },
];

const CaseStudyCard = ({ study, index }: { study: CaseStudy; index: number }) => (
  <motion.div
    variants={fadeIn("up", "spring", index * 0.12, 0.6)}
    whileHover={{ y: -4 }}
    transition={{ duration: 0.25 }}
    className="rounded-2xl bg-surface border border-border overflow-hidden hover:border-gold/25 hover:shadow-card-hover transition-all duration-300"
    style={{ boxShadow: "0 1px 3px rgba(0,0,0,0.04)" }}
  >
    {/* Color accent bar */}
    <div className="h-1" style={{ background: `linear-gradient(90deg, ${study.accentColor}, transparent)` }} />

    <div className="p-7">
      {/* Header row */}
      <div className="flex items-start justify-between gap-4 mb-4">
        <div>
          <span className="font-mono-custom text-[10px] text-secondary/60 tracking-widest uppercase">
            {study.id} · {study.year}
          </span>
          <h3 className="text-[18px] font-bold text-white-100 mt-1 leading-tight">{study.name}</h3>
          <p className="text-sm font-medium mt-0.5" style={{ color: study.accentColor }}>
            {study.tagline}
          </p>
        </div>
        <a
          href={study.sourceLink}
          target="_blank"
          rel="noopener noreferrer"
          className="flex-shrink-0 w-9 h-9 rounded-xl border border-border flex items-center justify-center hover:border-gold/30 hover:bg-gold/5 transition-all duration-200"
          aria-label="Source code"
        >
          <svg className="w-4 h-4 text-secondary" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
          </svg>
        </a>
      </div>

      {/* Description */}
      <p className="text-[13.5px] text-secondary leading-relaxed mb-5">{study.description}</p>

      {/* Challenge / Solution */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-5 p-4 rounded-xl bg-surface-elevated">
        <div>
          <p className="font-mono-custom text-[9px] tracking-[0.3em] uppercase mb-1.5" style={{ color: study.accentColor }}>
            Challenge
          </p>
          <p className="text-[12.5px] text-secondary leading-relaxed">{study.challenge}</p>
        </div>
        <div>
          <p className="font-mono-custom text-[9px] tracking-[0.3em] uppercase mb-1.5" style={{ color: study.accentColor }}>
            Solution
          </p>
          <p className="text-[12.5px] text-secondary leading-relaxed">{study.solution}</p>
        </div>
      </div>

      {/* Tech tags */}
      <div className="flex flex-wrap gap-1.5 mb-5">
        {study.tech.map((t) => (
          <span
            key={t}
            className="text-[11px] px-2.5 py-1 rounded-md font-mono-custom border border-gold/20 text-gold/80"
            style={{ background: "rgba(99,102,241,0.05)" }}
          >
            {t}
          </span>
        ))}
      </div>

      {/* Impact */}
      <div
        className="flex items-center gap-3 pt-4 border-t border-border"
      >
        <div className="w-2 h-2 rounded-full flex-shrink-0" style={{ backgroundColor: study.accentColor }} />
        <p className="text-[13px] font-medium text-white-100">{study.impact}</p>
      </div>
    </div>
  </motion.div>
);

const Works = () => (
  <div>
    <motion.div variants={fadeIn("", "", 0, 0.5)} className="mb-12">
      <p className={styles.sectionSubText}>My work</p>
      <h2 className={`${styles.sectionHeadText} mt-2`}>
        Featured <span className="text-gradient-gold">Projects</span>
      </h2>
      <p className="text-secondary text-[15px] leading-relaxed mt-4 max-w-2xl">
        Enterprise applications built at scale — real problems, real users, measurable outcomes.
      </p>
    </motion.div>

    <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
      {/* First card spans full width on large screens */}
      <div className="lg:col-span-2">
        <CaseStudyCard study={CASE_STUDIES[0]} index={0} />
      </div>
      {CASE_STUDIES.slice(1).map((study, i) => (
        <CaseStudyCard key={study.id} study={study} index={i + 1} />
      ))}
    </div>
  </div>
);

export default SectionWrapper(Works, "projects");
