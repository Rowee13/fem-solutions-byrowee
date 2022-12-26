import { Link } from "react-router-dom";
import { IoArrowBackOutline } from "react-icons/io5";
import { IoIosMenu } from "react-icons/io";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";

import {
  femIntroLogo,
  femIntroHeroDesktop,
  femIntroDatabiz,
  femIntroAudiophile,
  femIntroMeet,
  femIntroMaker,
} from "../../assets";

//-------------------------------------------------------------------

const FemIntroSection = () => {
  return (
    <div className="flex flex-col relative bg-fem-10-white h-screen w-screen items-start font-epilogue text-fem-10-gray overflow-hidden">
      {/* == header == */}
      <div className="flex flex-row h-20 w-full px-4 lg:px-10 items-center justify-between ">
        <div className="flex flex-row">
          <img src={femIntroLogo} alt="logo" className="pr-14" />
          <div className="hidden lg:flex">
            <ul className="flex flex-row gap-12">
              <div className="flex flex-row items-center">
                <li>Feature</li>
                <MdOutlineKeyboardArrowDown className="w-6 h-6" />
              </div>
              <div className="flex flex-row items-center">
                <li>Company</li>
                <MdOutlineKeyboardArrowDown className="w-6 h-6" />
              </div>
              <li>Careers</li>
              <li>About</li>
            </ul>
          </div>
        </div>
        <div className="flex flex-row gap-4 text-fem-10-gray">
          <div className="hidden lg:flex">
            <button className="px-6 py-2 hover:text-fem-10-black">Login</button>
            <button className="border-2 border-fem-10-gray px-6 py-2 rounded-xl hover:border-fem-10-black hover:text-fem-10-black">
              Register
            </button>
          </div>
          <button className="flex lg:hidden">
            <IoIosMenu className="w-10 h-10" />
          </button>
        </div>
      </div>

      {/* == hero content == */}
      <div className="flex flex-row items-center">
        <div className=" text-fem-10-black px-20 bg-slate-300 mr-16">
          <h1 className="font-bold text-7xl">Make remote work</h1>
          <p>
            Get your team in sync, no matter your location. Streamline
            processes, create team rituals, and watch productivity soar.
          </p>
          <button className="bg-fem-10-black py-3 px-7 text-fem-10-white rounded-xl hover:text-fem-10-black hover:bg-fem-10-white hover:border-2 hover:border-fem-10-black">
            Learn more
          </button>
          <div className="flex flex-row justify-between">
            <img src={femIntroDatabiz} alt="databiz" className="h-5" />
            <img src={femIntroAudiophile} alt="audiophile" className="h-8" />
            <img src={femIntroMeet} alt="meet" className="h-5" />
            <img src={femIntroMaker} alt="maker" className="h-7" />
          </div>
        </div>
        <div className="bg-slate-500">
          <img src={femIntroHeroDesktop} alt="hero-img" className="w-8/12" />
        </div>
      </div>

      {/* == back to main page== */}
      <Link
        to="/"
        className="btn btn-outline btn-accent absolute bottom-1 left-7 mb-6"
      >
        <IoArrowBackOutline />
        <button className="pl-3">Back</button>
      </Link>

      {/* == credits == */}
      <div className="absolute bottom-7 right-10 text-xs text-right">
        <p>
          Challenge by{" "}
          <a
            href="https://www.frontendmentor.io?ref=challenge"
            aria-label="frontend-mentor"
            target="_blank"
            rel="noreferrer noopener"
            className="cursor-pointer font-bold text-fem-01-light hover:text-fem-01-dark"
          >
            Frontend Mentor
          </a>
        </p>
        <p>
          Coded by{" "}
          <Link
            to="/"
            className="cursor-pointer font-bold text-fem-01-light hover:text-fem-01-dark"
          >
            Rowee
          </Link>
        </p>
      </div>
    </div>
  );
};

export default FemIntroSection;
