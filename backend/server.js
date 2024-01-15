const express = require("express");
const dotenv = require("dotenv").config();
const cookieParser = require("cookie-parser");
const colors = require("colors");
const connectDB = require("./config/db");
const { notFound, errorHandler } = require("./middlewares/errorMiddleware");
const productRouter = require("./routes/productRoutes");
const userRouter = require("./routes/userRoutes");
const PORT = process.env.PORT || 5000;

connectDB();

const app = express();

// body parser middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// cookie parser middleware
app.use(cookieParser());

app.get("/", (req, res) => {
  res.send("Api is running...");
});

app.use("/api/products", productRouter);
app.use("/api/users", userRouter);

app.use(notFound);
app.use(errorHandler);

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
