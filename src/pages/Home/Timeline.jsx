import { useState, lazy } from "react";
import { AnimatePresence, LayoutGroup, motion } from "framer-motion";

import Title from "../../components/UI/Title";
import Icon from "../../components/UI/Icon";
import StoryModal from "../../components/Timeline/StoryModal";

const template =
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.";
const timeline = [
  {
    time: "2017",
    icon: "school",
    description:
      "Started my first year of college at Cao Thang Technical school, the beginning of my journey",
  },
  {
    time: "2018",
    icon: "brand-github",
    description: "Building my first project with C# Winform",
  },
  { time: "2019", icon: "brand-github" },
  { time: "2020", icon: "brand-github" },
  { time: "10/2021", icon: "confetti" },
  { time: "11/2021", icon: "briefcase" },
  { time: "2022 - Present", icon: "briefcase" },
];

const animate = {
  hidden: {
    opacity: 0,
    y: 40,
  },

  slideIn: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      stiffness: 200,
    },
  },

  hover: {
    scale: 1.05,
  },

  click: {
    scale: 0.9,
  },
};

function Timeline() {
  const [selectedId, setSelectedId] = useState(null);

  const bodyClass = document.body.classList;
  selectedId != null
    ? bodyClass.add("disable-scroll")
    : bodyClass.remove("disable-scroll");

  return (
    <LayoutGroup>
      <section
        className="container m-10 mx-auto grid gap-5 lg:grid-cols-2"
        id="timeline"
      >
        <Title title="timeline" icon="timeline" />

        <div className="h-auto">
          <div className="sticky top-20 box-border rounded-xl border-[1px] border-gray-400/30 p-4">
            <h1 className="bg-main-transparent mb-4 h-fit w-fit rounded-md px-3 py-1 text-xl ">
              MY PAST EXPERIENCE
            </h1>
            <p className="font-light">
              In this timeline, I'll tell you about my story on how I became a
              web developer, and about my working experience as of now,{" "}
              <b>
                you can click on each section for more detail on what I do at
                the time
              </b>
              .
            </p>
          </div>
        </div>

        <ul className="timeline relative box-border flex h-auto flex-wrap gap-10 rounded-xl">
          {timeline.map((item, index) => (
            <motion.li
              className="flex basis-full font-light"
              key={index}
              initial="hidden"
              whileInView="slideIn"
              variants={animate}
              viewport={{ once: true, margin: "0px 0px -20% 0px" }}
            >
              <div className="h-fit w-fit rounded-full border-2 bg-white p-3 dark:border-gray-400/30 dark:bg-primary-dark">
                <Icon icon={item.icon} />
              </div>

              <motion.button
                className="ml-5 cursor-pointer rounded-xl border-[1px] bg-white p-4 text-left dark:border-gray-400/30 dark:bg-primary-dark"
                whileHover={animate.hover}
                whileTap={animate.click}
                layoutId={`story-${index}`}
                onClick={() => setSelectedId(`story-${index}`)}
              >
                <h1 className="pb-2 text-xl font-medium">{item.time}</h1>
                {item.description ? item.description : template}
              </motion.button>
            </motion.li>
          ))}
        </ul>

        <AnimatePresence>
          {selectedId && (
            <StoryModal selectedId={selectedId} setSelectedId={setSelectedId} />
          )}
        </AnimatePresence>
      </section>
    </LayoutGroup>
  );
}

export default Timeline;
