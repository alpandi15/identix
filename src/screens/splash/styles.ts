import {StyleSheet} from 'react-native';
import {WINDOW_SIZE} from '../../utils/WindowSize';

const Styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    position: 'relative',
  },
  content: {
    backgroundColor: '#fff',
    borderTopRightRadius: 32,
    borderTopLeftRadius: 32,
    bottom: 0,
    position: 'absolute',
    width: WINDOW_SIZE.MAX_WIDTH,
    height: '75%',
    alignItems: 'center',
    paddingTop: 74,
  },
  logo: {
    width: 198.55,
    height: 120,
  },
});

export default Styles;
