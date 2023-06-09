import React, { useContext, useState } from "react";
import { View, TouchableOpacity, Text } from "react-native";
import COLORS from "../consts/colors";
import theme from "../styles/theme";
import { ListTimeSlotContext } from "../context/ListTimeSlotContext";
const ButtonTimeslot = (props) => {
  console.log("Đã vô");
  const [active, setActive] = useState(false);
  const { timeslots, editListTimeSlot } = useContext(ListTimeSlotContext);
  const handleClick = () => {
    setActive(!active);
    const date = new Date(props.date);
    const day = date.getDate();
    const month = date.getMonth() + 1;
    const year = date.getFullYear();

    const idroom = props.idroom;
    const idworkinghours = props.idworkinghours;
    const roomname = props.roomname;
    const starttime = props.starttime;
    const endtime = props.endtime;
    const pricetime = props.pricetime;
    const timeslot = {
      idroom,
      idworkinghours,
      roomname,
      starttime,
      endtime,
      pricetime,
      date: `${day}-${month}-${year}`,
    };
    editListTimeSlot(timeslot);
  };

  const existedTimeslot = timeslots.find((item) => {
    return item.idworkinghours === props.idworkinghours;
  });
  if (existedTimeslot != undefined) {
    return (
      <View
        style={{
          width: "33%",
          height: 60,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <TouchableOpacity
          style={{
            width: "90%",
            height: "60%",
          }}
          onPress={() => {
            handleClick();
            setActive(false);
          }}
        >
          <View
            style={{
              width: "100%",
              height: "100%",
              backgroundColor: theme.PRIMARY_BG_COLOR,
              borderRadius: 7,
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Text
              style={{
                fontFamily: theme.FontMain,
                fontSize: 16,
                color: "white",
              }}
            >
              {props.starttime + "-" + props.endtime}
            </Text>
          </View>
        </TouchableOpacity>
      </View>
    );
  }

  return (
    <View
      style={{
        width: "33%",
        height: 60,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <TouchableOpacity
        style={{
          width: "90%",
          height: "60%",
        }}
        onPress={() => handleClick()}
      >
        {active ? (
          <View
            style={{
              width: "100%",
              height: "100%",
              backgroundColor: theme.PRIMARY_BG_COLOR,
              borderRadius: 7,
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Text
              style={{
                fontFamily: theme.FontMain,
                fontSize: 16,
                color: "white",
              }}
            >
              {props.starttime + "-" + props.endtime}
            </Text>
          </View>
        ) : (
          <View
            style={{
              width: "100%",
              height: "100%",
              backgroundColor: COLORS.gray,
              borderRadius: 7,
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Text style={{ fontFamily: theme.FontMain, fontSize: 16 }}>
              {props.starttime + "-" + props.endtime}
            </Text>
          </View>
        )}
      </TouchableOpacity>
    </View>
  );
};

export default ButtonTimeslot;
