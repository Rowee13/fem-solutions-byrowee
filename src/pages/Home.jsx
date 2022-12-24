import Header from "../components/Header";
import FemCard from "../components/FemCard";

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
      <div className="flex items-start">
        <FemCard />
      </div>
    </div>
  );
};

export default Home;
