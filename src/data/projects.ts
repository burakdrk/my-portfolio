import pasteyImage from "../assets/projects/pastey.png";
import searchsenImage from "../assets/projects/searchsen.png";
import svgEdtiorImage from "../assets/projects/svgeditor.png";
import s3ShellImage from "../assets/projects/s3shell.png";
import portfolioManagerImage from "../assets/projects/portfoliomanager.png";

export type Project = {
  name: string;
  description: string;
  imgSrc: string;
  url: string;
  sourceCodeUrl: string;
};

export const projects: Project[] = [
  {
    name: "Pastey",
    description:
      "A cross-platform encrypted clipboard sharing app built with Go, TypeScript, Postgres, SwiftUI, and React. Implemented CI/CD for deployment and real-time sync with WebSockets.",
    imgSrc: pasteyImage,
    url: "",
    sourceCodeUrl: "https://github.com/burakdrk/pastey",
  },
  {
    name: "Searchsen",
    description:
      "Browser extension using React and TypeScript to search past Twitch chat messages for VODs, with over 800 active users. Had to reverse engineer Twitch's GraphQL API to be able authenticate and fetch the messages.",
    imgSrc: searchsenImage,
    url: "https://chromewebstore.google.com/detail/searchsen-twitch-vod-chat/jncopnckeaddkmiajjmpoglomkhcdfkn?hl=en",
    sourceCodeUrl: "https://github.com/burakdrk/searchsen",
  },
  {
    name: "SVG Editor",
    description:
      "Web app for SVG editing, originally built with C, Node.js, and Bootstrap, later rewritten in Java with Spring Boot using OOP and MVC patterns to learn more about them and see the benefits when compared to a procedural language like C.",
    imgSrc: svgEdtiorImage,
    url: "",
    sourceCodeUrl: "https://github.com/burakdrk/svg-editor",
  },
  {
    name: "s3shell",
    description:
      "A Python command line application that integrates the Unix shell with AWS S3 buckets, mimicking a hierarchical file system to streamline file management.",
    imgSrc: s3ShellImage,
    url: "https://pypi.org/project/s3shell/",
    sourceCodeUrl: "https://github.com/burakdrk/s3shell",
  },
  {
    name: "Portfolio Manager",
    description:
      "A Java Swing GUI desktop application to manage portfolios with 2 different investment options: Stocks and mutual funds. Users can buy and sell each one, update their prices, display the total gain and search them.",
    imgSrc: portfolioManagerImage,
    url: "",
    sourceCodeUrl: "https://github.com/burakdrk/portfolio-manager",
  },
];
