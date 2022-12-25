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
  femIntroSignupImg,
  femInteractiveCardImg,
  femAdviceGenImg,
} from "../assets";

//----------------------------------------------------------

const Home = () => {
  return (
    <div className="flex flex-col lg:p-5 mx-0 xl:mx-24 text-slate-50 text-center bg-bunker-gray-700">
      <Header />
      <div className="flex flex-col items-center px-5 w-full lg:px-52">
        <h1 className="font-lexenddeca font-black text-3xl lg:text-4xl pt-28">
          Welcome to my frontend mentor solutions page!
        </h1>
        <p className="pt-3 text-gray-400 font-poppins">
          This page is separated from my website to make it cleaner and for me
          to share the repository for these solutions to the frontend mentor
          challenge. All of these outputs were created using React and Tailwind
          CSS. Click the GitHub icon above to see the repo. Enjoy!
        </p>
      </div>
      <div className="border-b border-bunker-gray-100 w-full h-10 mt-10" />
      <div className="flex flex-col md:flex-row flex-wrap items-start py-16">
        <FemCard
          femId="fem-product-card"
          imgURL={femProductCardImg}
          femNum="project-01"
          femTitle="Product preview card"
          femDescription="This HTML & CSS-only challenge will be perfect for anyone starting
            to build responsive projects."
          femCategory="Newbie"
          categoryColor="skyblue"
        />
        <FemCard
          femId="fem-rating-component"
          imgURL={femRatingCardImg}
          femNum="project-02"
          femTitle="Interactive rating component"
          femDescription="This is a nice, small project to practice handling user interactions and updating the DOM. Perfect for anyone who has learned the basics of JavaScript!"
          femCategory="Newbie"
          categoryColor="skyblue"
        />
        <FemCard
          femId="fem-nft-preview-card"
          imgURL={femNftPreviewCardImg}
          femNum="project-03"
          femTitle="NFT preview card component"
          femDescription="This HTML & CSS only challenge is perfect for anyone just starting out or anyone wanting a small project to play around with."
          femCategory="Newbie"
          categoryColor="skyblue"
        />
        <FemCard
          femId="fem-order-summary"
          imgURL={femOrderSumImg}
          femNum="project-04"
          femTitle="Order summary component"
          femDescription="A perfect project for newbies who are starting to build confidence with layouts!"
          femCategory="Newbie"
          categoryColor="skyblue"
        />
        <FemCard
          femId="fem-stats-preview-card"
          imgURL={femStatsCardImg}
          femNum="project-05"
          femTitle="Stats preview card component"
          femDescription="This is a great small challenge to help get you used to building to a design. There's no JS in this project, so you'll be able to focus on your HTML & CSS skills."
          femCategory="Newbie"
          categoryColor="skyblue"
        />
        <FemCard
          femId="fem-3col-card"
          imgURL={fem3colCardImg}
          femNum="project-06"
          femTitle="3-column preview card component"
          femDescription="This challenge is perfect if you're just getting started. The shift between the layouts will be a nice test if you're new to building responsive projects."
          femCategory="Newbie"
          categoryColor="skyblue"
        />
        <FemCard
          femId="fem-intro-signup-form"
          imgURL={femIntroSignupImg}
          femNum="project-07"
          femTitle="Intro component with sign-up form"
          femDescription="Practice building out a sign-up form complete with client-side validation using JavaScript."
          femCategory="Newbie"
          categoryColor="skyblue"
        />
        <FemCard
          femId="fem-interactive-card"
          imgURL={femInteractiveCardImg}
          femNum="project-08"
          femTitle="Interactive card details form"
          femDescription="This fun project will be an excellent way to practice DOM manipulation and form validation while also putting your HTML and CSS skills to the test."
          femCategory="Junior"
          categoryColor="palegreen"
        />
        <FemCard
          femId="fem-advice-generator"
          imgURL={femAdviceGenImg}
          femNum="project-09"
          femTitle="Advice generator app"
          femDescription="The perfect project if you're learning how to interact with 3rd-party APIs. This challenge uses the Advice Slip API to generate random quotes of advice."
          femCategory="Junior"
          categoryColor="palegreen"
        />
      </div>
      <Footer />
    </div>
  );
};

export default Home;
