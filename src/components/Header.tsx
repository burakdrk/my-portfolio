import { ThemeToggle } from "./ThemeToggle";
import { useLocation, useNavigate } from "react-router-dom";

export function Header() {
  const location = useLocation();
  const navigate = useNavigate();

  return (
    <header className="sticky flex inset-0 py-6 px-4 bg-gradient-to-b from-zinc-400 dark:from-black backdrop-blur z-50">
      <div className="m-auto flex w-[700px] justify-between">
        <div className="flex gap-5 font-semibold">
          <a
            className="cursor-pointer transition-opacity duration-300 ease-out animate-in fade-in hover:opacity-50"
            onClick={() => {
              if (location.pathname !== "/") {
                navigate("/");
              }
              window.scrollTo({ top: 0, behavior: "smooth" });
            }}
          >
            Home
          </a>
          <a
            className="cursor-pointer transition-opacity duration-300 ease-out animate-in fade-in hover:opacity-50"
            onClick={() => {
              if (location.pathname !== "/") {
                navigate("/");
              }
              document.getElementById("projects-section")?.scrollIntoView({ behavior: "smooth" });
            }}
          >
            Projects
          </a>
          <a
            className="cursor-pointer transition-opacity duration-300 ease-out animate-in fade-in hover:opacity-50"
            onClick={() => {
              if (location.pathname !== "/") {
                navigate("/");
              }
              document.getElementById("skills-section")?.scrollIntoView({ behavior: "smooth" });
            }}
          >
            Skills
          </a>
        </div>
        <ThemeToggle />
      </div>
    </header>
  );
}
