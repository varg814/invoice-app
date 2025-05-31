const { Router } = require("express");
const invoiceModel = require("../models/invoice.model");
const userModel = require("../models/user.model");
const invoiceRouter = Router();

invoiceRouter.get("/", async (req, res) => {
  try {
    const invoices = await invoiceModel
      .find()
      .populate("author", "fullName email");
    res.json(invoices);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch invoices." });
  }
});

invoiceRouter.post("/", async (req, res) => {
  try {
    const {
      email,
      senderAddress,
      senderCity,
      senderPostCode,
      senderCountry,
      clientName,
      clientAddress,
      clientCity,
      clientPostCode,
      clientCountry,
      invoiceDate,
      description,
      paymentTerms,
      paymentDue,  
      total,       
      items,
      status,
      author,
    } = req.body;

    if (
      !email ||
      !senderAddress ||
      !senderCity ||
      !senderPostCode ||
      !senderCountry ||
      !clientName ||
      !clientAddress ||
      !clientCity ||
      !clientPostCode ||
      !clientCountry ||
      !invoiceDate ||
      !description ||
      !paymentTerms ||
      !paymentDue ||       
      !total ||
      !Array.isArray(items) ||
      !author
    ) {
      return res.status(400).json({ error: "Missing required fields." });
    }

    const invoice = await invoiceModel.create({
      clientName,
      clientEmail: email,
      createdAt: invoiceDate,
      paymentDue,
      description,
      paymentTerms,
      items,
      total,
      status,
      senderAddress: {
        street: senderAddress,
        city: senderCity,
        postCode: senderPostCode,
        country: senderCountry,
      },
      clientAddress: {
        street: clientAddress,
        city: clientCity,
        postCode: clientPostCode,
        country: clientCountry,
      },
      author: req.userId,
    });

    await userModel.findByIdAndUpdate(req.userId, {
      $push: { invoices: invoice._id },
    });

    res.status(201).json(invoice);
  } catch (error) {
    res
      .status(500)
      .json({ error: "Failed to create invoice.", details: error.message });
  }
});

invoiceRouter.get("/:id", async (req, res) => {
  const { id } = req.params;

  try {
    const invoice = await invoiceModel
      .findOne({ id })
      .populate("author", "fullName email");

    if (!invoice) {
      return res.status(404).json({ error: "Invoice not found." });
    }

    res.json(invoice);
  } catch (error) {
    res
      .status(500)
      .json({ error: "Failed to fetch invoice.", details: error.message });
  }
});

module.exports = invoiceRouter;
