import { useEffect, useState } from "react";
import { View, Text, Image, ScrollView } from "react-native";
import Icon from "react-native-vector-icons/MaterialIcons";
import COLORS from "../consts/colors";
import theme from "../styles/theme";
import { TouchableOpacity } from "react-native";
import axios from "axios";
import AsyncStorage from "@react-native-async-storage/async-storage";
import IpAddress from "../consts/variable";
import Addcomment from "../components/Addcomment";

const DetailBookScreen = ({ navigation, route }) => {
  const item = route.params;
  console.log(item);
  const [detail, setDetail] = useState([]);
  const [openAddcomment, setOpenAddcomment] = useState(false);
  const [user, setUser] = useState({});
  console.log(detail);
  const closeAddComment = (result) => {
    setOpenAddcomment(result);
  };
  useEffect(() => {
    getDetailBooking();
    getUser();
  }, []);
  const getDetailBooking = async () => {
    await axios
      .get("http://" + IpAddress + ":8000/bookingschedule/" + item._id)
      .then((res) => {
        setDetail(res.data);
      });
  };
  const getUser = async () => {
    const idAccount = await AsyncStorage.getItem("idAccount");
    await axios
      .get("http://" + IpAddress + ":8000/account/" + idAccount)
      .then(async (response) => {
        const result = response.data;
        setUser(result);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  if (detail.length != 0) {
    return (
      <View
        style={{
          width: "100%",
          backgroundColor: theme.PRIMARY_BG_COLOR,
        }}
      >
        {openAddcomment ? (
          <Addcomment
            closeAdd={closeAddComment}
            idroom={detail[0].idworkinghours.idroom._id}
            idbookingroom={detail[0].idbookingroom}
            navigation={navigation}
          />
        ) : (
          <View />
        )}
        {/* <FlashMessage position="top" /> */}
        <View style={{ width: "100%", alignItems: "center" }}>
          <View
            style={{
              width: "100%",
              height: 90,
              flexDirection: "row",
              justifyContent: "space-between",
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
                color={"white"}
                onPress={navigation.goBack}
              />
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
                  color: COLORS.white,
                  fontSize: 25,
                }}
              >
                {detail[0].idworkinghours.idroom.subject}
              </Text>
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
            style={{
              width: "100%",
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
                  width: "80%",
                }}
              >
                {detail.map((item) => {
                  return (
                    <View
                      style={{
                        width: "100%",
                        height: 70,
                        flexDirection: "row",
                        marginBottom: 20,
                      }}
                    >
                      <View
                        style={{
                          width: "30%",
                          height: "100%",
                          borderRightColor: COLORS.white,
                          borderRightWidth: 2,
                        }}
                      >
                        <View
                          style={{
                            width: "100%",
                            height: "40%",
                            justifyContent: "flex-end",
                            alignItems: "center",
                          }}
                        >
                          <Text
                            style={{
                              fontFamily: theme.FontMain,
                              color: COLORS.white,
                              fontSize: 16,
                            }}
                          >
                            {item.idworkinghours.idtimeslot.starttime}
                          </Text>
                        </View>
                        <View
                          style={{
                            width: "100%",
                            height: "20%",
                            justifyContent: "center",
                            alignItems: "center",
                          }}
                        >
                          <Text
                            style={{
                              fontFamily: theme.FontMain,
                              color: COLORS.white,
                              fontSize: 16,
                            }}
                          >
                            |
                          </Text>
                        </View>
                        <View
                          style={{
                            width: "100%",
                            height: "40%",
                            justifyContent: "flex-start",
                            alignItems: "center",
                          }}
                        >
                          <Text
                            style={{
                              fontFamily: theme.FontMain,
                              color: COLORS.white,
                              fontSize: 16,
                            }}
                          >
                            {item.idworkinghours.idtimeslot.endtime}
                          </Text>
                        </View>
                      </View>
                      <View
                        style={{
                          width: "70%",
                          height: "100%",
                        }}
                      >
                        <View
                          style={{
                            width: "100%",
                            height: "50%",
                            justifyContent: "center",
                            alignItems: "flex-start",
                          }}
                        >
                          <Text
                            style={{
                              fontFamily: theme.FontMain,
                              color: COLORS.white,
                              fontSize: 20,
                              paddingLeft: 20,
                            }}
                          >
                            {item.idworkinghours.date}{" "}
                          </Text>
                        </View>
                      </View>
                    </View>
                  );
                })}
              </View>
              <View
                style={{
                  width: "90%",
                  height: 250,
                  marginVertical: 20,
                  alignItems: "center",
                  backgroundColor: COLORS.white,
                  borderRadius: 13,
                }}
              >
                <View
                  style={{
                    width: "85%",
                    height: "100%",
                  }}
                >
                  <View
                    style={{
                      width: "100%",
                      alignItems: "center",
                      paddingTop: 10,
                    }}
                  >
                    <Text
                      style={{
                        fontFamily: theme.FontMain,
                        color: COLORS.grey,
                        fontSize: 18,
                      }}
                    >
                      Thông tin liên hệ
                    </Text>
                  </View>
                  <View
                    style={{
                      width: "100%",
                      flexDirection: "row",
                      justifyContent: "space-between",
                      paddingTop: 10,
                      paddingBottom: 10,
                    }}
                  >
                    <Text
                      style={{
                        fontFamily: theme.FontMain,
                        color: COLORS.grey,
                        fontSize: 18,
                      }}
                    >
                      Họ và tên
                    </Text>
                    <View
                      style={{
                        width: "50%",
                      }}
                    >
                      <Text
                        style={{
                          fontFamily: theme.FontMain,
                          color: COLORS.dark,
                          fontSize: 16,
                        }}
                      >
                        {user.firstname + " " + user.lastname}
                      </Text>
                    </View>
                  </View>
                  <View
                    style={{
                      width: "100%",
                      flexDirection: "row",
                      justifyContent: "space-between",
                      paddingBottom: 20,
                    }}
                  >
                    <Text
                      style={{
                        fontFamily: theme.FontMain,
                        color: COLORS.grey,
                        fontSize: 18,
                      }}
                    >
                      Số điện thoại
                    </Text>
                    <View
                      style={{
                        width: "50%",
                      }}
                    >
                      <Text
                        style={{
                          fontFamily: theme.FontMain,
                          color: COLORS.dark,
                          fontSize: 16,
                        }}
                      >
                        {user.phonenumber}
                      </Text>
                    </View>
                  </View>
                  <TouchableOpacity
                    style={{
                      width: "100%",
                      height: 60,
                      backgroundColor: theme.PRIMARY_BG_COLOR,
                      borderRadius: 8,
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
                      Đánh giá phòng
                    </Text>
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          </ScrollView>

          <View
            style={{
              width: "100%",
              height: "15%",
              flexDirection: "row",
              backgroundColor: COLORS.white,
              borderTopLeftRadius: 13,
              borderTopRightRadius: 13,
            }}
          >
            <View style={{ width: "70%", height: "100%" }}>
              <View
                style={{
                  width: "100%",
                  height: "50%",
                  flexDirection: "row",
                  alignItems: "center",
                }}
              >
                <Text
                  style={{
                    fontFamily: theme.FontMain,
                    color: COLORS.grey,
                    fontSize: 18,
                    paddingLeft: 20,
                  }}
                >
                  Tình trạng:
                </Text>
                <Text
                  style={{
                    fontFamily: theme.FontMain,
                    color: "#46AC5E",
                    fontSize: 18,
                    paddingLeft: 10,
                  }}
                >
                  Đang thuê
                </Text>
              </View>
              <View
                style={{
                  width: "100%",
                  height: "50%",
                  flexDirection: "row",
                }}
              >
                <Text
                  style={{
                    fontFamily: theme.FontMain,
                    color: COLORS.grey,
                    fontSize: 18,
                    paddingLeft: 20,
                  }}
                >
                  Tổng tiền:
                </Text>
                <Text
                  style={{
                    fontFamily: theme.FontMain,
                    color: "#00cc00",
                    fontSize: 18,
                    paddingLeft: 10,
                  }}
                >
                  {item.total}
                </Text>
                <Text
                  style={{
                    fontFamily: theme.FontMain,
                    color: COLORS.dark,
                    fontSize: 18,
                    paddingLeft: 10,
                  }}
                >
                  VNĐ
                </Text>
              </View>
            </View>
            <View
              style={{
                width: "30%",
                height: "100%",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <TouchableOpacity
                style={{
                  width: "70%",
                  height: "70%",
                  backgroundColor: "#ff5050",
                  borderRadius: 8,
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Text
                  style={{
                    fontFamily: theme.FontMain,
                    color: COLORS.white,
                    fontSize: 20,
                  }}
                >
                  Hủy
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </View>
    );
  } else {
    return <View style={{ width: "100%", height: "100%" }} />;
  }
};
export default DetailBookScreen;
