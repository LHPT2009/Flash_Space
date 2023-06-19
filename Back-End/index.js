const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");

const accountRoute = require("./routes/Account");
const bookingRoomRoute = require("./routes/BookingRoom");
const bookingScheduleRoute = require("./routes/BookingSchedule");
const CareerRoute = require("./routes/Career");
const DistrictRoute = require("./routes/District");
const EquipmentRoute = require("./routes/Equipment");
const EvaluateRoute = require("./routes/Evaluate");
const FavoriteRoomRoute = require("./routes/FavoriteRoom");
const ImageRoute = require("./routes/Image");
const ImagesCMNDRoute = require("./routes/ImagesCMND");
const ProvinceRoute = require("./routes/Province");
const RoomRoute = require("./routes/Room");
const RoomDetailRoute = require("./routes/RoomDetail");
const ServicePackRoute = require("./routes/ServicePack");
const ServicePackInUseRoute = require("./routes/ServicePackInUse");
const TimeSlotRoute = require("./routes/TimeSlot");
const WardRoute = require("./routes/Ward");
const WorkAssignmentRoute = require("./routes/WorkAssignment");
const WorkingHoursRoute = require("./routes/WorkingHours");
const AuthRoute = require("./routes/Auth");
const RoleRoute = require("./routes/Role");
const SingleImageRoute = require("./routes/SingleImage");
const QueryRoute = require("./routes/Query");
const RechartsRoute = require("./routes/Recharts");
const ChatgptRoute = require("./routes/Chatgpt");
const VirtualAssistantRoute = require("./routes/VirtualAssistant");
const OTPRoute = require("./routes/OTP");

dotenv.config();
const app = express();

mongoose.set("strictQuery", false);

mongoose.connect(process.env.MONGOOSE_URL, () => {
  console.log("DB connected");
});

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());
app.use(express.json());

app.use("/account", accountRoute);
app.use("/bookingroom", bookingRoomRoute);
app.use("/bookingschedule", bookingScheduleRoute);
app.use("/career", CareerRoute);
app.use("/district", DistrictRoute);
app.use("/equipment", EquipmentRoute);
app.use("/evaluate", EvaluateRoute);
app.use("/favoriteroom", FavoriteRoomRoute);
app.use("/image", ImageRoute);
app.use("/imagescmnd", ImagesCMNDRoute);
app.use("/province", ProvinceRoute);
app.use("/room", RoomRoute);
app.use("/roomdetail", RoomDetailRoute);
app.use("/servicepack", ServicePackRoute);
app.use("/servicepackinuse", ServicePackInUseRoute);
app.use("/timeslot", TimeSlotRoute);
app.use("/ward", WardRoute);
app.use("/workassignment", WorkAssignmentRoute);
app.use("/workinghours", WorkingHoursRoute);
app.use("/auth", AuthRoute);
app.use("/role", RoleRoute);
app.use("/query", QueryRoute);
app.use("/recharts", RechartsRoute);
app.use("/chatgpt", ChatgptRoute);
app.use("/virtualassistant", VirtualAssistantRoute);
app.use("/otp", OTPRoute);

app.use("/singleimage", SingleImageRoute);

const port = process.env.PORT || 8000;

app.listen(port, () => {
  console.log("Server is running...");
});
