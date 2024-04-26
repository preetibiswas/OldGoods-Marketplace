/* eslint-disable prettier/prettier */
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import ListingScreen from '../Screens/ListingScreen';
import ListDetailScreen from '../Screens/ListDetailScreen';
import React from 'react';

const Stack = createNativeStackNavigator();
const FeedNavigation = () => {
  return (
    <Stack.Navigator
      screenOptions={{headerShown: false}}
      initialRouteName="Listings"
    >
      <Stack.Screen name="Listings" component={ListingScreen} />
      <Stack.Screen name="ListingDetail" component={ListDetailScreen} />
    </Stack.Navigator>
  );
};

export default FeedNavigation;
