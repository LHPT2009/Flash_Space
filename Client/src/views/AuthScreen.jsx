import { View, Text, Image } from "react-native";
import COLORS from "../consts/colors";
import theme from "../styles/theme";
import { TouchableOpacity } from "react-native";
import FlashMessage from "react-native-flash-message";

const AuthScreen = ({ navigation }) => {
  return (
    <View style={{ width: "100%", height: "100%" }}>
      <FlashMessage position="top" />
      <View
        style={{
          width: "100%",
          height: "10%",
          flexDirection: "row",
          backgroundColor: COLORS.white,
          elevation: 10,
        }}
      >
        <View
          style={{
            width: "20%",
            height: "100%",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <View
            style={{
              width: "60%",
              height: "60%",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <TouchableOpacity onPress={navigation.goBack}>
              <Text
                style={{
                  fontFamily: theme.FontMain,
                  fontSize: 17,
                  color: theme.PRIMARY_BG_COLOR,
                }}
              >
                Trở về
              </Text>
            </TouchableOpacity>
          </View>
        </View>
        <View
          style={{
            width: "60%",
            height: "100%",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Text
            style={{
              fontFamily: theme.FontMain,
              fontSize: 19,
              color: COLORS.dark,
            }}
          >
            Xác thực người dùng
          </Text>
        </View>
        <View style={{ width: "20%", height: "100%" }}></View>
      </View>
      <View
        style={{ width: "100%", height: "80%", backgroundColor: COLORS.light }}
      >
        <View style={{ width: "100%", height: "100%" }}>
          <View
            style={{
              width: "100%",
              height: "70%",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <TouchableOpacity
              style={{
                width: 300,
                height: 300,
                elevation: 10,
                backgroundColor: COLORS.white,
                borderRadius: 13,
              }}
              onPress={() => navigation.navigate("TakephotoScreen")}
            >
              <Image
                source={require("../../assets/images/QR/qr.png")}
                style={{ width: 300, height: 300, borderRadius: 13 }}
              />
            </TouchableOpacity>
          </View>
          <View
            style={{
              width: "100%",
              height: "10%",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Text style={{ fontFamily: theme.FontMain, fontSize: 15 }}>
              Xác thực mã QR trên Căn cước công dân
            </Text>
          </View>
        </View>
      </View>
      <TouchableOpacity
        style={{
          width: "100%",
          height: "10%",
          backgroundColor: theme.PRIMARY_BG_COLOR,
          borderTopLeftRadius: 13,
          borderTopRightRadius: 13,

          justifyContent: "center",
          alignItems: "center",
        }}
        onPress={() => navigation.navigate("PostScreen")}
      >
        <Text
          style={{
            fontFamily: theme.FontMain,
            fontSize: 19,
            color: COLORS.white,
          }}
        >
          Xác nhận
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default AuthScreen;
