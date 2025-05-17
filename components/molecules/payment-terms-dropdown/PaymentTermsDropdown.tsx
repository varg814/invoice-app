import React, { useState } from "react";
import Image from "next/image";
import arrowDown from "@/assets/icon-arrow-down.svg";
import { PaymentTermsDropdownProps } from "@/types";
import useStore from "@/store/useStore";

const paymentOptions = [
  "Net 1 Day",
  "Net 7 Days",
  "Net 14 Days",
  "Net 30 Days",
];

const PaymentTermsDropdown: React.FC<PaymentTermsDropdownProps> = ({
  value = "Net 30 Days",
  onChange,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState(value);

  const toggleDropdown = () => {
    setIsOpen((prev) => !prev);
  };
  const isDarkMode = useStore((state) => state.isDarkMode);
  const inputTextsColor = isDarkMode ? "text-[#DFE3FA]" : "text-[#7E88C3]";
  const insideInputTextColor = isDarkMode ? "text-[#FFFFFF]" : "text-[#0C0E16]";

  const handleOptionClick = (option: string) => {
    setSelectedOption(option);
    onChange?.(option);
    setIsOpen(false);
  };

  return (
    <div className="relative w-full max-w-[240px]">
      <p className={`text-sm font-medium ${inputTextsColor} mb-1`}>
        Payment Terms
      </p>
      <div
        className="flex justify-between items-center p-3 border rounded-lg cursor-pointer bg-transparent  border-gray-300"
        onClick={toggleDropdown}
      >
        <span className={`text-sm font-medium ${insideInputTextColor}`}>
          {selectedOption}
        </span>
        <Image
          src={arrowDown}
          alt="arrow down"
          className={`transition-transform duration-200 ${
            isOpen ? "rotate-180" : ""
          }`}
        />
      </div>
      {isOpen && (
        <ul className="absolute z-10 w-full mt-2 bg-white  rounded-lg shadow-lg">
          {paymentOptions.map((option) => (
            <li
              key={option}
              onClick={() => handleOptionClick(option)}
              className={`px-4 py-2 cursor-pointer hover:bg-[#F9FAFE] text-[#0C0E16] ${
                selectedOption === option ? "text-[#7C5DFA] font-bold" : ""
              }`}
            >
              {option}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default PaymentTermsDropdown;
