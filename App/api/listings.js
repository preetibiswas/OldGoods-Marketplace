/* eslint-disable prettier/prettier */
/* eslint-disable no-unused-vars */
import firestore from '@react-native-firebase/firestore';
import {useState} from 'react';

const fetchListings = async () => {
  try {
    const querySnapshot = await firestore().collection('ListingDetail').get();
    return querySnapshot.docs.map(doc => doc.data());
  } catch (error) {
    console.log(error);
  }
};

export default {
  fetchListings,
};
