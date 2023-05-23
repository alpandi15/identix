import React from 'react';
import {View, TouchableOpacity} from 'react-native';
import {Text, useTheme, Button} from 'react-native-paper';
import StatusBarCustom from '../../components/StatusBar/StatusBar';
import BackgroundHeader from '../../components/Header/BackgroundHeader';
import HeaderHome from './components/HeaderHome';
import {Styles} from './styles'

export default function HomeScreen(): JSX.Element {
  const {colors} = useTheme()
  return (
    <View style={Styles.container}>
      <StatusBarCustom backgroundColor={colors.secondary} />
      <BackgroundHeader height={188} />
      <View style={Styles?.header}>
        <HeaderHome />
      </View>
      <View>
        <Text>Home Screen</Text>
      </View>
    </View>
  );
}
