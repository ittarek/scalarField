import React from "react";
import "./sideBar.css";
import logo from "../../assets/logo/icon/Primary w. Off-White@2x.png";
import { LuArrowLeftToLine } from "react-icons/lu";
import { PiMagnifyingGlassPlusThin } from "react-icons/pi";
import { FaArrowRightToBracket } from "react-icons/fa6";
import { SiLiberadotchat } from "react-icons/si";
import { TbRosetteDiscountCheck } from "react-icons/tb";
import { MdOutlineArrowOutward } from "react-icons/md";
import { CiMobile4 } from "react-icons/ci";
import { FaXTwitter } from "react-icons/fa6";
import { AiOutlineDiscord } from "react-icons/ai";
const SideBar = () => {
  return (
    <div className="sideBar  flex gap-6 fixed flex-col h-screen text-[#929292] mx-2 mt-6">
      <div className=" flex items-center gap-11 ">
        <img src={logo} className="w-[150px]" alt="" />{" "}
        <div className="tooltip">
          <LuArrowLeftToLine size="" color="#929292" />
          <span className="tooltiptext">Collapse</span>
        </div>
      </div>
      <input
        className="w-[200px] bg-[#191a1a] rounded-full py-2 px-3 text-[#929292] border border-[#2F3031] shadow-lg text-sm hover hover:border-[#20AFC3] duration-500 "
        type="text"
        placeholder="New Thread Ctrl I"
      />
      <ul className=" ">
        <li>
          <PiMagnifyingGlassPlusThin /> Home
        </li>
        <li>
          <TbRosetteDiscountCheck />
          Discover
        </li>
        <li>
          <SiLiberadotchat />
          Library
        </li>
        <li>
          <FaArrowRightToBracket />
          Sing In
        </li>
      </ul>
      <button className="bg-[#20AFC3] w-[200px] py-2 rounded-full text-[#202020] font-semibold hover hover:bg-[#209AAB] duration-500">
        Sign Up
      </button>

      <div className="w-[200px]">
        <h3 className="text-[#fff] mb-1">Try Pro</h3>
        <p className="text-sm mb-2">
          Upgrade for image upload, smarter AI, and more pro Search.
        </p>
        <button className="text-[#fff] mt-1 bg-[#2D2F2F] hover hover:bg-[#2D2F2F] flex items-center gap-1 border border-[#2F3031] px-2 py-1 rounded-lg">
          <MdOutlineArrowOutward />
          Learn More
        </button>

        <div className="border-t mt-3 border-[#2D2F2F] flex justify-between items-center overflow-x-auto w-[200px]">
          <div className="flex items-center gap-1"> <CiMobile4/>Download</div>

          <div className="flex items-center gap-3"><FaXTwitter/> <AiOutlineDiscord/></div>
        </div>
      </div>
    </div>
  );
};

export default SideBar;
