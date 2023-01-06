import { Link } from "react-router-dom";
import { IoArrowBackOutline } from "react-icons/io5";

import {
  fem3colIconSedan,
  fem3colIconSuvs,
  fem3colIconLuxury,
} from "../../assets";

//-------------------------------------------------------------------

const ColumnCard = ({ columnTitle, description, icon, bgColor, borderRd }) => (
  <div
    className={`w-11/12 xs:w-[300px]  text-fem-06-primary-color p-11 ${borderRd} ${bgColor}`}
  >
    <img src={icon} alt="icon-sedan" />
    <h1 className="font-bigshoulder font-extrabold text-4xl uppercase py-8">
      {columnTitle}
    </h1>
    <p className="text-fem-06-secondary-color pb-14">{description}</p>
    <button className="bg-fem-06-primary-color text-fem-06-orange font-bold px-8 py-3 rounded-full border-2 border-fem-06-primary-color hover:bg-transparent hover:text-fem-06-primary-color my-3">
      Learn More
    </button>
  </div>
);

const Fem3ColCard = () => {
  return (
    <div className="flex relative bg-fem-06-primary-color h-full py-20 lg:py-0 lg:h-screen w-screen justify-center items-center text-gray-900 overflow-hidden">
      {/* == challenge solution == */}
      <main className="flex flex-col lg:flex-row items-center">
        <ColumnCard
          columnTitle="Sedans"
          description="Choose a sedan for its affordability and excellent fuel economy.
            Ideal for cruising in the city or on your next road trip."
          icon={fem3colIconSedan}
          bgColor="bg-fem-06-orange"
          borderRd="rounded-t-xl lg:rounded-l-xl lg:rounded-r-none"
        />
        <ColumnCard
          columnTitle="Suvs"
          description="Take an SUV for its spacious interior, power, and versatility.
            Perfect for your next family vacations and off-road adventures."
          icon={fem3colIconSuvs}
          bgColor="bg-fem-06-dark-cyan1"
        />
        <ColumnCard
          columnTitle="Luxury"
          description="Cruise in the best car brands without the bloated prices. Enjoy the
            enhanced comfort of a luxury rental and arrive in style."
          icon={fem3colIconLuxury}
          bgColor="bg-fem-06-dark-cyan2"
          borderRd="rounded-b-xl lg:rounded-r-xl lg:rounded-l-none"
        />
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
      <div className="absolute bottom-3 lg:bottom-10 text-xs text-center">
        <p>
          Challenge by{" "}
          <a
            href="https://www.frontendmentor.io?ref=challenge"
            aria-label="frontend-mentor"
            target="_blank"
            rel="noreferrer noopener"
            className="cursor-pointer font-bold text-fem-06-dark-cyan2 hover:text-fem-06-orange"
          >
            Frontend Mentor
          </a>
        </p>
        <p>
          Coded by{" "}
          <Link
            to="/"
            className="cursor-pointer font-bold text-fem-06-dark-cyan2 hover:text-fem-06-orange"
          >
            Rowee
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Fem3ColCard;
