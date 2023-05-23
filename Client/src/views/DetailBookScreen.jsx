import { useEffect, useState } from "react";
import { View, Text, Image, ScrollView } from "react-native";
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
          height: "100%",
          justifyContent: "center",
          backgroundColor: theme.PRIMARY_BG_COLOR,
          alignItems: "center",
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
                marginTop: 20,
                alignItems: "center",
              }}
            >
              <View style={{ width: "85%", height: "100%" }}>
                <View style={{ width: "100%" }}>
                  <View
                    style={{
                      width: "100%",
                    }}
                  >
                    <Text style={{ fontSize: 20, fontWeight: "bold" }}>
                      Phiếu thuê phòng
                    </Text>
                  </View>
                  <View
                    style={{
                      width: "100%",
                      justifyContent: "center",
                      borderBottomWidth: 0.5,
                      borderColor: COLORS.grey,
                      paddingBottom: 10,
                    }}
                  >
                    <Text
                      style={{
                        fontFamily: theme.FontMain,
                        color: COLORS.grey,
                        fontSize: 25,
                      }}
                    >
                      {detail[0].idworkinghours.idroom.subject}
                    </Text>
                  </View>
                </View>
                <ScrollView>
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

                  {detail.map((item) => {
                    return (
                      <View
                        style={{
                          width: "100%",
                          backgroundColor: COLORS.light,
                          marginBottom: 5,
                          borderRadius: 8,
                          padding: 5,
                        }}
                      >
                        <View
                          style={{
                            width: "100%",
                            flexDirection: "row",
                            justifyContent: "space-between",
                          }}
                        >
                          <Text
                            style={{
                              fontFamily: theme.FontMain,
                              color: COLORS.grey,
                              fontSize: 18,
                            }}
                          >
                            Ngày
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
                              {item.idworkinghours.date}
                            </Text>
                          </View>
                        </View>
                        <View style={{ width: "100%", flexDirection: "row" }}>
                          <View
                            style={{
                              width: "50%",
                            }}
                          >
                            <Text
                              style={{
                                fontFamily: theme.FontMain,
                                color: COLORS.grey,
                                fontSize: 18,
                              }}
                            >
                              Giờ bắt đầu
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
                                {item.idworkinghours.idtimeslot.starttime}
                              </Text>
                            </View>
                          </View>
                          <View
                            style={{
                              width: "50%",
                            }}
                          >
                            <Text
                              style={{
                                fontFamily: theme.FontMain,
                                color: COLORS.grey,
                                fontSize: 18,
                              }}
                            >
                              Giờ kết thúc
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
                                {item.idworkinghours.idtimeslot.endtime}
                              </Text>
                            </View>
                          </View>
                        </View>
                      </View>
                    );
                  })}
                </ScrollView>
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
                    height: "20%",
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
                    height: "25%",
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
                    Bình luận phòng
                  </Text>
                </TouchableOpacity>
              </View>
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
