import { StyleSheet } from 'react-native';
import { scale, moderateScale } from 'react-native-size-matters';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: moderateScale(24),
  },

  imgstyle: {
    width: moderateScale(70),
    height: moderateScale(70),
    borderRadius: 100
  },

  headingtext: {
    fontSize: scale(24),
    textTransform: 'uppercase',
    fontWeight: 'bold',
    textAlign: 'center', // Fixed typo
  },

  textstyle: {
    fontSize: scale(20),
    fontWeight: '400',
    marginTop: moderateScale(16),
  },
});

export default styles;