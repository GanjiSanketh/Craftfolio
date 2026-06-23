import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";

interface PreloaderProps {
  onComplete: () => void;
}

const Preloader = ({ onComplete }: PreloaderProps) => {
  const [count, setCount] = useState(0);
  const panelRef = useRef<HTMLDivElement>(null);
  const counterRef = useRef<HTMLDivElement>(null);
  const brandRef = useRef<HTMLDivElement>(null);
  const barRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let raf: number;
    let start = 0;
    const duration = 2000;

    const tick = (ts: number) => {
      if (!start) start = ts;
      const elapsed = ts - start;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(eased * 100));

      if (progress < 1) {
        raf = requestAnimationFrame(tick);
      } else {
        setCount(100);
        exit();
      }
    };

    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, []);

  const exit = () => {
    const tl = gsap.timeline({ onComplete });
    tl.to([brandRef.current, counterRef.current], {
      y: -30,
      opacity: 0,
      stagger: 0.04,
      duration: 0.45,
      ease: "power3.in",
    }).to(
      panelRef.current,
      { y: "-100%", duration: 0.9, ease: "power4.inOut" },
      "-=0.1"
    );
  };

  return (
    <div
      ref={panelRef}
      className="fixed inset-0 z-[9999] bg-primary flex flex-col items-center justify-center"
    >
      {/* Brand */}
      <div ref={brandRef} className="text-center mb-10">
        <p className="font-mono-custom text-[10px] text-gold tracking-[0.5em] uppercase mb-3">
          Portfolio
        </p>
        <h1 className="text-4xl md:text-5xl font-bold text-white-100 tracking-tight">
          Sanketh<span className="text-gold">.</span>
        </h1>
      </div>

      {/* Counter */}
      <div ref={counterRef} className="flex items-end gap-1">
        <span className="text-[clamp(4rem,14vw,8rem)] font-extrabold text-white-100 tabular-nums leading-none">
          {String(count).padStart(2, "0")}
        </span>
        <span className="text-gold text-2xl mb-3 font-bold">%</span>
      </div>

      {/* Progress bar */}
      <div className="mt-8 w-48 h-[2px] bg-black-100 overflow-hidden rounded-full">
        <div
          ref={barRef}
          className="h-full rounded-full transition-[width] duration-75 ease-linear"
          style={{ width: `${count}%`, background: "linear-gradient(90deg, #6366F1, #818CF8)" }}
        />
      </div>

      {/* Status */}
      <p className="font-mono-custom text-[10px] text-secondary tracking-widest uppercase mt-5">
        {count < 40 ? "Initializing..." : count < 80 ? "Loading assets..." : "Ready"}
      </p>

      {/* Corner markers */}
      <span className="absolute top-8 left-8 font-mono-custom text-[10px] text-black-200 tracking-widest">
        v2.0
      </span>
      <span className="absolute bottom-8 right-8 font-mono-custom text-[10px] text-black-200 tracking-widest">
        2025
      </span>
    </div>
  );
};

export default Preloader;
