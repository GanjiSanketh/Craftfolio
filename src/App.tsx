import { useState, useEffect } from "react";
import { BrowserRouter } from "react-router-dom";
import { AnimatePresence } from "framer-motion";

import {
  About,
  Contact,
  Experience,
  Hero,
  Navbar,
  Tech,
  Works,
} from "./components";
import Preloader from "./components/layout/Preloader";
import { useLenis } from "./hooks/useLenis";
import { config } from "./constants/config";

function Portfolio() {
  useLenis();

  return (
    <div className="relative bg-primary overflow-x-hidden">
      <Navbar />
      <Hero />
      <About />
      <Experience />
      <Tech />
      <Works />
      <Contact />
    </div>
  );
}

const App = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    document.title = config.html.title;
  }, []);

  useEffect(() => {
    document.body.style.overflow = isLoaded ? "auto" : "hidden";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isLoaded]);

  return (
    <BrowserRouter>
      <AnimatePresence mode="wait">
        {!isLoaded && <Preloader onComplete={() => setIsLoaded(true)} />}
      </AnimatePresence>
      {isLoaded && <Portfolio />}
    </BrowserRouter>
  );
};

export default App;
