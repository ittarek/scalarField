import React from "react";
import "./related.css"
import { FaEye } from "react-icons/fa";
import { MdOutlineDashboard } from "react-icons/md";
const Related = () => {
  return (
    <div className="related_container mb-[200px]">
      <div className="title">
        <span>
          <MdOutlineDashboard />
        </span>{" "}
        <h2> Related </h2>
      </div>
      <div className="collapseItems">
        <p>
          {" "}
          What new insights will the HD re-release provide <span>+</span>
        </p>
        <p>
          {" "}
          How has the re-release been received by fans and critics{" "}
          <span>+</span>
        </p>
        <p>
          Are there any behind-the-scenes features included in the re-release{" "}
          <span>+</span>
        </p>
        <p>
          {" "}
          How does the HD quality enhance the storytelling <span>+</span>
        </p>
        <p>
          {" "}
          What are some of the most impactful stories from the series{" "}
          <span>+ </span>
        </p>
      </div>
      {/* keep edit */}
      <div className="editDiv">
        <div className="title">
          <span>
            <MdOutlineDashboard />
          </span>{" "}
          <h2> Keep Reading </h2>
        </div>

        <div className="editContainer flex items-center gap-5">
          <div className="editCard overflow-hidden mb-11 ">
            <div className="overflow-hidden  h-[80px]">
              <img
                src="https://pplx-res.cloudinary.com/image/fetch/s--sh7IeCX9--/t_thumbnail/https://m.media-amazon.com/images/S/pv-target-images/b158708cb3ade3acbd2b55b20cbf0ffed0e7d908294b16072244822c6c9d5c1b.jpg"
                className="w-full h-full object-cover rounded"
                alt=""
              />
            </div>
            <h2 className="font-semibold text-[#D4D4D3] ">
              Last week Tnight con john olivaer
            </h2>
            <p className="text-sm text-[#929292]">
              {" "}
              Lorem ipsum dolor sit amet consectetur
            </p>
            <span className="flex items-center justify-end gap-2 text sm text-[#929292]">
              <FaEye /> 454
            </span>
          </div>
          <div className="editCard overflow-hidden mb-11 ">
            <div className="overflow-hidden  h-[80px]">
              <img
                src="https://pplx-res.cloudinary.com/image/fetch/s--sh7IeCX9--/t_thumbnail/https://m.media-amazon.com/images/S/pv-target-images/b158708cb3ade3acbd2b55b20cbf0ffed0e7d908294b16072244822c6c9d5c1b.jpg"
                className="w-full h-full object-cover rounded"
                alt=""
              />
            </div>
            <h2 className="font-semibold text-[#D4D4D3] ">
              Last week Tnight con john olivaer
            </h2>
            <p className="text-sm text-[#929292]">
              {" "}
              Lorem ipsum dolor sit amet consectetur
            </p>
            <span className="flex items-center justify-end gap-2 text sm text-[#929292]">
              <FaEye /> 454
            </span>
          </div>
          <div className="editCard overflow-hidden mb-11 ">
            <div className="overflow-hidden  h-[80px]">
              <img
                src="https://pplx-res.cloudinary.com/image/fetch/s--sh7IeCX9--/t_thumbnail/https://m.media-amazon.com/images/S/pv-target-images/b158708cb3ade3acbd2b55b20cbf0ffed0e7d908294b16072244822c6c9d5c1b.jpg"
                className="w-full h-full object-cover rounded"
                alt=""
              />
            </div>
            <h2 className="font-semibold text-[#D4D4D3] ">
              Last week Tnight con john olivaer
            </h2>
            <p className="text-sm text-[#929292]">
              {" "}
              Lorem ipsum dolor sit amet consectetur
            </p>
            <span className="flex items-center justify-end gap-2 text sm text-[#929292]">
              <FaEye /> 454
            </span>
          </div>
          <div className="editCard overflow-hidden mb-11 ">
            <div className="overflow-hidden  h-[80px]">
              <img
                src="https://pplx-res.cloudinary.com/image/fetch/s--sh7IeCX9--/t_thumbnail/https://m.media-amazon.com/images/S/pv-target-images/b158708cb3ade3acbd2b55b20cbf0ffed0e7d908294b16072244822c6c9d5c1b.jpg"
                className="w-full h-full object-cover rounded"
                alt=""
              />
            </div>
            <h2 className="font-semibold text-[#D4D4D3] ">
              Last week Tnight con john olivaer
            </h2>
            <p className="text-sm text-[#929292]">
              {" "}
              Lorem ipsum dolor sit amet consectetur
            </p>
            <span className="flex items-center justify-end gap-2 text sm text-[#929292]">
              <FaEye /> 454
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Related;
