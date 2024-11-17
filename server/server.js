require("dotenv").config({path:__dirname+'/.env'});
const express = require("express");
const mongoose = require("mongoose");

const app = express();
app.use(express.json());


mongoose
  .connect(process.env.CONNECTION_STRING)
  .then(() =>
    console.log("MongoDB Atlas connected")
  )
  .catch((err) => console.error("MongoDB connection error:", err));
const bookingRoutes = require("./routes/routes");

app.use("/bookings", bookingRoutes);

app.listen(3000, () => {
  console.log("App listening on http://localhost:3000");
});
