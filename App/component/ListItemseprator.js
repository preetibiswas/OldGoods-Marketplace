/* eslint-disable prettier/prettier */
import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import colors from '../Config/colors';

export default function ListItemseprator() {
  return <View style={styles.seprator} />;
}

const styles = StyleSheet.create({
  seprator: {
    width: '100%',
    height: 1,
    backgroundColor: colors.light,
  },
});
