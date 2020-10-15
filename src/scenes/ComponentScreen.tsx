import { Layout, Text } from '@ui-kitten/components';
import React from 'react';
import { AvatarStack } from '../components/AvatarStackComponent';

import { stacks } from '../core/mockup/stacks.data';
import { ModalBackdrop } from '../components/ModalBackdropComponent';
import { StyleSheet, View } from 'react-native';
import { TabParamProps } from '../navigation/TabParamList';
import { ProgressCircleComponent } from '../components/ProgressCircleComponent';

export default function ({ navigation, route }: TabParamProps<'Component'>) {
  return (
    <Layout style={styles.container}>
      <Text>Stack Component</Text>
      <AvatarStack stacks={stacks} />
      <AvatarStack stacks={stacks} max={5} />

      <Text>Modal Backdrop</Text>
      <ModalBackdrop />

      <Paragraph />
      <Text>Progress Circle</Text>
      <View style={{ flexDirection: 'row', marginVertical: 10 }}>
        <ProgressCircleComponent totalTime={10} spendTime={5} />
        <ProgressCircleComponent totalTime={10} spendTime={5} radius={40} borderWidth={20} />
      </View>
    </Layout>
  );
}

const styles = StyleSheet.create({
  container: { alignItems: 'center', padding: 20 },
});

const Paragraph = () => <View style={{ marginVertical: 10 }} />;
