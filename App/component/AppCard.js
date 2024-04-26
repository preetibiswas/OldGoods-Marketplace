/* eslint-disable prettier/prettier */
import {
  Image,
  StyleSheet,
  Text,
  TouchableWithoutFeedback,
  View,
} from 'react-native';
import React from 'react';
import colors from '../Config/colors';
import AppText from './AppText';

export default function AppCard({
  title,
  subtitle,
  image,
  onPress,
  description,
}) {
  return (
    <TouchableWithoutFeedback onPress={onPress}>
      <View style={styles.card}>
        <Image source={{uri: image}} style={styles.img} />
        <View style={styles.detailContainer}>
          <AppText style={styles.title}>{title}</AppText>
          <AppText style={styles.subtitle}>${subtitle}</AppText>
        </View>
        <AppText style={styles.des}>
          {description.charAt(0).toUpperCase() + description.slice(1)}
        </AppText>
      </View>
    </TouchableWithoutFeedback>
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
    height: 250,
    objectFit: 'fill',
  },
  title: {
    marginBottom: 6,
  },
  subtitle: {
    color: colors.secondary,
    fontWeight: 'bold',
  },
  detailContainer: {
    padding: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 10,
  },
  des: {
    margin: 8,
    color: colors.medium,
  },
});
