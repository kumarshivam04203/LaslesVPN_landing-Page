import React from "react";
import img from "../assets/illustration-2.svg";
import check from "../assets/check.svg";

const Features = () => {
  const checkItems = [
    "Powerfull online protection.",
    "Internet without borders.",
    "Supercharged VPN",
    "No specific time limits.",
  ];

  return (
    <div>
      <div className="  flex flex-col md:flex-row items-center gap-5 md:mx-32 mx-5 mt-14">
        <div className=" w-100% md:w-2/4 mt-8 object-fill">
          <img src={img} alt="img" />
        </div>

        <div className=" w-full md:w-2/4  space-y-2">
          <div className="text-[#0B132A] text-[35px] font-[500] leading-[60px]">
            We Provide Many Features You Can Use
          </div>
          <div className="text-[#4F5665] text-[16px] font-[400] leading-[40px]">
            You can explore the features that we provide with fun and have their
            own functions each feature.
          </div>

          {checkItems.map((item, i) => (
            <div
              key={i}
              className="flex gap-3 items-center text-[#4F5665] text-[14px] font-[400] leading-[40px]"
            >
              <img src={check} alt="check" />
              {item}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Features;
