import { StyleSheet } from "react-native";
import theme from "./theme";

const styles = StyleSheet.create({
  tabBar: {
    position: "absolute",
    elevation: 30,
    height: 75,
    backgroundColor: theme.PRIMARY_BG_WHITE,
    // borderColor: theme.PRIMARY_BG_COLOR,
    // borderWidth: 2,
  },
  tabIconContainer: {
    position: "absolute",
    top: 12,
    alignItems: "center",
    justifyContent: "center",

    padding: 10,
    borderRadius: 13,
  },
  tabIcon: {
    width: 28,
    height: 28,
  },
});

export default styles;
