import React from "react";
import { useState } from "react";
import useStore from "../../../store/useStore";
import Input from "@/components/atoms/input/Input";
import { useFormik } from "formik";
import { invoiceFormSchema } from "@/schemas/invoiceFormSchema";

const BillFromSection = () => {
  const isDarkMode = useStore((state) => state.isDarkMode);
  const toggleTheme = useStore((state) => state.toggleTheme);
  const inputTextsColor = isDarkMode ? "text-[#DFE3FA]" : "text-[#7E88C3]";
  const insideInputTextColor = isDarkMode ? "text-[#FFFFFF]" : "text-[#0C0E16]";

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

  return (
    <div className="bill_form flex flex-col gap-4 !mt-[30px] ">
      <h2 className="text-lg font-semibold text-[#7C5DFA]">Bill From</h2>
      <div className="address_input_div w-full max-w-[504px]">
        <p className={`text-sm font-medium ${inputTextsColor}`}>
          Street Address
        </p>
        <Input
          name="senderAddress"
          id="senderAddress"
          value={values.senderAddress}
          onChange={handleChange}
          type="text"
          className={`bg-transparent ${insideInputTextColor} border p-2 rounded-lg w-full ${
            errors.senderAddress && touched.senderAddress
              ? "border-red-500"
              : "border-gray-300"
          }`}
          onBlur={handleBlur}
        />
        {errors.senderAddress && touched.senderAddress && (
          <p className="text-red-500 text-[12px]">{errors.senderAddress}</p>
        )}
      </div>
      <div className="little_inputs_div flex w-full max-w-[504px] justify-between">
        <div className="city_input_div w-[152px]">
          <p className={`text-sm font-medium ${inputTextsColor}`}>City</p>
          <Input
            name="senderCity"
            id="senderCity"
            value={values.senderCity}
            onChange={handleChange}
            type="text"
            className={`bg-transparent ${insideInputTextColor} border border-gray-300 p-2 rounded-lg w-full ${
              errors.senderCity && touched.senderCity
                ? "border-red-500"
                : "border-gray-300"
            }`}
            onBlur={handleBlur}
          />
          {errors.senderCity && touched.senderCity && (
            <p className="text-red-500 text-[12px]">{errors.senderCity}</p>
          )}
        </div>
        <div className="postcode_input_div w-[152px]">
          <p className={`text-sm font-medium ${inputTextsColor}`}>Post Code</p>
          <Input
            name="senderPostCode"
            id="senderPostCode"
            value={values.senderPostCode}
            onChange={handleChange}
            type="text"
            className={`bg-transparent ${insideInputTextColor} border border-gray-300 p-2 rounded-lg w-full ${
              errors.senderPostCode && touched.senderPostCode
                ? "border-red-500"
                : "border-gray-300"
            }`}
            onBlur={handleBlur}
          />
          {errors.senderPostCode && touched.senderPostCode && (
            <p className="text-red-500 text-[12px]">{errors.senderPostCode}</p>
          )}
        </div>
        <div className="country_input_div w-[152px]">
          <p className={`text-sm font-medium ${inputTextsColor}`}>Country</p>
          <Input
            name="senderCountry"
            id="senderCountry"
            value={values.senderCountry}
            onChange={handleChange}
            type="text"
            className={`bg-transparent ${insideInputTextColor} border border-gray-300 p-2 rounded-lg w-full ${
              errors.senderCountry && touched.senderCountry
                ? "border-red-500"
                : "border-gray-300"
            }`}
            onBlur={handleBlur}
          />
          {errors.senderCountry && touched.senderCountry && (
            <p className="text-red-500 text-[12px]">{errors.senderCountry}</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default BillFromSection;
