import Header from "../components/Header";
import FemCard from "../components/FemCard";

import { femProductCardImg, femRatingCardImg } from "../assets";

//----------------------------------------------------------

const Home = () => {
  return (
    <div className="p-5 mx-24 text-slate-50 text-center bg-bunker-gray-700">
      <Header />
      <div className="flex flex-col items-center w-full px-52">
        <h1 className="font-lexenddeca font-black text-4xl  pt-28">
          Welcome to my frontend mentor solutions page!
        </h1>
        <p className="pt-3 text-slate-300">
          This page is separated from my website to make it cleaner and for me
          to share the repository for these solutions to the frontend mentor
          challenge. Click the github icon above to see the repo. Enjoy!
        </p>
      </div>
      <div className="border-b border-bunker-gray-400 w-full h-10 mt-10" />
      <div className="flex flex-wrap items-start py-16">
        <FemCard
          femId="fem-product-card"
          imgURL={femProductCardImg}
          femNum="project-01"
          femTitle="Product preview card"
          femDescription="This HTML & CSS-only challenge will be perfect for anyone starting
            to build responsive projects."
          femCategory="Newbie"
        />
        <FemCard
          femId="fem-rating-component"
          imgURL={femRatingCardImg}
          femNum="project-02"
          femTitle="Interactive rating component"
          femDescription="This is a nice, small project to practice handling user interactions and updating the DOM. Perfect for anyone who has learned the basics of JavaScript!"
          femCategory="Newbie"
        />
      </div>
    </div>
  );
};

export default Home;
