import { useEffect, useState } from "react";
import {
  Image,
  StyleSheet,
  View,
  StatusBar,
  Text,
  TouchableOpacity,
} from "react-native";
import { Button, ScrollView } from "native-base";
import MaterialIconsIcon from "react-native-vector-icons/MaterialIcons";
import AsyncStorage from "@react-native-async-storage/async-storage";
import IpAddress from "../consts/variable";
import axios from "axios";
import COLORS from "../consts/colors";
import theme from "../styles/theme";

const CardInformation = () => {
  const [user, setUser] = useState({});
  useEffect(() => {
    getUser();
  }, []);
  const getUser = async () => {
    const idAccount = await AsyncStorage.getItem("idAccount");
    await axios
      .get("http://" + IpAddress + ":8000/account/" + idAccount)
      .then(async (response) => {
        const result = response.data;
        console.log("result");
        console.log(result);
        setUser(result);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  if (user == {}) {
    return <View />;
  } else {
    return (
      <View style={styles.cardInformation}>
        <View style={styles.cardInformation_form}>
          <View style={styles.cardInformation_form_avatar}>
            <Image
              style={styles.cardInformation_form_avatar_img}
              source={{
                uri: "http://" + IpAddress + ":8000/singleimage/" + user.avatar,
              }}
            />
          </View>
          <View style={styles.cardInformation_form_information}>
            <View style={styles.cardInformation_form_information_title}>
              <Text style={styles.cardInformation_form_information_title_text}>
                Thông tin cá nhân
              </Text>
            </View>
            <View style={styles.cardInformation_form_information_name}>
              <Text style={styles.cardInformation_form_information_name_text}>
                {user.firstname + " " + user.lastname}
              </Text>
            </View>
            <View style={styles.cardInformation_form_information_phone}>
              <Text style={styles.cardInformation_form_information_phone_text}>
                {user.phonenumber}
              </Text>
            </View>
            <View style={styles.cardInformation_form_information_address}>
              {user.sex == 0 ? (
                <Text
                  style={styles.cardInformation_form_information_address_text}
                >
                  Nam
                </Text>
              ) : (
                <Text
                  style={styles.cardInformation_form_information_address_text}
                >
                  Nữ
                </Text>
              )}
            </View>
          </View>
        </View>
      </View>
    );
  }
};

const CardSetting = ({ navigation }) => {
  return (
    <View style={styles.cardSetting}>
      <View style={styles.cardSetting_box}>
        <TouchableOpacity style={styles.cardSetting_box_item}>
          <View style={styles.cardSetting_box_item_title}>
            <MaterialIconsIcon name="edit" size={20} color={"black"} />
            <Text style={styles.cardSetting_box_item_title_text}>
              Chỉnh sửa thông tin cá nhân
            </Text>
          </View>
          <MaterialIconsIcon name="chevron-right" size={30} color={"black"} />
        </TouchableOpacity>
        {/* <View style={styles.hr} />
        <TouchableOpacity style={styles.cardSetting_box_item}>
          <View style={styles.cardSetting_box_item_title}>
            <MaterialIconsIcon name="settings" size={20} color={"black"} />
            <Text style={styles.cardSetting_box_item_title_text}>
              Cài đặt hệ thống
            </Text>
          </View>
          <MaterialIconsIcon name="chevron-right" size={30} color={"black"} />
        </TouchableOpacity> */}
        <View style={styles.hr} />
        <TouchableOpacity
          style={styles.cardSetting_box_item}
          onPress={() => navigation.navigate("HistoryScreen")}
        >
          <View style={styles.cardSetting_box_item_title}>
            <MaterialIconsIcon name="tablet" size={20} color={"black"} />
            <Text style={styles.cardSetting_box_item_title_text}>
              Lịch sử thuê phòng
            </Text>
          </View>
          <MaterialIconsIcon name="chevron-right" size={30} color={"black"} />
        </TouchableOpacity>
        <View style={styles.hr} />
        <TouchableOpacity style={styles.cardSetting_box_item}>
          <View style={styles.cardSetting_box_item_title}>
            <MaterialIconsIcon name="language" size={20} color={"black"} />
            <Text style={styles.cardSetting_box_item_title_text}>
              Cài đặt ngôn ngữ
            </Text>
          </View>
          <MaterialIconsIcon name="chevron-right" size={30} color={"black"} />
        </TouchableOpacity>
        <View style={styles.hr} />
        <TouchableOpacity
          style={styles.cardSetting_box_item}
          onPress={() => navigation.navigate("PostRoomScreen")}
        >
          <View style={styles.cardSetting_box_item_title}>
            <MaterialIconsIcon name="home" size={20} color={"black"} />
            <Text style={styles.cardSetting_box_item_title_text}>
              Phòng cho thuê
            </Text>
          </View>
          <MaterialIconsIcon name="chevron-right" size={30} color={"black"} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const ProfileScreen = ({ navigation, route }) => {
  return (
    <View style={styles.container}>
      <StatusBar
        translucent={false}
        backgroundColor={COLORS.white}
        barStyle="dark-content"
      />
      <ScrollView
        showsHorizontalScrollIndicator={false}
        showsVerticalScrollIndicator={false}
      >
        <CardInformation />
        <View style={styles.space} />
        <CardSetting navigation={navigation} />
        <View style={styles.button_box}>
          <Button
            style={styles.button}
            onPress={() => navigation.navigate("Welcome")}
          >
            <Text style={styles.sign_out}>Đăng xuất</Text>
          </Button>
        </View>
        <View style={styles.bottom} />
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: "100%",
    backgroundColor: COLORS.white,
  },
  space: {
    width: "100%",
    height: 35,
  },
  cardInformation: {
    width: "100%",
    height: 200,
    alignItems: "center",
  },
  cardInformation_form: {
    width: "95%",
    height: "100%",
    backgroundColor: theme.PRIMARY_BG_COLOR,
    borderRadius: 13,
    flexDirection: "row",
  },
  cardInformation_form_avatar: {
    width: "40%",
    height: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
  cardInformation_form_avatar_img: {
    width: "90%",
    height: "90%",
    borderRadius: 13,
  },
  cardInformation_form_information: {
    width: "55%",
    height: "100%",
  },
  cardInformation_form_information_title: {
    width: "100%",
    height: "20%",
    justifyContent: "center",
  },
  cardInformation_form_information_name: {
    width: "100%",
    height: "20%",
    justifyContent: "center",
  },
  cardInformation_form_information_phone: {
    width: "100%",
    height: "20%",
  },
  cardInformation_form_information_address: {
    width: "100%",
    height: "40%",
  },
  cardInformation_form_information_title_text: {
    color: COLORS.grey,
    fontFamily: theme.FontMain,
    fontSize: 18,
  },
  cardInformation_form_information_name_text: {
    color: "white",
    fontFamily: theme.FontMain,
    fontSize: 20,
  },
  cardInformation_form_information_phone_text: {
    color: "white",
    fontFamily: theme.FontMain,
    fontSize: 15,
  },
  cardInformation_form_information_address_text: {
    color: "white",
    fontFamily: theme.FontMain,
    fontSize: 15,
  },
  cardSetting: {
    width: "100%",
    height: 400,
    alignItems: "center",
  },
  cardSetting_box: {
    width: "95%",
  },
  cardSetting_box_item: {
    width: "100%",
    height: "20%",
    borderRadius: 13,
    backgroundColor: "rgba(239,240,242,1)",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  cardSetting_box_item_title: {
    width: "80%",
    height: "100%",
    paddingLeft: 15,
    borderRadius: 13,
    flexDirection: "row",
    alignItems: "center",
  },
  cardSetting_box_item_title_text: {
    paddingLeft: 10,
    fontSize: 16,
    fontFamily: theme.FontMain,
  },
  hr: {
    width: "100%",
    height: 20,
    backgroundColor: COLORS.white,
  },
  button: {
    width: "85%",
    height: 60,
    borderRadius: 13,
    backgroundColor: theme.PRIMARY_BG_COLOR,
    fontFamily: theme.FontMain,
  },
  sign_out: {
    fontFamily: theme.FontMain,
    fontSize: 15,
    color: "white",
  },
  button_box: {
    width: "100%",
    alignItems: "center",
  },
  bottom: {
    width: "100%",
    height: 200,
  },
});

export default ProfileScreen;
