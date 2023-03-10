import { FiExternalLink } from "react-icons/fi";

import BadgeCategory from "./BadgeCategory";

//----------------------------------------------------------

const FemCardExt = ({
  link,
  imgURL,
  femNum,
  femTitle,
  femDescription,
  femCategory,
  categoryColor,
  githubRepo,
}) => {
  return (
    <a
      href={link}
      aria-label={femTitle}
      target="_blank"
      rel="noreferrer noopener"
      className="w-full md:w-2/4 lg:w-1/3 xl:w-1/4 3xl:w-1/6 bg-bunker-gray-900 border-bunker-gray-600 hover:bg-bunker-gray-800 hover:scale-110 transition-all ease-in-out duration-300 delay-150 border cursor-pointer"
    >
      <div className="rounded-lg h-48 overflow-hidden m-4">
        <img
          src={imgURL}
          alt={femNum}
          className="object-cover object-center h-full w-full"
        />
      </div>
      <div className="flex flex-col px-5 pb-5 justify-between w-full h-56">
        <div className="flex flex-col text-left pb-6">
          <h3 className="font-extrabold text-xl line-clamp-1">{femTitle}</h3>
          <p className="font-light text-justify pt-3 text-zinc-400 line-clamp-3 text-sm">
            {femDescription}
          </p>
        </div>
        <div className="flex flex-row gap-3 justify-between pt-5">
          <BadgeCategory
            femCategory={femCategory}
            categoryColor={categoryColor}
          />
          <div>
            <a
              href={githubRepo}
              aria-label="github-repo"
              target="_blank"
              rel="noreferrer noopener"
              className="flex flex-row justify-center items-center bg-bunker-gray-900 py-2 px-4 sm:px-7 rounded-lg gap-2 font-bold hover:scale-110 border border-bunker-gray-500"
            >
              <FiExternalLink className="w-4 h-4" />
              Repo
            </a>
          </div>
        </div>
      </div>
    </a>
  );
};

export default FemCardExt;
