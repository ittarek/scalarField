import React, { useState } from "react";
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
import { NavLink } from "react-router-dom";
const SideBar = () => {

  return (
    <div className="sideBar hidden 
    lg:flex gap-6 fixed flex-col h-screen text-[#929292] mx-2 mt-6">
      <div className=" flex items-center gap-11 ">
        <img src={logo} className="w-[150px]" alt="" />{" "}
        <div className="tooltip cursor-pointer ">
          <LuArrowLeftToLine size="" color="#929292" />
          <span className="tooltiptext">Collapse</span>
        </div>
      </div>

      <div className="relative ">
        <span className="absolute top-2 left-3  text-[#929292] text-sm pointer-events-none flex gap-11 justify-between">
          New Thread{" "}
          <span
            className="space-x-1"
            style={{ fontFamily: "Georgia, 'Times New Roman', Times, serif" }}
          >
            <span className="border border-[#2F3031]  px-1 rounded text-sm">
              Ctrl{" "}
            </span>
            <span className="border border-[#2F3031]  px-1 rounded text-sm">
              I
            </span>
          </span>
        </span>

        <input
          className="w-[200px] bg-[#191a1a] rounded-full py-2 px-3 text-[#929292] border border-[#2F3031] shadow-lg text-sm hover hover:border-[#20AFC3] duration-500 cursor-pointer"
          type="text"
        />
      </div>

      <ul className="sideBarUl ">
        <li>
          <PiMagnifyingGlassPlusThin /> Home
        </li>

        <NavLink to="/">
          {" "}
          <li>
            <TbRosetteDiscountCheck />
            Discover
          </li>
        </NavLink>

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
        <h3 className="text-[#fff] mb-1 cursor-pointer hover:text-[#20afc3] duration-500 text-sm inline">
          Try Pro
        </h3>
        <p className="text-sm mb-2">
          Upgrade for image upload, smarter AI, and more pro Search.
        </p>
        <button className="text-[#fff] mt-1 bg-[#2D2F2F] hover hover:bg-[#2D2F2F] flex items-center gap-1 border border-[#2F3031] px-2 py-1 rounded-lg -mb-3 cursor-pointer hover:text-[#929292] text-sm duration-500 ">
          <MdOutlineArrowOutward />
          Learn More
        </button>
      </div>
      <div className="border-t  border-[#2D2F2F]  mx-0 px-0 ">
        <div className="flex justify-between items-center mt-2">
          <div className="flex items-center gap-1 hover:bg-[#2D2F2F] hover:text-[#fff] duration-500 cursor-pointer rounded-full px-2 py-1 text-sm ">
            {" "}
            <CiMobile4 />
            Download
          </div>

          <div className="flex items-center gap-3 text-sm">
            <span className="hover:bg-[#2d2f2f] rounded-full hover:text-[#fff] p-2 duration-500 cursor-pointer">
              <FaXTwitter />
            </span>{" "}
            <span className="hover:bg-[#2d2f2f] rounded-full hover:text-[#fff] p-2 duration-500 cursor-pointer">
              <AiOutlineDiscord />
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SideBar;
