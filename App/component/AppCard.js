/* eslint-disable prettier/prettier */
import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import colors from '../Config/colors';
import AppText from './AppText';

export default function AppCard({title, subtitle, image}) {
  return (
    <View style={styles.card}>
      <Image source={image} style={styles.img} />
      <View style={styles.detailContainer}>
        <AppText style={styles.title}>{title}</AppText>
        <AppText style={styles.subtitle}>{subtitle}</AppText>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    borderRadius: 15,
    overflow: 'hidden',
    backgroundColor: colors.white,
    marginBottom: 10,
    marginHorizontal: 10,
    marginTop: 10,
  },
  img: {
    width: '100%',
    height: 200,
  },
  title: {
    marginBottom: 6,
  },
  subtitle: {
    color: colors.secondary,
    fontWeight: 'bold',
  },
  detailContainer: {
    padding: 20,
  },
});
