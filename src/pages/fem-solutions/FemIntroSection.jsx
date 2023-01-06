import { useState } from "react";
import { Link } from "react-router-dom";
import { IoArrowBackOutline } from "react-icons/io5";
import { IoIosMenu, IoIosClose } from "react-icons/io";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";

import {
  femIntroLogo,
  femIntroHeroDesktop,
  femIntroHeroMobile,
  femIntroDatabiz,
  femIntroAudiophile,
  femIntroMeet,
  femIntroMaker,
  femIntroIconTodo,
  femIntroIconCalendar,
  femIntroIconReminder,
  femIntroIconPlanning,
} from "../../assets";

//-------------------------------------------------------------------

const FemIntroSection = () => {
  const [toggleFeature, setToggleFeature] = useState(false);
  const [toggleCompany, setToggleCompany] = useState(false);
  const [toggleMobileNavbar, setToggleMobileNavbar] = useState(false);

  return (
    <div className="flex flex-col relative bg-fem-10-white h-full lg:h-screen w-screen font-epilogue text-fem-10-gray overflow-hidden">
      {/* == mobile side navbar == */}
      {toggleMobileNavbar && (
        <div className="flex absolute lg:hidden slide-left">
          <div
            onClick={() => setToggleMobileNavbar(!toggleMobileNavbar)}
            className="flex h-screen w-screen bg-fem-10-black opacity-70 z-10 overflow-hidden"
          />
          <div className="flex flex-col justify-start absolute w-4/6 h-screen bg-fem-10-white z-30 right-0 pr-2">
            <button
              onClick={() => setToggleMobileNavbar(!toggleMobileNavbar)}
              className="flex h-20 items-center place-content-end"
            >
              <IoIosClose className="w-14 h-14" />
            </button>
            <div className="flex flex-col px-6">
              <nav className="flex items-start">
                <ul className="flex flex-col gap-y-6">
                  <li>
                    <a
                      href="/fem-intro-section"
                      className="flex flex-row items-center hover:text-fem-10-black"
                      onClick={(e) => {
                        e.preventDefault();
                        setToggleFeature(!toggleFeature);
                        setToggleCompany(false);
                      }}
                    >
                      Feature
                      <MdOutlineKeyboardArrowDown className="w-6 h-6" />
                    </a>
                    {toggleFeature && (
                      <ul className="p-4">
                        <li>
                          <a
                            href="/fem-intro-section"
                            className="flex flex-row gap-4 pb-3"
                          >
                            <img
                              src={femIntroIconTodo}
                              alt="icon-todo"
                              className="w-5 h-5"
                            />
                            Todo List
                          </a>
                        </li>
                        <li>
                          <a
                            href="/fem-intro-section"
                            className="flex flex-row gap-4 pb-3"
                          >
                            <img
                              src={femIntroIconCalendar}
                              alt="icon-calendar"
                              className="w-5 h-5"
                            />
                            Calendar
                          </a>
                        </li>
                        <li>
                          <a
                            href="/fem-intro-section"
                            className="flex flex-row gap-4 pb-3"
                          >
                            <img
                              src={femIntroIconReminder}
                              alt="icon-reminder"
                              className="w-5 h-5"
                            />
                            Reminders
                          </a>
                        </li>
                        <li>
                          <a
                            href="/fem-intro-section"
                            className="flex flex-row gap-4"
                          >
                            <img
                              src={femIntroIconPlanning}
                              alt="icon-planning"
                              className="w-5 h-5"
                            />
                            Planning
                          </a>
                        </li>
                      </ul>
                    )}
                  </li>
                  <li>
                    <a
                      href="/fem-intro-section"
                      className="flex flex-row items-center hover:text-fem-10-black"
                      onClick={(e) => {
                        e.preventDefault();
                        setToggleCompany(!toggleCompany);
                        setToggleFeature(false);
                      }}
                    >
                      Company
                      <MdOutlineKeyboardArrowDown className="w-6 h-6" />
                    </a>
                    {toggleCompany && (
                      <ul className="p-4">
                        <li>
                          <a
                            href="/fem-intro-section"
                            className="flex flex-row gap-4 pb-3"
                          >
                            History
                          </a>
                        </li>
                        <li>
                          <a
                            href="/fem-intro-section"
                            className="flex flex-row gap-4 pb-3"
                          >
                            Our Team
                          </a>
                        </li>
                        <li>
                          <a
                            href="/fem-intro-section"
                            className="flex flex-row gap-4"
                          >
                            Blog
                          </a>
                        </li>
                      </ul>
                    )}
                  </li>
                  <li className="hover:text-fem-10-black">
                    <a href="/fem-intro-section">Careers</a>
                  </li>
                  <li className="hover:text-fem-10-black">
                    <a href="/fem-intro-section">About</a>
                  </li>
                </ul>
              </nav>
              <div className="flex flex-col items-center lg:hidden gap-y-4 pt-7">
                <button className="w-full px-6 py-2 hover:text-fem-10-black">
                  Login
                </button>
                <button className="border-2 border-fem-10-gray w-full px-6 py-2 rounded-xl hover:border-fem-10-black hover:text-fem-10-black">
                  Register
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* == header == */}
      <div className="flex flex-row h-20 w-full px-4 lg:px-10 items-center justify-between ">
        <div className="flex flex-row">
          <img src={femIntroLogo} alt="logo" className="pr-20" />
          <nav className="hidden lg:flex">
            <ul className="flex flex-row gap-12">
              <li>
                <a
                  href="/fem-intro-section"
                  className="flex flex-row items-center hover:text-fem-10-black"
                  onClick={(e) => {
                    e.preventDefault();
                    setToggleFeature(!toggleFeature);
                    setToggleCompany(false);
                  }}
                >
                  Feature
                  <MdOutlineKeyboardArrowDown className="w-6 h-6" />
                </a>
                {toggleFeature && (
                  <ul className="absolute bg-fem-10-white shadow-fem-10-dropdown-shadow p-7 mt-3 rounded-xl left-28">
                    <li>
                      <a href="/" className="flex flex-row gap-4 pb-3">
                        <img
                          src={femIntroIconTodo}
                          alt="icon-todo"
                          className="w-5 h-5"
                        />
                        Todo List
                      </a>
                    </li>
                    <li>
                      <a href="/" className="flex flex-row gap-4 pb-3">
                        <img
                          src={femIntroIconCalendar}
                          alt="icon-calendar"
                          className="w-5 h-5"
                        />
                        Calendar
                      </a>
                    </li>
                    <li>
                      <a href="/" className="flex flex-row gap-4 pb-3">
                        <img
                          src={femIntroIconReminder}
                          alt="icon-reminder"
                          className="w-5 h-5"
                        />
                        Reminders
                      </a>
                    </li>
                    <li>
                      <a href="/" className="flex flex-row gap-4">
                        <img
                          src={femIntroIconPlanning}
                          alt="icon-planning"
                          className="w-5 h-5"
                        />
                        Planning
                      </a>
                    </li>
                  </ul>
                )}
              </li>
              <li>
                <a
                  href="/fem-intro-section"
                  className="flex flex-row items-center hover:text-fem-10-black"
                  onClick={(e) => {
                    e.preventDefault();
                    setToggleCompany(!toggleCompany);
                    setToggleFeature(false);
                  }}
                >
                  Company
                  <MdOutlineKeyboardArrowDown className="w-6 h-6" />
                </a>
                {toggleCompany && (
                  <ul className="absolute bg-fem-10-white shadow-fem-10-dropdown-shadow p-7 mt-3 rounded-xl">
                    <li>
                      <a href="/" className="flex flex-row gap-4 pb-3">
                        History
                      </a>
                    </li>
                    <li>
                      <a href="/" className="flex flex-row gap-4 pb-3">
                        Our Team
                      </a>
                    </li>
                    <li>
                      <a href="/" className="flex flex-row gap-4">
                        Blog
                      </a>
                    </li>
                  </ul>
                )}
              </li>
              <li className="hover:text-fem-10-black">
                <a href="/fem-intro-section">Careers</a>
              </li>
              <li className="hover:text-fem-10-black">
                <a href="/fem-intro-section">About</a>
              </li>
            </ul>
          </nav>
        </div>
        <div className="flex flex-row gap-4 text-fem-10-gray">
          <div className="hidden lg:flex gap-x-4">
            <button className="px-6 py-2 hover:text-fem-10-black">Login</button>
            <button className="border-2 border-fem-10-gray px-6 py-2 rounded-xl hover:border-fem-10-black hover:text-fem-10-black">
              Register
            </button>
          </div>
          <button
            onClick={() => setToggleMobileNavbar(!toggleMobileNavbar)}
            className="flex lg:hidden"
          >
            <IoIosMenu className="w-10 h-10" />
          </button>
        </div>
      </div>

      {/* == hero content == */}
      <div className="flex flex-col-reverse lg:flex-row pb-20">
        <div className="flex flex-col lg:ml-40 items-center lg:items-start justify-start lg:justify-end text-fem-10-black">
          <h1 className="font-bold text-4xl lg:text-7xl pt-10 text-center lg:text-left">
            Make <br className="hidden lg:block" /> remote work
          </h1>
          <p className="pb-7 lg:pb-16 pt-2 w-11/12 lg:w-8/12 text-lg lg:text-xl text-center lg:text-left">
            Get your team in sync, no matter your location. Streamline
            processes, create team rituals, and watch productivity soar.
          </p>
          <button className="bg-fem-10-black py-3 px-7 mb-14 lg:mb-24 text-fem-10-white font-bold text-xl rounded-xl hover:text-fem-10-black hover:bg-fem-10-white hover:border-2 hover:border-fem-10-black">
            Learn more
          </button>
          <div className="flex flex-row flex-wrap justify-center lg:justify-between items-center gap-6 lg:gap-10 pb-28">
            <img src={femIntroDatabiz} alt="databiz" className="h-4 lg:h-5" />
            <img
              src={femIntroAudiophile}
              alt="audiophile"
              className="h-7 lg:h-8"
            />
            <img src={femIntroMeet} alt="meet" className="h-4 lg:h-5" />
            <img src={femIntroMaker} alt="maker" className="h-6 lg:h-7" />
          </div>
        </div>
        <div className="lg:pt-10">
          <img
            src={femIntroHeroDesktop}
            alt="hero-img"
            className="w-9/12 hidden lg:block object-contain overflow-hidden"
          />
          <img
            src={femIntroHeroMobile}
            alt="hero-mobile"
            className="flex lg:hidden w-full"
          />
        </div>
      </div>

      {/* == back to home button == */}
      <Link
        to="/"
        className="btn btn-outline btn-accent absolute bottom-0 left-6 mb-6"
      >
        <IoArrowBackOutline />
        <button className="pl-3">Back</button>
      </Link>

      {/* == credits == */}
      <div className="absolute bottom-5 right-6 text-xs text-right">
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
