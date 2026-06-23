"use client";
import { useEffect, useRef, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export function MouseFollower() {
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);
  const dotX = useMotionValue(-100);
  const dotY = useMotionValue(-100);

  const springConfig = { damping: 25, stiffness: 200, mass: 0.5 };
  const dotSpringConfig = { damping: 40, stiffness: 400, mass: 0.3 };

  const springX = useSpring(cursorX, springConfig);
  const springY = useSpring(cursorY, springConfig);
  const dotSpringX = useSpring(dotX, dotSpringConfig);
  const dotSpringY = useSpring(dotY, dotSpringConfig);

  const [isPointer, setIsPointer] = useState(false);
  const [isHidden, setIsHidden] = useState(false);
  const [isClicking, setIsClicking] = useState(false);

  useEffect(() => {
    const moveCursor = (e: MouseEvent) => {
      cursorX.set(e.clientX - 20);
      cursorY.set(e.clientY - 20);
      dotX.set(e.clientX - 4);
      dotY.set(e.clientY - 4);
    };

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const isClickable =
        target.closest("a, button, [data-cursor='pointer'], input, textarea, select") !== null;
      setIsPointer(isClickable);
    };

    const handleMouseLeave = () => setIsHidden(true);
    const handleMouseEnter = () => setIsHidden(false);
    const handleMouseDown = () => setIsClicking(true);
    const handleMouseUp = () => setIsClicking(false);

    window.addEventListener("mousemove", moveCursor, { passive: true });
    document.addEventListener("mouseover", handleMouseOver);
    document.addEventListener("mouseleave", handleMouseLeave);
    document.addEventListener("mouseenter", handleMouseEnter);
    document.addEventListener("mousedown", handleMouseDown);
    document.addEventListener("mouseup", handleMouseUp);

    return () => {
      window.removeEventListener("mousemove", moveCursor);
      document.removeEventListener("mouseover", handleMouseOver);
      document.removeEventListener("mouseleave", handleMouseLeave);
      document.removeEventListener("mouseenter", handleMouseEnter);
      document.removeEventListener("mousedown", handleMouseDown);
      document.removeEventListener("mouseup", handleMouseUp);
    };
  }, [cursorX, cursorY, dotX, dotY]);

  return (
    <>
      {/* Outer ring */}
      <motion.div
        className="pointer-events-none fixed top-0 left-0 z-[9998] rounded-full border border-[#c9a84c]/50 mix-blend-difference"
        style={{
          x: springX,
          y: springY,
          width: 40,
          height: 40,
          scale: isPointer ? 1.5 : isClicking ? 0.8 : 1,
          opacity: isHidden ? 0 : 1,
        }}
        transition={{ scale: { type: "spring", damping: 20, stiffness: 300 } }}
      />
      {/* Inner dot */}
      <motion.div
        className="pointer-events-none fixed top-0 left-0 z-[9999] rounded-full bg-[#c9a84c]"
        style={{
          x: dotSpringX,
          y: dotSpringY,
          width: 8,
          height: 8,
          scale: isPointer ? 0.5 : isClicking ? 1.5 : 1,
          opacity: isHidden ? 0 : 1,
        }}
        transition={{ scale: { type: "spring", damping: 20, stiffness: 400 } }}
      />
    </>
  );
}
