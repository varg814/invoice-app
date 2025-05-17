"use client"
import React from "react";
import useStore from "@/store/useStore";
import Button from "@/components/atoms/button/Button";
import InvoiceInfo from "@/components/molecules/invoice-info/InvoiceInfo";
import InvoiceHeader from "@/components/molecules/invoice-header/InvoiceHeader";
import InvoiceTable from "@/components/molecules/invoice-table/InvoiceTable";

const InvoicePage = () => {
  const isDarkMode = useStore((state) => state.isDarkMode);
  const bgColor = isDarkMode ? "bg-[#141625]" : "bg-[#F8F8FB]";
  return (
    <main
      className={`w-full ${bgColor} pt-16 flex justify-center px-10 max-md:pt-12 max-sm:pt-8 max-sm:px-6 overflow-y-scroll`}
    >
      <div className="w-full max-w-[730px] flex flex-col gap-6">
        <Button className="self-start" onClick={() => {}}>
          Go back
        </Button>
        <InvoiceHeader />
        <section className="flex flex-col gap-5 p-12 bg-white rounded-lg max-sm:p-6 max-sm:gap-8">
          <InvoiceInfo />
          <InvoiceTable />
        </section>
      </div>
    </main>
  );
};

export default InvoicePage;
