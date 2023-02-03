import React from "react";
// import { View } from "react-native";
// import { ActivityIndicator } from "react-native-paper";
// import AppNavigator from "./routes";
import { NavigationContainer } from "@react-navigation/native";
import Toast from "react-native-toast-message";
import styles from "./styles/index";
import DrawerNavigator from "./navigation/DrawerNavigator";

const App = () => {
  return (
    <NavigationContainer>
      <DrawerNavigator />
    </NavigationContainer>
  );
};
export default App;
