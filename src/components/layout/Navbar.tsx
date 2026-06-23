import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { gsap } from "gsap";

import { navLinks } from "../../constants";
import { getLenis } from "../../hooks/useLenis";

const Navbar = () => {
  const [active, setActive] = useState<string>("");
  const [toggle, setToggle] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const navRef = useRef<HTMLElement>(null);

  useEffect(() => {
    gsap.fromTo(
      navRef.current,
      { y: -70, opacity: 0 },
      { y: 0, opacity: 1, duration: 1.0, ease: "power4.out", delay: 0.2 }
    );
  }, []);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 60);
      if (window.scrollY <= 60) setActive("");
      document.querySelectorAll("section[id]").forEach((sec) => {
        const id = sec.getAttribute("id") || "";
        const h = (sec as HTMLElement).offsetHeight;
        const top = sec.getBoundingClientRect().top - h * 0.2;
        if (top < 0 && top + h > 0) setActive(id);
      });
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (!el) return;
    const lenis = getLenis();
    if (lenis) lenis.scrollTo(el, { duration: 1.4 });
    else el.scrollIntoView({ behavior: "smooth" });
    setToggle(false);
  };

  return (
    <>
      <motion.nav
        ref={navRef}
        style={{ opacity: 0 }}
        className={`fixed top-0 z-50 w-full px-6 sm:px-16 transition-all duration-300 ${
          scrolled
            ? "py-3 bg-white/90 backdrop-blur-md border-b border-border shadow-sm"
            : "py-5 bg-transparent"
        }`}
      >
        <div className="mx-auto flex w-full max-w-7xl items-center justify-between">
          {/* Logo */}
          <Link to="/" onClick={() => window.scrollTo(0, 0)}>
            <div className="flex items-center gap-2.5 group">
              <div className="w-8 h-8 rounded-lg bg-gold/10 border border-gold/20 flex items-center justify-center group-hover:bg-gold/15 transition-colors duration-200">
                <span className="font-mono-custom text-gold text-xs font-bold">SG</span>
              </div>
              <span className="hidden md:block text-sm font-semibold text-white-100 tracking-tight group-hover:text-gold transition-colors duration-200">
                Sanketh Ganji
              </span>
            </div>
          </Link>

          {/* Desktop nav links */}
          <ul className="hidden sm:flex items-center gap-1">
            {navLinks.map((nav) => (
              <li key={nav.id}>
                <button
                  onClick={() => scrollTo(nav.id)}
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors duration-200 ${
                    active === nav.id
                      ? "text-gold bg-gold/8"
                      : "text-secondary hover:text-white-100 hover:bg-surface-subtle"
                  }`}
                >
                  {nav.title}
                </button>
              </li>
            ))}
          </ul>

          {/* CTA button */}
          <button
            className="hidden sm:flex items-center gap-2 px-5 py-2.5 rounded-lg bg-gold text-white text-sm font-semibold hover:bg-gold-light transition-colors duration-200 shadow-indigo"
            onClick={() => scrollTo("contact")}
          >
            Hire Me
          </button>

          {/* Mobile hamburger */}
          <button
            className="sm:hidden flex flex-col gap-1.5 p-1"
            onClick={() => setToggle(!toggle)}
            aria-label="Menu"
          >
            <span className={`block w-6 h-0.5 bg-white-100 transition-all duration-300 ${toggle ? "rotate-45 translate-y-2" : ""}`} />
            <span className={`block w-4 h-0.5 bg-secondary transition-all duration-300 ${toggle ? "opacity-0" : ""}`} />
            <span className={`block w-6 h-0.5 bg-white-100 transition-all duration-300 ${toggle ? "-rotate-45 -translate-y-2" : ""}`} />
          </button>
        </div>
      </motion.nav>

      {/* Mobile fullscreen menu */}
      <AnimatePresence>
        {toggle && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-40 bg-white flex flex-col items-center justify-center gap-8"
          >
            <button
              className="absolute top-6 right-6 p-2"
              onClick={() => setToggle(false)}
              aria-label="Close menu"
            >
              <span className="block w-6 h-0.5 bg-white-100 rotate-45 translate-y-0.5" />
              <span className="block w-6 h-0.5 bg-white-100 -rotate-45" />
            </button>

            {navLinks.map((nav, i) => (
              <motion.button
                key={nav.id}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.06 }}
                onClick={() => scrollTo(nav.id)}
                className="text-3xl font-bold text-white-100 hover:text-gold transition-colors"
              >
                {nav.title}
              </motion.button>
            ))}

            <motion.button
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: navLinks.length * 0.06 }}
              onClick={() => scrollTo("contact")}
              className="mt-4 px-8 py-3 rounded-xl bg-gold text-white text-lg font-semibold"
            >
              Hire Me
            </motion.button>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
