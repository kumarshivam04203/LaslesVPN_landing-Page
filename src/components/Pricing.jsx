import React from "react";
import PlanCard from "../layout/PlanCard";
import GlobalNetwork from "../layout/GlobalNetwork";

const Pricing = () => {
  return (
    <div>
      <div className="mt-20 flex flex-col items-center gap-[30px] bg-gradient-to-b from-gray-200 to-transparent ">
        <div className="text-[#0B132A] text-[35px] font-[500] leading-[50px] mt-16">
          Choose Your Plan
        </div>
        <div className="text-[#4F5665] text-[16px] font-[400] leading-[30px] ">
          Let's choose the package that is best for you and explore it happily
          and cheerfully.
        </div>
        {/* plan Card */}
        <PlanCard />
      </div>
      <div className="flex items-center justify-center">
        {/* global network */}
        <GlobalNetwork />
      </div>
    </div>
  );
};

export default Pricing;
