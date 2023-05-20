import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import InformationAddRoom from "../context/InformationAddRoom";
import ListTimeSlotProvider from "../context/ListTimeSlotContext";

import Home from "../views/HomeScreen";
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
import TakephotoScreenRoom from "../views/TakephotoScreenRoom";
import TakephotoScreenRoom1 from "../views/TakephotoScreenRoom1";
import TakephotoScreenRoom2 from "../views/TakephotoScreenRoom2";
import TakephotoScreenRoom3 from "../views/TakephotoScreenRoom3";
import PostScreen from "../views/PostScreen";
import PostEndScreen from "../views/PostEndScreen";
import PostImageScreen from "../views/PostImageScreen";
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
    <InformationAddRoom>
      <ListTimeSlotProvider>
        <Stack.Navigator screenOptions={screenOptionStyle}>
          <Stack.Screen name="Main" component={BottomTabNavigator} />
          <Stack.Screen name="HomeScreen" component={Home} />
          <Stack.Screen name="DetailsScreen" component={DetailsScreen} />
          <Stack.Screen name="CommentsSreen" component={CommentsScreen} />
          <Stack.Screen name="Welcome" component={Welcome} />
          <Stack.Screen name="HistoryScreen" component={HistoryScreen} />
          <Stack.Screen name="DetailBookScreen" component={DetailBookScreen} />
          <Stack.Screen name="BookScreen" component={BookScreen} />
          <Stack.Screen name="TakephotoScreen" component={TakephotoScreen} />
          <Stack.Screen
            name="TakephotoScreenRoom"
            component={TakephotoScreenRoom}
          />
          <Stack.Screen
            name="TakephotoScreenRoom1"
            component={TakephotoScreenRoom1}
          />
          <Stack.Screen
            name="TakephotoScreenRoom2"
            component={TakephotoScreenRoom2}
          />
          <Stack.Screen
            name="TakephotoScreenRoom3"
            component={TakephotoScreenRoom3}
          />
          <Stack.Screen name="AuthScreen" component={AuthScreen} />
          <Stack.Screen name="PostScreen" component={PostScreen} />
          <Stack.Screen name="PostEndScreen" component={PostEndScreen} />
          <Stack.Screen name="PostImageScreen" component={PostImageScreen} />
          {/* <Stack.Screen name="Welcome" component={Welcome} />
      <Stack.Screen name="Rooms" component={Rooms} /> */}
        </Stack.Navigator>
      </ListTimeSlotProvider>
    </InformationAddRoom>
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
