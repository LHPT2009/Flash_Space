import { ScrollView, View, Text, TouchableOpacity } from "react-native";
import { Checkbox, Input, Radio } from "native-base";
import Icon from "react-native-vector-icons/MaterialIcons";
import COLORS from "../consts/colors";
import theme from "../styles/theme";
import { useEffect, useState } from "react";
import IpAddress from "../consts/variable";
import axios from "axios";

const PostScreen = ({ navigation }) => {
  const [subject, setSubject] = useState("");
  const [describe, setDescribe] = useState("");
  const [length, setLength] = useState("");
  const [width, setWidth] = useState("");
  const [price, setPrice] = useState("");
  const [longitude, setLongitude] = useState("");
  const [latitude, setLatitude] = useState("");
  const [housenumberstreetname, setHousenumberstreetname] = useState("");
  const [listCareer, setListCareer] = useState([]);

  useEffect(() => {
    getAllCareer();
  }, []);
  const getAllCareer = async () => {
    const req = await axios.get("http://" + IpAddress + ":8000/career/");
    if (req.status == 200) {
      console.log(req.data);
      setListCareer(req.data);
    }
  };

  const onChangeSubject = (event) => {
    setSubject(event);
  };
  const onChangeDescribe = (event) => {
    setDescribe(event);
  };
  const onChangeLength = (event) => {
    setLength(event);
  };

  const onChangeWidth = (event) => {
    setWidth(event);
  };

  const onChangePrice = (event) => {
    setPrice(event);
  };

  const onChangeLongitude = (event) => {
    setLongitude(event);
  };

  const onChangeLatitude = (event) => {
    setLatitude(event);
  };

  const onHousenumberstreetname = (event) => {
    setHousenumberstreetname(event);
  };

  return (
    <View style={{ width: "100%", height: "100%" }}>
      <View
        style={{ width: "100%", height: "90%", backgroundColor: COLORS.light }}
      >
        {/* <ScrollView>
          <View
            style={{
              width: "100%",
              alignItems: "center",
              backgroundColor: "green",
            }}
          >
            <View
              style={{
                width: "90%",
                backgroundColor: "violet",
                marginVertical: 10,
              }}
            >
              <View
                style={{ width: "100%", height: 50, backgroundColor: "red" }}
              ></View>
            </View>
          </View>
          <View
            style={{
              width: "100%",
              alignItems: "center",
              backgroundColor: "green",
            }}
          >
            <View
              style={{
                width: "90%",
                backgroundColor: "violet",
                marginVertical: 10,
              }}
            >
              <Text>aaaaa</Text>
            </View>
          </View>
        </ScrollView> */}
        <ScrollView
          showsVerticalScrollIndicator={false}
          showsHorizontalScrollIndicator={false}
        >
          <View
            style={{
              width: "100%",
              height: 50,
              justifyContent: "flex-end",
              alignItems: "center",
            }}
          >
            <Text
              style={{
                fontFamily: theme.FontMain,
                fontSize: 17,
                color: COLORS.dark,
              }}
            >
              Bước 1: Nhập thông tin cơ bản của phòng
            </Text>
          </View>
          <View
            style={{
              width: "100%",
              height: 80,
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <View
              style={{
                width: "50%",
                height: "40%",
                flexDirection: "row",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <View
                style={{
                  width: 30,
                  height: 30,
                  backgroundColor: theme.PRIMARY_BG_COLOR,
                  borderRadius: 50,
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Text style={{ color: "white" }}>1</Text>
              </View>
              <View
                style={{
                  width: 90,
                  height: 7,
                  backgroundColor: COLORS.grey,
                }}
              ></View>
              <View
                style={{
                  width: 30,
                  height: 30,
                  backgroundColor: COLORS.grey,
                  borderRadius: 50,
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Text style={{ color: "black" }}>2</Text>
              </View>
            </View>
          </View>
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
                  Tiêu đề
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
                      justifyContent: "center",
                    }}
                  >
                    <Input
                      value={subject}
                      multiline={true}
                      onChangeText={onChangeSubject}
                      variant="filled"
                      placeholder="Vui lòng nhập tiêu đề"
                    />
                  </View>
                </View>
              </View>
            </View>
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
                  Nội dung
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
                      justifyContent: "center",
                    }}
                  >
                    <Input
                      multiline={true}
                      value={describe}
                      onChangeText={onChangeDescribe}
                      variant="filled"
                      placeholder="Vui lòng nhập nội dung"
                    />
                  </View>
                </View>
              </View>
            </View>
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
                  Thể loại
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
                      justifyContent: "center",
                    }}
                  >
                    <Radio.Group
                      defaultValue="1"
                      name="myRadioGroup"
                      accessibilityLabel="Pick your favorite number"
                    >
                      {listCareer.map((item) => {
                        <Radio value={item} my={1}>
                          <Text>chuan</Text>
                        </Radio>;
                      })}
                    </Radio.Group>
                  </View>
                </View>
              </View>
            </View>
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
                  Giá thuê
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
                      justifyContent: "center",
                    }}
                  >
                    <Input
                      variant="filled"
                      placeholder="Vui lòng nhập giá thuê"
                      keyboardType="numeric"
                    />
                  </View>
                </View>
              </View>
            </View>
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
                      <View
                        style={{
                          width: "85%",
                          height: "85%",
                          borderRadius: 13,
                          backgroundColor: COLORS.light,
                          justifyContent: "center",
                          alignItems: "center",
                        }}
                      >
                        <Icon name="add" size={30} color={COLORS.grey} />
                      </View>
                    </View>
                    <View
                      style={{
                        width: "50%",
                        height: 150,
                        justifyContent: "center",
                        alignItems: "center",
                      }}
                    >
                      <View
                        style={{
                          width: "85%",
                          height: "85%",
                          borderRadius: 13,
                          backgroundColor: COLORS.light,
                          justifyContent: "center",
                          alignItems: "center",
                        }}
                      >
                        <Icon name="add" size={30} color={COLORS.grey} />
                      </View>
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
                      <View
                        style={{
                          width: "85%",
                          height: "85%",
                          borderRadius: 13,
                          backgroundColor: COLORS.light,
                          justifyContent: "center",
                          alignItems: "center",
                        }}
                      >
                        <Icon name="add" size={30} color={COLORS.grey} />
                      </View>
                    </View>
                    <View
                      style={{
                        width: "50%",
                        height: 150,
                        justifyContent: "center",
                        alignItems: "center",
                      }}
                    >
                      <View
                        style={{
                          width: "85%",
                          height: "85%",
                          borderRadius: 13,
                          backgroundColor: COLORS.light,
                          justifyContent: "center",
                          alignItems: "center",
                        }}
                      >
                        <Icon name="add" size={30} color={COLORS.grey} />
                      </View>
                    </View>
                  </View>
                </View>
              </View>
            </View>
          </View>
        </ScrollView>
      </View>
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
        onPress={() => navigation.navigate("PostEndScreen")}
      >
        <Text
          style={{
            fontFamily: theme.FontMain,
            fontSize: 19,
            color: COLORS.white,
          }}
        >
          Tiếp
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default PostScreen;
