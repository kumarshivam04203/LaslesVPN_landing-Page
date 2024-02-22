import React from "react";
import { Link } from "react-scroll";
import Logo from "../assets/logo.svg";

const Navbar = () => {
  return (
    <div className="h-[80px] w-screen bg-[#fff] fixed flex justify-center items-center ">
      <div className=" absolute md:w-11/12 top-0  flex flex-row items-center justify-between p-2  md:p-[20px] md:px-32">
        <div className="md:text-[20px] text-[#0B132A] flex items-center gap-[5px] cursor-pointer">
          <img src={Logo} alt="logo" md:width={35} width={25} />
          <span>
            Lasles<strong>VPN</strong>
          </span>
        </div>

        <nav className=" hidden lg:flex text-[16px] gap-[30px]">
          <Link
            to="about"
            spy={true}
            smooth={true}
            duration={500}
            className="text-[#4F5665]  hover:text-[#F53855] transition-all cursor-pointer"
          >
            About
          </Link>
          <Link
            to="features"
            spy={true}
            smooth={true}
            duration={500}
            className="text-[#4F5665] hover:text-[#F53855] transition-all cursor-pointer"
          >
            Features
          </Link>
          <Link
            to="pricing"
            spy={true}
            smooth={true}
            duration={500}
            className="text-[#4F5665] hover:text-[#F53855] transition-all cursor-pointer"
          >
            Procing
          </Link>
          <Link
            to="testimonials"
            spy={true}
            smooth={true}
            duration={500}
            className="text-[#4F5665] hover:text-[#F53855] transition-all cursor-pointer"
          >
            Testimonials
          </Link>
          <Link
            to="help"
            spy={true}
            smooth={true}
            duration={500}
            className="text-[#4F5665] hover:text-[#F53855] transition-all cursor-pointer"
          >
            Help
          </Link>
        </nav>

        <div className="gap-[30px] flex flex-row justify-between">
          <button className="text-[#0B132A] md:mr-6 ml-6 whitespace-nowrap inline-block text-[16px] font-[500] p-[10PX] ">
            Sign in
          </button>
          <button className="text-[#F53855] border border-solid border-[#F53855] md:rounded-[50px] rounded-[30px] font-[600] px-[20px] md:px-[40px] md:py-[8px]  hover:bg-[#F53855] hover:text-white">
            Sign Up
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
