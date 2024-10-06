import React from 'react';
import SideBar from './components/sideBar/SideBar';
import Home from './pages/Home';

const Layout = () => {
  return (
    <main className='lg:flex gap-5 '>
      <SideBar/> 
      <Home/>
    </main>
  );
};

export default Layout;