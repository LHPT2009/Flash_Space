import { useEffect } from "react";
import { View } from "react-native";
import { NativeBaseProvider, Box, Text } from "native-base";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";
import FlashMessage from "react-native-flash-message";

import { createStackNavigator } from "@react-navigation/stack";
import BottomTabNavigator from "./src/navigation/TabNavigator";
import DetailsScreen from "./src/views/DetailsScreen";
import { WelcomeStackNavigator } from "./src/navigation/StackNavigator";

// import HomeScreen from "./src/views/HomeScreen";
// import {
//   WelcomeStackNavigator,
//   MainStackNavigator,
//   SavedStackNavigator,
//   ProfileStackNavigator,
//   SreachStackNavigator,
// } from "./src/navigation/StackNavigator";

const Stack = createStackNavigator();

// function SettingsScreen() {
//   return (
//     <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
//       <Box>
//         <Text style={{ fontFamily: "TiltNeon-Regular" }}>Con nha gia giao</Text>
//       </Box>
//     </View>
//   );
// }

const Tab = createBottomTabNavigator();

const App = () => {
  const [fontsLoaded] = useFonts({
    "TiltNeon-Regular": require("./assets/fonts/TiltNeon-Regular.ttf"),
  });

  useEffect(() => {
    async function prepare() {
      await SplashScreen.preventAutoHideAsync();
    }
    prepare();
  }, []);
  if (!fontsLoaded) {
    return undefined;
  } else {
    SplashScreen.hideAsync();
  }

  const screenOptionStyle = {
    headerStyle: {
      backgroundColor: "#9AC4F8",
    },
    headerTintColor: "white",
    headerBackTitle: "Back",
    headerShown: false,
  };
  return (
    <NavigationContainer>
      <NativeBaseProvider>
        <FlashMessage position="top" />
        <WelcomeStackNavigator />
      </NativeBaseProvider>
    </NavigationContainer>
  );
};

export default App;
