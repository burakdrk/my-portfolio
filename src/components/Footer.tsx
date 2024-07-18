import { FaGithub, FaLinkedin } from "react-icons/fa";
import { IoIosMail } from "react-icons/io";

export function Footer() {
  return (
    <footer className="mt-16 mb-10 flex flex-row gap-5">
      <a
        className="flex gap-2 flex-row items-center hover:opacity-50 cursor-pointer transition-opacity duration-300 ease-out animate-in fade-in"
        href="https://github.com/burakdrk"
        target="_blank"
        rel="noreferrer"
      >
        <FaGithub /> GitHub
      </a>
      <a
        className="flex gap-2 flex-row items-center hover:opacity-50 cursor-pointer transition-opacity duration-300 ease-out animate-in fade-in"
        href="https://linkedin.com/in/bdrk"
        target="_blank"
        rel="noreferrer"
      >
        <FaLinkedin /> LinkedIn
      </a>
      <a
        className="flex gap-2 flex-row items-center hover:opacity-50 cursor-pointer transition-opacity duration-300 ease-out animate-in fade-in"
        href="mailto:bduruk@proton.me"
        target="_blank"
        rel="noreferrer"
      >
        <IoIosMail /> Contact
      </a>
    </footer>
  );
}
