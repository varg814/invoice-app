import React, { useState, useEffect } from "react";
import InvoiceFooter from "@/components/molecules/invoice-footer/InvoiceFooter";
import useStore from "../../../store/useStore";
import BillFromSection from "@/components/molecules/bill-from-sectiom/BillFromSection";
import BillToSection from "@/components/molecules/bill-to-section/BillToSection";
import DateAndDescribtion from "@/components/molecules/date-describtion-section/DateAndDescribtion";
import ItemListSection from "@/components/molecules/items-list-section/ItemListSection";
import { useFormik, FormikProps } from "formik";
import { invoiceFormSchema } from "@/schemas/invoiceFormSchema";
import { InvoiceFormValues } from "@/types";
import { getCookie } from "cookies-next";

const InvoiceForm = ({ onClose }: { onClose: () => void }) => {
  const isDarkMode = useStore((state) => state.isDarkMode);
  const formBgColor = isDarkMode ? "bg-[#141625]" : "bg-[#fff]";
  const [showForm] = useState(false);

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

  const formik: FormikProps<InvoiceFormValues> = useFormik<InvoiceFormValues>({
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
      paymentTerms: "Net 30 Days",
      items: [
        {
          name: "",
          quantity: 0,
          price: 0,
          total: 0,
        },
      ],
    },
    onSubmit: (values) => {
      console.log("Submitted!", values);
    },
    validationSchema: invoiceFormSchema,
  });

  useEffect(() => {
    console.log(formik.values);
  }, [formik.values]);

  const addNewItem = () => {
    const newItems = [...formik.values.items];
    newItems.push({ name: "", quantity: 0, price: 0, total: 0 });
    formik.setFieldValue("items", newItems);
  };

  const removeItem = (indexToRemove: number) => {
    const updatedItems = formik.values.items.filter(
      (_, i) => i !== indexToRemove
    );
    formik.setFieldValue("items", updatedItems);
  };

  const handleSubmit = async () => {
    const token = getCookie("accessToken");
    console.log("token", token);
    const cleanedItems = formik.values.items.map((item) => ({
      itemName: item.name.trim(),
      qty: Number(item.quantity),
      price: Number(item.price),
      total: Number(item.total),
    }));
    const payload = {
      ...formik.values,
      items: cleanedItems,
    };
    console.log("Sending payload:", JSON.stringify(payload, null, 2));
    const resp = await fetch(`http://localhost:4000/invoices`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(payload),
    });
    const data = await resp.json();
    return data.token;
  };
  console.log(formik.values);

  return (
    <div className="fixed top-0 left-[103px] w-full h-full flex max-md:left-0 max-md:top-[80px] max-md:!mb-[120px] max-sm:w-full max-sm:h-screen max-sm:top-[72px] bg-black/50">
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

            <BillFromSection formik={formik} />
            <BillToSection formik={formik} />
            <DateAndDescribtion formik={formik} />

            <h1 className="text-[#777F98] text-[24px] leading-[32px] !mt-[35px] !mb-6">
              Item List
            </h1>

            <div className="flex flex-col gap-5">
              {formik.values.items.map((_, index) => (
                <ItemListSection
                  key={index}
                  formik={formik}
                  index={index}
                  removeElement={() => removeItem(index)}
                />
              ))}
            </div>

            <button
              className={`w-full h-[48px] ${
                isDarkMode ? "bg-[#252945]" : "bg-[#F9FAFE]"
              } cursor-pointer rounded-[24px] !mt-[24px] !mb-5 text-[#7E88C3] max-md:!mb-[120px]`}
              onClick={addNewItem}
            >
              + Add New Item
            </button>
          </div>
        </div>
      )}

      <InvoiceFooter
        onDiscard={onClose}
        onClose={onClose}
        onSubmit={handleSubmit}
      />
    </div>
  );
};

export default InvoiceForm;
