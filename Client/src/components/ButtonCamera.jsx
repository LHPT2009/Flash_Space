import * as React from "react";
import { Text, TouchableOpacity, StyleSheet } from "react-native";
import { Entypo } from "@expo/vector-icons";
// import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import { MaterialIcons } from "@expo/vector-icons";
import COLORS from "../consts/colors";
import theme from "../styles/theme";

export default function ButtonCamera({ title, onPress, icon, color }) {
  return (
    <TouchableOpacity onPress={onPress} style={styles.button}>
      <Entypo name={icon} size={28} color={color ? color : "#f1f1f1"} />
      <Text style={styles.text}>{title}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    height: 40,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    fontSize: 16,
    color: "#f1f1f1",
    marginLeft: 10,
    fontFamily: theme.FontMain,
  },
});
