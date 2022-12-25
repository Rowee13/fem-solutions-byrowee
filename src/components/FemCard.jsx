import { Link } from "react-router-dom";

import { FiExternalLink } from "react-icons/fi";

//----------------------------------------------------------

const FemCard = ({
  femId,
  imgURL,
  femNum,
  femTitle,
  femDescription,
  femCategory,
}) => {
  return (
    <Link
      to={femId}
      className="w-1/4 bg-bunker-gray-900 hover:bg-bunker-gray-800 hover:scale-105 transition-all ease-in-out duration-150 delay-100 border border-bunker-gray-700"
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
          <p className="font-light text-justify pt-3 text-gray-400 line-clamp-3 text-sm">
            {femDescription}
          </p>
        </div>
        <div className="flex flex-col xs:flex-row gap-3 justify-between pt-5">
          <div className="flex bg-transparent border border-teal-500 uppercase items-center px-6 rounded-lg text-teal-500">
            {femCategory}
          </div>
          <div>
            <button className="flex flex-row justify-center items-center bg-bunker-gray-900 py-2 px-7 rounded-lg gap-2 font-bold hover:scale-110">
              <FiExternalLink className="w-4 h-4" />
              View
            </button>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default FemCard;
