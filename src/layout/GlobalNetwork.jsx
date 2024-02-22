import React from "react";
import World from "../assets/world.svg";
import Sponsored from "../assets/sponsored.png";

const GlobalNetwork = () => {
  return (
    <div className="flex flex-col items-center justify-center w-11/12">
      <div className="flex  justify-center  items-center  gap-[40px] px-[50px] py-[20px]"></div>
      <div className="text-[#0B132A] text-[35px] font-[500] leading-[50px] p-6 ">
        Huge Global Network of Fast VPN
      </div>
      <div className="text-[#4F5665] text-[16px] font-[400] leading-[30px] pb-12">
        See LaslesVPN everywhere to make it easier for you when you move
        locations.
      </div>
      <div>
        <img className="map" src={World} alt="world" />
        <img src={Sponsored} alt="Sponsored" />
      </div>
    </div>
  );
};

export default GlobalNetwork;
