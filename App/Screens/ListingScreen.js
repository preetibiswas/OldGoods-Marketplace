/* eslint-disable prettier/prettier */
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  ScrollView,
  StatusBar,
} from 'react-native';
import React from 'react';
import Screen from '../component/Screen';
import ListItem from '../component/ListItem';
import AppCard from '../component/AppCard';
import colors from '../Config/colors';

const listings = [
  {
    id: 1,
    title: 'Red jacket for sale',
    price: '$100',
    image: require('../assets/jacket.jpg'),
  },
  {
    id: 2,
    title: 'Couch in great condition',
    price: '$200',
    image: require('../assets/couch.jpg'),
  },
  {
    id: 3,
    title: 'chair with nice color',
    price: '$230',
    image: require('../assets/chair.jpg'),
  },
];

export default function ListingScreen({navigation}) {
  return (
    <Screen>
      <StatusBar backgroundColor={colors.secondary} />

      <View>
        <FlatList
          data={listings}
          keyExtractor={item => item.id.toString()}
          renderItem={({item}) => (
            <AppCard
              title={item.title}
              subtitle={item.price}
              image={item.image}
              onPress={() => navigation.navigate('ListingDetail', item)}
            />
          )}
        />
      </View>
    </Screen>
  );
}

const styles = StyleSheet.create({});
