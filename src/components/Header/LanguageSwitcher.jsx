import i18n from "../../utils/Language";
import SelectBox from "../UI/SelectBox";

function LanguageSwitcher() {
  const language = [
    { title: "English", value: "en" },
    { title: "Tiếng Việt", value: "vi" },
  ];

  const changeLanguage = (value) => {
    i18n.changeLanguage(value);
    localStorage.setItem("language", value);
  };

  return (
    <SelectBox
      data={language}
      selected={localStorage.language}
      onChangeFn={changeLanguage}
      customClass="text-primary-dark lg:text-inherit dark:text-inherit lg:m-0"
    />
  );
}

export default LanguageSwitcher;
