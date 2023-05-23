import { useState, useEffect } from "react";
import { View, Text, Image } from "react-native";
import { Rating, AirbnbRating } from "react-native-ratings";
import AsyncStorage from "@react-native-async-storage/async-storage";
import axios from "axios";
import { showMessage, hideMessage } from "react-native-flash-message";
import IpAddress from "../consts/variable";
import COLORS from "../consts/colors";
import theme from "../styles/theme";
import { TextInput } from "react-native";
import { TouchableOpacity } from "react-native";

const Addcomment = (prors) => {
  const navigation = prors.navigation;
  const idroom = prors.idroom;
  const idbookingroom = prors.idbookingroom;
  const ratingCompleted = (rating) => {
    setStar(rating);
  };
  const datenow = new Date();
  const daynow = datenow.getDate();
  const monthnow = datenow.getMonth() + 1;
  const yearnow = datenow.getFullYear();

  const [user, setUser] = useState({});
  const [content, setContent] = useState("");
  const [star, setStar] = useState(0);
  const [id, setId] = useState("");
  useEffect(() => {
    getUser();
    loadrate();
  }, []);
  const getUser = async () => {
    const idAccount = await AsyncStorage.getItem("idAccount");

    await axios
      .get("http://" + IpAddress + ":8000/account/" + idAccount)
      .then(async (response) => {
        const result = response.data;
        setUser(result);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const loadrate = async () => {
    await axios
      .get("http://" + IpAddress + ":8000/evaluate/" + idbookingroom)
      .then((res) => {
        setStar(res.data.point);
        setContent(res.data.content);
        setId(res.data._id);
      });
  };
  const updaterate = async () => {
    const idAccount = await AsyncStorage.getItem("idAccount");
    const date = new Date();
    await axios
      .put("http://" + IpAddress + ":8000/evaluate/" + id, {
        idaccount: idAccount,
        idroom: idroom,
        idbookingroom: idbookingroom,
        point: star,
        content: content,
        date: date,
      })
      .then((res) => {
        showMessage({
          message: "Phản hồi đã được lưu lại  ✔",
          description: "Cảm ơn bạn đã phản hồi",
          type: "success",
        });
        prors.closeAdd(false);
      });
  };

  return (
    <View
      style={{
        position: "absolute",
        width: "100%",
        height: "100%",
        backgroundColor: theme.BG_05,
        justifyContent: "center",
        alignItems: "center",
        zIndex: 1000,
      }}
    >
      <View
        style={{
          width: "80%",
          backgroundColor: COLORS.light,
          borderRadius: 13,
          zIndex: 2000,
        }}
      >
        <View
          style={{
            width: "100%",
            height: 70,
            flexDirection: "row",
          }}
        >
          <View style={{ padding: 10 }}>
            <Image
              style={{ borderRadius: 50, width: 50, height: 50 }}
              source={{
                uri: "http://" + IpAddress + ":8000/singleimage/" + user.avatar,
              }}
            />
          </View>
          <View>
            <View style={{ padding: 10 }}>
              <Text
                style={{
                  fontFamily: theme.FontMain,
                  fontSize: 15,
                  color: COLORS.dark,
                }}
              >
                {user.firstname + " " + user.lastname}
              </Text>
            </View>
            <View style={{ paddingLeft: 10 }}>
              <Text
                style={{
                  fontFamily: theme.FontMain,
                  fontSize: 15,
                  color: COLORS.grey,
                }}
              >
                Ngày {daynow} tháng {monthnow} năm {yearnow}
              </Text>
            </View>
          </View>
        </View>
        <View
          style={{
            width: "100%",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <View
            style={{
              width: "90%",
              borderColor: COLORS.grey,
              borderWidth: 1,
              borderRadius: 5,
            }}
          >
            <TextInput
              multiline={true}
              value={content}
              style={{ fontFamily: theme.FontMain, padding: 10 }}
              placeholder="Viết bình luận của bạn"
              onChangeText={(value) => {
                setContent(value);
              }}
            />
          </View>
        </View>
        <View
          style={{
            width: "100%",
            height: 80,
            flexDirection: "row",
          }}
        >
          <View style={{ width: "100%" }}>
            <AirbnbRating
              count={5}
              reviews={[
                "Không tốt",
                "Tạm ổn",
                "Bình thường",
                "Tốt",
                "Tuyệt vời",
              ]}
              showRating
              defaultRating={star}
              size={20}
              reviewColor={COLORS.dark}
              reviewSize={20}
              onFinishRating={ratingCompleted}
            />
          </View>
        </View>
      </View>
      <View
        style={{
          marginTop: 10,
          width: "60%",
          flexDirection: "row",
          justifyContent: "space-between",
          zIndex: 2000,
        }}
      >
        <TouchableOpacity
          style={{
            width: 100,
            height: 50,
            backgroundColor: COLORS.grey,
            justifyContent: "center",
            alignItems: "center",
            borderRadius: 13,
          }}
          onPress={() => prors.closeAdd(false)}
        >
          <Text style={{ fontFamily: theme.FontMain, fontSize: 18 }}>Hủy</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            width: 100,
            height: 50,
            backgroundColor: theme.PRIMARY_BG_COLOR,
            justifyContent: "center",
            alignItems: "center",
            borderRadius: 13,
          }}
          onPress={() => updaterate()}
        >
          <Text
            style={{ fontFamily: theme.FontMain, fontSize: 18, color: "white" }}
          >
            Bình luận
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Addcomment;
