import React, { ReactElement } from "react";
import { ImageSourcePropType, StyleSheet } from "react-native";
import { Avatar, Layout, Text } from "@ui-kitten/components";
import { EvaSize } from "@ui-kitten/components/devsupport";

const DEFAULT_AVATAR = {
  uri: "https://app.nextschool.io/img/default/student.png",
};
const DEFAULT_SIZE = "medium";
const SIZE_TINY = 20;
const SIZE_SMALL = 26;
const SIZE_MEDIUM = 38;
const SIZE_LARGE = 44;
const SIZE_GIANT = 52;

interface AvatarStackProp {
  stacks: Array<{ photo: ImageSourcePropType }>;
  max?: number;
  size?: EvaSize;
}

export const AvatarStack = ({ stacks, max = stacks.length, size = DEFAULT_SIZE }: AvatarStackProp): ReactElement => {
  const render = [];
  const circleStyle = checkStyleCircle(size);

  for (let index = 0; index < max && index < stacks.length; index++) {
    render.push(
      <Avatar
        source={stacks[index].photo ? stacks[index].photo : DEFAULT_AVATAR} // android not render if null or undefined
        key={index}
        style={styles.avatarStyle}
        size={size}
      />
    );
  }

  // push different from max to render
  const diff = stacks.length - max;
  if (diff > 0)
    render.push(
      <Layout key={++max} style={[styles.circle, circleStyle]}>
        <Text style={styles.textInCircle}>{`+${diff}`}</Text>
      </Layout>
    );

  return <Layout style={styles.container}>{render}</Layout>;
};

const checkStyleCircle = (size: string) => {
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
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    padding: 15,
    flexWrap: "wrap",
  },
  avatarStyle: {
    marginLeft: -10,
    marginVertical: 2,
    borderWidth: 2,
    borderColor: "white",
  },
  circle: {
    justifyContent: "center",
    alignSelf: "center",
    backgroundColor: "rgb(211,211,211)",
    marginLeft: -10,
    zIndex: -1,
  },
  circleTiny: {
    borderRadius: SIZE_TINY / 2,
    width: SIZE_TINY,
    height: SIZE_TINY,
  },
  circleSmall: {
    borderRadius: SIZE_SMALL / 2,
    width: SIZE_SMALL,
    height: SIZE_SMALL,
  },
  circleMedium: {
    borderRadius: SIZE_MEDIUM / 2,
    width: SIZE_MEDIUM,
    height: SIZE_MEDIUM,
  },
  circleLarge: {
    borderRadius: SIZE_LARGE / 2,
    width: SIZE_LARGE,
    height: SIZE_LARGE,
  },
  circleGiant: {
    borderRadius: SIZE_GIANT / 2,
    width: SIZE_GIANT,
    height: SIZE_GIANT,
  },
  textInCircle: {
    textAlign: "center",
    color: "white",
  },
});
