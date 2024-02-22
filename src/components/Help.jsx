import React from "react";

function Help() {
  return (
    <div className=" flex items-center justify-center mb-[-100px]">
      <div className="w-10/12 flex items-center justify-between my-5 p-[40px] rounded-[10px] shadow-[0px_10px_15px_5px_rgb(0,0,0,.1)] relative bg-[#fff] z-1">
        <div className="flex flex-col">
          <p className="text-[#0B132A] text-[35px] font-[500] leading-[50px]">
            Subscribe Now for Get Special Features!
          </p>
          <p className="text-[#4F5665] text-[16px] font-[400] leading-[30px]">
            Let's subscribe with us and find the fun.
          </p>
        </div>
        <button className="hidden md:flex border border-solid border-[#F53855] max-w-[100%] md:px-[40px] py-[8px] rounded-[10px] text-[16px] font-[500] p-[10px]  whitespace-nowrap text-[#ffffff] bg-[#F53838] hover:bg-[#F53855]  shadow-[0px_10px_15px_6px_rgb(246,56,56,0.35)]">
          Subscribe Now
        </button>
      </div>
    </div>
  );
}

export default Help;
