/* eslint-disable prettier/prettier */
import {StyleSheet, Text, View, ImageBackground, Image} from 'react-native';
import React from 'react';

export default function WelcomeScreen() {
  return (
    <ImageBackground
      source={require('../assets/background.jpg')}
      style={styles.img}
    >
      <View style={styles.logocontainer}>
        <Image style={styles.logo} source={require('../assets/logo-red.png')} />
        <Text>Sell what you Dont Need</Text>
      </View>
      <View style={styles.login}></View>
      <View style={styles.registration}></View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  img: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  login: {
    width: '100%',
    height: 70,
    backgroundColor: '#fc5c65',
  },
  registration: {
    width: '100%',
    height: 70,
    backgroundColor: '#4e6dc4',
  },
  logocontainer: {
    position: 'absolute',
    top: 70,
    alignItems: 'center',
  },
  logo: {
    width: 100,
    height: 100,
  },
});
