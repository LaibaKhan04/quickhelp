import React from 'react';
import { StyleSheet, TouchableOpacity, View, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import imagepath from '../constants/imagepath';

const Headercomp = ({ onpressback }) => {
  const navigation = useNavigation();

  const goback = () => {
    navigation.goBack(); // Fixed typo: goBack should be camelCase
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={!!onpressback ? onpressback : goback}>
        <Image source={imagepath.icback} />
        </TouchableOpacity>
    </View>
  );
};

// Define your styles
const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    height: 42, // Use moderatescale(42) if available, else use this fixed height
  },
});

export default Headercomp;
