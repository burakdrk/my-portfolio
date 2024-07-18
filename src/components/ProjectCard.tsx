import { FaGithub } from "react-icons/fa";
import { Project } from "../data/projects";

type ProjectCardProps = {
  project: Project;
};

export function ProjectCard({ project }: ProjectCardProps) {
  function handleProjectClick() {
    if (project.url) {
      window.open(project.url, "_blank");
    } else if (project.sourceCodeUrl) {
      window.open(project.sourceCodeUrl, "_blank");
    }
  }

  function handleGithubClick(e: React.MouseEvent) {
    e.stopPropagation();
    if (project.sourceCodeUrl) window.open(project.sourceCodeUrl, "_blank");
  }

  return (
    <div
      className="flex flex-col gap-4 p-4 transition-[background] hover:bg-zinc-200 dark:hover:bg-zinc-900 sm:flex-row sm:items-center rounded-lg
     cursor-pointer"
      onClick={handleProjectClick}
    >
      <div className="sm:w-1/3 sm:shrink-0">
        <img src={project.imgSrc} alt="Project" className="rounded-lg shadow" />
      </div>

      <div className="flex flex-col flex-1 gap-2 sm:justify-evenly">
        <div className="flex items-center justify-between">
          <h3 className="text-lg font-semibold">{project.name}</h3>
          <FaGithub
            className="hover:opacity-50 transition-opacity duration-300 ease-out animate-in fade-in"
            size={18}
            onClick={handleGithubClick}
          />
        </div>

        <p className="text-zinc-600 dark:text-zinc-400">{project.description}</p>
      </div>
    </div>
  );
}
