import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { Icon } from "@ui-kitten/components";
import { TouchableHighlight } from "react-native";

import ParentScreen from "../scenes/ParentScreen";
import StudentScreen from "../scenes/StudentScreen";
import TeacherScreen from "../scenes/TeacherScreen";
import HomeScreen from "../scenes/HomeScreen";
import ProfileScreen from "../scenes/ProfileScreen";
import StudentDetailScreen from "../scenes/StudentDetailScreen";

import { StackParamList } from "./StackParamList";

const Stack = createStackNavigator<StackParamList>();

interface RoutesProps {}

const ParentRightIcon = (props) => <Icon {...props} name="person-outline" fill="rgb(60, 130, 255)" style={{ width: 32, height: 32 }} />;

const Profile = ({ navigation }) => (
  <TouchableHighlight style={{ right: 20 }} underlayColor="#DDDDDD" onPress={() => navigation.navigate("Profile")}>
    <ParentRightIcon />
  </TouchableHighlight>
);

export const HomeRoleMenuStack: React.FC<RoutesProps> = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen
        name="Parent"
        component={ParentScreen}
        options={({ navigation }) => {
          return {
            headerTitle: "Parent Home",
            headerRight: () => <Profile navigation={navigation} />,
          };
        }}
      />
      <Stack.Screen name="Student" component={StudentScreen} />
      <Stack.Screen name="Teacher" component={TeacherScreen} />
      <Stack.Screen name="Profile" component={ProfileScreen} />
      <Stack.Screen name="StudentDetail" component={StudentDetailScreen} options={({ route }) => ({ headerTitle: `${route.params?.name}` })} />
    </Stack.Navigator>
  );
};
