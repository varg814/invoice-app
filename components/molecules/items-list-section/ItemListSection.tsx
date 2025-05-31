import React from "react";
import Input from "@/components/atoms/input/Input";
import Image from "next/image";
import trashIcon from "@/assets/icon-delete.svg";
import useStore from "@/store/useStore";
import { Item } from "@/types";
import { ItemsListSectionProps } from "@/types";

const ItemListSection: React.FC<ItemsListSectionProps> = ({
  formik,
  index,
  removeElement,
}) => {
  const isDarkMode = useStore((state) => state.isDarkMode);
  const inputTextsColor = isDarkMode ? "text-[#DFE3FA]" : "text-[#7E88C3]";
  const insideInputTextColor = isDarkMode ? "text-[#FFFFFF]" : "text-[#0C0E16]";

  const item = formik.values.items[index];

  const handleChange = (field: keyof Item, value: string) => {
    const updatedItems = [...formik.values.items];
    updatedItems[index] = {
      ...updatedItems[index],
      [field]: value,
      total: Number(
        (
          Number(
            field === "quantity" ? value : updatedItems[index].quantity || 0
          ) * Number(field === "price" ? value : updatedItems[index].price || 0)
        ).toFixed(2)
      ),
    };
    formik.setFieldValue("items", updatedItems);
  };

  return (
    <div className="items_div flex justify-between w-full gap-4 max-sm:gap-6 max-sm:flex-col">
      <div className="items_name_div w-full max-w-[214px] flex flex-col max-sm:max-w-full">
        <p className={`text-sm font-medium ${inputTextsColor}`}>Item Name</p>
        <Input
          type="text"
          value={item.name}
          onChange={(e) => handleChange("name", e.target.value)}
          onBlur={formik.handleBlur}
          className={`bg-transparent ${insideInputTextColor} border p-2 rounded-lg w-full`}
        />
      </div>

      <div className="flex w-full justify-between">
        <div className="quantity_div w-full max-w-[46px] flex flex-col">
          <p className={`text-sm font-medium ${inputTextsColor}`}>Qty.</p>
          <Input
            type="number"
            value={item.quantity}
            onChange={(e) => handleChange("quantity", e.target.value)}
            onBlur={formik.handleBlur}
            className={`bg-transparent ${insideInputTextColor} border p-2 rounded-lg w-full`}
          />
        </div>

        <div className="price_div w-full max-w-[100px] flex flex-col">
          <p className={`text-sm font-medium ${inputTextsColor}`}>Price</p>
          <Input
            type="number"
            value={item.price}
            onChange={(e) => handleChange("price", e.target.value)}
            onBlur={formik.handleBlur}
            className={`bg-transparent ${insideInputTextColor} border p-2 rounded-lg w-full`}
          />
        </div>

        <div
          className={`total_div w-full max-w-[50px] flex flex-col ${
            removeElement ? "justify-center" : "justify-start"
          } gap-3`}
        >
          <p className={`text-sm font-medium ${inputTextsColor}`}>Total</p>
          <h1 className="mt-2 text-[#888EB0] text-[15px]">
            {item.total || "0.00"}
          </h1>
        </div>

        <Image
          src={trashIcon}
          alt="trash_icon"
          width={12}
          className="object-contain cursor-pointer"
          onClick={removeElement}
        />
      </div>
    </div>
  );
};

export default ItemListSection;
