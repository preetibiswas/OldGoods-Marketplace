/* eslint-disable prettier/prettier */
import {StyleSheet, Text, View, Platform} from 'react-native';
import React from 'react';

export default function AppText({children, style}) {
  return (
    <View style={style}>
      <Text style={[styles.txt, style]}>{children}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  txt: {
    fontSize: 20,
    fontFamily: Platform.OS === 'android' ? 'Roboto' : 'Avenir',
  },
});
