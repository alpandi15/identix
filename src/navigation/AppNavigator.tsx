import React from 'react';
import {
  createStackNavigator,
  StackNavigationOptions,
} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
import Routes from './Routes';
import {MainStack} from './StackNavigator';

const StackApp = createStackNavigator();

export const navOptionHandler: StackNavigationOptions = {
  headerShown: false,
};

const AppNavigator = () => {
  return (
    <NavigationContainer>
      <StackApp.Navigator
        initialRouteName="Loading"
        screenOptions={navOptionHandler}>
        <StackApp.Screen
          name="Loading"
          component={Routes.SplashSceeen.component}
          options={navOptionHandler}
        />
        <StackApp.Screen name="MainStack" component={MainStack} />
      </StackApp.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;
