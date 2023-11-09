import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { useAnimationEffect } from "../../hooks/Animation";

import Icon from "../UI/Icon";

function GoTop() {
  const [isVisible, setVisible] = useState(false);
  const animate = useAnimationEffect("slideUp");

  const getScrollY = () => {
    return window.scrollY == 0 ? setVisible(false) : setVisible(true);
  };

  useEffect(() => {
    window.addEventListener("scroll", getScrollY);

    return () => {
      window.removeEventListener("scroll", getScrollY);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <motion.button
      variants={animate}
      initial="hidden"
      animate={isVisible ? "animate" : "hidden"}
      onClick={scrollToTop}
      className="fixed bottom-4 right-4 z-40 flex items-center justify-center rounded-full border-[1px] border-gray-400/30 bg-white p-1 shadow-xl dark:bg-primary-dark"
    >
      <Icon icon="arrow-bar-to-up" size={40} className="p-2 text-primary" />
    </motion.button>
  );
}

export default GoTop;
