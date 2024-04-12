/* eslint-disable prettier/prettier */
/* eslint-disable prettier/prettier */
import {StyleSheet, Text, TouchableWithoutFeedback, View} from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import colors from '../Config/colors';

export default function ListItemDeleteaction({onPress}) {
  return (
    <TouchableWithoutFeedback onPress={onPress}>
      <View style={styles.cont}>
        <Icon name="trash-can" size={35} color={colors.white} />
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  cont: {
    width: 70,
    justifyContent: 'center', // Center content horizontally
    alignItems: 'center',
    backgroundColor: 'red',
  },
});
