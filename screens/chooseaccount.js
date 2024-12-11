import { View, Text, StyleSheet, SafeAreaView, Image } from 'react-native';
import React from 'react';
import HeaderComp from '../components/headercomp';
import ButtonComp from '../components/buttoncomp';
import { moderateScale } from 'react-native-size-matters';
import styles from './styles'; // Use external styles
// import { NavigationContainer } from '@react-navigation/native';
import navigationstrings from '../constants/navigationstrings';

const ChooseAccount = ({ navigation }) => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={{ paddingHorizontal: moderateScale(24) }}>
        <HeaderComp />
      </View>
      <View style={styles.container}>
        <Text style={styles.headingtext}>Choose your account type</Text>
        <View style={{ alignItems: 'center', marginVertical: moderateScale(20) }}>
          <Image
            source={{
              uri: 'https://static.vecteezy.com/system/resources/previews/012/791/239/original/maid-flat-icon-free-vector.jpg',
            }}
            style={styles.imgstyle}
          />
          <Text style={styles.textstyle}>workers</Text>
        </View>
        <View style={{ alignItems: 'center', marginVertical: moderateScale(20) }}>
          <Image
            source={{
              uri: 'https://static.vecteezy.com/system/resources/previews/000/568/450/original/home-icon-vector.jpg',
            }}
            style={styles.imgstyle}
          />
          <Text style={styles.textstyle}>clients</Text>
        </View>
        <ButtonComp
        btnText={'Continue'}
        btnStyle={{
          width: '100'
        }}
        onPress={()=>{
          console.log('Navigating to Register...');
          navigation.navigate(navigationstrings.REGISTER);
        }}
        /> 


      </View>
    </SafeAreaView>
  );
};

export default ChooseAccount;
