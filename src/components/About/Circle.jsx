import { motion } from "framer-motion";
import { useAnimationEffect } from "../../hooks/Animation";
import Icon from "../../components/UI/Icon";

function Circle() {
  let animate = useAnimationEffect("rotateSlide");

  return (
    <motion.ul
      className="relative w-[80%] rounded-full border-2 border-dashed border-gray-400/30 pb-[80%] sm:h-[400px] sm:w-[400px] sm:p-0"
      variants={animate}
      animate="animate"
    >
      <li className="absolute left-[50%] top-0 flex h-[50px] w-[50px] -translate-x-[50%] -translate-y-[50%] items-center justify-center rounded-full border-2 border-gray-400/30 bg-white dark:bg-primary-dark">
        <motion.div variants={animate.child}>
          <Icon icon="presentation-analytics" size={30} />
        </motion.div>
      </li>

      <li className="absolute left-[8%] top-[15%] flex h-[50px] w-[50px] -translate-x-[50%] items-center justify-center rounded-full border-2 border-gray-400/30 bg-white dark:bg-primary-dark">
        <motion.div variants={animate.child}>
          <Icon icon="drag-drop" size={30} />
        </motion.div>
      </li>

      <li className="absolute right-[8%] top-[15%] flex h-[50px] w-[50px] translate-x-[50%] items-center justify-center rounded-full border-2 border-gray-400/30 bg-white dark:bg-primary-dark">
        <motion.div variants={animate.child}>
          <Icon icon="report-search" size={30} />
        </motion.div>
      </li>

      <li className="absolute bottom-[15%] left-[8%] flex h-[50px] w-[50px] -translate-x-[50%] items-center justify-center rounded-full border-2 border-gray-400/30 bg-white dark:bg-primary-dark">
        <motion.div variants={animate.child}>
          <Icon icon="device-desktop-code" size={30} />
        </motion.div>
      </li>

      <li className="absolute bottom-[15%] right-[8%] flex h-[50px] w-[50px] translate-x-[50%] items-center justify-center rounded-full border-2 border-gray-400/30 bg-white dark:bg-primary-dark">
        <motion.div variants={animate.child}>
          <Icon icon="package-export" size={30} />
        </motion.div>
      </li>

      <li className="absolute bottom-0 left-[50%] flex h-[50px] w-[50px] -translate-x-[50%] translate-y-[50%] items-center justify-center rounded-full border-2 border-gray-400/30 bg-white dark:bg-primary-dark">
        <motion.div variants={animate.child}>
          <Icon icon="test-pipe" size={30} />
        </motion.div>
      </li>
    </motion.ul>
  );
}

export default Circle;
