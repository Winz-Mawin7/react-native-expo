import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import HomeScreen from "../scenes/HomeScreen";
import ParentScreen from "../scenes/ParentScreen";
import StudentScreen from "../scenes/StudentScreen";
import TeacherScreen from "../scenes/TeacherScreen";

const { Navigator, Screen } = createStackNavigator();

const RoleMenuStack = () => {
  return (
    <Navigator>
      <Screen name="Home" component={HomeScreen} />
      <Screen name="Parent" component={ParentScreen} />
      <Screen name="Student" component={StudentScreen} />
      <Screen name="Teacher" component={TeacherScreen} />
    </Navigator>
  );
};

export default function RoleNavigator() {
  return (
    <NavigationContainer>
      <RoleMenuStack />
    </NavigationContainer>
  );
}
