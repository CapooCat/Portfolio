import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useAnimationEffect } from "../../hooks/Animation";

import Title from "../../components/UI/Title";
import Icon from "../../components/UI/Icon";

const technologies = [
  {
    title: "Javascript",
    icon: "brand-javascript",
    type: "program",
    percent: 90,
  },
  { title: "ReactJS", icon: "brand-react", type: "tech", percent: 70 },
  { title: "C#", icon: "brand-c-sharp", type: "program", percent: 60 },
  { title: "T-SQL", icon: "database", type: "program", percent: 60 },
  { title: "Framer", icon: "brand-framer", type: "tech", percent: 60 },
  { title: "Tailwind", icon: "brand-tailwind", type: "tech", percent: 70 },
  { title: "MongoDB", icon: "brand-mongodb", type: "program", percent: 60 },
  { title: "SocketIO", icon: "brand-socket-io", type: "tech", percent: 70 },
  {
    title: "Vietnamese",
    icon: "language",
    type: "lang",
    description: "Native or Bilingual Proficiency",
  },
  {
    title: "English",
    icon: "language",
    type: "lang",
    description: "Professional Working Proficiency",
  },
];

const tab = [
  { title: "Programming & Database", value: "program", checked: true },
  { title: "Technologies", value: "tech" },
  { title: "Language", value: "lang" },
];

const PercentBar = ({ value }) => {
  return (
    <div className="relative h-[4px] w-full overflow-hidden rounded-lg bg-gray-200">
      <div
        className="bg-main absolute h-full rounded-xl"
        style={{ width: `${value}%` }}
      />
    </div>
  );
};

function Skills() {
  const [skillTab, setSkillTab] = useState("program");

  const handleTab = (e) => {
    setSkillTab(e.target.value);
  };

  const parent = useAnimationEffect("fadeIn", { stagger: true });
  const children = useAnimationEffect("dropdown");

  return (
    <section
      className="container m-10 mx-auto grid grid-cols-1 gap-5"
      id="skill"
    >
      <Title title="skills" icon="code" />

      <div className="flex flex-wrap gap-2">
        {tab.map((item, index) => (
          <label
            className="tab relative block w-fit overflow-hidden rounded-xl border-[1px] border-gray-400/30"
            key={index}
          >
            <input
              type="radio"
              name="tab"
              value={item.value}
              className="inset absolute opacity-0 hover:cursor-pointer"
              defaultChecked={item.checked}
              onChange={handleTab}
            />
            <div className="h-full w-full px-3 py-2">{item.title}</div>
          </label>
        ))}
      </div>

      <AnimatePresence mode="wait">
        <motion.div
          exit="remove"
          initial="hidden"
          whileInView="animate"
          viewport={{ once: true, margin: "0px 0px -15%" }}
          variants={parent}
          className="grid gap-5 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"
          key={skillTab}
        >
          {technologies
            .filter((item) => item.type == skillTab)
            .map((item, index) => (
              <motion.div
                variants={children}
                className="box-border flex h-auto flex-wrap rounded-xl border-[1px] border-gray-400/30 p-4"
                key={index}
              >
                <div className="flex basis-full">
                  <Icon
                    icon={item.icon}
                    size={18}
                    className="bg-main mr-3 h-12 w-14 rounded-xl p-2 text-white"
                  />
                  <div className="flex w-full flex-wrap">
                    {item.title}
                    {item.percent && (
                      <>
                        <span className="bg-main-transparent ml-2 h-fit rounded-md px-1 py-[2px] text-sm font-normal">
                          {item.percent}%
                        </span>
                        <PercentBar value={item.percent} />
                      </>
                    )}
                    {item.description && (
                      <span className="basis-full text-sm font-light text-gray-400">
                        {item.description}
                      </span>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
        </motion.div>
      </AnimatePresence>
    </section>
  );
}

export default Skills;
