// import Spinner from "@/custom-components/Spinner";
// import React from "react";
// import { useSelector } from "react-redux";

// const Leaderboard = () => {
//   const { loading, leaderboard} = useSelector((state) => state.user);
//   return (
//     <section className="w-full ml-0 m-0 h-fit px-5 pt-20 lg:pl-[320px] flex flex-col bg-[#f9f7f5]">
//       {loading ? (
//         <div className="flex justify-center items-center h-screen">
//           <Spinner />
//         </div>
//       ) : (
//         <>
//           <div className="flex flex-col min-[340px]:flex-row min-[340px]:gap-2 mb-5">
//               <h1 className="text-4xl md:text-6xl xl:text-7xl font-extrabold text-[#d6482b] leading-tight mb-3">
//               Bidders Leaderboard
//             </h1>
//           </div>

//           <div className="overflow-x-auto">
//             <table className="min-w-full bg-white border border-gray-300 rounded-lg shadow-md">
//               <thead className="bg-gray-100">
//                 <tr>
//                   <th className="py-3 px-4 text-left text-gray-700 font-semibold">#</th>
//                   <th className="py-3 px-4 text-left text-gray-700 font-semibold">Profile</th>
//                   <th className="py-3 px-4 text-left text-gray-700 font-semibold">Username</th>
//                   <th className="py-3 px-4 text-left text-gray-700 font-semibold">Bid Expenditure</th>
//                   <th className="py-3 px-4 text-left text-gray-700 font-semibold">Auctions Won</th>
//                 </tr>
//               </thead>

//               <tbody className="text-gray-700">
//                 {leaderboard.slice(0, 100).map((element, index) => (
//                   <tr key={element._id} className="border-b border-gray-200 hover:bg-gray-50 transition-all">
//                     <td className="py-2 px-4">{index + 1}</td>
//                     <td className="flex gap-2 items-center py-2 px-4">
//                       <img
//                         src={element.profileImage?.url}
//                         alt={element.userName}
//                         className="h-12 w-12 object-cover rounded-full border border-gray-300"
//                       />
//                     </td>
//                     <td className="py-2 px-4">{element.userName}</td>
//                     <td className="py-2 px-4">{element.moneySpent}</td>
//                     <td className="py-2 px-4">{element.auctionsWon}</td>
//                   </tr>
//                 ))}
//               </tbody>
//             </table>
//           </div>
//         </>
//       )}
//     </section>
//   );
// };

// export default Leaderboard;

import Spinner from "@/custom-components/Spinner";
import React from "react";
import { useSelector } from "react-redux";

const Leaderboard = () => {
  const { loading, leaderboard } = useSelector((state) => state.user);
  return (
    <>
      <section className="w-full ml-0 m-0 h-fit px-5 pt-20 lg:pl-[320px] flex flex-col">
        {loading ? (
          <Spinner />
        ) : (
          <>
            <div className="flex flex-col min-[340px]:flex-row min-[340px]:gap-2 mb-5">
              <h1
                className={`text-[#D6482B] text-2xl font-bold mb-2 min-[480px]:text-4xl md:text-6xl xl:text-7xl 2xl:text-8xl`}
              >
                Bidders Leaderboard
              </h1>
            </div>
            <div className="overflow-x-auto">
              <table className="min-w-full bg-white border my-5 border-gray-300">
                <thead>
                  <tr>
                    <th className="py-2 px-4 text-left">Profile Pic</th>
                    <th className="py-2 px-4 text-left">Username</th>
                    <th className="py-2 px-4 text-left">Bid Expenditure</th>
                    <th className="py-2 px-4 text-left">Auctions Won</th>
                  </tr>
                </thead>
                <tbody className="text-gray-700">
                  {leaderboard.slice(0, 100).map((element, index) => {
                    return (
                      <tr
                        key={element._id}
                        className="border-b border-gray-300"
                      >
                        <td className="flex gap-2 items-center py-2 px-4">
                          <span className="text-stone-400 font-semibold text-xl w-7 hidden sm:block">
                            {index + 1}
                          </span>
                          <span>
                            <img
                              src={element.profileImage?.url}
                              alt={element.username}
                              className="h-12 w-12 object-cover rounded-full"
                            />
                          </span>
                        </td>
                        <td className="py-2 px-4">{element.userName}</td>
                        <td className="py-2 px-4">{element.moneySpent}</td>
                        <td className="py-2 px-4">{element.auctionsWon}</td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </>
        )}
      </section>
    </>
  );
};

export default Leaderboard;