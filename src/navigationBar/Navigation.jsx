import "./navigation.css"
import { CiStar } from "react-icons/ci";
import { GiProcessor } from "react-icons/gi";
import { CiDollar } from "react-icons/ci";
import { IoMdColorPalette } from "react-icons/io";
import { CiMedal } from "react-icons/ci";
import { FaTv } from "react-icons/fa6";
import { HiOutlineAdjustmentsHorizontal } from "react-icons/hi2";
import { Link, NavLink } from "react-router-dom";
const Navigation = () => {
  const navItems = (
    <>
      <NavLink to="/">
        {" "}
   
  
          <CiStar size="14" /> Top
   
      </NavLink>
      <NavLink to="/teach">

          <GiProcessor /> Tech & Science

      </NavLink>
      <NavLink to="/finance">
        {" "}
 
          {" "}
          <CiDollar size="24" />
          Finance

      </NavLink>
      <NavLink to="/art">
        {" "}
 
          <IoMdColorPalette size="14" />
          Arts & Culture
  
      </NavLink>
  
        {" "}
        <NavLink to="/sport">
          {" "}
          <CiMedal size="12" className="text-white" />
          Sports
        </NavLink>
    
      <NavLink to="/entertain">
        {" "}
    
          <FaTv size="12" />
          Entertainment
      
      </NavLink>
    </>
  );

     return (
       <div className="navigation my-3 lg:w-[680px] w-full mx-auto">
         <ul className="flex justify-between items-center sticky top-0">
           {navItems}{" "}
           <div className="tooltip">
             <HiOutlineAdjustmentsHorizontal size="20" />
             <span className="tooltiptext">Personalize Discover</span>
           </div>
         </ul>
       </div>
     );
};

export default Navigation;
