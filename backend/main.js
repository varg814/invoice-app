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
app.use(cors({
  origin: "https://invoice-app-one-black.vercel.app",
  credentials: true,
}));


app.use("/auth", authRouter);
app.use("/users", isAuth, userRouter);
app.use("/invoices", isAuth, invoiceRouter);

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

app.get("/", (req, res) => {
  res.send("Server is alive");
});


