const express = require("express");
const dotenv = require("dotenv").config();
const colors = require("colors");
const connectDB = require("./config/db");
const productRouter = require("./routes/productRoutes");
const PORT = process.env.PORT || 5000;

connectDB();

const app = express();

app.get("/", (req, res) => {
  res.send("Api is running...");
});

app.use("/api/products", productRouter);

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
