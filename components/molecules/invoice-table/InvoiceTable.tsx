import React from "react";
import useStore from "@/store/useStore";

const InvoiceTable = () => {
  const isDarkMode = useStore((state) => state.isDarkMode);
  const bgColor = isDarkMode ? "bg-[#252945]" : "bg-[#F9FAFE]";
  const secondaryBgColor = isDarkMode ? "bg-[#0C0E16]" : "bg-[#373B53]";
  const pColor = isDarkMode
    ? "text-[#DFE3FA] font-medium"
    : "text-[#7E88C3] font-medium";

  return (
    <div className="rounded-lg overflow-hidden font-bold">
      <div className={`flex justify-between p-8 pb-10 ${bgColor} max-sm:p-6`}>
        <div className="flex flex-col gap-8 max-sm:gap-6">
          <p className={`${pColor} text-[13px] leading-[18px] max-sm:hidden`}>
            Item Name
          </p>
          <article className="sm:flex-col gap-2">
            <h1
              className={`${
                isDarkMode ? "text-[#FFFFFF]" : "text-[#0C0E16]"
              } text-[15px] leading-[15px]`}
            >
              Banner Design
            </h1>{" "}
            <span
              className={`${
                isDarkMode ? "text-[#888EB0]" : "text-[#7E88C3]"
              } hidden max-sm:block`}
            >
              1 x £ 156.00
            </span>
          </article>

          <article className="sm:flex-col gap-2">
            <h1
              className={`${
                isDarkMode ? "text-[#FFFFFF]" : "text-[#0C0E16]"
              } text-[15px] leading-[15px]`}
            >
              Email Design
            </h1>{" "}
            <span
              className={`${
                isDarkMode ? "text-[#888EB0]" : "text-[#7E88C3]"
              } hidden max-sm:block`}
            >
              2 x £ 200.00
            </span>
          </article>
        </div>
        <div className="flex flex-col items-center gap-8 max-sm:hidden">
          <p className={`${pColor} text-[13px] leading-[18px] max-sm:hidden`}>
            QTY.
          </p>
          <h1
            className={`${
              isDarkMode ? "text-[#DFE3FA]" : "text-[#7E88C3]"
            } text-[13px] leading-[15px]`}
          >
            1
          </h1>
          <h1
            className={`${
              isDarkMode ? "text-[#DFE3FA]" : "text-[#7E88C3]"
            } text-[13px] leading-[15px]`}
          >
            2
          </h1>
        </div>
        <div className="flex flex-col items-end gap-8 max-sm:hidden">
          <p className={`${pColor} text-[13px] leading-[18px]`}>Price</p>
          <h1
            className={`${
              isDarkMode ? "text-[#DFE3FA]" : "text-[#7E88C3]"
            } text-[15px] leading-[15px]`}
          >
            £ 156.00
          </h1>
          <h1
            className={`${
              isDarkMode ? "text-[#DFE3FA]" : "text-[#7E88C3]"
            } text-[15px] leading-[15px]`}
          >
            £ 200.00
          </h1>
        </div>
        <div className="flex  flex-col items-end gap-8 max-sm:justify-around">
          <p className={`${pColor} text-[13px] leading-[18px] max-sm:hidden`}>
            Total
          </p>
          <h1
            className={`${
              isDarkMode ? "text-[#FFFFFF]" : "text-[#0C0E16]"
            } text-[15px] leading-[15px]`}
          >
            £ 156.00
          </h1>
          <h1
            className={`${
              isDarkMode ? "text-[#FFFFFF]" : "text-[#0C0E16]"
            } text-[15px] leading-[15px]`}
          >
            £ 400.00
          </h1>
        </div>
      </div>
      <div
        className={`flex justify-between p-6 ${secondaryBgColor} text-white items-center`}
      >
        <h1 className="text-sm">Amount Due</h1>
        <h1 className="text-2xl">£ 556.00</h1>
      </div>
    </div>
  );
};

export default InvoiceTable;
