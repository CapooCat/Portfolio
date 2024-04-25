import { motion } from "framer-motion";
import { useAnimationEffect } from "../../hooks/Animation";

import avatar from "../../assets/images/Avatar.jpg";
import Wave from "../../assets/svg/wave.svg?react";

const Cursor = () => {
  return <motion.span animate={useAnimationEffect("blinking")}>_</motion.span>;
};

function Intro() {
  return (
    <section className="bg-main relative box-border h-[750px] max-h-full w-full pt-[60px] text-white">
      <motion.div
        variants={useAnimationEffect("fadeIn", { stagger: true })}
        viewport={{ once: true, margin: "0px 0px -20%" }}
        initial="hidden"
        whileInView="animate"
        className="z-10 grid h-[80%] grid-cols-1 content-center px-4 text-center lg:p-0"
      >
        <motion.h1
          variants={useAnimationEffect("slideUp")}
          className="place-self-center pb-10 text-5xl font-bold"
        >
          Gallery
        </motion.h1>
        <motion.span
          variants={useAnimationEffect("slideUp")}
          className="text max-w-[500px] place-self-center text-lg leading-8"
        >
          Explore the beauty of Vietnam, where every images is a doorway to a
          new perspectives
        </motion.span>
      </motion.div>

      <Wave className="absolute bottom-0 h-auto w-full fill-white dark:fill-primary-dark" />
    </section>
  );
}

export default Intro;
