import { StyleSheet } from "react-native";
import theme from "../theme";

const style = StyleSheet.create({
  container: {
    width: "100%",
    height: "90%",
    display: "flex",
    justifyContent: "flex-end",
    backgroundColor: "white",
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    marginBottom: -50,
    zIndex: 100,
  },
  content: {
    width: "100%",
  },
  close: {
    width: "95%",
    display: "flex",
    flexDirection: "row",
    justifyContent: "flex-end",
    paddingVertical: 10,
  },
  content__box: {
    width: theme.WIDTH_FULL,
    alignItems: "center",
  },
  content__box__input: {
    width: "75%",
    height: 50,
    borderColor: "black",
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    borderRadius: 10,
    backgroundColor: "rgba(0, 66, 116, 0.2)",
    paddingHorizontal: 20,
    marginTop: 10,
  },
  content__box__title: {
    paddingTop: 20,
    width: "75%",
  },
  content__box__title_text: {
    color: "gray",
  },
  content__box__input_text: {
    fontSize: 16,
  },
  content__box__forgetPassword: {
    width: "75%",
    paddingTop: 5,
    display: "flex",
    flexDirection: "row",
    justifyContent: "flex-end",
  },
  content__box__forgetPassword_text: {
    color: "gray",
  },
  content__box__button: {
    width: "75%",
    height: 50,
    borderColor: "black",
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
    backgroundColor: "rgba(0, 66, 116, 1)",
    paddingHorizontal: 20,
    marginTop: 30,
  },
  content__box__button_text: {
    color: "white",
    fontSize: 16,
  },
});

export default style;
