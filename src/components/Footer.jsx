import { FaLinkedin, FaGithub } from "react-icons/fa";

const Footer = () => {
  return (
    <div>
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
            <FaGithub className="w-6 h-6" />
          </a>
          <a
            href="https://www.linkedin.com/in/roweeapor/"
            aria-label="linkedin"
            target="_blank"
            rel="noreferrer noopener"
          >
            <FaLinkedin className="w-6 h-6" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
