"use client";
import React from "react";
import useStore from "@/store/useStore";
import Invoice from "@/components/molecules/invoice/Invoice";
import FilterDropdown from "@/components/molecules/filter-dropdown/FilterDropdown";
import NewInvoice from "@/components/molecules/new-invoice/NewInvoice";
import HeaderArticle from "@/components/molecules/header-article/HeaderArticle";
import invoices from "@/assets/data.json";
import { useState } from "react";

const MainPage = () => {
  const isDarkMode = useStore((state) => state.isDarkMode);
  const bgColor = isDarkMode ? "bg-[#141625]" : "bg-[#F8F8FB]";
  const [selectedStatus, setSelectedStatus] = useState<string | null>(null);

  return (
    <main
      className={`w-full max-md:h-[calc(100vh-80px)] max-sm:h-[calc(100vh-72px)] ${bgColor} pt-20 flex justify-center px-12 max-sm:px-6`}
    >
      <div className="w-full max-w-[730px] h-[calc(100vh-128px)] overflow-scroll flex flex-col gap-16 max-md:h-[calc(100vh-192px)] max-sm:h-[calc(100vh-200px)] scrollbar-hide">
        <section className="flex justify-between">
          <HeaderArticle />
          <div className="flex items-center gap-10 max-sm:gap-5 relative">
            <FilterDropdown
              selectedStatus={selectedStatus}
              setSelectedStatus={setSelectedStatus}
            />
            <NewInvoice />
          </div>
        </section>
        <section className="flex flex-col gap-4">
          {invoices
            .filter(
              (invoice) => !selectedStatus || invoice.status === selectedStatus
            )
            .map((invoice) => (
              <Invoice
                key={invoice.id}
                id={invoice.id}
                paymentDue={invoice.paymentDue}
                clientName={invoice.clientName}
                price={invoice.total}
                status={invoice.status}
              />
            ))}
        </section>
      </div>
    </main>
  );
};

export default MainPage;
