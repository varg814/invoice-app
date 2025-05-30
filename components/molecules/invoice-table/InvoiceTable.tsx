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
        const response = await fetch(`http://localhost:4000/invoices/${id}`, {
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
          {invoice?.items?.map((item, index) => (
            <article className="sm:flex-col gap-2" key={item.name || index}>
              <h1
                className={`${
                  isDarkMode ? "text-[#FFFFFF]" : "text-[#0C0E16]"
                } text-[15px] leading-[15px]`}
              >
                {item.name || index}
              </h1>{" "}
              <span
                className={`${
                  isDarkMode ? "text-[#888EB0]" : "text-[#7E88C3]"
                } hidden max-sm:block`}
              >
                {item.quantity} x £{" "}
                {item.price.toLocaleString("en-GB", {
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
          {invoice?.items?.map((item, index) => (
            <h1
              className={`${
                isDarkMode ? "text-[#DFE3FA]" : "text-[#7E88C3]"
              } text-[13px] leading-[15px]`}
              key={item.name || index}
            >
              {item.quantity}
            </h1>
          ))}
        </div>
        <div className="flex flex-col items-end gap-8 max-sm:hidden">
          <p className={`${pColor} text-[13px] leading-[18px]`}>Price</p>
          {invoice?.items?.map((item, index) => (
            <h1
              className={`${
                isDarkMode ? "text-[#DFE3FA]" : "text-[#7E88C3]"
              } text-[15px] leading-[15px]`}
              key={item.name || index}
            >
              £{" "}
              {item.price.toLocaleString("en-GB", {
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
          {invoice?.items?.map((item, index) => (
            <h1
              className={`${
                isDarkMode ? "text-[#FFFFFF]" : "text-[#0C0E16]"
              } text-[15px] leading-[15px]`}
              key={item.name || index}
            >
              £{" "}
              {item.total.toLocaleString("en-GB", {
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
          {invoice?.total?.toLocaleString("en-GB", {
            minimumFractionDigits: 2,
            maximumFractionDigits: 2,
          })}
        </h1>
      </div>
    </div>
  );
};

export default InvoiceTable;
