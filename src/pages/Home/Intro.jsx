import { motion } from "framer-motion";
import { useAnimationEffect } from "../../hooks/Animation";

import avatar from "../../assets/images/Avatar.jpg";
import Wave from "../../assets/svg/wave.svg?react";

const Cursor = () => {
  return <motion.span animate={useAnimationEffect("blinking")}>_</motion.span>;
};

function Intro() {
  return (
    <section className="bg-main relative box-border h-[700px] max-h-full w-full pt-[60px] text-white">
      <motion.div
        variants={useAnimationEffect("fadeIn", { stagger: true })}
        viewport={{ once: true, margin: "0px 0px -20%" }}
        initial="hidden"
        whileInView="animate"
        className="z-10 grid h-[80%] grid-cols-1 content-center text-center"
      >
        <motion.img
          variants={useAnimationEffect("fadeIn")}
          src={avatar}
          className="mb-10 h-[250px] w-[250px] place-self-center rounded-full border-2 p-3"
          loading="lazy"
        />
        <motion.h1
          variants={useAnimationEffect("slideUp")}
          className="place-self-center text-5xl font-medium"
        >
          Tran Thai Dat
        </motion.h1>
        <motion.span
          variants={useAnimationEffect("slideUp")}
          className="place-self-center"
        >
          I'm a web developer
          <Cursor />
        </motion.span>
      </motion.div>

      <Wave className="absolute bottom-0 h-auto w-full fill-white dark:fill-primary-dark" />
    </section>
  );
}

export default Intro;
