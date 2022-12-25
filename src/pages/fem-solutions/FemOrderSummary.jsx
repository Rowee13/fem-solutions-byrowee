import { Link } from "react-router-dom";
import { IoArrowBackOutline } from "react-icons/io5";

import { femOrderHeroImg, femOrderMusicIcon } from "../../assets";

//-------------------------------------------------------------------

const FemOrderSummary = () => {
  return (
    <div className="flex relative h-screen w-screen justify-center items-center bg-fem-04-pale-blue bg-fem-ordersumbg-mobile lg:bg-fem-ordersumbg-desktop bg-no-repeat bg-cover xl:bg-contain bg-center xl:bg-top text-gray-900 overflow-hidden">
      <Link
        to="/"
        className="btn btn-outline btn-accent absolute top-4 left-4 mb-6"
      >
        <IoArrowBackOutline />
        <button className="pl-3">Back</button>
      </Link>

      <div className="flex flex-col justify-center items-center w-96 bg-slate-50 rounded-2xl font-redhatdisplay">
        <div className="object-cover w-full rounded-t-2xl overflow-hidden">
          <img src={femOrderHeroImg} alt="music-order" />
        </div>
        <div className="p-7 text-center">
          <h3 className="font-black text-2xl">Order Summary</h3>
          <p className="text-base py-4">
            You can now listen to millions of songs, audiobooks, and podcasts on
            any device anywhere you like!
          </p>
          <div className="flex flex-row justify-between items-center text-base bg-fem-04-pale-blue2 p-5 rounded-xl">
            <div className="flex flex-row items-center justify-start">
              <img src={femOrderMusicIcon} alt="music-icon" />
              <div className="flex flex-col pl-3">
                <h4 className="font-black">Annual Plan</h4>
                <p>$59.99/year</p>
              </div>
            </div>
            <span className="text-xs font-semibold underline cursor-pointer text-fem-04-btn-blue hover:text-fem-04-lpale-blue">
              Change
            </span>
          </div>
          <button className="w-full bg-fem-04-btn-blue rounded-xl p-4 my-7 text-slate-50 font-black text-sm shadow-fem-04-btn hover:bg-fem-04-lpale-blue">
            Proceed to Payment
          </button>
          <span className="font-semibold text-sm cursor-pointer hover:text-fem-04-btn-blue">
            Cancel Order
          </span>
        </div>
      </div>

      {/* == credits == */}
      <div className="absolute bottom-10 text-xs text-center">
        <p>
          Challenge by{" "}
          <a
            href="https://www.frontendmentor.io?ref=challenge"
            aria-label="frontend-mentor"
            target="_blank"
            rel="noreferrer noopener"
            className="cursor-pointer font-bold text-fem-04-btn-blue hover:text-fem-04-lpale-blue"
          >
            Frontend Mentor
          </a>
        </p>
        <p>
          Coded by{" "}
          <Link
            to="/"
            className="cursor-pointer font-bold text-fem-04-btn-blue hover:text-fem-04-lpale-blue"
          >
            Rowee
          </Link>
        </p>
      </div>
    </div>
  );
};

export default FemOrderSummary;
