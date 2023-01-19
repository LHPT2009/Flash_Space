import Login from "./src/views/login/login";
import Register from "./src/views/register/register";
import Reset from "./src/views/reset/reset";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import "react-native-gesture-handler";
import { createDrawerNavigator } from "@react-navigation/drawer";
const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator
        initialRouteName="Login"
        screenOptions={{ headerShown: false }}
      >
        <Drawer.Screen name="Login" component={Login} />
        <Drawer.Screen name="Register" component={Register} />
        <Drawer.Screen name="Reset" component={Reset} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}
