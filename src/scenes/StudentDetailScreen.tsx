import { Divider, Icon, Layout, List, ListItem, Text } from '@ui-kitten/components';
import React from 'react';

import { StackParamProps } from '../navigation/StackParamList';
import { AvatarProfile } from '../components/AvatarProfile';
import { AchieveList } from '../components/AchieveList';
import { ProgressCircleComponent } from '../components/ProgressCircleComponent';
import { View } from 'react-native';

export default function StudentDetailScreen({ navigation, route }: StackParamProps<'StudentDetail'>) {
  const name = route.params.name;
  const photo = route.params.photo;
  const courses = route.params.courses;
  const achieves = route.params.achieves;

  const CourseList = ({ item }) => (
    <ListItem
      accessoryLeft={(props) => <Icon {...props} name='book-open-outline' />}
      title={item.subject}
      accessoryRight={() => <ProgressCircleComponent totalTime={item.totalTime} spendTime={item.spendTime} />}
      description={`Balance ${item.totalTime - item.spendTime} Hrs.`}
    />
  );

  return (
    <Layout style={{ paddingTop: 20, paddingLeft: 10, paddingRight: 20 }}>
      <List
        ListHeaderComponent={() => (
          <Layout>
            <AvatarProfile photo={photo} name={name} />
            <Title leftTitle='Courses' rightTitle='Process' />
          </Layout>
        )}
        data={courses}
        renderItem={CourseList}
        ItemSeparatorComponent={Divider}
        ListFooterComponent={() => (
          <Layout>
            <Title leftTitle='Courses' rightTitle='Achieve' />
            <AchieveList achieves={achieves} />
          </Layout>
        )}
        showsVerticalScrollIndicator={false}
      />
    </Layout>
  );
}

const Title = ({ leftTitle, rightTitle }) => (
  <View style={{ flexDirection: 'row', justifyContent: 'space-between', paddingLeft: 20, paddingRight: 8, paddingTop: 30 }}>
    <Text>{leftTitle}</Text>
    <Text>{rightTitle}</Text>
  </View>
);
