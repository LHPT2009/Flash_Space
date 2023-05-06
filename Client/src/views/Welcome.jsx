import React, { useState } from "react";
import {
  Text,
  ImageBackground,
  SafeAreaView,
  View,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import Login from "./Login";
import Register from "./Register";
import styles from "../styles/views/welcome";

function Welcome({ navigation, props }) {
  const [isLogin, setIsLogin] = useState(false);
  const [isRegister, setIsRegister] = useState(false);
  const [isClosed, setClosed] = useState(true);

  const clickLogin = () => {
    setIsLogin(true);
    setClosed(false);
  };
  const clickRegister = () => {
    setIsRegister(true);
    setIsLogin(false);
    setClosed(false);
  };

  // const clickClosed = () => {
  //   if (!isClosed) {
  //     setClosed(false);
  //     setIsLogin(false);
  //     setIsRegister(false);
  //   } else {
  //     setClosed(true);
  //   }
  // };

  const changeClosedParen = (isClosed) => {
    setClosed(isClosed);
    setIsLogin(false);
    setIsRegister(false);
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={StyleSheet.absoluteFill}>
        <LinearGradient
          style={styles.container__background}
          colors={["rgba(255, 255, 255, 0)", "rgba(0, 66, 116, 1)"]}
          start={{ x: 0, y: 0 }}
          end={{ x: 0, y: 1 }}
        >
          <ImageBackground
            source={require("../../assets/images/background/miami-beach.jpg")}
            style={styles.container__background_images}
          ></ImageBackground>
        </LinearGradient>
      </View>
      <View
        style={
          isRegister
            ? styles.header__0
            : isLogin
            ? styles.header__40
            : styles.header
        }
      >
        <Text style={styles.header__text__x2}>Chào mừng</Text>
        <Text style={styles.header__text}>đến với</Text>
        <Text style={styles.header__text__x3}>Flash Space</Text>
      </View>

      {isClosed ? (
        <View style={styles.buttons}>
          <TouchableOpacity
            style={styles.button}
            onPress={() => {
              clickLogin();
            }}
          >
            <Text style={styles.button__text}>Đăng nhập</Text>
          </TouchableOpacity>
          <Text style={styles.container__text}>Hoặc</Text>
          <TouchableOpacity
            style={styles.button}
            onPress={() => {
              clickRegister();
            }}
          >
            <Text style={styles.button__text}>Đăng ký</Text>
          </TouchableOpacity>
        </View>
      ) : isLogin ? (
        <View style={styles.buttons__60}>
          <Login functionClosed={changeClosedParen} navigation={navigation} />
        </View>
      ) : isRegister ? (
        <View style={styles.register}>
          <Register functionClosed={changeClosedParen} />
        </View>
      ) : (
        <View></View>
      )}
      {/* <View style={styles.buttons}>
        <View style={styles.button}>
          <Text style={styles.button__text} onPress={() => {}}>
            Đăng nhập
          </Text>
        </View>
        <Text style={styles.container__text}>Hoặc</Text>
        <View style={styles.button}>
          <Text style={styles.button__text}>Đăng ký</Text>
        </View>
      </View> */}
    </SafeAreaView>
  );
}

export default Welcome;
