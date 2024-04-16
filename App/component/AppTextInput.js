/* eslint-disable prettier/prettier */
import {StyleSheet, Text, View, TextInput} from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import colors from '../Config/colors';

export default function AppTextInput({icon, ...otherProps}) {
  return (
    <View style={styles.container}>
      {icon && (
        <Icon name={icon} style={styles.icon} size={20} color={colors.medium} />
      )}
      <TextInput style={styles.txtinput} {...otherProps} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    width: '100%',
    backgroundColor: colors.light,
    marginVertical: 10,
    padding: 10,
    borderRadius: 20,
    alignItems: 'center',
  },
  txtinput: {
    fontSize: 18,
    color: colors.dark,
  },
  icon: {
    marginRight: 10,
  },
});
