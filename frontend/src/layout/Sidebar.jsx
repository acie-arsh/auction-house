import React from "react";
import { useState } from "react";
import { RiAuctionFill } from "react-icons/ri";
import { MdLeaderboard, MdDashboard } from "react-icons/md";
import { SiGooglesearchconsole } from "react-icons/si";
import { BsFillInfoSquareFill } from "react-icons/bs";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoMdCloseCircleOutline, IoIosCreate } from "react-icons/io";
import { FaFileInvoiceDollar } from "react-icons/fa6";
import { FaEye } from "react-icons/fa";
import { useSelector, useDispatch } from "react-redux";
import { logout } from "@/store/slices/userSlice";
import { Link, useLocation } from "react-router-dom";

const Sidebar = () => {
  const location = useLocation();

  const [show, setShow] = useState(false);

  const { isAuthenticated, user } = useSelector((state) => state.user);

  const dispatch = useDispatch();
  const handleLogout = () => {
    dispatch(logout());
  };

  return (
    <>
      <div
        onClick={() => setShow(!show)}
        className="fixed right-5 top-5 bg-[#8BC34A] text-white text-3xl p-2 rounded-md hover:bg-[#604CC3] lg:hidden"
      >
        <GiHamburgerMenu />
      </div>
      <div
        className={`w-[100%] sm:w-[275px] bg-[#F5F5F5] h-full fixed top-0 ${
          show ? "left-0" : "left-[-100%]"
        } transition-all duration-1000 ease-in-out flex flex-col justify-between lg:left-0 border-r-[1px] border-r-stone-300 text-center items-center`}
      >
        <div className="relative w-[100%] mt-4">
          <Link to={"/"}>
            <h4 className="text-4xl font-bold mb-8">
              <span className="text-[#8BC34A]">Bid</span>ium.
            </h4>
          </Link>
          <ul className="flex flex-col gap-4 w-[100%] pl-8 pr-4">
            <li>
              <Link
                to={"/auctions"}
                className={`relative flex text-lg gap-5 justify-start items-center hover:transition-all hover:duration-300 hover:text-[#8BC34A] ${
                  location.pathname === "/auctions"
                    ? "text-[#8BC34A]"
                    : "text-neutral-500"
                }`}
              >
                <RiAuctionFill className="text-2xl" /> Auctions
                <span
                  className={`transition-all duration-100 ease-in-out absolute content-[''] bg-[#8BC34A] rounded-lg w-6 h-12 ${
                    location.pathname === "/auctions" ? "-left-12" : "-left-14"
                  }`}
                ></span>
              </Link>
            </li>
            <li>
              <Link
                to={"/leaderboard"}
                className={`relative flex text-lg gap-5 justify-start items-center hover:transition-all hover:duration-300 hover:text-[#8BC34A] ${
                  location.pathname == "/leaderboard"
                    ? "text-[#8BC34A]"
                    : "text-neutral-500"
                }`}
              >
                <MdLeaderboard className="text-2xl" /> Leaderboard
                <span
                  className={`transition-all duration-100 ease-in-out absolute content-[''] bg-[#8BC34A] rounded-lg w-6 h-12 ${
                    location.pathname === "/leaderboard"
                      ? "-left-12"
                      : "-left-14"
                  }`}
                ></span>
              </Link>
            </li>
            {isAuthenticated && user && user.role === "Seller" && (
              <>
                <li>
                  <Link
                    to={"/submit-commission"}
                    className={`relative flex text-lg gap-5 justify-start items-center hover:transition-all hover:duration-300 hover:text-[#8BC34A] ${
                      location.pathname == "/submit-commission"
                        ? "text-[#8BC34A]"
                        : "text-neutral-500"
                    }`}
                  >
                    <FaFileInvoiceDollar className="text-2xl" /> Submit
                    Commission
                    <span
                      className={`transition-all duration-100 ease-in-out absolute content-[''] bg-[#8BC34A] rounded-lg w-6 h-12 ${
                        location.pathname === "/submit-commission"
                          ? "-left-12"
                          : "-left-14"
                      }`}
                    ></span>
                  </Link>
                </li>
                <li>
                  <Link
                    to={"/create-auction"}
                    className={`relative flex text-lg gap-5 justify-start items-center hover:transition-all hover:duration-300 hover:text-[#8BC34A] ${
                      location.pathname == "/create-auction"
                        ? "text-[#8BC34A]"
                        : "text-neutral-500"
                    }`}
                  >
                    <IoIosCreate className="text-2xl" /> Create Auction
                    <span
                      className={`transition-all duration-100 ease-in-out absolute content-[''] bg-[#8BC34A] rounded-lg w-6 h-12 ${
                        location.pathname === "/create-auction"
                          ? "-left-12"
                          : "-left-14"
                      }`}
                    ></span>
                  </Link>
                </li>
                <li>
                  <Link
                    to={"/view-my-auctions"}
                    className={`relative flex text-lg gap-5 justify-start items-center hover:transition-all hover:duration-300 hover:text-[#8BC34A] ${
                      location.pathname == "/view-my-auctions"
                        ? "text-[#8BC34A]"
                        : "text-neutral-500"
                    }`}
                  >
                    <FaEye className="text-2xl" /> My Auctions
                    <span
                      className={`transition-all duration-100 ease-in-out absolute content-[''] bg-[#8BC34A] rounded-lg w-6 h-12 ${
                        location.pathname === "/view-my-auctions"
                          ? "-left-12"
                          : "-left-14"
                      }`}
                    ></span>
                  </Link>
                </li>
              </>
            )}
            {isAuthenticated && user && user.role === "Admin" && (
              <li>
                <Link
                  to={"/dashboard"}
                  className={`relative flex text-lg gap-5 justify-start items-center hover:transition-all hover:duration-300 hover:text-[#8BC34A] ${
                    location.pathname == "/dashboard"
                      ? "text-[#8BC34A]"
                      : "text-neutral-500"
                  }`}
                >
                  <MdDashboard className="text-2xl" /> Dashboard
                  <span
                    className={`transition-all duration-100 ease-in-out absolute content-[''] bg-[#8BC34A] rounded-lg w-6 h-12 ${
                      location.pathname === "/dashboard"
                        ? "-left-12"
                        : "-left-14"
                    }`}
                  ></span>
                </Link>
              </li>
            )}
          </ul>
          {!isAuthenticated ? (
            <>
              <div className="my-4 mx-4 flex gap-4 justify-around">
                <Link to={"/sign-up"}>Sign Up</Link>
                <Link to={"/login"}>Login</Link>
              </div>
            </>
          ) : (
            <>
              <div className="my-4 flex gap-4 w-fit" onClick={handleLogout}>
                <button>Logout</button>
              </div>
            </>
          )}
          <hr className="mb-4 mx-4 border-t-[#8BC34A] border-t-[2px]" />
          <ul className="flex flex-col gap-4 w-[100%] pl-8 pr-4">
            <li>
              <Link
                to={"/how-it-works"}
                className={`relative flex text-lg gap-5 justify-start items-center hover:transition-all hover:duration-300 hover:text-[#8BC34A] ${
                  location.pathname === "/how-it-works"
                    ? "text-[#8BC34A]"
                    : "text-neutral-500"
                }`}
              >
                <SiGooglesearchconsole className="text-xl" /> How It Works
                <span
                  className={`transition-all duration-100 ease-in-out absolute content-[''] bg-[#8BC34A] rounded-lg w-6 h-12 ${
                    location.pathname === "/how-it-works"
                      ? "-left-12"
                      : "-left-14"
                  }`}
                ></span>
              </Link>
            </li>
            <li>
              <Link
                to={"/about"}
                className={`relative flex text-lg gap-5 justify-start items-center hover:transition-all hover:duration-300 hover:text-[#8BC34A] ${
                  location.pathname === "/about"
                    ? "text-[#8BC34A]"
                    : "text-neutral-500"
                }`}
              >
                <BsFillInfoSquareFill className="text-xl" /> About Us
                <span
                  className={`transition-all duration-100 ease-in-out absolute content-[''] bg-[#8BC34A] rounded-lg w-6 h-12 ${
                    location.pathname === "/about" ? "-left-12" : "-left-14"
                  }`}
                ></span>
              </Link>
            </li>
          </ul>
          <IoMdCloseCircleOutline
            onClick={() => setShow(!show)}
            className="absolute top-0 right-4 text-[28px] sm:hidden"
          />
        </div>

        <div>
          
        </div>
      </div>
    </>
  );
};

export default Sidebar;
