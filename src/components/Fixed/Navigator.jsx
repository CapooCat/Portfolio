import { motion } from "framer-motion";
import { useRef } from "react";
import { useAnimationEffect } from "../../hooks/Animation";

import Icon from "../UI/Icon";

function Navigator() {
  const dragArea = useRef(null);

  const link = [
    { id: "about", icon: "user" },
    { id: "skill", icon: "code" },
    { id: "timeline", icon: "timeline" },
    { id: "gallery", icon: "photo-hexagon" },
  ];

  const parentTransition = useAnimationEffect("fadeIn", { stagger: true });
  const childrenTransition = useAnimationEffect("slideUp");

  function scrollTo(id) {
    const elementPosition = document.getElementById(id).offsetTop;
    window.scrollTo({ top: elementPosition - 150, behavior: "smooth" });
  }

  return (
    <>
      <motion.div className="drag-area" ref={dragArea}></motion.div>
      <motion.div
        drag="y"
        dragConstraints={dragArea}
        dragTransition={{ bounceStiffness: 500, bounceDamping: 20 }}
        variants={parentTransition}
        initial="hidden"
        animate="animate"
        className="fixed bottom-4 left-4 z-30 grid h-fit grid-cols-1 gap-5 rounded-full"
      >
        {link.map((item, index) => (
          <motion.button
            onClick={() => scrollTo(item.id)}
            variants={childrenTransition}
            className="nav relative hidden rounded-full border-[1px] border-gray-400/30 bg-white p-1 text-center shadow-xl dark:bg-primary-dark md:grid"
            key={index}
          >
            <Icon
              icon={item.icon}
              size={40}
              className="rounded-full p-2 text-primary"
            />
          </motion.button>
        ))}
      </motion.div>
    </>
  );
}

export default Navigator;
