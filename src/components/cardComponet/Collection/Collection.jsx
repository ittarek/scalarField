import React from "react";
import { FaRegCopy } from "react-icons/fa6";
import { FiLink } from "react-icons/fi";
import { FcStart } from "react-icons/fc";
import { FaDiscord } from "react-icons/fa";
import { LiaImdb } from "react-icons/lia";
import { useLoaderData } from "react-router-dom";

const Collection = () => {
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
  return (
    <div className="lg:w-[67%] block">
      <h1 className="text-white font-semibold text-4xl mb-9">
        HD Remastered Collection
      </h1>
      <div className="imgDiv  w-[100%] h-[420px] overflow-hidden rounded-lg hover  duration-300 transition-all cursor-zoom-in ">
        <img
          src={image_url}
          alt="image"
          className="w-full h-full object-cover  "
        />
      </div>
      <div className="">
        <p className="my-6 text-[#D4D4D3] font-semibold">{details}</p>
        {/* sources div */}
        <div className="sources">
          <div className="sources_details border border-[#2F3031] px-4 py-1 rounded-full">
            <div className="sources_img">
              <img src={author.img} alt="" />
              <img src={author.img} alt="" />
              <img src={author.img} alt="" />
            </div>
            <p>4 sources</p>
          </div>
          {/* 2 icon here */}
          <div className="sources_link_copy">
            <span>
              <FaRegCopy />
            </span>{" "}
            <span>
              {" "}
              <FiLink />
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Collection;
