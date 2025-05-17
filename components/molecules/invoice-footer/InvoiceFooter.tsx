import React from "react";
import { OnDiscardProps } from "@/types";
import useStore from "@/store/useStore";
const InvoiceFooter = ({ onDiscard }: OnDiscardProps) => {
  const isDarkMode = useStore((state) => state.isDarkMode);
  const formFooterBgColor = isDarkMode ? "bg-[#141625]" : "bg-[#FFFFFF]";
  return (
    <div
      className={`fixed bottom-0 left-[103px] w-[616px] h-[120px] ${formFooterBgColor} flex items-center justify-between pl-7 pr-7 max-md:left-0 max-sm:w-full`}
    >
      <button
        className="w-[96px] h-[48px] bg-[#F9FAFE] rounded-[24px] cursor-pointer text-[#7E88C3] max-sm:w-[80px]"
        onClick={onDiscard}
      >
        Discard
      </button>
      <div className="flex items-center gap-[8px]">
        <button className="w-[133px] h-[48px] bg-[#373B53] rounded-[24px] cursor-pointer text-[#888EB0] max-sm:w-[100px]">
          Save as Draft
        </button>
        <button className="w-[133px] h-[48px] bg-[#7C5DFA] rounded-[24px] cursor-pointer text-[#FFFFFF] max-sm:w-[100px]">
          Save & Send
        </button>
      </div>
    </div>
  );
};

export default InvoiceFooter;
