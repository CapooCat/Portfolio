import Icon from "../UI/Icon";
import Logo from "../UI/Logo";
import { useState } from "react";
import { motion } from "framer-motion";
import { useAnimationEffect } from "../../hooks/Animation";
import { Link } from "react-router-dom";

import ThemeSwitcher from "../Header/ThemeSwitcher";
import LanguageSwitcher from "../Header/LanguageSwitcher";
import ProjectTab from "../Header/ProjectTab";
import { useTranslation } from "react-i18next";

function Header() {
  const [showPanel, setShowPanel] = useState(false);
  const { t, i18n } = useTranslation();

  const left_menu = [
    { title: t("header.home"), icon: "book-2", href: "/" },
    { title: t("header.gallery"), icon: "photo-hexagon", href: "/gallery" },
    { title: t("header.resources"), icon: "stack-2", href: "/resources" },
  ];

  return (
    <header className="bg-main-header fixed z-30 flex h-16 max-h-full w-full justify-center border-b-[1px] border-white/25 text-white">
      <div className="container flex h-full items-center justify-between">
        <Logo />

        <button
          className="block h-full lg:hidden"
          onClick={() => setShowPanel(true)}
        >
          <Icon icon="menu-2" size={24} />
        </button>

        <motion.div
          className="menu ml-5 basis-full justify-between overflow-auto p-5 shadow-2xl lg:flex lg:flex-row-reverse lg:overflow-visible lg:p-0 lg:shadow-none"
          variants={useAnimationEffect("slideInFromLeft")}
          initial="hidden"
          animate={showPanel ? "animate" : "hidden"}
        >
          <button
            className="bg-main mb-4 ml-auto block rounded-xl p-2 text-inherit lg:hidden"
            onClick={() => setShowPanel(false)}
          >
            <Icon icon="arrow-right" size={24} />
          </button>

          <div className="flex items-center justify-end gap-2 border-y-[1px] border-gray-400/30 py-4 lg:m-0 lg:gap-5 lg:border-none lg:p-0">
            <LanguageSwitcher />
            <ThemeSwitcher />
          </div>

          <div className="gap-5 text-primary-dark dark:text-inherit lg:flex lg:border-none lg:text-inherit">
            {left_menu.map((item, index) => (
              <Link
                to={item.href || "*"}
                className="link-hover panel relative mt-2 flex items-center rounded-xl px-3 py-3 text-center after:bg-white lg:mt-0 lg:p-0"
                key={index}
              >
                <Icon icon={item.icon} size={18} className="mr-1" />
                {item.title}
              </Link>
            ))}

            <ProjectTab />
          </div>
        </motion.div>
      </div>
    </header>
  );
}

export default Header;
