import * as Icons from "@tabler/icons-react"; //not a good way

function Icon({ icon, size, className }) {
  if (!icon) return "";

  const str = icon
    .split("-")
    .map((x) => x.charAt(0).toUpperCase() + x.slice(1))
    .join("");

  const Result = Icons["Icon" + str];
  return <Result size={size || 36} className={className} />;
}

export default Icon;
