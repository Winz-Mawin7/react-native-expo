import React from "react";
import { StyleSheet } from "react-native";
import { BottomNavigation, BottomNavigationTab, Icon } from "@ui-kitten/components";
// import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import ComponentScreen from "../scenes/ComponentScreen";
import { HomeRoleMenuStack } from "./HomeNavigation";

const HomeIcon = (props) => <Icon {...props} name="home" />;
const StarIcon = (props) => <Icon {...props} name="star" />;

const { Navigator, Screen } = createBottomTabNavigator();

const BottomNavigator = ({ navigation, state }) => {
  return (
    <BottomNavigation style={styles.bottomNavigation} selectedIndex={state.index} onSelect={(index) => navigation.navigate(state.routeNames[index])}>
      <BottomNavigationTab title="HOME" icon={HomeIcon} />
      <BottomNavigationTab title="COMPONENT" icon={StarIcon} />
    </BottomNavigation>
  );
};

export const BottomTabNavigator = () => (
  <Navigator tabBar={(props) => <BottomNavigator {...props} />}>
    <Screen name="Home" component={HomeRoleMenuStack} />
    <Screen name="Component" component={ComponentScreen} />
  </Navigator>
);

const styles = StyleSheet.create({
  bottomNavigation: {
    marginVertical: 8,
  },
});
