const { default: mongoose } = require("mongoose");

const itemSchema = new mongoose.Schema({
  itemName: { type: String, required: true },
  qty: { type: mongoose.Schema.Types.Mixed, required: true },
  price: { type: mongoose.Schema.Types.Mixed, required: true },
  total: { type: mongoose.Schema.Types.Mixed, required: true }
});

const invoiceSchema = new mongoose.Schema({
  id: { type: String, required: true, unique: true },
  email: { type: String, required: true },

  senderAddress: {
    street: { type: String, required: true },
    city: { type: String, required: true },
    postCode: { type: String, required: true },
    country: { type: String, required: true }
  },

  clientName: { type: String, required: true },
  clientEmail: { type: String, required: true },

  clientAddress: {
    street: { type: String, required: true },
    city: { type: String, required: true },
    postCode: { type: String, required: true },
    country: { type: String, required: true }
  },

  invoiceDate: { type: String, required: true },
  description: { type: String, required: true },
  paymentTerms: { type: String, required: true },
  paymentDue: { type: String },
  total: { type: Number }, 
  status: { type: String }, 

  items: { type: [itemSchema], required: true },

  author: { type: mongoose.Schema.Types.ObjectId, ref: "user", required: true }
});




module.exports = mongoose.model("invoice", invoiceSchema);
