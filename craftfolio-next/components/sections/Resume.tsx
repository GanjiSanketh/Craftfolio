"use client";
import { ScrollReveal } from "@/components/animations/ScrollReveal";
import { MagneticButton } from "@/components/animations/MagneticButton";
import { siteConfig } from "@/data/portfolio";

export function Resume() {
  return (
    <section id="resume" className="relative section-padding overflow-hidden">
      <div className="relative z-10 max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12 p-10 md:p-16 rounded-3xl glass border border-white/5 relative overflow-hidden">
          {/* Background decoration */}
          <div className="absolute inset-0 bg-gradient-to-br from-[#c9a84c]/3 to-[#6c63ff]/3" />
          <div className="absolute top-0 right-0 w-64 h-64 rounded-full bg-[#c9a84c]/5 blur-3xl" />

          <ScrollReveal className="relative z-10">
            <p className="font-mono text-xs text-[#c9a84c] tracking-[0.4em] uppercase mb-4">
              07. Resume
            </p>
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-[#f0ede8] mb-4 leading-tight">
              Want to know more?
            </h2>
            <p className="text-[#888] text-base max-w-lg">
              Download my full resume to see my complete work history, education,
              and technical skills.
            </p>
          </ScrollReveal>

          <ScrollReveal delay={0.15} direction="left" className="relative z-10">
            <MagneticButton strength={0.4}>
              <a
                href={siteConfig.resumeUrl}
                download
                className="group relative flex items-center gap-4 px-10 py-5 bg-[#c9a84c] rounded-full overflow-hidden"
                data-cursor="pointer"
              >
                <div className="absolute inset-0 bg-[#e8c76a] scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-500" />
                <span className="font-mono text-sm font-bold text-black tracking-widest uppercase relative z-10">
                  Download Resume
                </span>
                <svg
                  className="w-5 h-5 text-black relative z-10 group-hover:translate-y-0.5 transition-transform"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 4v12m0 0l-4-4m4 4l4-4M4 20h16"
                  />
                </svg>
              </a>
            </MagneticButton>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
