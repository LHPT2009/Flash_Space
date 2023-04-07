import {
  View,
  Text,
  Image,
  ScrollView,
  FlatList,
  TouchableOpacity,
} from "react-native";
import Icon from "react-native-vector-icons/MaterialIcons";

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

  const Item = ({ navigation, item }) => {
    return (
      <TouchableOpacity
        style={{
          width: "100%",
          height: 200,
          backgroundColor: COLORS.white,
          flexDirection: "row",
          borderRadius: 13,
          elevation: 10,
          marginBottom: 20,
        }}
        onPress={() => navigation.navigate("DetailBookScreen", item)}
      >
        <View
          style={{
            width: "10%",
            borderBottomLeftRadius: 10,
            borderTopLeftRadius: 10,

            backgroundColor: COLORS.grey,
          }}
        ></View>
        <View
          style={{
            width: "59%",
            alignItems: "center",
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
                height: "30%",
              }}
            >
              <Text
                style={{
                  color: COLORS.dark,
                  fontFamily: theme.FontMain,
                  paddingTop: 15,
                }}
              >
                Tên phòng: {item.name}
              </Text>
            </View>

            <View
              style={{
                width: "90%",
                height: "20%",
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
                  color: COLORS.grey,
                  fontFamily: theme.FontMain,
                }}
              >
                {item.startday}
              </Text>
            </View>
            <View
              style={{
                width: "90%",
                height: "20%",
                flexDirection: "row",
              }}
            >
              <Text
                style={{
                  color: COLORS.dark,
                  fontFamily: theme.FontMain,
                }}
              >
                Hạn đến:{" "}
              </Text>
              <Text
                style={{
                  color: COLORS.grey,
                  fontFamily: theme.FontMain,
                }}
              >
                {item.endday}
              </Text>
            </View>
            <View
              style={{
                width: "90%",
                height: "30%",
                flexDirection: "row",
              }}
            >
              <Text
                style={{
                  color: COLORS.dark,
                  fontFamily: theme.FontMain,
                }}
              >
                Vị trí:{" "}
              </Text>
              <Text
                style={{
                  color: COLORS.grey,
                  fontFamily: theme.FontMain,
                }}
              >
                {item.location}
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
            {item.status == 0 ? (
              <Text style={{ color: "#46AC5E", fontFamily: theme.FontMain }}>
                Đang thuê
              </Text>
            ) : (
              <Text style={{ color: "#D93C57", fontFamily: theme.FontMain }}>
                Hết hạn
              </Text>
            )}
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
          height: 100,
          backgroundColor: COLORS.white,
          flexDirection: "row",
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
                style={{
                  width: "100%",
                }}
                scrollEnabled={false}
                data={DATA}
                renderItem={({ item }) => (
                  <Item navigation={navigation} item={item} />
                )}
                keyExtractor={(item) => item.id}
              />
            </View>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default HistoryScreen;
