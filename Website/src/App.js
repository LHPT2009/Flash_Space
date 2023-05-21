import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Screens/Client/Home/Home";
import Room from "./Screens/Client/Room/Room";
import DetailRoom from "./Screens/Client/DetailRoom/DetailRoom";
import DetailHistory from "./Screens/Client/DetailHistory/DetailHistory";
import History from "./Screens/Client/History/History";
import InfoUser from "./Screens/Client/InfoUser/InfoUser";
import Order from "./Screens/Client/Order/Order";
import Favourite from "./Screens/Client/Favourite/Favourite";
import Dashboard from "./Screens/Admin/Dashboard/Dashboard";
import Login from "./Screens/Auth/Login/Login";
import Register from "./Screens/Auth/Register/Register";
import Reset from "./Screens/Auth/Reset/Reset";
import Confirm from "./Screens/Auth/Reset/Confirm";
import NewReset from "./Screens/Auth/Reset/NewReset";
import Charts from "./Screens/Admin/Charts/Charts";
import Forms from "./Screens/Admin/Forms/Forms";
import Icons from "./Screens/Admin/Icons/Icons";
import LockScreen from "./Screens/Admin/Samples/LockScreen";
import LoginAdmin from "./Screens/Admin/Samples/Login";
import LoginAdmin2 from "./Screens/Admin/Samples/Login2";
import Registeradmin from "./Screens/Admin/Samples/Register";
import Registeradmin2 from "./Screens/Admin/Samples/Register2";
import Tables from "./Screens/Admin/Tables/Tables";
import Buttons from "./Screens/Admin/UiFeatures/Buttons";
import Typography from "./Screens/Admin/UiFeatures/Typography";
import AccountAdmin from "./Screens/Admin/Account/Account";
import DetailAccount from "./Screens/Admin/DetailAccount/DetailAccount";
import DetailAccountStaff from "./Screens/Admin/DetailAccountStaff/DetailAccountStaff";
import Role from "./Screens/Admin/Role/Role";
import Statistical from "./Screens/Admin/Statistical/Statistical";
import Staff from "./Screens/Admin/Staff/Staff";
import Position from "./Screens/Admin/Position/Position";
import RoomAdmin from "./Screens/Admin/RoomAdmin/RoomAdmin";
import Evaluate from "./Screens/Admin/Evaluate/Evaluate";
import ServicePack from "./Screens/Admin/ServicePack/ServicePack";
import BookingSchedule from "./Screens/Admin/BookingSchedule/BookingSchedule";
import Career from "./Screens/Admin/Career/Career";
import District from "./Screens/Admin/District/District";
import Equipment from "./Screens/Admin/Equipment/Equipment";
import Province from "./Screens/Admin/Province/Province";
import ServicePackInUse from "./Screens/Admin/ServicePackInUse/ServicePackInUse";
import TimeSlot from "./Screens/Admin/TimeSlot/TimeSlot";
import Ward from "./Screens/Admin/Ward/Ward";
import WorkAssignment from "./Screens/Admin/WorkAssignment/WorkAssignment";
import RoomCareer from "./Screens/Admin/RoomCareer/RoomCareer";

import RoomDetailAdmin from "./Screens/Admin/RoomDetailAdmin/RoomDetailAdmin";
import DetailRole from "./Screens/Admin/DetailRole/DetailRole";
import DetailBookingSchedule from "./Screens/Admin/DetailBookingSchedule/DetailBookingSchedule";
import DetailCareer from "./Screens/Admin/DetailCareer/DetailCareer";
import DetailDistrict from "./Screens/Admin/DetailDistrict/DetailDistrict";
import DetailEquipment from "./Screens/Admin/DetailEquipment/DetailEquipment";
import DetailEvaluate from "./Screens/Admin/DetailEvaluate/DetailEvaluate";
import DetailPosition from "./Screens/Admin/DetailPosition/DetailPosition";
import DetailProvince from "./Screens/Admin/DetailProvince/DetailProvince";
import DetailServicePack from "./Screens/Admin/DetailServicePack/DetailServicePack";
import DetailServicePackInUse from "./Screens/Admin/DetailServicePackInUse/DetailServicePackInUse";
import DetailStaff from "./Screens/Admin/DetailStaff/DetailStaff";
import DetailTimeslot from "./Screens/Admin/DetailTimeslot/DetailTimeslot";
import DetailWard from "./Screens/Admin/DetailWard/DetailWard";
import DetailWorkAssignment from "./Screens/Admin/DetailWorkAssignment/DetailWorkAssignment";

import NewCareer from "./Screens/Admin/NewCareer/NewCareer";
import NewDistrict from "./Screens/Admin/NewDistrict/NewDistrict";
import NewEquipment from "./Screens/Admin/NewEquipment/NewEquipment";
import NewRole from "./Screens/Admin/NewRole/NewRole";
import NewPosition from "./Screens/Admin/NewPosition/NewPosition";
import NewProvince from "./Screens/Admin/NewProvince/NewProvince";
import NewServicePack from "./Screens/Admin/NewServicePack/NewServicePack";
import NewStaff from "./Screens/Admin/NewStaff/NewStaff";
import NewTimeslot from "./Screens/Admin/NewTimeslot/NewTimeslot";
import NewWard from "./Screens/Admin/NewWard/NewWard";

import ListTimeSlotProvider from "./context/ListTimeSlotContext";

const App = () => {
  return (
    <ListTimeSlotProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/room" element={<Room />} />
          <Route path="/detailroom/:id" element={<DetailRoom />} />
          <Route path="/detailhistory/:id" element={<DetailHistory />} />
          <Route path="/history" element={<History />} />
          <Route path="/infouser" element={<InfoUser />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/reset" element={<Reset />} />
          <Route path="/confirm" element={<Confirm />} />
          <Route path="/newreset" element={<NewReset />} />
          <Route path="/favourite" element={<Favourite />} />
          <Route path="/order" element={<Order />} />

          <Route path="/admin" element={<Dashboard />} />
          <Route path="/accountadmin" element={<AccountAdmin />} />
          <Route path="/detailaccount/:id" element={<DetailAccount />} />
          <Route
            path="/detailaccountstaff/:id"
            element={<DetailAccountStaff />}
          />
          <Route path="/Role" element={<Role />} />
          <Route path="/statistical" element={<Statistical />} />
          <Route path="/staff" element={<Staff />} />
          <Route path="/position" element={<Position />} />
          <Route path="/roomadmin" element={<RoomAdmin />} />
          <Route path="/evaluate" element={<Evaluate />} />
          <Route path="/servicepack" element={<ServicePack />} />
          <Route path="/bookingschedule" element={<BookingSchedule />} />
          <Route path="/career" element={<Career />} />
          <Route path="/district" element={<District />} />
          <Route path="/equipment" element={<Equipment />} />
          <Route path="/province" element={<Province />} />
          <Route path="/servicepackinuse" element={<ServicePackInUse />} />
          <Route path="/timeslot" element={<TimeSlot />} />
          <Route path="/ward" element={<Ward />} />
          <Route path="/workassignment" element={<WorkAssignment />} />
          <Route path="/roomcareer" element={<RoomCareer />} />
          <Route path="/roomdetailadmin/:id" element={<RoomDetailAdmin />} />
          <Route path="/detailrole/:id" element={<DetailRole />} />
          <Route
            path="/detailbookingschedule"
            element={<DetailBookingSchedule />}
          />
          <Route path="/detailcareer/:id" element={<DetailCareer />} />
          <Route path="/detaildistrict/:id" element={<DetailDistrict />} />
          <Route path="/detailequipment/:id" element={<DetailEquipment />} />
          <Route path="/detailevaluate" element={<DetailEvaluate />} />
          <Route path="/detailposition" element={<DetailPosition />} />
          <Route path="/detailprovince/:id" element={<DetailProvince />} />
          <Route
            path="/detailservicepack/:id"
            element={<DetailServicePack />}
          />
          <Route
            path="/detailservicepackinuse"
            element={<DetailServicePackInUse />}
          />
          <Route path="/detailstaff" element={<DetailStaff />} />
          <Route path="/detailtimeslot/:id" element={<DetailTimeslot />} />
          <Route path="/detailward/:id" element={<DetailWard />} />
          <Route
            path="/detailworkassignment/:id"
            element={<DetailWorkAssignment />}
          />

          <Route path="/newcareer" element={<NewCareer />} />
          <Route path="/newdistrict" element={<NewDistrict />} />
          <Route path="/newequipment" element={<NewEquipment />} />
          <Route path="/newrole" element={<NewRole />} />
          <Route path="/newposition" element={<NewPosition />} />
          <Route path="/newprovince" element={<NewProvince />} />
          <Route path="/newservicepack" element={<NewServicePack />} />
          <Route path="/newstaff" element={<NewStaff />} />
          <Route path="/newtimeslot" element={<NewTimeslot />} />
          <Route path="/newward" element={<NewWard />} />

          <Route path="/charts" element={<Charts />} />
          <Route path="/forms" element={<Forms />} />
          <Route path="/icons" element={<Icons />} />
          <Route path="/lockscreen" element={<LockScreen />} />
          <Route path="/loginadmin" element={<LoginAdmin />} />
          <Route path="/loginadmin2" element={<LoginAdmin2 />} />
          <Route path="/registeradmin" element={<Registeradmin />} />
          <Route path="/registeradmin2" element={<Registeradmin2 />} />
          <Route path="/tables" element={<Tables />} />
          <Route path="/buttons" element={<Buttons />} />
          <Route path="/typography" element={<Typography />} />
        </Routes>
      </BrowserRouter>
    </ListTimeSlotProvider>
  );
};

export default App;
