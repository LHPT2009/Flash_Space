import React from "react";
import { View, Text, ScrollView, Image, ImageBackground } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import style from "../styles/screens/login";
import Icon from "react-native-vector-icons/Ionicons";
import { TextInput } from "react-native";

export default Login = (props) => {
  const changeClosed = () => {
    props.functionClosed(true);
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
            />
            <Icon name="eye-outline" size={15} />
          </View>
          <View style={style.content__box__forgetPassword}>
            <Text>Quên mật khẩu</Text>
          </View>
          <View style={style.content__box__button}>
            <Text style={style.content__box__button_text}>Đăng nhập</Text>
          </View>
        </View>
      </View>
    </View>
  );
};
