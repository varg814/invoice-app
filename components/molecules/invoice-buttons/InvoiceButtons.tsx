import React from "react";
import Button from "@/components/atoms/button/Button";
import useStore from "@/store/useStore";
import { useParams, useRouter } from "next/navigation";

const InvoiceButtons = () => {
  const isDarkMode = useStore((state) => state.isDarkMode);
  const BtnbgColor = isDarkMode ? "bg-[#252945]" : "bg-[#F9FAFE]";
  const textColor = isDarkMode ? "text-[#fff]" : "text-[#7E88C3]";
  const BgColor = isDarkMode
    ? "max-sm:bg-[#1E2139] max-sm:h-[88px]"
    : "max-sm:bg-[#fff] max-sm:h-[88px]";
  const params = useParams();
  const router = useRouter();
  const invoiceId = params.id;
  const handleDelete = async () => {
    console.log("shemovida");
    try {
      const res = await fetch(`http://localhost:4000/invoices/${invoiceId}`, {
        method: "DELETE",
        headers: {
          Authorization: `Bearer ${useStore.getState().accessToken}`,
        },
      });
      if (res.ok) {
        alert("Invoice has been deleted");
        router.push("/");
      }
    } catch (e) {
      console.error(e, "error");
    }
  };

  return (
    <div className={`flex items-center gap-2 ${BgColor} max-sm:justify-center`}>
      <Button
        className={`h-[48px] w-[73px] flex items-center justify-center rounded-3xl ${BtnbgColor} ${textColor} font-bold cursor-pointer hover:bg-[#DFE3FA]`}
        onClick={() => {}}
      >
        Edit
      </Button>
      <Button
        className="h-[48px] w-[89px] flex items-center justify-center rounded-3xl bg-[#EC5757] text-white font-bold cursor-pointer hover:bg-[#FF9797]"
        onClick={handleDelete}
      >
        Delete
      </Button>
      <Button
        className="h-[48px] w-[131px] flex items-center justify-center rounded-3xl bg-[#7C5DFA] text-white font-bold cursor-pointer hover:bg-[#9277FF]"
        onClick={() => {}}
      >
        Mark as Paid
      </Button>
    </div>
  );
};

export default InvoiceButtons;
