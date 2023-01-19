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
        <TouchableOpacity onPress={() => navigation.navigate("HomeDrawer")}>
          <Text>Chuyển trang HomeDrawer</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default Login;
