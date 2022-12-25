import { Link } from "react-router-dom";
import { IoArrowBackOutline } from "react-icons/io5";

//-------------------------------------------------------------------

const FemAdviceGenerator = () => {
  return (
    <div className="flex relative justify-center items-center font-outfit h-screen overflow-hidden bg-fem-03-mainbg">
      <Link
        to="/"
        className="btn btn-outline btn-accent absolute top-4 left-4 mb-6"
      >
        <IoArrowBackOutline />
        <button className="pl-3">Back</button>
      </Link>

      <div>
        <h1>FemAdviceGenerator</h1>
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

export default FemAdviceGenerator;
