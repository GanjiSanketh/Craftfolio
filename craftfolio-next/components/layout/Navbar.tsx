"use client";
import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { gsap } from "gsap";
import { MagneticButton } from "@/components/animations/MagneticButton";
import { navLinks } from "@/data/portfolio";
import { getLenis } from "@/hooks/useLenis";

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");
  const navRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!navRef.current) return;
    gsap.fromTo(
      navRef.current,
      { y: -80, opacity: 0 },
      { y: 0, opacity: 1, duration: 1.2, ease: "power4.out", delay: 3.5 }
    );
  }, []);

  const scrollTo = (href: string) => {
    const id = href.replace("#", "");
    const el = document.getElementById(id);
    if (!el) return;
    const lenis = getLenis();
    if (lenis) {
      lenis.scrollTo(el, { duration: 1.6, easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)) });
    } else {
      el.scrollIntoView({ behavior: "smooth" });
    }
    setIsMobileOpen(false);
  };

  return (
    <>
      <motion.nav
        ref={navRef}
        className={`fixed top-0 left-0 right-0 z-[1000] px-6 md:px-12 transition-all duration-500 ${
          isScrolled ? "py-4 glass border-b border-white/5" : "py-6"
        }`}
        style={{ opacity: 0 }}
      >
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          {/* Logo */}
          <MagneticButton strength={0.3} onClick={() => scrollTo("#hero")}>
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-full border border-[#c9a84c]/60 flex items-center justify-center">
                <span className="text-[#c9a84c] text-xs font-mono font-bold">SG</span>
              </div>
              <span className="text-sm font-mono text-[#888] hidden md:block tracking-widest uppercase">
                Sanketh Ganji
              </span>
            </div>
          </MagneticButton>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <MagneticButton key={link.id} strength={0.2} onClick={() => scrollTo(link.href)}>
                <span
                  className={`text-xs font-mono tracking-widest uppercase transition-colors duration-300 ${
                    activeSection === link.id
                      ? "text-[#c9a84c]"
                      : "text-[#555] hover:text-[#888]"
                  }`}
                >
                  {link.label}
                </span>
              </MagneticButton>
            ))}
          </div>

          {/* CTA */}
          <MagneticButton
            strength={0.3}
            className="hidden md:block"
            onClick={() => scrollTo("#contact")}
          >
            <div className="relative px-5 py-2 border border-[#c9a84c]/40 rounded-full overflow-hidden group">
              <span className="text-xs font-mono tracking-widest text-[#c9a84c] uppercase relative z-10">
                Hire Me
              </span>
              <div className="absolute inset-0 bg-[#c9a84c] scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-500" />
              <span className="absolute inset-0 flex items-center justify-center text-xs font-mono tracking-widest text-black uppercase opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-20">
                Hire Me
              </span>
            </div>
          </MagneticButton>

          {/* Mobile Toggle */}
          <button
            className="md:hidden flex flex-col gap-1.5 p-2"
            onClick={() => setIsMobileOpen(!isMobileOpen)}
            aria-label="Toggle menu"
            data-cursor="pointer"
          >
            <span
              className={`block w-6 h-px bg-[#c9a84c] transition-all duration-300 ${isMobileOpen ? "rotate-45 translate-y-2" : ""}`}
            />
            <span
              className={`block w-4 h-px bg-[#888] transition-all duration-300 ${isMobileOpen ? "opacity-0" : ""}`}
            />
            <span
              className={`block w-6 h-px bg-[#c9a84c] transition-all duration-300 ${isMobileOpen ? "-rotate-45 -translate-y-2" : ""}`}
            />
          </button>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3, ease: [0.19, 1, 0.22, 1] }}
            className="fixed top-0 left-0 right-0 bottom-0 z-[999] glass-strong flex flex-col items-center justify-center gap-8"
          >
            {navLinks.map((link, i) => (
              <motion.button
                key={link.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.06, ease: [0.19, 1, 0.22, 1] }}
                onClick={() => scrollTo(link.href)}
                className="text-3xl font-display text-[#f0ede8] hover:text-[#c9a84c] transition-colors"
                data-cursor="pointer"
              >
                {link.label}
              </motion.button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
