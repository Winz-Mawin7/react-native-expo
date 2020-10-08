import { useNavigation } from "@react-navigation/native";
import { Divider, Icon, Layout, List, ListItem, Text } from "@ui-kitten/components";
import React from "react";
import { StackParamProps } from "../navigation/StackParamList";

const child = [
  {
    name: "John Stone",
    photo: require("../assets/image-profile-1.jpg"),
    courses: [
      { subject: "Chinese For Nursery", spendTime: 7, totalTime: 10 },
      { subject: "English for Nursery", spendTime: 5, totalTime: 10 },
    ],
    achieve: ["English for Beginner", "Chinese for Beginner"],
  },
  {
    name: "Mia Wong",
    photo: require("../assets/image-profile-2.jpg"),
    courses: [
      { subject: "Chinese For Nursery", spendTime: 7, totalTime: 10 },
      { subject: "English for Nursery", spendTime: 5, totalTime: 10 },
    ],
    achieve: ["English for Beginner", "Chinese for Beginner"],
  },
  {
    name: "Salome Simoes",
    photo: require("../assets/image-profile-3.jpg"),
    courses: [
      { subject: "Chinese For Nursery", spendTime: 7, totalTime: 10 },
      { subject: "English for Nursery", spendTime: 5, totalTime: 10 },
    ],
    achieve: ["English for Beginner", "Chinese for Beginner"],
  },
];

const PictureProfile = (props) => <Icon {...props} name="person" />;

export default function ({ navigation, route }: StackParamProps<"Parent">) {
  return (
    <Layout style={{ paddingTop: 20, paddingLeft: 20 }}>
      <Text style={{ fontSize: 20, fontWeight: "bold", paddingBottom: 10 }}>Child</Text>
      <ChildList child={child} />
    </Layout>
  );
}

const ChildList = ({ child }) => {
  const navigation = useNavigation();
  const renderItem = ({ item }) => (
    <ListItem
      title={item.name}
      accessoryLeft={PictureProfile}
      onPress={() => navigation.navigate("StudentDetail", { name: item.name, photo: item.photo, courses: item.courses, achieve: item.achieve })}
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
