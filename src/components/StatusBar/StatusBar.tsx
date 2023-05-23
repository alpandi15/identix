import React from 'react';
import {View, SafeAreaView, StatusBar, Platform} from 'react-native';

const STATUS_BAR_HEGHT = Platform.OS === 'ios' ? 59 : StatusBar.currentHeight

const StatusBarCustom = ({backgroundColor, ...props}) => {
  return (
    <View style={{backgroundColor, height: STATUS_BAR_HEGHT}}>
      <SafeAreaView>
        <StatusBar
          translucent
          backgroundColor={backgroundColor}
          animated
          barStyle="light-content"
          {...props}
        />
      </SafeAreaView>
    </View>
  )
}

export default StatusBarCustom