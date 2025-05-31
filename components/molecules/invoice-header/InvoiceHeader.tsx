import React, { useState, useEffect } from "react";
import { useParams, useRouter } from "next/navigation";
import InvoiceStatus from "@/components/atoms/invoice-status/InvoiceStatus";
import InvoiceButtons from "../invoice-buttons/InvoiceButtons";
import useStore from "@/store/useStore";
import { InvoiceProps } from "@/types";

const InvoiceHeader = () => {
  const isDarkMode = useStore((state) => state.isDarkMode);
  const accessToken = useStore((state) => state.accessToken);
  const bgColor = isDarkMode ? "bg-[#1E2139]" : "bg-[#fff]";
  const textColor = isDarkMode ? "text-[#fff]" : "text-[#7E88C3]";
  const router = useRouter();
  const params = useParams();
  const id = params.id;

  const [invoice, setInvoice] = useState<InvoiceProps | null>(null);

  const useIsSmUp = () => {
    const [isSmUp, setIsSmUp] = useState(true);

    useEffect(() => {
      const check = () => setIsSmUp(window.innerWidth >= 640);
      check();
      window.addEventListener("resize", check);
      return () => window.removeEventListener("resize", check);
    }, []);

    return isSmUp;
  };
  const isSmUp = useIsSmUp();

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
    <section
      className={`flex justify-between ${bgColor} py-5 px-8 rounded-lg shrink-0 max-sm:px-6`}
    >
      <div className="flex items-center gap-5 justify-between w-full">
        <div className="flex items-center gap-5 max-sm:justify-between max-sm:w-full">
          <p className={`text-[13px] leading-[15px] font-medium ${textColor}`}>
            Status
          </p>
          <InvoiceStatus status={invoice?.status} isDarkMode={isDarkMode} />
        </div>
        {isSmUp && <InvoiceButtons />}
      </div>
    </section>
  );
};

export default InvoiceHeader;
