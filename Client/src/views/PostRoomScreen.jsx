import { useState, useEffect } from "react";
import {
  View,
  Text,
  Image,
  ScrollView,
  FlatList,
  TextInput,
  TouchableOpacity,
  Pressable,
} from "react-native";
import Icon from "react-native-vector-icons/MaterialIcons";
import axios from "axios";
import AsyncStorage from "@react-native-async-storage/async-storage";
import IpAddress from "../consts/variable";
import COLORS from "../consts/colors";
import theme from "../styles/theme";

const PostRoomScreen = ({ navigation }) => {
  const [arr, setArr] = useState([]);

  const loaddata = async () => {
    const idAccount = await AsyncStorage.getItem("idAccount");
    const data = await axios
      .get("http://" + IpAddress + ":8000/room/account/" + idAccount)
      .then((res) => {
        setArr(res.data);
      });
  };

  useEffect(() => {
    loaddata();
  }, []);

  const Card = ({ house }) => {
    return (
      <Pressable
        activeOpacity={0.8}
        onPress={() => {
          navigation.navigate("DetailRoomPostScreen", house._id);
        }}
      >
        <View
          style={{
            height: 150,
            backgroundColor: COLORS.white,
            width: "100%",
            marginBottom: 15,
            borderRadius: 13,
            flexDirection: "row",
            alignItems: "center",
            elevation: 2,
          }}
        >
          {/* House image */}
          <Image
            source={{
              uri:
                "http://" + IpAddress + ":8000/singleimage/" + house.mainimage,
            }}
            style={{
              width: "35%",
              height: 140,
              marginLeft: 5,
              borderRadius: 15,
            }}
          />
          <View style={{ width: "65%", marginLeft: -15, paddingLeft: 25 }}>
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
              }}
            >
              <Text
                style={{
                  fontSize: 20,
                  fontWeight: "bold",
                  fontFamily: theme.FontMain,
                }}
              >
                {house.subject}
              </Text>
            </View>

            <Text
              style={{
                color: COLORS.grey,
                fontSize: 14,
                fontFamily: theme.FontMain,
              }}
            >
              {house.housenumberstreetname +
                "," +
                house.idward.wardname +
                "," +
                house.iddistrict.districtname +
                "," +
                house.idprovince.provincename}
            </Text>
            {/* <Text
              style={{
                color: theme.PRIMARY_BG_COLOR,
                fontSize: 14,

                fontFamily: theme.FontMain,
              }}
            >
              200.000 VND/Giờ
            </Text> */}
          </View>
        </View>
      </Pressable>
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
              Quản lý phòng cho thuê
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
              <View
                style={{
                  height: "100%",
                  width: "100%",
                  alignItems: "center",
                }}
              >
                <View
                  style={{
                    height: "100%",
                    width: "95%",
                  }}
                >
                  <FlatList
                    data={arr}
                    showsVerticalScrollIndicator={false}
                    showsHorizontalScrollIndicator={false}
                    contentContainerStyle={{ paddingVertical: 20 }}
                    keyExtractor={(item) => item.id}
                    renderItem={({ item }) => <Card house={item} />}
                  />
                </View>
              </View>
            </View>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default PostRoomScreen;
