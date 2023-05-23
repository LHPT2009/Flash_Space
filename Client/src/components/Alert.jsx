import { View, Text, Image } from "react-native";
import COLORS from "../consts/colors";
import theme from "../styles/theme";
import IpAddress from "../consts/variable";
import axios from "axios";
import { TouchableOpacity } from "react-native";
import { showMessage, hideMessage } from "react-native-flash-message";
import { ListTimeSlotContext } from "../context/ListTimeSlotContext";
import { useContext } from "react";
const Alert = (prors) => {
  const { deleteListTimeSlot } = useContext(ListTimeSlotContext);
  const addorder = async () => {
    const idaccount = prors.idaccount;
    const total = prors.total;
    const timeslots = prors.timeslots;
    const add = await axios
      .post("http://" + IpAddress + ":8000/bookingroom", {
        idaccount,
        timeslots,
        total,
      })
      .then(async (item) => {
        showMessage({
          message: "Gửi yêu cầu thành công  ✔",
          description: "Yêu cầu của bạn đã được gửi cho chủ sở hữu",
          type: "success",
        });
        await deleteListTimeSlot();
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
                Bạn có muốn thuê phòng ?
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
          onPress={() => addorder()}
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

export default Alert;
