import React, {FC} from 'react';
import {
  createBottomTabNavigator,
  BottomTabNavigationOptions,
} from '@react-navigation/bottom-tabs';
import Routes from './Routes';
import TabBar from './TabBar';

const Tab = createBottomTabNavigator();
const navOptions: BottomTabNavigationOptions = {
  headerShown: false,
};

const BottomTabNavigator: FC = () => {
  return (
    <Tab.Navigator tabBar={TabBar}>
      <Tab.Screen
        name={Routes.HomeSceeen.name}
        component={Routes.HomeSceeen.component}
        options={{...navOptions, tabBarLabel: 'Home'}}
      />
      <Tab.Screen
        name={Routes.MyEventSceeen.name}
        component={Routes.MyEventSceeen.component}
      />
      <Tab.Screen
        name={Routes.ItenarySceeen.name}
        component={Routes.ItenarySceeen.component}
      />
      <Tab.Screen
        name={Routes.CartSceeen.name}
        component={Routes.CartSceeen.component}
      />
      <Tab.Screen
        name={Routes.ProfileSceeen.name}
        component={Routes.ProfileSceeen.component}
      />
    </Tab.Navigator>
  );
};

export default BottomTabNavigator;
