import styled from "styled-components";
import Theme from "@styles/theme";

export const Container = styled.View({
  flex: 1,
  paddingHorizontal: Theme.MARGIN_1x,
  alignItems: "center",
  backgroundColor: Theme.PRIMARY_BG_COLOR,
});

export const Card = styled.TouchableOpacity({
  width: "100%",
});

export const UserInfo = styled.View({
  flexDirection: "row",
  justifyContent: "space-between",
});

export const UserImgWrapper = styled.View({
  paddingVertical: 15,
});

export const UserImg = styled.Image({
  width: 70,
  height: 70,
  borderRadius: 50,
});

export const TextSection = styled.View({
  flexDirection: "column",
  padding: 20,
  paddingLeft: 0,
  marginLeft: Theme.MARGIN_2x,
  width: 300,
  // borderBottomWidth: 1,
  // borderBottomColor: '#red',
});

export const UserInfoText = styled.View({
  flexDirection: "row",
  justifyContent: "space-between",
  marginTop: Theme.MARGIN_x,
});

export const UserName = styled.Text({
  fontSize: Theme.FONT_SIZE_LARGE,
  fontWeight: Theme.BOLD_NORMAL,
  fontFamily: "Lato-Regular",
  color: "black",
});

export const PostTime = styled.Text({
  fontSize: Theme.FONT_SIZE_SMALL_X,
  color: Theme.PRIMARY_COLOR,
  fontFamily: "Lato-Regular",
});
