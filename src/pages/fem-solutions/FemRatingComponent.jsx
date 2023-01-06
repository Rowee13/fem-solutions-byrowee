import { useState } from "react";
import { Link } from "react-router-dom";
import { IoArrowBackOutline } from "react-icons/io5";
import { v4 as uuidv4 } from "uuid";

import { iconStar, illustrationThankYou } from "../../assets";

//-------------------------------------------------------------------------

const FemRatingComponent = () => {
  const [selectRating, setSelectRating] = useState(false);
  const [ratingSubmitted, setRatingSubmitted] = useState(false);

  const ratings = [
    { id: 1, value: 1 },
    { id: 2, value: 2 },
    { id: 3, value: 3 },
    { id: 4, value: 4 },
    { id: 5, value: 5 },
  ];

  const selectedRating = (id) => {
    setSelectRating(id);
  };

  const handleRatingSubmit = () => {
    setRatingSubmitted(true);
  };

  return (
    <div className="flex relative justify-center items-center h-screen overflow-hidden bg-fem-02-darkbg">
      {/* == challenge solution == */}
      <div className="bg-gradient-to-b from-fem-02-cardbg1 to-fem-02-cardbg2 w-full md:w-6/12 lg:w-1/4 rounded-3xl m-6 p-8 font-overpass">
        {ratingSubmitted ? (
          <div>
            <div className="flex flex-col justify-center items-center font-overpass text-center py-8 px-2">
              <img src={illustrationThankYou} alt="thank you" />
              <div className="bg-fem-02-btn px-5 py-2 rounded-full mt-6 mb-8 text-fem-02-primary">
                <h4>You selected {selectRating} out of 5</h4>
              </div>
              <h2 className="text-slate-50 font-extrabold text-xl md:text-3xl pb-4">
                Thank you!
              </h2>
              <p className="text-sm">
                We appreciate you taking the time to give a rating. If you ever
                need more support, don’t hesitate to get in touch!
              </p>
            </div>
          </div>
        ) : (
          <div>
            <div className="flex justify-center items-center w-12 h-12 md:w-14 md:h-14 rounded-full bg-fem-02-btn">
              <img src={iconStar} alt="s" />
            </div>
            <h2 className="font-bold text-xl md:text-2xl text-slate-50 pt-8 pb-3">
              How did we do?
            </h2>
            <p className="font-light text-sm md:text-base text-fem-02-lightgray">
              Please let us know how we did with your support request. All
              feedback is appreciated to help us improve our offering!
            </p>
            <div className="flex flex-row justify-between py-10">
              {ratings.map((rating) => (
                <button
                  key={uuidv4()}
                  id={rating.id}
                  onClick={() => selectedRating(rating.id)}
                  className={`flex justify-center items-center font-semibold text-lg w-12 h-12 md:w-14 md:h-14 rounded-full  cursor-pointer hover:bg-fem-02-medgray hover:text-slate-50 ${
                    rating.id === selectRating
                      ? "bg-fem-02-primary text-fem-02-cardbg2"
                      : "bg-fem-02-btn"
                  }`}
                >
                  {rating.value}
                </button>
              ))}
            </div>
            <button
              disabled={!selectRating ? true : false}
              onClick={handleRatingSubmit}
              className="w-full h-10 md:h-12 bg-fem-02-primary rounded-full text-slate-50 uppercase font-bold cursor-pointer hover:bg-slate-50 hover:text-fem-02-primary"
            >
              Submit
            </button>
          </div>
        )}
      </div>

      {/* == back to home button == */}
      <Link
        to="/"
        className="btn btn-outline btn-accent absolute top-4 left-4 mb-6"
      >
        <IoArrowBackOutline />
        <button className="pl-3">Back</button>
      </Link>

      {/* == credits == */}
      <div className="absolute bottom-10 text-xs text-center text-fem-02-medgray">
        <p>
          Challenge by{" "}
          <a
            href="https://www.frontendmentor.io?ref=challenge"
            aria-label="frontend-mentor"
            target="_blank"
            rel="noreferrer noopener"
            className="cursor-pointer font-bold text-slate-50 hover:text-fem-02-primary"
          >
            Frontend Mentor
          </a>
        </p>
        <p>
          Coded by{" "}
          <Link
            to="/"
            className="cursor-pointer font-bold text-slate-50 hover:text-fem-02-primary"
          >
            Rowee
          </Link>
        </p>
      </div>
    </div>
  );
};

export default FemRatingComponent;
