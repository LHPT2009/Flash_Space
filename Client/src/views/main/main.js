import React from "react";
import {
  SafeAreaView,
  View,
  Text,
  TouchableOpacity,
  ImageBackground,
  StatusBar,
} from "react-native";

const Main = ({ navigation }) => {
  return (
    <SafeAreaView>
      <TouchableOpacity
        onPress={() => {
          navigation.openDrawer();
        }}
      >
        <Text>menu Drawer</Text>
      </TouchableOpacity>
      <Text>trang chủ</Text>
      <TouchableOpacity
        onPress={() => {
          navigation.navigate("Setting");
        }}
      >
        <Text>Cài đặt chung</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default Main;
