import React from "react";
import { useLoaderData } from "react-router-dom";
import "./details.css";
import { FaEye } from "react-icons/fa";
import { LuShare2 } from "react-icons/lu";
import { FaRegCopy } from "react-icons/fa6";
import { FiLink } from "react-icons/fi";
import { FcStart } from "react-icons/fc";
import { FaDiscord } from "react-icons/fa";
import { LiaImdb } from "react-icons/lia";
import Overview from "./overview/Overview";
import Journey from "./Journey/Journey";
import Content from "./Content/Content";
import Collection from "./Collection/Collection";
import Related from "./related/related";
import { CiBookmark } from "react-icons/ci";
import { FaShare } from "react-icons/fa";
const Details = () => {
  const data = useLoaderData();
  console.log(data);
  if (!data) {
    return <p>Item not found.</p>;
  }

  const {
    _id,
    title,
    image_url,
    author,
    published_date,
    img,
    details,
    total_view,
  } = data || {};
  // Function to style the first word
  const styleFirstWord = text => {
    const words = text.split(" ");
    if (words.length === 0) return text; // Return the original text if empty

    const firstWord = words[0];
    // Return the styled first word and the rest of the text
    return (
      <span>
        <span className="first-letter">{firstWord[0]}</span>
        {firstWord.slice(1)} {words.slice(1).join(" ")}
      </span>
    );
  };

  return (
    <section className="bg-[#191a1a] border border-[#2F3031] ">
      {/* top bar */}

      <div className="topBar border-b border-[#2f3031]  py-2 flex justify-end items-center gap-3 sticky top-0 z-10 bg-[#191a1a] pr-5">
        <button className="bookMark w-[30px] h-[30px] border border-[#2f3031]  py-1 px-1 rounded-md   hover hover:text-[#fff] duration-500 text-[#929292]">
          {" "}
          <CiBookmark />
          <span className="tooltipstext">Save to Bookmarks</span>
        </button>
        <button className="copyLink bg-[#20AFC3] w-[30px] h-[30px]  py-1 px-1 rounded-md flex items-center gap-2 text-[#202020] font-semibold hover hover:bg-[#209AAB] duration-500">
          {" "}
          <FiLink /> <span className="tooltipstext">Copy Link</span>
        </button>

        <button className="bg-[#20AFC3] w-[70px] h-[30px] py-1 px-1 rounded-md flex items-center gap-2 text-[#202020] font-semibold hover hover:bg-[#209AAB] duration-500">
          {" "}
          <FaShare />
          <span>share</span>
        </button>
      </div>

      <div className=" pl-9">
        {/* image */}
        <div className="imgDiv  w-[90%] h-[400px] overflow-hidden mt-[40px] rounded-lg hover  duration-300 transition-all cursor-zoom-in">
          <img
            src={image_url}
            alt="image"
            className="w-full h-full object-cover  "
          />
        </div>
        <div>
          {/* side navigation */}

          <div className="sideNavigation  w-[21%] top-0 text-[#929292]  left-[80%] sticky mt-[5%] ">
            <ul>
              <li>| Introduction</li>
              <li>| Project Overview</li>
              <li>| Production Journey</li>
              <li>| Content and Significance</li>
              <li>| HD Remastered Collection</li>
            </ul>
          </div>
          {/* main content */}
          <div className="-mt-[17%]">
            {/* news details */}
            <div className="-ml-1  lg:w-[70%] relative">
              <h1 className="text-[#fff] text-4xl  mt-3">{title}</h1>
              {/* author and timing */}
              <div className="flex justify-between items-end text-[#787B7B] font-semibold">
                {/* author  */}
                <div className="flex gap-3 items-center mt-4">
                  <img
                    src={author.img}
                    className="w-[35px] h-[35px] rounded-full"
                    alt="authorImage"
                  />{" "}
                  <div>
                    <h3>Created by{author.name}</h3> <span>2 min read</span>
                  </div>
                </div>
                {/* timing */}
                <div className="newsTiming flex  items-center gap-3">
                  <p>2 min ago</p>
                  <p>
                    <FaEye /> {total_view}
                  </p>
                  <p>
                    <LuShare2 />
                    213
                  </p>
                </div>
              </div>

              <div>
                <p className="text-[#B4B5C6] font-semibold lg:w-[%] mt-[20px] mb-6">
                  {styleFirstWord(details)}
                </p>
              </div>

              {/* 4 div for extra single news */}
              <div className="extraDiv flex justify-between items-center mb-11">
                {/* div 1 */}
                <div className="tooltips">
                  <h2 className="text-sm text-[#D4D4D3] ">
                    {details.slice(0, 50)}
                  </h2>
                  <span className="flex gap-1 items-center text-[#787B7B]">
                    {" "}
                    <img
                      src={author.img}
                      className="w-[20px] h-[20px] rounded-full "
                      alt=""
                    />{" "}
                    <p>{author.name} . 1</p>{" "}
                  </span>

                  <span className="tooltipstext">
                    {" "}
                    <span className="authorSpan flex gap-1 items-center text-[#787B7B]">
                      {" "}
                      <img
                        src={author.img}
                        className="w-[20px] h-[20px] rounded-full "
                        alt=""
                      />{" "}
                      <p>{author.name} </p>{" "}
                    </span>
                    <h3>{details.slice(0, 100)}</h3>
                    <p>{details.slice(0, 200)}</p>
                  </span>
                </div>
                {/* div 2 */}
                <div className="tooltips">
                  <h2 className="text-sm text-[#D4D4D3] ">
                    {details.slice(0, 50)}
                  </h2>
                  <span className="flex gap-1 items-center text-[#787B7B]">
                    {" "}
                    <img
                      src={author.img}
                      className="w-[20px] h-[20px] rounded-full "
                      alt=""
                    />{" "}
                    <p>{author.name} . 1</p>{" "}
                  </span>
                  <span className="tooltipstext">
                    {" "}
                    <span className="authorSpan flex gap-1 items-center text-[#787B7B]">
                      {" "}
                      <img
                        src={author.img}
                        className="w-[20px] h-[20px] rounded-full "
                        alt=""
                      />{" "}
                      <p>{author.name} </p>{" "}
                    </span>
                    <h3>{details.slice(0, 100)}</h3>
                    <p>{details.slice(0, 200)}</p>
                  </span>
                </div>
                {/* div 3 */}
                <div className="tooltips">
                  <h2 className="text-sm text-[#D4D4D3] ">
                    {details.slice(0, 50)}
                  </h2>
                  <span className="flex gap-1 items-center text-[#787B7B]">
                    {" "}
                    <img
                      src={author.img}
                      className="w-[20px] h-[20px] rounded-full "
                      alt=""
                    />{" "}
                    <p>{author.name} . 1</p>{" "}
                  </span>
                  <span className="tooltipstext">
                    {" "}
                    <span className="authorSpan flex gap-1 items-center text-[#787B7B]">
                      {" "}
                      <img
                        src={author.img}
                        className="w-[20px] h-[20px] rounded-full "
                        alt=""
                      />{" "}
                      <p>{author.name} </p>{" "}
                    </span>
                    <h3>{details.slice(0, 100)}</h3>
                    <p>{details.slice(0, 200)}</p>
                  </span>
                </div>
                {/* div 4 */}

                <div className="sources_last_div flex gap-2 flex-col justify-between  my-auto">
                  <div className="flex gap-2">
                    {" "}
                    <span>
                      <LiaImdb size={19} color="#000" />
                    </span>
                    <span>
                      {" "}
                      <FaDiscord size={19} color="#" />
                    </span>
                    <span>
                      <FcStart size={19} />
                    </span>
                  </div>
                  <p>View 3 more</p>
                </div>
              </div>
            </div>

            <Overview />
            {/* news 3 */}
            <Journey />
            {/* news 3 */}
            <Content />
            {/* news 3 */}
            <Collection />

            {/* related news */}
            <Related />
          </div>
        </div>
      </div>

      {/* bottom  search bar*/}
      <div className="bg-[#202222] fixed bottom-11 mx-auto w-[55%] rounded-full p-5 z-10 ml-6 ">
        <span className="absolute  right-0 mr-11 mt-2 text-[#929292] text-sm space-x-3 ">
          <button className="text-[#929292] hover:text-[#fafaf1] space-x-2 duration-300
          "> <input type="radio" name="" id="" />
            <span className="font-semibold text-lg">pro</span>
          </button>
          <button className="bg-[#2F302F] p-3 rounded-full">
            <LuShare2 />
          </button>
        </span>

        <input
          className="w-full bg-inherit rounded-full py-4 px-3 text-[#929292] border border-[#2F3031] shadow-lg text-sm hover cursor-pointer"
          type="text"
          placeholder="Ask follow-up"
        />
      </div>
    </section>
  );
};

export default Details;
