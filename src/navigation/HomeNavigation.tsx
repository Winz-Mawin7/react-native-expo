import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import ParentScreen from "../scenes/ParentScreen";
import StudentScreen from "../scenes/StudentScreen";
import TeacherScreen from "../scenes/TeacherScreen";
import HomeScreen from "../scenes/HomeScreen";

const { Navigator, Screen } = createStackNavigator();

export const HomeRoleMenuStack = () => {
  return (
    <Navigator>
      <Screen name="Home" component={HomeScreen} />
      <Screen name="Parent" component={ParentScreen} />
      <Screen name="Student" component={StudentScreen} />
      <Screen name="Teacher" component={TeacherScreen} />
    </Navigator>
  );
};
