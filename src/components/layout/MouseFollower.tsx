import { useEffect, useRef, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

const MouseFollower = () => {
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);
  const dotX = useMotionValue(-100);
  const dotY = useMotionValue(-100);

  const springX = useSpring(cursorX, { damping: 25, stiffness: 200, mass: 0.5 });
  const springY = useSpring(cursorY, { damping: 25, stiffness: 200, mass: 0.5 });
  const dotSpringX = useSpring(dotX, { damping: 40, stiffness: 400, mass: 0.3 });
  const dotSpringY = useSpring(dotY, { damping: 40, stiffness: 400, mass: 0.3 });

  const [isPointer, setIsPointer] = useState(false);
  const [isHidden, setIsHidden] = useState(false);
  const [isClick, setIsClick] = useState(false);

  useEffect(() => {
    const move = (e: MouseEvent) => {
      cursorX.set(e.clientX - 20);
      cursorY.set(e.clientY - 20);
      dotX.set(e.clientX - 4);
      dotY.set(e.clientY - 4);
    };

    const over = (e: MouseEvent) => {
      const el = e.target as HTMLElement;
      setIsPointer(
        el.closest("a, button, [data-cursor='pointer'], input, textarea, select") !== null
      );
    };

    const md = () => setIsClick(true);
    const mu = () => setIsClick(false);
    const leave = () => setIsHidden(true);
    const enter = () => setIsHidden(false);

    window.addEventListener("mousemove", move, { passive: true });
    document.addEventListener("mouseover", over);
    document.addEventListener("mousedown", md);
    document.addEventListener("mouseup", mu);
    document.addEventListener("mouseleave", leave);
    document.addEventListener("mouseenter", enter);

    return () => {
      window.removeEventListener("mousemove", move);
      document.removeEventListener("mouseover", over);
      document.removeEventListener("mousedown", md);
      document.removeEventListener("mouseup", mu);
      document.removeEventListener("mouseleave", leave);
      document.removeEventListener("mouseenter", enter);
    };
  }, [cursorX, cursorY, dotX, dotY]);

  return (
    <>
      <motion.div
        className="pointer-events-none fixed top-0 left-0 z-[9998] w-10 h-10 rounded-full border border-gold/50 mix-blend-difference"
        style={{ x: springX, y: springY, opacity: isHidden ? 0 : 1 }}
        animate={{
          scale: isPointer ? 1.6 : isClick ? 0.7 : 1,
        }}
        transition={{ scale: { type: "spring", damping: 20, stiffness: 300 } }}
      />
      <motion.div
        className="pointer-events-none fixed top-0 left-0 z-[9999] w-2 h-2 rounded-full bg-gold"
        style={{ x: dotSpringX, y: dotSpringY, opacity: isHidden ? 0 : 1 }}
        animate={{ scale: isPointer ? 0.5 : isClick ? 2 : 1 }}
        transition={{ scale: { type: "spring", damping: 20, stiffness: 400 } }}
      />
    </>
  );
};

export default MouseFollower;
