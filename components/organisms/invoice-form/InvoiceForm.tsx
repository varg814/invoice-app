import React from "react";
import { useState } from "react";
import InvoiceFooter from "@/components/molecules/invoice-footer/InvoiceFooter";
import useStore from "../../../store/useStore";
import { useEffect } from "react";
import { useFormik } from "formik";
import { invoiceFormSchema } from "@/schemas/invoiceFormSchema";
import BillFromSection from "@/components/molecules/bill-from-sectiom/BillFromSection";
import BillToSection from "@/components/molecules/bill-to-section/BillToSection";
import DateAndDescribtion from "@/components/molecules/date-describtion-section/DateAndDescribtion";
import ItemListSection from "@/components/molecules/items-list-section/ItemListSection";
const InvoiceForm = ({ onClose }: { onClose: () => void }) => {
  const isDarkMode = useStore((state) => state.isDarkMode);
  const toggleTheme = useStore((state) => state.toggleTheme);
  const formBgColor = isDarkMode ? "bg-[#141625]" : "bg-[#DFE3FA]";
  const [isHidden, setIsHidden] = useState(true);
  const [showForm, setShowForm] = useState(false);
  const [total, setTotal] = useState(0);
  const {
    values,
    handleBlur,
    handleChange,
    setFieldValue,
    handleSubmit,
    errors,
    touched,
  } = useFormik({
    initialValues: {
      email: "",
      senderAddress: "",
      senderCity: "",
      senderPostCode: "",
      senderCountry: "",
      clientName: "",
      clientAddress: "",
      clientCity: "",
      clientPostCode: "",
      clientCountry: "",
      invoiceDate: new Date().toISOString(),
      description: "",
      itemName: "",
      qty: "",
      price: "",
      total: "",
      paymentTerms: "Net 30 Days",
    },
    onSubmit: (values) => {
      console.log("Submitted!", values);
    },
    validationSchema: invoiceFormSchema,
  });
  console.log(errors);
  useEffect(() => {
    const qty = parseFloat(values.qty) || 0;
    const unitPrice = parseFloat(values.price) || 0;
    const calculatedTotal = qty * unitPrice;
    setTotal(calculatedTotal);
    setFieldValue("total", calculatedTotal.toString());
  }, [values.qty, values.price, setFieldValue]);
  useEffect(() => {
    document.body.classList.add("overflow-hidden");
  });
  return (
    <div className="fixed top-0 left-[103px] w-full h-full flex max-md:left-0 max-md:top-[80px] max-md:!mb-[120px] max-sm:w-full max-sm:h-screen max-sm:top-[72px]">
      {!showForm && (
        <div
          className={`relative w-[616px] ${formBgColor} shadow-lg h-full max-sm:w-full max-w-full`}
        >
          <div
            className="overflow-y-auto p-10"
            style={{ maxHeight: "calc(100vh - 80px)" }}
          >
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
            <h1 className="text-[#777F98] text-[24px] leading-[32px] !mt-[35px]">
              Item List
            </h1>
            <ItemListSection />
            <button
              className={`w-full max-w-[504px] h-[48px] ${
                isDarkMode ? "bg-[#252945]" : "bg-[#F9FAFE] "
              } cursor-pointer rounded-[24px] !mt-[24px] !mb-5 text-[#7E88C3] max-md:!mb-[120px]`}
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
