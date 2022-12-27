import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { IoArrowBackOutline } from "react-icons/io5";

import {
  femAdviceDividerDesktop,
  femAdviceDividerMobile,
  femAdviceDiceIcon,
} from "../../assets";

//-------------------------------------------------------------------

const FemAdviceGenerator = () => {
  const [getAdvice, setGetAdvice] = useState([]);

  const fetchData = () => {
    fetch("https://api.adviceslip.com/advice")
      .then((response) => response.json())
      .then((data) => setGetAdvice(data))
      .catch((err) => console.log(err));
  };
  useEffect(() => {
    fetchData();
  }, []);

  const getNewAdvice = () => {
    fetchData();
  };

  return (
    <div className="flex relative justify-center items-center font-outfit h-screen overflow-hidden bg-fem-09-dark-blue">
      <Link
        to="/"
        className="btn btn-outline btn-accent absolute top-4 left-4 mb-6"
      >
        <IoArrowBackOutline />
        <button className="pl-3">Back</button>
      </Link>

      <div className="flex flex-col relative w-full md:w-2/3 lg:w-1/3 h-2/5 lg:h-2/5 mx-5 px-6 py-16 bg-fem-09-dgray-blue rounded-xl justify-between items-center text-center font-manrope">
        {Object.keys(getAdvice).length > 0 ? (
          <div className="px-4">
            <h3 className="uppercase text-fem-09-neon-green font-bold text-sm pb-4 tracking-[0.3rem]">
              Advice #{getAdvice.slip.id}
            </h3>
            <h1 className="text-2xl text-fem-09-light-cyan font-bold pb-6">
              "{getAdvice.slip.advice}"
            </h1>
          </div>
        ) : (
          <h1>Getting advice...</h1>
        )}
        <img
          src={femAdviceDividerDesktop}
          alt="divider"
          className="hidden lg:block"
        />
        <img src={femAdviceDividerMobile} alt="divider" className="lg:hidden" />
        <button
          onClick={getNewAdvice}
          className="flex absolute justify-center items-center bg-fem-09-neon-green w-14 h-14 rounded-full bottom-[-28px] hover:shadow-fem-09-btn-shadow"
        >
          <img
            src={femAdviceDiceIcon}
            alt="dice-icon"
            className="text-fem-09-dark-blue"
          />
        </button>
      </div>

      {/* == credits == */}
      <div className="absolute bottom-3 lg:bottom-10 text-xs text-center">
        <p>
          Challenge by{" "}
          <a
            href="https://www.frontendmentor.io?ref=challenge"
            aria-label="frontend-mentor"
            target="_blank"
            rel="noreferrer noopener"
            className="cursor-pointer font-bold text-fem-09-neon-green hover:text-fem-09-light-cyan"
          >
            Frontend Mentor
          </a>
        </p>
        <p>
          Coded by{" "}
          <Link
            to="/"
            className="cursor-pointer font-bold text-fem-09-neon-green hover:text-fem-09-light-cyan"
          >
            Rowee
          </Link>
        </p>
      </div>
    </div>
  );
};

export default FemAdviceGenerator;
