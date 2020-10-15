import { Text } from '@ui-kitten/components';
import React from 'react';
import ProgressCircle from 'react-native-progress-circle';
import { stringify } from 'uuid';

const DEFAULT_RADIUS = 25;
const DEFAULT_BORDER_WIDTH = 8;

interface ProgressCircleType {
  totalTime: number;
  spendTime: number;
  radius?: number;
  borderWidth?: number;
}

export const ProgressCircleComponent = ({ totalTime, spendTime, radius, borderWidth }: ProgressCircleType) => {
  if (!radius) radius = DEFAULT_RADIUS;
  if (!borderWidth) borderWidth = DEFAULT_BORDER_WIDTH;

  const percent = 100 - Math.floor(totalTime - spendTime) * 10;

  return (
    <ProgressCircle percent={percent} radius={radius} borderWidth={borderWidth} color='#3399FF' bgColor='#FFFFFF'>
      <Text category='c1'>{`${percent}%`}</Text>
    </ProgressCircle>
  );
};
