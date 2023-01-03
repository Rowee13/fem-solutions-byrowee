import { FaLinkedin, FaGithub } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="w-full">
      <div className="border-b border-bunker-gray-400 w-full h-10 md:mt-[50px]" />
      <div className="flex flex-row justify-between px-5 pt-10 pb-16 font-spacegrotesk text-bunker-gray-100">
        <a href="/">2023. Architech Rowee</a>
        <div className="flex flex-row gap-4">
          <a
            href="https://github.com/Rowee13"
            aria-label="github"
            target="_blank"
            rel="noreferrer noopener"
          >
            <FaGithub className="w-6 h-6 hover:text-riptide-accent hover:scale-125" />
          </a>
          <a
            href="https://www.linkedin.com/in/roweeapor/"
            aria-label="linkedin"
            target="_blank"
            rel="noreferrer noopener"
          >
            <FaLinkedin className="w-6 h-6 hover:text-riptide-accent hover:scale-125" />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
