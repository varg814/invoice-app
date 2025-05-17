import React from 'react'
import InvoiceStatus from '@/components/atoms/invoice-status/InvoiceStatus'
import Button from '@/components/atoms/button/Button'

const InvoiceHeader = () => {
  return (
        <section className="flex justify-between bg-white py-5 px-8 rounded-lg shrink-0 max-sm:px-6">
          <div className="flex items-center gap-5 max-sm:justify-between max-sm:w-full">
            <p>status</p>
            <InvoiceStatus />
          </div>
          <div className="flex items-center gap-2 max-sm:hidden">
            <Button
              className="h-[48px] w-[73px] flex items-center justify-center rounded-3xl bg-[#F9FAFE] text-[#7E88C3] font-bold"
              onClick={() => {}}
            >
              Edit
            </Button>
            <Button
              className="h-[48px] w-[89px] flex items-center justify-center rounded-3xl bg-[#EC5757] text-white font-bold"
              onClick={() => {}}
            >
              Delete
            </Button>
            <Button
              className="h-[48px] w-[131px] flex items-center justify-center rounded-3xl bg-[#7C5DFA] text-white font-bold"
              onClick={() => {}}
            >
              Mark as Paid
            </Button>
          </div>
        </section>
  )
}

export default InvoiceHeader
