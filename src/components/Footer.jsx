import React from "react";
import Logo from "../assets/logo.svg";

import { FaFacebookF } from "react-icons/fa";
import { IoLogoTwitter } from "react-icons/io5";
import { FaInstagram } from "react-icons/fa";
const Footer = () => {
  return (
    <div className="bg-[#F8F8F8] pt-44 pb-24">
      <div className="max-w-screen-xl w-full mx-auto px-6 sm:px-8 lg:px-16 grid grid-rows-6 sm:grid-rows-1 grid-flow-row sm:grid-flow-col grid-cols-3 sm:grid-cols-12 gap-4">
        <div className="row-span-2 sm:col-span-4 col-start-1 col-end-4 sm:col-end-5 flex flex-col items-start ">
          <div className="text-[20px] text-[#0B132A] flex items-center gap-[5px] cursor-pointer mb-5">
            <img src={Logo} alt="logo" width={35} />
            <span>
              Lasles<strong>VPN</strong>
            </span>
          </div>

          <p className="mb-4 text-[#4F5665] hover:text-[#0B132A]">
            <strong className="hover:text-[#0B132A] font-[600]">
              LaslesVPN
            </strong>{" "}
            is a private virtual network that has unique features and has high
            security.
          </p>
          <div className="flex w-full mt-2 gap-4 mb-8 -mx-2 curser-pointer">
            <FaFacebookF className="h-10 w-10 p-2 text-[#F53855] border-[#F53855] shadow-[0px_1px_20px_6px_rgb(246,56,56,0.35)] rounded-full flex items-center justify-center cursor-pointer" />

            <IoLogoTwitter className="h-10 w-10 p-2 text-[#F53855] border-[#F53855] shadow-[0px_1px_20px_6px_rgb(246,56,56,0.35)] rounded-full flex items-center justify-center cursor-pointer" />

            <FaInstagram className="h-10 w-10 p-2 text-[#F53855] border-[#F53855] shadow-[0px_1px_20px_6px_rgb(246,56,56,0.35)] rounded-full flex items-center justify-center cursor-pointer" />
          </div>
          <p className="text-[#4F5665]">
            ©{new Date().getFullYear()} - LaslesVPN
          </p>
        </div>
        <div className=" row-span-2 sm:col-span-2 sm:col-start-7 sm:col-end-9 flex flex-col">
          <p className="text-black-600 mb-4 font-medium text-lg">Product</p>
          <ul className="text-[#4F5665] ">
            <li className="my-2 hover:text-[#0B132A] cursor-pointer transition-all">
              Download{" "}
            </li>
            <li className="my-2 hover:text-[#0B132A] cursor-pointer transition-all">
              Pricing{" "}
            </li>
            <li className="my-2 hover:text-[#0B132A] cursor-pointer transition-all">
              Locations{" "}
            </li>
            <li className="my-2 hover:text-[#0B132A] cursor-pointer transition-all">
              Server{" "}
            </li>
            <li className="my-2 hover:text-[#0B132A] cursor-pointer transition-all">
              Countries{" "}
            </li>
            <li className="my-2 hover:text-[#0B132A] cursor-pointer transition-all">
              Blog{" "}
            </li>
          </ul>
        </div>
        <div className="row-span-2 sm:col-span-2 sm:col-start-9 sm:col-end-11 flex flex-col">
          <p className="text-black-600 mb-4 font-medium text-lg">Engage</p>
          <ul className="text-[#4F5665] font-[400]">
            <li className="my-2 hover:text-[#0B132A] cursor-pointer transition-all">
              LaslesVPN ?{" "}
            </li>
            <li className="my-2 hover:text-[#0B132A] cursor-pointer transition-all">
              FAQ{" "}
            </li>
            <li className="my-2 hover:text-[#0B132A] cursor-pointer transition-all">
              Tutorials{" "}
            </li>
            <li className="my-2 hover:text-[#0B132A] cursor-pointer transition-all">
              About Us{" "}
            </li>
            <li className="my-2 hover:text-[#0B132A] cursor-pointer transition-all">
              Privacy Policy{" "}
            </li>
            <li className="my-2 hover:text-[#0B132A] cursor-pointer transition-all">
              Terms of Service{" "}
            </li>
          </ul>
        </div>
        <div className="row-span-2 sm:col-span-2 sm:col-start-11 sm:col-end-13 flex flex-col">
          <p className="text-black-600 mb-4 font-medium text-lg">Earn Money</p>
          <ul className="text-[#4F5665] font-[400]">
            <li className="my-2 hover:text-[#0B132A] cursor-pointer transition-all">
              Affiliate{" "}
            </li>
            <li className="my-2 hover:text-[#0B132A] cursor-pointer transition-all">
              Become Partner{" "}
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Footer;
