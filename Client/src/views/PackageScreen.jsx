import {
  View,
  Image,
  ScrollView,
  FlatList,
  Pressable,
  Text,
  Dimensions,
  TouchableOpacity,
} from "react-native";
import axios from "axios";
import IpAddress from "../consts/variable";
import COLORS from "../consts/colors";
import theme from "../styles/theme";
import { useEffect, useState } from "react";
const { width } = Dimensions.get("screen");

const PackageScreen = ({ navigation }) => {
  const [roomData, setRoomData] = useState([]);

  useEffect(() => {
    loadData();
  }, []);

  const loadData = async () => {
    await axios
      .get("http://" + IpAddress + ":8000/servicepack/")
      .then((res) => {
        setRoomData(res.data);
      });
  };
  // const roomData = [
  //   { id: "1", name: "aaa", price: 1000, time: "1thang" },
  //   { id: "2", name: "baba", price: 1000, time: "1thang" },
  //   { id: "3", name: "caacaca", price: 1000, time: "1thang" },
  //   { id: "4", name: "aaa", price: 1000, time: "1thang" },
  //   { id: "5", name: "baba", price: 1000, time: "1thang" },
  //   { id: "6", name: "caacaca", price: 1000, time: "1thang" },
  //   { id: "7", name: "aaa", price: 1000, time: "1thang" },
  //   { id: "8", name: "baba", price: 1000, time: "1thang" },
  //   { id: "9", name: "caacaca", price: 1000, time: "1thang" },
  // ];
  const CardGrid = ({ house }) => {
    return (
      <Pressable activeOpacity={0.8}>
        <View
          style={{
            height: 260,
            width: width / 2,
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
                }}
              >
                Tên gói:
              </Text>
              <Text
                style={{
                  fontSize: 15,
                  fontWeight: "bold",
                }}
              >
                {"  "}
                {house.name}
              </Text>
            </View>
            {/* <View style={{ width: "100%", height: "30%" }}>
              <Text
                style={{
                  fontSize: 15,
                  fontWeight: "bold",
                }}
              >
                Nội dung:
              </Text>
              <Text
                style={{
                  fontSize: 15,
                  fontWeight: "bold",
                  overflow: "hidden",
                }}
              >
                {"  "}
                {house.content}
              </Text>
            </View> */}
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
                Giá:
              </Text>
              <Text
                style={{
                  color: theme.PRIMARY_BG_COLOR,
                  fontSize: 14,
                  fontFamily: theme.FontMain,
                }}
              >
                {"  "}
                {house.price} VNĐ
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
                Thời hạn:
              </Text>
              <Text
                style={{
                  fontSize: 15,
                  fontWeight: "bold",
                }}
              >
                {"  "}
                {house.duration}
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
                {house.amount}
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
              <TouchableOpacity
                style={{
                  width: "70%",
                  height: "75%",
                  backgroundColor: theme.PRIMARY_BG_COLOR,
                  justifyContent: "center",
                  alignItems: "center",
                  borderRadius: 13,
                }}
                onPress={() =>
                  navigation.navigate("DetailPackageScreen", house)
                }
              >
                <Text
                  style={{
                    color: COLORS.white,
                    fontSize: 14,
                    fontFamily: theme.FontMain,
                  }}
                >
                  Mua
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Pressable>
    );
  };

  return (
    <View
      style={{ width: "100%", height: " 100%", backgroundColor: "#dc6539" }}
    >
      <View style={{ width: "100%" }}>
        <Image
          style={{ width: "100%", height: 100, resizeMode: "stretch" }}
          source={require("../../assets/images/taphoa.png")}
        />
      </View>
      <ScrollView showsVerticalScrollIndicator={false}>
        <FlatList
          key={"_*"}
          showsHorizontalScrollIndicator={false}
          data={roomData}
          style={{
            flexDirection: "row",
            width: width,
            paddingBottom: 100,
          }}
          renderItem={({ item }) => <CardGrid house={item} />}
          keyExtractor={(item) => "_*" + item.id}
          numColumns={2}
          scrollEnabled={false}
        />
      </ScrollView>
    </View>
  );
};
export default PackageScreen;
