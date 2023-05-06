import { View, Text, Image } from "react-native";
import { Rating, AirbnbRating } from "react-native-ratings";
import COLORS from "../consts/colors";
import theme from "../styles/theme";
import { TextInput } from "react-native";
import { TouchableOpacity } from "react-native";

const DeleteAddDay = (prors) => {
  return (
    <View
      style={{
        position: "absolute",
        width: "100%",
        height: "100%",
        backgroundColor: theme.BG_05,
        justifyContent: "center",
        alignItems: "center",
        zIndex: 4000,
      }}
    >
      <View
        style={{
          width: "80%",
          backgroundColor: COLORS.light,
          borderRadius: 13,
          zIndex: 5000,
        }}
      >
        <View
          style={{
            width: "100%",
            height: 50,
            flexDirection: "row",
          }}
        >
          <View style={{ padding: 10 }}></View>
          <View>
            <View style={{ padding: 10 }}>
              <Text
                style={{
                  fontFamily: theme.FontMain,
                  fontSize: 15,
                  color: COLORS.dark,
                }}
              >
                Bạn thực sự xóa ngày ?
              </Text>
            </View>
          </View>
        </View>
        <View
          style={{
            width: "100%",
            justifyContent: "center",
            alignItems: "center",
            paddingBottom: 20,
          }}
        >
          <Text
            style={{
              fontFamily: theme.FontMain,
              fontSize: 25,
              color: COLORS.grey,
            }}
          >
            {prors.day}
          </Text>
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
          onPress={() => prors.closeDelete(false)}
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
            Xóa
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default DeleteAddDay;
