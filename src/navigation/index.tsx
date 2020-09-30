import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import HomeScreen from "../components/HomeComponent";
import ParentScreen from "../components/ParentComponent";
import StudentScreen from "../components/StudentComponent";
import TeacherScreen from "../components/TeacherComponent";

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
