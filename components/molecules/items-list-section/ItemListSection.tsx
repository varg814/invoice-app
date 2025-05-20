import React from "react";
import { useFormik } from "formik";
import useStore from "@/store/useStore";
import { invoiceFormSchema } from "@/schemas/invoiceFormSchema";
import Input from "@/components/atoms/input/Input";
import Image from "next/image";
import trashIcon from "@/assets/icon-delete.svg";
const ItemListSection = () => {
  const isDarkMode = useStore((state) => state.isDarkMode);
  const inputTextsColor = isDarkMode ? "text-[#DFE3FA]" : "text-[#7E88C3]";
  const insideInputTextColor = isDarkMode ? "text-[#FFFFFF]" : "text-[#0C0E16]";
  const { values, handleBlur, handleChange, errors, touched } = useFormik({
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
  return (
    <div className="items_div flex justify-between w-full max-w-[514px] gap-4 max-sm:gap-6 max-sm:flex-col">
      <div className="items_name_div w-full max-w-[214px] flex flex-col items-start max-sm:max-w-full">
        <p className={`text-sm font-medium ${inputTextsColor}`}>Item Name</p>
        <Input
          name="itemName"
          id="itemName"
          type="text"
          className={`bg-transparent ${insideInputTextColor} border border-gray-300 p-2 rounded-lg w-full ${
            errors.itemName && touched.itemName
              ? "border-red-500"
              : "border-gray-300"
          }`}
          value={values.itemName}
          onChange={handleChange}
          onBlur={handleBlur}
        />
        {errors.itemName && touched.itemName && (
          <p className="text-red-500 text-[12px]">{errors.itemName}</p>
        )}
      </div>
      <div className="flex w-full justify-between">
        <div className="quantity_div w-full max-w-[46px] flex flex-col items-start">
          <p className={`text-sm font-medium ${inputTextsColor}`}>Qty.</p>
          <Input
            name="qty"
            id="qty"
            type="number"
            className={`bg-transparent ${insideInputTextColor} border border-gray-300 p-2 rounded-lg w-full ${
              errors.qty && touched.qty ? "border-red-500" : "border-gray-300"
            }`}
            value={values.qty ?? 0}
            onChange={handleChange}
            onBlur={handleBlur}
          />
          {errors.qty && touched.qty && (
            <p className="text-red-500 text-[12px]">{errors.qty}</p>
          )}
        </div>
        <div className="price_div w-full max-w-[100px] flex flex-col items-start">
          <p className={`text-sm font-medium ${inputTextsColor}`}>Price</p>
          <Input
            name="price"
            id="price"
            type="number"
            className={`bg-transparent ${insideInputTextColor} border border-gray-300 p-2 rounded-lg w-full ${
              errors.price && touched.price
                ? "border-red-500"
                : "border-gray-300"
            }`}
            value={values.price ?? 0}
            onChange={handleChange}
            onBlur={handleBlur}
          />
          {errors.price && touched.price && (
            <p className="text-red-500 text-[12px]">{errors.price}</p>
          )}
        </div>
        <div className="total_div w-full max-w-[50px] flex flex-col items-start gap-3">
          <p className={`text-sm font-medium ${inputTextsColor}`}>Total</p>
          <h1 className="mt-2 text-[#888EB0] text-[15px]"></h1>
        </div>
        <Image
          src={trashIcon}
          alt="trash_icon"
          width={12}
          className="object-contain cursor-pointer"
        />
      </div>
    </div>
  );
};

export default ItemListSection;
