import { Layout, Text } from '@ui-kitten/components';
import React from 'react';
import { Image, View } from 'react-native';

export const AvatarProfile = ({ photo, name }) => (
  <Layout>
    <Image source={photo} style={{ flexDirection: 'row', alignSelf: 'center', width: 200, height: 200, borderRadius: 200 / 2 }} />
    <Text style={{ alignSelf: 'center', fontSize: 20, paddingTop: 10 }}>{name}</Text>
  </Layout>
);
