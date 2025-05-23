import React from "react";
import { useState } from "react";
import InvoiceFooter from "@/components/molecules/invoice-footer/InvoiceFooter";
import useStore from "../../../store/useStore";
import { useEffect } from "react";
import BillFromSection from "@/components/molecules/bill-from-sectiom/BillFromSection";
import BillToSection from "@/components/molecules/bill-to-section/BillToSection";
import DateAndDescribtion from "@/components/molecules/date-describtion-section/DateAndDescribtion";
import ItemListSection from "@/components/molecules/items-list-section/ItemListSection";
const InvoiceForm = ({ onClose }: { onClose: () => void }) => {
  const isDarkMode = useStore((state) => state.isDarkMode);
  const formBgColor = isDarkMode ? "bg-[#141625]" : "bg-[#fff]";
  const [showForm] = useState(false);
  const [components, setComponents] = useState<number[]>([]);

  function useResponsiveHeight() {
    const [maxHeight, setMaxHeight] = useState("calc(100vh - 176px)");

    useEffect(() => {
      const updateHeight = () => {
        const isSmall = window.innerWidth <= 640;
        setMaxHeight(isSmall ? "calc(100vh - 120px)" : "calc(100vh - 176px)");
      };

      updateHeight();
      window.addEventListener("resize", updateHeight);
      return () => window.removeEventListener("resize", updateHeight);
    }, []);

    return maxHeight;
  }

  const maxHeight = useResponsiveHeight();

  const addNewItem = () => {
    setComponents((prev) => [...prev, prev.length]);
  };

  return (
    <div className="fixed top-0 left-[103px] w-full h-full flex max-md:left-0 max-md:top-[80px] max-md:!mb-[120px] max-sm:w-full max-sm:h-screen max-sm:top-[72px] bg-black/50">
      {/* {!showForm && ( */}
      {!showForm && (
        <div
          className={`relative w-[616px] ${formBgColor} shadow-lg h-full p-14 max-sm:w-full max-w-full max-sm:p-6`}
        >
          <div className="overflow-y-auto scrollbar-hide" style={{ maxHeight }}>
            <h1
              className={`text-2xl font-bold mb-4 ${
                isDarkMode ? "text-white" : "text-[#0C0E16]"
              } `}
            >
              New Invoice
            </h1>
            <BillFromSection />
            <BillToSection />
            <DateAndDescribtion />
            <h1 className="text-[#777F98] text-[24px] leading-[32px] !mt-[35px] !mb-6">
              Item List
            </h1>
            <div className="flex flex-col gap-5">
            <ItemListSection removeElement={false}/>
              {components.map((index) => (
                <ItemListSection key={index} removeElement={true}/>
              ))}
            </div>
            <button
              className={`w-full  h-[48px] ${
                isDarkMode ? "bg-[#252945]" : "bg-[#F9FAFE] "
              } cursor-pointer rounded-[24px] !mt-[24px] !mb-5 text-[#7E88C3] max-md:!mb-[120px]`}
              onClick={addNewItem}
            >
              + Add New Item
            </button>
          </div>
        </div>
      )}
      <InvoiceFooter onDiscard={onClose} onClose={onClose} />
    </div>
  );
};

export default InvoiceForm;
