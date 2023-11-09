import Icon from "./Icon";

function Logo() {
  return (
    <div className="flex h-12 w-fit select-none items-center gap-1 rounded-xl bg-white px-3 py-2 text-primary-dark dark:bg-black/30 dark:text-inherit">
      <Icon icon="device-desktop-code" size={30} />
      <label className="inline-block border-b-2 border-primary text-xl font-bold">
        CO<span className="bg-main bg-clip-text text-transparent">D</span>AT
      </label>
    </div>
  );
}

export default Logo;
