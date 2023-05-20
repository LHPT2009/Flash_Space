import { useContext, useEffect, useState } from "react";
import { View, Text, Image, ScrollView } from "react-native";
import FlashMessage from "react-native-flash-message";
import axios from "axios";
import AsyncStorage from "@react-native-async-storage/async-storage";
import IpAddress from "../consts/variable";
import COLORS from "../consts/colors";
import theme from "../styles/theme";
import { TouchableOpacity } from "react-native";
import Alert from "../components/Alert";
import { ListTimeSlotContext } from "../context/ListTimeSlotContext";

const BookScreen = ({ navigation, route }) => {
  const item = route.params;
  console.log(item);
  const [openAddcomment, setOpenAddcomment] = useState(false);
  const [user, setUser] = useState({});
  const { timeslots } = useContext(ListTimeSlotContext);
  console.log(timeslots);
  const closeAddComment = (result) => {
    setOpenAddcomment(result);
  };

  useEffect(async () => {
    const idAccount = await AsyncStorage.getItem("idAccount");
    await axios
      .get("http://" + IpAddress + ":8000/account/" + idAccount)
      .then(async (response) => {
        const result = response.data;
        console.log(result);
        setUser(result);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  // const addorder = async (e) => {
  //   e.preventDefault();
  //   const idaccount = user._id ;
  //   const total = item.total;
  //   const add = await axios.post(
  //     "http://" + IpAddress + ":8000/bookingroom",
  //     {idaccount: idaccount,timeslots: timeslots,total: total}
  //    ).then((item) => {
  //     alert("da xong!!!")
  //     navigator("/")
  //    })
  // }

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
        <Alert
          closeAdd={closeAddComment}
          idaccount={user._id}
          total={item.total}
          timeslots={timeslots}
          navigation={navigation}
        />
      ) : (
        <View />
      )}
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
                    {item.subject}
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
                    Địa chỉ
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
                      {item.address}
                    </Text>
                  </View>
                </View>

                {timeslots.map((item) => {
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
                            {item.date}
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
                              {item.starttime}
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
                              {item.endtime}
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
                    color: "#F7C056",
                    fontSize: 18,
                    paddingLeft: 10,
                  }}
                >
                  Xác nhận gửi yêu cầu
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
