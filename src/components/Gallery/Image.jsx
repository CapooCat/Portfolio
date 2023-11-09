import { motion } from "framer-motion";
import { useState } from "react";
import { useAnimationEffect } from "../../hooks/Animation";

function Image({ url, index }) {
  const [loading, setLoading] = useState(true);
  const { load, finish } = useAnimationEffect("imageLoading");
  const { animate } = useAnimationEffect("zoom");

  const loaded = () => {
    setLoading(false);
  };

  return (
    <div
      className="relative mb-4 aspect-auto overflow-hidden rounded-xl"
      key={index}
    >
      <motion.img
        whileHover={animate}
        src={url}
        loading="lazy"
        onLoad={loaded}
        className="rounded-xl border-[1px] border-gray-400/30"
      />
      <motion.div
        animate={loading ? load : finish}
        className="inset absolute z-10 h-full w-full"
      ></motion.div>
    </div>
  );
}

export default Image;
