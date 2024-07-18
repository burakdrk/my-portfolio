import { IoMdMoon, IoMdSunny } from "react-icons/io";
import { useTheme } from "./ThemeProvider";

export function ThemeToggle() {
  const { theme, setTheme } = useTheme();

  const isDarkMode = theme === "dark";

  return (
    <button
      className="transition-opacity duration-300 ease-out animate-in fade-in hover:opacity-50"
      onClick={() => setTheme(isDarkMode ? "light" : "dark")}
    >
      {isDarkMode ? <IoMdSunny size={20} /> : <IoMdMoon size={20} />}
    </button>
  );
}
