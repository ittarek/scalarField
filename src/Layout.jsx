import React from 'react';
import SideBar from './components/sideBar/SideBar';
import Discovery from "./pages/Discovery";
import "./index.css"
import { Outlet } from 'react-router-dom';
const Layout = () => {
  return (
    <main className="flex">
      <div className="w-[20%]">
        <SideBar />
      </div>
      <div className='w-full my-3 mx-3'>
        {/* <Discovery /> */}
        <Outlet/>
      </div>
    </main>
  );
};

export default Layout;