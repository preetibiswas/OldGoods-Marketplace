/* eslint-disable prettier/prettier */
import {StyleSheet, View} from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

export default function AppIcon({
  name,
  iconcolor = 'white',
  size = 40,
  backgroundcolor = 'black',
}) {
  return (
    <View
      style={[
        styles.container,
        {
          width: size,
          height: size,
          backgroundColor: backgroundcolor,
          borderRadius: 20,
        },
      ]}
    >
      <Icon name={name} color={iconcolor} size={size * 0.5} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
  },
});
