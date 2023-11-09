import { motion } from "framer-motion";
import { useQueryClient } from "@tanstack/react-query";
import { useAnimationEffect } from "../../hooks/Animation";

import Icon from "../UI/Icon";
import StoryDetail from "./StoryDetail";

function StoryModal({ selectedId, setSelectedId }) {
  const modalAnimation = useAnimationEffect("fadeIn");
  const queryClient = useQueryClient();

  const exitModal = () => {
    setSelectedId(null);
    queryClient.cancelQueries({ queryKey: [`api-${selectedId}`] });
  };

  return (
    <motion.div
      className="inset fixed z-40 flex min-h-[100vh] items-center justify-center overflow-y-auto bg-black/25 backdrop-blur-md"
      variants={modalAnimation}
      animate="animate"
      initial="hidden"
      exit="hidden"
    >
      <motion.div
        layoutId={selectedId}
        className="absolute block overflow-hidden rounded-xl bg-white dark:bg-primary-dark"
      >
        <button onClick={exitModal} className="absolute right-0 z-10 m-2 ">
          <Icon
            icon="letter-x"
            size={24}
            className="rounded-md bg-primary-light p-1 text-primary dark:bg-primary-dark"
          ></Icon>
        </button>

        <StoryDetail fetchId={selectedId} />
      </motion.div>
    </motion.div>
  );
}

export default StoryModal;
