"use client";
import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { motion, AnimatePresence } from "framer-motion";

interface PreloaderProps {
  onComplete: () => void;
}

export function Preloader({ onComplete }: PreloaderProps) {
  const [count, setCount] = useState(0);
  const [isVisible, setIsVisible] = useState(true);
  const containerRef = useRef<HTMLDivElement>(null);
  const barRef = useRef<HTMLDivElement>(null);
  const lineRef = useRef<HTMLDivElement>(null);
  const panelRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let frame: number;
    let start = 0;
    const duration = 2200;

    const animate = (timestamp: number) => {
      if (!start) start = timestamp;
      const elapsed = timestamp - start;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(eased * 100));

      if (progress < 1) {
        frame = requestAnimationFrame(animate);
      } else {
        setCount(100);
        exitAnimation();
      }
    };

    frame = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(frame);
  }, []);

  const exitAnimation = () => {
    if (!containerRef.current) return;

    const tl = gsap.timeline({
      onComplete: () => {
        setIsVisible(false);
        onComplete();
      },
    });

    tl.to(barRef.current, { scaleX: 1, duration: 0.3, ease: "power2.out" })
      .to(lineRef.current, { scaleX: 1, transformOrigin: "left center", duration: 0.4, ease: "power3.out" }, "-=0.1")
      .to(containerRef.current?.querySelectorAll(".pre-text"), {
        y: -40,
        opacity: 0,
        stagger: 0.04,
        duration: 0.5,
        ease: "power3.in",
      })
      .to(panelRef.current, {
        y: "-100%",
        duration: 1.0,
        ease: "power4.inOut",
      }, "-=0.2");
  };

  if (!isVisible) return null;

  return (
    <div
      ref={panelRef}
      className="fixed inset-0 z-[9999] bg-[#030303] flex flex-col items-center justify-center overflow-hidden"
    >
      {/* Horizontal line */}
      <div ref={lineRef} className="absolute bottom-0 left-0 right-0 h-px bg-[#c9a84c]/30 scale-x-0" />

      {/* Content */}
      <div ref={containerRef} className="relative text-center">
        {/* Brand */}
        <div className="pre-text mb-16">
          <p className="font-mono text-xs tracking-[0.4em] text-[#444] uppercase mb-3">
            Portfolio
          </p>
          <h1 className="font-display text-4xl md:text-6xl text-[#f0ede8] tracking-tight">
            Sanketh<span className="text-[#c9a84c]">.</span>
          </h1>
        </div>

        {/* Counter */}
        <div className="pre-text flex items-end gap-1">
          <span className="font-mono text-7xl md:text-9xl font-bold text-[#f0ede8] tabular-nums leading-none">
            {String(count).padStart(2, "0")}
          </span>
          <span className="font-mono text-2xl text-[#c9a84c] mb-2">%</span>
        </div>

        {/* Progress bar */}
        <div className="pre-text mt-8 w-48 mx-auto h-px bg-[#1a1a1a] relative overflow-hidden">
          <div
            ref={barRef}
            className="absolute inset-y-0 left-0 bg-gradient-to-r from-[#c9a84c] to-[#e8c76a]"
            style={{ width: `${count}%`, transition: "width 0.05s linear" }}
          />
        </div>

        {/* Status */}
        <p className="pre-text font-mono text-xs text-[#444] tracking-widest uppercase mt-6">
          {count < 30
            ? "Initializing..."
            : count < 60
            ? "Loading assets..."
            : count < 90
            ? "Building experience..."
            : "Ready"}
        </p>
      </div>

      {/* Corner decorations */}
      <div className="absolute top-8 left-8 pre-text">
        <p className="font-mono text-xs text-[#333] tracking-widest">v2.0</p>
      </div>
      <div className="absolute bottom-8 right-8 pre-text">
        <p className="font-mono text-xs text-[#333] tracking-widest">2025</p>
      </div>
    </div>
  );
}
