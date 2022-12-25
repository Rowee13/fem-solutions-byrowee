import { FaGithub } from "react-icons/fa";

const Header = () => {
  return (
    <header className="flex w-full h-20 lg:h-24 sticky bg-bunker-gray-900 items-center justify-between rounded-lg font-oswald border border-bunker-gray-500">
      <a
        href="/"
        className="text-slate-50 pl-5 lg:pl-10 uppercase text-xl lg:text-2xl font-extrabold"
      >
        Architech Rowee
      </a>
      <div className="flex flex-row font-overpass items-center gap-4">
        <h4 className="text-bunker-gray-100 text-sm lg:text-base">
          github repo
        </h4>
        <a
          href="https://github.com/Rowee13/fem-solutions-byrowee"
          aria-label="fen-github-repo"
          target="_blank"
          rel="noreferrer noopener"
          className="flex justify-center items-center w-7 h-7 lg:w-10 lg:h-10 bg-bunker-gray-600 rounded-full mr-5 lg:mr-10 border border-bunker-gray-300 cursor-pointer hover:bg-bunker-gray-400"
        >
          <FaGithub className="w-4 h-4 lg:w-5 lg:h-5 text-bunker-gray-900" />
        </a>
      </div>
    </header>
  );
};

export default Header;
