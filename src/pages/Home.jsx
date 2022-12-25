import Header from "../components/Header";
import FemCard from "../components/FemCard";
import Footer from "../components/Footer";

import {
  femProductCardImg,
  femRatingCardImg,
  femNftPreviewCardImg,
  femOrderSumImg,
  femStatsCardImg,
  fem3colCardImg,
} from "../assets";

//----------------------------------------------------------

const Home = () => {
  return (
    <div className="p-5 mx-24 text-slate-50 text-center bg-bunker-gray-700">
      <Header />
      <div className="flex flex-col items-center w-full px-52">
        <h1 className="font-lexenddeca font-black text-4xl  pt-28">
          Welcome to my frontend mentor solutions page!
        </h1>
        <p className="pt-3 text-slate-400 font-poppins">
          This page is separated from my website to make it cleaner and for me
          to share the repository for these solutions to the frontend mentor
          challenge. All of these outputs were created using React and Tailwind
          CSS. Click the GitHub icon above to see the repo. Enjoy!
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
        <FemCard
          femId="fem-nft-preview-card"
          imgURL={femNftPreviewCardImg}
          femNum="project-03"
          femTitle="NFT preview card component"
          femDescription="This HTML & CSS only challenge is perfect for anyone just starting out or anyone wanting a small project to play around with."
          femCategory="Newbie"
        />
        <FemCard
          femId="fem-order-summary"
          imgURL={femOrderSumImg}
          femNum="project-04"
          femTitle="Order summary component"
          femDescription="A perfect project for newbies who are starting to build confidence with layouts!"
          femCategory="Newbie"
        />
        <FemCard
          femId="fem-stats-preview-card"
          imgURL={femStatsCardImg}
          femNum="project-05"
          femTitle="Stats preview card component"
          femDescription="This is a great small challenge to help get you used to building to a design. There's no JS in this project, so you'll be able to focus on your HTML & CSS skills."
          femCategory="Newbie"
        />
        <FemCard
          femId="fem-3col-card"
          imgURL={fem3colCardImg}
          femNum="project-06"
          femTitle="3-column preview card component"
          femDescription="This challenge is perfect if you're just getting started. The shift between the layouts will be a nice test if you're new to building responsive projects."
          femCategory="Newbie"
        />
      </div>
      <Footer />
    </div>
  );
};

export default Home;
