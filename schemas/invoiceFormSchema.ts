import * as yup from "yup";

export const invoiceFormSchema = yup.object().shape({
  email: yup.string().email("Invalid email").required("Email is required"),
  senderAddress: yup.string().required("Sender address is required"),
  senderCity: yup.string().required("Sender city is required"),
  senderPostCode: yup.string().required("Sender post code is required"),
  senderCountry: yup.string().required("Sender country is required"),
  clientName: yup.string().required("Client name is required"),
  clientAddress: yup.string().required("Client address is required"),
  clientCity: yup.string().required("Client city is required"),
  clientPostCode: yup.string().required("Client post code is required"),
  clientCountry: yup.string().required("Client country is required"),
  invoiceDate: yup.date().required("Invoice date is required"),
  description: yup.string().required("Description is required"),
  paymentTerms: yup.string().required("Payment terms is required"),
  itemName: yup.string().required("Item name is required"),
  qty: yup.number().positive().integer().required("required"),
  price: yup.number().positive().integer().required("Price is required"),
});
