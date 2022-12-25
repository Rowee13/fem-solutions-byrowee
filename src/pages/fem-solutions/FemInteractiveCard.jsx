import { useState } from "react";
import { Link } from "react-router-dom";
import { IoArrowBackOutline } from "react-icons/io5";

import {
  femInteractiveMainBg,
  femInteractiveMobileBg,
  femInteractiveCardFront,
  femInteractiveCardBack,
  femInteractiveCardLogo,
  femInteractiveIconComplete,
} from "../../assets";

//-------------------------------------------------------------------

const FemInteractiveCard = () => {
  const [cardholderName, setCardholderName] = useState("Jane Appleseed");
  const [cardNumber, setCardNumber] = useState("0000 0000 0000 0000");
  const [expDate, setExpDate] = useState({ month: "00", year: "00" });
  const [cvc, setCvc] = useState("000");
  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleExpDateChange = (event) => {
    const { value, name } = event.target;
    setExpDate((prevValue) => {
      if (name === "month") {
        return {
          month: value,
          year: prevValue.year,
        };
      } else {
        return {
          month: prevValue.month,
          year: value,
        };
      }
    });
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    setFormSubmitted(true);
  };

  return (
    <div className="relative bg-fem-08-white h-screen w-full text-fem-08-dark-violet font-spacegrotesk overflow-hidden">
      <Link
        to="/"
        className="btn btn-outline btn-accent absolute top-4 right-4 mb-6"
      >
        <IoArrowBackOutline />
        <button className="pl-3">Back</button>
      </Link>

      {/* == cards == */}
      <div>
        <div className="absolute top-48 md:top-56 lg:top-28 xl:top-44 left-5 md:left-28 lg:left-20 xl:left-44 right-16 lg:right-[400px] xl:right-[1000px] z-30">
          <img
            src={femInteractiveCardFront}
            alt="card-front"
            className="shadow-fem-08-card-shaodw"
          />
        </div>
        <div className="absolute top-20 lg:top-96 xl:top-[460px] left-16 md:left-60 lg:left-32 xl:left-72 right-7 lg:right-[430px] xl:right-[800px]">
          <img
            src={femInteractiveCardBack}
            alt="card-back"
            className="shadow-fem-08-card-shaodw"
          />
        </div>
      </div>

      {/* == cards content == */}
      <div>
        <div className="absolute top-48 md:top-56 lg:top-28 xl:top-44 left-5 md:left-28 lg:left-20 xl:left-44 right-16 md:right-64 lg:right-[500px] xl:right-[1000px] z-30">
          <div className="flex flex-col text-fem-08-white p-5 md:p-7">
            <img
              src={femInteractiveCardLogo}
              alt="card-logo"
              className="w-16"
            />
            <h1 className="font-bold text-lg md:text-2xl lg:text-3xl tracking-wider pt-9 sm:pt-14 md:pt-24 lg:pt-16">
              {cardNumber}
            </h1>
            <div className="flex flex-row justify-between items-center text-xs md:text-sm font-semibold pt-1   lg:pt-6">
              <h4 className="uppercase">{cardholderName}</h4>
              <p>{`${expDate.month}/${expDate.year}`}</p>
            </div>
          </div>
        </div>
        <div className="absolute top-20 lg:top-96 xl:top-[460px] left-16 md:left-60 lg:left-32 xl:left-72 right-7 lg:right-[430px] xl:right-[800px]">
          <h4 className="text-fem-08-white absolute sm:top-[75px] xl:top-[108px] sm:right-10 xl:right-32 font-bold">
            {cvc}
          </h4>
        </div>
      </div>

      <div className="flex flex-col lg:flex-row justify-between w-full">
        {/* == background image == */}
        <img
          src={femInteractiveMainBg}
          alt="main-bg"
          className="hidden lg:flex"
        />
        <img
          src={femInteractiveMobileBg}
          alt="main-bg"
          className="lg:hidden w-full h-80 bg-contain"
        />

        {/* == form == */}
        <div className="flex w-full justify-center lg:w-2/5 xl:w-2/6 mr-10 xl:mr-52 pt-20 md:pt-48 lg:pt-64 px-5 md:px-40 lg:px-10">
          {formSubmitted ? (
            <div className="flex flex-col items-center text-center w-full pt-10">
              <img
                src={femInteractiveIconComplete}
                alt="icon-complete"
                className="w-20 h-20"
              />
              <h3 className="uppercase font-black text-3xl pt-10">
                Thank you!
              </h3>
              <p className="text-base pt-2 pb-10">
                We've added your card details
              </p>
              <button
                onClick={() => setFormSubmitted(false)}
                className="w-full py-3 lg:py-4 mt-2 lg:mt-6 font-bold bg-fem-08-dark-violet text-fem-08-white rounded-lg hover:bg-opacity-80"
              >
                Continue
              </button>
            </div>
          ) : (
            <form onSubmit={handleFormSubmit}>
              <div className="flex flex-col pb-4 lg:pb-6">
                <label
                  htmlFor="name"
                  className="uppercase font-semibold text-xs pb-1"
                >
                  Cardholder Name <sup className="text-red-500">*</sup>
                </label>
                <input
                  placeholder="e.g. Jane Appleseed"
                  type="text"
                  maxLength={40}
                  onChange={(e) => setCardholderName(e.target.value)}
                  className="py-2 px-5 bg-fem-08-white border border-fem-08-light-gray rounded-lg"
                />
              </div>
              <div className="flex flex-col pb-4 lg:pb-6">
                <label
                  htmlFor="card-number"
                  className="uppercase font-semibold text-xs pb-1"
                >
                  Card Number <sup className="text-red-500">*</sup>
                </label>
                <input
                  placeholder="e.g. 1234 5678 9123 0000"
                  type="text"
                  maxLength={19}
                  onChange={(e) => setCardNumber(e.target.value)}
                  className="py-2 px-5 bg-fem-08-white border border-fem-08-light-gray rounded-lg"
                />
                {/* <h5 className="text-fem-08-error text-sm">
                  Wrong format! Numbers only.
                </h5> */}
              </div>
              <div className="flex flex-row items-center gap-x-4 pb-4 lg:pb-6">
                <div className="flex flex-col w-6/12">
                  <label
                    htmlFor="date"
                    className="uppercase font-semibold text-xs pb-1"
                  >
                    EXP.DATE (MM/YY) <sup className="text-red-500">*</sup>
                  </label>
                  <div className="flex gap-x-4">
                    <input
                      name="month"
                      placeholder="MM"
                      maxLength={2}
                      onChange={handleExpDateChange}
                      className="w-3/6 py-2 px-5 bg-fem-08-white border border-fem-08-light-gray rounded-lg"
                    />
                    <input
                      name="year"
                      placeholder="YY"
                      maxLength={2}
                      onChange={handleExpDateChange}
                      className="w-3/6 py-2 px-5 bg-fem-08-white border border-fem-08-light-gray rounded-lg"
                    />
                  </div>
                  {expDate.month.length !== 2 ||
                  expDate.month.length === 0 ||
                  expDate.year.length !== 2 ||
                  expDate.year.length === 0 ? (
                    <h5 className="text-fem-08-error text-sm">
                      Can't be blank.
                    </h5>
                  ) : (
                    ""
                  )}
                </div>
                <div className="flex flex-col w-6/12">
                  <label
                    htmlFor="cvc"
                    className="uppercase font-semibold text-xs pb-1"
                  >
                    CVC <sup className="text-red-500">*</sup>
                  </label>
                  <input
                    placeholder="000"
                    maxLength={3}
                    onChange={(e) => setCvc(e.target.value)}
                    className="py-2 px-5 bg-fem-08-white border border-fem-08-light-gray rounded-lg"
                  />
                  {cvc.length !== 3 || cvc.length === 0 ? (
                    <h5 className="text-fem-08-error text-sm">
                      Can't be blank.
                    </h5>
                  ) : (
                    ""
                  )}
                </div>
              </div>
              <button className="w-full py-3 lg:py-4 mt-2 lg:mt-6 font-bold bg-fem-08-dark-violet text-fem-08-white rounded-lg hover:bg-opacity-80">
                Confirm
              </button>
            </form>
          )}
        </div>
      </div>

      {/* == credits == */}
      <div className="absolute bottom-3 lg:bottom-10 right-5 lg:right-10 text-xs text-end">
        <p>
          Challenge by{" "}
          <a
            href="https://www.frontendmentor.io?ref=challenge"
            aria-label="frontend-mentor"
            target="_blank"
            rel="noreferrer noopener"
            className="cursor-pointer font-bold text-fem-08-linear-grad1 hover:text-fem-08-error"
          >
            Frontend Mentor
          </a>
        </p>
        <p>
          Coded by{" "}
          <Link
            to="/"
            className="cursor-pointer font-bold text-fem-08-linear-grad1 hover:text-fem-08-error"
          >
            Rowee
          </Link>
        </p>
      </div>
    </div>
  );
};

export default FemInteractiveCard;
