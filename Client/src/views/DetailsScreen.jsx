import React, { useEffect, useState, useContext } from "react";
import {
  ImageBackground,
  SafeAreaView,
  View,
  Text,
  StyleSheet,
  FlatList,
  Image,
  Dimensions,
  ScrollView,
  TouchableOpacity,
  TouchableHighlight,
  Pressable,
} from "react-native";
import axios from "axios";
import { Actionsheet, Box, useDisclose } from "native-base";
import Icon from "react-native-vector-icons/MaterialIcons";
import { LocaleConfig, Calendar } from "react-native-calendars";
import COLORS from "../consts/colors";
import { LinearGradient } from "expo-linear-gradient";
import theme from "../styles/theme";
import IpAddress from "../consts/variable";
import ButtonTimeslot from "../components/ButtonTimeslot";
import { ListTimeSlotContext } from "../context/ListTimeSlotContext";

const { width } = Dimensions.get("screen");

const DetailsScreen = ({ navigation, route }) => {
  const [house, setHouse] = useState(route.params);
  const [imageView, setImageView] = useState(house.mainimage);
  const [imageLast, setImageLast] = useState(house.mainimage);
  const [address, setAddress] = useState(
    house.housenumberstreetname +
      "," +
      house.idward.wardname +
      "," +
      house.iddistrict.districtname +
      "," +
      house.idprovince.provincename
  );
  const [listImage, setListImage] = useState([]);
  const [isFavorite, setIsFavorite] = useState(false);
  const [listWorkingHours, setListWorkingHours] = useState([]);
  const { timeslots } = useContext(ListTimeSlotContext);
  const { deleteListTimeSlot } = useContext(ListTimeSlotContext);
  const total = house.price * timeslots.length;

  const { isOpen, onOpen, onClose } = useDisclose();

  useEffect(() => {
    axios
      .get("http://" + IpAddress + ":8000/image/byroom/" + house._id)
      .then((res) => {
        setListImage(res.data);
      });
  }, []);

  const [selected, setSelected] = useState({});
  const [selectedDay, setSelectedDay] = useState("");

  LocaleConfig.locales["fr"] = {
    monthNames: [
      "Tháng 1",
      "Tháng 2",
      "Tháng 3",
      "Tháng 4",
      "Tháng 5",
      "Tháng 6",
      "Tháng 7",
      "Tháng 8",
      "Tháng 9",
      "Tháng 10",
      "Tháng 11",
      "Tháng 12",
    ],
    monthNamesShort: [
      "Thg.1",
      "Thg.2",
      "Thg.3",
      "Thg.4",
      "Thg.5",
      "Thg.6",
      "Thg.7",
      "Thg.8",
      "Thg.9",
      "Thg.10",
      "Thg.11",
      "Thg.12",
    ],
    dayNames: [
      "Chủ nhật",
      "Thứ 2",
      "Thứ 3",
      "Thứ 4",
      "Thứ 5",
      "Thứ 6",
      "Thứ 7",
    ],
    dayNamesShort: ["CN", "T.2", "T.3", "T.4", "T.5", "T.6", "T.7"],
    today: "Hôm nay",
  };
  LocaleConfig.defaultLocale = "fr";

  const checkOpenBook = (list) => {
    const result = list.map((val) => {
      if (val.status == true) {
        return true;
      } else {
        return false;
      }
    });
    setOpenbook(result.includes(true));
  };

  const MultiSelecteHour = () => {
    return (
      <View style={{ width: "90%" }}>
        <FlatList
          key={"_"}
          showsHorizontalScrollIndicator={false}
          data={listWorkingHours}
          style={[{ width: "100%" }]}
          renderItem={({ item }) => (
            <ButtonTimeslot
              item={item}
              idroom={house._id}
              idworkinghours={item._id}
              roomname={house.subject}
              starttime={item.idtimeslot.starttime}
              endtime={item.idtimeslot.endtime}
              pricetime={house.price}
              date={selectedDay}
            />
          )}
          keyExtractor={(item) => "_" + item.id}
          numColumns={3}
          scrollEnabled={false}
        />
      </View>
    );
  };

  const InDay = () => {
    if (timeslots.length == 0) {
      const listSelected =
        '{"' +
        selectedDay +
        '": { "selected": true, "disableTouchEvent": false, "selectedDotColor": "theme.PRIMARY_BG_COLOR"}}';
      const convertSelect = JSON.parse(listSelected);
      if (JSON.stringify(selected) !== JSON.stringify(convertSelect)) {
        setSelected(convertSelect);
      }
    } else {
      const listSelected =
        '{"' +
        selectedDay +
        '": { "selected": true, "disableTouchEvent": false, "selectedDotColor": "theme.PRIMARY_BG_COLOR"},' +
        timeslots.map((item) => {
          const convertDate = item.date;
          const arr = convertDate.split("-");
          const date = arr[2] + "-0" + arr[1] + "-" + arr[0];
          return (
            '"' +
            date +
            '":{ "selected": true, "disableTouchEvent": false, "selectedDotColor": "theme.PRIMARY_BG_COLOR"}'
          );
        }) +
        "}";
      const convertSelect = JSON.parse(listSelected);
      if (JSON.stringify(selected) !== JSON.stringify(convertSelect)) {
        setSelected(convertSelect);
      }
    }

    return (
      <Calendar
        enableSwipeMonths={true}
        onDayPress={(day) => {
          searchWorkingHours(day.dateString);
          setSelectedDay(day.dateString);
        }}
        markedDates={selected}
        style={{
          borderRadius: 13,
          width: "100%",
          elevation: 10,
          paddingBottom: 10,
        }}
        // markingType="multi-period"
        // markedDates={{
        //   "2023-03-28": {
        //     periods: [
        //       { startingDay: false, endingDay: true, color: "#5f9ea0" },
        //       { startingDay: false, endingDay: true, color: "#ffa500" },
        //       { startingDay: true, endingDay: false, color: "#f0e68c" },
        //     ],
        //   },
        //   "2023-03-30": {
        //     periods: [
        //       { startingDay: true, endingDay: false, color: "#ffa500" },
        //       { color: "transparent" },
        //       { startingDay: false, endingDay: false, color: "#f0e68c" },
        //     ],
        //   },
        // }}
      />
    );
  };

  const onChangeFavorite = () => {
    setIsFavorite(!isFavorite);
  };
  const InteriorCard = ({ interior, index }) => {
    return (
      <TouchableHighlight
        style={style.interiorImage}
        onPress={() => {
          setImageView(interior.filename);
        }}
      >
        {imageView == interior.filename ? (
          <Image
            source={{
              uri: "http://" + IpAddress + ":8000/singleimage/" + imageView,
            }}
            style={{
              width: "100%",
              height: "100%",
              borderRadius: 10,
              borderColor: theme.PRIMARY_BG_COLOR,
              borderWidth: 2,
            }}
          />
        ) : (
          <Image
            source={{
              uri:
                "http://" +
                IpAddress +
                ":8000/singleimage/" +
                interior.filename,
            }}
            style={{ width: "100%", height: "100%", borderRadius: 10 }}
          />
        )}
      </TouchableHighlight>
    );
  };

  const searchWorkingHours = async (date) => {
    const datestring = new Date(date);
    const day =
      datestring.getDate() <= 10
        ? `0${datestring.getDate()}`
        : `${datestring.getDate()}`;
    const month =
      datestring.getMonth() + 1 <= 10
        ? `0${datestring.getMonth() + 1}`
        : `${datestring.getMonth() + 1}`;
    const year = datestring.getFullYear();
    const convertdate = year + "-" + month + "-" + day;

    await axios
      .post("http://" + IpAddress + ":8000/workinghours/" + house._id, {
        date: convertdate,
      })
      .then((res) => {
        setListWorkingHours(res.data);
      });
  };

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.light }}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        showsHorizontalScrollIndicator={false}
      >
        {/* House image */}

        <View style={style.backgroundImageContainer}>
          <ImageBackground
            style={style.backgroundImage}
            source={{
              uri: "http://" + IpAddress + ":8000/singleimage/" + imageView,
            }}
          >
            <LinearGradient
              style={style.backgroundImage_linear}
              colors={["rgba(255, 255, 255, 0)", "rgba(38, 38, 38,0.8)"]}
              start={{ x: 0, y: 1 }}
              end={{ x: 0, y: 0 }}
            >
              <View style={style.header}>
                <TouchableOpacity
                  style={style.headerBtn}
                  // onPress={() => }
                >
                  <Icon
                    name="arrow-back"
                    size={30}
                    color={"white"}
                    onPress={navigation.goBack}
                  />
                </TouchableOpacity>
                <TouchableOpacity
                  style={style.headerBtnFavorite}
                  onPress={() => onChangeFavorite()}
                >
                  {!isFavorite ? (
                    <Icon
                      name="favorite-outline"
                      size={25}
                      color={COLORS.white}
                    />
                  ) : (
                    <Icon name="favorite" size={25} color={COLORS.red} />
                  )}
                </TouchableOpacity>
              </View>
            </LinearGradient>
          </ImageBackground>
        </View>

        <View style={style.detailsContainer}>
          {/* Name and rating view container */}
          <View
            style={{ flexDirection: "row", justifyContent: "space-between" }}
          >
            <Text style={{ fontSize: 24, fontWeight: "bold", width: "70%" }}>
              {house.subject}
            </Text>
            <View style={{ flexDirection: "row", alignItems: "center" }}>
              <Text
                style={{
                  fontWeight: "bold",
                  color: COLORS.dark,
                  fontSize: 18,
                }}
              >
                <Icon name="star" size={18} color={"#E9D738"} /> 4.5/5
                <Text
                  style={{
                    color: COLORS.grey,
                    fontSize: 18,
                  }}
                >
                  {" "}
                  (60)
                </Text>
              </Text>
            </View>
          </View>

          {/* Location text */}
          <Text
            style={{
              fontSize: 16,
              color: COLORS.grey,
              fontFamily: theme.FontMain,
            }}
          >
            {address}
          </Text>
          <Text
            style={{ fontSize: 20, fontFamily: theme.FontMain, marginTop: 20 }}
          >
            Thông tin chi tiết phòng
          </Text>
          {/* Facilities container */}
          <View style={{ flexDirection: "row", marginTop: 10 }}>
            <View style={style.facility}>
              <Icon name="aspect-ratio" size={18} />
              <Text
                style={[style.facilityText, { fontFamily: theme.FontMain }]}
              >
                {house.length + "m x " + house.width + "m"}
              </Text>
            </View>
            <View style={style.facility}>
              <Icon name="people" size={18} />
              <Text
                style={[style.facilityText, { fontFamily: theme.FontMain }]}
              >
                {house.quantity}
              </Text>
            </View>
          </View>

          <FlatList
            contentContainerStyle={{ marginTop: 10 }}
            horizontal
            showsHorizontalScrollIndicator={false}
            keyExtractor={(_, key) => key.toString()}
            data={listImage}
            renderItem={({ item, index }) => (
              <InteriorCard interior={item} index={index} />
            )}
          />

          <Text
            style={{ fontSize: 20, fontFamily: theme.FontMain, marginTop: 20 }}
          >
            Mô tả
          </Text>
          <Text
            style={{
              marginTop: 10,
              color: COLORS.grey,
              fontFamily: theme.FontMain,
            }}
          >
            {house.describe}
          </Text>
          {/* Interior list */}
          <View>
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
              }}
            >
              <Text
                style={{
                  fontSize: 20,
                  fontFamily: theme.FontMain,
                  marginTop: 20,
                }}
              >
                Bình luận
              </Text>
            </View>

            <Text
              style={{
                marginTop: 10,
                color: COLORS.grey,
                fontFamily: theme.FontMain,
                paddingBottom: 10,
              }}
            >
              Đã có{" "}
              <Text
                style={{
                  marginTop: 10,
                  color: theme.PRIMARY_BG_COLOR,
                  fontFamily: theme.FontMain,
                }}
              >
                1238
              </Text>{" "}
              bình luận về phòng
            </Text>
            <View
              style={{
                width: "100%",
                backgroundColor: COLORS.white,
                flexDirection: "row",
                borderRadius: 13,
                paddingHorizontal: 15,
                paddingVertical: 10,
                marginBottom: 20,
              }}
            >
              <View
                style={{
                  width: "20%",
                  backgroundColor: COLORS.white,
                }}
              >
                <View
                  style={{
                    alignItems: "center",
                  }}
                >
                  <Image
                    style={{ borderRadius: 50, width: 50, height: 50 }}
                    source={require("../../assets/images/avatar/123.jpeg")}
                  />
                </View>
              </View>
              <View
                style={{
                  width: "80%",
                  backgroundColor: COLORS.white,
                }}
              >
                <View>
                  <Text
                    style={{ color: COLORS.dark, fontFamily: theme.FontMain }}
                  >
                    Nguyễn Văn Chuẩn
                  </Text>
                  <Text
                    style={{ color: COLORS.grey, fontFamily: theme.FontMain }}
                  >
                    26/03/2023
                  </Text>
                </View>
                <View>
                  <Text
                    style={{
                      fontFamily: theme.FontMain,
                      textAlign: "justify",
                    }}
                  >
                    Phòng đẹp lắm đó nha mấy chế Phòng đẹp lắm đó nha mấy chế
                    Phòng đẹp lắm đó nha mấy chế Phòng đẹp lắm đó nha mấy chế
                    Phòng đẹp lắm đó nha mấy chế Phòng đẹp lắm đó nha mấy chế
                    Phòng đẹp lắm đó nha mấy chế Phòng đẹp lắm đó nha mấy chế
                    Phòng đẹp lắm đó nha mấy chế vPhòng đẹp lắm đó nha mấy chế
                    Phòng đẹp lắm đó nha mấy chế Phòng đẹp lắm đó nha mấy chế
                    Phòng đẹp lắm đó nha mấy chế Phòng đẹp lắm đó nha mấy chế{" "}
                  </Text>
                </View>
                <View style={{ flexDirection: "row" }}>
                  <Icon name="star" size={18} color={"#E9D738"} />
                  <Icon name="star" size={18} color={"#E9D738"} />
                  <Icon name="star" size={18} color={"#E9D738"} />
                  <Icon name="star" size={18} color={"#E9D738"} />
                  <Icon name="star" size={18} color={"#E9D738"} />
                </View>
              </View>
            </View>
          </View>
          <View
            style={{
              width: "100%",
              flexDirection: "row",
              justifyContent: "center",
              alignItems: "center",
              paddingTop: 10,
            }}
          >
            <View
              style={{
                width: 60,
                height: 1,
                backgroundColor: COLORS.grey,
                marginRight: 10,
              }}
            />
            <TouchableOpacity
              onPress={() => navigation.navigate("CommentsSreen", house)}
            >
              <Text
                style={{
                  color: COLORS.grey,
                }}
              >
                {" "}
                Xem chi tiết{" "}
              </Text>
            </TouchableOpacity>
            <View
              style={{
                width: 60,
                height: 1,
                backgroundColor: COLORS.grey,
                marginLeft: 10,
              }}
            />
          </View>
          <View style={{ paddingBottom: 20 }}></View>
        </View>
      </ScrollView>
      <View style={style.footer}>
        <View>
          <Text
            style={{ color: COLORS.blue, fontWeight: "bold", fontSize: 18 }}
          >
            {house.price} VNĐ
          </Text>
          <Text
            style={{
              fontSize: 14,
              color: COLORS.grey,
              fontFamily: theme.FontMain,
            }}
          >
            Giá theo giờ
          </Text>
        </View>
        <TouchableOpacity style={style.bookNowBtn} onPress={() => onOpen()}>
          <Text
            style={{
              color: COLORS.white,
              fontFamily: theme.FontMain,
              fontSize: 20,
            }}
          >
            Đặt ngay
          </Text>
        </TouchableOpacity>
      </View>
      {/* Phần đặt phòng */}
      <Actionsheet
        isOpen={isOpen}
        onClose={async () => {
          await deleteListTimeSlot();
          onClose();
        }}
      >
        <Actionsheet.Content>
          <View style={{ width: "100%", height: "80%" }}>
            <ScrollView
              showsVerticalScrollIndicator={false}
              showsHorizontalScrollIndicator={false}
            >
              <View
                style={{
                  width: "100%",
                  alignItems: "center",
                  marginTop: 20,
                }}
              >
                <View
                  style={{
                    width: "90%",
                  }}
                >
                  <InDay />
                </View>
              </View>

              <View
                style={{ marginTop: 20, height: 200, alignItems: "center" }}
              >
                <View style={{ width: "90%" }}>
                  <Text
                    style={{
                      fontFamily: theme.FontMain,
                      fontSize: 18,
                      color: COLORS.grey,
                    }}
                  >
                    Khung giờ hiện có
                  </Text>
                </View>

                <View
                  style={{
                    width: "100%",
                    height: "100%",
                    alignItems: "center",
                  }}
                >
                  <MultiSelecteHour />
                </View>
              </View>
            </ScrollView>
          </View>
          <View
            style={{
              width: "100%",
              height: "15%",
              backgroundColor: COLORS.white,
              borderRadius: 13,
              elevation: 20,
              paddingHorizontal: 20,
              alignItems: "center",
              flexDirection: "row",
              justifyContent: "space-between",
            }}
          >
            <View>
              <Text
                style={{
                  color: COLORS.blue,
                  fontWeight: "bold",
                  fontSize: 18,
                }}
              >
                {total} VNĐ
              </Text>
              <Text
                style={{
                  fontSize: 14,
                  color: COLORS.grey,
                  fontFamily: theme.FontMain,
                }}
              >
                Tổng tiền
              </Text>
            </View>
            {timeslots.length != 0 ? (
              <TouchableOpacity
                style={{
                  height: 50,
                  justifyContent: "center",
                  alignItems: "center",
                  backgroundColor: theme.PRIMARY_BG_COLOR,
                  borderRadius: 10,
                  paddingHorizontal: 40,
                }}
                onPress={() => {
                  onClose();
                  navigation.navigate("BookScreen", {
                    address: address,
                    subject: house.subject,
                    total: total,
                  });
                }}
              >
                <Text
                  style={{
                    color: COLORS.white,
                    fontFamily: theme.FontMain,
                    fontSize: 20,
                  }}
                >
                  Đặt ngay
                </Text>
              </TouchableOpacity>
            ) : (
              <View
                style={{
                  height: 50,
                  justifyContent: "center",
                  alignItems: "center",
                  backgroundColor: COLORS.gray,
                  borderRadius: 10,
                  paddingHorizontal: 40,
                }}
              >
                <Text
                  style={{
                    color: COLORS.dark,
                    fontFamily: theme.FontMain,
                    fontSize: 20,
                  }}
                >
                  Đặt ngay
                </Text>
              </View>
            )}
          </View>
        </Actionsheet.Content>
      </Actionsheet>
    </SafeAreaView>
  );
};

const style = StyleSheet.create({
  backgroundImageContainer: {
    elevation: 20,
    marginHorizontal: 10,
    marginTop: 10,
    alignItems: "center",
    height: 400,
  },
  backgroundImage: {
    height: "100%",
    width: "100%",
    borderRadius: 20,
    overflow: "hidden",
  },
  backgroundImage_linear: {
    width: "100%",
    height: "100%",
  },
  header: {
    paddingVertical: 20,
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 10,
  },
  headerBtn: {
    height: 50,
    width: 50,
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
  },
  headerBtnFavorite: {
    height: 50,
    width: 50,
    backgroundColor: "rgba(189, 189, 189, 0.3)",
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
  },
  ratingTag: {
    height: 30,
    width: 35,
    backgroundColor: COLORS.blue,
    borderRadius: 5,
    justifyContent: "center",
    alignItems: "center",
  },
  virtualTag: {
    top: -20,
    width: 120,
    borderRadius: 10,
    height: 40,
    paddingHorizontal: 20,
    backgroundColor: COLORS.dark,
    justifyContent: "center",
    alignItems: "center",
  },
  interiorImage: {
    width: width / 3 - 20,
    height: 80,
    marginRight: 10,
    borderRadius: 10,
  },
  footer: {
    height: 70,
    backgroundColor: COLORS.white,
    borderTopLeftRadius: 13,
    borderTopRightRadius: 13,
    elevation: 20,
    paddingHorizontal: 20,
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  bookNowBtn: {
    height: 50,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: theme.PRIMARY_BG_COLOR,
    borderRadius: 10,
    paddingHorizontal: 40,
  },
  detailsContainer: { flex: 1, paddingHorizontal: 20, marginTop: 30 },
  facility: { flexDirection: "row", marginRight: 15 },
  facilityText: { marginLeft: 5, color: COLORS.grey },
});

export default DetailsScreen;
