import React, { useState } from "react";
import { RiAuctionFill } from "react-icons/ri";
import { MdLeaderboard, MdDashboard } from "react-icons/md";
import { SiGooglesearchconsole } from "react-icons/si";
import { BsFillInfoSquareFill } from "react-icons/bs";
import { FaLinkedin, FaUserCircle } from "react-icons/fa";
import { FaSquareGithub, FaFileInvoiceDollar } from "react-icons/fa6";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoMdCloseCircleOutline, IoIosCreate } from "react-icons/io";
import { FaEye } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "@/store/slices/userSlice";
import { Link } from "react-router-dom";

const SideDrawer = () => {
  const [show, setShow] = useState(false);

  const { isAuthenticated, user } = useSelector((state) => state.user);
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(logout());
  };

  return (
    <>
      {/* Mobile Hamburger Button */}
      <div
        onClick={() => setShow(!show)}
        className="fixed right-5 top-5 bg-orange-600 text-white text-3xl p-2 rounded-md shadow-md hover:bg-orange-700 transition lg:hidden z-50"
      >
        <GiHamburgerMenu />
      </div>

      {/* Side Drawer */}
      <div
        className={`w-[100%] sm:w-[300px] bg-gradient-to-b from-white to-orange-50 h-full fixed top-0 
          ${show ? "left-0" : "left-[-100%]"} 
          transition-all duration-300 p-5 flex flex-col justify-between 
          lg:left-0 border-r border-orange-200 shadow-lg`}
      >
        {/* Header */}
        <div className="relative">
          <Link to={"/"}>
            <h4 className="text-2xl font-bold mb-6 text-gray-900">
              Auction<span className="text-orange-600"> Platform</span>
            </h4>
          </Link>

          {/* Main Links */}
          <ul className="flex flex-col gap-4">
            <li>
              <Link
                to={"/auctions"}
                className="flex text-lg font-medium gap-2 items-center text-gray-700 hover:text-orange-600 transition"
              >
                <RiAuctionFill /> Auctions
              </Link>
            </li>
            <li>
              <Link
                to={"/leaderboard"}
                className="flex text-lg font-medium gap-2 items-center text-gray-700 hover:text-orange-600 transition"
              >
                <MdLeaderboard /> Leaderboard
              </Link>
            </li>

            {/* Auctioneer Only */}
            {isAuthenticated && user?.role === "Auctioneer" && (
              <>
                <li>
                  <Link
                    to={"/submit-commission"}
                    className="flex text-lg font-medium gap-2 items-center text-gray-700 hover:text-orange-600 transition"
                  >
                    <FaFileInvoiceDollar /> Submit Commission
                  </Link>
                </li>
                <li>
                  <Link
                    to={"/create-auction"}
                    className="flex text-lg font-medium gap-2 items-center text-gray-700 hover:text-orange-600 transition"
                  >
                    <IoIosCreate /> Create Auction
                  </Link>
                </li>
                <li>
                  <Link
                    to={"/view-my-auctions"}
                    className="flex text-lg font-medium gap-2 items-center text-gray-700 hover:text-orange-600 transition"
                  >
                    <FaEye /> View My Auctions
                  </Link>
                </li>
              </>
            )}

            {/* Super Admin */}
            {isAuthenticated && user?.role === "Super Admin" && (
              <li>
                <Link
                  to={"/dashboard"}
                  className="flex text-lg font-medium gap-2 items-center text-gray-700 hover:text-orange-600 transition"
                >
                  <MdDashboard /> Dashboard
                </Link>
              </li>
            )}
          </ul>

          {/* Auth Buttons */}
          {!isAuthenticated ? (
            <div className="my-6 flex gap-3">
              <Link
                to={"/sign-up"}
                className="bg-orange-600 text-white font-semibold text-lg px-4 py-2 rounded-lg shadow hover:bg-orange-700 transition"
              >
                Sign Up
              </Link>
              <Link
                to={"/login"}
                className="border border-orange-400 text-orange-600 font-semibold text-lg px-4 py-2 rounded-lg hover:bg-orange-50 transition"
              >
                Login
              </Link>
            </div>
          ) : (
            <div className="my-6 flex gap-4">
              <button
                onClick={handleLogout}
                className="bg-red-600 text-white font-semibold text-lg px-4 py-2 rounded-lg shadow hover:bg-red-700 transition"
              >
                Logout
              </button>
            </div>
          )}

          <hr className="my-5 border-orange-200" />

          {/* Secondary Links */}
          <ul className="flex flex-col gap-3">
            {isAuthenticated && (
              <li>
                <Link
                  to={"/me"}
                  className="flex text-lg font-medium gap-2 items-center text-gray-700 hover:text-orange-600 transition"
                >
                  <FaUserCircle /> Profile
                </Link>
              </li>
            )}
            <li>
              <Link
                to={"/how-it-works-info"}
                className="flex text-lg font-medium gap-2 items-center text-gray-700 hover:text-orange-600 transition"
              >
                <SiGooglesearchconsole /> How it works
              </Link>
            </li>
            <li>
              <Link
                to={"/about"}
                className="flex text-lg font-medium gap-2 items-center text-gray-700 hover:text-orange-600 transition"
              >
                <BsFillInfoSquareFill /> About Us
              </Link>
            </li>
          </ul>

          {/* Close Button (Mobile Only) */}
          <IoMdCloseCircleOutline
            onClick={() => setShow(false)}
            className="absolute top-0 right-4 text-[28px] text-gray-600 hover:text-red-500 cursor-pointer sm:hidden"
          />
        </div>

        {/* Footer */}
        <div>
          <div className="flex gap-3 items-center mb-3">
            <a
              href="https://www.linkedin.com/in/risudeveloper/"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white text-gray-600 p-2 text-xl rounded-md shadow hover:text-blue-600 hover:shadow-lg transition"
            >
              <FaLinkedin />
            </a>
            <a
              href="https://github.com/risudev/"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white text-gray-600 p-2 text-xl rounded-md shadow hover:text-gray-900 hover:shadow-lg transition"
            >
              <FaSquareGithub />
            </a>
          </div>

          <Link
            to={"/contact"}
            className="text-gray-600 font-semibold hover:text-orange-600 transition"
          >
            Contact Us
          </Link>
          <p className="text-sm text-gray-500 mt-1">
            © AuctionPlatform, LLC. <br />
            Designed by{" "}
            <Link
              to={"/"}
              className="font-semibold hover:text-orange-600 transition"
            >
              Risudeveloper
            </Link>
          </p>
        </div>
      </div>
    </>
  );
};

export default SideDrawer;




