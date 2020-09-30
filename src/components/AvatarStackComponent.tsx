import React from "react";
import { Avatar, Layout, Text } from "@ui-kitten/components";
import { StyleSheet } from "react-native";

export const AvatarStack = ({ sources, max = sources.length }) => {
  const render = [];

  for (let i = 0; i < max && i < sources.length; i++) {
    render.push(
      <Avatar
        source={{ uri: sources[i].src }}
        key={i}
        style={{ marginHorizontal: -5 }}
        defaultSource={require("../assets/images.png")} // default source image
      />
    );
  }

  // push different from max to render
  const diff = sources.length - max;
  if (diff > 0)
    render.push(
      <Layout key={++max} style={styles.circle}>
        <Text style={styles.textStyle}>{`+${diff}`}</Text>
      </Layout>
    );

  return <Layout style={styles.container}>{render}</Layout>;
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    padding: 15,
  },

  circle: {
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "rgb(200,200,200)",
    borderRadius: 42 / 2,
    width: 42,
    height: 42,
    zIndex: -1,
  },

  textStyle: {
    textAlign: "center",
    color: "white",
  },
});
