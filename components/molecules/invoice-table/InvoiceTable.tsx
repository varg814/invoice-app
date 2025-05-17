import React from "react";

const InvoiceTable = () => {
  return (
    <div className="rounded-lg overflow-hidden font-bold">
      <div className="flex justify-between p-8 pb-10 bg-[#F9FAFE] max-sm:p-6">
        <div className="flex flex-col gap-8 max-sm:gap-6">
          <p className="text-[#7E88C3] max-sm:hidden">Item Name</p>
          <article className="sm:flex-col gap-2">
            <p>Banner Design</p>{" "}
            <span className="hidden max-sm:block">1 x £ 156.00</span>
          </article>

          <article className="sm:flex-col gap-2">
            <p>Email Design</p>{" "}
            <span className="hidden max-sm:block">2 x £ 200.00</span>
          </article>
        </div>
        <div className="flex flex-col items-center gap-8 max-sm:hidden">
          <p className="text-[#7E88C3]">QTY.</p>
          <p className="text-[#7E88C3]">1</p>
          <p className="text-[#7E88C3]">2</p>
        </div>
        <div className="flex flex-col items-end gap-8 max-sm:hidden">
          <p className="text-[#7E88C3]">Price</p>
          <p className="text-[#7E88C3]">£ 156.00</p>
          <p className="text-[#7E88C3]">£ 200.00</p>
        </div>
        <div className="flex  flex-col items-end gap-8 max-sm:justify-around">
          <p className="text-[#7E88C3] max-sm:hidden">Total</p>
          <p>£ 156.00</p>
          <p>£ 400.00</p>
        </div>
      </div>
      <div className="flex justify-between p-8 bg-[#373B53] text-white items-center max-sm:p-6">
        <h1 className="text-sm">Amount Due</h1>
        <h1 className="text-2xl">£ 556.00</h1>
      </div>
    </div>
  );
};

export default InvoiceTable;
