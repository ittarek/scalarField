import React from 'react';
import MainCard from '../components/cardComponet/MainCard';
import SingleCard from '../components/cardComponet/SingleCard';

const Discovery = () => {
     return (
       <div className="bg-[#191A1A]  flex justify-center mx-auto h-screen ">
         <div>
           {/* main card */}
           <MainCard />

           {/* single card */}
           <SingleCard />
         </div>
       </div>
     );
};

export default Discovery;