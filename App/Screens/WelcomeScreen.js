/* eslint-disable prettier/prettier */
import {StyleSheet, Text, View, ImageBackground, Image} from 'react-native';
import React from 'react';
import AppButton from '../component/AppButton';

export default function WelcomeScreen({navigation}) {
  return (
    <ImageBackground
      blurRadius={10}
      source={require('../assets/background.jpg')}
      style={styles.img}
    >
      <View style={styles.logocontainer}>
        <Image style={styles.logo} source={require('../assets/logo-red.png')} />
        <Text style={styles.tagline}>Sell what you Dont Need</Text>
      </View>
      <View style={styles.btnContainer}>
        <AppButton title="login" onPress={() => navigation.navigate('Login')} />
        <AppButton
          title="Registration"
          onPress={() => navigation.navigate('Registration')}
          color="secondary"
        />
      </View>
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
  btnContainer: {
    padding: 20,
    width: '100%',
  },
  tagline: {
    fontSize: 25,
    fontWeight: '600',
    paddingVertical: 20,
  },
});
