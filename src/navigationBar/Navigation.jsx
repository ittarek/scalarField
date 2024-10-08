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
      <li>
        <NavLink to="/">
          {" "}
          <CiStar size="14" /> Top
        </NavLink>
      </li>
      <li>
        {" "}
        <NavLink to="/tech">
          {" "}
          <GiProcessor /> Tech & Science
        </NavLink>
      </li>
      <li>
        {" "}
        <NavLink to="/classes">
          {" "}
          <CiDollar size="15" />
          Finance
        </NavLink>
      </li>
      <li>
        {" "}
        <NavLink to="/blog">
          {" "}
          <IoMdColorPalette size="14" />
          Arts & Culture
        </NavLink>
      </li>
      <li>
        {" "}
        <NavLink to="/news">
          {" "}
          <CiMedal size="12" className="text-white" />
          Sports
        </NavLink>
      </li>
      <li>
        {" "}
        <NavLink to="/news">
          {" "}
          <FaTv size="12" />
          Entertainment
        </NavLink>
      </li>
    </>
  );

     return (
       <div className="navigation my-3">
         <ul className="flex justify-between items-center sticky top-0">
          {navItems}
           {" "}
      
           <div className="tooltip">
             <HiOutlineAdjustmentsHorizontal size="20" />
             <span className="tooltiptext">Personalize Discover</span>
           </div>
         </ul>
       </div>
     );
};

export default Navigation;
