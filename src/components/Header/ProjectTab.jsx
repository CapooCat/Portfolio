import { motion } from "framer-motion";
import { useAnimationEffect } from "../../hooks/Animation";

import useFetch from "../../hooks/Fetch";
import Icon from "../UI/Icon";
import Dropdown from "../UI/Dropdown";
import Loading from "../UI/Loading";
import { useTranslation } from "react-i18next";

const options = {
  url: "https://api.github.com/users/CapooCat/repos",
  method: "GET",
};

function ProjectTab() {
  const { t, i18n } = useTranslation();

  const Item = (prop, key) => {
    const { slideToLeft } = useAnimationEffect("selectBox");
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

  const Render = () => {
    const { isLoading, data } = useFetch(options, { cache: "projects" });

    return (
      <>
        {isLoading ? (
          <Loading />
        ) : (
          data.map((item, index) => <Item {...item} key={index} />)
        )}
      </>
    );
  };

  return <Dropdown title={t("header.projects")} content={<Render />} />;
}

export default ProjectTab;
