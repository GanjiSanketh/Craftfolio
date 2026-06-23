"use client";
import { useState, useEffect } from "react";
import { AnimatePresence } from "framer-motion";
import { Preloader } from "@/components/sections/Preloader";
import { Navbar } from "@/components/layout/Navbar";
import { Hero } from "@/components/sections/Hero";
import { About } from "@/components/sections/About";
import { Experience } from "@/components/sections/Experience";
import { Projects } from "@/components/sections/Projects";
import { Skills } from "@/components/sections/Skills";
import { TechStack } from "@/components/sections/TechStack";
import { Resume } from "@/components/sections/Resume";
import { Contact } from "@/components/sections/Contact";

export default function HomePage() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    if (isLoaded) {
      document.body.style.overflow = "auto";
    } else {
      document.body.style.overflow = "hidden";
    }
  }, [isLoaded]);

  return (
    <>
      <AnimatePresence mode="wait">
        {!isLoaded && (
          <Preloader onComplete={() => setIsLoaded(true)} />
        )}
      </AnimatePresence>

      <main className={`transition-opacity duration-500 ${isLoaded ? "opacity-100" : "opacity-0"}`}>
        <Navbar />
        <Hero />
        <About />
        <Experience />
        <Projects />
        <Skills />
        <TechStack />
        <Resume />
        <Contact />
      </main>
    </>
  );
}
