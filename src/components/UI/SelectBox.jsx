import { useState, useEffect, useRef, useMemo } from "react";
import { motion } from "framer-motion";
import { useAnimationEffect } from "../../hooks/Animation";
import Icon from "./Icon";

function SelectBox({
  data,
  selected = data[0].value,
  onChangeFn,
  customClass,
}) {
  const [selectedValue, setSelectedValue] = useState(selected);
  const [isOpen, setIsOpen] = useState(false);
  const animate = useAnimationEffect("selectBox");
  const thisComponent = useRef(null);

  const toggleList = () => setIsOpen(!isOpen);

  const changeSelectValue = (value) => {
    setSelectedValue(value);
    setIsOpen(false);
  };

  useEffect(() => {
    onChangeFn(selectedValue);
  }, [selectedValue]);

  const options = useMemo(() => {
    return (
      <>
        {data.map((item, index) => (
          <motion.li key={index} variants={animate.slideToLeft}>
            <button
              className="h-12 w-full p-3 text-left hover:bg-gray-400/10"
              onClick={() => changeSelectValue(item.value)}
            >
              {item.title}
            </button>
          </motion.li>
        ))}
      </>
    );
  }, [data]);

  return (
    <div
      ref={thisComponent}
      onMouseLeave={() => setIsOpen(false)}
      className={`${customClass} relative h-12 w-60 place-self-center rounded-xl border-[1px] border-gray-400/30 bg-white/20 dark:bg-black/30`}
    >
      <input defaultValue={selectedValue} key={selectedValue} hidden />

      <button
        className="relative flex h-full w-full items-center p-3"
        onClick={toggleList}
      >
        {data.find((item) => item.value == selectedValue).title}
        <motion.div
          variants={animate.rotate}
          initial="origin"
          animate={isOpen ? "animate" : "origin"}
          className="absolute right-2"
        >
          <Icon icon="chevron-down" size={24} />
        </motion.div>
      </button>

      <div className="absolute right-0 top-[100%] z-10 w-full">
        <motion.ul
          variants={animate.slideDown}
          initial="initial"
          animate={isOpen ? "animate" : "initial"}
          className="z-10 mt-4 w-full overflow-hidden
                 rounded-xl border-[1px] border-gray-400/30 bg-white/75 text-primary-dark backdrop-blur-md dark:bg-black/30 dark:text-inherit"
        >
          {options}
        </motion.ul>
      </div>
    </div>
  );
}

export default SelectBox;
