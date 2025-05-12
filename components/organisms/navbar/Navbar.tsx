"use client";
import React from "react";
import Image from "next/image";
import useStore from "../../../store/useStore";
import Button from "@/components/atoms/button/Button";
import logo from "@/assets/logo.svg";
import moon from "@/assets/icon-moon.svg";
import sun from "@/assets/icon-sun.svg";
import avatar from "@/assets/image-avatar.jpg";

const Navbar = () => {
  const isDarkMode = useStore((state) => state.isDarkMode);
  const toggleTheme = useStore((state) => state.toggleTheme);

  const bgColorMain = isDarkMode ? "bg-[#141625]" : "bg-[#F8F8FB]";
  const bgColor = isDarkMode ? "bg-[#1E2139]" : "bg-[#373B53]";

  const icon = isDarkMode ? sun : moon;

  return (
    <nav
      className={`${bgColorMain}
`}
    >
      <div
        className={`flex flex-col justify-between items-center ${bgColor}
        w-[103px] h-screen rounded-tr-[20px] rounded-br-[20px]
        max-md:flex-row max-md:w-full max-md:h-[80px] max-md:rounded-none max-sm:h-[72px]`}
      >
        <div
          className="flex items-center justify-center bg-[#7C5DFA] shrink-0 
        w-[103px] h-[103px] rounded-tr-[20px] rounded-br-[20px]
        max-md:w-[80px] max-md:h-[80px] max-sm:w-[72px] max-sm:h-[72px]"
        >
          <Image src={logo} alt="logo icon" className="h-[40px] w-[40px]" />
        </div>

        <div
          className="flex flex-col items-center gap-[57px] pb-[24px] w-full
        max-md:flex-row max-md:justify-end max-md:pr-[32px] max-md:pb-0
        max-md:gap-[65px] max-sm:gap-[49px]"
        >
          <Button onClick={toggleTheme} className={`cursor-pointer ${bgColor}`}>
            <Image src={icon} alt="Toggle theme icon" />
          </Button>

          <div className="bg-[#494E6E] w-full h-[1px] max-md:w-[1px] max-md:h-[80px] max-sm:h-[72px]" />

          <Image
            src={avatar}
            alt="avatar image"
            className="rounded-full w-[40px] h-[40px] max-md:w-[32px] max-md:h-[32px]"
          />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
