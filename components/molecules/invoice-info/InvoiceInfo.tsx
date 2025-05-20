import React from "react";
import useStore from "@/store/useStore";

const InvoiceInfo = () => {
  const isDarkMode = useStore((state) => state.isDarkMode);
  const h1Color = isDarkMode ? "text-white" : "text-[#0C0E16]";
  const pColor = isDarkMode ? "text-[#DFE3FA]" : "text-[#7E88C3]";

  return (
    <div className="flex flex-col gap-6">
      <div className="w-full flex justify-between flex-wrap gap-8 max-sm:flex-col">
        <article>
          <h1 className={`text-[15px] leading-6 font-bold ${h1Color}`}>
            #XM9141
          </h1>
          <p className={`text-[13px] leading-[15px] ${pColor}`}>
            Graphic Design
          </p>
        </article>
        <ul
          className={`text-right text-[13px] leading-[18px] ${pColor} max-sm:text-left`}
        >
          <li>19 Union Terrace</li>
          <li>London</li>
          <li>E1 3EZ</li>
          <li>United Kingdom</li>
        </ul>
      </div>

      <div className="flex justify-between flex-wrap gap-8">
        <div className="flex flex-col gap-8">
          <article className="flex flex-col gap-3">
            <p className={`text-[13px] leading-[15px] ${pColor}`}>
              Invoice Date
            </p>
            <h1 className={`text-[15px] leading-5 font-bold ${h1Color}`}>
              21 Aug 2021
            </h1>
          </article>

          <article className="flex flex-col gap-3">
            <p className={`text-[13px] leading-[15px] ${pColor}`}>
              Payment Due
            </p>
            <h1 className={`text-[15px] leading-5 font-bold ${h1Color}`}>
              20 Sep 2021
            </h1>
          </article>
        </div>

        <div className="flex flex-col gap-3">
          <p className={`text-[13px] leading-[15px] ${pColor}`}>Bill To</p>
          <article className="flex flex-col gap-1.5">
            <h1 className={`text-[15px] leading-5 font-bold ${h1Color}`}>
              Alex Grim
            </h1>
            <ul className={`text-[13px] leading-[18px] space-y-[1px] ${pColor}`}>
              <li>84 Church Way</li>
              <li>Bradford</li>
              <li>BD1 9PB</li>
              <li>United Kingdom</li>
            </ul>
          </article>
        </div>

        <article className="flex flex-col gap-3">
          <p className={`text-[13px] leading-[15px] ${pColor}`}>Sent to</p>
          <h1 className={`text-[15px] leading-5 font-bold ${h1Color}`}>
            alexgrim@mail.com
          </h1>
        </article>
      </div>
    </div>
  );
};

export default InvoiceInfo;
