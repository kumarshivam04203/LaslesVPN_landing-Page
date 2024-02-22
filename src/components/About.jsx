import React from "react";
import img from "../assets/illustration-1.svg";
import { Link } from "react-scroll";
import User from "../assets/user.svg";
import Location from "../assets/location.svg";
import Server from "../assets/server.svg";

const infoItems = [
  {
    icon: User,
    title: "90+",
    subtitle: "Users",
  },
  {
    icon: Location,
    title: "30+",
    subtitle: "Locations",
  },
  {
    icon: Server,
    title: "50+",
    subtitle: "Servers",
  },
];

const About = () => {
  return (
    <div className="flex flex-col items-center justify-center">
      <div className=" flex lg:flex-row flex-col-reverse md:justify-between items-center md:mx-32 mx-5 mt-10">
        <div className="flex flex-col gap-[20px] lg:w-[555px]">
          <span className="text-[#0B132A] text-[50px] font-[700] leading-[70px]">
            Want anything to be easy with <strong>LaslesVPN</strong>
          </span>
          <span className="text-[#4F5665] text-[16px] font-[400] leading-[30px]">
            Provide a network for all your needs with ease and fun using
            LaslesVPN discover interesting features from us.
          </span>
          <Link to="#" spy={true} smooth={true} duration={500}>
            <button className="border border-solid border-[#F53855] max-w-[100%] md:px-[40px] py-[8px] rounded-[10px] text-[16px] font-[500] p-[10px] inline-block whitespace-nowrap text-[#ffffff] bg-[#F53838] hover:bg-[#F53855]  shadow-[0px_10px_15px_6px_rgb(246,56,56,0.35)]">
              Get Started
            </button>
          </Link>
        </div>

        <div className=" w-full md:w-2/4">
          <img src={img} alt="img" />
        </div>
      </div>

      <div className="mt-24 w-full md:w-[90%] md:h-[200px] flex flex-col md:flex-row justify-center items-center">
        <div className="p-[30px] w-11/12 flex justify-between leading-[10px] shadow-lg mx-0 my-[20px]] ">
          {infoItems.map((item, index) => (
            <div
              key={index}
              className="flex justify-center items-center flex-1 gap-5 p-5"
            >
              <div className="flex items-center justify-center bg-[#FFECEC] w-[55px] h-[55px] rounded-[50%]">
                <img src={item.icon} alt={item.title} />
              </div>
              <div className="flex flex-col">
                <span className="text-[#0B132A] text-[25px] font-[700] leading-[30px]">
                  {item.title}
                </span>
                <span className="text-[#4F5665] text-[20px] font-[400] leading-[30px] ">
                  {item.subtitle}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default About;
