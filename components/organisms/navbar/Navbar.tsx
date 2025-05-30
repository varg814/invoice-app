"use client";
import React, { useState } from "react";
import Image from "next/image";
import useStore from "../../../store/useStore";
import Button from "@/components/atoms/button/Button";
import logo from "@/assets/logo.svg";
import moon from "@/assets/icon-moon.svg";
import sun from "@/assets/icon-sun.svg";
import avatar from "@/assets/image-avatar.jpg";
import { useRouter } from "next/navigation";
import { deleteCookie } from "cookies-next";

const Navbar = () => {
  const router = useRouter();
  const isDarkMode = useStore((state) => state.isDarkMode);
  const toggleTheme = useStore((state) => state.toggleTheme);
  const [isLoggingOut, setIsLoggingOut] = useState(false);
  const accessToken = useStore((state) => state.accessToken);

  if (!accessToken) return null;

  const bgColorMain = isDarkMode ? "bg-[#141625]" : "bg-[#F8F8FB]";
  const bgColor = isDarkMode ? "bg-[#1E2139]" : "bg-[#373B53]";

  const icon = isDarkMode ? sun : moon;

  const toggleLogoutConfirmation = () => setIsLoggingOut((prev) => !prev);

  function logout() {
    deleteCookie("accessToken");
    useStore.getState().setAccessToken(null);
    router.push("/auth/sign-in");
  }

  return (
    <nav className={`${bgColorMain}`}>
      <div
        className={`flex flex-col justify-between items-center ${bgColor}
      w-[103px] h-screen rounded-tr-[20px] rounded-br-[20px]
      max-md:flex-row max-md:w-full max-md:h-[80px] max-md:rounded-none max-sm:h-[72px]`}
      >
        <div
          className="h-[103px] w-[103px] bg-[#7C5DFA] rounded-tr-[20px] rounded-br-[20px] flex items-end relative max-md:w-[80px] max-md:h-[80px] max-sm:w-[72px] max-sm:h-[72px] shrink-0"
          onClick={() => router.push("/")}
          role="button"
          tabIndex={0}
          onKeyDown={(e) => e.key === "Enter" && router.push("/")}
        >
          <div className="h-1/2 w-full bg-[#9277FF] rounded-tl-[20px] rounded-br-[20px]" />
          <Image
            src={logo}
            alt="logo icon"
            className="h-[40px] w-[40px] absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 max-md:h-[30px] max-md:w-[30px] max-sm:h-[28px] max-sm:w-[28px]"
          />
        </div>

        <div
          className="flex flex-col items-center gap-[57px] pb-[24px] w-full
        max-md:flex-row max-md:justify-end max-md:pr-[32px] max-md:pb-0
        max-md:gap-[65px] max-sm:gap-[49px]"
        >
          <Button
            onClick={toggleTheme}
            className={`cursor-pointer ${bgColor}`}
            aria-label="Toggle theme"
          >
            <Image src={icon} alt="Toggle theme icon" />
          </Button>

          {isLoggingOut ? (
            <div>
              <button
                onClick={logout}
                aria-label="Confirm logout"
                className="text-red-500"
              >
                Logout
              </button>
              <button
                onClick={toggleLogoutConfirmation}
                aria-label="Cancel logout"
                className="ml-2"
              >
                Cancel
              </button>
            </div>
          ) : (
            <Image
              onClick={toggleLogoutConfirmation}
              src={avatar}
              alt="avatar image"
              className="rounded-full w-[40px] h-[40px] max-md:w-[32px] max-md:h-[32px] cursor-pointer"
              role="button"
              tabIndex={0}
              onKeyDown={(e) => e.key === "Enter" && toggleLogoutConfirmation()}
            />
          )}

          <div className="bg-[#494E6E] w-full h-[1px] max-md:w-[1px] max-md:h-[80px] max-sm:h-[72px]" />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
