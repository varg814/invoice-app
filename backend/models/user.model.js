const { default: mongoose } = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    fullName: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      lowerCase: true,
    },
    password: {
      type: String,
      required: true,
      select: false,
    }
  },
  { timestamps: true }
);

module.exports = mongoose.model("user", userSchema);
