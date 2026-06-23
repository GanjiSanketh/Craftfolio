import { useRef, useState, FormEvent } from "react";
import { motion } from "framer-motion";

import { SectionWrapper } from "../../hoc";
import { fadeIn, slideIn } from "../../utils/motion";
import { config } from "../../constants/config";
import { styles } from "../../constants/styles";
import resume from "../../assets/company/SANKETH G.pdf";

type FormState = "idle" | "sending" | "sent" | "error";

const SOCIAL_LINKS = [
  {
    label: "Email",
    value: config.html.email,
    href: `mailto:${config.html.email}`,
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={1.75} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
      </svg>
    ),
    external: false,
  },
  {
    label: "LinkedIn",
    value: "sanketh-g-818b35270",
    href: "https://www.linkedin.com/in/sanketh-g-818b35270/",
    icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
      </svg>
    ),
    external: true,
  },
  {
    label: "GitHub",
    value: "github.com/sankethg",
    href: "https://github.com/",
    icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
      </svg>
    ),
    external: true,
  },
];

const Contact = () => {
  const formRef = useRef<HTMLFormElement>(null);
  const [formState, setFormState] = useState<FormState>("idle");
  const [focused, setFocused] = useState<string | null>(null);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setFormState("sending");
    await new Promise((r) => setTimeout(r, 1400));
    setFormState("sent");
  };

  const inputBase =
    "w-full px-4 py-3 rounded-xl text-sm text-white-100 bg-surface border outline-none transition-all duration-200 placeholder:text-secondary/50";

  const inputClass = (name: string) =>
    `${inputBase} ${
      focused === name
        ? "border-gold/50 ring-2 ring-gold/15"
        : "border-border hover:border-border-strong"
    }`;

  return (
    <div>
      {/* Header */}
      <motion.div variants={fadeIn("", "", 0, 0.5)} className="mb-12">
        <p className={styles.sectionSubText}>Get in touch</p>
        <h2 className={`${styles.sectionHeadText} mt-2`}>
          Let's work <span className="text-gradient-gold">together</span>.
        </h2>
        <p className="text-secondary text-[15px] leading-relaxed mt-4 max-w-xl">
          I'm always open to discussing new opportunities, interesting projects, or just to say hi.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 xl:grid-cols-5 gap-12">
        {/* Left — contact info */}
        <motion.div
          variants={slideIn("left", "tween", 0.1, 0.8)}
          className="xl:col-span-2 space-y-8"
        >
          {/* Social links */}
          <div className="space-y-3">
            {SOCIAL_LINKS.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target={link.external ? "_blank" : undefined}
                rel={link.external ? "noopener noreferrer" : undefined}
                className="flex items-center gap-4 p-4 rounded-xl border border-border bg-surface hover:border-gold/30 hover:shadow-gold-sm transition-all duration-200 group"
                style={{ boxShadow: "0 1px 3px rgba(0,0,0,0.04)" }}
              >
                <div className="w-10 h-10 rounded-xl bg-gold/8 text-gold flex items-center justify-center flex-shrink-0 group-hover:bg-gold/15 transition-colors duration-200">
                  {link.icon}
                </div>
                <div>
                  <p className="text-[11px] font-mono-custom text-secondary/60 tracking-widest uppercase">{link.label}</p>
                  <p className="text-sm font-medium text-white-100 truncate">{link.value}</p>
                </div>
                <svg className="w-4 h-4 text-secondary ml-auto opacity-0 group-hover:opacity-100 transition-opacity" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                </svg>
              </a>
            ))}
          </div>

          {/* Resume download */}
          <a
            href={resume}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-between gap-4 p-4 rounded-xl border border-gold/30 bg-gold/5 hover:bg-gold/10 transition-all duration-200 group"
          >
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-gold/15 text-gold flex items-center justify-center flex-shrink-0">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={1.75} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12L12 16.5m0 0L7.5 12m4.5 4.5V3" />
                </svg>
              </div>
              <div>
                <p className="text-[11px] font-mono-custom text-secondary/60 tracking-widest uppercase">Resume</p>
                <p className="text-sm font-semibold text-gold">Download CV</p>
              </div>
            </div>
            <svg className="w-4 h-4 text-gold" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
            </svg>
          </a>
        </motion.div>

        {/* Right — contact form */}
        <motion.div
          variants={slideIn("right", "tween", 0.1, 0.8)}
          className="xl:col-span-3"
        >
          {formState === "sent" ? (
            <div className="h-full flex flex-col items-center justify-center text-center py-16 border border-gold/20 rounded-2xl bg-surface">
              <div className="w-14 h-14 rounded-full border-2 border-gold bg-gold/10 flex items-center justify-center mb-5">
                <svg className="w-6 h-6 text-gold" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-white-100 mb-2">Message sent!</h3>
              <p className="text-secondary text-sm">I'll get back to you very soon.</p>
            </div>
          ) : (
            <form ref={formRef} onSubmit={handleSubmit} className="space-y-5">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label className="block text-[11px] font-mono-custom text-secondary/60 tracking-widest uppercase mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    required
                    placeholder={config.contact.form.name.placeholder}
                    onFocus={() => setFocused("name")}
                    onBlur={() => setFocused(null)}
                    className={inputClass("name")}
                  />
                </div>
                <div>
                  <label className="block text-[11px] font-mono-custom text-secondary/60 tracking-widest uppercase mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    required
                    placeholder={config.contact.form.email.placeholder}
                    onFocus={() => setFocused("email")}
                    onBlur={() => setFocused(null)}
                    className={inputClass("email")}
                  />
                </div>
              </div>

              <div>
                <label className="block text-[11px] font-mono-custom text-secondary/60 tracking-widest uppercase mb-2">
                  Message
                </label>
                <textarea
                  name="message"
                  rows={5}
                  required
                  placeholder={config.contact.form.message.placeholder}
                  onFocus={() => setFocused("message")}
                  onBlur={() => setFocused(null)}
                  className={`${inputClass("message")} resize-none`}
                />
              </div>

              <button
                type="submit"
                disabled={formState === "sending"}
                className="w-full py-3.5 rounded-xl bg-gold text-white text-sm font-semibold hover:bg-gold-light transition-colors duration-200 disabled:opacity-60 disabled:cursor-not-allowed shadow-indigo"
              >
                {formState === "sending" ? (
                  <span className="flex items-center justify-center gap-2">
                    <svg className="w-4 h-4 animate-spin" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                    </svg>
                    Sending...
                  </span>
                ) : (
                  "Send Message"
                )}
              </button>
            </form>
          )}
        </motion.div>
      </div>

      {/* Footer */}
      <div className="mt-20 pt-8 border-t border-border flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-[12px] text-secondary/50 font-mono-custom tracking-widest">
          © 2025 Sanketh Ganji. All rights reserved.
        </p>
        <p className="text-[12px] text-secondary/50 font-mono-custom tracking-widest">
          Built with React + Framer Motion + GSAP
        </p>
      </div>
    </div>
  );
};

export default SectionWrapper(Contact, "contact");
