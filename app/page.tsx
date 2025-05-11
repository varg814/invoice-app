"use client";
import React from "react";
import invoices from "@/assets/data.json";
import useStore from "@/store/useStore";

const Page = () => {
  const isDarkMode = useStore((state) => state.isDarkMode);

  const bgColor = isDarkMode ? "bg-[#141625]" : "bg-white";

  return (
    <main
      className={`w-full h-screen ${bgColor} pt-[78px] flex justify-center px-[48px]`}
    >
      <div className="w-full max-w-[730px] flex flex-col gap-[64px]">
        <section>
          <article>
            <h1
              className={`text-[36px] font-bold ${
                isDarkMode ? "text-white" : "text-[#0C0E16]"
              }`}
            >
              Invoices
            </h1>
            <p
              className={`text-[13px]  ${
                isDarkMode ? "text-[#DFE3FA]" : "text-[#888EB0]"
              }`}
            >
              There are {invoices.length} total invoices
            </p>
          </article>
          <div>{/* input dropdown and adding button */}</div>
        </section>
        <section className="flex flex-col gap-[16px] bg">
          {/* map over invoices here */}
        </section>
      </div>
    </main>
  );
};

export default Page;
