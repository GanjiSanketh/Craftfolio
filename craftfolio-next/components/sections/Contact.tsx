"use client";
import { useRef, useState, FormEvent } from "react";
import { motion } from "framer-motion";
import { ScrollReveal } from "@/components/animations/ScrollReveal";
import { MagneticButton } from "@/components/animations/MagneticButton";
import { siteConfig, socialLinks } from "@/data/portfolio";

type FormState = "idle" | "submitting" | "success" | "error";

export function Contact() {
  const [formState, setFormState] = useState<FormState>("idle");
  const [focused, setFocused] = useState<string | null>(null);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setFormState("submitting");

    // EmailJS integration point
    await new Promise((r) => setTimeout(r, 1500));
    setFormState("success");
  };

  const fields = [
    { name: "name", label: "Your Name", type: "text", placeholder: "John Doe" },
    { name: "email", label: "Email Address", type: "email", placeholder: "john@example.com" },
    { name: "subject", label: "Subject", type: "text", placeholder: "Project Inquiry" },
  ];

  return (
    <section id="contact" className="relative section-padding overflow-hidden">
      {/* Atmospheric glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[400px] bg-[#c9a84c]/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Header */}
        <ScrollReveal className="mb-16 text-center">
          <p className="font-mono text-xs text-[#c9a84c] tracking-[0.4em] uppercase mb-4">
            08. Contact
          </p>
          <h2 className="font-display text-5xl md:text-7xl font-bold text-[#f0ede8] leading-tight mb-6">
            Let's work{" "}
            <span className="text-gradient-gold">together</span>
          </h2>
          <p className="text-[#888] text-base md:text-lg max-w-lg mx-auto">
            Have a project in mind? I'd love to hear about it. Send me a message
            and let's build something great.
          </p>
        </ScrollReveal>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
          {/* Contact info */}
          <ScrollReveal direction="right" className="lg:col-span-2 space-y-8">
            <div>
              <h3 className="font-display text-2xl font-bold text-[#f0ede8] mb-6">
                Get in touch
              </h3>

              <div className="space-y-4">
                <div className="flex items-start gap-4 p-4 rounded-xl glass border border-white/5">
                  <div className="w-10 h-10 rounded-full border border-[#c9a84c]/30 flex items-center justify-center flex-shrink-0">
                    <svg className="w-4 h-4 text-[#c9a84c]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <p className="font-mono text-xs text-[#555] tracking-widest uppercase mb-1">Email</p>
                    <a
                      href={`mailto:${siteConfig.email}`}
                      className="text-sm text-[#f0ede8] hover:text-[#c9a84c] transition-colors"
                      data-cursor="pointer"
                    >
                      {siteConfig.email}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-4 rounded-xl glass border border-white/5">
                  <div className="w-10 h-10 rounded-full border border-[#c9a84c]/30 flex items-center justify-center flex-shrink-0">
                    <svg className="w-4 h-4 text-[#c9a84c]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div>
                    <p className="font-mono text-xs text-[#555] tracking-widest uppercase mb-1">Location</p>
                    <p className="text-sm text-[#f0ede8]">{siteConfig.location}</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Social links */}
            <div>
              <p className="font-mono text-xs text-[#555] tracking-widest uppercase mb-4">
                Find me on
              </p>
              <div className="flex gap-3">
                {socialLinks.map((link) => (
                  <MagneticButton key={link.platform} strength={0.4}>
                    <a
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 rounded-full border border-[#222] hover:border-[#c9a84c]/40 flex items-center justify-center transition-all duration-300 hover:bg-[#c9a84c]/5"
                      data-cursor="pointer"
                      aria-label={link.platform}
                    >
                      <SocialIcon icon={link.icon} />
                    </a>
                  </MagneticButton>
                ))}
              </div>
            </div>
          </ScrollReveal>

          {/* Form */}
          <ScrollReveal delay={0.1} className="lg:col-span-3">
            {formState === "success" ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="h-full flex flex-col items-center justify-center text-center p-12 rounded-2xl glass border border-[#c9a84c]/20"
              >
                <div className="w-16 h-16 rounded-full border-2 border-[#c9a84c] flex items-center justify-center mb-6">
                  <svg className="w-8 h-8 text-[#c9a84c]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h3 className="font-display text-2xl font-bold text-[#f0ede8] mb-3">Message Sent!</h3>
                <p className="text-[#888]">Thank you for reaching out. I'll get back to you shortly.</p>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                {fields.map((field) => (
                  <FormField
                    key={field.name}
                    {...field}
                    focused={focused === field.name}
                    onFocus={() => setFocused(field.name)}
                    onBlur={() => setFocused(null)}
                  />
                ))}

                {/* Message */}
                <div className="relative">
                  <label className="font-mono text-xs text-[#555] tracking-widest uppercase mb-2 block">
                    Message
                  </label>
                  <textarea
                    name="message"
                    rows={5}
                    required
                    placeholder="Tell me about your project..."
                    onFocus={() => setFocused("message")}
                    onBlur={() => setFocused(null)}
                    className={`w-full px-4 py-3 bg-[#0a0a0a] rounded-xl border text-sm text-[#f0ede8] placeholder-[#333] outline-none transition-all duration-300 resize-none font-sans ${
                      focused === "message"
                        ? "border-[#c9a84c]/50"
                        : "border-[#1a1a1a] hover:border-[#2a2a2a]"
                    }`}
                  />
                </div>

                <MagneticButton strength={0.2} className="w-full">
                  <button
                    type="submit"
                    disabled={formState === "submitting"}
                    className="w-full py-4 bg-[#c9a84c] rounded-xl font-mono text-sm font-bold text-black tracking-widest uppercase hover:bg-[#e8c76a] transition-colors duration-300 disabled:opacity-60 disabled:cursor-not-allowed relative overflow-hidden"
                    data-cursor="pointer"
                  >
                    {formState === "submitting" ? (
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
                </MagneticButton>
              </form>
            )}
          </ScrollReveal>
        </div>
      </div>

      {/* Footer */}
      <div className="relative z-10 max-w-7xl mx-auto mt-24 pt-8 border-t border-[#111] flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="font-mono text-xs text-[#333] tracking-widest">
          © 2025 Sanketh Ganji. Built with Next.js + Three.js.
        </p>
        <p className="font-mono text-xs text-[#333] tracking-widest">
          Designed & developed with{" "}
          <span className="text-[#c9a84c]">♦</span> craftsmanship.
        </p>
      </div>
    </section>
  );
}

function FormField({
  name,
  label,
  type,
  placeholder,
  focused,
  onFocus,
  onBlur,
}: {
  name: string;
  label: string;
  type: string;
  placeholder: string;
  focused: boolean;
  onFocus: () => void;
  onBlur: () => void;
}) {
  return (
    <div>
      <label className="font-mono text-xs text-[#555] tracking-widest uppercase mb-2 block">
        {label}
      </label>
      <input
        type={type}
        name={name}
        required
        placeholder={placeholder}
        onFocus={onFocus}
        onBlur={onBlur}
        className={`w-full px-4 py-3 bg-[#0a0a0a] rounded-xl border text-sm text-[#f0ede8] placeholder-[#333] outline-none transition-all duration-300 ${
          focused
            ? "border-[#c9a84c]/50"
            : "border-[#1a1a1a] hover:border-[#2a2a2a]"
        }`}
      />
    </div>
  );
}

function SocialIcon({ icon }: { icon: string }) {
  if (icon === "github") {
    return (
      <svg className="w-4 h-4 text-[#888]" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
      </svg>
    );
  }
  if (icon === "linkedin") {
    return (
      <svg className="w-4 h-4 text-[#888]" fill="currentColor" viewBox="0 0 24 24">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
      </svg>
    );
  }
  return (
    <svg className="w-4 h-4 text-[#888]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
    </svg>
  );
}
