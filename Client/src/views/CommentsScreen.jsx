import { View, Text, Image, ScrollView } from "react-native";
import Icon from "react-native-vector-icons/MaterialIcons";

import COLORS from "../consts/colors";
import theme from "../styles/theme";

const CommentsScreen = ({ navigation, route }) => {
  const house = route.params;

  return (
    <View
      style={{ backgroundColor: COLORS.light, width: "100%", height: "100%" }}
    >
      <View
        style={{
          width: "100%",
          height: 100,
          backgroundColor: COLORS.white,
          flexDirection: "row",
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
          <Icon
            name="arrow-back"
            size={30}
            color={"black"}
            onPress={navigation.goBack}
          />
        </View>
        <View style={{ width: "60%", height: "100%" }}>
          <View
            style={{
              width: "100%",
              height: "60%",
              justifyContent: "flex-end",
              alignItems: "center",
            }}
          >
            <Text style={{ fontSize: 20, fontFamily: theme.FontMain }}>
              Bình luận
            </Text>
          </View>
          <View style={{ width: "100%", height: "40%", alignItems: "center" }}>
            <Text
              style={{
                fontSize: 15,
                fontFamily: theme.FontMain,
                color: COLORS.grey,
              }}
            >
              {house.title}
            </Text>
          </View>
        </View>
        <View
          style={{
            width: "20%",
            height: "100%",
            justifyContent: "center",
            alignItems: "center",
          }}
        ></View>
      </View>
      <ScrollView
        showsHorizontalScrollIndicator={false}
        showsVerticalScrollIndicator={false}
      >
        <View
          style={{
            width: "100%",
            height: 260,
            backgroundColor: COLORS.light,
          }}
        >
          <View style={{ width: "100%", height: "50%" }}>
            <View
              style={{
                width: "100%",
                height: "70%",
                alignItems: "center",
                justifyContent: "flex-end",
              }}
            >
              <Text style={{ fontSize: 50, fontWeight: "bold" }}>4.7</Text>
            </View>
            <View
              style={{
                width: "100%",
                height: "30%",
                alignItems: "center",
              }}
            >
              <Text
                style={{
                  color: COLORS.grey,
                  fontFamily: theme.FontMain,
                  paddingBottom: 10,
                }}
              >
                Đã có 1238 bình luận
              </Text>
            </View>
          </View>
          <View style={{ width: "100%", height: "50%" }}>
            <View
              style={{
                width: "100%",
                height: "20%",
                flexDirection: "row",
                alignItems: "center",
              }}
            >
              <View
                style={{
                  width: "20%",
                  height: "90%",
                  flexDirection: "row",
                  justifyContent: "flex-end",
                  alignItems: "center",
                }}
              >
                <Text
                  style={{
                    fontFamily: theme.FontMain,
                    fontSize: 18,
                    color: COLORS.grey,
                  }}
                >
                  5{"  "}
                </Text>
              </View>
              <View
                style={{
                  width: "60%",
                  height: "90%",
                  justifyContent: "center",
                }}
              >
                <View
                  style={{
                    width: "100%",
                    height: "50%",
                    borderRadius: 50,
                    backgroundColor: "white",
                  }}
                >
                  <View
                    style={{
                      width: "50%",
                      height: "100%",
                      borderRadius: 50,
                      backgroundColor: "#BAED7A",
                    }}
                  ></View>
                </View>
              </View>
              <View
                style={{
                  width: "20%",
                  height: "90%",
                  flexDirection: "row",
                  justifyContent: "flex-start",
                  alignItems: "center",
                }}
              >
                <Text
                  style={{
                    fontFamily: theme.FontMain,
                    fontSize: 18,
                    color: COLORS.grey,
                  }}
                >
                  {"  "}50%
                </Text>
              </View>
            </View>
            <View
              style={{
                width: "100%",
                height: "20%",
                flexDirection: "row",
                alignItems: "center",
              }}
            >
              <View
                style={{
                  width: "20%",
                  height: "90%",
                  flexDirection: "row",
                  justifyContent: "flex-end",
                  alignItems: "center",
                }}
              >
                <Text
                  style={{
                    fontFamily: theme.FontMain,
                    fontSize: 18,
                    color: COLORS.grey,
                  }}
                >
                  4{"  "}
                </Text>
              </View>
              <View
                style={{
                  width: "60%",
                  height: "90%",
                  justifyContent: "center",
                }}
              >
                <View
                  style={{
                    width: "100%",
                    height: "50%",
                    borderRadius: 50,
                    backgroundColor: "white",
                  }}
                >
                  <View
                    style={{
                      width: "20%",
                      height: "100%",
                      borderRadius: 50,
                      backgroundColor: "#D4E683",
                    }}
                  ></View>
                </View>
              </View>
              <View
                style={{
                  width: "20%",
                  height: "90%",
                  flexDirection: "row",
                  justifyContent: "flex-start",
                  alignItems: "center",
                }}
              >
                <Text
                  style={{
                    fontFamily: theme.FontMain,
                    fontSize: 18,
                    color: COLORS.grey,
                  }}
                >
                  {"  "}20%
                </Text>
              </View>
            </View>
            <View
              style={{
                width: "100%",
                height: "20%",
                flexDirection: "row",
                alignItems: "center",
              }}
            >
              <View
                style={{
                  width: "20%",
                  height: "90%",
                  flexDirection: "row",
                  justifyContent: "flex-end",
                  alignItems: "center",
                }}
              >
                <Text
                  style={{
                    fontFamily: theme.FontMain,
                    fontSize: 18,
                    color: COLORS.grey,
                  }}
                >
                  3{"  "}
                </Text>
              </View>
              <View
                style={{
                  width: "60%",
                  height: "90%",
                  justifyContent: "center",
                }}
              >
                <View
                  style={{
                    width: "100%",
                    height: "50%",
                    borderRadius: 50,
                    backgroundColor: "white",
                  }}
                >
                  <View
                    style={{
                      width: "15%",
                      height: "100%",
                      borderRadius: 50,
                      backgroundColor: "#FCEC6B",
                    }}
                  ></View>
                </View>
              </View>
              <View
                style={{
                  width: "20%",
                  height: "90%",
                  flexDirection: "row",
                  justifyContent: "flex-start",
                  alignItems: "center",
                }}
              >
                <Text
                  style={{
                    fontFamily: theme.FontMain,
                    fontSize: 18,
                    color: COLORS.grey,
                  }}
                >
                  {"  "}15%
                </Text>
              </View>
            </View>
            <View
              style={{
                width: "100%",
                height: "20%",
                flexDirection: "row",
                alignItems: "center",
              }}
            >
              <View
                style={{
                  width: "20%",
                  height: "90%",
                  flexDirection: "row",
                  justifyContent: "flex-end",
                  alignItems: "center",
                }}
              >
                <Text
                  style={{
                    fontFamily: theme.FontMain,
                    fontSize: 18,
                    color: COLORS.grey,
                  }}
                >
                  2{"  "}
                </Text>
              </View>
              <View
                style={{
                  width: "60%",
                  height: "90%",
                  justifyContent: "center",
                }}
              >
                <View
                  style={{
                    width: "100%",
                    height: "50%",
                    borderRadius: 50,
                    backgroundColor: "white",
                  }}
                >
                  <View
                    style={{
                      width: "10%",
                      height: "100%",
                      borderRadius: 50,
                      backgroundColor: "#F7C056",
                    }}
                  ></View>
                </View>
              </View>
              <View
                style={{
                  width: "20%",
                  height: "90%",
                  flexDirection: "row",
                  justifyContent: "flex-start",
                  alignItems: "center",
                }}
              >
                <Text
                  style={{
                    fontFamily: theme.FontMain,
                    fontSize: 18,
                    color: COLORS.grey,
                  }}
                >
                  {"  "}10%
                </Text>
              </View>
            </View>
            <View
              style={{
                width: "100%",
                height: "20%",
                flexDirection: "row",
                alignItems: "center",
              }}
            >
              <View
                style={{
                  width: "20%",
                  height: "90%",
                  flexDirection: "row",
                  justifyContent: "flex-end",
                  alignItems: "center",
                }}
              >
                <Text
                  style={{
                    fontFamily: theme.FontMain,
                    fontSize: 18,
                    color: COLORS.grey,
                  }}
                >
                  1{"  "}
                </Text>
              </View>
              <View
                style={{
                  width: "60%",
                  height: "90%",
                  justifyContent: "center",
                }}
              >
                <View
                  style={{
                    width: "100%",
                    height: "50%",
                    borderRadius: 50,
                    backgroundColor: "white",
                  }}
                >
                  <View
                    style={{
                      width: "5%",
                      height: "100%",
                      borderRadius: 50,
                      backgroundColor: "#F4626C",
                    }}
                  ></View>
                </View>
              </View>
              <View
                style={{
                  width: "20%",
                  height: "90%",
                  flexDirection: "row",
                  justifyContent: "flex-start",
                  alignItems: "center",
                }}
              >
                <Text
                  style={{
                    fontFamily: theme.FontMain,
                    fontSize: 18,
                    color: COLORS.grey,
                  }}
                >
                  {"  "}5%
                </Text>
              </View>
            </View>
          </View>
        </View>
        <View style={{ width: "100%" }}>
          <View
            style={{
              width: "100%",
              height: 70,
              justifyContent: "flex-end",
            }}
          >
            <View
              style={{
                width: "50%",
                height: "90%",
                justifyContent: "center",
                paddingLeft: 20,
              }}
            >
              <Text style={{ fontSize: 18, fontFamily: theme.FontMain }}>
                Tất cả bình luận
              </Text>
            </View>
          </View>
          <View
            style={{
              width: "100%",

              alignItems: "center",
            }}
          >
            <View
              style={{
                width: "90%",
                height: "100%",
                alignItems: "center",
              }}
            >
              <View
                style={{
                  width: "100%",
                  backgroundColor: COLORS.white,
                  flexDirection: "row",
                  borderRadius: 13,
                  paddingHorizontal: 15,
                  paddingVertical: 10,
                  marginBottom: 20,
                }}
              >
                <View
                  style={{
                    width: "20%",
                    backgroundColor: COLORS.white,
                  }}
                >
                  <View
                    style={{
                      alignItems: "center",
                    }}
                  >
                    <Image
                      style={{ borderRadius: 50, width: 50, height: 50 }}
                      source={require("../../assets/images/avatar/123.jpeg")}
                    />
                  </View>
                </View>
                <View
                  style={{
                    width: "80%",
                    backgroundColor: COLORS.white,
                  }}
                >
                  <View>
                    <Text
                      style={{ color: COLORS.dark, fontFamily: theme.FontMain }}
                    >
                      Nguyễn Văn Chuẩn
                    </Text>
                    <Text
                      style={{ color: COLORS.grey, fontFamily: theme.FontMain }}
                    >
                      26/03/2023
                    </Text>
                  </View>
                  <View>
                    <Text style={{ fontFamily: theme.FontMain }}>
                      Phòng không đẹp lắm{" "}
                    </Text>
                  </View>
                  <View style={{ flexDirection: "row" }}>
                    <Icon name="star" size={18} color={"#E9D738"} />
                  </View>
                </View>
              </View>
              <View
                style={{
                  width: "100%",
                  backgroundColor: COLORS.white,
                  flexDirection: "row",
                  borderRadius: 13,
                  paddingHorizontal: 15,
                  paddingVertical: 10,
                  marginBottom: 20,
                }}
              >
                <View
                  style={{
                    width: "20%",
                    backgroundColor: COLORS.white,
                  }}
                >
                  <View
                    style={{
                      alignItems: "center",
                    }}
                  >
                    <Image
                      style={{ borderRadius: 50, width: 50, height: 50 }}
                      source={require("../../assets/images/avatar/123.jpeg")}
                    />
                  </View>
                </View>
                <View
                  style={{
                    width: "80%",
                    backgroundColor: COLORS.white,
                  }}
                >
                  <View>
                    <Text
                      style={{ color: COLORS.dark, fontFamily: theme.FontMain }}
                    >
                      Nguyễn Văn Chuẩn
                    </Text>
                    <Text
                      style={{ color: COLORS.grey, fontFamily: theme.FontMain }}
                    >
                      26/03/2023
                    </Text>
                  </View>
                  <View>
                    <Text style={{ fontFamily: theme.FontMain }}>
                      Phòng đẹp lắm đó nha mấy chế Phòng đẹp lắm đó nha mấy chế
                      Phòng đẹp lắm đó nha mấy chế Phòng đẹp lắm đó nha mấy chế
                      Phòng đẹp lắm đó nha mấy chế Phòng đẹp lắm đó nha mấy chế
                      Phòng đẹp lắm đó nha mấy chế Phòng đẹp lắm đó nha mấy chế
                      Phòng đẹp lắm đó nha mấy chế vPhòng đẹp lắm đó nha mấy chế
                      Phòng đẹp lắm đó nha mấy chế Phòng đẹp lắm đó nha mấy chế
                      Phòng đẹp lắm đó nha mấy chế Phòng đẹp lắm đó nha mấy chế{" "}
                    </Text>
                  </View>
                  <View style={{ flexDirection: "row" }}>
                    <Icon name="star" size={18} color={"#E9D738"} />
                    <Icon name="star" size={18} color={"#E9D738"} />
                    <Icon name="star" size={18} color={"#E9D738"} />
                    <Icon name="star" size={18} color={"#E9D738"} />
                    <Icon name="star" size={18} color={"#E9D738"} />
                  </View>
                </View>
              </View>
              <View
                style={{
                  width: "100%",
                  backgroundColor: COLORS.white,
                  flexDirection: "row",
                  borderRadius: 13,
                  paddingHorizontal: 15,
                  paddingVertical: 10,
                  marginBottom: 20,
                }}
              >
                <View
                  style={{
                    width: "20%",
                    backgroundColor: COLORS.white,
                  }}
                >
                  <View
                    style={{
                      alignItems: "center",
                    }}
                  >
                    <Image
                      style={{ borderRadius: 50, width: 50, height: 50 }}
                      source={require("../../assets/images/avatar/123.jpeg")}
                    />
                  </View>
                </View>
                <View
                  style={{
                    width: "80%",
                    backgroundColor: COLORS.white,
                  }}
                >
                  <View>
                    <Text
                      style={{ color: COLORS.dark, fontFamily: theme.FontMain }}
                    >
                      Nguyễn Văn Chuẩn
                    </Text>
                    <Text
                      style={{ color: COLORS.grey, fontFamily: theme.FontMain }}
                    >
                      26/03/2023
                    </Text>
                  </View>
                  <View>
                    <Text style={{ fontFamily: theme.FontMain }}>
                      Phòng cũng thường thôi{" "}
                    </Text>
                  </View>
                  <View style={{ flexDirection: "row" }}>
                    <Icon name="star" size={18} color={"#E9D738"} />
                    <Icon name="star" size={18} color={"#E9D738"} />
                    <Icon name="star" size={18} color={"#E9D738"} />
                  </View>
                </View>
              </View>
            </View>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default CommentsScreen;
