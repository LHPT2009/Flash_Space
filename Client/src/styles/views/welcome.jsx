import { StyleSheet } from "react-native";
import theme from "../theme";
const styles = StyleSheet.create({
  logo: {
    width: theme.WIDTH_FULL,
    height: "20%",
  },
  container: {
    height: theme.HEIGHT_FULL,
    width: theme.WIDTH_FULL,
  },
  container__background: {
    width: theme.WIDTH_FULL,
    height: theme.HEIGHT_FULL,
    backgroundColor: "rgba(52, 52, 52, 0.8)",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    zIndex: 1,
  },
  container__background_images: {
    width: theme.WIDTH_FULL,
    height: theme.HEIGHT_FULL,
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    zIndex: -1,
  },
  container__text: {
    color: "white",
    fontSize: 18,
  },
  header: {
    width: theme.WIDTH_FULL,
    height: "60%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    zIndex: 2,
  },
  header__0: {
    width: theme.WIDTH_FULL,
    height: "0%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    zIndex: 2,
  },
  header__40: {
    width: theme.WIDTH_FULL,
    height: "20%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    zIndex: 2,
  },
  header__text: {
    color: "white",
    fontSize: 35,
    width: "70%",
    opacity: 0.8,
  },
  header__text__x2: {
    color: "white",
    fontSize: 45,
    width: "70%",
    opacity: 0.9,
  },
  header__text__x3: {
    color: "white",
    fontSize: 48,
    width: "70%",
  },
  buttons: {
    width: theme.WIDTH_FULL,
    height: "40%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    paddingBottom: 50,
    zIndex: 2,
  },
  buttons__40: {
    width: theme.WIDTH_FULL,
    height: "40%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    paddingBottom: 50,
    zIndex: 2,
  },
  buttons__60: {
    width: theme.WIDTH_FULL,
    height: "100%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    paddingBottom: 50,
    zIndex: 2,
  },
  button: {
    width: "60%",
    height: 60,
    backgroundColor: theme.PRIMARY_BG_COLOR,
    borderRadius: 50,
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    marginVertical: 10,
    borderColor: "white",
    borderWidth: 1,
    opacity: 0.75,
  },

  button__text: {
    color: "white",
    fontSize: 22,
  },

  register: {
    width: theme.WIDTH_FULL,
    height: "100%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-end",
    alignItems: "flex-end",

    zIndex: 2,
  },
});

export default styles;
