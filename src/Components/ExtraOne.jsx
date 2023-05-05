import React from "react";
// import { Marquee } from "react-marquee-slider";

import LazyLoad from 'react-lazy-load';


const ExtraOne = () => {
  const imgUrl =
    "https://upload.wikimedia.org/wikipedia/commons/0/06/Pabda_Jhaal_-_Home-_Kolkata_-_West_Bengal.jpg";
  return (
    <div className="grid grid-cols-2 gap-4 h-screen">
      <div className="flex items-center justify-center h-full">
        <h1 className="text-5xl font-bold text-blue-500">New Update is Coming Soon!</h1>
      </div>
      <div className="flex items-center justify-center h-full">
        <LazyLoad
 
         >
<img src={imgUrl} alt="" />
         </LazyLoad>
          
        
      </div>
    </div>
  );
};

export default ExtraOne;
