// import Card from "@/custom-components/Card";
// import Spinner from "@/custom-components/Spinner";
// import React from "react";
// import { useSelector } from "react-redux";

// const Auctions = () => {
//   const { allAuctions, loading } = useSelector((state) => state.auction);

//   return (
//     <>
//       {loading ? (
//         <div className="flex justify-center items-center h-screen">
//           <Spinner />
//         </div>
//       ) : (
//         <main className="w-full min-h-screen px-6 pt-24 lg:pl-[320px] bg-[#f9f7f5] flex flex-col">
//           {/* PAGE HEADER */}
//           <section className="mb-12 text-center lg:text-left">
//               <h1 className="text-4xl md:text-6xl xl:text-7xl font-extrabold text-[#d6482b] leading-tight mb-3">
//               Auctions
//             </h1>
//             <p className="text-gray-600 max-w-2xl mb-8">
//               Explore all ongoing and upcoming auctions. Place your bids and stay updated with your favorite items.
//             </p>
//           </section>

//           {/* AUCTIONS GRID */}
//           <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
//             {allAuctions.map((auction) => (
//               <Card
//                 key={auction._id}
//                 id={auction._id}
//                 title={auction.title}
//                 startTime={auction.startTime}
//                 endTime={auction.endTime}
//                 startingBid={auction.startingBid}
//                 imgSrc={auction.image?.url}
//               />
//             ))}
//           </section>
//         </main>
//       )}
//     </>
//   );
// };

// export default Auctions;

import Card from "@/custom-components/Card";
import Spinner from "@/custom-components/Spinner";
import React from "react";
import { useSelector } from "react-redux";

const Auctions = () => {
  const { allAuctions, loading } = useSelector((state) => state.auction);
  return (
    <>
      {loading ? (
        <Spinner />
      ) : (
        <article className="w-full ml-0 m-0 h-fit px-5 pt-20 lg:pl-[320px] flex flex-col">
          <section className="my-8">
            <h1
              className={`text-[#d6482b] text-2xl font-bold mb-2 min-[480px]:text-4xl md:text-6xl xl:text-7xl 2xl:text-8xl`}
            >
              Auctions
            </h1>
            <div className="flex flex-wrap gap-6">
              {allAuctions.map((element) => (
                <Card
                  title={element.title}
                  startTime={element.startTime}
                  endTime={element.endTime}
                  imgSrc={element.image?.url}
                  startingBid={element.startingBid}
                  id={element._id}
                  key={element._id}
                />
              ))}
            </div>
          </section>
        </article>
      )}
    </>
  );
};

export default Auctions;