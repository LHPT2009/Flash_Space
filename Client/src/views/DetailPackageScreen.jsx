import { useEffect, useState } from "react";
import { View, Text, Image, ScrollView } from "react-native";
import COLORS from "../consts/colors";
import theme from "../styles/theme";
import { TouchableOpacity } from "react-native";
import axios from "axios";
import AsyncStorage from "@react-native-async-storage/async-storage";
import IpAddress from "../consts/variable";
import AlertBuyPackage from "../components/AlertBuyPackage";

const DetailPackageScreen = ({ navigation, route }) => {
  const item = route.params;
  console.log(item);
  const [detail, setDetail] = useState([]);
  const [openAlertBuyPackage, setOpenAlertBuyPackage] = useState(false);
  const [user, setUser] = useState({});
  console.log(detail);
  const closeAlertBuyPackage = (result) => {
    setOpenAlertBuyPackage(result);
  };
  useEffect(() => {
    // getDetailBooking();
    getUser();
  }, []);
  const getDetailBooking = async () => {
    await axios
      .get("http://" + IpAddress + ":8000/bookingschedule/" + item._id)
      .then((res) => {
        setDetail(res.data);
      });
  };
  const date = new Date();
  const dateformat = (date) => {
    const getdate = new Date(date);
    const day =
      getdate.getDate() < 10 ? `0${getdate.getDate()}` : getdate.getDate();
    const month =
      getdate.getMonth() < 10
        ? `0${getdate.getMonth() + 1}`
        : getdate.getMonth() + 1;
    const year = getdate.getFullYear();
    return day + "/" + month + "/" + year;
  };
  const getDuration = () => {
    const date = new Date().getTime();
    const dateDuration = date + 2592000000;
    return dateformat(dateDuration);
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
      {openAlertBuyPackage ? (
        <AlertBuyPackage
          closeAdd={closeAlertBuyPackage}
          idaccount={user._id}
          idservicepack={item._id}
          duration={item.duration}
          amount={item.amount}
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
                    Hóa đơn mua gói
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
                    {item.name}
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
                    backgroundColor: COLORS.light,
                    marginBottom: 5,
                    borderRadius: 8,
                    padding: 5,
                  }}
                >
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
                        Ngày bắt đầu
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
                          {dateformat(date)}
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
                        Ngày hết hạn
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
                          {getDuration()}
                        </Text>
                      </View>
                    </View>
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
                    Nội dung
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
                      {item.content}
                    </Text>
                  </View>
                </View>
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
            <View style={{ width: "75%" }}>
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
                  Chưa mua
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
                  {item.price}
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
                onPress={() => setOpenAlertBuyPackage(true)}
              >
                <Text
                  style={{
                    fontFamily: theme.FontMain,
                    color: COLORS.white,
                    fontSize: 20,
                  }}
                >
                  Đặt mua
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
};
export default DetailPackageScreen;
