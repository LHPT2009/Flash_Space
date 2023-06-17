import { useContext, useEffect, useState } from "react";
import { ScrollView, View, Text, TouchableOpacity, Image } from "react-native";
import Icon from "react-native-vector-icons/MaterialIcons";
import * as MediaLibrary from "expo-media-library";
import axios from "axios";
import AsyncStorage from "@react-native-async-storage/async-storage";
import COLORS from "../consts/colors";
import theme from "../styles/theme";
import { InformationAddRoomContext } from "../context/InformationAddRoom";
import IpAddress from "../consts/variable";

const ViewImage = ({ navigation, idRoom }) => {
  const [result, setResult] = useState({});
  const [image, setImage] = useState({});
  const [image1, setImage1] = useState({});
  const [image2, setImage2] = useState({});
  const [image3, setImage3] = useState({});
  useEffect(() => {
    getImage();
  }, []);

  const getImage = async () => {
    await axios
      .get("http://" + IpAddress + ":8000/image/byroom/" + idRoom)
      .then(async (response) => {
        const result = response.data;
        if (result != []) {
          setResult(result);
          setImage(result[0]);
          setImage1(result[1]);
          setImage2(result[2]);
          setImage3(result[3]);
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };
  const postInformation = async (req) => {
    // try {
    const idAccount = await AsyncStorage.getItem("idAccount");
    console.log(idAccount);
    const dt = new FormData();
    dt.append("subject", informations.subject);
    dt.append("describe", informations.describe);
    dt.append("length", informations.length);
    dt.append("width", informations.width);
    dt.append("idcareer", informations.career);
    dt.append("price", informations.price);
    dt.append("housenumberstreetname", informations.housenumberstreetname);
    dt.append("idprovince", informations.province);
    dt.append("iddistrict", informations.district);
    dt.append("idward", informations.ward);
    dt.append("quantity", informations.quantity);
    dt.append("workinghours", JSON.stringify(listWork));
    for (let i = 0; i < informations.multiImage.length; i++) {
      const asset = await MediaLibrary.createAssetAsync(
        informations.multiImage[i].uri
      );
      dt.append("multifiles[]", {
        uri: informations.multiImage[i].uri,
        name: asset.filename,
        type: "image/jpeg",
      });
    }
    dt.append("longitude", informations.longitude);
    dt.append("latitude", informations.latitude);
    dt.append("idaccount", idAccount);

    const result = await axios.post("http://" + IpAddress + ":8000/room/", dt, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
    if (result.status == 200) {
      navigation.navigate("Main");
    } else {
      alert("Đã có lỗi");
    }
    // } catch (error) {
    //   console.log(error);
    // }
  };

  return (
    <View style={{ width: "100%", height: "100%" }}>
      <View
        style={{ width: "100%", height: "90%", backgroundColor: COLORS.light }}
      >
        <ScrollView
          showsVerticalScrollIndicator={false}
          showsHorizontalScrollIndicator={false}
          style={{ paddingTop: 30 }}
        >
          <View
            style={{
              width: "100%",
              paddingVertical: 15,
              alignItems: "center",
            }}
          >
            <View
              style={{
                width: "90%",
                borderRadius: 13,
                backgroundColor: COLORS.white,
                marginVertical: 10,
                elevation: 10,
              }}
            >
              <View
                style={{
                  width: "100%",
                  height: 40,
                  justifyContent: "center",
                }}
              >
                <Text
                  style={{
                    fontFamily: theme.FontMain,
                    fontSize: 16,
                    paddingLeft: 20,
                    color: COLORS.grey,
                  }}
                >
                  Hình ảnh
                </Text>
              </View>
              <View
                style={{
                  width: "100%",
                  alignItems: "center",
                }}
              >
                <View
                  style={{
                    width: "90%",
                    justifyContent: "center",
                    alignItems: "center",
                    paddingBottom: 15,
                  }}
                >
                  <View
                    style={{
                      width: "100%",
                      flexDirection: "row",
                      alignItems: "center",
                    }}
                  >
                    <View
                      style={{
                        width: "50%",
                        height: 150,
                        justifyContent: "center",
                        alignItems: "center",
                      }}
                    >
                      <TouchableOpacity
                        style={{
                          width: "85%",
                          height: "85%",
                          borderRadius: 13,
                          backgroundColor: COLORS.light,
                          justifyContent: "center",
                          alignItems: "center",
                        }}
                        onPress={() =>
                          navigation.navigate("TakephotoScreenRoom")
                        }
                      >
                        {image ? (
                          <Image
                            source={{
                              uri:
                                "http://" +
                                IpAddress +
                                ":8000/singleimage/" +
                                image.filename,
                            }}
                            style={{
                              flex: 5,
                              borderRadius: 20,
                              flexDirection: "column",
                              justifyContent: "space-between",
                              width: "100%",
                              height: "100%",
                            }}
                          />
                        ) : (
                          <Icon name="add" size={30} color={COLORS.grey} />
                        )}
                      </TouchableOpacity>
                    </View>
                    <View
                      style={{
                        width: "50%",
                        height: 150,
                        justifyContent: "center",
                        alignItems: "center",
                      }}
                    >
                      <TouchableOpacity
                        style={{
                          width: "85%",
                          height: "85%",
                          borderRadius: 13,
                          backgroundColor: COLORS.light,
                          justifyContent: "center",
                          alignItems: "center",
                        }}
                        onPress={() =>
                          navigation.navigate("TakephotoScreenRoom1")
                        }
                      >
                        {image1 ? (
                          <Image
                            source={{
                              uri:
                                "http://" +
                                IpAddress +
                                ":8000/singleimage/" +
                                image1.filename,
                            }}
                            style={{
                              flex: 5,
                              borderRadius: 20,
                              flexDirection: "column",
                              justifyContent: "space-between",
                              width: "100%",
                              height: "100%",
                            }}
                          />
                        ) : (
                          <Icon name="add" size={30} color={COLORS.grey} />
                        )}
                      </TouchableOpacity>
                    </View>
                  </View>
                  <View
                    style={{
                      width: "100%",
                      flexDirection: "row",
                      alignItems: "center",
                    }}
                  >
                    <View
                      style={{
                        width: "50%",
                        height: 150,
                        justifyContent: "center",
                        alignItems: "center",
                      }}
                    >
                      <TouchableOpacity
                        style={{
                          width: "85%",
                          height: "85%",
                          borderRadius: 13,
                          backgroundColor: COLORS.light,
                          justifyContent: "center",
                          alignItems: "center",
                        }}
                        onPress={() =>
                          navigation.navigate("TakephotoScreenRoom2")
                        }
                      >
                        {image2 ? (
                          <Image
                            source={{
                              uri:
                                "http://" +
                                IpAddress +
                                ":8000/singleimage/" +
                                image2.filename,
                            }}
                            style={{
                              flex: 5,
                              borderRadius: 20,
                              flexDirection: "column",
                              justifyContent: "space-between",
                              width: "100%",
                              height: "100%",
                            }}
                          />
                        ) : (
                          <Icon name="add" size={30} color={COLORS.grey} />
                        )}
                      </TouchableOpacity>
                    </View>
                    <View
                      style={{
                        width: "50%",
                        height: 150,
                        justifyContent: "center",
                        alignItems: "center",
                      }}
                    >
                      <TouchableOpacity
                        style={{
                          width: "85%",
                          height: "85%",
                          borderRadius: 13,
                          backgroundColor: COLORS.light,
                          justifyContent: "center",
                          alignItems: "center",
                        }}
                        onPress={() =>
                          navigation.navigate("TakephotoScreenRoom3")
                        }
                      >
                        {image3 ? (
                          <Image
                            source={{
                              uri:
                                "http://" +
                                IpAddress +
                                ":8000/singleimage/" +
                                image3.filename,
                            }}
                            style={{
                              flex: 5,
                              borderRadius: 20,
                              flexDirection: "column",
                              justifyContent: "space-between",
                              width: "100%",
                              height: "100%",
                            }}
                          />
                        ) : (
                          <Icon name="add" size={30} color={COLORS.grey} />
                        )}
                      </TouchableOpacity>
                    </View>
                  </View>
                </View>
              </View>
            </View>
          </View>
        </ScrollView>
      </View>
      {image != "" && image1 != "" && image2 != "" && image3 != "" ? (
        <TouchableOpacity
          style={{
            width: "100%",
            height: "10%",
            backgroundColor: theme.PRIMARY_BG_COLOR,
            borderTopLeftRadius: 13,
            borderTopRightRadius: 13,
            justifyContent: "center",
            alignItems: "center",
          }}
          onPress={() => postInformation()}
        >
          <Text
            style={{
              fontFamily: theme.FontMain,
              fontSize: 19,
              color: COLORS.white,
            }}
          >
            Đăng tin
          </Text>
        </TouchableOpacity>
      ) : (
        <TouchableOpacity
          style={{
            width: "100%",
            height: "10%",
            backgroundColor: COLORS.gray,
            borderTopLeftRadius: 13,
            borderTopRightRadius: 13,
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Text
            style={{
              fontFamily: theme.FontMain,
              fontSize: 19,
              color: COLORS.white,
            }}
          >
            Đăng tin
          </Text>
        </TouchableOpacity>
      )}
    </View>
  );
};

export default ViewImage;
