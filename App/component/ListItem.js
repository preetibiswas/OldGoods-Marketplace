/* eslint-disable prettier/prettier */
import {
  Image,
  StyleSheet,
  Text,
  TouchableHighlight,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import AppText from './AppText';
import colors from '../Config/colors';
import Swipeable from 'react-native-gesture-handler/Swipeable';

export default function ListItem({
  image,
  title,
  subtitle,
  onpress,
  renderRightActions,
  ImageComponent,
  onPress,
}) {
  return (
    <Swipeable renderRightActions={renderRightActions}>
      <TouchableHighlight underlayColor={colors.light} onPress={onpress}>
        <View style={styles.cont}>
          {ImageComponent}
          {image && <Image source={image} style={styles.img} />}

          <View style={styles.detailcont}>
            <AppText style={styles.title}>{title}</AppText>
            {subtitle && <AppText style={styles.subtitle}>{subtitle}</AppText>}
          </View>
        </View>
      </TouchableHighlight>
    </Swipeable>
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
    padding: 15,
    backgroundColor: colors.white,
  },
  title: {
    fontWeight: '500',
    color: colors.black,
  },
  subtitle: {
    color: colors.medium,
    fontSize: 15,
  },
  detailcont: {
    marginLeft: 10,
  },
});
