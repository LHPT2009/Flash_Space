import { View, Text, Image, ScrollView } from "react-native";
import Icon from "react-native-vector-icons/MaterialIcons";
import { useState, useEffect } from "react";
import axios from "axios";
import IpAddress from "../consts/variable";
import COLORS from "../consts/colors";
import theme from "../styles/theme";

const CommentsScreen = ({ navigation, route }) => {
  const house = route.params;
  const [listrate, setListRate] = useState([]);
  const loadlistrate = async () => {
    const load = await axios
      .get("http://" + IpAddress + ":8000/evaluate/list/" + house._id)
      .then((res) => {
        setListRate(res.data);
      });
  };
  useEffect((item) => {
    loadlistrate();
  }, []);

  const dateformat = (date) => {
    const getdate = new Date(date);
    const day =
      getdate.getDate() < 10 ? `0${getdate.getDate()}` : getdate.getDate();
    const month =
      getdate.getMonth() < 10 ? `0${getdate.getMonth()}` : getdate.getMonth();
    const year = getdate.getFullYear();
    return day + "/" + month + "/" + year;
  };
  const arrfilter = listrate.filter((item) => item.static == 1);
  const sumrate = arrfilter.length;
  const calrate = (number) => {
    let numbercal = (number / sumrate) * 100;
    return numbercal;
  };

  const count = () => {
    let sum = 0;
    arrfilter.map((item) => {
      sum = sum + item.point;
    });
    console.log(sum);
    const point = (1 / sumrate) * sum;
    const a = (point * 100) / 100;
    return a;
  };

  const loop = (value) => {
    var myloop = [];
    for (let i = 0; i < value; i++) {
      myloop.push(<Icon name="star" size={18} color={"#E9D738"} />);
    }
    return <View style={{ flexDirection: "row" }}>{myloop}</View>;
  };

  return (
    <View
      style={{ backgroundColor: COLORS.light, width: "100%", height: "100%" }}
    >
      <View
        style={{
          width: "100%",
          height: 100,
          backgroundColor: COLORS.white,
          flexDirection: "row",
        }}
      >
        <View
          style={{
            width: "20%",
            height: "100%",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Icon
            name="arrow-back"
            size={30}
            color={"black"}
            onPress={navigation.goBack}
          />
        </View>
        <View style={{ width: "60%", height: "100%" }}>
          <View
            style={{
              width: "100%",
              height: "60%",
              justifyContent: "flex-end",
              alignItems: "center",
            }}
          >
            <Text style={{ fontSize: 20, fontFamily: theme.FontMain }}>
              Bình luận
            </Text>
          </View>
          <View style={{ width: "100%", height: "40%", alignItems: "center" }}>
            <Text
              style={{
                fontSize: 15,
                fontFamily: theme.FontMain,
                color: COLORS.grey,
              }}
            >
              {house.title}
            </Text>
          </View>
        </View>
        <View
          style={{
            width: "20%",
            height: "100%",
            justifyContent: "center",
            alignItems: "center",
          }}
        ></View>
      </View>
      {sumrate != 0 ? (
        <ScrollView
          showsHorizontalScrollIndicator={false}
          showsVerticalScrollIndicator={false}
        >
          <View
            style={{
              width: "100%",
              height: 260,
              backgroundColor: COLORS.light,
            }}
          >
            <View style={{ width: "100%", height: "50%" }}>
              <View
                style={{
                  width: "100%",
                  height: "70%",
                  alignItems: "center",
                  justifyContent: "flex-end",
                }}
              >
                <Text style={{ fontSize: 50, fontWeight: "bold" }}>
                  {count()}
                </Text>
              </View>
              <View
                style={{
                  width: "100%",
                  height: "30%",
                  alignItems: "center",
                }}
              >
                <Text
                  style={{
                    color: COLORS.grey,
                    fontFamily: theme.FontMain,
                    paddingBottom: 10,
                  }}
                >
                  Đã có {arrfilter.length} bình luận
                </Text>
              </View>
            </View>
            <View style={{ width: "100%", height: "50%" }}>
              <View
                style={{
                  width: "100%",
                  height: "20%",
                  flexDirection: "row",
                  alignItems: "center",
                }}
              >
                <View
                  style={{
                    width: "20%",
                    height: "90%",
                    flexDirection: "row",
                    justifyContent: "flex-end",
                    alignItems: "center",
                  }}
                >
                  <Text
                    style={{
                      fontFamily: theme.FontMain,
                      fontSize: 18,
                      color: COLORS.grey,
                    }}
                  >
                    5{"  "}
                  </Text>
                </View>
                <View
                  style={{
                    width: "60%",
                    height: "90%",
                    justifyContent: "center",
                  }}
                >
                  <View
                    style={{
                      width: "100%",
                      height: "50%",
                      borderRadius: 50,
                      backgroundColor: "white",
                    }}
                  >
                    <View
                      style={{
                        width: `${calrate(
                          arrfilter.filter((item) => item.point == 5).length
                        )}%`,
                        height: "100%",
                        borderRadius: 50,
                        backgroundColor: "#BAED7A",
                      }}
                    ></View>
                  </View>
                </View>
                <View
                  style={{
                    width: "20%",
                    height: "90%",
                    flexDirection: "row",
                    justifyContent: "flex-start",
                    alignItems: "center",
                  }}
                >
                  <Text
                    style={{
                      fontFamily: theme.FontMain,
                      fontSize: 18,
                      color: COLORS.grey,
                    }}
                  >
                    {"  "}
                    {calrate(
                      arrfilter.filter((item) => item.point == 5).length
                    )}
                    %
                  </Text>
                </View>
              </View>
              <View
                style={{
                  width: "100%",
                  height: "20%",
                  flexDirection: "row",
                  alignItems: "center",
                }}
              >
                <View
                  style={{
                    width: "20%",
                    height: "90%",
                    flexDirection: "row",
                    justifyContent: "flex-end",
                    alignItems: "center",
                  }}
                >
                  <Text
                    style={{
                      fontFamily: theme.FontMain,
                      fontSize: 18,
                      color: COLORS.grey,
                    }}
                  >
                    4{"  "}
                  </Text>
                </View>
                <View
                  style={{
                    width: "60%",
                    height: "90%",
                    justifyContent: "center",
                  }}
                >
                  <View
                    style={{
                      width: "100%",
                      height: "50%",
                      borderRadius: 50,
                      backgroundColor: "white",
                    }}
                  >
                    <View
                      style={{
                        width: `${calrate(
                          arrfilter.filter((item) => item.point == 4).length
                        )}%`,
                        height: "100%",
                        borderRadius: 50,
                        backgroundColor: "#D4E683",
                      }}
                    ></View>
                  </View>
                </View>
                <View
                  style={{
                    width: "20%",
                    height: "90%",
                    flexDirection: "row",
                    justifyContent: "flex-start",
                    alignItems: "center",
                  }}
                >
                  <Text
                    style={{
                      fontFamily: theme.FontMain,
                      fontSize: 18,
                      color: COLORS.grey,
                    }}
                  >
                    {"  "}
                    {calrate(
                      arrfilter.filter((item) => item.point == 4).length
                    )}
                    %
                  </Text>
                </View>
              </View>
              <View
                style={{
                  width: "100%",
                  height: "20%",
                  flexDirection: "row",
                  alignItems: "center",
                }}
              >
                <View
                  style={{
                    width: "20%",
                    height: "90%",
                    flexDirection: "row",
                    justifyContent: "flex-end",
                    alignItems: "center",
                  }}
                >
                  <Text
                    style={{
                      fontFamily: theme.FontMain,
                      fontSize: 18,
                      color: COLORS.grey,
                    }}
                  >
                    3{"  "}
                  </Text>
                </View>
                <View
                  style={{
                    width: "60%",
                    height: "90%",
                    justifyContent: "center",
                  }}
                >
                  <View
                    style={{
                      width: "100%",
                      height: "50%",
                      borderRadius: 50,
                      backgroundColor: "white",
                    }}
                  >
                    <View
                      style={{
                        width: `${calrate(
                          arrfilter.filter((item) => item.point == 3).length
                        )}%`,
                        height: "100%",
                        borderRadius: 50,
                        backgroundColor: "#FCEC6B",
                      }}
                    ></View>
                  </View>
                </View>
                <View
                  style={{
                    width: "20%",
                    height: "90%",
                    flexDirection: "row",
                    justifyContent: "flex-start",
                    alignItems: "center",
                  }}
                >
                  <Text
                    style={{
                      fontFamily: theme.FontMain,
                      fontSize: 18,
                      color: COLORS.grey,
                    }}
                  >
                    {"  "}
                    {calrate(
                      arrfilter.filter((item) => item.point == 3).length
                    )}
                    %
                  </Text>
                </View>
              </View>
              <View
                style={{
                  width: "100%",
                  height: "20%",
                  flexDirection: "row",
                  alignItems: "center",
                }}
              >
                <View
                  style={{
                    width: "20%",
                    height: "90%",
                    flexDirection: "row",
                    justifyContent: "flex-end",
                    alignItems: "center",
                  }}
                >
                  <Text
                    style={{
                      fontFamily: theme.FontMain,
                      fontSize: 18,
                      color: COLORS.grey,
                    }}
                  >
                    2{"  "}
                  </Text>
                </View>
                <View
                  style={{
                    width: "60%",
                    height: "90%",
                    justifyContent: "center",
                  }}
                >
                  <View
                    style={{
                      width: "100%",
                      height: "50%",
                      borderRadius: 50,
                      backgroundColor: "white",
                    }}
                  >
                    <View
                      style={{
                        width: `${calrate(
                          arrfilter.filter((item) => item.point == 2).length
                        )}%`,
                        height: "100%",
                        borderRadius: 50,
                        backgroundColor: "#F7C056",
                      }}
                    ></View>
                  </View>
                </View>
                <View
                  style={{
                    width: "20%",
                    height: "90%",
                    flexDirection: "row",
                    justifyContent: "flex-start",
                    alignItems: "center",
                  }}
                >
                  <Text
                    style={{
                      fontFamily: theme.FontMain,
                      fontSize: 18,
                      color: COLORS.grey,
                    }}
                  >
                    {"  "}
                    {calrate(
                      arrfilter.filter((item) => item.point == 2).length
                    )}
                    %
                  </Text>
                </View>
              </View>
              <View
                style={{
                  width: "100%",
                  height: "20%",
                  flexDirection: "row",
                  alignItems: "center",
                }}
              >
                <View
                  style={{
                    width: "20%",
                    height: "90%",
                    flexDirection: "row",
                    justifyContent: "flex-end",
                    alignItems: "center",
                  }}
                >
                  <Text
                    style={{
                      fontFamily: theme.FontMain,
                      fontSize: 18,
                      color: COLORS.grey,
                    }}
                  >
                    1{"  "}
                  </Text>
                </View>
                <View
                  style={{
                    width: "60%",
                    height: "90%",
                    justifyContent: "center",
                  }}
                >
                  <View
                    style={{
                      width: "100%",
                      height: "50%",
                      borderRadius: 50,
                      backgroundColor: "white",
                    }}
                  >
                    <View
                      style={{
                        width: `${calrate(
                          arrfilter.filter((item) => item.point == 1).length
                        )}%`,
                        height: "100%",
                        borderRadius: 50,
                        backgroundColor: "#F4626C",
                      }}
                    ></View>
                  </View>
                </View>
                <View
                  style={{
                    width: "20%",
                    height: "90%",
                    flexDirection: "row",
                    justifyContent: "flex-start",
                    alignItems: "center",
                  }}
                >
                  <Text
                    style={{
                      fontFamily: theme.FontMain,
                      fontSize: 18,
                      color: COLORS.grey,
                    }}
                  >
                    {"  "}
                    {calrate(
                      arrfilter.filter((item) => item.point == 1).length
                    )}
                    %
                  </Text>
                </View>
              </View>
            </View>
          </View>
          <View style={{ width: "100%" }}>
            <View
              style={{
                width: "100%",
                height: 70,
                justifyContent: "flex-end",
              }}
            >
              <View
                style={{
                  width: "50%",
                  height: "90%",
                  justifyContent: "center",
                  paddingLeft: 20,
                }}
              >
                <Text style={{ fontSize: 18, fontFamily: theme.FontMain }}>
                  Tất cả bình luận
                </Text>
              </View>
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
                  height: "100%",
                  alignItems: "center",
                }}
              >
                {arrfilter.map((item) => (
                  <View
                    style={{
                      width: "100%",
                      backgroundColor: COLORS.white,
                      flexDirection: "row",
                      borderRadius: 13,
                      paddingHorizontal: 15,
                      paddingVertical: 10,
                      marginBottom: 20,
                    }}
                  >
                    <View
                      style={{
                        width: "20%",
                        backgroundColor: COLORS.white,
                      }}
                    >
                      <View
                        style={{
                          alignItems: "center",
                        }}
                      >
                        <Image
                          style={{ borderRadius: 50, width: 50, height: 50 }}
                          source={{
                            uri:
                              "http://" +
                              IpAddress +
                              ":8000/singleimage/" +
                              item.idaccount.avatar,
                          }}
                        />
                      </View>
                    </View>
                    <View
                      style={{
                        width: "80%",
                        backgroundColor: COLORS.white,
                      }}
                    >
                      <View>
                        <Text
                          style={{
                            color: COLORS.dark,
                            fontFamily: theme.FontMain,
                          }}
                        >
                          {item.idaccount.firstname} {item.idaccount.lastname}
                        </Text>
                        <Text
                          style={{
                            color: COLORS.grey,
                            fontFamily: theme.FontMain,
                          }}
                        >
                          {dateformat(item.date)}
                        </Text>
                      </View>
                      <View>
                        <Text
                          style={{
                            fontFamily: theme.FontMain,
                            textAlign: "justify",
                          }}
                        >
                          {item.content}{" "}
                        </Text>
                      </View>
                      {loop(item.point)}
                    </View>
                  </View>
                ))}
              </View>
            </View>
          </View>
        </ScrollView>
      ) : (
        <ScrollView
          showsHorizontalScrollIndicator={false}
          showsVerticalScrollIndicator={false}
        >
          <View
            style={{
              width: "100%",
              height: 260,
              backgroundColor: COLORS.light,
            }}
          >
            <View style={{ width: "100%", height: "50%" }}>
              <View
                style={{
                  width: "100%",
                  height: "70%",
                  alignItems: "center",
                  justifyContent: "flex-end",
                }}
              >
                <Text style={{ fontSize: 50, fontWeight: "bold" }}>0</Text>
              </View>
              <View
                style={{
                  width: "100%",
                  height: "30%",
                  alignItems: "center",
                }}
              >
                <Text
                  style={{
                    color: COLORS.grey,
                    fontFamily: theme.FontMain,
                    paddingBottom: 10,
                  }}
                >
                  Đã có 0 bình luận
                </Text>
              </View>
            </View>
            <View style={{ width: "100%", height: "50%" }}>
              <View
                style={{
                  width: "100%",
                  height: "20%",
                  flexDirection: "row",
                  alignItems: "center",
                }}
              >
                <View
                  style={{
                    width: "20%",
                    height: "90%",
                    flexDirection: "row",
                    justifyContent: "flex-end",
                    alignItems: "center",
                  }}
                >
                  <Text
                    style={{
                      fontFamily: theme.FontMain,
                      fontSize: 18,
                      color: COLORS.grey,
                    }}
                  >
                    5{"  "}
                  </Text>
                </View>
                <View
                  style={{
                    width: "60%",
                    height: "90%",
                    justifyContent: "center",
                  }}
                >
                  <View
                    style={{
                      width: "100%",
                      height: "50%",
                      borderRadius: 50,
                      backgroundColor: "white",
                    }}
                  >
                    <View
                      style={{
                        width: "0%",
                        height: "100%",
                        borderRadius: 50,
                        backgroundColor: "#BAED7A",
                      }}
                    ></View>
                  </View>
                </View>
                <View
                  style={{
                    width: "20%",
                    height: "90%",
                    flexDirection: "row",
                    justifyContent: "flex-start",
                    alignItems: "center",
                  }}
                >
                  <Text
                    style={{
                      fontFamily: theme.FontMain,
                      fontSize: 18,
                      color: COLORS.grey,
                    }}
                  >
                    {"  "}
                    0%
                  </Text>
                </View>
              </View>
              <View
                style={{
                  width: "100%",
                  height: "20%",
                  flexDirection: "row",
                  alignItems: "center",
                }}
              >
                <View
                  style={{
                    width: "20%",
                    height: "90%",
                    flexDirection: "row",
                    justifyContent: "flex-end",
                    alignItems: "center",
                  }}
                >
                  <Text
                    style={{
                      fontFamily: theme.FontMain,
                      fontSize: 18,
                      color: COLORS.grey,
                    }}
                  >
                    4{"  "}
                  </Text>
                </View>
                <View
                  style={{
                    width: "60%",
                    height: "90%",
                    justifyContent: "center",
                  }}
                >
                  <View
                    style={{
                      width: "100%",
                      height: "50%",
                      borderRadius: 50,
                      backgroundColor: "white",
                    }}
                  >
                    <View
                      style={{
                        width: "0%",
                        height: "100%",
                        borderRadius: 50,
                        backgroundColor: "#D4E683",
                      }}
                    ></View>
                  </View>
                </View>
                <View
                  style={{
                    width: "20%",
                    height: "90%",
                    flexDirection: "row",
                    justifyContent: "flex-start",
                    alignItems: "center",
                  }}
                >
                  <Text
                    style={{
                      fontFamily: theme.FontMain,
                      fontSize: 18,
                      color: COLORS.grey,
                    }}
                  >
                    {"  "}
                    0%
                  </Text>
                </View>
              </View>
              <View
                style={{
                  width: "100%",
                  height: "20%",
                  flexDirection: "row",
                  alignItems: "center",
                }}
              >
                <View
                  style={{
                    width: "20%",
                    height: "90%",
                    flexDirection: "row",
                    justifyContent: "flex-end",
                    alignItems: "center",
                  }}
                >
                  <Text
                    style={{
                      fontFamily: theme.FontMain,
                      fontSize: 18,
                      color: COLORS.grey,
                    }}
                  >
                    3{"  "}
                  </Text>
                </View>
                <View
                  style={{
                    width: "60%",
                    height: "90%",
                    justifyContent: "center",
                  }}
                >
                  <View
                    style={{
                      width: "100%",
                      height: "50%",
                      borderRadius: 50,
                      backgroundColor: "white",
                    }}
                  >
                    <View
                      style={{
                        width: "0%",
                        height: "100%",
                        borderRadius: 50,
                        backgroundColor: "#FCEC6B",
                      }}
                    ></View>
                  </View>
                </View>
                <View
                  style={{
                    width: "20%",
                    height: "90%",
                    flexDirection: "row",
                    justifyContent: "flex-start",
                    alignItems: "center",
                  }}
                >
                  <Text
                    style={{
                      fontFamily: theme.FontMain,
                      fontSize: 18,
                      color: COLORS.grey,
                    }}
                  >
                    {"  "}
                    0%
                  </Text>
                </View>
              </View>
              <View
                style={{
                  width: "100%",
                  height: "20%",
                  flexDirection: "row",
                  alignItems: "center",
                }}
              >
                <View
                  style={{
                    width: "20%",
                    height: "90%",
                    flexDirection: "row",
                    justifyContent: "flex-end",
                    alignItems: "center",
                  }}
                >
                  <Text
                    style={{
                      fontFamily: theme.FontMain,
                      fontSize: 18,
                      color: COLORS.grey,
                    }}
                  >
                    2{"  "}
                  </Text>
                </View>
                <View
                  style={{
                    width: "60%",
                    height: "90%",
                    justifyContent: "center",
                  }}
                >
                  <View
                    style={{
                      width: "100%",
                      height: "50%",
                      borderRadius: 50,
                      backgroundColor: "white",
                    }}
                  >
                    <View
                      style={{
                        width: "0%",
                        height: "100%",
                        borderRadius: 50,
                        backgroundColor: "#F7C056",
                      }}
                    ></View>
                  </View>
                </View>
                <View
                  style={{
                    width: "20%",
                    height: "90%",
                    flexDirection: "row",
                    justifyContent: "flex-start",
                    alignItems: "center",
                  }}
                >
                  <Text
                    style={{
                      fontFamily: theme.FontMain,
                      fontSize: 18,
                      color: COLORS.grey,
                    }}
                  >
                    {"  "}
                    0%
                  </Text>
                </View>
              </View>
              <View
                style={{
                  width: "100%",
                  height: "20%",
                  flexDirection: "row",
                  alignItems: "center",
                }}
              >
                <View
                  style={{
                    width: "20%",
                    height: "90%",
                    flexDirection: "row",
                    justifyContent: "flex-end",
                    alignItems: "center",
                  }}
                >
                  <Text
                    style={{
                      fontFamily: theme.FontMain,
                      fontSize: 18,
                      color: COLORS.grey,
                    }}
                  >
                    1{"  "}
                  </Text>
                </View>
                <View
                  style={{
                    width: "60%",
                    height: "90%",
                    justifyContent: "center",
                  }}
                >
                  <View
                    style={{
                      width: "100%",
                      height: "50%",
                      borderRadius: 50,
                      backgroundColor: "white",
                    }}
                  >
                    <View
                      style={{
                        width: "0%",
                        height: "100%",
                        borderRadius: 50,
                        backgroundColor: "#F4626C",
                      }}
                    ></View>
                  </View>
                </View>
                <View
                  style={{
                    width: "20%",
                    height: "90%",
                    flexDirection: "row",
                    justifyContent: "flex-start",
                    alignItems: "center",
                  }}
                >
                  <Text
                    style={{
                      fontFamily: theme.FontMain,
                      fontSize: 18,
                      color: COLORS.grey,
                    }}
                  >
                    {"  "}
                    0%
                  </Text>
                </View>
              </View>
            </View>
          </View>
          <View style={{ width: "100%" }}>
            <View
              style={{
                width: "100%",
                height: 70,
                justifyContent: "flex-end",
              }}
            >
              <View
                style={{
                  width: "50%",
                  height: "90%",
                  justifyContent: "center",
                  paddingLeft: 20,
                }}
              >
                <Text style={{ fontSize: 18, fontFamily: theme.FontMain }}>
                  Tất cả bình luận
                </Text>
              </View>
            </View>
          </View>
        </ScrollView>
      )}
    </View>
  );
};

export default CommentsScreen;
