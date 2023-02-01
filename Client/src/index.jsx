import React, { useEffect, useState } from "react";
import { View } from "react-native";
import { ActivityIndicator } from "react-native-paper";
import AppNavigator from "./routes";
import { NavigationContainer } from "@react-navigation/native";
import Toast from "react-native-toast-message";
import styles from "./styles/index";

export default function App() {
  const [isStoreLoaded, setIsStoreLoaded] = useState(false);

  useEffect(() => {
    const rehydrate = async () => {
      setIsStoreLoaded(true);
    };
    rehydrate();
  }, []);

  if (!isStoreLoaded) {
    return (
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <ActivityIndicator size="large" />
      </View>
    );
  } else {
    return (
      <NavigationContainer style={styles.container}>
        <AppNavigator />
        <Toast />
      </NavigationContainer>
    );
  }
}
