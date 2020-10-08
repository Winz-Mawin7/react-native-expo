import { Layout, Text } from "@ui-kitten/components";
import React from "react";
import { AvatarStack } from "../components/AvatarStackComponent";

import { stacks } from "../core/mockup/stacks.data";
import { ModalBackdrop } from "../components/ModalBackdropComponent";
import { StyleSheet } from "react-native";
import { TabParamProps } from "../navigation/TabParamList";

export default function ({ navigation, route }: TabParamProps<"Component">) {
  return (
    <Layout style={styles.container}>
      <Text>Stack Component</Text>
      <AvatarStack stacks={stacks} />
      <AvatarStack stacks={stacks} max={5} />

      <Text>Modal Backdrop</Text>
      <ModalBackdrop />
    </Layout>
  );
}

const styles = StyleSheet.create({
  container: { alignItems: "center", padding: 20 },
});
