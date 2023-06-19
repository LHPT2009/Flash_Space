import { useEffect, useState, useContext } from "react";
import {
  View,
  Text,
  Image,
  StatusBar,
  ScrollView,
  FlatList,
  Dimensions,
  Pressable,
  TouchableOpacity,
} from "react-native";
import COLORS from "../consts/colors";
import theme from "../styles/theme";
import FlashMessage from "react-native-flash-message";
import IpAddress from "../consts/variable";
import axios from "axios";
const { width } = Dimensions.get("screen");
import { InformationAddRoomContext } from "../context/InformationAddRoom";

const CheckPostScreen = ({ navigation }) => {
  const [roomData, setRoomData] = useState([]);

  useEffect(() => {
    loadData();
  }, []);

  const loadData = async () => {
    await axios
      .get(
        "http://" +
          IpAddress +
          ":8000/servicepackinuse/getPosts/6442af166a9a07710faa9651"
      )
      .then((res) => {
        setRoomData(res.data);
      });
  };

  const CardGrid = ({ house }) => {
    console.log(house);
    const { informations } = useContext(InformationAddRoomContext);
    const dateformat = (date) => {
      const getdate = new Date(date);
      const day =
        getdate.getDate() < 10 ? `0${getdate.getDate()}` : getdate.getDate();
      const month =
        getdate.getMonth() < 10 ? `0${getdate.getMonth()}` : getdate.getMonth();
      const year = getdate.getFullYear();
      return day + "/" + month + "/" + year;
    };
    return (
      <Pressable activeOpacity={0.8}>
        <View
          style={{
            height: 260,
            width: width,
            alignItems: "center",
          }}
        >
          <View
            style={{
              width: "90%",
              height: "90%",
              backgroundColor: COLORS.white,
              borderRadius: 20,
              elevation: 10,
            }}
          >
            <View
              style={{
                flexDirection: "row",
                width: "100%",
                height: "20%",
                alignItems: "center",
              }}
            >
              <Text
                style={{
                  marginLeft: 15,
                  fontSize: 15,
                  fontFamily: theme.FontMain,
                }}
              >
                Tên gói:
              </Text>
              <Text
                style={{
                  fontSize: 15,
                  fontFamily: theme.FontMain,
                }}
              >
                {"  "}
                {house.idservicepack.name}
              </Text>
            </View>
            <View
              style={{
                flexDirection: "row",
                width: "100%",
                height: "20%",
                alignItems: "center",
              }}
            >
              <Text
                style={{
                  marginLeft: 15,
                  fontSize: 15,
                  fontFamily: theme.FontMain,
                }}
              >
                Thời gian bắt đầu:
              </Text>
              <Text
                style={{
                  color: theme.PRIMARY_BG_COLOR,
                  fontSize: 14,
                  fontFamily: theme.FontMain,
                }}
              >
                {"  "}
                {dateformat(house.starttime)}
              </Text>
            </View>
            <View
              style={{
                flexDirection: "row",
                width: "100%",
                height: "20%",
                alignItems: "center",
              }}
            >
              <Text
                style={{
                  marginLeft: 15,
                  fontSize: 15,
                  fontFamily: theme.FontMain,
                }}
              >
                Thời gian hết hạn:
              </Text>
              <Text
                style={{
                  color: theme.PRIMARY_BG_COLOR,
                  fontSize: 14,
                  fontFamily: theme.FontMain,
                }}
              >
                {"  "}
                {dateformat(house.endtime)}
              </Text>
            </View>
            <View
              style={{
                flexDirection: "row",
                width: "100%",
                height: "20%",
                alignItems: "center",
              }}
            >
              <Text
                style={{
                  marginLeft: 15,
                  fontSize: 15,
                }}
              >
                Số lượng bài đăng:
              </Text>
              <Text
                style={{
                  fontSize: 15,
                  fontWeight: "bold",
                }}
              >
                {"  "}
                {house.post}
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
              {house.post == 0 ? (
                <TouchableOpacity
                  style={{
                    width: "70%",
                    height: "75%",
                    backgroundColor: COLORS.gray,
                    justifyContent: "center",
                    alignItems: "center",
                    borderRadius: 13,
                  }}
                >
                  <Text
                    style={{
                      color: COLORS.white,
                      fontSize: 14,
                      fontFamily: theme.FontMain,
                    }}
                  >
                    Dùng
                  </Text>
                </TouchableOpacity>
              ) : (
                <TouchableOpacity
                  style={{
                    width: "70%",
                    height: "75%",
                    backgroundColor: theme.PRIMARY_BG_COLOR,
                    justifyContent: "center",
                    alignItems: "center",
                    borderRadius: 13,
                  }}
                  onPress={() => {
                    const content = { idPackage: house.idservicepack };
                    Object.assign(informations, content);
                    navigation.navigate("PostScreen");
                  }}
                >
                  <Text
                    style={{
                      color: COLORS.white,
                      fontSize: 14,
                      fontFamily: theme.FontMain,
                    }}
                  >
                    Dùng
                  </Text>
                </TouchableOpacity>
              )}
            </View>
          </View>
        </View>
      </Pressable>
    );
  };

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
          paddingTop: 30,
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

      {roomData.length == 0 ? (
        <View style={{ width: "100%", height: "100%" }}>
          <View
            style={{
              width: "100%",
              height: "90%",
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
                    backgroundColor: theme.PRIMARY_BG_COLOR,
                    borderRadius: 13,
                  }}
                  onPress={() => navigation.navigate("PackageScreen")}
                >
                  {/* <Image
                    source={require("../../assets/images/buy.gif")}
                    style={{
                      width: "80%",
                      height: "80%",
                      resizeMode: "repeat",
                    }}
                  /> */}
                  <Text
                    style={{
                      fontFamily: theme.FontMain,
                      fontSize: 25,
                      color: COLORS.white,
                    }}
                  >
                    Mua gói dịch vụ tại đây
                  </Text>
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
        </View>
      ) : (
        <View style={{ width: "100%", height: "100%" }}>
          <View
            style={{
              width: "100%",
              height: "100%",
              backgroundColor: COLORS.light,
            }}
          >
            <View style={{ width: "100%", height: "100%" }}>
              <View
                style={{
                  width: "100%",
                  height: "80%",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <ScrollView showsVerticalScrollIndicator={false}>
                  <FlatList
                    key={"_*"}
                    showsHorizontalScrollIndicator={false}
                    data={roomData}
                    style={{
                      flexDirection: "row",
                      width: width,
                      paddingVertical: 30,
                    }}
                    renderItem={({ item }) => <CardGrid house={item} />}
                    keyExtractor={(item) => "_*" + item.id}
                    numColumns={2}
                    scrollEnabled={false}
                  />
                </ScrollView>
              </View>
              <View
                style={{
                  width: "100%",
                  height: "10%",
                  justifyContent: "center",
                  alignItems: "center",
                  elevation: 10,
                }}
              >
                <TouchableOpacity
                  style={{
                    width: "60%",
                    height: 60,
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "center",
                    elevation: 10,
                    backgroundColor: theme.PRIMARY_BG_COLOR,
                    borderRadius: 13,
                  }}
                  onPress={() => navigation.navigate("PackageScreen")}
                >
                  {/* <Image
                    source={require("../../assets/images/buy.gif")}
                    style={{
                      width: "80%",
                      height: "80%",
                      resizeMode: "repeat",
                    }}
                  /> */}
                  <Text
                    style={{
                      fontFamily: theme.FontMain,
                      fontSize: 25,
                      color: COLORS.white,
                    }}
                  >
                    Mua gói dịch vụ
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </View>
      )}
    </View>
  );
};

export default CheckPostScreen;
