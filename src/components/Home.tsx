import { ProjectCard } from "./ProjectCard";
import { projects } from "../data/projects";
import { skills } from "../data/skills";
import { SkillCard } from "./SkillCard";
import Typewriter from "typewriter-effect";
import GraphemeSplitter from "grapheme-splitter";

const stringSplitter = (string: string) => {
  const splitter = new GraphemeSplitter();
  return splitter.splitGraphemes(string);
};

export function Home() {
  return (
    <div className="max-w-[700px] mx-auto mt-10 flex gap-8 flex-col px-4 sm:px-0">
      <h1 className="font-extrabold text-2xl">
        <Typewriter
          onInit={(typewriter) => {
            typewriter.typeString("Hi there 👋").pauseFor(1000).typeString("<br/>I'm Burak.").stop().start();
          }}
          options={{
            stringSplitter,
          }}
        />
      </h1>
      <p>
        I'm a software developer with previous work experience in full stack web development. I like learning and
        building new stuff in my free time, so here you will find some details about my past side projects and
        experiences.
      </p>

      <ul className="font-bold">
        <ul>Location: Ontario, Canada 🇨🇦</ul>
        <ul>
          Email: <a href="mailto:bduruk@proton.me">bduruk@proton.me</a>
        </ul>
      </ul>

      <section className="mt-8" id="projects-section">
        <h2 className="text-xl font-bold">Projects</h2>
        <ul className="mt-4">
          {projects.map((project) => (
            <li key={project.name} className="mb-4">
              <ProjectCard project={project} />
            </li>
          ))}
        </ul>
      </section>

      <section className="mt-6" id="skills-section">
        <h2 className="text-xl font-bold">Skills</h2>
        <div className="mt-4 grid grid-cols-5 justify-items-center">
          {skills.map((skill, idx) => (
            <SkillCard key={idx} skill={skill} />
          ))}
        </div>
      </section>
    </div>
  );
}
