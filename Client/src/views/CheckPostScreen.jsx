import { useState } from "react";
import { View, Text, Image, StatusBar } from "react-native";
import COLORS from "../consts/colors";
import theme from "../styles/theme";
import { TouchableOpacity } from "react-native";
import FlashMessage from "react-native-flash-message";

const CheckPostScreen = ({ navigation }) => {
  const [arr, setArray] = useState([]);
  return (
    <View style={{ width: "100%", height: "100%" }}>
      <StatusBar
        translucent={false}
        backgroundColor={COLORS.white}
        barStyle="dark-content"
      />
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
            <TouchableOpacity onPress={() => navigation.navigate("Main")}>
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
            Đăng bài viết
          </Text>
        </View>
        <View style={{ width: "20%", height: "100%" }}></View>
      </View>

      {arr.length != 0 ? (
        <View>
          <View
            style={{
              width: "100%",
              height: "80%",
              backgroundColor: COLORS.light,
            }}
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
                    width: "80%",
                    height: 100,
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "center",
                    elevation: 10,
                    backgroundColor: COLORS.white,
                    borderRadius: 13,
                  }}
                  onPress={() => navigation.navigate("PackageScreen")}
                >
                  <Image
                    source={require("../../assets/images/buy.gif")}
                    style={{
                      width: "80%",
                      height: "80%",
                      resizeMode: "repeat",
                    }}
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
                  Vui lòng mua thêm gói để sử dụng.
                </Text>
              </View>
            </View>
          </View>
          <View
            style={{
              width: "100%",
              height: "10%",
              backgroundColor: COLORS.grey,
              borderTopLeftRadius: 13,
              borderTopRightRadius: 13,
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Text
              style={{
                fontFamily: theme.FontMain,
                fontSize: 19,
                color: COLORS.white,
              }}
            >
              Đăng bài
            </Text>
          </View>
        </View>
      ) : (
        <View>
          <View
            style={{
              width: "100%",
              height: "80%",
              backgroundColor: COLORS.light,
            }}
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
                    width: "80%",
                    height: 100,
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "center",
                    elevation: 10,
                    backgroundColor: COLORS.white,
                    borderRadius: 13,
                  }}
                  onPress={() => navigation.navigate("PackageScreen")}
                >
                  <Image
                    source={require("../../assets/images/buy.gif")}
                    style={{
                      width: "80%",
                      height: "80%",
                      resizeMode: "repeat",
                    }}
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
                  Vui lòng mua thêm gói để sử dụng.
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
              Đăng bài
            </Text>
          </TouchableOpacity>
        </View>
      )}
    </View>
  );
};

export default CheckPostScreen;
