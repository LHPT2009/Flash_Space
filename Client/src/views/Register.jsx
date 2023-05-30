import React, { useState } from "react";
import { View, Text, ScrollView } from "react-native";
import Icon from "react-native-vector-icons/Ionicons";
import { TextInput } from "react-native";
import axios from "axios";
import IpAddress from "../consts/variable";
import style from "../styles/views/register";
import { TouchableOpacity } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { showMessage, hideMessage } from "react-native-flash-message";

function Register(props) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [repassword, setRePassword] = useState("");
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [email, setEmail] = useState("");
  const [eye, setEye] = useState(true);
  const [eye1, setEye1] = useState(true);
  const handleEyePassword = () => {
    setEye(!eye);
  };
  const handleEyePassword2 = () => {
    setEye1(!eye1);
  };
  const changeClosed = () => {
    props.functionClosed(true);
  };

  const handleRegister = async () => {
    await axios
      .post("http://" + IpAddress + ":8000/auth/register", {
        username,
        password,
        firstname,
        lastname,
        email,
      })
      .then(async (response) => {
        const result = response.data;
        await AsyncStorage.setItem("idAccount", result._id);
        await AsyncStorage.setItem(
          "name",
          result.firstname + " " + result.lastname
        );
        showMessage({
          message: "Đăng ký thành công  ✔",
          description: "Chào mừng bạn đến với Flash Space",
          type: "succes",
        });
        props.navigation.reset({
          index: 0,
          routes: [
            { name: "Main" }, // Key của màn hình muốn reload
          ],
        });
        props.navigation.navigate("Main");
      })
      .catch((error) => {
        showMessage({
          message: "Đăng ký thất bại  ✘",
          description: "Vui lòng thử lại",
          type: "danger",
        });
        console.log(error);
      });
  };
  return (
    <View style={style.container}>
      <ScrollView>
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
              <Text style={style.content__box__title_text}>Họ và tên đệm</Text>
            </View>
            <View style={style.content__box__input}>
              <TextInput
                style={style.content__box__input_text}
                placeholder="Họ và tên đệm"
                onChangeText={(value) => {
                  setLastname(value);
                }}
              />
            </View>
            <View style={style.content__box__title}>
              <Text style={style.content__box__title_text}>Tên</Text>
            </View>
            <View style={style.content__box__input}>
              <TextInput
                style={style.content__box__input_text}
                placeholder="Tên"
                onChangeText={(value) => {
                  setFirstname(value);
                }}
              />
            </View>
            <View style={style.content__box__title}>
              <Text style={style.content__box__title_text}>Email</Text>
            </View>
            <View style={style.content__box__input}>
              <TextInput
                style={style.content__box__input_text}
                placeholder="Email"
                onChangeText={(value) => {
                  setEmail(value);
                }}
              />
            </View>
            <View style={style.content__box__title}>
              <Text style={style.content__box__title_text}>Username</Text>
            </View>
            <View style={style.content__box__input}>
              <TextInput
                style={style.content__box__input_text}
                placeholder="Username"
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
                secureTextEntry={eye}
                onChangeText={(value) => {
                  setPassword(value);
                }}
              />
              {eye ? (
                <Icon
                  name="eye-outline"
                  size={15}
                  onPress={() => handleEyePassword()}
                />
              ) : (
                <Icon
                  name="eye-off"
                  size={15}
                  onPress={() => handleEyePassword()}
                />
              )}
            </View>
            <View style={style.content__box__title}>
              <Text style={style.content__box__title_text}>
                Mật khẩu nhập lại
              </Text>
            </View>
            <View style={style.content__box__input}>
              <TextInput
                style={style.content__box__input_text}
                placeholder="Mật khẩu nhập lại"
                secureTextEntry={eye1}
                onChangeText={(value) => {
                  setRePassword(value);
                }}
              />
              {eye1 ? (
                <Icon
                  name="eye-outline"
                  size={15}
                  onPress={() => handleEyePassword2()}
                />
              ) : (
                <Icon
                  name="eye-off"
                  size={15}
                  onPress={() => handleEyePassword2()}
                />
              )}
            </View>

            <TouchableOpacity
              style={style.content__box__button}
              onPress={() => handleRegister()}
            >
              <Text style={style.content__box__button_text}>Đăng ký</Text>
            </TouchableOpacity>
            <View style={{ height: 50 }}></View>
          </View>
        </View>
      </ScrollView>
    </View>
  );
}
export default Register;
