const express = require("express");
const invoiceRouter = require("./invoices/invoice.router");
const userRouter = require("./users/user.router");
const authRouter = require("./auth/auth.router");
const connectToDb = require("./config/connectToDb");
const isAuth = require("./middlewares/isAuth");
const app = express();
const cors = require("cors");

connectToDb();

app.use(express.json());
app.use(cors());

app.use("/auth", authRouter);
app.use("/users", isAuth, userRouter);
app.use("/invoices", isAuth, invoiceRouter);

app.listen(4000, () => {
  console.log("server running on http://localhost:4000");
});
