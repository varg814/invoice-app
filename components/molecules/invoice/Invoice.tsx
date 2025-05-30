import React from "react";
import Button from "@/components/atoms/button/Button";
import Image from "next/image";
import buttonArrow from "@/assets/icon-arrow-right.svg";
import useStore from "@/store/useStore";
import InvoiceStatus from "@/components/atoms/invoice-status/InvoiceStatus";
import { InvoiceProps } from "@/types";
import { useRouter } from "next/navigation";

const Invoice = ({
  id,
  paymentDue,
  clientName,
  total,
  status,
}: InvoiceProps) => {
  const route = useRouter();
  const isDarkMode = useStore((state) => state.isDarkMode);

  const containerBg = isDarkMode ? "bg-[#1E2139]" : "bg-white";
  const primaryText = isDarkMode ? "text-white" : "text-[#0C0E16]";
  const secondaryText = isDarkMode ? "text-[#DFE3FA]" : "text-[#888EB0]";

  return (
    <div
      className={`
        w-full max-w-[730px] h-[72px] rounded-lg flex justify-between
        pl-[32px] pr-[24px] max-sm:h-[134px] max-sm:p-6
        ${containerBg} border border-transparent hover:border-[#7C5DFA] cursor-pointer
      `}
      onClick={() => {
        route.push(`/invoice/${id}`);
      }}
    >
      <div
        className={`
          flex justify-between items-center gap-1 w-1/2
          max-sm:flex-col max-sm:justify-center max-sm:items-start
        `}
      >
        <h1 className={`text-[15px] font-bold ${primaryText}`}>#{id}</h1>
        <p className={`text-[13px] font-medium ${secondaryText}`}>
          {paymentDue}
        </p>
        <p className={`text-[13px] font-medium ${primaryText}`}>{clientName}</p>
      </div>

      <div
        className={`
          flex items-center justify-between gap-2.5
          w-[40%] min-w-[215px]
          max-sm:min-w-auto max-sm:flex-col max-sm:justify-center max-sm:items-end
        `}
      >
        <h1 className={`text-[15px] font-bold ${primaryText}`}>
          {" "}
          £{" "}
          {total?.toLocaleString("en-UK", {
            minimumFractionDigits: 2,
            maximumFractionDigits: 2,
          })}
        </h1>

        <div className="flex gap-[20px] max-sm:gap-0">
          <InvoiceStatus status={status} isDarkMode={isDarkMode}/>
          <Button
            className="cursor-pointer"
            onClick={() => {
              route.push(`/invoice/${id}`);
            }}
          >
            <Image
              src={buttonArrow}
              alt="arrow image"
              className="max-sm:hidden"
            />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Invoice;
