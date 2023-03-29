import React, { useState } from "react";
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
import { Actionsheet, Box, useDisclose } from "native-base";
import COLORS from "../consts/colors";
import Icon from "react-native-vector-icons/MaterialIcons";
const { width } = Dimensions.get("screen");
import houses from "../consts/houses";
import theme from "../styles/theme";

const RoomsScreen = ({ navigation }) => {
  const categoryList = ["Lưới", "Dọc", "Ngang"];
  const [selectedCategoryIndex, setSelectedCategoryIndex] = React.useState(0);
  const { isOpen, onOpen, onClose } = useDisclose();
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
            <Image source={house.image} style={style.optionsCardImage} />
            {/* Option title */}
            <Text
              style={{
                marginTop: 10,
                fontSize: 15,
                fontWeight: "bold",
                height: 50,
              }}
            >
              {house.title}
            </Text>
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
                200.000 VND/Giờ
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
          <Image source={house.image} style={style.cardImage} />
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
                {house.title}
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
              {house.location}
            </Text>
            <Text
              style={{
                color: theme.PRIMARY_BG_COLOR,
                fontSize: 14,
                marginTop: 5,
                fontFamily: theme.FontMain,
              }}
            >
              200.000 VND/Giờ
            </Text>
            {/* Facilities container */}
            <View style={{ marginTop: 10, flexDirection: "row" }}>
              <View style={style.facility}>
                <Icon name="aspect-ratio" size={18} />
                <Text style={style.facilityText}>100m</Text>
              </View>
            </View>
          </View>
        </View>
      </Pressable>
    );
  };

  // const Filter = () => {
  //   const {
  //     isOpen,
  //     onOpen,
  //     onClose
  //   } = useDisclose();
  //   return <Center>
  //       <Button onPress={onOpen}>Actionsheet</Button>
  //       <Actionsheet isOpen={isOpen} onClose={onClose}>
  //         <Actionsheet.Content>
  //           <Box w="100%" h={60} px={4} justifyContent="center">
  //             <Text fontSize="16" color="gray.500" _dark={{
  //             color: "gray.300"
  //           }}>
  //               Albums
  //             </Text>
  //           </Box>
  //           <Actionsheet.Item>Delete</Actionsheet.Item>
  //           <Actionsheet.Item isDisabled>Share</Actionsheet.Item>
  //           <Actionsheet.Item>Play</Actionsheet.Item>
  //           <Actionsheet.Item>Favourite</Actionsheet.Item>
  //           <Actionsheet.Item>Cancel</Actionsheet.Item>
  //         </Actionsheet.Content>
  //       </Actionsheet>
  //     </Center>;
  // }

  return (
    <SafeAreaView style={{ backgroundColor: COLORS.white, flex: 1 }}>
      {/* Customise status bar */}
      <StatusBar
        translucent={false}
        backgroundColor={COLORS.white}
        barStyle="dark-content"
      />
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
            key={"_"}
            showsHorizontalScrollIndicator={false}
            data={houses}
            style={[style.optionListsContainer, { width: width }]}
            renderItem={({ item }) => <CardGrid house={item} />}
            keyExtractor={(item) => "_" + item.id}
            numColumns={2}
            scrollEnabled={false}
          />
        ) : selectedCategoryIndex == 1 ? (
          <FlatList
            scrollEnabled={false}
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={{ paddingLeft: 20, paddingVertical: 20 }}
            data={houses}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => <Card house={item} />}
          />
        ) : (
          <FlatList
            snapToInterval={width - 20}
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={{ paddingLeft: 20, paddingVertical: 20 }}
            horizontal
            data={houses}
            renderItem={({ item }) => <Card house={item} />}
          />
        )}
        <View style={style.bottom}></View>
      </ScrollView>
      <Actionsheet isOpen={isOpen} onClose={onClose}>
        <Actionsheet.Content>
          <ScrollView
            style={{ width: "100%" }}
            showsVerticalScrollIndicator={false}
            showsHorizontalScrollIndicator={false}
          >
            <Box w="100%" h={600} px={4} justifyContent="center">
              <Text
                fontSize="16"
                color="gray.500"
                _dark={{
                  color: "gray.300",
                }}
              >
                Albums
              </Text>
            </Box>
            <Box w="100%" h={600} px={4} justifyContent="center">
              <Text
                fontSize="16"
                color="gray.500"
                _dark={{
                  color: "gray.300",
                }}
              >
                Albums
              </Text>
            </Box>
          </ScrollView>
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
