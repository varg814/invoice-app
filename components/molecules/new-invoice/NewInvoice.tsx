import React from "react";
import Image from "next/image";
import Button from "@/components/atoms/button/Button";
import buttonPlus from "@/assets/icon-plus.svg";
import { useState } from "react";
import InvoiceForm from "@/components/organisms/invoice-form/InvoiceForm";
const NewInvoice = () => {
  const [showForm, setShowForm] = useState(false);
  const handleButtonClick = () => {
    setShowForm(true);
  };
  const handleClose = () => {
    setShowForm(false);
  };
  return (
    <div>
      <div className="w-[150px] h-[48px] flex justify-between items-center p-[8px] pr-[17px] bg-[#7C5DFA] rounded-3xl hover:bg-[#9277FF] cursor-pointer max-sm:w-[90px] max-sm:h-[44px] max-sm:p-1.5 max-sm:pr-3.5">
        <Button
          className="w-[32px] h-[32px] rounded-[100%] bg-white flex items-center justify-center cursor-pointer"
          onClick={handleButtonClick}
        >
          <Image src={buttonPlus} alt="plus image"></Image>
        </Button>
        <h1 className="text-[15px] text-[#fff] font-bold leading-[15px] text-center">
          New <span className="max-sm:hidden">Invoice</span>
        </h1>
      </div>
      {showForm && <InvoiceForm onClose={handleClose} />}
    </div>
  );
};
export default NewInvoice;
