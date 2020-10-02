import React from "react";
import { Text } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import { ModalBackdrop } from "../components/ModalBackdropComponent";

export default function () {
  return (
    <ScrollView>
      <Text>Teacher Component</Text>
      <ModalBackdrop />
    </ScrollView>
  );
}
