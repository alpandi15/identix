/* eslint-disable react/no-unstable-nested-components */
import React, {FC} from 'react';
import {
  createBottomTabNavigator,
  BottomTabNavigationOptions,
} from '@react-navigation/bottom-tabs';
import Routes from './Routes';
import {CustomTabBar} from '../components/TabBar';
import {SvgXml} from 'react-native-svg';
import {TabIcons} from '../components/TabBar/TabIcons';

const Tab = createBottomTabNavigator();
const navOptions: BottomTabNavigationOptions = {
  headerShown: false,
};

const BottomTabNavigator: FC = () => {
  return (
    <Tab.Navigator tabBar={CustomTabBar}>
      <Tab.Screen
        name={Routes.HomeSceeen.name}
        component={Routes.HomeSceeen.component}
        options={{
          ...navOptions,
          tabBarLabel: 'Home',
          tabBarIcon: ({focused, size}) => {
            return (
              <SvgXml
                xml={focused ? TabIcons.Home.active : TabIcons.Home.base}
                width={size}
                height={size}
              />
            );
            // return <Icon name="home" size={size} color={color} />;
          },
        }}
      />
      <Tab.Screen
        name={Routes.MyEventSceeen.name}
        component={Routes.MyEventSceeen.component}
        options={{
          ...navOptions,
          tabBarLabel: 'My Event',
          tabBarIcon: ({focused, size}) => {
            return (
              <SvgXml
                xml={focused ? TabIcons.MyEvent.active : TabIcons.MyEvent.base}
                width={size}
                height={size}
              />
            );
          },
        }}
      />
      <Tab.Screen
        name={Routes.ItenarySceeen.name}
        component={Routes.ItenarySceeen.component}
        options={{
          ...navOptions,
          tabBarLabel: 'Itenerary',
          tabBarIcon: ({focused, size}) => {
            return (
              <SvgXml
                xml={
                  focused
                    ? TabIcons.Intenerary.active
                    : TabIcons.Intenerary.base
                }
                width={size}
                height={size}
              />
            );
          },
        }}
      />
      <Tab.Screen
        name={Routes.CartSceeen.name}
        component={Routes.CartSceeen.component}
        options={{
          ...navOptions,
          tabBarLabel: 'Cart',
          tabBarIcon: ({focused, size}) => {
            return (
              <SvgXml
                xml={focused ? TabIcons.Cart.active : TabIcons.Cart.base}
                width={size}
                height={size}
              />
            );
          },
        }}
      />
      <Tab.Screen
        name={Routes.ProfileSceeen.name}
        component={Routes.ProfileSceeen.component}
        options={{
          ...navOptions,
          tabBarLabel: 'Profile',
          tabBarIcon: ({focused, size}) => {
            return (
              <SvgXml
                xml={focused ? TabIcons.Profile.active : TabIcons.Profile.base}
                width={size}
                height={size}
              />
            );
          },
        }}
      />
    </Tab.Navigator>
  );
};

export default BottomTabNavigator;
