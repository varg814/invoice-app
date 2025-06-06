const { Router } = require("express");
const invoiceModel = require("../models/invoice.model");
const userModel = require("../models/user.model");
const invoiceRouter = Router();
const isAuth = require("../middlewares/isAuth");

function generateInvoiceId() {
  const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const randomLetters =
    letters.charAt(Math.floor(Math.random() * letters.length)) +
    letters.charAt(Math.floor(Math.random() * letters.length));
  const randomNumbers = Math.floor(1000 + Math.random() * 9000);
  return randomLetters + randomNumbers;
}

invoiceRouter.get("/", async (req, res) => {
  try {
    const authorId = req.userId
    const invoices = await invoiceModel
      .find({author: authorId})
      .populate("author", "fullName email");
    res.json(invoices);
  } catch (err) {
    console.log(err);
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
      items,
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
      !Array.isArray(items) ||
      items.length === 0
    ) {
      return res.status(400).json({ error: "Missing required fields." });
    }

    const id = generateInvoiceId();

    const days = Number(paymentTerms.match(/\d+/)[0], 10);
    const paymentDueDate = new Date(invoiceDate);
    paymentDueDate.setDate(paymentDueDate.getDate() + days);

    const authorId = req.userId;
    if (!authorId) {
      return res.status(401).json({ error: "User is not authenticated." });
    }

    const invoice = await invoiceModel.create({
      id,
      email,
      senderAddress: {
        street: senderAddress,
        city: senderCity,
        postCode: senderPostCode,
        country: senderCountry,
      },
      clientName,
      clientEmail: email,
      clientAddress: {
        street: clientAddress,
        city: clientCity,
        postCode: clientPostCode,
        country: clientCountry,
      },
      invoiceDate,
      description,
      paymentTerms,
      paymentDue: paymentDueDate.toISOString().split("T")[0],
      items,
      total: items.reduce((sum, item) => sum + item.total, 0),
      status: req.body.status || "paid",
      author: authorId,
    });

    res.status(201).json(invoice);
  } catch (error) {
    res.status(500).json({
      error: "Failed to create invoice.",
      details: error.message,
    });
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

invoiceRouter.delete("/:id", isAuth, async (req, res) => {
  try {
    const { id } = req.params;

    const deletedInvoice = await invoiceModel.findOneAndDelete({ id });

    if (!deletedInvoice) {
      return res.status(404).json({ error: "Invoice not found" });
    }

    res.status(200).json({ message: "Invoice deleted successfully" });
  } catch (error) {
    res
      .status(500)
      .json({ error: "Failed to delete invoice", details: error.message });
  }
});

module.exports = invoiceRouter;
