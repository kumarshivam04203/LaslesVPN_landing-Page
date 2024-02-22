import React from "react";
import Reviews from "../layout/Reviews";

const Testimonials = () => {
  return (
    <div>
      <div className="flex flex-col justify-center items-center gap-[20px] mb-8">
        <p className="text-[#0B132A] text-[35px] font-[500] leading-[50px] pl-5 pr-5">
          Trusted by Thousands of Happy Customer
        </p>
        <p className="text-[#4F5665] text-[16px] font-[400] leading-[30px] pl-5 pr-5">
          These are the stories of our customers who have joined us with great
          pleasure when using this crazy feature.
        </p>
      </div>
      {/* reviews */}
      <Reviews />
    </div>
  );
};

export default Testimonials;
