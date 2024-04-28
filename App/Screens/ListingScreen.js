/* eslint-disable prettier/prettier */
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  ScrollView,
  StatusBar,
  ActivityIndicator,
  Button,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import Screen from '../component/Screen';
import ListItem from '../component/ListItem';
import AppCard from '../component/AppCard';
import colors from '../Config/colors';
import firestore from '@react-native-firebase/firestore';
import listingApi from '../api/listings';
import ActiveIndicator from '../component/ActiveIndicator';

// const listings = [
//   {
//     id: 1,
//     title: 'Red jacket for sale',
//     price: '$100',
//     image: require('../assets/jacket.jpg'),
//   },
//   {
//     id: 2,
//     title: 'Couch in great condition',
//     price: '$200',
//     image: require('../assets/couch.jpg'),
//   },
//   {
//     id: 3,
//     title: 'chair with nice color',
//     price: '$230',
//     image: require('../assets/chair.jpg'),
//   },
// ];

export default function ListingScreen({navigation}) {
  const [listings, setListings] = useState([]);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(true);
  const [forceUpdate, setForceUpdate] = useState(0);

  // const fetchUserDetails = async () => {
  //   try {
  //     const querySnapshot = await firestore().collection('ListingDetail').get();
  //     const data = querySnapshot.docs.map(doc => doc.data());
  //     console.log('data', data);
  //     setListings(data);
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };

  // useEffect(() => {
  //   fetchUserDetails();
  // }, []);
  useEffect(() => {
    loadListing();
  }, []);
  const loadListing = async () => {
    setLoading(true);

    try {
      setLoading(true);
      const response = await listingApi.fetchListings();
      setListings(response);
      console.log(response);
      setLoading(false);
    } catch (err) {
      setError(true);
      setLoading(false);
      console.log(err);
    }
  };

  return (
    <Screen>
      <StatusBar backgroundColor={colors.secondary} />

      <ActiveIndicator visible={loading} />

      <View>
        {error && <Text>Got error</Text>}

        <FlatList
          data={listings}
          keyExtractor={item => item.title}
          renderItem={({item}) => (
            <AppCard
              description={item.description}
              title={item.title}
              subtitle={item.price}
              image={item.images ? item.images[0] : null}
              onPress={() => navigation.navigate('ListingDetail', item)}
            />
          )}
        />
      </View>
    </Screen>
  );
}

const styles = StyleSheet.create({});
