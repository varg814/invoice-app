import React from "react";
import { InvoiceStatusProps } from "@/types";

const InvoiceStatus = ({ status }: InvoiceStatusProps) => {
  const statusStyles: { [key: string]: string } = {
    paid: "bg-[#33D69F]/5 text-[#33D69F]",
    pending: "bg-[#FF8F00]/5 text-[#FF8F00]",
    draft: "bg-[#373B53]/5 text-[#373B53]",
  };

  const dotStyles: { [key: string]: string } = {
    paid: "bg-[#33D69F]",
    pending: "bg-[#FF8F00]",
    draft: "bg-[#373B53]",
  };

  return (
    <div
      className={`
        h-[40px] w-[104px] rounded-md
        text-[15px] font-bold
        flex justify-center items-center
        ${statusStyles[status]}
      `}
    >
      <div className="leading-[15px] capitalize flex gap-2 items-center">
        <div className={`w-2 h-2 rounded-full ${dotStyles[status]}`}></div>

        {status}
      </div>
    </div>
  );
};

export default InvoiceStatus;
