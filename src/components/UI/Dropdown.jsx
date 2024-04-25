import { useState, useEffect, useRef, useMemo } from "react";
import { motion } from "framer-motion";
import { useAnimationEffect } from "../../hooks/Animation";
import Icon from "./Icon";

function Dropdown({ title, content }) {
  const [isOpen, setIsOpen] = useState(false);
  const { slideDown, rotate } = useAnimationEffect("selectBox");
  const thisComponent = useRef(null);

  const toggleList = () => setIsOpen(!isOpen);

  return (
    <motion.div
      initial="initial"
      animate={isOpen ? "animate" : "initial"}
      className="relative mt-2 block gap-1 rounded-xl px-3 py-3 after:bg-white lg:mt-0 lg:flex lg:p-0"
      onMouseLeave={() => setIsOpen(false)}
      ref={thisComponent}
    >
      <button
        className="flex h-full w-full items-center gap-1"
        onClick={() => toggleList()}
      >
        <Icon icon="brand-github" size={18} className="mr-1" />
        {title}
        <motion.div variants={rotate} className="mt-1">
          <Icon icon="chevron-down" size={18} />
        </motion.div>
      </button>

      <div className="right-0 top-[100%] z-10 lg:absolute lg:pt-2">
        <motion.div
          variants={slideDown}
          className="relative mt-5 max-h-[400px] min-h-[200px] w-full gap-2 overflow-y-auto overflow-x-hidden rounded-xl border-[1px] border-gray-400/30 bg-white/75 p-2 backdrop-blur-md dark:bg-black/30 lg:mt-0 lg:w-[500px] lg:grid-cols-2"
        >
          {content}
        </motion.div>
      </div>
    </motion.div>
  );
}

export default Dropdown;
