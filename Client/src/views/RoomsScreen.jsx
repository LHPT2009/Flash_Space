import React, { useState, useEffect } from "react";
import {
  SafeAreaView,
  View,
  StatusBar,
  Text,
  TextInput,
  FlatList,
  Dimensions,
  StyleSheet,
  Image,
  Pressable,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import {
  Actionsheet,
  Box,
  useDisclose,
  Checkbox,
  Slider,
  Stack,
  Input,
} from "native-base";
import axios from "axios";
import FlashMessage from "react-native-flash-message";
import IpAddress from "../consts/variable";
import COLORS from "../consts/colors";
import Icon from "react-native-vector-icons/MaterialIcons";
const { width } = Dimensions.get("screen");
import houses from "../consts/houses";
import theme from "../styles/theme";

const RoomsScreen = ({ navigation }) => {
  const categoryList = ["Lưới", "Dọc", "Ngang"];
  const [roomData, setRoomData] = useState([]);
  const [roomFilterData, setRoomFilterData] = useState([]);
  const [selectedCategoryIndex, setSelectedCategoryIndex] = React.useState(0);
  const [groupValues, setGroupValues] = React.useState([]);
  const { isOpen, onOpen, onClose } = useDisclose();
  const [onChangeValue, setOnChangeValue] = React.useState(70);
  useEffect(() => {
    axios.get("http://" + IpAddress + ":8000/room/").then((res) => {
      setRoomData(res.data);
      setRoomFilterData(res.data);
    });
  }, []);

  const ListCategories = () => {
    return (
      <View style={style.categoryListContainer}>
        {categoryList.map((category, index) => (
          <Pressable
            key={index}
            onPress={() => {
              setSelectedCategoryIndex(index);
            }}
          >
            <Text
              style={[
                style.categoryListText,
                index == selectedCategoryIndex && style.activeCategoryListText,
                { fontFamily: theme.FontMain },
              ]}
            >
              {category}
            </Text>
          </Pressable>
        ))}
      </View>
    );
  };

  const CardGrid = ({ house }) => {
    return (
      <Pressable
        activeOpacity={0.8}
        onPress={() => navigation.navigate("DetailsScreen", house)}
      >
        <View style={style.optionsCard}>
          <View style={style.optionsCardItem}>
            <Image
              source={{
                uri:
                  "http://" +
                  IpAddress +
                  ":8000/singleimage/" +
                  house.mainimage,
              }}
              style={style.optionsCardImage}
            />
            {/* Option title */}
            <Text
              style={{
                marginTop: 10,
                fontSize: 15,
                fontWeight: "bold",
              }}
            >
              {house.subject}
            </Text>
            <View style={{ marginTop: 10, flexDirection: "row" }}>
              <View style={style.facility}>
                <Icon name="aspect-ratio" size={18} />
                <Text style={style.facilityText}>
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
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <Text
                style={{
                  fontWeight: "bold",
                  color: COLORS.dark,
                  fontSize: 16,
                }}
              >
                <Icon name="star" size={16} color={"#E9D738"} /> 4.5/5
              </Text>
              <Text
                style={{
                  color: theme.PRIMARY_BG_COLOR,
                  fontSize: 14,
                  fontFamily: theme.FontMain,
                }}
              >
                {house.price} VND/Giờ
              </Text>
            </View>
          </View>
        </View>
      </Pressable>
    );
  };
  const Card = ({ house }) => {
    return (
      <Pressable
        activeOpacity={0.8}
        onPress={() => navigation.navigate("DetailsScreen", house)}
      >
        <View style={style.card}>
          {/* House image */}
          <Image
            source={{
              uri:
                "http://" + IpAddress + ":8000/singleimage/" + house.mainimage,
            }}
            style={style.cardImage}
          />
          <View style={{ marginTop: 10 }}>
            {/* Title and price container */}
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                marginTop: 10,
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
              <Text
                style={{
                  fontWeight: "bold",
                  color: COLORS.dark,
                  fontSize: 16,
                }}
              >
                <Icon name="star" size={16} color={"#E9D738"} /> 4.5/5
                <Text> (60)</Text>
              </Text>
            </View>

            {/* Location text */}

            <Text
              style={{
                color: COLORS.grey,
                fontSize: 14,
                marginTop: 5,
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
            <Text
              style={{
                color: theme.PRIMARY_BG_COLOR,
                fontSize: 14,
                marginTop: 5,
                fontFamily: theme.FontMain,
              }}
            >
              {house.price} VND/Giờ
            </Text>
            {/* Facilities container */}
            <View style={{ marginTop: 10, flexDirection: "row" }}>
              <View style={style.facility}>
                <Icon name="aspect-ratio" size={18} />
                <Text style={style.facilityText}>
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
          </View>
        </View>
      </Pressable>
    );
  };
  return (
    <SafeAreaView style={{ backgroundColor: COLORS.white, flex: 1 }}>
      {/* Customise status bar */}
      {/* <StatusBar
        translucent={false}
        backgroundColor={COLORS.white}
        barStyle="dark-content"
      /> */}
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          paddingHorizontal: 20,
          paddingTop: 10,
        }}
      >
        <View style={style.searchInputContainer}>
          <Icon name="search" color={COLORS.grey} size={25} />
          <TextInput
            style={{ fontFamily: theme.FontMain }}
            placeholder="Tìm tên quận, tên đường, địa điểm"
          />
        </View>

        <TouchableOpacity
          style={style.sortBtn}
          onPress={() => {
            onOpen();
          }}
        >
          <Icon name="tune" color={COLORS.white} size={25} />
        </TouchableOpacity>
      </View>
      <ListCategories />
      <ScrollView showsVerticalScrollIndicator={false}>
        {/* Render list options */}
        {selectedCategoryIndex == 0 ? (
          <FlatList
            key={"_*"}
            showsHorizontalScrollIndicator={false}
            data={roomData}
            style={[style.optionListsContainer, { width: width }]}
            renderItem={({ item }) => <CardGrid house={item} />}
            keyExtractor={(item) => "_*" + item._id}
            numColumns={2}
            scrollEnabled={false}
          />
        ) : selectedCategoryIndex == 1 ? (
          <FlatList
            key={"_"}
            scrollEnabled={false}
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={{ paddingLeft: 20, paddingVertical: 20 }}
            data={roomData}
            keyExtractor={(item) => item._id}
            renderItem={({ item }) => <Card house={item} />}
          />
        ) : (
          <FlatList
            key={"__"}
            snapToInterval={width - 20}
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={{ paddingLeft: 20, paddingVertical: 20 }}
            horizontal
            data={roomData}
            keyExtractor={(item) => "__" + item._id}
            renderItem={({ item }) => <Card house={item} />}
          />
        )}
        <View style={style.bottom}></View>
      </ScrollView>
      <Actionsheet isOpen={isOpen} onClose={onClose}>
        <Actionsheet.Content>
          <View style={{ width: "100%", height: "85%" }}>
            <ScrollView
              showsVerticalScrollIndicator={false}
              showsHorizontalScrollIndicator={false}
            >
              <View
                style={{
                  width: "100%",
                  paddingBottom: 15,
                  alignItems: "center",
                }}
              >
                <View
                  style={{
                    width: "90%",
                    height: 120,
                    borderRadius: 13,
                    backgroundColor: COLORS.white,
                    elevation: 10,
                  }}
                >
                  <View
                    style={{
                      width: "100%",
                      height: "35%",
                      justifyContent: "center",
                    }}
                  >
                    <Text
                      style={{
                        fontFamily: theme.FontMain,
                        fontSize: 18,
                        paddingLeft: 20,
                        color: COLORS.grey,
                      }}
                    >
                      Lọc theo ngày
                    </Text>
                  </View>
                  <View
                    style={{
                      width: "100%",
                      height: "65%",
                      alignItems: "center",
                    }}
                  >
                    <View
                      style={{
                        width: "90%",
                        height: "70%",
                        justifyContent: "center",
                        alignItems: "center",
                      }}
                    >
                      <Input
                        multiline={true}
                        variant="filled"
                        placeholder="Chọn ngày"
                      />
                    </View>
                  </View>
                </View>
                <View
                  style={{
                    width: "90%",
                    height: 120,
                    marginTop: 20,
                    borderRadius: 13,
                    backgroundColor: COLORS.white,
                    elevation: 10,
                  }}
                >
                  <View
                    style={{
                      width: "100%",
                      height: "35%",
                      justifyContent: "center",
                    }}
                  >
                    <Text
                      style={{
                        fontFamily: theme.FontMain,
                        fontSize: 18,
                        paddingLeft: 20,
                        color: COLORS.grey,
                      }}
                    >
                      Lọc theo giờ
                    </Text>
                  </View>
                  <View
                    style={{
                      width: "100%",
                      height: "65%",
                      alignItems: "center",
                    }}
                  >
                    <View
                      style={{
                        width: "90%",
                        height: "70%",
                        justifyContent: "center",
                        alignItems: "center",
                      }}
                    >
                      <Input
                        multiline={true}
                        variant="filled"
                        placeholder="Chọn giờ"
                      />
                    </View>
                  </View>
                </View>
                <View
                  style={{
                    width: "90%",
                    height: 120,
                    marginTop: 20,
                    borderRadius: 13,
                    backgroundColor: COLORS.white,
                    elevation: 10,
                  }}
                >
                  <View
                    style={{
                      width: "100%",
                      height: "35%",
                      justifyContent: "center",
                    }}
                  >
                    <Text
                      style={{
                        fontFamily: theme.FontMain,
                        fontSize: 18,
                        paddingLeft: 20,
                        color: COLORS.grey,
                      }}
                    >
                      Lọc theo giá
                    </Text>
                  </View>
                  <View
                    style={{
                      width: "100%",
                      height: "65%",
                      alignItems: "center",
                    }}
                  >
                    <View
                      style={{
                        width: "90%",
                        height: "70%",
                        justifyContent: "center",
                        alignItems: "center",
                      }}
                    >
                      <Stack space={4} alignItems="center" w="100%" maxW="400">
                        <Text
                          textAlign="center"
                          style={{ fontFamily: theme.FontMain, fontSize: 18 }}
                        >
                          Khoảng: {onChangeValue}
                        </Text>
                        <Slider
                          defaultValue={70}
                          colorScheme="info"
                          onChange={(v) => {
                            setOnChangeValue(v);
                          }}
                        >
                          <Slider.Track>
                            <Slider.FilledTrack />
                          </Slider.Track>
                          <Slider.Thumb />
                        </Slider>
                      </Stack>
                    </View>
                  </View>
                </View>
                <View
                  style={{
                    width: "90%",
                    marginVertical: 20,
                    borderRadius: 13,
                    backgroundColor: COLORS.white,
                    elevation: 10,
                  }}
                >
                  <View
                    style={{
                      width: "100%",
                      height: 50,
                      justifyContent: "center",
                    }}
                  >
                    <Text
                      style={{
                        fontFamily: theme.FontMain,
                        fontSize: 18,
                        paddingLeft: 20,
                        color: COLORS.grey,
                      }}
                    >
                      Lọc theo lĩnh vực
                    </Text>
                  </View>
                  <View
                    style={{
                      width: "100%",
                      alignItems: "center",
                      marginBottom: 20,
                    }}
                  >
                    <View
                      style={{
                        width: "90%",
                        justifyContent: "center",
                      }}
                    >
                      <Checkbox.Group
                        onChange={(v) => setGroupValues(v)}
                        value={groupValues}
                        accessibilityLabel="choose numbers"
                      >
                        <Checkbox value="one" my={2} colorScheme="info">
                          <Text
                            style={{
                              fontSize: 17,
                              fontFamily: theme.FontMain,
                              color: COLORS.dark,
                            }}
                          >
                            Nghệ thuật
                          </Text>
                        </Checkbox>
                        <Checkbox value="two" colorScheme="info">
                          <Text
                            style={{
                              fontSize: 17,
                              fontFamily: theme.FontMain,
                              color: COLORS.dark,
                            }}
                          >
                            Văn phòng
                          </Text>
                        </Checkbox>
                        <Checkbox value="three" my={2} colorScheme="info">
                          <Text
                            style={{
                              fontSize: 17,
                              fontFamily: theme.FontMain,
                              color: COLORS.dark,
                            }}
                          >
                            Công nghệ
                          </Text>
                        </Checkbox>
                        <Checkbox value="four" colorScheme="info">
                          <Text
                            style={{
                              fontSize: 17,
                              fontFamily: theme.FontMain,
                              color: COLORS.dark,
                            }}
                          >
                            Giải trí
                          </Text>
                        </Checkbox>
                      </Checkbox.Group>
                    </View>
                  </View>
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
              ></Text>
              <Text
                style={{
                  fontSize: 14,
                  color: COLORS.grey,
                  fontFamily: theme.FontMain,
                }}
              ></Text>
            </View>
            <TouchableOpacity
              style={{
                height: 50,
                justifyContent: "center",
                alignItems: "center",
                backgroundColor: theme.PRIMARY_BG_COLOR,
                borderRadius: 10,
                paddingHorizontal: 40,
              }}
            >
              <Text
                style={{
                  color: COLORS.white,
                  fontFamily: theme.FontMain,
                  fontSize: 20,
                }}
              >
                Áp dụng
              </Text>
            </TouchableOpacity>
          </View>
        </Actionsheet.Content>
      </Actionsheet>
    </SafeAreaView>
  );
};

const style = StyleSheet.create({
  header: {
    paddingVertical: 20,
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 20,
  },
  profileImage: {
    height: 50,
    width: 50,
    borderRadius: 25,
  },
  searchInputContainer: {
    height: 50,
    backgroundColor: COLORS.light,
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 20,
    borderRadius: 12,
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
  optionsCard: {
    height: 260,
    width: width / 2,
    alignItems: "center",
    backgroundColor: COLORS.white,
    borderRadius: 20,
  },
  optionsCardItem: {
    width: "90%",
    height: "100%",
  },
  optionsCardImage: {
    height: 140,
    borderRadius: 10,
    width: "100%",
  },
  optionListsContainer: {
    marginTop: 20,
    flexDirection: "row",
  },
  categoryListText: {
    width: 70,
    fontSize: 16,
    paddingBottom: 5,
    color: COLORS.grey,
    justifyContent: "center",
    textAlign: "center",
  },
  activeCategoryListText: {
    color: COLORS.dark,
    borderColor: theme.PRIMARY_BG_COLOR,
    borderBottomWidth: 3,
    paddingBottom: 5,
  },
  categoryListContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 40,
    paddingHorizontal: 40,
  },
  card: {
    height: 350,
    backgroundColor: COLORS.white,

    width: width - 40,
    marginRight: 20,
    marginTop: 20,

    borderRadius: 20,
  },
  cardImage: {
    width: "100%",
    height: 200,
    borderRadius: 15,
  },
  facility: { flexDirection: "row", marginRight: 15 },
  facilityText: {
    marginLeft: 5,
    color: COLORS.grey,
    fontFamily: theme.FontMain,
  },
  bottom: {
    width: "100%",
    height: 75,
  },
});
export default RoomsScreen;
