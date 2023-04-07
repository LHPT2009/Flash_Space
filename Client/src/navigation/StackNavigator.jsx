import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import Home from "../views/HomeScreen";
// import About from "../screens/About";
// import Contact from "../screens/Contact";
// import Welcome from "../screens/Welcome";
import BottomTabNavigator from "./TabNavigator";
import DetailsScreen from "../views/DetailsScreen";
import CommentsScreen from "../views/CommentsScreen";
import Welcome from "../views/Welcome";
import ProfileScreen from "../views/ProfileScreen";
import HistoryScreen from "../views/HistoryScreen";
import DetailBookScreen from "../views/DetailBookScreen";
import BookScreen from "../views/BookScreen";
import AuthScreen from "../views/AuthScreen";
import TakephotoScreen from "../views/TakephotoScreen";
import PostScreen from "../views/PostScreen";
import PostEndScreen from "../views/PostEndScreen";
// import Rooms from "../screens/Rooms";
// import Detail from "../screens/Detail";
// import HomeScreen from "../views/screens/HomeScreen";
// import DetailsScreen from "../views/screens/DetailsScreen";

const Stack = createStackNavigator();

const screenOptionStyle = {
  headerStyle: {
    backgroundColor: "#9AC4F8",
  },
  headerTintColor: "white",
  headerBackTitle: "Back",
  headerShown: false,
};
const WelcomeStackNavigator = () => {
  return (
    <Stack.Navigator screenOptions={screenOptionStyle}>
      <Stack.Screen name="Main" component={BottomTabNavigator} />
      <Stack.Screen name="DetailsScreen" component={DetailsScreen} />
      <Stack.Screen name="CommentsSreen" component={CommentsScreen} />
      <Stack.Screen name="Welcome" component={Welcome} />
      <Stack.Screen name="HistoryScreen" component={HistoryScreen} />
      <Stack.Screen name="DetailBookScreen" component={DetailBookScreen} />
      <Stack.Screen name="BookScreen" component={BookScreen} />
      <Stack.Screen name="TakephotoScreen" component={TakephotoScreen} />
      <Stack.Screen name="AuthScreen" component={AuthScreen} />
      <Stack.Screen name="PostScreen" component={PostScreen} />
      <Stack.Screen name="PostEndScreen" component={PostEndScreen} />

      {/* <Stack.Screen name="Welcome" component={Welcome} />
      <Stack.Screen name="Rooms" component={Rooms} /> */}
    </Stack.Navigator>
  );
};

const MainStackNavigator = () => {
  return (
    <Stack.Navigator screenOptions={screenOptionStyle}>
      <Stack.Screen name="Home" component={Home} />
      {/* <Stack.Screen name="About" component={About} />
      <Stack.Screen name="Rooms" component={Rooms} />
      <Stack.Screen name="Detail" component={Detail} />
      <Stack.Screen name="HomeScreen" component={HomeScreen} />
      <Stack.Screen name="DetailScreen" component={DetailsScreen} /> */}
    </Stack.Navigator>
  );
};

const ProfileStackNavigator = () => {
  return (
    <Stack.Navigator screenOptions={screenOptionStyle}>
      <Stack.Screen name="ProfileScreen" component={ProfileScreen} />
    </Stack.Navigator>
  );
};

const SreachStackNavigator = () => {
  return (
    <Stack.Navigator screenOptions={screenOptionStyle}>
      {/* <Stack.Screen name="Rooms" component={Rooms} /> */}
      <Stack.Screen name="Sreach" component={Home} />
    </Stack.Navigator>
  );
};

const SavedStackNavigator = () => {
  return (
    <Stack.Navigator screenOptions={screenOptionStyle}>
      <Stack.Screen name="Saved" component={Home} />
    </Stack.Navigator>
  );
};

export {
  MainStackNavigator,
  SavedStackNavigator,
  ProfileStackNavigator,
  SreachStackNavigator,
  WelcomeStackNavigator,
};
