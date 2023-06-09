// import React from "react";
// import { View, Button, Text, StyleSheet, TextInput } from "react-native";

// const Home = ({ navigation }) => {
//   return (
//     <View style={styles.center}>
//       <Text>vinh</Text>
//       <TextInput></TextInput>
//       <Button
//         title="Go to About Screen"
//         onPress={() => navigation.navigate("About")} // We added an onPress event which would navigate to the About screen
//       />
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   center: {
//     flex: 1,
//     justifyContent: "center",
//     alignItems: "center",
//     textAlign: "center",
//   },
// });

// export default Home;
import React, { Component } from "react";
import {
  View,
  Image,
  ImageBackground,
  Text,
  ScrollView,
  TextInput,
  FlatList,
  Animated,
  Dimensions,
  TouchableOpacity,
  SafeAreaView,
} from "react-native";
import MaterialIconsIcon from "react-native-vector-icons/MaterialIcons";
import MaterialCommunityIconsIcon from "react-native-vector-icons/MaterialCommunityIcons";
import { LinearGradient } from "expo-linear-gradient";
import AsyncStorage from "@react-native-async-storage/async-storage";
import FlashMessage from "react-native-flash-message";
import styles from "../styles/views/home";

const { width, height } = Dimensions.get("window");
const Item_room_hot_size = width;
const DATA = [
  {
    id: "bd7acbea-c1b1-46c2-aed5-3ad53abb28ba",
    title: "Bình Thạnh",
    image: require("../../assets/images/address/2459232ecba25009d674323308f1e126.jpg"),
  },
  {
    id: "3ac68afc-c605-48d3-a4f8-fbd91aa97f63",
    title: "Quận 1",
    image: require("../../assets/images/address/3618cdc17cb8c8898f2077d9894abbc1.jpg"),
  },
  {
    id: "58694a0f-3da1-471f-bd96-145571e29d72",
    title: "Quận 8",
    image: require("../../assets/images/address/Cau_chu_y_quan_8.jpg"),
  },
  {
    id: "58694a0f-3da1-471f-bd96-145571e29d73",
    title: "Quận 3",
    image: require("../../assets/images/address/di-choi-voi-nguoi-yeu-nen-di-dau-4.jpeg"),
  },
  {
    id: "58694a0f-3da1-47f-bd96-145571e29d72",
    title: "Quận 8",
    image: require("../../assets/images/address/Cau_chu_y_quan_8.jpg"),
  },
  {
    id: "58694a0f-3da1-f-bd96-145571e29d72",
    title: "Bình thạnh",
    image: require("../../assets/images/address/2459232ecba25009d674323308f1e126.jpg"),
  },
];

const data_room_hot = [
  {
    id: "1",
    title: "a",
    image: require("../../assets/house4.jpg"),
  },
  {
    id: "2",
    title: "a",
    image: require("../../assets/house2.jpg"),
  },
  {
    id: "3",
    title: "a",
    image: require("../../assets/house3.jpg"),
  },
  {
    id: "4",
    title: "a",
    image: require("../../assets/house4.jpg"),
  },
  {
    id: "5",
    title: "a",
    image: require("../../assets/house2.jpg"),
  },
  {
    id: "6",
    title: "a",
    image: require("../../assets/house3.jpg"),
  },
  {
    id: "7",
    title: "a",
    image: require("../../assets/house4.jpg"),
  },
  {
    id: "8",
    title: "a",
    image: require("../../assets/house2.jpg"),
  },
  {
    id: "9",
    title: "a",
    image: require("../../assets/house3.jpg"),
  },
];

const Item_Trend_Search = ({ item }) => {
  return (
    <ImageBackground
      source={item.image}
      resizeMode="stretch"
      style={styles.images__address__imageStyle}
    >
      <LinearGradient
        style={styles.images__address__cover}
        colors={["rgba(255, 255, 255, 0)", "rgb(38, 38, 38)"]}
        start={{ x: 0, y: 0 }}
        end={{ x: 0, y: 1 }}
      >
        <Text style={styles.images__address__name}>{item.title}</Text>
      </LinearGradient>
    </ImageBackground>
  );
};

const BoxSearch = ({ navigate }) => {
  return (
    <View style={styles.boxSearch}>
      <View style={styles.boxSearch_content}>
        <View style={styles.boxSearch_content_input}>
          <View style={styles.boxSearch_content_input_row}>
            <View style={styles.boxSearch_content_input_address}>
              <View style={styles.iconRow}>
                <MaterialIconsIcon
                  name="location-on"
                  style={styles.icon_address}
                ></MaterialIconsIcon>
                <Text style={styles.boxSearch_content_input_address_name}>
                  HCM
                </Text>
              </View>
            </View>
            <TextInput
              style={styles.boxSearch_content_input_content}
              placeholder="Tìm tên quận, tên đường, địa điểm"
            ></TextInput>
          </View>
        </View>
        <View style={styles.boxSearch_content_functions}>
          <View style={styles.boxSearch_content_function_row}>
            <View style={styles.boxSearch_content_function}>
              <TouchableOpacity
                onPress={() => {
                  navigate("HomeScreen");
                }}
              >
                <LinearGradient
                  style={styles.boxSearch_content_function_icon1}
                  colors={["rgb(255, 80, 80)", "rgb(255, 153, 51)"]}
                  start={{ x: 0, y: 0 }}
                  end={{ x: 0, y: 1 }}
                >
                  <MaterialCommunityIconsIcon
                    name="hexagon-multiple"
                    style={styles.icon}
                  ></MaterialCommunityIconsIcon>
                </LinearGradient>
              </TouchableOpacity>

              <Text style={styles.boxSearch_content_function_title}>
                Tìm theo nhiều quận
              </Text>
            </View>
            <View style={styles.boxSearch_content_function}>
              <LinearGradient
                style={styles.boxSearch_content_function_icon2}
                colors={["rgb(0, 153, 153)", "rgb(0, 204, 255)"]}
                start={{ x: 0, y: 0 }}
                end={{ x: 0, y: 1 }}
              >
                <MaterialCommunityIconsIcon
                  name="chart-donut-variant"
                  style={styles.icon}
                ></MaterialCommunityIconsIcon>
              </LinearGradient>
              <Text style={styles.boxSearch_content_function_title}>
                Tìm gần nơi học &amp; làm
              </Text>
            </View>
            <View style={styles.boxSearch_content_function}>
              <TouchableOpacity
                onPress={async () => {
                  const idAccount = await AsyncStorage.getItem("idAccount");
                  if (idAccount) {
                    navigate("AuthScreen");
                  } else {
                    navigate("Welcome");
                  }
                }}
              >
                <LinearGradient
                  style={styles.boxSearch_content_function_icon3}
                  colors={["rgb(204, 0, 102)", "rgb(255, 0, 102)"]}
                  start={{ x: 0, y: 0 }}
                  end={{ x: 0, y: 1 }}
                >
                  <MaterialCommunityIconsIcon
                    name="home-plus"
                    style={styles.icon}
                  ></MaterialCommunityIconsIcon>
                </LinearGradient>
              </TouchableOpacity>

              <Text style={styles.boxSearch_content_function_title1}>
                Đăng phòng
              </Text>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
};

const Trend_Search = () => {
  return (
    <View style={styles.images__address}>
      <FlatList
        horizontal
        showsHorizontalScrollIndicator={false}
        style={styles.icon_address_flatlist}
        data={DATA}
        renderItem={({ item }) => <Item_Trend_Search item={item} />}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
};

const Item_room_hot = ({ item, index, scrollX }) => {
  return (
    <View>
      <Animated.View
        style={[
          styles.room_hot_content_item,
          {
            width: Item_room_hot_size,
            transform: [
              {
                translateY: scrollX.interpolate({
                  inputRange: [
                    (index - 1) * Item_room_hot_size,
                    index * Item_room_hot_size,
                    (index + 1) * Item_room_hot_size,
                  ],
                  outputRange: [0, -30, 0],
                }),
              },
            ],
          },
        ]}
      >
        <View style={styles.room_hot_content_items}>
          <View style={styles.room_hot_content_item_image}>
            <ImageBackground
              source={item.image}
              resizeMode="cover"
              style={styles.images__room__hot__imageStyle}
            >
              <MaterialCommunityIconsIcon
                name="shield"
                style={styles.icon2}
              ></MaterialCommunityIconsIcon>
              <MaterialIconsIcon
                name="verified-user"
                style={styles.icon1}
              ></MaterialIconsIcon>
            </ImageBackground>
          </View>
          <View style={styles.room_hot_content_item_title}>
            <View style={styles.room_hot_content_item_title_category}>
              <Text style={styles.room_hot_content_item_title_category_text}>
                Phòng học, họp
              </Text>
            </View>
            <View style={styles.room_hot_content_item_title_name}>
              <Text style={styles.room_hot_content_item_title_name_text}>
                Phòng đầy dủ tiện nghi quận Bình Thạnh
              </Text>
            </View>
            <View style={styles.room_hot_content_item_title_price}>
              <Text style={styles.room_hot_content_item_title_price_text}>
                200.000 VND/giờ
              </Text>
            </View>
            <View style={styles.room_hot_content_item_title_address}>
              <Text style={styles.room_hot_content_item_title_address_text}>
                50/4 Đường Trương Văn Thành, p.Hiệp Phú, tp.Thủ Đức
              </Text>
            </View>
          </View>
        </View>
      </Animated.View>
    </View>
  );
};

const Item_room_accreditation = ({ item, numColumn }) => {
  return (
    <View
      style={[
        styles.room_accreditation_content_item,
        {
          width: width / numColumn,
        },
      ]}
    >
      <View
        style={{
          margin: 10,
          borderRadius: 13,
          backgroundColor: "white",
          elevation: 10,
        }}
      >
        <View style={styles.room_accreditation_content_item_image}>
          <ImageBackground
            source={item.image}
            resizeMode="cover"
            style={styles.images__room__accreditation__imageStyle}
          >
            <MaterialIconsIcon
              name="visibility"
              style={styles.icon2}
            ></MaterialIconsIcon>
            <MaterialIconsIcon
              name="visibility"
              style={styles.icon11}
            ></MaterialIconsIcon>
          </ImageBackground>
        </View>
        <View style={styles.room_accreditation_content_item_title}>
          <View style={styles.room_accreditation_content_item_title_category}>
            <Text
              style={styles.room_accreditation_content_item_title_category_text}
            >
              Phòng học, họp
            </Text>
          </View>
          <View style={styles.room_accreditation_content_item_title_name}>
            <Text
              style={styles.room_accreditation_content_item_title_name_text}
            >
              Phòng đầy dủ tiện nghi quận Bình Thạnh
            </Text>
          </View>
          <View style={styles.room_accreditation_content_item_title_price}>
            <Text
              style={styles.room_accreditation_content_item_title_price_text}
            >
              200.000 VND/giờ
            </Text>
          </View>
          <View style={styles.room_accreditation_content_item_title_address}>
            <Text
              style={styles.room_accreditation_content_item_title_address_text}
            >
              50/4 Đường Trương Văn Thành, p.Hiệp Phú, tp.Thủ Đức
            </Text>
          </View>
        </View>
      </View>
    </View>
  );
};

const Room_hot = () => {
  const scrollX = React.useRef(new Animated.Value(0)).current;
  return (
    <View style={styles.room_hot}>
      <Text style={styles.text}>
        Phòng nổi bật{" "}
        <MaterialIconsIcon
          name="verified-user"
          style={styles.icon_room_hot}
        ></MaterialIconsIcon>
      </Text>
      <View style={styles.room_hot_content}>
        <Animated.FlatList
          horizontal
          showsHorizontalScrollIndicator={false}
          style={styles.room_hot_flatlist}
          data={data_room_hot}
          renderItem={({ item, index }) => (
            <Item_room_hot item={item} index={index} scrollX={scrollX} />
          )}
          keyExtractor={(item) => item.id}
          snapToInterval={Item_room_hot_size}
          decelerationRate={0}
          bounces={false}
          onScroll={Animated.event(
            [{ nativeEvent: { contentOffset: { x: scrollX } } }],
            { useNativeDriver: true }
          )}
          scrollEventThrottle={16}
        />
        <View style={styles.text_bottom}>
          <Text
            style={{
              color: "rgb(0, 153, 255)",
              fontFamily: "TiltNeon-Regular",
            }}
          >
            Xem tất cả
          </Text>
        </View>
      </View>
    </View>
  );
};

const Room_accreditation = () => {
  const numColumn = 2;
  return (
    <View style={styles.room_accreditation}>
      <Text style={styles.text}>
        Phòng nhiều lượt xem{" "}
        <MaterialIconsIcon
          name="visibility"
          style={styles.icon_room_accreditation}
        ></MaterialIconsIcon>
      </Text>
      <SafeAreaView style={styles.room_accreditation_content}>
        <FlatList
          showsHorizontalScrollIndicator={false}
          scrollEnabled={false}
          style={styles.room_accreditation_flatlist}
          data={data_room_hot}
          renderItem={({ item }) => (
            <Item_room_accreditation item={item} numColumn={numColumn} />
          )}
          keyExtractor={(item) => item.id}
          numColumns={numColumn}
        />
      </SafeAreaView>
      <View style={styles.room_accreditation_footer}>
        <View style={styles.text_bottom}>
          <Text
            style={{
              color: "rgb(255, 102, 153)",
              fontFamily: "TiltNeon-Regular",
            }}
          >
            Xem tất cả
          </Text>
        </View>
      </View>
    </View>
  );
};

function Home(props) {
  const { navigate } = props.navigation;
  return (
    <View style={styles.container}>
      {/* <SafeAreaView>
        <View style={styles.upperHeader}></View>
      </SafeAreaView> */}
      <FlashMessage position="top" />
      <ScrollView
        showsVerticalScrollIndicator={false}
        showsHorizontalScrollIndicator={false}
      >
        <View style={styles.rectRow}>
          <View style={styles.imageStack}>
            <Image
              source={require("../../assets/images/slideHome/aaa.png")}
              resizeMode="cover"
              style={styles.image}
            ></Image>
            <BoxSearch navigate={navigate} />
          </View>
        </View>
        <Text style={styles.text}>Xu hướng tìm kiếm</Text>
        <Trend_Search />
        <Room_hot />
        <View style={styles.space}></View>
        <Room_accreditation />
        <View style={styles.bottom}></View>
      </ScrollView>
    </View>
  );
}

export default Home;
