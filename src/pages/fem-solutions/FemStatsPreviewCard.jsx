import { Link } from "react-router-dom";
import { IoArrowBackOutline } from "react-icons/io5";

import { femStatsHeroImg } from "../../assets";

//-------------------------------------------------------------------------

const FemStatsPreviewCard = () => {
  const stats = [
    { id: "001", value: "10k+", stat: "Companies" },
    { id: "002", value: "314", stat: "Templates" },
    { id: "003", value: "12M+", stat: "Queries" },
  ];

  return (
    <div className="flex relative justify-center items-center h-full md:h-screen px-6  overflow-hidden bg-fem-05-mainbg overflor-y-scroll lg:overflow-hidden">
      {/* == challenge solution == */}
      <main className="flex flex-col lg:flex-row bg-fem-05-cardbg rounded-xl w-full my-20 md:w-5/12 lg:w-11/12 xl:w-9/12 h-fit lg:h-[470px] justify-between">
        {/* == hero image mobile view == */}
        <div className="flex lg:hidden w-full h-72 relative">
          <div className="absolute h-full w-full object-fit bg-fem-05-accent bg-opacity-60 rounded-t-xl saturate-150 brightness-50 contrast-150" />
          <img
            src={femStatsHeroImg}
            alt="hero-img"
            className="object-cover rounded-t-xl"
          />
        </div>

        <div className="flex flex-col justify-between items-center p-9 xl:p-14 lg:w-1/2">
          <div className="space-y-4">
            <h1 className="font-bold font-inter text-3xl xl:text-4xl text-fem-05-heading text-center lg:text-left pr-0 lg:pr-10">
              Get <span className="text-fem-05-accent">insights</span> that help
              your business grow.
            </h1>
            <p className="font-lexenddeca text-fem-05-paragraph pt-7 pr-0 lg:pr-10 text-base text-center lg:text-left">
              Discover the benefits of data analytics and make better decisions
              regarding revenue, customer experience, and overall efficiency.
            </p>
          </div>
          <div className="flex flex-col lg:flex-row justify-between items-center w-11/12 pt-8 lg:pt-20 lg:ml-[-20px] gap-y-6">
            {stats.map((stat) => (
              <div
                key={stat.id}
                className="flex flex-col text-center lg:text-left"
              >
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

        {/* == hero image desktop view == */}
        <div className="hidden lg:block w-1/2 h-64 lg:h-full relative overflow-hidden rounded-r-xl">
          <div className="absolute h-full w-full object-contain bg-fem-05-accent bg-opacity-60 rounded-r-xl saturate-150 brightness-50 contrast-150" />
          <img
            src={femStatsHeroImg}
            alt="hero-img"
            className="h-[470px] object-cover object-center rounded-r-xl"
          />
        </div>
      </main>

      {/* == back to homepage button == */}
      <Link
        to="/"
        className="btn btn-outline btn-accent absolute top-4 left-4 mb-6"
      >
        <IoArrowBackOutline />
        <button className="pl-3">Back</button>
      </Link>

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
