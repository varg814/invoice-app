"use client";
import React from "react";
import useStore from "@/store/useStore";
import Invoice from "@/components/molecules/invoice/Invoice";
import FilterDropdown from "@/components/molecules/filter-dropdown/FilterDropdown";
import NewInvoice from "@/components/molecules/new-invoice/NewInvoice";
import HeaderArticle from "@/components/molecules/header-article/HeaderArticle";

const MainPage = () => {
  const isDarkMode = useStore((state) => state.isDarkMode);
  const bgColor = isDarkMode ? "bg-[#141625]" : "bg-[#F8F8FB]";

  return (
    <main
      className={`w-full h-screen ${bgColor} pt-20 flex justify-center px-12 max-sm:px-6`}
    >
      <div className="w-full max-w-[730px] flex flex-col gap-16">
        <section className="flex justify-between">
          <HeaderArticle />
          <div className="flex items-center gap-10 max-sm:gap-5 relative">
            <FilterDropdown />
            <NewInvoice />
          </div>
        </section>
        <section className="flex flex-col gap-4">
          <Invoice />
        </section>
      </div>
    </main>
  );
};

export default MainPage;
