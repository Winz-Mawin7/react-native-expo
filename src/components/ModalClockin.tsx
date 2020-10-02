import { Button, Card, Modal } from "@ui-kitten/components";
import React from "react";
import { View, StyleSheet, Image } from "react-native";

interface ModalClockinPropsType {
  visible: boolean;
  faceIn?: string | null;
  faceOut?: string | null;
  toggleModal: () => void;
}

export default function ModalClockin({ visible, toggleModal, photo }: ModalClockinPropsType): React.ReactElement {
  return (
    <View>
      <Modal visible={visible} backdropStyle={styles.backdrop} onBackdropPress={() => toggleModal()}>
        <Card status="warning">
          <Image style={styles.imageStyle} source={{ uri: photo }} />
          <Button onPress={toggleModal}>Close</Button>
        </Card>
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  backdrop: {
    backgroundColor: "rgba(0, 0, 0, 0.8)",
  },
  imageStyle: {
    width: 300,
    height: 300,
  },
});
