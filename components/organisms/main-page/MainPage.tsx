"use client";
import React, { useEffect, useState } from "react";
import useStore from "@/store/useStore";
import Invoice from "@/components/molecules/invoice/Invoice";
import FilterDropdown from "@/components/molecules/filter-dropdown/FilterDropdown";
import NewInvoice from "@/components/molecules/new-invoice/NewInvoice";
import HeaderArticle from "@/components/molecules/header-article/HeaderArticle";
import { useRouter } from "next/navigation";
import { deleteCookie, getCookie } from "cookies-next";
import { InvoiceProps } from "@/types";

const MainPage = () => {
  const [invoices, setInvoices] = useState<InvoiceProps[]>([]);
  const [selectedStatus, setSelectedStatus] = useState<string | null>(null);
  const isDarkMode = useStore((state) => state.isDarkMode);
  const bgColor = isDarkMode ? "bg-[#141625]" : "bg-[#F8F8FB]";
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    const token = getCookie("accessToken");
    if (!token) {
      router.push("/auth/sign-in");
      return;
    }

    const fetchData = async () => {
      try {
        const respUser = await fetch(
          "https://invoice-app-egju.onrender.com/current-user",
          {
            headers: { Authorization: `Bearer ${token}` },
          }
        );
        if (respUser.status !== 200) {
          deleteCookie("accessToken");
          router.push("/auth/sign-in");
          return;
        }

        const respInvoices = await fetch("https://invoice-app-egju.onrender.com/invoices", {
          headers: { Authorization: `Bearer ${token}` },
        });
        if (respInvoices.status === 200) {
          const invoicesData = await respInvoices.json();
          setInvoices(invoicesData);
        } else {
          setInvoices([]);
        }
      } catch (err) {
        deleteCookie("accessToken");
        router.push("/auth/sign-in");
        console.log(err);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [router]);

  if (loading) {
    return (
    <main
      className={`w-full max-md:h-[calc(100vh-80px)] max-sm:h-[calc(100vh-72px)] ${bgColor} pt-20 flex justify-center px-12 max-sm:px-6`}
    >
        <p>Loading...</p>
      </main>
    );
  }

  return (
    <main
      className={`w-full max-md:h-[calc(100vh-80px)] max-sm:h-[calc(100vh-72px)] ${bgColor} pt-20 flex justify-center px-12 max-sm:px-6`}
    >
      <div className="w-full max-w-[730px] h-[calc(100vh-128px)] overflow-scroll flex flex-col gap-16 max-md:h-[calc(100vh-192px)] max-sm:h-[calc(100vh-200px)] scrollbar-hide">
        <section className="flex justify-between">
          <HeaderArticle />
          <div className="flex items-center gap-10 max-sm:gap-5 relative">
            <FilterDropdown
              selectedStatus={selectedStatus}
              setSelectedStatus={setSelectedStatus}
            />
            <NewInvoice />
          </div>
        </section>
        <section className="flex flex-col gap-4">
          {invoices
            .filter(
              (invoice) => !selectedStatus || invoice.status === selectedStatus
            )
            .map((invoice) => (
              <Invoice
                key={invoice.id}
                id={invoice.id}
                paymentDue={invoice.paymentDue}
                clientName={invoice.clientName}
                total={invoice.total}
                status={invoice.status}
              />
            ))}
        </section>
      </div>
    </main>
  );
};

export default MainPage;
