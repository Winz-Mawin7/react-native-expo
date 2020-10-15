import React, { ReactElement } from 'react';
import { StyleSheet } from 'react-native';
import { Avatar, Layout, Text } from '@ui-kitten/components';
import { EvaSize } from '@ui-kitten/components/devsupport';
import { IStack } from '../mockup/stacks.data';
import { v4 as uuidv4 } from 'uuid';

const DEFAULT_AVATAR = {
  uri: 'https://app.nextschool.io/img/default/student.png',
};
const DEFAULT_SIZE = 'large';
const SIZE_TINY = 20;
const SIZE_SMALL = 26;
const SIZE_MEDIUM = 38;
const SIZE_LARGE = 44;
const SIZE_GIANT = 52;

interface AvatarStackProp {
  stacks: Array<IStack>;
  max?: number;
  size?: EvaSize;
}

export const AvatarStack = ({ stacks, max, size }: AvatarStackProp): ReactElement => {
  if (!max) max = stacks.length;
  if (!size) size = DEFAULT_SIZE;

  const circleStyle = checkStyleCircle(size);

  const render = stacks.map(
    (stack, index) => index < max && <Avatar source={stack.photo ? stack.photo : DEFAULT_AVATAR} key={uuidv4()} style={styles.avatarStyle} size={size} />
  );

  // push different from max to render
  const diff = stacks.length - max;
  if (diff > 0)
    render.push(
      <Layout key={uuidv4()} style={[styles.circle, circleStyle]}>
        <Text style={styles.textInCircle}>{`+${diff}`}</Text>
      </Layout>
    );

  return <Layout style={styles.container}>{render}</Layout>;
};

const checkStyleCircle = (size: string) => {
  switch (size) {
    case 'tiny':
      return styles.circleTiny;
    case 'small':
      return styles.circleSmall;
    case 'medium':
      return styles.circleMedium;
    case 'large':
      return styles.circleLarge;
    case 'giant':
      return styles.circleGiant;
    default:
      return styles.circleMedium;
  }
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    padding: 15,
    flexWrap: 'wrap',
  },
  avatarStyle: {
    marginLeft: -10,
    marginVertical: 2,
    borderWidth: 2,
    borderColor: 'white',
  },
  circle: {
    justifyContent: 'center',
    alignSelf: 'center',
    backgroundColor: 'rgb(211,211,211)',
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
    textAlign: 'center',
    color: 'white',
  },
});
