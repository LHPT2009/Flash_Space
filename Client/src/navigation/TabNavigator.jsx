import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import theme from "../styles/theme";
// import {
//   MainStackNavigator,
//   SreachStackNavigator,
//   SavedStackNavigator,
//   ProfileStackNavigator,
//   WelcomeStackNavigator,
// } from "./StackNavigator";
import styles from "../styles/tabBar";
import { Image, View } from "react-native";
import Home from "../views/HomeScreen";
import RoomsScreen from "../views/RoomsScreen";
import FavoriteScreen from "../views/FavoriteSreen";
import DetailScreen from "../views/ProfileScreen";
// import AddButton from "../components/AddButton";

const Tab = createBottomTabNavigator();

const getIconColor = (focused) => ({
  tintColor: focused ? theme.PRIMARY_BG_WHITE : theme.PRIMARY_BG_DARK,
});

const getClick = (focused) => ({
  backgroundColor: focused ? theme.PRIMARY_BG_COLOR : theme.PRIMARY_BG_WHITE,
  elevation: focused ? 5 : 0,
});

const BottomTabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
        tabBarStyle: styles.tabBar,
        tabBarActiveTintColor: theme.PRIMARY_BG_COLOR,
        tabBarHideOnKeyboard: true,
      }}
    >
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarItemStyle: { height: 0 },
          tabBarIcon: ({ focused }) => (
            <View style={[styles.tabIconContainer, getClick(focused)]}>
              <Image
                source={require("../../assets/images/tabBar/home.png")}
                resizeMode="contain"
                style={[styles.tabIcon, getIconColor(focused)]}
              />
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="Sreach"
        component={RoomsScreen}
        options={{
          tabBarItemStyle: { height: 0 },
          tabBarIcon: ({ focused }) => (
            <View style={[styles.tabIconContainer, getClick(focused)]}>
              <Image
                source={require("../../assets/images/tabBar/search.png")}
                resizeMode="contain"
                style={[styles.tabIcon, getIconColor(focused)]}
              />
            </View>
          ),
        }}
      />
      {/* <Tab.Screen
        name="Add"
        component={MainStackNavigator}
        options={{
          tabBarItemStyle: { height: 0 },
          tabBarButton: () => <AddButton />,
        }}
      /> */}
      <Tab.Screen
        name="Saved"
        component={FavoriteScreen}
        options={{
          tabBarItemStyle: { height: 0 },
          tabBarIcon: ({ focused }) => (
            <View style={[styles.tabIconContainer, getClick(focused)]}>
              <Image
                source={require("../../assets/images/tabBar/bookmark.png")}
                resizeMode="contain"
                style={[styles.tabIcon, getIconColor(focused)]}
              />
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={DetailScreen}
        options={{
          tabBarItemStyle: { height: 0 },
          tabBarIcon: ({ focused }) => (
            <View style={[styles.tabIconContainer, getClick(focused)]}>
              <Image
                source={require("../../assets/images/tabBar/profile.png")}
                resizeMode="contain"
                style={[styles.tabIcon, getIconColor(focused)]}
              />
            </View>
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default BottomTabNavigator;
