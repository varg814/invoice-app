"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import useStore from "@/store/useStore";
import Button from "@/components/atoms/button/Button";
import Input from "@/components/atoms/input/Input";
import Label from "@/components/atoms/label/Label";
import arrowDown from "@/assets/icon-arrow-down.svg";
import arrowUp from "@/assets/icon-arrow-up.svg";
import check from "@/assets/icon-check.svg";

const FilterDropdown = () => {
  const isDarkMode = useStore((state) => state.isDarkMode);
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [selectedStatus, setSelectedStatus] = useState<string | null>(null);

  const arrow = isFilterOpen ? arrowUp : arrowDown;

  const toggleFilterDropdown = () => {
    setIsFilterOpen((prev) => !prev);
  };

  const handleChange = (status: string) => {
    setSelectedStatus((prev) => (prev === status ? null : status));
  };

  const statuses = ["draft", "pending", "paid"];

  const getCheckboxBg = (status: string) => {
    const baseBgColor =
      selectedStatus === status
        ? "bg-[#7C5DFA]"
        : isDarkMode
        ? "bg-[#1E2139]"
        : "bg-[#DFE3FA]";
    const hoverOutline = "hover:outline hover:outline-[#7C5DFA]";

    return `${baseBgColor} ${hoverOutline}`;
  };

  useEffect(() => {
    console.log("status:", selectedStatus);
  }, [selectedStatus]);

  return (
    <div>
      <Button
        className="flex gap-3 items-center font-bold cursor-pointer"
        onClick={toggleFilterDropdown}
      >
        <h1
          className={`text-base ${
            isDarkMode ? "text-white" : "text-[#0C0E16]"
          }`}
        >
          Filter <span className="max-sm:hidden">by status</span>
        </h1>
        <Image
          src={arrow}
          alt="arrow"
          height={7}
          width={12}
          className="object-contain"
        />
      </Button>

      {isFilterOpen && (
        <div
          className={`absolute w-48 p-6 flex flex-col gap-4 rounded-lg left-[-10%] top-15 max-sm:w-30 max-sm:p-2.5 ${
            isDarkMode ? "bg-[#252945]" : "bg-white"
          }`}
        >
          {statuses.map((status) => (
            <div key={status} className="flex gap-3 items-center h-4 relative">
              <Input
                type="checkbox"
                id={status}
                checked={selectedStatus === status}
                onChange={() => handleChange(status)}
                className={`appearance-none w-4 h-4 border-none rounded-xs ${getCheckboxBg(
                  status
                )}`}
              />
              {selectedStatus === status && (
                <Image src={check} alt="check" className="absolute left-1" />
              )}
              <Label
                htmlFor={status}
                className={`cursor-pointer font-bold ${
                  isDarkMode ? "text-white" : "text-[#1E2139]"
                }`}
              >
                {status.charAt(0).toUpperCase() + status.slice(1)}
              </Label>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default FilterDropdown;
