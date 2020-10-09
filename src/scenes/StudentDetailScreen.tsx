import { Divider, Icon, Layout, List, ListItem, Text } from "@ui-kitten/components";
import React from "react";
import { Image, View } from "react-native";
import { StackParamProps } from "../navigation/StackParamList";
import ProgressCircle from "react-native-progress-circle";
import { ScrollView } from "react-native-gesture-handler";

export default function StudentDetailScreen({ navigation, route }: StackParamProps<"StudentDetail">) {
  const name = route.params.name;
  const photo = route.params.photo;
  const courses = route.params.courses;
  const achieve = route.params.achieve;

  return (
    <ScrollView>
      <Layout style={{ paddingTop: 30, paddingHorizontal: 30 }}>
        <Image source={photo} style={{ flexDirection: "row", alignSelf: "center", width: 200, height: 200, borderRadius: 200 / 2 }} />
        <Text style={{ alignSelf: "center", fontSize: 20, paddingTop: 10 }}>{name}</Text>
        <View style={{ flexDirection: "row", justifyContent: "space-between", padding: 20, marginTop: 20 }}>
          <Text>Processing</Text>
          <Text>Achieve</Text>
        </View>
        <CourseList courses={courses} />
        <Divider />
        <View style={{ flexDirection: "row", justifyContent: "space-between", padding: 20 }}>
          <Text>Success</Text>
          <Text>Achieve</Text>
        </View>
        <AchieveList achieve={achieve} />
      </Layout>
    </ScrollView>
  );
}

const CourseList = ({ courses }) => {
  const renderItemIcon = (props) => <Icon {...props} name="book-open-outline" />;

  const renderItem = ({ item }) => (
    <ListItem
      title={item.subject}
      accessoryLeft={renderItemIcon}
      accessoryRight={() => <ProgressComponent totalTime={item.totalTime} spendTime={item.spendTime} />}
      description={`Balance ${item.totalTime - item.spendTime} Hrs.`}
    />
  );

  return <List data={courses} renderItem={renderItem} ItemSeparatorComponent={Divider} />;
};

const ProgressComponent = ({ totalTime, spendTime }) => {
  const percent = (totalTime - spendTime) * 10;
  return (
    <ProgressCircle percent={percent} radius={25} borderWidth={8} color="#3399FF" bgColor="#FFFFFF">
      <Text category="c1">{`${percent}%`}</Text>
    </ProgressCircle>
  );
};

const AchieveList = ({ achieve }) => {
  const renderItemIcon = (props) => <Icon {...props} name="star" />;

  const renderItem = ({ item }) => (
    <ListItem
      title={item}
      accessoryLeft={renderItemIcon}
      accessoryRight={(props) => (
        <View>
          <Icon {...props} style={{ width: 40, height: 40 }} name="checkmark-circle" fill="rgb(40,255,50)" />
        </View>
      )}
    />
  );

  return <List data={achieve} renderItem={renderItem} ItemSeparatorComponent={Divider} />;
};
