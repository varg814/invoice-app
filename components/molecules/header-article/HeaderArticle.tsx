import React, { useEffect, useState } from "react";
import useStore from "@/store/useStore";
import { InvoiceProps } from "@/types";
const HeaderArticle = () => {
  const isDarkMode = useStore((state) => state.isDarkMode);
  const accessToken = useStore((state) => state.accessToken);

  const [invoices, setInvoices] = useState<InvoiceProps[]>([]);

  useEffect(() => {
    const fetchInvoices = async () => {
      if (!accessToken) return;

      try {
        const response = await fetch("http://localhost:4000/invoices", {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        });

        if (response.ok) {
          const data = await response.json();
          setInvoices(data);
        } else {
          console.error("Failed to fetch invoices");
        }
      } catch (error) {
        console.error("Error fetching invoices:", error);
      }
    };

    fetchInvoices();
  }, [accessToken]);

  return (
    <article className="flex flex-col gap-1.5">
      <h1
        className={`text-4xl font-bold leading-tight ${
          isDarkMode ? "text-white" : "text-[#0C0E16]"
        } max-sm:text-2xl`}
      >
        Invoices
      </h1>
      <p
        className={`text-sm font-medium leading-[1.15] ${
          isDarkMode ? "text-[#DFE3FA]" : "text-[#888EB0]"
        }`}
      >
        <span className="max-sm:hidden">There are</span> {invoices.length}{" "}
        <span className="max-sm:hidden">total</span> invoices
      </p>
    </article>
  );
};

export default HeaderArticle;
