import { Divider, Icon, Layout, List, ListItem, Text } from '@ui-kitten/components';
import React from 'react';
import { Image, View } from 'react-native';
import { StackParamProps } from '../navigation/StackParamList';
import { ProgressCircleComponent } from '../components/ProgressCircleComponent';

export default function StudentDetailScreen({ navigation, route }: StackParamProps<'StudentDetail'>) {
  const name = route.params.name;
  const photo = route.params.photo;
  const courses = route.params.courses;
  const achieve = route.params.achieve;

  const Header = () => (
    <Layout>
      <Image source={photo} style={{ flexDirection: 'row', alignSelf: 'center', width: 200, height: 200, borderRadius: 200 / 2 }} />
      <Text style={{ alignSelf: 'center', fontSize: 20, paddingTop: 10 }}>{name}</Text>
      <View style={{ flexDirection: 'row', justifyContent: 'space-between', paddingLeft: 30, paddingRight: 10, paddingTop: 30 }}>
        <Text>Processing</Text>
        <Text>Achieve</Text>
      </View>
    </Layout>
  );

  const BodyCourseList = ({ item }) => (
    <ListItem
      accessoryLeft={(props) => <Icon {...props} name='book-open-outline' />}
      title={item.subject}
      accessoryRight={() => <ProgressCircleComponent totalTime={item.totalTime} spendTime={item.spendTime} />}
      description={`Balance ${item.totalTime - item.spendTime} Hrs.`}
    />
  );

  const FooterAchieveList = () => {
    const renderItem = ({ item }) => (
      <ListItem
        accessoryLeft={(props) => <Icon {...props} name='star' />}
        title={item}
        accessoryRight={(props) => <Icon {...props} style={{ width: 45, height: 45, marginRight: 5 }} name='checkmark-circle-2' fill='rgb(40,180,50)' />}
      />
    );

    return <List data={achieve} renderItem={renderItem} ItemSeparatorComponent={Divider} />;
  };

  return (
    <Layout style={{ paddingTop: 20, paddingHorizontal: 20 }}>
      <List
        ListHeaderComponent={() => <Header />}
        data={courses}
        renderItem={BodyCourseList}
        ItemSeparatorComponent={Divider}
        ListFooterComponent={() => <FooterAchieveList />}
        showsVerticalScrollIndicator={false}
      />
    </Layout>
  );
}
