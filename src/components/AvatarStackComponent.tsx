import React from "react";
import { Avatar, Layout, Text } from "@ui-kitten/components";
import { StyleSheet } from "react-native";

const DEFAULT_SIZE = "medium";

export const AvatarStack = ({ stacks, max = stacks.length, size = DEFAULT_SIZE }) => {
  const render = [];
  const circleStyle = checkStyleCircle(size);

  for (let i = 0; i < max && i < stacks.length; i++) {
    render.push(
      <Avatar
        source={stacks[i].photo ? stacks[i].photo : require("../assets/image-profile-3.jpg")} // android not render if null or undefined
        key={i}
        style={styles.avatarStyle}
        size={size}
      />
    );
  }

  // push different from max to render
  const diff = stacks.length - max;
  if (diff > 0)
    render.push(
      <Layout key={++max} style={circleStyle}>
        <Text style={styles.textInCircle}>{`+${diff}`}</Text>
      </Layout>
    );

  return <Layout style={styles.container}>{render}</Layout>;
};

function checkStyleCircle(size: string) {
  switch (size) {
    case "tiny":
      return styles.circleTiny;
    case "small":
      return styles.circleSmall;
    case "medium":
      return styles.circleMedium;
    case "large":
      return styles.circleLarge;
    case "giant":
      return styles.circleGiant;
    default:
      return styles.circleMedium;
  }
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    padding: 15,
    flexWrap: "wrap",
  },
  avatarStyle: {
    marginHorizontal: -5,
    marginVertical: 2,
    borderWidth: 2,
    borderColor: "white",
  },
  circleTiny: {
    justifyContent: "center",
    alignSelf: "center",
    backgroundColor: "rgb(200,200,200)",
    borderRadius: 20 / 2,
    width: 20,
    height: 20,
    zIndex: -1,
  },
  circleSmall: {
    justifyContent: "center",
    alignSelf: "center",
    backgroundColor: "rgb(200,200,200)",
    borderRadius: 26 / 2,
    width: 26,
    height: 26,
    zIndex: -1,
  },
  circleMedium: {
    justifyContent: "center",
    alignSelf: "center",
    backgroundColor: "rgb(200,200,200)",
    borderRadius: 34 / 2,
    width: 34,
    height: 34,
    zIndex: -1,
  },
  circleLarge: {
    justifyContent: "center",
    alignSelf: "center",
    backgroundColor: "rgb(200,200,200)",
    borderRadius: 44 / 2,
    width: 44,
    height: 44,
    zIndex: -1,
  },
  circleGiant: {
    justifyContent: "center",
    alignSelf: "center",
    backgroundColor: "rgb(200,200,200)",
    borderRadius: 52 / 2,
    width: 52,
    height: 52,
    zIndex: -1,
  },
  textInCircle: {
    textAlign: "center",
    color: "white",
  },
});
