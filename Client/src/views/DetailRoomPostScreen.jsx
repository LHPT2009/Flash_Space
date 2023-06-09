import { useState, useEffect, useContext } from "react";
import {
  ScrollView,
  Text,
  View,
  ImageBackground,
  TouchableOpacity,
} from "react-native";
import { CheckIcon, Input, Select } from "native-base";
import Icon from "react-native-vector-icons/MaterialIcons";
import { InformationAddRoomContext } from "../context/InformationAddRoom";
import axios from "axios";
import IpAddress from "../consts/variable";
import COLORS from "../consts/colors";
import theme from "../styles/theme";
const DetailRoomPostScreen = () => {
  const [subject, setSubject] = useState("");
  const [describe, setDescribe] = useState("");
  const [career, setCareer] = useState("");
  const [length, setLength] = useState("");
  const [width, setWidth] = useState("");
  const [statusAgreace, setStatusAgreace] = useState(0);
  const [price, setPrice] = useState("");
  const [statusPrice, setStatusPrice] = useState(0);
  const [quantity, setQuantity] = useState("");
  const [statusQuantity, setStatusQuantity] = useState(0);
  const [housenumberstreetname, setHousenumberstreetname] = useState("");
  const [listCareer, setListCareer] = useState([]);
  const [ward, setWard] = useState("");
  const [district, setDistrict] = useState("");
  const [province, setProvince] = useState("");
  const [listWard, setListWard] = useState([]);
  const [listDistrict, setListDistrict] = useState([]);
  const [listProvince, setListProvince] = useState([]);
  const { informations } = useContext(InformationAddRoomContext);

  useEffect(() => {
    getAllCareer();
    getAllProvince();
  }, []);
  const getAllCareer = async () => {
    await axios
      .get("http://" + IpAddress + ":8000/career/")
      .then(async (response) => {
        const result = response.data;
        if (result != []) {
          setListCareer(result);
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const getAllProvince = async () => {
    await axios
      .get("http://" + IpAddress + ":8000/province/")
      .then(async (response) => {
        const result = response.data;
        if (result != []) {
          setListProvince(result);
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const getDistrict = async (itemValue) => {
    await axios
      .get("http://" + IpAddress + ":8000/district/province/" + itemValue)
      .then(async (response) => {
        const result = response.data;
        if (result != []) {
          setListDistrict(result);
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const getWard = async (itemValue) => {
    await axios
      .get("http://" + IpAddress + ":8000/ward/district/" + itemValue)
      .then(async (response) => {
        const result = response.data;
        if (result != []) {
          setListWard(result);
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const checkAcreage = (value) => {
    const convert = Number(value);
    if (convert < 0) {
      setStatusAgreace(1);
    } else if (isNaN(convert)) {
      setStatusAgreace(2);
    } else {
      setStatusAgreace(0);
    }
  };

  const checkPrice = (value) => {
    const priceConvert = Number(value);
    if (priceConvert < 1000) {
      setStatusPrice(1);
    } else if (priceConvert > 100000000) {
      setStatusPrice(2);
    } else if (isNaN(priceConvert)) {
      setStatusPrice(3);
    } else {
      setStatusPrice(0);
    }
  };

  const checkQuantity = (value) => {
    const priceConvert = Number(value);
    if (priceConvert < 1) {
      setStatusQuantity(1);
    } else if (priceConvert > 1000) {
      setStatusQuantity(2);
    } else if (isNaN(priceConvert)) {
      setStatusQuantity(3);
    } else {
      setStatusQuantity(0);
    }
  };

  const onChangeSubject = (event) => {
    setSubject(event);
  };
  const onChangeDescribe = (event) => {
    setDescribe(event);
  };
  const onChangeLength = (event) => {
    checkAcreage(event);
    setLength(event);
  };

  const onChangeWidth = (event) => {
    checkAcreage(event);
    setWidth(event);
  };

  const onChangePrice = (value) => {
    checkPrice(value);
    setPrice(value);
  };

  const onChangeQuantity = (value) => {
    checkQuantity(value);
    setQuantity(value);
  };

  const onHousenumberstreetname = (event) => {
    setHousenumberstreetname(event);
  };
  return (
    <View style={{ width: "100%", height: "100%" }}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View
          style={{
            width: "100%",
            height: 350,
          }}
        >
          <ImageBackground
            style={{
              height: "100%",
              width: "100%",
              overflow: "hidden",
              borderBottomLeftRadius: 30,
              borderBottomRightRadius: 30,
            }}
            source={
              require("../../assets/images/avatar/123.jpeg")
              //   {
              //   uri: "http://" + IpAddress + ":8000/singleimage/" + imageView,
              // }
            }
          >
            <View
              style={{
                paddingVertical: 50,
                flexDirection: "row",
                justifyContent: "space-between",
                paddingHorizontal: 10,
              }}
            >
              <TouchableOpacity
                style={{
                  height: 50,
                  width: 50,
                  backgroundColor: COLORS.white,
                  borderRadius: 50,
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Icon
                  name="arrow-back"
                  size={30}
                  color={"black"}
                  // onPress={navigation.goBack}
                />
              </TouchableOpacity>
              <TouchableOpacity
                style={{
                  height: 50,
                  width: 50,
                  backgroundColor: COLORS.white,
                  borderRadius: 50,
                  justifyContent: "center",
                  alignItems: "center",
                }}
                // onPress={() => onChangeFavorite()}
              >
                <Icon name="edit" size={25} color="black" />
              </TouchableOpacity>
            </View>
          </ImageBackground>
        </View>
        <View
          style={{
            width: "100%",
            marginTop: -60,
            height: 100,
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <View
            style={{
              width: "80%",
              height: "100%",
              backgroundColor: COLORS.white,
              borderRadius: 13,
              flexDirection: "row",
              justifyContent: "space-around",
              alignItems: "center",
              elevation: 10,
            }}
          >
            <View
              style={{
                width: "30%",
                height: "90%",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Text
                style={{
                  fontSize: 22,
                  color: COLORS.dark,
                  fontFamily: theme.FontMain,
                  paddingBottom: 10,
                }}
              >
                139
              </Text>
              <Text
                style={{
                  fontSize: 15,
                  color: COLORS.succes,
                  fontFamily: theme.FontMain,
                }}
              >
                Đơn đã đặt
              </Text>
            </View>
            <View
              style={{
                width: "30%",
                height: "90%",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Text
                style={{
                  fontSize: 22,
                  color: COLORS.dark,
                  fontFamily: theme.FontMain,
                  paddingBottom: 10,
                }}
              >
                6
              </Text>
              <Text
                style={{
                  fontSize: 15,
                  color: COLORS.waiting,
                  fontFamily: theme.FontMain,
                }}
              >
                Đơn yêu cầu
              </Text>
            </View>
            <View
              style={{
                width: "30%",
                height: "90%",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Text
                style={{
                  fontSize: 22,
                  color: COLORS.dark,
                  fontFamily: theme.FontMain,
                  paddingBottom: 10,
                }}
              >
                19
              </Text>
              <Text
                style={{
                  fontSize: 15,
                  color: COLORS.cancel,
                  fontFamily: theme.FontMain,
                }}
              >
                Lượt đánh giá
              </Text>
            </View>
          </View>
        </View>
        <View style={{ width: "100%", padding: 30 }}>
          <Text style={{ fontSize: 24, fontWeight: "bold" }}>Acb</Text>
        </View>
        <View
          style={{
            width: "100%",
            height: 70,
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <View
            style={{
              width: "90%",
              height: "85%",
              flexDirection: "row",
              justifyContent: "space-between",
            }}
          >
            <View
              style={{
                width: "30%",
                height: "100%",
                backgroundColor: theme.PRIMARY_BG_COLOR,
                borderRadius: 25,
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Text
                style={{
                  fontSize: 18,
                  color: COLORS.white,
                  fontFamily: theme.FontMain,
                }}
              >
                Thông tin
              </Text>
            </View>
            <View
              style={{
                width: "30%",
                height: "100%",
                borderRadius: 25,
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Text
                style={{
                  fontSize: 18,
                  color: COLORS.grey,
                  fontFamily: theme.FontMain,
                }}
              >
                Khung giờ
              </Text>
            </View>
            <View
              style={{
                width: "30%",
                height: "100%",
                borderRadius: 25,
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Text
                style={{
                  fontSize: 18,
                  color: COLORS.grey,
                  fontFamily: theme.FontMain,
                }}
              >
                Ảnh
              </Text>
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
                Diện tích
              </Text>
            </View>
            <View style={{ paddingHorizontal: 15 }}>
              {statusAgreace == 1 ? (
                <View style={{ width: "100%", paddingVertical: 10 }}>
                  <Text style={{ color: "red" }}>
                    Vui lòng nhập số lơn hơn 0
                  </Text>
                </View>
              ) : statusAgreace == 2 ? (
                <View style={{ width: "100%", paddingVertical: 10 }}>
                  <Text style={{ color: "red" }}>Sai định dạng</Text>
                </View>
              ) : (
                <View />
              )}
            </View>
            <View
              style={{
                width: "100%",
                flexDirection: "row",
                justifyContent: "space-evenly",
                alignItems: "center",
              }}
            >
              <View
                style={{
                  width: "35%",
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
                    value={length}
                    onChangeText={onChangeLength}
                    keyboardType="numeric"
                    variant="filled"
                    placeholder="Chiều dài (mét)"
                  />
                </View>
              </View>
              <View
                style={{
                  width: "35%",
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
                    value={width}
                    onChangeText={onChangeWidth}
                    keyboardType="numeric"
                    variant="filled"
                    placeholder="Chiều rộng (mét)"
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
                Loại phòng
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
                  <Select
                    selectedValue={career}
                    minWidth="200"
                    accessibilityLabel="Chọn loại phòng"
                    placeholder="Chọn loại phòng"
                    _selectedItem={{
                      bg: COLORS.gray,
                      borderRadius: 13,
                      endIcon: <CheckIcon size="5" />,
                    }}
                    mt={1}
                    onValueChange={(itemValue) => setCareer(itemValue)}
                  >
                    {listCareer.map((item) => {
                      return (
                        <Select.Item
                          key={item._id}
                          label={item.careername}
                          value={item._id}
                        />
                      );
                    })}
                  </Select>
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
                {statusPrice == 1 ? (
                  <View style={{ width: "100%", paddingVertical: 10 }}>
                    <Text style={{ color: "red" }}>
                      Vui lòng nhập số tiền lớn hơn 1.000 đồng
                    </Text>
                  </View>
                ) : statusPrice == 2 ? (
                  <View style={{ width: "100%", paddingVertical: 10 }}>
                    <Text style={{ color: "red" }}>
                      Vui lòng nhập số tiền nhỏ hơn 100.000.000 đồng
                    </Text>
                  </View>
                ) : statusPrice == 3 ? (
                  <View style={{ width: "100%", paddingVertical: 10 }}>
                    <Text style={{ color: "red" }}>Sai định dạng</Text>
                  </View>
                ) : (
                  <View />
                )}

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
                    onChangeText={(value) => onChangePrice(value)}
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
                Sức chứa
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
                {statusQuantity == 1 ? (
                  <View style={{ width: "100%", paddingVertical: 10 }}>
                    <Text style={{ color: "red" }}>
                      Sức chứa phải lớn hơn 1
                    </Text>
                  </View>
                ) : statusQuantity == 2 ? (
                  <View style={{ width: "100%", paddingVertical: 10 }}>
                    <Text style={{ color: "red" }}>
                      Sức chứa không quá 1000
                    </Text>
                  </View>
                ) : statusQuantity == 3 ? (
                  <View style={{ width: "100%", paddingVertical: 10 }}>
                    <Text style={{ color: "red" }}>Sai định dạng</Text>
                  </View>
                ) : (
                  <View />
                )}

                <View
                  style={{
                    width: "100%",
                    justifyContent: "center",
                  }}
                >
                  <Input
                    variant="filled"
                    placeholder="Vui lòng nhập sức chứa"
                    keyboardType="numeric"
                    onChangeText={(value) => onChangeQuantity(value)}
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
                Số nhà - Tên đường
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
                    value={housenumberstreetname}
                    onChangeText={onHousenumberstreetname}
                    variant="filled"
                    placeholder="Vui lòng nhập số nhà và tên đường"
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
                Địa chỉ
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
                  <Select
                    selectedValue={province}
                    accessibilityLabel="Tỉnh / Thành phố"
                    placeholder="Tỉnh / Thành phố"
                    _selectedItem={{
                      bg: COLORS.gray,
                      borderRadius: 13,
                      endIcon: <CheckIcon size="5" />,
                    }}
                    mt={1}
                    onValueChange={(itemValue) => {
                      setProvince(itemValue);
                      getDistrict(itemValue);
                    }}
                  >
                    {listProvince.map((item) => {
                      return (
                        <Select.Item
                          key={item._id}
                          label={item.provincename}
                          value={item._id}
                        />
                      );
                    })}
                  </Select>
                </View>
                <View
                  style={{
                    width: "100%",
                    justifyContent: "center",
                  }}
                >
                  <Select
                    selectedValue={district}
                    accessibilityLabel="Quận / Huyện"
                    placeholder="Quận / Huyện"
                    _selectedItem={{
                      bg: COLORS.gray,
                      borderRadius: 13,
                      endIcon: <CheckIcon size="5" />,
                    }}
                    mt={1}
                    onValueChange={(itemValue) => {
                      setDistrict(itemValue);
                      getWard(itemValue);
                    }}
                  >
                    {listDistrict.map((item) => {
                      return (
                        <Select.Item
                          key={item._id}
                          label={item.districtname}
                          value={item._id}
                        />
                      );
                    })}
                  </Select>
                </View>
                <View
                  style={{
                    width: "100%",
                    justifyContent: "center",
                  }}
                >
                  <Select
                    selectedValue={ward}
                    accessibilityLabel="Xã / Phường"
                    placeholder="Xã / Phường"
                    _selectedItem={{
                      bg: COLORS.gray,
                      borderRadius: 13,
                      endIcon: <CheckIcon size="5" />,
                    }}
                    mt={1}
                    onValueChange={(itemValue) => setWard(itemValue)}
                  >
                    {listWard.map((item) => {
                      return (
                        <Select.Item
                          key={item._id}
                          label={item.wardname}
                          value={item._id}
                        />
                      );
                    })}
                  </Select>
                </View>
              </View>
            </View>
          </View>

          <View
            style={{
              width: "90%",
              borderRadius: 13,
              height: 50,
              backgroundColor: theme.PRIMARY_BG_COLOR,
              marginVertical: 10,
              elevation: 10,
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Text
              style={{
                fontFamily: theme.FontMain,
                fontSize: 16,
                color: COLORS.white,
              }}
            >
              Lưu thay đổi
            </Text>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default DetailRoomPostScreen;
