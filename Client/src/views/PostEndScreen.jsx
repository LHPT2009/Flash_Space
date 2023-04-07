import { ScrollView, View, Text, TouchableOpacity } from "react-native";
import { Checkbox, Input, Radio } from "native-base";
import Icon from "react-native-vector-icons/MaterialIcons";
import COLORS from "../consts/colors";
import theme from "../styles/theme";

const PostEndScreen = ({ navigation }) => {
  return (
    <View style={{ width: "100%", height: "100%" }}>
      <View
        style={{ width: "100%", height: "90%", backgroundColor: COLORS.light }}
      >
        {/* <ScrollView>
          <View
            style={{
              width: "100%",
              alignItems: "center",
              backgroundColor: "green",
            }}
          >
            <View
              style={{
                width: "90%",
                backgroundColor: "violet",
                marginVertical: 10,
              }}
            >
              <View
                style={{ width: "100%", height: 50, backgroundColor: "red" }}
              ></View>
            </View>
          </View>
          <View
            style={{
              width: "100%",
              alignItems: "center",
              backgroundColor: "green",
            }}
          >
            <View
              style={{
                width: "90%",
                backgroundColor: "violet",
                marginVertical: 10,
              }}
            >
              <Text>aaaaa</Text>
            </View>
          </View>
        </ScrollView> */}
        <ScrollView
          showsVerticalScrollIndicator={false}
          showsHorizontalScrollIndicator={false}
        >
          <View
            style={{
              width: "100%",
              height: 50,
              justifyContent: "flex-end",
              alignItems: "center",
            }}
          >
            <Text
              style={{
                fontFamily: theme.FontMain,
                fontSize: 17,
                color: COLORS.dark,
              }}
            >
              Bước 2: Chọn thời gian cho thuê
            </Text>
          </View>
          <View
            style={{
              width: "100%",
              height: 80,
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <View
              style={{
                width: "50%",
                height: "40%",
                flexDirection: "row",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <TouchableOpacity
                style={{
                  width: 30,
                  height: 30,
                  backgroundColor: theme.PRIMARY_BG_COLOR,
                  borderRadius: 50,
                  justifyContent: "center",
                  alignItems: "center",
                }}
                onPress={navigation.goBack}
              >
                <Text style={{ color: "white" }}>1</Text>
              </TouchableOpacity>
              <View
                style={{
                  width: 90,
                  height: 7,
                  backgroundColor: theme.PRIMARY_BG_COLOR,
                }}
              ></View>
              <View
                style={{
                  width: 30,
                  height: 30,
                  backgroundColor: theme.PRIMARY_BG_COLOR,
                  borderRadius: 50,
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Text style={{ color: "white" }}>2</Text>
              </View>
            </View>
          </View>
          <View
            style={{
              width: "100%",
              paddingVertical: 15,
              alignItems: "center",
            }}
          >
            <View
              style={{
                width: "90%",
                borderRadius: 13,
                backgroundColor: COLORS.white,
                marginVertical: 10,
                elevation: 10,
              }}
            >
              <View
                style={{
                  width: "100%",
                  height: 40,
                  justifyContent: "center",
                }}
              >
                <Text
                  style={{
                    fontFamily: theme.FontMain,
                    fontSize: 16,
                    paddingLeft: 20,
                    color: COLORS.grey,
                  }}
                >
                  Ngày
                </Text>
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
                    justifyContent: "center",
                    alignItems: "center",
                    paddingBottom: 15,
                  }}
                >
                  <View
                    style={{
                      width: "100%",
                      alignItems: "center",
                    }}
                  >
                    <View
                      style={{
                        width: "100%",
                        height: 80,
                        justifyContent: "center",
                        alignItems: "center",
                      }}
                    >
                      <View
                        style={{
                          width: "85%",
                          height: "85%",
                          borderRadius: 13,
                          backgroundColor: COLORS.light,
                          justifyContent: "center",
                          alignItems: "center",
                        }}
                      >
                        <Text>07/04/2023</Text>
                      </View>
                    </View>
                    <View
                      style={{
                        width: "100%",
                        height: 80,
                        justifyContent: "center",
                        alignItems: "center",
                      }}
                    >
                      <View
                        style={{
                          width: "85%",
                          height: "85%",
                          borderRadius: 13,
                          backgroundColor: COLORS.light,
                          justifyContent: "center",
                          alignItems: "center",
                        }}
                      >
                        <Icon name="add" size={30} color={COLORS.grey} />
                      </View>
                    </View>
                  </View>
                </View>
              </View>
            </View>
          </View>
        </ScrollView>
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
      >
        <Text
          style={{
            fontFamily: theme.FontMain,
            fontSize: 19,
            color: COLORS.white,
          }}
        >
          Đăng tin
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default PostEndScreen;
