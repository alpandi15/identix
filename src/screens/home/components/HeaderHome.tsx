import React, { FC } from 'react'
import {View, TouchableOpacity, StyleSheet} from 'react-native'
import {Text} from 'react-native-paper'
import { SvgXml } from 'react-native-svg'
import Ionicons from 'react-native-vector-icons/Ionicons'
import Scan from '../../../assets/icon/Scan'
import { WINDOW_SIZE } from '../../../utils/WindowSize'

const buttonStyle = StyleSheet.create({
  button: {
    width: 42,
    height: 42,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 12,
  }
})

const Button = ({backgroundColor = '#ffffff', Icon}) => {
  return (
    <TouchableOpacity style={[buttonStyle.button, {backgroundColor}]}>
      <SvgXml xml={Icon} width={25} height={25} />
    </TouchableOpacity>
  )
}

const Styles = StyleSheet.create({
  content: {
    flexDirection: 'row',
    position: 'relative',
  },
  search: {
    backgroundColor: '#ffffff',
    height: 42,
    borderRadius: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginLeft: 7,
    padding: 10,
    width: WINDOW_SIZE.MAX_WIDTH - 85
  },
  searchIcon: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  searchText: {
    color: '#898989',
    marginLeft: 7,
  }
})
const HeaderHome: FC = () => {
  return (
    <View style={Styles.content}>
      <Button Icon={Scan} />
      <TouchableOpacity style={Styles.search}>
        <View style={Styles.searchIcon}>
          <Ionicons name="search-outline" size={20} />
          <Text style={Styles?.searchText}>Cari event fovorit kamu</Text>
        </View>
        <TouchableOpacity onPress={() => alert('Notification')}>
          <Ionicons name="notifications-outline" size={20} />
        </TouchableOpacity>
      </TouchableOpacity>
    </View>
  )
}

export default HeaderHome
