export type Skill = {
  name: string;
  imgSrc: string;
  proficiency?: 1 | 2 | 3 | 4 | 5;
};

export const skills: Skill[] = [
  {
    name: "TypeScript",
    imgSrc: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg",
    proficiency: 5,
  },
  {
    name: "JavaScript",
    imgSrc: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg",
    proficiency: 5,
  },
  {
    name: "Go",
    imgSrc: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/go/go-original-wordmark.svg",
    proficiency: 4,
  },
  {
    name: "Java",
    imgSrc: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/java/java-original.svg",
    proficiency: 4,
  },
  {
    name: "Python",
    imgSrc: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg",
    proficiency: 4,
  },
  {
    name: "C",
    imgSrc: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/c/c-original.svg",
    proficiency: 3,
  },
  {
    name: "C++",
    imgSrc: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/cplusplus/cplusplus-original.svg",
    proficiency: 3,
  },
  {
    name: "Swift",
    imgSrc: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/swift/swift-original.svg",
    proficiency: 3,
  },
  {
    name: "React",
    imgSrc: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg",
    proficiency: 5,
  },
  {
    name: "Node.js",
    imgSrc: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg",
    proficiency: 5,
  },
  {
    name: "Postgres",
    imgSrc: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-original.svg",
    proficiency: 4,
  },
  {
    name: "Spring",
    imgSrc: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/spring/spring-original.svg",
    proficiency: 3,
  },
  {
    name: "Git",
    imgSrc: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg",
    proficiency: 5,
  },
  {
    name: "Docker",
    imgSrc: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/docker/docker-original.svg",
    proficiency: 4,
  },
  {
    name: "AWS",
    imgSrc:
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/amazonwebservices/amazonwebservices-original-wordmark.svg",
    proficiency: 3,
  },
];
