import React from 'react'
import { View, StyleSheet } from "react-native";
import LinearGradient from 'react-native-linear-gradient';
import { useTheme } from 'react-native-paper';

const Styles = StyleSheet.create({
  content: {
    borderBottomRightRadius: 32,
    borderBottomLeftRadius: 32,
    // position: 'absolute',
    // top: 0,
    // left: 0,
    // right: 0
    // height: 188,
    // bottom: 0
  }
})

export default function BackgroundHeader ({height = 188}) {
  const {colors} = useTheme()
  return (
    <LinearGradient
      colors={[colors.secondary, '#606060']}
      style={[Styles.content, {height}]}
      // start={{x: 1, y: 0}}
      // end={{x: 1, y: 1}}
      locations={[0.3, 1]}
    />
  )
}