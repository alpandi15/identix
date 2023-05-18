import React, {FC} from 'react';
import {Provider as PaperProvider, MD3LightTheme} from 'react-native-paper';
import {StatusBar} from 'react-native';
import {ThemeProp} from 'react-native-paper/lib/typescript/src/types';
import AppNavigator from './src/navigation/AppNavigator';
// import EvilIcons from 'react-native-vector-icons/EvilIcons';
// import {IconProps} from 'react-native-vector-icons/Icon';

const theme: ThemeProp = {
  ...MD3LightTheme,
  colors: {
    ...MD3LightTheme.colors,
    primary: '#FFDF00',
    secondary: '#1E1E1E',
    tertiary: '#606060',
    gray200: '#898989',
  },
};

// const IconSetting = (props: IconProps) => {
//   return <EvilIcons {...props} />;
// };

const App: FC = () => {
  return (
    <PaperProvider theme={theme}>
      <StatusBar backgroundColor="#FFFFFF" animated barStyle="dark-content" />
      <AppNavigator />
    </PaperProvider>
  );
};

export default App;
