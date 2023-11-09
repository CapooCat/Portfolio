import { useAnimationEffect } from "../../hooks/Animation";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";

import Icon from "../../components/UI/Icon";

function NotFound() {
  const Cursor = () => {
    return (
      <motion.span animate={useAnimationEffect("blinking")}>_</motion.span>
    );
  };

  const navigate = useNavigate();
  const { t, i18n } = useTranslation();

  return (
    <section className="inset absolute flex flex-wrap items-center justify-center overflow-hidden">
      <div className="absolute h-[500px] w-[500px]">
        <div className="bg-main absolute -z-20 h-40 w-80 -translate-x-20 -translate-y-20 rounded-2xl" />
        <div className="bg-main absolute bottom-0 right-0 -z-20 h-60 w-60 translate-x-20 translate-y-20 rounded-full" />
      </div>

      <motion.div
        variants={useAnimationEffect("slideUp")}
        initial="hidden"
        animate="animate"
        className="grid-col-1 relative box-border grid h-[500px] w-[500px] max-w-[90vw] content-around justify-center rounded-xl border-[1px] border-gray-400/30 bg-white p-5 text-center shadow-xl dark:bg-primary-dark"
      >
        <button
          onClick={() => navigate(-1)}
          className="absolute right-0 z-10 m-2"
        >
          <Icon
            icon="letter-x"
            size={28}
            className="rounded-md bg-primary-light p-1 text-primary dark:bg-white/5"
          ></Icon>
        </button>

        <div className="grid grid-cols-1 justify-center gap-2">
          <Icon icon="mood-sad" size={128} className="justify-self-center" />
          <h1 className="justify-self-center text-[64px] font-bold">404</h1>
          <h1 className="justify-self-center text-[32px] font-bold">
            {t("error.title")}
          </h1>
          <h1 className="justify-self-center font-light">
            {t("error.description")}
            <Cursor />
          </h1>
        </div>
      </motion.div>
    </section>
  );
}

export default NotFound;
