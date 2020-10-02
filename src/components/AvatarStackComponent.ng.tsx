import React from "react";
import { ImageSourcePropType } from "react-native";
import { Avatar, Layout, Text, useStyleSheet } from "@ui-kitten/components";
import { v4 as uuidv4 } from "uuid";

const DEFAULT_AVATAR = {
  uri: "https://app.nextschool.io/img/default/student.png",
};

const DEFAULT_SIZE = "medium";
const SIZE_TINY = 20;
const SIZE_SMALL = 26;
const SIZE_MEDIUM = 38;
const SIZE_LARGE = 44;
const SIZE_GIANT = 52;

type AvatarSize = "tiny" | "small" | "medium" | "large" | "giant";
type stack = {
  photo: ImageSourcePropType;
};

interface AvatarStackProp {
  stacks: stack[];
  max?: number;
  size?: AvatarSize;
}

export const AvatarStack = ({ stacks, max = stacks.length, size = DEFAULT_SIZE }: AvatarStackProp): React.ReactElement => {
  const styles = StyleSheet.create();
  const render = [];
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
  const circleStyle = checkStyleCircle(size);

  for (let index = 0; index < max && index < stacks.length; index++) {
    render.push(
      <Avatar
        source={stacks[index].photo ? stacks[index].photo : DEFAULT_AVATAR} // android not render if null or undefined
        key={uuidv4()}
        style={styles.avatarStyle}
        size={size}
      />
    );
  }

  // push different from max to render
  const diff = stacks.length - max;
  if (diff > 0)
    render.push(
      <Layout style={[styles.circle, circleStyle]}>
        <Text style={styles.textInCircle}>{`+${diff}`}</Text>
      </Layout>
    );

  return <Layout style={styles.container}>{render}</Layout>;
};

const StyleSheet = useStyleSheet({
  container: {
    flexDirection: "row",
    padding: 15,
    flexWrap: "wrap",
  },
  avatarStyle: {
    marginLeft: -10,
    marginVertical: 2,
    borderWidth: 2,
    borderColor: "color-basic-100",
  },
  circle: {
    justifyContent: "center",
    alignSelf: "center",
    backgroundColor: "background-basic-color-4",
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
    color: "text-default-color",
  },
});
