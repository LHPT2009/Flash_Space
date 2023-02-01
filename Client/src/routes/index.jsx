// import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
// import { StackRouter } from "react-navigation";

import { createStackNavigator } from "@react-navigation/stack";
const Stack = createStackNavigator();
import Welcome from "../screens/Welcome";
import Login from "../screens/Login";
import Register from "../screens/Register";
// import SignIn from "@screens/SignIn";
// import SignUp from "@screens/SignUp";
// import ConfirmEmail from "@screens/ConfirmEmail";
// import ChatRoom from "@screens/ChatRoom";
// import EditProfile from "@screens/EditProfile";
// import Consultants from "@screens/Consultants";
// import TabNavigator from "@src/navigation/TabNavigator";
// import ConfirmBooking from "@screens/ConfirmBooking";
// import Book from "@screens/Book";
// import Schedule from "@screens/Schedule";
// import AgendaCalendar from "@screens/AgendaCalendar";
// import AsyncStorage from "@react-native-async-storage/async-storage";

export default function AppNavigator(props) {
  return (
    <Stack.Navigator
      initialRouteName="Welcome"
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen
        name="Welcome"
        component={Welcome}
        options={{
          headerTitle: "",
          hheaderTintColor: "",
          headerShown: false,
          headerTitleAlign: "center",
          headerStyle: {
            backgroundColor: "#fff",
            shadowColor: "#fff",
            elevation: 0,
          },
        }}
      />
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="Register" component={Register} />

      {/*
      // <Stack.Screen
      //   name="SignIn"
      //   component={SignIn}
      //   options={{
      //     headerTitle: "NC CHAT",
      //     headerTintColor: "white",
      //     headerShown: true,
      //     headerTitleAlign: "center",
      //     headerStyle: {
      //       backgroundColor: "#37a4f2",
      //       shadowColor: "#fff",
      //       elevation: 0,
      //     },
      //   }}
      // />
      // <Stack.Screen
      //   name="SignUp"
      //   component={SignUp}
      //   options={{
      //     headerTitle: "Tạo tài khoản",
      //     headerTintColor: "white",
      //     headerShown: true,
      //     headerTitleAlign: "center",
      //     headerStyle: {
      //       backgroundColor: "#37a4f2",
      //       shadowColor: "#fff",
      //       elevation: 0,
      //     },
      //   }}
      // />
      // <Stack.Screen
      //   name="ConfirmEmail"
      //   component={ConfirmEmail}
      //   options={{
      //     headerTitle: "Xác nhận email",
      //     headerTintColor: "white",
      //     headerBackTitleVisible: false,
      //     headerTitleAlign: "center",
      //     headerStyle: {
      //       backgroundColor: "#37a4f2",
      //       shadowColor: "#fff",
      //       elevation: 0,
      //     },
      //   }}
      // />
      // <Stack.Screen
      //   name="ChatRoom"
      //   component={ChatRoom}
      //   options={({ route }) => ({
      //     title: route.params.name,
      //     headerTintColor: "white",
      //     headerShown: "true",
      //     headerTitleAlign: "center",
      //     headerStyle: {
      //       backgroundColor: "#37a4f2",
      //       shadowColor: "#fff",
      //       elevation: 0,
      //     },
      //   })}
      // />
      // <Stack.Screen
      //   name="EditProfile"
      //   component={EditProfile}
      //   options={{
      //     headerTitle: "Edit Profile",
      //     headerTintColor: "white",
      //     headerBackTitleVisible: false,
      //     headerTitleAlign: "center",
      //     headerStyle: {
      //       backgroundColor: "#37a4f2",
      //       shadowColor: "#fff",
      //       elevation: 0,
      //     },
      //   }}
      // />
      // <Stack.Screen
      //   name="Consultants"
      //   component={Consultants}
      //   options={{
      //     headerTitle: "Các nhân viên tư vấn",
      //     headerTintColor: "white",
      //     headerShown: "true",
      //     headerTitleAlign: "center",
      //     headerStyle: {
      //       backgroundColor: "#37a4f2",
      //       shadowColor: "#fff",
      //       elevation: 0,
      //     },
      //   }}
      // />
      // <Stack.Screen name="Services" component={TabNavigator} />
      // <Stack.Screen name="ConfirmBooking" component={ConfirmBooking} />
      // <Stack.Screen
      //   name="Book"
      //   component={Book}
      //   options={{
      //     headerTitle: "Lịch sử đặt lịch hẹn",
      //     headerTintColor: "white",
      //     headerShown: "true",
      //     headerTitleAlign: "center",
      //     headerStyle: {
      //       backgroundColor: "#37a4f2",
      //       shadowColor: "#fff",
      //       elevation: 0,
      //     },
      //   }}
      // />
      // <Stack.Screen name="Schedule" component={Schedule} />
      // <Stack.Screen name="AgendaCalendar" component={AgendaCalendar} /> */}
    </Stack.Navigator>
  );
}
