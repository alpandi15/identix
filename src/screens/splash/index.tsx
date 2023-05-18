import React, {useEffect} from 'react';
import {SafeAreaView, View, StatusBar} from 'react-native';
import {useTheme} from 'react-native-paper';
import Styles from './styles';
import FastImage from 'react-native-fast-image';

import LogoApp from '../../assets/images/logo_app.png';
import {ParamListBase, useNavigation} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';

const SplashScreen = (): JSX.Element => {
  const {colors} = useTheme();
  const navigation = useNavigation<StackNavigationProp<ParamListBase>>();

  useEffect(() => {
    setTimeout(() => {
      navigation.replace('MainStack');
    }, 1000);
  }, [navigation]);

  return (
    <SafeAreaView style={[Styles.wrapper, {backgroundColor: colors.primary}]}>
      <StatusBar
        backgroundColor={colors.primary}
        animated
        barStyle="dark-content"
      />
      <View style={[Styles.content]}>
        <FastImage
          style={[Styles.logo]}
          source={LogoApp}
          resizeMode={FastImage.resizeMode.contain}
        />
      </View>
    </SafeAreaView>
  );
};

export default SplashScreen;
