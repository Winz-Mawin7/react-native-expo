import { useNavigation } from '@react-navigation/native';
import { Divider, Icon, Layout, List, ListItem, Text } from '@ui-kitten/components';
import React from 'react';
import { StackParamProps } from '../navigation/StackParamList';

import { child } from '../mockup/child.data';

export default function ({ navigation, route }: StackParamProps<'Parent'>) {
  return (
    <Layout style={{ paddingTop: 20, paddingLeft: 20 }}>
      <Text style={{ fontSize: 20, fontWeight: 'bold', paddingBottom: 10 }}>Child</Text>
      <ChildList child={child} />
    </Layout>
  );
}

const ChildList = ({ child }) => {
  const navigation = useNavigation();

  const renderItem = ({ item }) => (
    <ListItem
      title={item.name}
      accessoryLeft={(props) => <Icon {...props} name='person' />}
      onPress={() => navigation.navigate('StudentDetail', { name: item.name, photo: item.photo, courses: item.courses, achieve: item.achieve })}
    />
  );

  return <List data={child} renderItem={renderItem} ItemSeparatorComponent={Divider} />;
};

/*
const Container = styled.View`
  margin-top: 20;
  margin-left: 20;
`;

const Title = styled.Text`
  font-size: 24px;
`;

const ChildList = styled.View`

`
*/
