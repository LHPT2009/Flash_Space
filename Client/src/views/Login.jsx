import React, { useState } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import Icon from "react-native-vector-icons/Ionicons";
import { TextInput } from "react-native";
import axios from "axios";

import style from "../styles/views/login";
import IpAddress from "../consts/variable";
import AsyncStorage from "@react-native-async-storage/async-storage";

function Login({ navigation, props }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const changeClosed = () => {
    props.functionClosed(true);
  };
  const handleLogin = async () => {
    console.log("đa");
    await axios
      .post("http://" + IpAddress + ":8000/auth/login", {
        username: username,
        password: password,
      })
      .then(async (response) => {
        const result = response.data;
        await AsyncStorage.setItem("idAccount", result._id);
        await AsyncStorage.setItem(
          "name",
          result.firstname + " " + result.lastname
        );
        console.log(result);
        navigation.navigate("Main");
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <View style={style.container}>
      <View style={style.content}>
        <View style={style.close}>
          <Icon
            name="close"
            size={25}
            onPress={() => {
              changeClosed();
            }}
          ></Icon>
        </View>
        <View style={style.content__box}>
          <View style={style.content__box__title}>
            <Text style={style.content__box__title_text}>Tên đăng nhập</Text>
          </View>
          <View style={style.content__box__input}>
            <TextInput
              style={style.content__box__input_text}
              placeholder="Tên đăng nhập hoặc email"
              onChangeText={(value) => {
                setUsername(value);
              }}
            />
          </View>

          <View style={style.content__box__title}>
            <Text style={style.content__box__title_text}>Mật khẩu</Text>
          </View>
          <View style={style.content__box__input}>
            <TextInput
              style={style.content__box__input_text}
              placeholder="Mật khẩu"
              textContentType={"password"}
              onChangeText={(value) => {
                setPassword(value);
              }}
            />
            <Icon name="eye-outline" size={15} />
          </View>
          <View style={style.content__box__forgetPassword}>
            <Text>Quên mật khẩu</Text>
          </View>
          <TouchableOpacity
            style={style.content__box__button}
            onPress={() => handleLogin()}
          >
            <Text style={style.content__box__button_text}>Đăng nhập</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}
export default Login;
