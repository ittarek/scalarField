import "./navigation.css"
import { CiStar } from "react-icons/ci";
import { GiProcessor } from "react-icons/gi";
import { CiDollar } from "react-icons/ci";
import { IoMdColorPalette } from "react-icons/io";
import { CiMedal } from "react-icons/ci";
import { FaTv } from "react-icons/fa6";
import { HiOutlineAdjustmentsHorizontal } from "react-icons/hi2";
const Navigation = () => {
     return (
       <div className="navigation my-2">
         <ul className="flex justify-between items-center sticky top-0">
           {" "}
           <li>
             {" "}
             <CiStar size="14" />
             Top
           </li>
           <li>
             <GiProcessor /> Tech & Science
           </li>
           <li>
             <CiDollar size="15" />
             Finance{" "}
           </li>
           <li>
             {" "}
             <IoMdColorPalette size="14" />
             Arts & Culture
           </li>
           <li>
             {" "}
             <CiMedal size="12" className="text-white" />
             Sports
           </li>
           <li>
             <FaTv size="12" />
             Entertainment
           </li>
 
             <div className="tooltip">
               <HiOutlineAdjustmentsHorizontal size="20" />
               <span className="tooltiptext">Personalize Discover</span>
             </div>
       
         </ul>
       </div>
     );
};

export default Navigation;