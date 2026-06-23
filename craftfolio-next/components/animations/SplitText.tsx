"use client";
import { useRef, useEffect, type ElementType } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

interface SplitTextRevealProps {
  text: string;
  as?: ElementType;
  className?: string;
  delay?: number;
  stagger?: number;
  scrollTrigger?: boolean;
  onComplete?: () => void;
}

export function SplitTextReveal({
  text,
  as: Tag = "span",
  className = "",
  delay = 0,
  stagger = 0.04,
  scrollTrigger = false,
  onComplete,
}: SplitTextRevealProps) {
  const containerRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    if (!containerRef.current) return;
    const chars = containerRef.current.querySelectorAll(".char");

    const animProps = {
      y: "0%",
      opacity: 1,
      rotateX: 0,
      duration: 1.0,
      ease: "power4.out",
      stagger,
      delay,
      onComplete,
    };

    const fromProps = {
      y: "110%",
      opacity: 0,
      rotateX: -45,
    };

    if (scrollTrigger) {
      gsap.fromTo(chars, fromProps, {
        ...animProps,
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 85%",
          toggleActions: "play none none none",
        },
      });
    } else {
      gsap.fromTo(chars, fromProps, animProps);
    }
  }, [delay, stagger, scrollTrigger, onComplete]);

  const words = text.split(" ");

  const TagComponent = Tag as ElementType;
  return (
    <TagComponent ref={containerRef} className={`${className} overflow-hidden`} aria-label={text}>
      {words.map((word, wi) => (
        <span
          key={wi}
          className="inline-block overflow-hidden"
          style={{ marginRight: "0.25em" }}
        >
          {word.split("").map((char, ci) => (
            <span
              key={ci}
              className="char inline-block will-change-transform"
              style={{ transformOrigin: "bottom center", transform: "translateY(110%)", opacity: 0 }}
            >
              {char}
            </span>
          ))}
        </span>
      ))}
    </TagComponent>
  );
}

interface LineRevealProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  scrollTrigger?: boolean;
}

export function LineReveal({
  children,
  className = "",
  delay = 0,
  scrollTrigger = false,
}: LineRevealProps) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!ref.current) return;
    const inner = ref.current.querySelector(".line-inner");

    const animProps = {
      y: "0%",
      opacity: 1,
      duration: 1.2,
      ease: "power4.out",
      delay,
    };

    if (scrollTrigger) {
      gsap.fromTo(
        inner,
        { y: "100%", opacity: 0 },
        {
          ...animProps,
          scrollTrigger: {
            trigger: ref.current,
            start: "top 88%",
            toggleActions: "play none none none",
          },
        }
      );
    } else {
      gsap.fromTo(inner, { y: "100%", opacity: 0 }, animProps);
    }
  }, [delay, scrollTrigger]);

  return (
    <div ref={ref} className={`overflow-hidden ${className}`}>
      <div className="line-inner will-change-transform">{children}</div>
    </div>
  );
}
