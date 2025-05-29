const jwt = require("jsonwebtoken");
require("dotenv").config();

const isAuth = async (req, res, next) => {
  try {
    const authorization = req.headers["authorization"];

    if (!authorization) {
      return res.status(401).json({ error: "not authorized" });
    }

    const token = authorization.split(" ")[1];

    if (!token) {
      return res.status(401).json({ error: "not authorized" });
    }

    const payload = jwt.verify(token, process.env.JWT_SECRET, { maxAge: 3600 });
    req.userId = payload.userId;
    next()
  } catch (error) {
    res.status(401).json({ error: "not authorized" });
  }
};

module.exports = isAuth;
