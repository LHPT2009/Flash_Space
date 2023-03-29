import { View, Text, Image } from "react-native";
import { Rating, AirbnbRating } from "react-native-ratings";
import COLORS from "../consts/colors";
import theme from "../styles/theme";
import { TextInput } from "react-native";
import { TouchableOpacity } from "react-native";

const Addcomment = (prors) => {
  const ratingCompleted = (rating) => {
    console.log("Rating is: " + rating);
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
              source={require("../../assets/images/avatar/123.jpeg")}
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
                Nguyễn Văn Chuẩn
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
                28/03/2023
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
              style={{ fontFamily: theme.FontMain, padding: 10 }}
              placeholder="Viết bình luận của bạn"
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
              defaultRating={5}
              size={20}
              reviewColor={COLORS.dark}
              reviewSize={20}
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
