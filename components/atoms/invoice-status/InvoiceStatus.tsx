import React from "react";

const InvoiceStatus = () => {
  return (
    <div
      className={`
              h-[40px] w-[104px] rounded-md
              bg-[#33D69F]/5 text-[#33D69F]
              text-[15px] font-bold
              flex justify-center items-center
            `}
    >
      <h1 className="leading-[15px]">Paid</h1>
    </div>
  );
};

export default InvoiceStatus;
