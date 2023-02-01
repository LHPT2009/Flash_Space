import React from "react";
import { View, Text } from "react-native";
import style from "../styles/screens/register";
import Icon from "react-native-vector-icons/Ionicons";
import { TextInput } from "react-native";

export default Register = (props) => {
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
            <Text style={style.content__box__title_text}>Họ và tên đệm</Text>
          </View>
          <View style={style.content__box__input}>
            <TextInput
              style={style.content__box__input_text}
              placeholder="Họ và tên đệm"
            />
          </View>
          <View style={style.content__box__title}>
            <Text style={style.content__box__title_text}>Tên</Text>
          </View>
          <View style={style.content__box__input}>
            <TextInput
              style={style.content__box__input_text}
              placeholder="Tên"
            />
          </View>
          <View style={style.content__box__title}>
            <Text style={style.content__box__title_text}>Email</Text>
          </View>
          <View style={style.content__box__input}>
            <TextInput
              style={style.content__box__input_text}
              placeholder="Email"
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
          <View style={style.content__box__title}>
            <Text style={style.content__box__title_text}>
              Mật khẩu nhập lại
            </Text>
          </View>
          <View style={style.content__box__input}>
            <TextInput
              style={style.content__box__input_text}
              placeholder="Mật khẩu nhập lại"
              textContentType={"password"}
            />
            <Icon name="eye-outline" size={15} />
          </View>

          <View style={style.content__box__button}>
            <Text style={style.content__box__button_text}>Đăng ký</Text>
          </View>
        </View>
      </View>
    </View>
  );
};
