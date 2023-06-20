import { useEffect, useState } from "react";
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  ImageBackground,
  Pressable,
  Image,
} from "react-native";
import MaterialIconsIcon from "react-native-vector-icons/MaterialIcons";
import theme from "../styles/theme";
import COLORS from "../consts/colors";
import { showMessage } from "react-native-flash-message";
import { LinearGradient } from "expo-linear-gradient";
import { FlatList } from "react-native";
import { TouchableOpacity } from "react-native";
import { Popover, Box, Button } from "native-base";
import AsyncStorage from "@react-native-async-storage/async-storage";
import axios from "axios";
import IpAddress from "../consts/variable";
import numeral from "numeral";
const FavoriteScreen = ({ navigation }) => {
  const data_room_hot = [
    {
      id: "1",
      title: "Phòng họp, tổ chức sinh nhật",
      location: "50/14 Trương Văn Thành, p.Hiệp Phú, tp.Thủ Đức",
      image: require("../../assets/house1.jpg"),
      details: `Sạch sẽ, thoáng mát, gần các cửa hàng tập hóa`,
      interiors: [
        require("../../assets/house1.jpg"),
        require("../../assets/interior1.jpg"),
        require("../../assets/interior2.jpg"),
        require("../../assets/interior3.jpg"),
      ],
    },
    {
      id: "2",
      title: "Phòng livestream, phòng hát",
      location: "50/14 Trương Văn Thành, p.Hiệp Phú, tp.Thủ Đức",
      image: require("../../assets/house2.jpg"),
      details: `Sạch sẽ, thoáng mát, gần các cửa hàng tập hóa`,
      interiors: [
        require("../../assets/house2.jpg"),
        require("../../assets/interior1.jpg"),
        require("../../assets/interior2.jpg"),
        require("../../assets/interior3.jpg"),
      ],
    },
    {
      id: "3",
      title: "Phòng làm việc, phòng nghỉ",
      location: "50/14 Trương Văn Thành, p.Hiệp Phú, tp.Thủ Đức",
      image: require("../../assets/house3.jpg"),
      details: `Yên tĩnh, sạch sẽ, thơm`,
      interiors: [
        require("../../assets/house3.jpg"),
        require("../../assets/interior1.jpg"),
        require("../../assets/interior2.jpg"),
        require("../../assets/interior3.jpg"),
      ],
    },
    {
      id: "4",
      title: "Phòng họp, tổ chức sinh nhật",
      location: "50/14 Trương Văn Thành, p.Hiệp Phú, tp.Thủ Đức",
      image: require("../../assets/house1.jpg"),
      details: `Sạch sẽ, thoáng mát, gần các cửa hàng tập hóa`,
      interiors: [
        require("../../assets/house1.jpg"),
        require("../../assets/interior1.jpg"),
        require("../../assets/interior2.jpg"),
        require("../../assets/interior3.jpg"),
      ],
    },
    {
      id: "5",
      title: "Phòng livestream, phòng hát",
      location: "50/14 Trương Văn Thành, p.Hiệp Phú, tp.Thủ Đức",
      image: require("../../assets/house2.jpg"),
      details: `Sạch sẽ, thoáng mát, gần các cửa hàng tập hóa`,
      interiors: [
        require("../../assets/house2.jpg"),
        require("../../assets/interior1.jpg"),
        require("../../assets/interior2.jpg"),
        require("../../assets/interior3.jpg"),
      ],
    },
    {
      id: "6",
      title: "Phòng làm việc, phòng nghỉ",
      location: "50/14 Trương Văn Thành, p.Hiệp Phú, tp.Thủ Đức",
      image: require("../../assets/house3.jpg"),
      details: `Yên tĩnh, sạch sẽ, thơm`,
      interiors: [
        require("../../assets/house3.jpg"),
        require("../../assets/interior1.jpg"),
        require("../../assets/interior2.jpg"),
        require("../../assets/interior3.jpg"),
      ],
    },
    {
      id: "7",
      title: "Phòng họp, tổ chức sinh nhật",
      location: "50/14 Trương Văn Thành, p.Hiệp Phú, tp.Thủ Đức",
      image: require("../../assets/house1.jpg"),
      details: `Sạch sẽ, thoáng mát, gần các cửa hàng tập hóa`,
      interiors: [
        require("../../assets/house1.jpg"),
        require("../../assets/interior1.jpg"),
        require("../../assets/interior2.jpg"),
        require("../../assets/interior3.jpg"),
      ],
    },
    {
      id: "8",
      title: "Phòng livestream, phòng hát",
      location: "50/14 Trương Văn Thành, p.Hiệp Phú, tp.Thủ Đức",
      image: require("../../assets/house2.jpg"),
      details: `Sạch sẽ, thoáng mát, gần các cửa hàng tập hóa`,
      interiors: [
        require("../../assets/house2.jpg"),
        require("../../assets/interior1.jpg"),
        require("../../assets/interior2.jpg"),
        require("../../assets/interior3.jpg"),
      ],
    },
    {
      id: "9",
      title: "Phòng làm việc, phòng nghỉ",
      location: "50/14 Trương Văn Thành, p.Hiệp Phú, tp.Thủ Đức",
      image: require("../../assets/house3.jpg"),
      details: `Yên tĩnh, sạch sẽ, thơm`,
      interiors: [
        require("../../assets/house3.jpg"),
        require("../../assets/interior1.jpg"),
        require("../../assets/interior2.jpg"),
        require("../../assets/interior3.jpg"),
      ],
    },
  ];
  const [arr, setArr] = useState([]);
  console.log(arr.length);

  const formatCurrency = (amount) => {
    return numeral(amount).format("0,0 ");
  };
  const loaddata = async () => {
    const id = await AsyncStorage.getItem("idAccount");
    await axios
      .get(
        "http://" +
          IpAddress +
          ":8000/favoriteroom/" +
          (await AsyncStorage.getItem("idAccount"))
      )
      .then(async (res) => {
        await setArr(res.data);
      });
  };

  useEffect(() => {
    loaddata();
  }, []);

  const delItem = async (idfar) => {
    const del = await axios
      .delete("http://" + IpAddress + ":8000/favoriteroom/" + idfar)
      .then((res) => {
        showMessage({
          message: "Đã xóa khỏi danh sách phòng yêu thích  ✔",
          type: "success",
        });
        loaddata();
      });
  };

  const Card = ({ house }) => {
    return (
      <Pressable
        activeOpacity={0.8}
        onPress={() => {
          navigation.navigate("DetailsScreen", house.idroom);
        }}
      >
        <View style={style.card}>
          {/* House image */}
          <Image
            source={{
              uri:
                "http://" +
                IpAddress +
                ":8000/singleimage/" +
                house.idroom.mainimage,
            }}
            style={style.cardImage}
          />
          <View style={{ width: "65%", marginLeft: -15, paddingLeft: 25 }}>
            <View
              style={{
                paddingTop: 8,
                height: 30,
                flexDirection: "row-reverse",
                width: "100%",
              }}
            >
              <Box w="100%" flexDirection={"row-reverse"}>
                <Popover
                  trigger={(triggerProps) => {
                    return (
                      <TouchableOpacity {...triggerProps}>
                        <MaterialIconsIcon
                          name="favorite"
                          size={25}
                          color={COLORS.red}
                        />
                      </TouchableOpacity>
                    );
                  }}
                >
                  <Popover.Content accessibilityLabel="Delete Customerd" w="56">
                    <Popover.Arrow />

                    <Popover.Header>Bạn chắc chắn bỏ thích</Popover.Header>
                    <Popover.CloseButton />
                    <Popover.Footer justifyContent="flex-end">
                      <Button.Group space={2}>
                        <Button
                          colorScheme="danger"
                          onPress={() => delItem(house._id)}
                        >
                          Bỏ Thích
                        </Button>
                      </Button.Group>
                    </Popover.Footer>
                  </Popover.Content>
                </Popover>
              </Box>
            </View>
            {/* Title and price container */}
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
                {house.idroom.subject}
              </Text>
              {/* <Text
                style={{
                  fontWeight: "bold",
                  color: COLORS.dark,
                  fontSize: 16,
                }}
              >
                <MaterialIconsIcon name="star" size={16} color={"#E9D738"} />{" "}
                4.5/5
                <Text> (60)</Text>
              </Text> */}
            </View>

            {/* Location text */}

            <Text
              style={{
                color: COLORS.grey,
                fontSize: 14,
                fontFamily: theme.FontMain,
              }}
            ></Text>
            <Text
              style={{
                color: theme.PRIMARY_BG_COLOR,
                fontSize: 14,

                fontFamily: theme.FontMain,
              }}
            >
              {formatCurrency(house.idroom.price)} VND/Giờ
            </Text>
            {/* Facilities container */}
            {/* <View style={{ marginTop: 10, flexDirection: "row" }}>
              <View style={style.facility}>
                <MaterialIconsIcon name="aspect-ratio" size={18} />
                <Text style={style.facilityText}>100m</Text>
              </View>
            </View> */}
          </View>
        </View>
      </Pressable>
    );
  };

  return (
    <View style={style.container}>
      <View style={style.container_select_1}></View>
      <View style={style.container_list_1}>
        <View style={style.room_hot_content_item_title}>
          <Text style={style.room_hot_content_item_title_text}>
            Danh sách các phòng đã lưu
          </Text>
        </View>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            paddingHorizontal: 20,
            paddingTop: 10,
          }}
        >
          <View style={style.searchInputContainer}>
            <MaterialIconsIcon name="search" color={COLORS.grey} size={25} />
            <TextInput
              style={{ fontFamily: theme.FontMain }}
              placeholder="Tìm tên quận, tên đường, địa điểm"
            />
          </View>
        </View>
        <View style={style.container_list_items}>
          <View style={style.container_list_item}>
            <FlatList
              data={arr}
              showsVerticalScrollIndicator={false}
              showsHorizontalScrollIndicator={false}
              contentContainerStyle={{ paddingVertical: 20 }}
              keyExtractor={(item) => item._id}
              renderItem={({ item }) => <Card house={item} />}
            />
            <View style={style.bottom}></View>
          </View>
        </View>
      </View>
    </View>
  );
};

const style = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    height: "100%",
  },
  container_select: {
    width: "100%",
    height: "30%",
    backgroundColor: "rgba(239,240,242,1)",
  },
  container_select_1: {
    width: "100%",
    height: "5%",
    backgroundColor: "rgba(239,240,242,1)",
  },
  container_list: {
    width: "100%",
    height: "70%",
    backgroundColor: "rgba(239,240,242,1)",
  },
  container_list_1: {
    width: "100%",
    height: "100%",
    backgroundColor: "rgba(239,240,242,1)",
  },
  room_content_items: {
    width: "100%",
    height: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
  room_content_item_image: {
    width: "95%",
    height: "95%",
  },
  images__room__imageStyle: {
    width: "100%",
    height: "100%",
    overflow: "hidden",
    borderRadius: 13,
  },
  icon1: {
    color: "rgb(0, 153, 255)",
    fontSize: 20,
  },
  backgroundImage_linear: {
    width: "100%",
    height: "100%",
    display: "flex",
    flexDirection: "column-reverse",
  },
  header: {
    paddingVertical: 30,
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 10,
  },
  headerBtn: {
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
  },
  room_hot_content_item_title_category: {
    width: "100%",
    left: 10,
  },
  room_hot_content_item_title_category_text: {
    color: theme.PRIMARY_BG_WHITE,
    fontSize: 17,
    fontFamily: theme.FontMain,
  },
  room_hot_content_item_title_name: {
    width: "100%",
    left: 10,
    paddingBottom: 3,
  },
  room_hot_content_item_title_name_text: {
    color: theme.PRIMARY_BG_WHITE,
    fontFamily: theme.FontMain,
    fontSize: 20,
    fontWeight: "bold",
  },
  room_hot_content_item_detail: {
    width: "100%",
    left: 10,
  },
  room_hot_content_item_detail_text: {
    color: COLORS.grey,
    fontSize: 15,
    fontFamily: theme.FontMain,
  },
  room_hot_content_item_title: {
    width: "100%",
    paddingVertical: 10,
    left: 25,
  },
  room_hot_content_item_title_text: {
    color: theme.PRIMARY_BG_DARK,
    fontSize: 22,
    fontFamily: theme.FontMain,
  },
  container_list_items: {
    height: "100%",
    width: "100%",
    alignItems: "center",
  },
  container_list_item: {
    height: "100%",
    width: "95%",
  },
  card: {
    height: 150,
    backgroundColor: COLORS.white,
    width: "100%",
    marginBottom: 15,
    borderRadius: 13,
    flexDirection: "row",
    alignItems: "center",
    elevation: 2,
  },
  cardImage: {
    width: "35%",
    height: 140,
    marginLeft: 5,
    borderRadius: 15,
  },
  bottom: {
    width: "100%",
    height: 200,
  },
  searchInputContainer: {
    height: 50,
    backgroundColor: COLORS.light,
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 20,
    borderRadius: 12,
    marginBottom: 15,
  },
  sortBtn: {
    backgroundColor: theme.PRIMARY_BG_COLOR,
    height: 50,
    width: 50,
    borderRadius: 12,
    justifyContent: "center",
    alignItems: "center",
    marginLeft: 10,
  },
});
export default FavoriteScreen;
