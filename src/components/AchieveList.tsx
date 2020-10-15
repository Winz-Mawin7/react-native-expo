import { ListItem, Icon, List, Divider } from '@ui-kitten/components';
import React from 'react';

export const AchieveList = ({ achieves }) => {
  const renderItem = ({ item }) => (
    <ListItem
      accessoryLeft={(props) => <Icon {...props} name='star' />}
      title={item}
      accessoryRight={(props) => <Icon {...props} style={{ width: 45, height: 45, marginRight: 5 }} name='checkmark-circle-2' fill='rgb(40,180,50)' />}
    />
  );
  return <List data={achieves} renderItem={renderItem} ItemSeparatorComponent={Divider} />;
};
