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
import AsyncStorage from "@react-native-async-storage/async-storage";

const ProfileUserScreen = ({ navigation }) => {
  const [user, setUser] = useState({});
  const [lastname, setlastname] = useState("");
  const [firstname, setfirstname] = useState("");
  const [email, setemail] = useState("");
  const [phone, setphone] = useState("");

  useEffect(() => {
    getUser();
  }, []);
  const getUser = async () => {
    const idAccount = await AsyncStorage.getItem("idAccount");
    await axios
      .get("http://" + IpAddress + ":8000/account/" + idAccount)
      .then(async (response) => {
        const result = response.data;
        console.log("result");
        console.log(result);
        setUser(result);
        setlastname(result.lastname);
        setfirstname(result.firstname);
        setemail(result.email);
        setphone(result.phonenumber);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  // const getAllemail = async () => {
  //   await axios
  //     .get("http://" + IpAddress + ":8000/email/")
  //     .then(async (response) => {
  //       const result = response.data;
  //       if (result != []) {
  //         setListemail(result);
  //       }
  //     })
  //     .catch((error) => {
  //       console.log(error);
  //     });
  // };

  const onChangelastname = (event) => {
    setlastname(event);
  };
  const onChangefirstname = (event) => {
    setfirstname(event);
  };

  const onChangeEmail = (value) => {
    setemail(value);
  };

  const onChangePhone = (value) => {
    setphone(value);
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
                  Họ
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
                      value={lastname}
                      multiline={true}
                      onChangeText={onChangelastname}
                      variant="filled"
                      placeholder="Họ"
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
                  Tên
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
                      value={firstname}
                      onChangeText={onChangefirstname}
                      variant="filled"
                      placeholder="Tên"
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
                  Email
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
                      value={email}
                      onChangeText={onChangeEmail}
                      variant="filled"
                      placeholder="Email"
                    />
                  </View>
                </View>
              </View>
            </View>
            {/* <View
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
            </View> */}
            {/* <View
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
                      selectedValue={email}
                      minWidth="200"
                      accessibilityLabel="Chọn loại phòng"
                      placeholder="Chọn loại phòng"
                      _selectedItem={{
                        bg: COLORS.gray,
                        borderRadius: 13,
                        endIcon: <CheckIcon size="5" />,
                      }}
                      mt={1}
                      onValueChange={(itemValue) => setemail(itemValue)}
                    >
                      {listemail.map((item) => {
                        return (
                          <Select.Item
                            key={item._id}
                            label={item.emailname}
                            value={item._id}
                          />
                        );
                      })}
                    </Select>
                  </View>
                </View>
              </View>
            </View> */}
            {/* <View
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
            </View> */}
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
                  Số điện thoại
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
                  {/* {statusQuantity == 1 ? (
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
                  )} */}

                  <View
                    style={{
                      width: "100%",
                      justifyContent: "center",
                    }}
                  >
                    <Input
                      variant="filled"
                      placeholder="Số điện thoại"
                      keyboardType="numeric"
                      value={phone}
                      onChangeText={(value) => onChangePhone(value)}
                    />
                  </View>
                </View>
              </View>
            </View>
            {/* <View
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
            </View> */}
            {/* <View
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
            </View> */}
          </View>
        </ScrollView>
      </View>
      {/* {lastname != "" &&
      firstname != "" &&
      length != "" &&
      width != "" &&
      email != "" &&
      price != "" &&
      quantity != "" ? ( */}
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
          Chỉnh sửa thông tin cá nhân
        </Text>
      </TouchableOpacity>
      {/* ) : (
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
            Chỉnh sửa thông tin cá nhân
          </Text>
        </TouchableOpacity>
      )} */}
    </View>
  );
};

export default ProfileUserScreen;
