import Theme from "../../utils/Theme";
import Icon from "../UI/Icon";
import { useState } from "react";

function ThemeSwitcher() {
  const theme = new Theme();
  const [icon, setIcon] = useState(theme.darkIcon);

  const changeDarkMode = () => {
    theme.setDark(!theme.dark);
    setIcon(theme.darkIcon);
  };

  return (
    <div className="bg-main-transparent relative flex h-12 items-center rounded-xl p-3 text-center lg:mt-0 lg:h-full lg:bg-transparent lg:p-0 lg:text-inherit">
      <Icon icon={icon} size={24} />
      <input
        type="checkbox"
        onChange={() => changeDarkMode()}
        className="absolute right-0 h-full w-full cursor-pointer opacity-0"
      />
    </div>
  );
}

export default ThemeSwitcher;
