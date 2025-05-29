import React from "react";
import useStore from "@/store/useStore";
import invoices from "@/assets/data.json";
import { useParams } from "next/navigation";

const InvoiceTable = () => {
  const isDarkMode = useStore((state) => state.isDarkMode);
  const bgColor = isDarkMode ? "bg-[#252945]" : "bg-[#F9FAFE]";
  const secondaryBgColor = isDarkMode ? "bg-[#0C0E16]" : "bg-[#373B53]";
  const pColor = isDarkMode
    ? "text-[#DFE3FA] font-medium"
    : "text-[#7E88C3] font-medium";

  const params = useParams();
  const id = params.id;
  const invoice = invoices.find((inv) => inv.id === id);

  return (
    <div className="rounded-lg overflow-hidden font-bold">
      <div className={`flex justify-between p-8 pb-10 ${bgColor} max-sm:p-6`}>
        <div className="flex flex-col gap-8 max-sm:gap-6">
          <p className={`${pColor} text-[13px] leading-[18px] max-sm:hidden`}>
            Item Name
          </p>
          {invoice?.items.map((item) => (
            <article className="sm:flex-col gap-2" key={item.name}>
              <h1
                className={`${
                  isDarkMode ? "text-[#FFFFFF]" : "text-[#0C0E16]"
                } text-[15px] leading-[15px]`}
              >
                {item.name}
              </h1>{" "}
              <span
                className={`${
                  isDarkMode ? "text-[#888EB0]" : "text-[#7E88C3]"
                } hidden max-sm:block`}
              >
                {item.quantity} x £{" "}
                {item.price.toLocaleString("en-UK", {
                  minimumFractionDigits: 2,
                  maximumFractionDigits: 2,
                })}
              </span>
            </article>
          ))}
        </div>
        <div className="flex flex-col items-center gap-8 max-sm:hidden">
          <p className={`${pColor} text-[13px] leading-[18px] max-sm:hidden`}>
            QTY.
          </p>
          {invoice?.items.map((item) => (
            <h1
              className={`${
                isDarkMode ? "text-[#DFE3FA]" : "text-[#7E88C3]"
              } text-[13px] leading-[15px]`}
              key={item.name}
            >
              {item.quantity}
            </h1>
          ))}
        </div>
        <div className="flex flex-col items-end gap-8 max-sm:hidden">
          <p className={`${pColor} text-[13px] leading-[18px]`}>Price</p>
          {invoice?.items.map((item) => (
            <h1
              className={`${
                isDarkMode ? "text-[#DFE3FA]" : "text-[#7E88C3]"
              } text-[15px] leading-[15px]`}
              key={item.name}
            >
              £{" "}
              {item.price.toLocaleString("en-UK", {
                minimumFractionDigits: 2,
                maximumFractionDigits: 2,
              })}
            </h1>
          ))}
        </div>
        <div className="flex  flex-col items-end gap-8 max-sm:justify-around">
          <p className={`${pColor} text-[13px] leading-[18px] max-sm:hidden`}>
            Total
          </p>
          {invoice?.items.map((item) => (
            <h1
              className={`${
                isDarkMode ? "text-[#FFFFFF]" : "text-[#0C0E16]"
              } text-[15px] leading-[15px]`}
              key={item.name}
            >
              £{" "}
              {item.total.toLocaleString("en-UK", {
                minimumFractionDigits: 2,
                maximumFractionDigits: 2,
              })}
            </h1>
          ))}
        </div>
      </div>
      <div
        className={`flex justify-between p-6 ${secondaryBgColor} text-white items-center`}
      >
        <h1 className="text-sm font-medium">Amount Due</h1>
        <h1 className="text-2xl">
          £{" "}
          {invoice?.total.toLocaleString("en-UK", {
            minimumFractionDigits: 2,
            maximumFractionDigits: 2,
          })}
        </h1>
      </div>
    </div>
  );
};

export default InvoiceTable;
