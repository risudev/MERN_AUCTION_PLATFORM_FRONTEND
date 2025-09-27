

import Spinner from "@/custom-components/Spinner";
import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const UserProfile = () => {
  const { user, isAuthenticated, loading } = useSelector((state) => state.user);
  const navigateTo = useNavigate();

  useEffect(() => {
    if (!isAuthenticated) {
      navigateTo("/");
    }
  }, [isAuthenticated]);

  return (
    <>
      <section className="w-full min-h-screen px-5 pt-20 lg:pl-[320px] flex flex-col">
        {loading ? (
          <div className="flex items-center justify-center flex-grow">
            <Spinner />
          </div>
        ) : (
          <div className="bg-white shadow-lg rounded-2xl p-6 max-w-5xl mx-auto w-full">
            {/* Profile Image */}
            <div className="flex flex-col items-center gap-3">
              <img
                src={user.profileImage?.url}
                alt="profile"
                className="w-32 h-32 rounded-full shadow-md border-2 border-gray-200 object-cover"
              />
              <h2 className="text-2xl font-bold text-gray-800">
                {user.userName}
              </h2>
              <p className="text-sm text-gray-500">{user.role}</p>
            </div>

            {/* Personal Details */}
            <div className="mt-8">
              <h3 className="text-xl font-semibold text-[#D6482B] mb-4">
                Personal Details
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <Detail label="Username" value={user.userName} />
                <Detail label="Email" value={user.email} />
                <Detail label="Phone" value={user.phone} />
                <Detail label="Address" value={user.address} />
                <Detail label="Role" value={user.role} />
                <Detail
                  label="Joined On"
                  value={user.createdAt?.substring(0, 10)}
                />
              </div>
            </div>

            {/* Payment Details (Auctioneer only) */}
            {user.role === "Auctioneer" && (
              <div className="mt-8">
                <h3 className="text-xl font-semibold text-[#D6482B] mb-4">
                  Payment Details
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <Detail
                    label="Bank Name"
                    value={user.paymentMethods.bankTransfer.bankName}
                  />
                  <Detail
                    label="Bank Account Number"
                    value={user.paymentMethods.bankTransfer.bankAccountNumber}
                  />
                  <Detail
                    label="User Name On Bank Account"
                    value={user.paymentMethods.bankTransfer.bankAccountName}
                  />
                  <Detail
                    label="UPI ID"
                    value={user.paymentMethods.upi?.upiId}
                  />
                  <Detail
                    label="Paypal Email"
                    value={user.paymentMethods.paypal.paypalEmail}
                  />
                </div>
              </div>
            )}

            {/* Other User Details */}
            <div className="mt-8">
              <h3 className="text-xl font-semibold text-[#D6482B] mb-4">
                Other User Details
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                {user.role === "Auctioneer" && (
                  <Detail
                    label="Unpaid Commissions"
                    value={user.unpaidCommission}
                  />
                )}
                {user.role === "Bidder" && (
                  <>
                    <Detail label="Auctions Won" value={user.auctionsWon} />
                    <Detail label="Money Spent" value={user.moneySpent} />
                  </>
                )}
              </div>
            </div>
          </div>
        )}
      </section>
    </>
  );
};

const Detail = ({ label, value }) => (
  <div className="flex flex-col">
    <label className="text-sm font-medium text-gray-600 mb-1">{label}</label>
    <input
      type="text"
      value={value || "—"}
      disabled
      className="w-full px-3 py-2 border border-gray-300 rounded-lg bg-gray-50 text-gray-800 focus:outline-none"
    />
  </div>
);

export default UserProfile;
