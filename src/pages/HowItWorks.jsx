import React from "react";
import {
  FaUser,
  FaGavel,
  FaEnvelope,
  FaDollarSign,
  FaFileInvoice,
  FaRedo,
} from "react-icons/fa";

const HowItWorks = () => {
  const steps = [
    {
      icon: <FaUser />,
      title: "User Registration",
      description:
        "Users must register or log in to perform operations such as posting auctions, bidding on items, accessing the dashboard, and sending payment proof.",
    },
    {
      icon: <FaGavel />,
      title: "Role Selection",
      description:
        'Users can register as either a "Bidder" or "Auctioneer." Bidders can bid on items, while Auctioneers can post items.',
    },
    {
      icon: <FaEnvelope />,
      title: "Winning Bid Notification",
      description:
        "After winning an item, the highest bidder will receive an email with the Auctioneer's payment method information, including UPI, bank transfer.",
    },
    {
      icon: <FaDollarSign />,
      title: "Commission Payment",
      description:
        "If the Bidder pays, the Auctioneer must pay 5% of that payment to the platform. Failure to pay results in being unable to post new items, and a legal notice will be sent.",
    },
    {
      icon: <FaFileInvoice />,
      title: "Proof of Payment",
      description:
        "The platform receives payment proof as a screenshot and the total amount sent. Once approved by the Administrator, the unpaid commission of the Auctioneer will be adjusted accordingly.",
    },
    {
      icon: <FaRedo />,
      title: "Reposting Items",
      description:
        "If the Bidder does not pay, the Auctioneer can republish the item without any additional cost.",
    },
  ];

  return (
    <section className="w-full ml-0 m-0 h-fit px-5 pt-20 lg:pl-[320px] flex flex-col min-h-screen py-4 justify-center bg-[#f9f7f5]">
      <h1 className="text-[#d6482b] text-3xl md:text-5xl font-extrabold mb-8 text-center lg:text-left">
        Discover How Auction Platform Operates
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
        {steps.map((element, index) => (
          <div
            key={index}
            className="bg-white rounded-xl p-6 flex flex-col gap-4 group hover:bg-black transition-all duration-300 shadow-md"
          >
            <div className="bg-black text-white p-3 text-2xl rounded-full w-fit group-hover:bg-white group-hover:text-[#d6482b] transition-all duration-300">
              {element.icon}
            </div>
            <h3 className="text-[#D6482B] group-hover:text-white text-xl md:text-2xl font-semibold">
              {element.title}
            </h3>
            <p className="text-stone-700 group-hover:text-white text-base md:text-lg">
              {element.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default HowItWorks;
