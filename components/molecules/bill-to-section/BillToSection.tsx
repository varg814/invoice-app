import React from "react";
import useStore from "../../../store/useStore";
import Input from "@/components/atoms/input/Input";
import { BillToSectionProps } from "@/types";

const BillToSection: React.FC<BillToSectionProps> = ({ formik }) => {
  const { values, handleChange, handleBlur, errors, touched } = formik;

  const isDarkMode = useStore((state) => state.isDarkMode);
  const inputTextsColor = isDarkMode ? "text-[#DFE3FA]" : "text-[#7E88C3]";
  const insideInputTextColor = isDarkMode ? "text-[#FFFFFF]" : "text-[#0C0E16]";

  return (
    <div className="bill_to flex flex-col gap-4 !mt-[50px] ">
      <h2 className="text-lg font-semibold text-[#7C5DFA]">Bill To</h2>
      <div className="address_input_div w-full">
        <p className={`text-sm font-medium ${inputTextsColor}`}>
          Client’s Name
        </p>
        <Input
          name="clientName"
          id="clientName"
          value={values.clientName}
          onChange={handleChange}
          onBlur={handleBlur}
          type="text"
          className={`bg-transparent ${insideInputTextColor} border border-gray-300 p-2 rounded-lg w-full ${
            errors.clientName && touched.clientName
              ? "border-red-500"
              : "border-gray-300"
          }`}
        />
        {errors.clientName && touched.clientName && (
          <p className="text-red-500 text-[12px]">{errors.clientName}</p>
        )}
      </div>

      <div className="address_input_div w-full">
        <p className={`text-sm font-medium ${inputTextsColor}`}>
          Client’s Email
        </p>
        <Input
          name="email"
          id="email"
          value={values.email}
          onChange={handleChange}
          onBlur={handleBlur}
          type="email"
          className={`bg-transparent ${insideInputTextColor} border p-2 rounded-lg w-full ${
            errors.email && touched.email ? "border-red-500" : "border-gray-300"
          }`}
        />
        {errors.email && touched.email && (
          <p className="text-red-500 text-[12px]">{errors.email}</p>
        )}
      </div>

      <div className="address_input_div w-full">
        <p className={`text-sm font-medium ${inputTextsColor}`}>
          Street Address
        </p>
        <Input
          name="clientAddress"
          id="clientAddress"
          value={values.clientAddress}
          onChange={handleChange}
          onBlur={handleBlur}
          type="text"
          className={`bg-transparent ${insideInputTextColor} border p-2 rounded-lg w-full ${
            errors.clientAddress && touched.clientAddress
              ? "border-red-500"
              : "border-gray-300"
          }`}
        />
        {errors.clientAddress && touched.clientAddress && (
          <p className="text-red-500 text-[12px]">{errors.clientAddress}</p>
        )}
      </div>

      <div className="little_inputs_div flex w-full gap-6 max-sm:flex-col">
        <div className="city_input_div max-w-[152px] w-full">
          <p className={`text-sm font-medium ${inputTextsColor}`}>City</p>
          <Input
            name="clientCity"
            id="clientCity"
            value={values.clientCity}
            onChange={handleChange}
            onBlur={handleBlur}
            type="text"
            className={`bg-transparent ${insideInputTextColor} border p-2 rounded-lg w-full ${
              errors.clientCity && touched.clientCity
                ? "border-red-500"
                : "border-gray-300"
            }`}
          />
          {errors.clientCity && touched.clientCity && (
            <p className="text-red-500 text-[12px]">{errors.clientCity}</p>
          )}
        </div>

        <div className="postcode_input_div max-w-[152px] w-full">
          <p className={`text-sm font-medium ${inputTextsColor}`}>Post Code</p>
          <Input
            name="clientPostCode"
            id="clientPostCode"
            value={values.clientPostCode}
            onChange={handleChange}
            onBlur={handleBlur}
            type="text"
            className={`bg-transparent ${insideInputTextColor} border border-gray-300 p-2 rounded-lg w-full ${
              errors.clientCountry && touched.clientCountry
                ? "border-red-500"
                : "border-gray-300"
            }`}
          />
          {errors.clientPostCode && touched.clientPostCode && (
            <p className="text-red-500 text-[12px]">{errors.clientPostCode}</p>
          )}
        </div>
        <div className="country_input_div max-w-[152px] w-full max-sm:max-w-full">
          <p className={`text-sm font-medium ${inputTextsColor}`}>Country</p>
          <Input
            name="clientCountry"
            id="clientCountry"
            value={values.clientCountry}
            onChange={handleChange}
            onBlur={handleBlur}
            type="text"
            className={`bg-transparent ${insideInputTextColor} border border-gray-300 p-2 rounded-lg w-full ${
              errors.clientCountry && touched.clientCountry
                ? "border-red-500"
                : "border-gray-300"
            }`}
          />
          {errors.clientCountry && touched.clientCountry && (
            <p className="text-red-500 text-[12px]">{errors.clientCountry}</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default BillToSection;
