/* eslint-disable prettier/prettier */
import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import AppText from '../AppText';

export default function ErrorComponent({error, visible}) {
  if (!error || !visible) {
    return null;
  }
  return <AppText style={styles.txt}>{`* ${error}`}</AppText>;
}

const styles = StyleSheet.create({
  txt: {
    color: 'red',
    fontSize: 10,
  },
});
