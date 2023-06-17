import { useState, useEffect } from "react";
import {
  View,
  Text,
  Image,
  ScrollView,
  FlatList,
  TouchableOpacity,
  TextInput,
  Pressable,
} from "react-native";
import Icon from "react-native-vector-icons/MaterialIcons";
import axios from "axios";
import AsyncStorage from "@react-native-async-storage/async-storage";
import IpAddress from "../consts/variable";
import COLORS from "../consts/colors";
import theme from "../styles/theme";

const HistoryScreen = ({ navigation }) => {
  const DATA = [
    {
      id: "bd7acbea-c1b1-46c2-aed5-3ad53abb28ba",
      name: "Phòng ngủ",
      startday: "19/03/2023",
      endday: "23/03/2023",
      location: "50/14 Trương văn thàng, p.Hiệp Phú, tp.Thủ Đức",
      status: 0,
    },
    {
      id: "3ac68afc-c605-48d3-a4f8-fbd91aa97f63",
      name: "Phòng ăn",
      startday: "19/03/2023",
      endday: "23/03/2023",
      location: "50/14 Trương văn thàng, p.Hiệp Phú, tp.Thủ Đức",
      status: 1,
    },
    {
      id: "58694a0f-3da1-471f-bd96-145571e29d72",
      name: "Phòng sự kiện",
      startday: "19/03/2023",
      endday: "23/03/2023",
      location: "50/14 Trương văn thàng, p.Hiệp Phú, tp.Thủ Đức",
      status: 0,
    },
    {
      id: "58694a0f-3da1-471f-bd96-145571e29d73",
      name: "Phòng khách",
      startday: "19/03/2023",
      endday: "23/03/2023",
      location: "50/14 Trương văn thàng, p.Hiệp Phú, tp.Thủ Đức",
      status: 1,
    },
    {
      id: "58694a0f-3da1-47f-bd96-145571e29d72",
      name: "Phòng bếp",
      startday: "19/03/2023",
      endday: "23/03/2023",
      location: "50/14 Trương văn thàng, p.Hiệp Phú, tp.Thủ Đức",
      status: 0,
    },
    {
      id: "58694a0f-3da1-f-bd96-145571e29d72",
      name: "Phòng vệ sinh",
      startday: "19/03/2023",
      endday: "23/03/2023",
      location: "50/14 Trương văn thàng, p.Hiệp Phú, tp.Thủ Đức",
      status: 0,
    },
  ];
  const [arr, setArr] = useState([]);
  const loaddata = async () => {
    const idAccount = await AsyncStorage.getItem("idAccount");
    const data = await axios
      .get("http://" + IpAddress + ":8000/bookingroom/" + idAccount)
      .then((res) => {
        console.log(res.data);
        setArr(res.data);
      });
  };

  useEffect(() => {
    loaddata();
  }, []);

  const Card = ({ house }) => {
    return (
      <TouchableOpacity
        style={{
          width: "100%",
          height: 130,
          backgroundColor: COLORS.white,
          flexDirection: "row",
          borderRadius: 13,
          elevation: 5,
          marginBottom: 20,
        }}
        onPress={() => navigation.navigate("DetailBookScreen", house)}
      >
        <View
          style={{
            width: "10%",
            borderBottomLeftRadius: 10,
            borderTopLeftRadius: 10,
            backgroundColor: "#b3ffb3",
          }}
        ></View>
        <View
          style={{
            width: "59%",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <View
            style={{
              width: "90%",
            }}
          >
            <View
              style={{
                width: "90%",
              }}
            >
              <Text
                style={{
                  color: COLORS.dark,
                  fontFamily: theme.FontMain,
                }}
              >
                Mã hóa đơn: {house._id}
              </Text>
            </View>

            <View
              style={{
                width: "90%",
                flexDirection: "row",
              }}
            >
              <Text
                style={{
                  color: COLORS.dark,
                  fontFamily: theme.FontMain,
                }}
              >
                Ngày thuê:{" "}
              </Text>
              <Text
                style={{
                  color: "#D93C57",
                  fontFamily: theme.FontMain,
                }}
              >
                {house.date}
              </Text>
            </View>
            <View
              style={{
                width: "90%",
                flexDirection: "row",
              }}
            >
              <Text
                style={{
                  color: COLORS.dark,
                  fontFamily: theme.FontMain,
                }}
              >
                Tổng tiền:{" "}
              </Text>
              <Text
                style={{
                  color: "#D93C57",
                  fontFamily: theme.FontMain,
                }}
              >
                {house.total}
              </Text>
            </View>
          </View>
        </View>
        <Image
          style={{ width: "1%", height: "100%" }}
          source={require("../../assets/images/dottedLine.png")}
        />
        <View
          style={{
            width: "30%",
            borderBottomRightRadius: 10,
            borderTopRightRadius: 10,
            backgroundColor: COLORS.white,
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <View
            style={{
              width: "100%",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Text style={{ color: COLORS.dark, fontFamily: theme.FontMain }}>
              Tình trạng
            </Text>
            {/* {item.status == 0 ? (
              <Text style={{ color: "#46AC5E", fontFamily: theme.FontMain }}>
                Đang thuê
              </Text>
            ) : (
              <Text style={{ color: "#D93C57", fontFamily: theme.FontMain }}>
                Hết hạn
              </Text>
            )} */}
          </View>
        </View>
      </TouchableOpacity>
    );
  };

  return (
    <View
      style={{ backgroundColor: COLORS.light, width: "100%", height: "100%" }}
    >
      <View
        style={{
          width: "100%",
          height: 80,
          backgroundColor: COLORS.white,
          flexDirection: "row",
          paddingTop: 35,
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
              Lịch sử thuê phòng
            </Text>
          </View>
          <View style={{ width: "100%", height: "40%", alignItems: "center" }}>
            <Text
              style={{
                fontSize: 15,
                fontFamily: theme.FontMain,
                color: COLORS.grey,
              }}
            ></Text>
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
      <View
        style={{
          width: "100%",
          height: 60,
          justifyContent: "flex-start",
          alignItems: "center",
          backgroundColor: COLORS.white,
        }}
      >
        <View
          style={{
            width: "90%",
            height: 50,
            backgroundColor: COLORS.light,
            flexDirection: "row",
            alignItems: "center",
            paddingHorizontal: 20,
            borderRadius: 12,
          }}
        >
          <Icon name="search" color={COLORS.grey} size={25} />
          <TextInput
            style={{ fontFamily: theme.FontMain }}
            placeholder="Tìm theo ngày"
          />
        </View>
      </View>

      <ScrollView
        showsHorizontalScrollIndicator={false}
        showsVerticalScrollIndicator={false}
      >
        <View style={{ width: "100%", marginTop: 20 }}>
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
              <FlatList
                key={"_"}
                scrollEnabled={false}
                showsHorizontalScrollIndicator={false}
                data={arr}
                keyExtractor={(item) => item._id}
                renderItem={({ item }) => (
                  <Card navigation={navigation} house={item} />
                )}
              />
            </View>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default HistoryScreen;
