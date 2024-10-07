import React from 'react';
import { CiBookmark } from "react-icons/ci";
const MainCard = () => {
     return (
       <div className="rounded overflow-hidden shadow-lg mx-auto lg:w-[700px]  w-full  bg-[#303131] my-11 transform transition-transform duration-500  hover:-translate-y-0.5">
         {/* image */}
         <div className="h-48 overflow-hidden">
           <img
             src="https://pplx-res.cloudinary.com/image/upload/t_limit/v1728181218/getty_uploads/870140864.jpg"
             alt="Card Image"
             className="w-full h-full object-cover"
           />
         </div>
         {/* card items */}
         <div className="p-3">
           <div className="">
             <h2 className="text-xl text-[#DDDDDC] leading-[1.4] my-2">
               David Lynch's Interview Project
             </h2>
             <p className=" text-[#929292]">
               David Lynch's Interview Project, a compelling documentary series
               directed by Austin Lynch and Jason S, chronicles a 20,000-mile
               journey across...
               {/* America through 121 short interviews with
             individuals from small towns and rural areas. Set for an HD
             re-release on YouTube in summer 2024, this series offers an
             intimate glimpse into the diverse and unfiltered stories of
             everyday Americans, capturing the richness of their personal
             experiences and reflections on life. */}
             </p>
           </div>
           {/* card bottom */}
           <div className="flex justify-between items-center mt-5">
             <div className="flex gap-3">
               <img
                 className="w-[20px] h-[20px] rounded-full"
                 src="https://pplx-res.cloudinary.com/image/upload/t_limit/v1728181218/getty_uploads/870140864.jpg"
                 alt="author"
               />
               <p className="text-sm">Author Name</p>
             </div>
             <button>
               <CiBookmark />
             </button>
           </div>
         </div>
       </div>
     );
};

export default MainCard;