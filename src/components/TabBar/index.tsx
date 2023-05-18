import {BottomTabBarProps} from '@react-navigation/bottom-tabs';
import React, {FC} from 'react';
import {TouchableRipple, Text, Surface} from 'react-native-paper';
// import {BottomNavigation} from 'react-native-paper';
import {View, StyleSheet} from 'react-native';

const Styles = ({isFocused = false}) =>
  StyleSheet.create({
    container: {
      flexDirection: 'row',
      height: 60,
      backgroundColor: '#FFFFFF',
    },
    buttonTab: {
      flex: 1,
      backgroundColor: '#FFF',
      justifyContent: 'center',
      alignItems: 'center',
      height: 60,
      borderRadius: 25,
    },
    tabContent: {
      alignItems: 'center',
      justifyContent: 'center',
    },
    textLabel: {
      fontSize: 12,
      color: isFocused ? '#222222' : '#898989',
    },
  });

export const CustomTabBar: FC<BottomTabBarProps> = ({
  navigation,
  state,
  descriptors,
  // insets,
}) => {
  // const {colors} = useTheme();
  return (
    <Surface key={state.key} style={Styles({}).container} elevation={4}>
      {state?.routes?.map((route, index) => {
        const {options} = descriptors[route.key];
        const label: any =
          options.tabBarLabel !== undefined
            ? options.tabBarLabel
            : options.title !== undefined
            ? options.title
            : route.name;

        const isFocused: boolean = state.index === index;

        const onLongPress = () => {
          navigation.emit({
            type: 'tabLongPress',
            target: route.key,
          });
        };

        const onPress = () => {
          const event = navigation.emit({
            type: 'tabPress',
            target: route.key,
            canPreventDefault: true,
          });

          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate(route.name);
          }
        };

        return (
          <TouchableRipple
            accessibilityRole="button"
            accessibilityState={isFocused ? {selected: true} : {}}
            accessibilityLabel={options.tabBarAccessibilityLabel}
            accessibilityElementsHidden={!isFocused}
            key={index}
            style={Styles({}).buttonTab}
            onPress={onPress}
            centered={true}
            borderless={true}
            // rippleColor="rgba(0, 0, 0, .10)"
            onLongPress={onLongPress}>
            <View style={Styles({}).tabContent}>
              <View>
                {options.tabBarIcon
                  ? options.tabBarIcon({
                      focused: isFocused,
                      color: isFocused ? '#222222' : '#898989',
                      size: 24,
                    })
                  : null}
              </View>
              <Text style={[Styles({isFocused}).textLabel]}>{label}</Text>
            </View>
          </TouchableRipple>
        );
      })}
    </Surface>
  );
};
