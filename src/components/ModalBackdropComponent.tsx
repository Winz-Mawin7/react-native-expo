import React from "react";
import { ImageURISource, StyleSheet, View } from "react-native";
import { Button, Card, Modal, Text } from "@ui-kitten/components";
import LottieView from "lottie-react-native";

import { AvatarStack } from "./AvatarStackComponent";
import { confirmation } from "../common/lottie";

interface ISource {
  name: string;
  photo?: ImageURISource;
}

const stacks: Array<ISource> = [
  {
    name: "A",
    photo: require("../assets/image-profile-1.jpg"),
  },
  {
    name: "C",
    photo: require("../assets/image-profile-2.jpg"),
  },
  {
    name: "C",
    photo: require("../assets/image-profile-4.jpg"),
  },
  { name: "B", photo: { uri: "https://img.icons8.com/officel/2x/person-male.png" } },
  {
    name: "C",
    photo: { uri: "https://www.clipartkey.com/mpngs/m/174-1746540_stock-person-female-icon-free-female-person-icon.png" },
  },
  {
    name: "C",
    photo: null,
  },
  {
    name: "C",
    photo: undefined,
  },
  {
    name: "C",
    photo: null,
  },
  {
    name: "C",
    photo: undefined,
  },
  {
    name: "C",
    photo: null,
  },
  {
    name: "C",
    photo: undefined,
  },
];

export const ModalBackdrop = () => {
  const [visible, setVisible] = React.useState(false);

  return (
    <View>
      <Button onPress={() => setVisible(true)}>TOGGLE MODAL</Button>

      <Modal visible={visible} backdropStyle={styles.backdrop} onBackdropPress={() => setVisible(false)}>
        <Card status="success">
          <LottieView source={confirmation} autoPlay loop={false} style={styles.animation} />
          <Text category="h6" style={{ textAlign: "center" }}>
            Success ❗️
          </Text>
          <AvatarStack stacks={stacks} max={4} />
          <Button style={styles.buttonStyle} onPress={() => setVisible(false)}>
            Thanks
          </Button>
        </Card>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  backdrop: {
    backgroundColor: "rgba(0, 0, 0, 0.8)",
  },
  animation: {
    width: 50,
    height: 50,
    alignSelf: "center",
    marginBottom: 20,
  },
  buttonStyle: {
    alignSelf: "center",
  },
});
