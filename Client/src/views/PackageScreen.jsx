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
import COLORS from "../consts/colors";
import theme from "../styles/theme";
const { width } = Dimensions.get("screen");

const PackageScreen = () => {
  const roomData = [
    { id: "1", name: "aaa", price: 1000, time: "1thang" },
    { id: "2", name: "baba", price: 1000, time: "1thang" },
    { id: "3", name: "caacaca", price: 1000, time: "1thang" },
    { id: "4", name: "aaa", price: 1000, time: "1thang" },
    { id: "5", name: "baba", price: 1000, time: "1thang" },
    { id: "6", name: "caacaca", price: 1000, time: "1thang" },
    { id: "7", name: "aaa", price: 1000, time: "1thang" },
    { id: "8", name: "baba", price: 1000, time: "1thang" },
    { id: "9", name: "caacaca", price: 1000, time: "1thang" },
  ];
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
            {/* <Image
              source={{
                uri:
                  "http://" +
                  IpAddress +
                  ":8000/singleimage/" +
                  house.mainimage,
              }}
              style={style.optionsCardImage}
            /> */}
            {/* Option title */}
            <View style={{ flexDirection: "row" }}>
              <Text
                style={{
                  marginTop: 20,
                  marginLeft: 15,
                  fontSize: 15,
                  fontWeight: "bold",
                  height: 50,
                }}
              >
                Tên gói:
              </Text>
              <Text
                style={{
                  marginTop: 20,
                  fontSize: 15,
                  fontWeight: "bold",
                  height: 50,
                }}
              >
                {"  "}
                {house.name}
              </Text>
            </View>
            <View style={{ flexDirection: "row" }}>
              <Text
                style={{
                  marginLeft: 15,
                  fontSize: 15,
                  fontWeight: "bold",
                  height: 50,
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
            <View style={{ flexDirection: "row" }}>
              <Text
                style={{
                  marginLeft: 15,
                  fontSize: 15,
                  fontWeight: "bold",
                  height: 50,
                }}
              >
                Thời hạn:
              </Text>
              <Text
                style={{
                  fontSize: 15,
                  fontWeight: "bold",
                  height: 50,
                }}
              >
                {"  "}
                {house.time}
              </Text>
            </View>
            <View
              style={{
                width: "100%",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <TouchableOpacity
                style={{
                  width: "70%",
                  backgroundColor: theme.PRIMARY_BG_COLOR,
                  justifyContent: "center",
                  alignItems: "center",
                  paddingVertical: 10,
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
    <View style={{ width: "100%" }}>
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
