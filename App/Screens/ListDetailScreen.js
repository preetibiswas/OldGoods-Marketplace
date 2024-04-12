/* eslint-disable prettier/prettier */
import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import AppText from '../component/AppText';
import colors from '../Config/colors';
import ListItem from '../component/ListItem';

export default function ListDetailScreen({title, subtitle}) {
  return (
    <View>
      <Image source={require('../assets/jacket.jpg')} style={styles.img} />
      <View style={styles.detailCont}>
        <AppText style={styles.title}>{title}</AppText>
        <AppText style={styles.subtitle}>{subtitle}</AppText>
        <View style={styles.userCont}>
          <ListItem
            image={require('../assets/mosh.jpg')}
            title="Mosh hamadani"
            subtitle="5 Listing"
          />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  img: {
    width: '100%',
    height: 300,
  },
  detailCont: {
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: '500',
  },
  subtitle: {
    color: colors.secondary,
    fontWeight: 'bold',
    fontSize: 18,
    marginVertical: 10,
  },
  userCont: {
    marginVertical: 40,
  },
});
