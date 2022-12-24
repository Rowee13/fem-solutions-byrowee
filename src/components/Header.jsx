import { FaGithub } from "react-icons/fa";

const Header = () => {
  return (
    <header className="flex w-full h-24 sticky bg-bunker-gray-900 items-center justify-between rounded-lg font-oswald border border-bunker-gray-500">
      <a
        href="/"
        className="text-slate-50 pl-10 uppercase text-2xl font-extrabold"
      >
        Architech Rowee
      </a>
      <a
        href="https://github.com/Rowee13/fem-solutions-byrowee"
        aria-label="fen-github-repo"
        target="_blank"
        rel="noreferrer noopener"
        className="flex justify-center items-center w-10 h-10 bg-bunker-gray-700 rounded-full mr-10 border border-bunker-gray-300 cursor-pointer hover:bg-bunker-gray-400"
      >
        <FaGithub className="w-5 h-5 text-bunker-gray-900" />
      </a>
    </header>
  );
};

export default Header;
