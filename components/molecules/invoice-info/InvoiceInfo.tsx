import React from "react";

const InvoiceInfo = () => {
  return (
    <>
      <div className="w-full flex justify-between flex-wrap gap-8 max-sm:flex-col">
        <article>
          <h1>#XM9141</h1>
          <p>Graphic Design</p>
        </article>
        <p className="text-right max-sm:text-left">
          19 Union Terrace <br />
          London <br />
          E1 3EZ <br />
          United Kingdom
        </p>
      </div>
      <div className="flex justify-between flex-wrap gap-8">
        <div className="flex flex-col gap-8">
          <article className="flex flex-col gap-3">
            <p>Invoice Date</p>
            <h1>21 Aug 2021</h1>
          </article>
          <article className="flex flex-col gap-3">
            <p>Payment Due</p>
            <h1>20 Sep 2021</h1>
          </article>
        </div>
        <div className="flex flex-col gap-3">
          <p>Bill to</p>
          <article className="flex flex-col gap-1.5">
            <h1>Alex Grim</h1>
            <p>
              84 Church Way <br />
              Bradford <br />
              BD1 9PB <br />
              United Kingdom
            </p>
          </article>
        </div>
        <article className="flex flex-col gap-3">
          <p>Sent to</p>
          <h1>alexgrim@mail.com</h1>
        </article>
      </div>
    </>
  );
};

export default InvoiceInfo;
