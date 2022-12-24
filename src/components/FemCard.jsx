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
    <div className="w-1/4 bg-bunker-gray-900 hover:bg-bunker-gray-600">
      <div className="rounded-lg overflow-hidden m-4">
        <img src={imgURL} alt={femNum} />
      </div>
      <div className="flex flex-col px-5 pb-5 justify-between w-full">
        <div className="flex flex-col justify-center items-start pb-6">
          <h3 className="font-extrabold text-xl pb-3 line-clamp-1">
            {femTitle}
          </h3>
          <p className="font-light text-justify text-gray-400 line-clamp-3 text-sm">
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
    </div>
  );
};

export default FemCard;
