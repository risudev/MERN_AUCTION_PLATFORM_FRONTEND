import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import FeaturedAuctions from "./home-sub-components/FeaturedAuctions";
import UpcomingAuctions from "./home-sub-components/UpcomingAuctions";
import Leaderboard from "./home-sub-components/Leaderboard";

const Home = () => {
  const howItWorks = [
    { title: "Post Items", description: "Auctioneer posts items for bidding." },
    { title: "Place Bids", description: "Bidders place bids on listed items." },
    {
      title: "Win Notification",
      description: "Highest bidder receives a winning email.",
    },
    {
      title: "Payment & Fees",
      description: "Bidder pays; auctioneer pays 5% fee.",
    },
  ];

  const { isAuthenticated } = useSelector((state) => state.user);

  return (
    <section className="w-full ml-0 px-6 lg:pl-[320px] min-h-screen flex flex-col py-12 bg-[#f9f7f5]">
      {/* HERO */}
      <div className="text-center lg:text-left mb-16">
        <p className="text-[#c9b8a9] font-medium text-lg tracking-wide mb-3">
          Transparency Leads to Your Victory
        </p>
        <h1 className="text-4xl md:text-6xl xl:text-7xl font-extrabold text-gray-900 leading-tight">
          Transparent Auctions
        </h1>
        <h1 className="text-4xl md:text-6xl xl:text-7xl font-extrabold text-[#d6482b] leading-tight mb-8">
          Be The Winner
        </h1>

        {!isAuthenticated && (
          <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
            <Link
              to="/sign-up"
              className="bg-[#d6482b] hover:bg-[#b8381e] text-white font-semibold px-10 py-3 rounded-lg shadow-md transition-all duration-300"
            >
              Sign Up
            </Link>
            <Link
              to="/login"
              className="border-2 border-[#c9b8a9] text-[#c9b8a9] hover:bg-[#fff3ed] hover:text-[#d6482b] font-semibold px-10 py-3 rounded-lg shadow-md transition-all duration-300"
            >
              Login
            </Link>
          </div>
        )}
      </div>

      {/* HOW IT WORKS */}
      <div className="mb-20">
        <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-10 text-center lg:text-left">
          How it works
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6">
          {howItWorks.map((element) => (
            <div
              key={element.title}
              className="bg-white rounded-xl p-6 shadow hover:shadow-lg transition-all duration-300 text-center lg:text-left"
            >
              <h5 className="font-semibold text-lg text-gray-800 mb-2">
                {element.title}
              </h5>
              <p className="text-gray-600 text-sm">{element.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* FEATURED AUCTIONS */}
      <div className="mb-20">
        <FeaturedAuctions />
      </div>

      {/* UPCOMING AUCTIONS */}
      <div className="mb-20">
        <UpcomingAuctions />
      </div>

      {/* LEADERBOARD */}
      <div className="mb-20">
        <Leaderboard />
      </div>
    </section>
  );
};

export default Home;
