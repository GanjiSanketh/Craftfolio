import { motion } from "framer-motion";

interface Props {
  Component: React.ElementType;
  idName: string;
}

const staggerContainer = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.1,
    },
  },
};

const SectionWrapper = (
  Component: Props["Component"],
  idName: Props["idName"]
) =>
  function HOC() {
    return (
      <motion.section
        id={idName}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.1 }}
        variants={staggerContainer}
        className="relative z-0 mx-auto max-w-7xl px-6 sm:px-16 py-16 sm:py-24"
      >
        <span className="hash-span" aria-hidden>&nbsp;</span>
        <Component />
      </motion.section>
    );
  };

export default SectionWrapper;
