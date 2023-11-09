class Theme {
  constructor() {
    this.dark = localStorage.dark === "true" ? true : false;
    this.darkIcon = this.dark ? "sun" : "moon-stars";
  }

  loadTheme() {
    const root = document.documentElement;
    this.dark ? root.classList.add("dark") : root.classList.remove("dark");
  }

  setDark(value) {
    if (typeof value == "boolean") {
      this.dark = value;
      this.darkIcon = value ? "sun" : "moon-stars";
      localStorage.setItem("dark", value);
      this.loadTheme();
    }
  }
}

export default Theme;
