import { Link } from "react-router-dom";
import { IoArrowBackOutline } from "react-icons/io5";
import {
  MdOutlineKeyboardArrowLeft,
  MdOutlineKeyboardArrowRight,
} from "react-icons/md";

import { femTestiTanyaImg, femTestiQuotes, femTestiBgImg } from "../../assets";

//-------------------------------------------------------------------

const FemTestimonialSlider = () => {
  return (
    <div className="flex flex-col justify-center items-center relative bg-zinc-50 bg-fem-testimonial-curve bg-no-repeat bg-left-bottom h-full sm:h-screen w-screen font-inter text-fem-11-dark-blue overflow-hidden">
      {/* == main content == */}
      <div className="flex flex-row pl-48">
        <div className="flex flex-col relative justify-center w-7/12 mr-[-140px]">
          <img
            src={femTestiQuotes}
            alt="testi-quotes"
            className="absolute top-20 left-28 z-0"
          />
          <h1 className="text-4xl pb-8 z-50">
            “ I’ve been interested in coding for a while but never taken the
            jump, until now. I couldn’t recommend this course enough. I’m now in
            the job of my dreams and so excited about the future. ”
          </h1>
          <h5 className="font-bold text-xl">
            Tanya Sinclair{" "}
            <span className="font-normal text-fem-11-gray-blue">
              UX Engineer
            </span>
          </h5>
        </div>
        <div className="flex relative w-8/12 mt-[-100px]">
          <img
            src={femTestiTanyaImg}
            alt="tanya-sinclair"
            className="flex absolute top-16 left-20 object-contain object-center shadow-fem-11-img-shadow"
          />
          <img src={femTestiBgImg} alt="bg-img" className="object-fill" />
          <div className="absolute bottom-8 left-28">
            <button className="bg-zinc-50 text-fem-11-gray-blue py-2 pl-3 pr-2 rounded-l-full hover:bg-fem-11-gray-blue hover:text-zinc-50">
              <MdOutlineKeyboardArrowLeft className="w-8 h-8" />
            </button>
            <button className="bg-zinc-50 text-fem-11-gray-blue py-2 pr-3 pl-2 rounded-r-full hover:bg-fem-11-gray-blue hover:text-zinc-50">
              <MdOutlineKeyboardArrowRight className="w-8 h-8" />
            </button>
          </div>
        </div>
      </div>

      {/* == back to main page == */}
      <Link
        to="/"
        className="btn btn-outline btn-accent absolute top-5 left-5 mb-6"
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

export default FemTestimonialSlider;
