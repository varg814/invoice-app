import React from "react";
import { useState } from "react";
import useStore from "../../../store/useStore";
import Input from "@/components/atoms/input/Input";
import Image from "next/image";
import calendarIcon from "@/assets/icon-calendar.svg";
import PaymentTermsDropdown from "@/components/molecules/payment-terms-dropdown/PaymentTermsDropdown";
import CalendarDemo from "@/components/atoms/calendar/CalendarDemo";
import { DateAndDescribtionSectionProps } from "@/types";
const DateAndDescribtion: React.FC<DateAndDescribtionSectionProps> = ({
  formik,
}) => {
  const { values, handleChange, handleBlur, setFieldValue, errors, touched } =
    formik;

  const isDarkMode = useStore((state) => state.isDarkMode);
  const inputTextsColor = isDarkMode ? "text-[#DFE3FA]" : "text-[#7E88C3]";
  const insideInputTextColor = isDarkMode ? "text-[#FFFFFF]" : "text-[#0C0E16]";
  const [isHidden, setIsHidden] = useState(true);

  const toggleCalendar = () => {
    setIsHidden((prev) => !prev);
  };

  return (
    <div className="date_and_description_div w-full  !mt-[50px] gap-6">
      <div className="date_div flex  items-center justify-between max-sm:flex-col max-sm:gap-6">
        <div className="invoice_date_div w-full max-w-[240px] relative max-sm:max-w-full">
          <p className={`text-sm font-medium ${inputTextsColor}`}>
            Invoice Date
          </p>
          <input
            name="invoiceDate"
            id="invoiceDate"
            type="text"
            value={
              values.invoiceDate
                ? new Date(values.invoiceDate).toLocaleDateString("en-CA")
                : ""
            }
            readOnly
            onClick={toggleCalendar}
            className={`bg-transparent ${insideInputTextColor} border border-gray-300 p-2 rounded-lg w-full`}
          />

          <Image
            src={calendarIcon}
            alt="calendar icon"
            width={16}
            height={16}
            className="absolute right-3 top-10 transform -translate-y-1/2 cursor-pointer"
            onClick={toggleCalendar}
          />
          {!isHidden && (
            <CalendarDemo
              date={
                values.invoiceDate ? new Date(values.invoiceDate) : undefined
              }
              onChange={(date) => {
                if (date) {
                  setFieldValue("invoiceDate", date.toISOString());
                }
              }}
            />
          )}
        </div>
        <PaymentTermsDropdown
          value={values.paymentTerms}
          onChange={(val) => setFieldValue("paymentTerms", val)}
        />
      </div>
      <div className="description_div !mt-[16px]">
        <p className={`text-sm font-medium ${inputTextsColor}`}>
          Project Description
        </p>
        <Input
          name="description"
          id="description"
          onChange={handleChange}
          onBlur={handleBlur}
          value={values.description}
          type="text"
          className={`bg-transparent ${insideInputTextColor} border border-gray-300 p-2 rounded-lg w-full ${
            errors.description && touched.description
              ? "border-red-500"
              : "border-gray-300"
          }`}
        />
        {errors.description && touched.description && (
          <p className="text-red-500 text-[12px]">{errors.description}</p>
        )}
      </div>
    </div>
  );
};

export default DateAndDescribtion;
