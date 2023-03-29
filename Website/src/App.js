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

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/room" element={<Room />} />
          <Route path="/detailroom" element={<DetailRoom />} />
          <Route path="/detailhistory" element={<DetailHistory />} />
          <Route path="/history" element={<History />} />
          <Route path="/infouser" element={<InfoUser />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/reset" element={<Reset />} />
          <Route path="/confirm" element={<Confirm />} />
          <Route path="/newreset" element={<NewReset />} />
          <Route path="/favourite" element={<Favourite />} />

          <Route path="/admin" element={<Dashboard />} />
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
          <Route path="/order" element={<Order />} />
          <Route path="/accountadmin" element={<AccountAdmin />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
