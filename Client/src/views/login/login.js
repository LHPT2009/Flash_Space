import React, { Component } from "react";
import {
  SafeAreaView,
  View,
  Text,
  TouchableOpacity,
  ImageBackground,
  StatusBar,
} from "react-native";

const Login = ({ navigation }) => {
  return (
    <SafeAreaView>
      <StatusBar barStyle="light-content" />
      <View>
        <Text>Đăng nhập</Text>
        <TouchableOpacity onPress={() => navigation.navigate("Register")}>
          <Text>Chuyển trang Register</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate("Reset")}>
          <Text>Chuyển trang Reset</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default Login;
