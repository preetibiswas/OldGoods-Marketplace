/* eslint-disable prettier/prettier */
import {StyleSheet, Text, View, Platform} from 'react-native';
import React from 'react';

export default function AppText({children}) {
  return (
    <View>
      <Text style={styles.txt}>{children}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  txt: {
    fontSize: 20,
    fontFamily: Platform.OS === 'android' ? 'Roboto' : 'Avenir',
  },
});
