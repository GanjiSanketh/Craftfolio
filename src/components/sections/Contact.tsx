import { motion } from "framer-motion";

import { SectionWrapper } from "../../hoc";
import { slideIn } from "../../utils/motion";
import { config } from "../../constants/config";
import { Header } from "../atoms/Header";
import resume from "../../assets/company/SANKETH G.pdf";
import EarthCanvas from "../canvas/Earth";

const Contact = () => {
  return (
    <div className="flex flex-col-reverse xl:flex-row gap-10 overflow-hidden xl:mt-12">

      {/* LEFT SIDE */}
      <motion.div
        variants={slideIn("left", "tween", 0.2, 1)}
        className="bg-black-100 flex-[0.75] rounded-2xl p-10 text-center"
      >
        <Header useMotion={false} {...config.contact} />

        <p className="text-secondary mt-6 text-lg">
          I'm always open to discussing new opportunities, collaborations,
          or interesting projects. Feel free to connect with me.
        </p>

        <div className="mt-10 flex flex-col gap-5 items-center">
          
          <a
            href={`mailto:${config.html.email}`}
            className="bg-tertiary w-full md:w-2/3 rounded-xl px-6 py-3 font-bold text-white text-center hover:bg-[#915EFF] transition"
          >
            📧 Email Me
          </a>

          <a
            href="https://www.linkedin.com/in/sanketh-g-818b35270/"
            target="_blank"
            className="bg-tertiary w-full md:w-2/3 rounded-xl px-6 py-3 font-bold text-white text-center hover:bg-[#915EFF] transition"
          >
            💼 LinkedIn
          </a>

          <a
            href={resume}
            target="_blank"
            className="bg-tertiary w-full md:w-2/3 rounded-xl px-6 py-3 font-bold text-white text-center hover:bg-[#915EFF] transition"
          >
            📄 Download Resume
          </a>
        </div>
      </motion.div>

      {/* RIGHT SIDE EARTH */}
      <motion.div
        variants={slideIn("right", "tween", 0.2, 1)}
        className="xl:flex-1 h-[450px] md:h-[600px] flex items-center justify-center"
      >
        <EarthCanvas />
      </motion.div>

    </div>
  );
};

export default SectionWrapper(Contact, "contact");