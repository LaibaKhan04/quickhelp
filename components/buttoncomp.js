import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';
import { moderateScale } from 'react-native-size-matters';

const ButtonComp = ({ btnText, btnStyle, textStyle, onPress }) => {
  return (
    <TouchableOpacity
      style={[styles.button, btnStyle]}
      onPress={onPress}
      activeOpacity={0.8} // Provides feedback when pressed
    >
      <Text style={[styles.text, textStyle]}>{btnText}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: '#007BFF', // Default button color
    paddingVertical: moderateScale(12),
    paddingHorizontal: moderateScale(16),
    borderRadius: moderateScale(8),
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    color: '#FFFFFF', // Default text color
    fontSize: moderateScale(16),
    fontWeight: 'bold',
  },
});

export default ButtonComp;
