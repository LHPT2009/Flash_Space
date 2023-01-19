import React from "react";
import {
  SafeAreaView,
  View,
  Text,
  TouchableOpacity,
  ImageBackground,
  StatusBar,
} from "react-native";

const Setting = ({ navigation }) => {
  return (
    <SafeAreaView>
      <Text>cài đặt chung</Text>
      <TouchableOpacity
        onPress={() => {
          navigation.navigate("Login");
        }}
      >
        <Text>Đăng xuất</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default Setting;
