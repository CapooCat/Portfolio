import Icon from "./Icon";
import { useTranslation } from "react-i18next";

function Title({ title, icon }) {
  const { t, i18n } = useTranslation();

  return (
    <h1 className="col-s title relative col-span-full flex gap-3 py-4 text-3xl font-medium uppercase">
      {t(title)}
      {icon && (
        <Icon icon={icon} className="bg-main-transparent rounded-full p-2" />
      )}
    </h1>
  );
}

export default Title;
