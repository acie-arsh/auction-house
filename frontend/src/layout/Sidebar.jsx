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
          <ul className="flex flex-col gap-5 w-[100%] pl-8 pr-4">
            <li>
              <Link
                to={"/auctions"}
                className={`relative flex text-xl gap-5 justify-start items-center hover:text-[#8BC34A] ${
                  location.pathname === "/auctions"
                    ? "text-[#8BC34A]"
                    : "text-neutral-500"
                }`}
              >
                <RiAuctionFill className="text-3xl" /> Auctions
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
                className={`flex text-xl gap-5 justify-start items-center hover:text-[#8BC34A] ${
                  location.pathname == "/leaderboard"
                    ? "text-[#8BC34A]"
                    : "text-neutral-500"
                }`}
              >
                <MdLeaderboard className="text-3xl" /> Leaderboard
                <span
                  className={`transition-all duration-100 ease-in-out absolute content-[''] bg-[#8BC34A] rounded-lg w-6 h-12 ${
                    location.pathname === "/leaderboard" ? "-left-4" : "-left-14"
                  }`}
                ></span>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
