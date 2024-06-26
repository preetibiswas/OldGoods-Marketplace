/* eslint-disable prettier/prettier */
import {StyleSheet, Text, View, Image} from 'react-native';
import React from 'react';
import colors from '../Config/colors';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

export default function ViewImage() {
  return (
    <View style={styles.container}>
      <View style={styles.closeIcon}>
        <Icon name="close" color="white" size={35} />
      </View>
      <View style={styles.deleteIcon}>
        <Icon name="trash-can-outline" color="white" size={35} />
      </View>
      <Image
        source={require('../assets/chair.jpg')}
        resizeMode="contain"
        style={styles.img}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#000',
    flex: 1,
  },
  closeIcon: {
    width: 50,
    height: 50,
    position: 'absolute',
    top: 40,
    left: 30,
    elevation: 20,
  },
  deleteIcon: {
    width: 50,
    height: 50,
    position: 'absolute',
    top: 40,
    right: 30,
  },
  img: {
    width: '100%',
    height: '100%',
  },
});
