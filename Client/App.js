import Login from "./src/views/login/login";
import Register from "./src/views/register/register";
import Reset from "./src/views/reset/reset";
import Main from "./src/views/main/main";
import Setting from "./src/views/setting/setting";

import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import "react-native-gesture-handler";
import { createDrawerNavigator } from "@react-navigation/drawer";
const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();

const HomeDrawer = () => {
  return (
    <Drawer.Navigator
      initialRouteName="Main"
      screenOptions={{ headerShown: false }}
    >
      <Drawer.Screen name="Main" component={Main} />
      <Drawer.Screen name="Register" component={Register} />
      <Drawer.Screen name="Reset" component={Reset} />
      <Drawer.Screen name="Setting" component={Setting} />
    </Drawer.Navigator>
  );
};

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Login"
        screenOptions={{ headerShown: false }}
      >
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="HomeDrawer" component={HomeDrawer} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
