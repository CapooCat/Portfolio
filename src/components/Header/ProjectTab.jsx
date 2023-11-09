import { useState } from "react";
import { motion } from "framer-motion";
import { useAnimationEffect } from "../../hooks/Animation";
import { isMobileDevice } from "../../utils/MobileDevice";

import useFetch from "../../hooks/Fetch";
import Loading from "../UI/Loading";
import Icon from "../UI/Icon";

const options = {
  url: "https://api.github.com/users/CapooCat/repos",
  method: "GET",
};

function ProjectTab() {
  const [forceVisible, setForceVisible] = useState("initial");
  const { slideDown, slideToLeft, rotate } = useAnimationEffect("selectBox");
  const { isLoading, error, data } = useFetch(options, "projects");

  const Project = (prop, key) => {
    const created_date = new Date(prop.created_at);

    return (
      <motion.a
        variants={slideToLeft}
        href={prop.html_url}
        target="_blank"
        className="flex gap-3 rounded-lg p-2 hover:bg-gray-400/10"
        key={key}
      >
        <Icon
          icon="brand-github"
          size={42}
          className="bg-main rounded-xl p-2 text-white"
        />
        <div className="text-primary-dark dark:text-inherit">
          <h1 className="font-medium">{prop.name}</h1>
          <span className="font-light">{created_date.getFullYear()}</span>
        </div>
      </motion.a>
    );
  };

  function toggleVisible() {
    if (isMobileDevice()) {
      forceVisible == "animate"
        ? setForceVisible("initial")
        : setForceVisible("animate");
    }
  }

  return (
    <motion.div
      onClick={() => toggleVisible()}
      initial="initial"
      whileHover="animate"
      animate="initial"
      className="relative mt-2 block gap-1 rounded-xl px-3 py-3 after:bg-white lg:mt-0 lg:flex lg:p-0"
    >
      <button className="flex h-full w-full items-center gap-1">
        <Icon icon="brand-github" size={18} className="mr-1" />
        Projects
        <motion.div variants={rotate} className="mt-1">
          <Icon icon="chevron-down" size={18} />
        </motion.div>
      </button>

      <div className="right-0 top-[100%] z-10 lg:absolute lg:pt-2">
        <motion.div
          variants={slideDown}
          className="relative mt-5 max-h-[400px] min-h-[200px] w-full gap-2 overflow-y-auto overflow-x-hidden rounded-xl border-[1px] border-gray-400/30 bg-white/75 p-2 backdrop-blur-md dark:bg-black/30 lg:mt-0 lg:w-[500px] lg:grid-cols-2"
        >
          {isLoading ? (
            <Loading />
          ) : (
            data.map((item, index) => <Project {...item} key={index} />)
          )}
        </motion.div>
      </div>
    </motion.div>
  );
}

export default ProjectTab;
