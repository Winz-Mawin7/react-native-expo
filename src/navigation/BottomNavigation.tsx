import React from 'react';
import { StyleSheet } from 'react-native';
import { BottomNavigation, BottomNavigationTab, Icon } from '@ui-kitten/components';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import ComponentScreen from '../scenes/ComponentScreen';
import { HomeRoleMenuStack } from './HomeStackNavigation';
import { TabParamList } from './TabParamList';

const HomeIcon = (props) => <Icon {...props} name='home' />;
const StarIcon = (props) => <Icon {...props} name='star' />;

const Tab = createBottomTabNavigator<TabParamList>();

const BottomNavigator = ({ navigation, state }) => {
  return (
    <BottomNavigation style={styles.bottomNavigation} selectedIndex={state.index} onSelect={(index) => navigation.navigate(state.routeNames[index])}>
      <BottomNavigationTab title='HOME' icon={HomeIcon} />
      <BottomNavigationTab title='COMPONENT' icon={StarIcon} />
    </BottomNavigation>
  );
};

export const BottomTabNavigator = () => (
  <Tab.Navigator tabBar={(props) => <BottomNavigator {...props} />}>
    <Tab.Screen name='Home' component={HomeRoleMenuStack} />
    <Tab.Screen name='Component' component={ComponentScreen} />
  </Tab.Navigator>
);

const styles = StyleSheet.create({
  bottomNavigation: {
    marginVertical: 8,
  },
});
