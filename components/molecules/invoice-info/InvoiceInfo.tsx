import React, { useEffect, useState } from "react";
import useStore from "@/store/useStore";
import { useParams, useRouter } from "next/navigation";
import { InvoiceProps } from "@/types";

const InvoiceInfo = () => {
  const isDarkMode = useStore((state) => state.isDarkMode);
  const h1Color = isDarkMode ? "text-white" : "text-[#0C0E16]";
  const pColor = isDarkMode ? "text-[#DFE3FA]" : "text-[#7E88C3]";

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
          console.log("Fetched invoice data:", data);
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
    <div className="flex flex-col gap-6">
      <div className="w-full flex justify-between flex-wrap gap-8 max-sm:flex-col">
        <article className="flex flex-col gap-2.5">
          <h1 className={`text-[15px] leading-6 font-bold ${h1Color}`}>
            #{invoice?.id}
          </h1>
          <p className={`text-[13px] leading-[15px] ${pColor}`}>
            {invoice?.description}
          </p>
        </article>
        <ul
          className={`text-right text-[13px] leading-[18px] ${pColor} max-sm:text-left`}
        >
          <li>{invoice?.senderAddress?.street}</li>
          <li>{invoice?.senderAddress?.city}</li>
          <li>{invoice?.senderAddress?.postCode}</li>
          <li>{invoice?.senderAddress?.country}</li>
        </ul>
      </div>

      <div className="flex justify-between flex-wrap gap-8">
        <div className="flex flex-col gap-8">
          <article className="flex flex-col gap-3">
            <p className={`text-[13px] leading-[15px] ${pColor}`}>
              Invoice Date
            </p>
            <h1 className={`text-[15px] leading-5 font-bold ${h1Color}`}>
              {invoice?.createdAt}
            </h1>
          </article>

          <article className="flex flex-col gap-3">
            <p className={`text-[13px] leading-[15px] ${pColor}`}>
              Payment Due
            </p>
            <h1 className={`text-[15px] leading-5 font-bold ${h1Color}`}>
              {invoice?.paymentDue}
            </h1>
          </article>
        </div>

        <div className="flex flex-col gap-3">
          <p className={`text-[13px] leading-[15px] ${pColor}`}>Bill To</p>
          <article className="flex flex-col gap-1.5">
            <h1 className={`text-[15px] leading-5 font-bold ${h1Color}`}>
              {invoice?.clientName}
            </h1>
            <ul
              className={`text-[13px] leading-[18px] space-y-[1px] ${pColor}`}
            >
              <li>{invoice?.clientAddress?.street}</li>
              <li>{invoice?.clientAddress?.city}</li>
              <li>{invoice?.clientAddress?.postCode}</li>
              <li>{invoice?.clientAddress?.country}</li>
            </ul>
          </article>
        </div>

        <article className="flex flex-col gap-3">
          <p className={`text-[13px] leading-[15px] ${pColor}`}>Sent to</p>
          <h1 className={`text-[15px] leading-5 font-bold ${h1Color}`}>
            {invoice?.clientEmail}
          </h1>
        </article>
      </div>
    </div>
  );
};

export default InvoiceInfo;
