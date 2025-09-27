import React from "react";

const About = () => {
  const values = [
    {
      id: 1,
      title: "Transparency & Trust",
      description:
        "We believe every auction should be fair. That’s why we prioritize honesty, clear rules, and real-time information for both buyers and sellers.",
    },
    {
      id: 2,
      title: "Innovation-Driven",
      description:
        "Our platform constantly evolves with new features, intuitive design, and smart tools to enhance user experience and auction efficiency.",
    },
    {
      id: 3,
      title: "Community",
      description:
        "Whether you're a first-time bidder or a seasoned seller, Auction Platform is built to offer ease of use, speed, and clarity throughout your journey.",
    },
    {
      id: 4,
      title: "Customer Focused",
      description:
        "We are committed to providing exceptional customer support and resources to help users navigate the auction process with ease.",
    },
  ];

  return (
    <section className="w-full ml-0 m-0 h-fit px-6 lg:pl-[320px] flex flex-col min-h-screen py-12 gap-12 bg-[#f9f7f5]">
      <div className="max-w-4xl mx-auto flex flex-col gap-6">
        <h1 className="text-[#d6482b] text-3xl md:text-5xl font-extrabold mb-4 text-center lg:text-left">
          🏷️ About Us
        </h1>
        <p className="text-stone-700 text-lg md:text-xl">
          Welcome to Auction Platform, a next-generation auction platform designed to redefine how people buy and sell online. Since our founding in 2025, we’ve been committed to creating a powerful, secure, and user-friendly space where sellers list with confidence and buyers bid with excitement.
        </p>
      </div>

      <div className="max-w-4xl mx-auto flex flex-col gap-6">
        <h3 className="text-[#d6482b] text-3xl md:text-5xl font-extrabold mb-4 text-center lg:text-left">
          🎯 Our Mission
        </h3>
        <p className="text-stone-700 text-lg md:text-xl">
          At Auction Platform, our mission is to transform online auctions into a seamless and engaging experience. We aim to empower individuals and businesses with tools that simplify listing, bidding, and winning — while ensuring transparency and trust at every step.
        </p>
      </div>

      <div className="max-w-4xl mx-auto flex flex-col gap-6">
        <h3 className="text-[#d6482b] text-3xl md:text-5xl font-extrabold mb-4 text-center lg:text-left">
          💡 What We Stand For
        </h3>
        <ul className="list-inside flex flex-col gap-3">
          {values.map((element) => (
            <li key={element.id} className="text-stone-700 text-lg md:text-xl">
              <span className="text-black font-bold">{element.title}</span>: {element.description}
            </li>
          ))}
        </ul>
      </div>

      <div className="max-w-4xl mx-auto flex flex-col gap-6">
        <h3 className="text-[#d6482b] text-3xl md:text-5xl font-extrabold mb-4 text-center lg:text-left">
          📖 Our Story
        </h3>
        <p className="text-stone-700 text-lg md:text-xl">
          Founded by Risudeveloper, Auction Platform emerged from a vision to simplify and energize the auction experience. Drawing on deep industry knowledge and a passion for digital marketplaces, our team set out to build an auction platform that brings people together — across interests, industries, and countries.
        </p>
      </div>

      <div className="max-w-4xl mx-auto flex flex-col gap-6">
        <h3 className="text-[#d6482b] text-3xl md:text-5xl font-extrabold mb-4 text-center lg:text-left">
          🚀 Join the Auction Revolution
        </h3>
        <p className="text-stone-700 text-lg md:text-xl">
          Whether you're here to buy, sell, or simply explore, Auction Platform welcomes you to a smarter way of auctioning online. Browse unique listings, place your bids, and experience the satisfaction of winning — all on a platform designed with you in mind.
        </p>
      </div>

      <div className="max-w-4xl mx-auto text-center">
        <p className="text-[#d6482b] text-xl md:text-2xl font-bold">
          Thank you for choosing Auction Platform. <br />
          Your trusted partner in the future of online auction. <br />
          We look forward to being a part of your auction journey!
        </p>
      </div>
    </section>
  );
};

export default About;
