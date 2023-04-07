import React, { useState, useEffect, useRef } from "react";
import { Text, View, StyleSheet, TouchableOpacity, Image } from "react-native";
import Constants from "expo-constants";
import { HStack, Spinner } from "native-base";
import { Camera, CameraType } from "expo-camera";
import * as MediaLibrary from "expo-media-library";
import { showMessage } from "react-native-flash-message";
import ButtonCamera from "../components/ButtonCamera";
import COLORS from "../consts/colors";
import theme from "../styles/theme";

export default function TakephotoScreen({ navigation }) {
  const [hasCameraPermission, setHasCameraPermission] = useState(null);
  const [image, setImage] = useState(null);
  const [spinner, setSpinner] = useState(false);
  const [type, setType] = useState(Camera.Constants.Type.back);
  const [flash, setFlash] = useState(Camera.Constants.FlashMode.off);
  const cameraRef = useRef(null);

  useEffect(() => {
    (async () => {
      MediaLibrary.requestPermissionsAsync();
      const cameraStatus = await Camera.requestCameraPermissionsAsync();
      setHasCameraPermission(cameraStatus.status === "granted");
    })();
  }, []);

  const takePicture = async () => {
    if (cameraRef) {
      try {
        setSpinner(true);
        const data = await cameraRef.current.takePictureAsync();
        console.log(data);
        setImage(data.uri);
      } catch (error) {
        console.log(error);
      }
    }
  };

  const savePicture = async () => {
    if (image) {
      try {
        const asset = await MediaLibrary.createAssetAsync(image);
        showMessage({
          message: "Đã lưu hình  ✔",
          type: "success",
        });
        setImage(null);
        navigation.navigate("AuthScreen");
        console.log("saved successfully");
      } catch (error) {
        console.log(error);
      }
    }
  };

  if (hasCameraPermission === false) {
    return <Text>Không có quyền truy cập camera</Text>;
  }

  return (
    <View style={styles.container}>
      {!image ? (
        <View style={{ width: "100%", height: "90%" }}>
          <Camera
            style={styles.camera}
            type={type}
            ref={cameraRef}
            flashMode={flash}
          >
            <View
              style={{
                height: "30%",

                paddingHorizontal: 30,
                backgroundColor: theme.PRIMARY_BG_COLOR,
              }}
            >
              {!spinner ? (
                <View
                  style={{
                    height: "100%",
                    flexDirection: "row",
                    justifyContent: "space-between",
                  }}
                >
                  <ButtonCamera
                    title=""
                    icon="retweet"
                    onPress={() => {
                      setType(
                        type === CameraType.back
                          ? CameraType.front
                          : CameraType.back
                      );
                    }}
                  />
                  <ButtonCamera
                    onPress={() =>
                      setFlash(
                        flash === Camera.Constants.FlashMode.off
                          ? Camera.Constants.FlashMode.on
                          : Camera.Constants.FlashMode.off
                      )
                    }
                    icon="flash"
                    color={
                      flash === Camera.Constants.FlashMode.off ? "gray" : "#fff"
                    }
                  />
                </View>
              ) : (
                <View></View>
              )}
            </View>
            {spinner ? (
              <View
                style={{
                  width: "100%",
                  height: "40%",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <View
                  style={{
                    width: "60%",
                    height: "60%",
                    justifyContent: "center",
                    alignItems: "center",
                    backgroundColor: "rgba(189, 189, 189, 0.7)",
                    borderRadius: 13,
                  }}
                >
                  <HStack space={8} justifyContent="center">
                    <Spinner color={theme.PRIMARY_BG_COLOR} />
                    <Text
                      style={{
                        fontFamily: theme.FontMain,
                        fontSize: 18,
                        color: theme.PRIMARY_BG_COLOR,
                      }}
                    >
                      Đang xử lý...
                    </Text>
                  </HStack>
                </View>
              </View>
            ) : (
              <View></View>
            )}
            <View
              style={{
                height: "30%",
                flexDirection: "row",
                justifyContent: "space-between",
                paddingHorizontal: 30,
                backgroundColor: theme.PRIMARY_BG_COLOR,
              }}
            ></View>
          </Camera>
        </View>
      ) : (
        <View style={{ width: "100%", height: "90%" }}>
          <View
            style={{
              height: "30%",
              flexDirection: "row",
              justifyContent: "space-between",
              paddingHorizontal: 30,
              backgroundColor: theme.PRIMARY_BG_COLOR,
            }}
          ></View>
          <Image source={{ uri: image }} style={styles.camera} />
          <View
            style={{
              height: "30%",
              flexDirection: "row",
              justifyContent: "space-between",
              paddingHorizontal: 30,
              backgroundColor: theme.PRIMARY_BG_COLOR,
            }}
          ></View>
        </View>
      )}

      <View style={styles.controls}>
        {!image ? (
          !spinner ? (
            <ButtonCamera title="Chụp" onPress={takePicture} icon="camera" />
          ) : (
            <View></View>
          )
        ) : (
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              paddingHorizontal: 50,
            }}
          >
            <ButtonCamera
              title="Chụp lại"
              onPress={() => {
                setSpinner(false);
                setImage(null);
              }}
              icon="retweet"
            />
            <ButtonCamera title="Lưu" onPress={savePicture} icon="check" />
          </View>
        )}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    paddingTop: Constants.statusBarHeight,
    backgroundColor: theme.PRIMARY_BG_COLOR,
    padding: 8,
  },
  controls: {
    height: "10%",
    flex: 0.5,
  },
  button: {
    height: 40,
    borderRadius: 6,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    fontWeight: "bold",
    fontSize: 16,
    color: "#E9730F",
    marginLeft: 10,
  },
  camera: {
    flex: 5,
    borderRadius: 20,
    flexDirection: "column",
    justifyContent: "space-between",
  },
  topControls: {
    flex: 1,
  },
});
