import { Link } from "react-router-dom";
import { IoArrowBackOutline } from "react-icons/io5";

//-------------------------------------------------------------------

const FemIntroSection = () => {
  return (
    <div className="flex relative bg-fem-10-white h-screen w-screen justify-center items-center text-gray-900 overflow-hidden">
      <div>
        <h1>FemIntroSection</h1>
      </div>

      {/* == back to main page== */}
      <Link
        to="/"
        className="btn btn-outline btn-accent absolute bottom-1 left-7 mb-6"
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

export default FemIntroSection;
