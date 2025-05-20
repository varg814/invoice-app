"use client";
import React from "react";
import useStore from "@/store/useStore";
import Button from "@/components/atoms/button/Button";
import InvoiceInfo from "@/components/molecules/invoice-info/InvoiceInfo";
import InvoiceHeader from "@/components/molecules/invoice-header/InvoiceHeader";
import InvoiceTable from "@/components/molecules/invoice-table/InvoiceTable";
import ButtonArrow from "@/assets/icon-arrow-left.svg";
import Image from "next/image";
import { useRouter } from "next/navigation";
import InvoiceButtons from "@/components/molecules/invoice-buttons/InvoiceButtons";
import { useState, useEffect } from "react";

const InvoicePage = () => {
  const route = useRouter();
  const isDarkMode = useStore((state) => state.isDarkMode);
  const bgColor = isDarkMode ? "bg-[#141625]" : "bg-[#F8F8FB]";
  const secondaryBgColor = isDarkMode ? "bg-[#1E2139]" : "bg-[#fff]";

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
    <>
      <main
        className={`w-full max-md:h-[calc(100vh-80px)] max-sm:h-[calc(100vh-72px)] ${bgColor} pt-16 flex justify-center px-10 max-md:pt-12 max-sm:pt-8 max-sm:px-6 max-sm:flex-col`}
      >
        <div className="w-full h-[calc(100vh-128px)] max-w-[730px] flex flex-col gap-6 overflow-scroll max-md:h-[calc(100vh-192px)] max-sm:h-[calc(100vh-200px)] scrollbar-hide">
          <Button
            className={`self-start text-[15px] leading-[15px] font-bold flex gap-6 cursor-pointer ${
              isDarkMode ? "text-white" : "text-[#0C0E16]"
            }`}
            onClick={() => route.push("/")}
          >
            <Image
              src={ButtonArrow}
              alt="Back arrow"
              role="img"
              className="h-2.5 w-1.5"
            />
            Go back
          </Button>
          <InvoiceHeader />
          <section
            className={`flex flex-col gap-12 p-12 ${secondaryBgColor} rounded-lg max-sm:p-6 max-sm:gap-8`}
          >
            <InvoiceInfo />
            <InvoiceTable />
          </section>
        </div>
      </main>
      {!isSmUp && <InvoiceButtons />}
    </>
  );
};

export default InvoicePage;
