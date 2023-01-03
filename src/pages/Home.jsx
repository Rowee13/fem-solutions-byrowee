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
  femIntroSectionImg,
  femTestimonialImg,
} from "../assets";

//----------------------------------------------------------

const Home = () => {
  return (
    <div className="flex flex-col justify-center items-center lg:p-5 mx-0 xl:mx-24 text-slate-50 text-center bg-bunker-gray-700 bg-opacity-60">
      <Header />
      <div className="flex flex-col items-center px-5 lg:px-52">
        <h1 className="w-full lg:w-10/12 xl:w-7/12 font-lexenddeca font-black text-3xl lg:text-4xl pt-28">
          Welcome to my frontend mentor solutions page!
        </h1>
        <p className="w-11/12 lg:w-9/12 pt-7 text-zinc-400 font-poppins">
          This page is distinct from my website in order to keep things
          organized and to allow me to share my solutions to the frontend mentor
          challenges. All of the outputs here were created using React and
          Tailwind CSS. Click the GitHub icon above to see the repo. Enjoy!
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
          categoryColor="mediumturquoise"
        />
        <FemCard
          femId="fem-rating-component"
          imgURL={femRatingCardImg}
          femNum="project-02"
          femTitle="Interactive rating component"
          femDescription="This is a nice, small project to practice handling user interactions and updating the DOM. Perfect for anyone who has learned the basics of JavaScript!"
          femCategory="Newbie"
          categoryColor="mediumturquoise"
        />
        <FemCard
          femId="fem-nft-preview-card"
          imgURL={femNftPreviewCardImg}
          femNum="project-03"
          femTitle="NFT preview card component"
          femDescription="This HTML & CSS only challenge is perfect for anyone just starting out or anyone wanting a small project to play around with."
          femCategory="Newbie"
          categoryColor="mediumturquoise"
        />
        <FemCard
          femId="fem-order-summary"
          imgURL={femOrderSumImg}
          femNum="project-04"
          femTitle="Order summary component"
          femDescription="A perfect project for newbies who are starting to build confidence with layouts!"
          femCategory="Newbie"
          categoryColor="mediumturquoise"
        />
        <FemCard
          femId="fem-stats-preview-card"
          imgURL={femStatsCardImg}
          femNum="project-05"
          femTitle="Stats preview card component"
          femDescription="This is a great small challenge to help get you used to building to a design. There's no JS in this project, so you'll be able to focus on your HTML & CSS skills."
          femCategory="Newbie"
          categoryColor="mediumturquoise"
        />
        <FemCard
          femId="fem-3col-card"
          imgURL={fem3colCardImg}
          femNum="project-06"
          femTitle="3-column preview card component"
          femDescription="This challenge is perfect if you're just getting started. The shift between the layouts will be a nice test if you're new to building responsive projects."
          femCategory="Newbie"
          categoryColor="mediumturquoise"
        />
        <FemCard
          femId="fem-intro-signup-form"
          imgURL={femIntroSignupImg}
          femNum="project-07"
          femTitle="Intro component with sign-up form"
          femDescription="Practice building out a sign-up form complete with client-side validation using JavaScript."
          femCategory="Newbie"
          categoryColor="mediumturquoise"
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
        <FemCard
          femId="fem-intro-section"
          imgURL={femIntroSectionImg}
          femNum="project-10"
          femTitle="Intro section with dropdown navigation"
          femDescription="This challenge will test your ability to create dropdown navigation menus, a common pattern on larger sites. It will also provide some nice basic layout challenges."
          femCategory="Junior"
          categoryColor="palegreen"
        />
        <FemCard
          femId="fem-testimonial-slider"
          imgURL={femTestimonialImg}
          femNum="project-11"
          femTitle="Coding bootcamp testimonials slider"
          femDescription="This challenge will be a nice test if you're new to JavaScript. It's also a great opportunity to play around with content animations and transitions."
          femCategory="Junior"
          categoryColor="palegreen"
        />
      </div>
      <Footer />
    </div>
  );
};

export default Home;
