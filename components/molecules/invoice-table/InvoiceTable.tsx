import React, { useEffect, useState } from "react";
import useStore from "@/store/useStore";
import { useParams, useRouter } from "next/navigation";
import { InvoiceProps } from "@/types";

const InvoiceTable = () => {
  const isDarkMode = useStore((state) => state.isDarkMode);
  const bgColor = isDarkMode ? "bg-[#252945]" : "bg-[#F9FAFE]";
  const secondaryBgColor = isDarkMode ? "bg-[#0C0E16]" : "bg-[#373B53]";
  const pColor = isDarkMode
    ? "text-[#DFE3FA] font-medium"
    : "text-[#7E88C3] font-medium";

  const router = useRouter();
  const params = useParams();
  const id = params.id;

  const [invoice, setInvoice] = useState<InvoiceProps | null>(null);
  const accessToken = useStore((state) => state.accessToken);

  useEffect(() => {
    const fetchInvoice = async () => {
      if (!accessToken) {
        router.push("/auth/sign-in");
        return;
      }

      try {
        const response = await fetch(`https://invoice-app-egju.onrender.com/invoices/${id}`, {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        });

        if (response.status === 200) {
          const data = await response.json();
          setInvoice(data);
        } else {
          console.error("Failed to fetch invoice");
        }
      } catch (error) {
        console.error("Error fetching invoice:", error);
      }
    };

    fetchInvoice();
  }, [accessToken, id, router]);

  if (!invoice) {
    return <p>Loading...</p>;
  }

  return (
    <div className="rounded-lg overflow-hidden font-bold">
      <div className={`flex justify-between p-8 pb-10 ${bgColor} max-sm:p-6`}>
        <div className="flex flex-col gap-8 max-sm:gap-6">
          <p className={`${pColor} text-[13px] leading-[18px] max-sm:hidden`}>
            Item Name
          </p>
          {invoice?.items?.map((item) => (
            <article className="sm:flex-col gap-2" key={item.itemName}>
              <h1
                className={`${
                  isDarkMode ? "text-[#FFFFFF]" : "text-[#0C0E16]"
                } text-[15px] leading-[15px]`}
              >
                {item.itemName}
              </h1>{" "}
              <span
                className={`${
                  isDarkMode ? "text-[#888EB0]" : "text-[#7E88C3]"
                } hidden max-sm:block`}
              >
                {item.qty} x £{" "}
                {item.price.toLocaleString("en-UK", {
                  minimumFractionDigits: 2,
                  maximumFractionDigits: 2,
                })}
              </span>
            </article>
          ))}
        </div>
        <div className="flex flex-col items-center gap-8 max-sm:hidden">
          <p className={`${pColor} text-[13px] leading-[18px] max-sm:hidden`}>
            QTY.
          </p>
          {invoice?.items?.map((item) => (
            <h1
              className={`${
                isDarkMode ? "text-[#DFE3FA]" : "text-[#7E88C3]"
              } text-[13px] leading-[15px]`}
              key={item.itemName}
            >
              {item.qty}
            </h1>
          ))}
        </div>
        <div className="flex flex-col items-end gap-8 max-sm:hidden">
          <p className={`${pColor} text-[13px] leading-[18px]`}>Price</p>
          {invoice?.items?.map((item) => (
            <h1
              className={`${
                isDarkMode ? "text-[#DFE3FA]" : "text-[#7E88C3]"
              } text-[15px] leading-[15px]`}
              key={item.itemName}
            >
              £{" "}
              {item.price.toLocaleString("en-UK", {
                minimumFractionDigits: 2,
                maximumFractionDigits: 2,
              })}
            </h1>
          ))}
        </div>
        <div className="flex  flex-col items-end gap-8 max-sm:justify-around">
          <p className={`${pColor} text-[13px] leading-[18px] max-sm:hidden`}>
            Total
          </p>
          {invoice?.items?.map((item) => (
            <h1
              className={`${
                isDarkMode ? "text-[#FFFFFF]" : "text-[#0C0E16]"
              } text-[15px] leading-[15px]`}
              key={item.itemName}
            >
              £{" "}
              {item.total.toLocaleString("en-UK", {
                minimumFractionDigits: 2,
                maximumFractionDigits: 2,
              })}
            </h1>
          ))}
        </div>
      </div>
      <div
        className={`flex justify-between p-6 ${secondaryBgColor} text-white items-center`}
      >
        <h1 className="text-sm font-medium">Amount Due</h1>
        <h1 className="text-2xl">
          £{" "}
          {invoice?.total?.toLocaleString("en-UK", {
            minimumFractionDigits: 2,
            maximumFractionDigits: 2,
          })}
        </h1>
      </div>
    </div>
  );
};

export default InvoiceTable;
