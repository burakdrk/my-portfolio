import { ThemeProvider } from "./components/ThemeProvider";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { ProjectCard } from "./components/ProjectCard";
import { projects } from "./data/projects";
import { skills } from "./data/skills";
import { SkillCard } from "./components/SkillCard";
import Typewriter from "typewriter-effect";

function App() {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="ui-theme">
      <Header />

      <div className="w-full mt-10 flex gap-8 flex-col px-4 sm:px-0">
        <h1 className="font-extrabold text-2xl">
          <Typewriter
            onInit={(typewriter) => {
              typewriter.typeString("Hi there 👋").pauseFor(1000).typeString("<br/>I'm Burak.").stop().start();
            }}
          />
        </h1>
        <p>
          I'm a software developer with previous internship experience in full stack web development. I like building
          stuff in my free time, so here you will find some details about my past projects and experiences. I'm
          currently learning mobile and graphics programming, and open for new grad roles starting September 2024.
        </p>

        <ul className="font-bold">
          <ul>
            Status: ✅ <span className="text-green-600">Open to new grad roles</span>
          </ul>
          <ul>Location: Ontario, Canada 🇨🇦</ul>
          <ul>
            Email: <a href="mailto:bduruk@proton.me">bduruk@proton.me</a>
          </ul>
        </ul>

        <section className="mt-8" id="projects-section">
          <h2 className="text-xl font-bold">Projects</h2>
          <ul className="mt-4">
            {projects.map((project) => (
              <li key={project.name}>
                <ProjectCard project={project} />
              </li>
            ))}
          </ul>
        </section>

        <section className="mt-8" id="skills-section">
          <h2 className="text-xl font-bold">Skills</h2>
          <div className="mt-4 grid grid-cols-5 justify-items-center">
            {skills.map((skill, idx) => (
              <SkillCard key={idx} skill={skill} />
            ))}
          </div>
        </section>
      </div>

      <Footer />
    </ThemeProvider>
  );
}

export default App;
