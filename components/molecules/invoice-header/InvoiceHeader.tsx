import React from "react";
import InvoiceStatus from "@/components/atoms/invoice-status/InvoiceStatus";
import useStore from "@/store/useStore";
import InvoiceButtons from "../invoice-buttons/InvoiceButtons";
import { useState, useEffect } from "react";

const InvoiceHeader = () => {
  const isDarkMode = useStore((state) => state.isDarkMode);
  const bgColor = isDarkMode ? "bg-[#1E2139]" : "bg-[#fff]";
  const textColor = isDarkMode ? "text-[#fff]" : "text-[#7E88C3]";

  const useIsSmUp = () => {
    const [isSmUp, setIsSmUp] = useState(false);

    useEffect(() => {
      const check = () => setIsSmUp(window.innerWidth >= 640);
      check();
      window.addEventListener("resize", check);
      return () => window.removeEventListener("resize", check);
    }, []);

    return isSmUp;
  };

  const isSmUp = useIsSmUp();

  return (
    <section
      className={`flex justify-between ${bgColor} py-5 px-8 rounded-lg shrink-0 max-sm:px-6`}
    >
      <div className="flex items-center gap-5 justify-between w-full">
        <div className="flex items-center gap-5 max-sm:justify-between max-sm:w-full">
          <p className={`text-[13px] leading-[15px] font-medium ${textColor}`}>
            Status
          </p>
          <InvoiceStatus />
        </div>
        {isSmUp && <InvoiceButtons />}
      </div>
    </section>
  );
};

export default InvoiceHeader;
