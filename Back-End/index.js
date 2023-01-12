const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");

const userRoute = require("./routes/user");
const authRoute = require("./routes/auth");

dotenv.config();
const app = express();

mongoose.connect(process.env.MONGOOSE_URL, () => {
  console.log("DB connected");
});

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());
app.use(express.json());

app.use("/user", userRoute);
app.use("/auth", authRoute);

app.listen(8000, () => {
    console.log("Server is running...")
})