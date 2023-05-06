import { useContext, useEffect } from "react";
import { ScrollView, View, Text, TouchableOpacity, Image } from "react-native";
import Icon from "react-native-vector-icons/MaterialIcons";
import COLORS from "../consts/colors";
import theme from "../styles/theme";
import { InformationAddRoomContext } from "../context/InformationAddRoom";

const PostImageScreen = ({ navigation, route }) => {
  const { informations } = useContext(InformationAddRoomContext);
  const result = route.params;
  if (result != undefined) {
    image = result.multiImage.image;
    image1 = result.multiImage.image1;
    image2 = result.multiImage.image2;
    image3 = result.multiImage.image3;
  } else {
    Object.assign(informations, {
      multiImage: { image: "", image1: "", image2: "", image3: "" },
    });
  }

  console.log(JSON.stringify(informations));
  let image = "";
  let image1 = "";
  let image2 = "";
  let image3 = "";
  if (informations.multiImage.image != undefined) {
    image = informations.multiImage.image;
  }
  if (informations.multiImage.image1 != undefined) {
    image1 = informations.multiImage.image1;
  }
  if (informations.multiImage.image2 != undefined) {
    image2 = informations.multiImage.image2;
  }
  if (informations.multiImage.image3 != undefined) {
    image3 = informations.multiImage.image3;
  }

  return (
    <View style={{ width: "100%", height: "100%" }}>
      <View
        style={{ width: "100%", height: "90%", backgroundColor: COLORS.light }}
      >
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
              Bước 3: Chọn hình ảnh
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
                onPress={() => navigation.navigate("PostScreen")}
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
                <Text style={{ color: "white" }}>2</Text>
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
                <Text style={{ color: "white" }}>3</Text>
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
                  Hình ảnh
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
                      flexDirection: "row",
                      alignItems: "center",
                    }}
                  >
                    <View
                      style={{
                        width: "50%",
                        height: 150,
                        justifyContent: "center",
                        alignItems: "center",
                      }}
                    >
                      <TouchableOpacity
                        style={{
                          width: "85%",
                          height: "85%",
                          borderRadius: 13,
                          backgroundColor: COLORS.light,
                          justifyContent: "center",
                          alignItems: "center",
                        }}
                        onPress={() =>
                          navigation.navigate("TakephotoScreenRoom")
                        }
                      >
                        {image ? (
                          <Image
                            source={{ uri: image }}
                            style={{
                              flex: 5,
                              borderRadius: 20,
                              flexDirection: "column",
                              justifyContent: "space-between",
                              width: "100%",
                              height: "100%",
                            }}
                          />
                        ) : (
                          <Icon name="add" size={30} color={COLORS.grey} />
                        )}
                      </TouchableOpacity>
                    </View>
                    <View
                      style={{
                        width: "50%",
                        height: 150,
                        justifyContent: "center",
                        alignItems: "center",
                      }}
                    >
                      <TouchableOpacity
                        style={{
                          width: "85%",
                          height: "85%",
                          borderRadius: 13,
                          backgroundColor: COLORS.light,
                          justifyContent: "center",
                          alignItems: "center",
                        }}
                        onPress={() =>
                          navigation.navigate("TakephotoScreenRoom1")
                        }
                      >
                        {image1 ? (
                          <Image
                            source={{ uri: image1 }}
                            style={{
                              flex: 5,
                              borderRadius: 20,
                              flexDirection: "column",
                              justifyContent: "space-between",
                              width: "100%",
                              height: "100%",
                            }}
                          />
                        ) : (
                          <Icon name="add" size={30} color={COLORS.grey} />
                        )}
                      </TouchableOpacity>
                    </View>
                  </View>
                  <View
                    style={{
                      width: "100%",
                      flexDirection: "row",
                      alignItems: "center",
                    }}
                  >
                    <View
                      style={{
                        width: "50%",
                        height: 150,
                        justifyContent: "center",
                        alignItems: "center",
                      }}
                    >
                      <TouchableOpacity
                        style={{
                          width: "85%",
                          height: "85%",
                          borderRadius: 13,
                          backgroundColor: COLORS.light,
                          justifyContent: "center",
                          alignItems: "center",
                        }}
                        onPress={() =>
                          navigation.navigate("TakephotoScreenRoom2")
                        }
                      >
                        {image2 ? (
                          <Image
                            source={{ uri: image2 }}
                            style={{
                              flex: 5,
                              borderRadius: 20,
                              flexDirection: "column",
                              justifyContent: "space-between",
                              width: "100%",
                              height: "100%",
                            }}
                          />
                        ) : (
                          <Icon name="add" size={30} color={COLORS.grey} />
                        )}
                      </TouchableOpacity>
                    </View>
                    <View
                      style={{
                        width: "50%",
                        height: 150,
                        justifyContent: "center",
                        alignItems: "center",
                      }}
                    >
                      <TouchableOpacity
                        style={{
                          width: "85%",
                          height: "85%",
                          borderRadius: 13,
                          backgroundColor: COLORS.light,
                          justifyContent: "center",
                          alignItems: "center",
                        }}
                        onPress={() =>
                          navigation.navigate("TakephotoScreenRoom3")
                        }
                      >
                        {image3 ? (
                          <Image
                            source={{ uri: image3 }}
                            style={{
                              flex: 5,
                              borderRadius: 20,
                              flexDirection: "column",
                              justifyContent: "space-between",
                              width: "100%",
                              height: "100%",
                            }}
                          />
                        ) : (
                          <Icon name="add" size={30} color={COLORS.grey} />
                        )}
                      </TouchableOpacity>
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

export default PostImageScreen;
