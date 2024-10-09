import React from "react";
import { useLoaderData } from "react-router-dom";
import "./details.css";
import { FaEye } from "react-icons/fa";
import { LuShare2 } from "react-icons/lu";
const Details = () => {
  const data = useLoaderData();
  console.log(data);
  if (!data) {
    // Redirect or show an error message if data is null
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
    <div className="bg-[#191a1a] border border-[#2F3031] rounded-lg ">
      {/* image */}
      <div className="imgDiv mx-auto w-[92%] h-[350px] overflow-hidden mt-[80px] rounded-lg hover  duration-300 transition-all cursor-zoom-in">
        <img
          src={image_url}
          alt="image"
          className="w-full h-full object-cover  "
        />
      </div>
      <div className="flex justify-start gap-24 items-center mx-auto  lg:w-[95%] mt-11  px-2">
        {/* news details */}
        <div className="w-[70%] relative">
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
                <h3>Created by{name}</h3> <span>2 min read</span>
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
            <p className="text-[#D2D2D1] font-semibold lg:w-[%] mt-[20px]">
              {styleFirstWord(details)}
            </p>
          </div>
        </div>

        {/* side navigation */}
        <div className="sideNavigation  w-[21%] absolute top-0 mt-[35%] right-0">
          <ul>
            <li>Introduction</li>
            <li> Project Overview</li>
            <li> Production Journey</li>
            <li> Content and Significance</li>
            <li> HD Remastered Collection</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Details;
