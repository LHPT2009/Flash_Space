import {
  ScrollView,
  View,
  Text,
  TouchableOpacity,
  StatusBar,
} from "react-native";
import { CheckIcon, Input, Select } from "native-base";
import Icon from "react-native-vector-icons/MaterialIcons";
import COLORS from "../consts/colors";
import theme from "../styles/theme";
import { useEffect, useState, useContext } from "react";
import IpAddress from "../consts/variable";
import axios from "axios";
import { InformationAddRoomContext } from "../context/InformationAddRoom";

const PostScreen = ({ navigation }) => {
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
      <View style={{ height: 20 }} />
      <View
        style={{ width: "100%", height: "90%", backgroundColor: COLORS.light }}
      >
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
                <Text style={{ color: "black" }}>3</Text>
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
          </View>
        </ScrollView>
      </View>
      {subject != "" &&
      describe != "" &&
      length != "" &&
      width != "" &&
      career != "" &&
      price != "" &&
      quantity != "" &&
      housenumberstreetname != "" &&
      province != "" &&
      district != "" &&
      ward != "" ? (
        <TouchableOpacity
          style={{
            width: "100%",
            height: "10%",
            backgroundColor: theme.PRIMARY_BG_COLOR,
            borderTopLeftRadius: 13,
            borderTopRightRadius: 13,
            justifyContent: "center",
            alignItems: "center",
            marginTop: -20,
          }}
          onPress={() => {
            const content = {
              subject: subject,
              describe: describe,
              length: length,
              width: width,
              career: career,
              price: price,
              quantity: quantity,
              housenumberstreetname: housenumberstreetname,
              province: province,
              district: district,
              ward: ward,
            };

            Object.assign(informations, content);
            navigation.navigate("PostEndScreen");
          }}
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
            marginTop: -20,
          }}
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
      )}
    </View>
  );
};

export default PostScreen;
