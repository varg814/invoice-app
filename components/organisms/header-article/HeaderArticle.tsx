import React from "react";
import invoices from "@/assets/data.json";
import useStore from "@/store/useStore";

const HeaderArticle = () => {
  const isDarkMode = useStore((state) => state.isDarkMode);

  return (
    <article className="flex flex-col gap-1.5">
      <h1
        className={`text-4xl font-bold leading-tight ${isDarkMode ? "text-white" : "text-[#0C0E16]"} max-sm:text-2xl`}
      >
        Invoices
      </h1>
      <p
        className={`text-sm font-medium leading-[1.15] ${isDarkMode ? "text-[#DFE3FA]" : "text-[#888EB0]"}`}
      >
        <span className="max-sm:hidden">There are</span> {invoices.length}{" "}
        <span className="max-sm:hidden">total</span> invoices
      </p>
    </article>
  );
};

export default HeaderArticle;
