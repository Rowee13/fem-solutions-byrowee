import { Link } from "react-router-dom";
import { IoArrowBackOutline } from "react-icons/io5";

import { femStatsHeroImg } from "../../assets";

//-------------------------------------------------------------------------

const FemStatsPreviewCard = () => {
  const stats = [
    { value: "10k+", stat: "Companies" },
    { value: "314", stat: "Templates" },
    { value: "12M+", stat: "Queries" },
  ];

  return (
    <div className="flex relative justify-center items-center h-full md:h-screen px-6  overflow-hidden bg-fem-05-mainbg overflor-y-scroll lg:overflow-hidden">
      <Link
        to="/"
        className="btn btn-outline btn-accent absolute top-4 left-4 mb-6"
      >
        <IoArrowBackOutline />
        <button className="pl-3">Back</button>
      </Link>

      <div className="flex flex-col lg:flex-row bg-fem-05-cardbg rounded-xl w-full my-20 md:w-5/12 lg:w-11/12 xl:w-8/12 justify-between">
        <div className="lg:hidden w-full h-64 relative object-contain overflow-hidden">
          <div className="absolute h-full w-full object-fit bg-fem-05-accent bg-opacity-60 rounded-t-xl saturate-150 brightness-50 contrast-150" />
          <img src={femStatsHeroImg} alt="hero-img" className="rounded-t-xl" />
        </div>
        <div className="p-9 lg:p-10 xl:p-16 lg:w-1/2 ">
          <h1 className="font-bold font-inter text-3xl xl:text-4xl text-fem-05-heading text-center lg:text-left">
            Get <span className="text-fem-05-accent">insights</span> that help
            your business grow.
          </h1>
          <p className="font-lexenddeca text-fem-05-paragraph pt-7 text-base text-center lg:text-left">
            Discover the benefits of data analytics and make better decisions
            regarding revenue, customer experience, and overall efficiency.
          </p>
          <div className="flex flex-col lg:flex-row justify-between items-center w-11/12 pt-8 lg:pt-20 gap-y-6">
            {stats.map((stat) => (
              <div className="flex flex-col text-center lg:text-left">
                <h4 className="font-inter font-bold text-2xl text-fem-05-heading">
                  {stat.value}
                </h4>
                <h5 className="font-lexenddeca text-fem-05-stat-text text-sm uppercase">
                  {stat.stat}
                </h5>
              </div>
            ))}
          </div>
        </div>
        <div className="hidden lg:block h-full relative object-contain overflow-hidden">
          <div className="absolute h-full w-full object-contain bg-fem-05-accent bg-opacity-60 rounded-r-xl saturate-150 brightness-50 contrast-150" />
          <img src={femStatsHeroImg} alt="hero-img" className="rounded-r-xl" />
        </div>
      </div>

      {/* == credits == */}
      <div className="absolute bottom-2 lg:bottom-10 text-xs text-center text-fem-02-medgray">
        <p>
          Challenge by{" "}
          <a
            href="https://www.frontendmentor.io?ref=challenge"
            aria-label="frontend-mentor"
            target="_blank"
            rel="noreferrer noopener"
            className="cursor-pointer font-bold text-slate-50 hover:text-fem-05-accent"
          >
            Frontend Mentor
          </a>
        </p>
        <p>
          Coded by{" "}
          <Link
            to="/"
            className="cursor-pointer font-bold text-slate-50 hover:text-fem-05-accent"
          >
            Rowee
          </Link>
        </p>
      </div>
    </div>
  );
};

export default FemStatsPreviewCard;
