import { Link } from "react-router-dom";
import { IoArrowBackOutline } from "react-icons/io5";

import { femProductImgDesktop, femProductImgMobile } from "../../assets";

//-------------------------------------------------------------------

const FemProductCard = () => {
  return (
    <div className="flex relative bg-fem-01 h-screen w-screen justify-center items-center text-gray-900 overflow-hidden">
      <Link
        to="/"
        className="btn btn-outline btn-accent absolute top-4 left-4 mb-6"
      >
        <IoArrowBackOutline />
        <button className="pl-3">Back</button>
      </Link>

      <div className="flex flex-col lg:flex-row bg-slate-50 w-full md:w-1/2 lg:w-8/12 xl:w-1/2 h-11/12 xl:h-3/5 m-5 rounded-2xl font-montserrat">
        <div className="hidden lg:inline object-contain rounded-l-2xl object-center w-1/2 overflow-hidden">
          <img src={femProductImgDesktop} alt="product-img" />
        </div>

        <div className="lg:hidden object-contain rounded-t-2xl object-center overflow-hidden">
          <img src={femProductImgMobile} alt="product-img" />
        </div>

        <div className="flex flex-col p-6 lg:p-8 lg:w-1/2 justify-center">
          <h4 className="uppercase text-base tracking-[0.4rem] pb-3 xl:pb-5">
            Perfume
          </h4>
          <h1 className="font-black text-4xl font-fraunces lg:w-4/5 pb-5 xl:pb-8">
            Gabrielle Essence Eau De Parfum
          </h1>
          <p className="xl:w-4/5">
            A floral, solar and voluptuous interpretation composed by Olivier
            Polge, Perfumer-Creator for the House of CHANEL.
          </p>
          <div className="flex flex-row py-8 items-center">
            <h3 className="font-black text-4xl text-fem-01-light font-fraunces">
              $149.99
            </h3>
            <span className="line-through pl-5">$169.99</span>
          </div>
          <button className="flex flex-row justify-center items-center gap-3 w-full  h-14 rounded-xl text-slate-50 font-bold bg-fem-01-light hover:bg-fem-01-dark ">
            <svg width="15" height="16" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M14.383 10.388a2.397 2.397 0 0 0-1.518-2.222l1.494-5.593a.8.8 0 0 0-.144-.695.8.8 0 0 0-.631-.28H2.637L2.373.591A.8.8 0 0 0 1.598 0H0v1.598h.983l1.982 7.4a.8.8 0 0 0 .799.59h8.222a.8.8 0 0 1 0 1.599H1.598a.8.8 0 1 0 0 1.598h.943a2.397 2.397 0 1 0 4.507 0h1.885a2.397 2.397 0 1 0 4.331-.376 2.397 2.397 0 0 0 1.12-2.021ZM11.26 7.99H4.395L3.068 3.196h9.477L11.26 7.991Zm-6.465 6.392a.8.8 0 1 1 0-1.598.8.8 0 0 1 0 1.598Zm6.393 0a.8.8 0 1 1 0-1.598.8.8 0 0 1 0 1.598Z"
                fill="#FFF"
              />
            </svg>
            Add to Cart
          </button>
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

export default FemProductCard;
