import { Link } from "react-router-dom";
import { IoArrowBackOutline } from "react-icons/io5";

//-------------------------------------------------------------------

const FemIntroSignupForm = () => {
  return (
    <div className="flex relative bg-fem-07-primary-red bg-fem-introbg-mobile lg:bg-fem-introbg-desktop bg-opacity-90 bg-no-repeat bg-cover h-full md:h-screen py-20 lg:py-0 lg:h-screen w-screen justify-center items-center text-gray-900 overflow-hidden">
      {/* == challenge solution == */}
      <div className="flex flex-col lg:flex-row font-poppins w-10/12 md:w-8/12 lg:w-9/12">
        <div className="flex flex-col text-slate-50 justify-center lg:pr-20 pt-5 lg:pt-0 pb-20 lg:pb-0 gap-y-3 lg:gap-y-8 text-center lg:text-left">
          <h1 className="font-black text-3xl lg:text-6xl">
            Learn to code by watching others
          </h1>
          <p className="text-lg lg:text-xl">
            See how experienced developers solve problems in real-time. Watching
            scripted tutorials is great, but understanding how developers think
            is invaluable.
          </p>
        </div>
        <div className="flex flex-col items-center">
          <button className=" bg-fem-07-accent w-full lg:w-[500px] p-5 mb-8 rounded-lg text-slate-50 text-base shadow-fem-07-btn hover:bg-opacity-90">
            <span className="font-black">Try it free 7 days </span>then $20/mo.
            thereafter
          </button>
          <form className="flex flex-col bg-slate-50 p-6 lg:p-9 rounded-lg w-full lg:w-[500px] gap-5">
            <input
              placeholder="First Name"
              type="text"
              className="bg-slate-50 border border-fem-07-gray-blue py-4 px-6 text-sm rounded-md  focus:border-gray-800"
            />
            <input
              placeholder="Last Name"
              type="text"
              className="bg-slate-50 border border-fem-07-gray-blue py-4 px-6 text-sm rounded-md  focus:border-gray-800"
            />
            <input
              placeholder="Email Address"
              type="email"
              className="bg-slate-50 border border-fem-07-gray-blue py-4 px-6 text-sm rounded-md  focus:border-gray-800"
            />
            <input
              placeholder="Password"
              type="password"
              className="bg-slate-50 border border-fem-07-gray-blue py-4 px-6 text-sm rounded-md  focus:border-gray-800"
            />
            <button className="bg-fem-07-primary-green py-4 mb-[-8px] rounded-lg text-slate-50 uppercase font-bold shadow-fem-07-primary-btn hover:bg-opacity-70">
              Claim your free trial
            </button>
            <p className="text-center text-xs text-fem-07-gray-blue">
              By clicking this button, you are agreeing to our{" "}
              <span className="font-bold text-fem-07-primary-red cursor-pointer hover:text-opacity-80">
                Terms and Services
              </span>
            </p>
          </form>
        </div>
      </div>

      {/* == back to home button == */}
      <Link to="/" className="btn btn-accent absolute top-4 left-4 mb-6">
        <IoArrowBackOutline />
        <button className="pl-3">Back</button>
      </Link>

      {/* == credits == */}
      <div className="absolute bottom-3 lg:bottom-10 text-xs text-center text-slate-50">
        <p>
          Challenge by{" "}
          <a
            href="https://www.frontendmentor.io?ref=challenge"
            aria-label="frontend-mentor"
            target="_blank"
            rel="noreferrer noopener"
            className="cursor-pointer font-bold text-fem-07-accent hover:text-fem-07-primary-green"
          >
            Frontend Mentor
          </a>
        </p>
        <p>
          Coded by{" "}
          <Link
            to="/"
            className="cursor-pointer font-bold text-fem-07-accent hover:text-fem-07-primary-green"
          >
            Rowee
          </Link>
        </p>
      </div>
    </div>
  );
};

export default FemIntroSignupForm;
