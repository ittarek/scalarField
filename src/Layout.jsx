import React from 'react';
import SideBar from './components/sideBar/SideBar';
import Discovery from "./pages/Discovery";
import "./index.css"
const Layout = () => {
  return (
    <main className="flex">
      <div className="w-[22%]">
        <SideBar />
      </div>
      <div className='w-full my-3 mx-3'>
        <Discovery />
      </div>
    </main>
  );
};

export default Layout;