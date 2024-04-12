/* eslint-disable prettier/prettier */
import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import AppText from './AppText';
import colors from '../Config/colors';

export default function ListItem({image, title, subtitle}) {
  return (
    <View style={styles.cont}>
      <Image source={image} style={styles.img} />
      <View>
        <AppText style={styles.title}>{title}</AppText>
        <AppText style={styles.subtitle}>{subtitle}</AppText>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  img: {
    width: 70,
    height: 70,
    borderRadius: 35,
    marginRight: 10,
  },
  cont: {
    flexDirection: 'row',
  },
  title: {
    fontWeight: '500',
    color: colors.black,
  },
  subtitle: {
    color: colors.medium,
    fontSize: 15,
  },
});
