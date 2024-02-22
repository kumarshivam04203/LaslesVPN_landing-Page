import React from "react";
import img1 from "../assets/plan-box.svg";
import img2 from "../assets/check-nobg.svg";

const basePlanFeatures = [
  "Unlimited Bandwitch",
  "Encrypted Connection",
  "No Traffic Logs",
  "Works on All Devices",
];
const standardPlanFeatures = [...basePlanFeatures, "Connect Anywere"];
const premiumPlanFeatures = [...standardPlanFeatures, "Get New Features"];

const plans = [
  {
    title: "Free Plan",
    features: basePlanFeatures,
    price: 0,
  },
  {
    title: "Standard Plan",
    features: standardPlanFeatures,
    price: 9,
  },
  {
    title: "Premium Plan",
    features: premiumPlanFeatures,
    price: 12,
  },
];

function PlanCard() {
  return (
    <div className="flex gap-[20px] p-[40px] flex-wrap lg:w-[1140px] w-[500px] flex-col lg:flex-row ">
      {plans.map((plan, index) => (
        <div
          className="flex flex-1 justify-between items-center flex-col rounded-[10px] border border-solid border-[#DDD] p-[30px] gap-[50px] cursor-pointer hover:border-[#F53838] transition-all"
          key={index}
        >
          <div className="flex flex-col items-center gap-[20px]">
            <img className="max-w-[60px]" src={img1} alt="box" />
            <span className="text-[#0B132A] text-[18px] font-[500] leading-[30px]">
              {plan.title}
            </span>

            <div className="flex flex-col gap-[10px]">
              {plan.features.map((feature, index) => (
                <div key={index} className="flex items-center gap-[10px]">
                  <img src={img2} alt="check" />
                  {feature}
                </div>
              ))}
            </div>
          </div>

          <div className="flex  items-center gap-[20px]">
            {plan.price === 0 ? (
              <span className="text-[#4F5665] text-[25px] font-[400] leading-[30px] flex flex-col items-center justify-center m-3 ">
                <strong className=" text-[#0B132A] mb-12">Free</strong>
                <button className="text-[#F53855] border border-solid border-[#F53855] rounded-[50px] font-[600] px-[40px] py-[8px] hover:bg-[#F53855] hover:text-white">
                  Select
                </button>
              </span>
            ) : (
              <span className="text-[#4F5665] text-[25px] font-[400] leading-[30px] flex flex-col items-center justify-center m-3">
                <p className="mb-12">
                  <strong className="text-[#0B132A]">${plan.price}</strong> / mo{" "}
                </p>
                <button className=" text-[#F53855] border border-solid border-[#F53855] rounded-[50px] font-[600] px-[40px] py-[5px] hover:bg-[#F53855] hover:text-white">
                  Select
                </button>
              </span>
            )}
          </div>
        </div>
      ))}
    </div>
  );
}

export default PlanCard;
