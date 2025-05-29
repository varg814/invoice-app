const { default: mongoose } = require("mongoose");

const itemSchema = new mongoose.Schema({
  itemName: { type: String, required: true },
  qty: { type: mongoose.Schema.Types.Mixed, required: true },
  price: { type: mongoose.Schema.Types.Mixed, required: true },
  total: { type: mongoose.Schema.Types.Mixed, required: true }
});

const invoiceSchema = new mongoose.Schema({
  email: { type: String, required: true },
  senderAddress: { type: String, required: true },
  senderCity: { type: String, required: true },
  senderPostCode: { type: String, required: true },
  senderCountry: { type: String, required: true },
  clientName: { type: String, required: true },
  clientAddress: { type: String, required: true },
  clientCity: { type: String, required: true },
  clientPostCode: { type: String, required: true },
  clientCountry: { type: String, required: true },
  invoiceDate: { type: String, required: true },
  description: { type: String, required: true },
  paymentTerms: { type: String, required: true },
  items: { type: [itemSchema], required: true },
  author: { type: mongoose.Schema.Types.ObjectId, ref: "user", required: true }
});

module.exports = mongoose.model("invoice", invoiceSchema);
