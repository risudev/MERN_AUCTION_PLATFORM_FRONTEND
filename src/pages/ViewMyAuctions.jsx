import CardTwo from "@/custom-components/CardTwo";
import Spinner from "@/custom-components/Spinner";
import { getMyAuctionItems } from "@/store/slices/auctionSlice";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const ViewMyAuctions = () => {
  const { myAuctions, loading } = useSelector((state) => state.auction);
  const { user, isAuthenticated } = useSelector((state) => state.user);

  const dispatch = useDispatch();
  const navigateTo = useNavigate();

  useEffect(() => {
    if (!isAuthenticated || user.role !== "Auctioneer") {
      navigateTo("/");
    }
    dispatch(getMyAuctionItems());
  }, [dispatch, isAuthenticated]);

  return (
    <>
      <div className="w-full px-5 pt-20 lg:pl-[320px] flex flex-col min-h-screen bg-gray-50">
        <h1 className="text-[#d6482b] text-4xl sm:text-5xl md:text-6xl font-extrabold mb-8 tracking-tight">
          My Auctions
        </h1>

        {loading ? (
          <Spinner />
        ) : (
          <div
            className={`${myAuctions.length > 2 && "flex-grow"
              } flex flex-wrap gap-8`}
          >
            {myAuctions.length > 0 ? (
              myAuctions.map((element) => (
                <CardTwo
                  title={element.title}
                  startingBid={element.startingBid}
                  endTime={element.endTime}
                  startTime={element.startTime}
                  imgSrc={element.image?.url}
                  id={element._id}
                  key={element._id}
                />
              ))
            ) : (
              <h3 className="text-gray-500 text-lg sm:text-xl md:text-2xl font-medium mt-10 text-center w-full">
                You have not posted any auction.
              </h3>
            )}
          </div>
        )}
      </div>
    </>
  );
};

export default ViewMyAuctions;
