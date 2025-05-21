import React from "react";
import Button from "@/components/atoms/button/Button";
import useStore from "@/store/useStore";

const InvoiceButtons = () => {
  const isDarkMode = useStore((state) => state.isDarkMode);
  const BtnbgColor = isDarkMode ? "bg-[#252945]" : "bg-[#F9FAFE]";
  const textColor = isDarkMode ? "text-[#fff]" : "text-[#7E88C3]";
  const BgColor = isDarkMode ? "max-sm:bg-[#1E2139] max-sm:h-[88px]" : "max-sm:bg-[#fff] max-sm:h-[88px]";

  return (
    <div
      className={`flex items-center gap-2 ${BgColor} max-sm:justify-center`}
    >
      <Button
        className={`h-[48px] w-[73px] flex items-center justify-center rounded-3xl ${BtnbgColor} ${textColor} font-bold cursor-pointer hover:bg-[#DFE3FA]`}
        onClick={() => {}}
      >
        Edit
      </Button>
      <Button
        className="h-[48px] w-[89px] flex items-center justify-center rounded-3xl bg-[#EC5757] text-white font-bold cursor-pointer hover:bg-[#FF9797]"
        onClick={() => {}}
      >
        Delete
      </Button>
      <Button
        className="h-[48px] w-[131px] flex items-center justify-center rounded-3xl bg-[#7C5DFA] text-white font-bold cursor-pointer hover:bg-[#9277FF]"
        onClick={() => {}}
      >
        Mark as Paid
      </Button>
    </div>
  );
};

export default InvoiceButtons;
