import { View, Text, Image } from "react-native";
import COLORS from "../consts/colors";
import theme from "../styles/theme";
import IpAddress from "../consts/variable";
import axios from "axios";
import { TouchableOpacity } from "react-native";
import { showMessage, hideMessage } from "react-native-flash-message";
const AlertBuyPackage = (prors) => {
  const buyPackage = async () => {
    const idaccount = prors.idaccount;
    const idservicepack = prors.idservicepack;
    const duration = prors.duration;
    const amount = prors.amount;

    const add = await axios
      .post("http://" + IpAddress + ":8000/servicepackinuse", {
        idaccount,
        idservicepack,
        duration,
        amount,
      })
      .then(async (item) => {
        showMessage({
          message: "Mua gói thành công  ✔",
          description: "Cảm ơn bạn đã sử dụng dịch vụ",
          type: "success",
        });
        prors.closeAdd(false);
        prors.navigation.navigate("Main");
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

            flexDirection: "row",
          }}
        >
          <View>
            <View style={{ padding: 10 }}>
              <Text
                style={{
                  fontFamily: theme.FontMain,
                  fontSize: 15,
                  color: COLORS.dark,
                  paddingLeft: 10,
                }}
              >
                Xác nhận
              </Text>
            </View>
            <View style={{ paddingLeft: 10, paddingVertical: 20 }}>
              <Text
                style={{
                  fontFamily: theme.FontMain,
                  fontSize: 15,
                  color: COLORS.grey,
                  paddingLeft: 10,
                }}
              >
                Bạn có muốn gói hay không ?
              </Text>
            </View>
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
          onPress={() => buyPackage()}
        >
          <Text
            style={{ fontFamily: theme.FontMain, fontSize: 18, color: "white" }}
          >
            Xác nhận
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default AlertBuyPackage;
