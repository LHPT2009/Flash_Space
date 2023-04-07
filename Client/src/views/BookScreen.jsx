import { useState } from "react";
import { View, Text, Image } from "react-native";
import FlashMessage from "react-native-flash-message";
import COLORS from "../consts/colors";
import theme from "../styles/theme";
import { TouchableOpacity } from "react-native";
import Alert from "../components/Alert";

const BookScreen = ({ navigation, route }) => {
  const item = route.params;
  const [openAddcomment, setOpenAddcomment] = useState(false);

  const closeAddComment = (result) => {
    setOpenAddcomment(result);
  };
  return (
    <View
      style={{
        width: "100%",
        height: "100%",
        justifyContent: "center",
        backgroundColor: theme.PRIMARY_BG_COLOR,
        alignItems: "center",
      }}
    >
      {openAddcomment ? <Alert closeAdd={closeAddComment} /> : <View />}
      <FlashMessage position="top" />
      <View style={{ width: "90%", height: "90%" }}>
        <View
          style={{
            width: "100%",
            height: "70%",
            backgroundColor: COLORS.white,
            justifyContent: "space-between",
            borderTopLeftRadius: 50,
            borderTopRightRadius: 50,
          }}
        >
          <View
            style={{
              with: "100%",
              height: "80%",
              marginTop: 40,
              alignItems: "center",
            }}
          >
            <View style={{ width: "85%", height: "100%" }}>
              <View style={{ width: "100%", height: "20%" }}>
                <View
                  style={{
                    width: "100%",
                    height: "50%",
                  }}
                >
                  <Text style={{ fontSize: 28, fontWeight: "bold" }}>
                    Phiếu thuê phòng
                  </Text>
                </View>
                <View
                  style={{
                    width: "100%",
                    height: "50%",
                    justifyContent: "center",
                    borderBottomWidth: 0.5,
                    borderColor: COLORS.grey,
                  }}
                >
                  <Text
                    style={{
                      fontFamily: theme.FontMain,
                      color: COLORS.grey,
                      fontSize: 18,
                    }}
                  >
                    ID: 123456789
                  </Text>
                </View>
              </View>
              <View
                style={{
                  width: "100%",
                  height: "30%",
                  paddingTop: 20,
                }}
              >
                <Text
                  style={{
                    fontFamily: theme.FontMain,
                    color: COLORS.grey,
                    fontSize: 18,
                    paddingTop: 10,
                  }}
                >
                  Địa chỉ
                </Text>
                <View
                  style={{
                    width: "100%",
                  }}
                >
                  <Text
                    style={{
                      fontFamily: theme.FontMain,
                      color: COLORS.dark,
                      fontSize: 16,
                    }}
                  >
                    50/14 Trương Văn Thành, p.Hiệp Phú, tp.Thủ Đức
                  </Text>
                </View>
              </View>
              <View
                style={{
                  width: "100%",
                  height: "20%",
                }}
              >
                <Text
                  style={{
                    fontFamily: theme.FontMain,
                    color: COLORS.grey,
                    fontSize: 18,
                    paddingTop: 10,
                  }}
                >
                  Ngày
                </Text>
                <View
                  style={{
                    width: "100%",
                  }}
                >
                  <Text
                    style={{
                      fontFamily: theme.FontMain,
                      color: COLORS.dark,
                      fontSize: 16,
                    }}
                  >
                    1/4/2023
                  </Text>
                </View>
              </View>

              <View
                style={{
                  width: "100%",
                  height: "30%",
                }}
              >
                <Text
                  style={{
                    fontFamily: theme.FontMain,
                    color: COLORS.grey,
                    fontSize: 18,
                    paddingTop: 10,
                  }}
                >
                  Khung giờ
                </Text>
                <View
                  style={{
                    width: "100%",
                  }}
                >
                  <Text
                    style={{
                      fontFamily: theme.FontMain,
                      color: COLORS.dark,
                      fontSize: 16,
                    }}
                  >
                    7h - 8h, 9h - 10h, 14h - 15h
                  </Text>
                </View>
              </View>
            </View>
          </View>
          <View
            style={{
              with: "100%",
              height: 20,
              backgroundColor: COLORS.white,
              flexDirection: "row",
              justifyContent: "space-between",
            }}
          >
            <View
              style={{
                width: 20,
                height: 20,
                backgroundColor: theme.PRIMARY_BG_COLOR,
                borderTopRightRadius: 50,
              }}
            ></View>
            <View
              style={{
                width: 20,
                height: 20,
                backgroundColor: theme.PRIMARY_BG_COLOR,
                borderTopLeftRadius: 50,
              }}
            ></View>
          </View>
        </View>
        <View
          style={{
            width: "100%",
            height: "30%",
            backgroundColor: COLORS.white,
            justifyContent: "space-between",
            borderBottomLeftRadius: 50,
            borderBottomRightRadius: 50,
          }}
        >
          <View
            style={{
              with: "100%",
              height: 20,
              backgroundColor: COLORS.white,
              flexDirection: "row",
              justifyContent: "space-between",
            }}
          >
            <View
              style={{
                width: 20,
                height: 20,
                backgroundColor: theme.PRIMARY_BG_COLOR,
                borderBottomRightRadius: 50,
              }}
            ></View>
            <View style={{ width: "90%" }}>
              <Image
                style={{
                  width: "100%",
                  height: "10%",
                }}
                source={require("../../assets/images/line1.png")}
              />
            </View>
            <View
              style={{
                width: 20,
                height: 20,
                backgroundColor: theme.PRIMARY_BG_COLOR,
                borderBottomLeftRadius: 50,
              }}
            ></View>
          </View>
          <View
            style={{
              width: "100%",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <View style={{ width: "85%", height: "90%" }}>
              <View
                style={{
                  width: "100%",
                  height: "30%",
                  flexDirection: "row",
                }}
              >
                <Text
                  style={{
                    fontFamily: theme.FontMain,
                    color: COLORS.grey,
                    fontSize: 18,
                  }}
                >
                  Tình trạng:
                </Text>
                <Text
                  style={{
                    fontFamily: theme.FontMain,
                    color: "#F7C056",
                    fontSize: 18,
                    paddingLeft: 10,
                  }}
                >
                  Xác nhận gửi yêu cầu
                </Text>
              </View>
              <TouchableOpacity
                style={{
                  width: "100%",
                  height: "50%",
                  backgroundColor: theme.PRIMARY_BG_COLOR,
                  borderRadius: 13,
                  justifyContent: "center",
                  alignItems: "center",
                }}
                onPress={() => setOpenAddcomment(true)}
              >
                <Text
                  style={{
                    fontFamily: theme.FontMain,
                    color: COLORS.white,
                    fontSize: 20,
                  }}
                >
                  Xác nhận đặt phòng
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
};
export default BookScreen;
