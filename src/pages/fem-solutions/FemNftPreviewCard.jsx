import { Link } from "react-router-dom";
import { IoArrowBackOutline } from "react-icons/io5";

import {
  imgEquilibrium,
  femNftIconClock,
  femNftIconEther,
  femNftIconView,
  femNftImgAvatar,
} from "../../assets";

//-------------------------------------------------------------------

const FemNftPreviewCard = () => {
  return (
    <div className="flex relative justify-center items-center font-outfit h-screen overflow-hidden bg-fem-03-mainbg">
      <Link
        to="/"
        className="btn btn-outline btn-accent absolute top-4 left-4 mb-6"
      >
        <IoArrowBackOutline />
        <button className="pl-3">Back</button>
      </Link>

      <div className="flex flex-col w-80 bg-fem-03-cardbg rounded-2xl p-6">
        <div className="relative rounded-xl object-contain overflow-hidden cursor-pointer">
          <div className="absolute h-full w-full object-fit opacity-0 z-20 hover:opacity-100 hover:bg-fem-03-text2 hover:bg-opacity-40 transition-all ease-in-out delay-100 duration-150">
            <img
              src={femNftIconView}
              alt="icon-view"
              className="absolute top-[40%] left-[40%] z-50"
            />
          </div>
          <img src={imgEquilibrium} alt="nft-img" className="hover:z-0" />
        </div>
        <h1 className="font-semibold text-slate-50 text-xl pt-6 pb-3 hover:text-fem-03-text2 cursor-pointer">
          Equilibrium #3429
        </h1>
        <p className="text-fem-03-text1 text-base">
          Our Equilibrium collection promotes balance and calm.
        </p>
        <div className="flex flex-row justify-between items-center py-5 border-b-[1px] border-fem-03-text1">
          <div className="flex flex-row gap-2">
            <img src={femNftIconEther} alt="icon-ethereum" />
            <p className="text-fem-03-text2 font-semibold text-sm">0.041 ETH</p>
          </div>
          <div className="flex flex-row gap-2">
            <img src={femNftIconClock} alt="icon-ethereum" />
            <p className="text-fem-03-text1 text-sm">3 days left</p>
          </div>
        </div>
        <div className="flex flex-row justify-start items-center pt-5">
          <img
            src={femNftImgAvatar}
            alt="img-avatar"
            className="w-8 h-8 border rounded-full"
          />
          <p className="text-fem-03-text1 pl-4 text-sm">
            Creation of{" "}
            <span className="text-slate-50 hover:text-fem-03-text2 cursor-pointer">
              Jules Wyvern
            </span>
          </p>
        </div>
      </div>

      {/* == credits == */}
      <div className="absolute bottom-10 text-xs text-center text-fem-03-text1">
        <p>
          Challenge by{" "}
          <a
            href="https://www.frontendmentor.io?ref=challenge"
            aria-label="frontend-mentor"
            target="_blank"
            rel="noreferrer noopener"
            className="cursor-pointer text-slate-50 hover:text-fem-03-text2"
          >
            Frontend Mentor
          </a>
        </p>
        <p>
          Coded by{" "}
          <Link
            to="/"
            className="cursor-pointer text-slate-50 hover:text-fem-03-text2"
          >
            Rowee
          </Link>
        </p>
      </div>
    </div>
  );
};

export default FemNftPreviewCard;
