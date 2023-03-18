const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");

const accountRoute = require("./routes/Account");
const bookingScheduleRoute = require("./routes/BookingSchedule");
const CareerRoute = require("./routes/Career");

dotenv.config();
const app = express();

mongoose.set("strictQuery", false);
mongoose.connect(
  "mongodb+srv://lehuynhphuongtung0601:Tung0601@cluster0.7jizcdt.mongodb.net/?retryWrites=true&w=majority",
  () => {
    console.log("DB connected");
  }
);

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());
app.use(express.json());

app.use("/account", accountRoute);
app.use("/bookingschedule", bookingScheduleRoute);
app.use("/career", CareerRoute);

app.listen(8000, () => {
  console.log("Server is running...");
});
