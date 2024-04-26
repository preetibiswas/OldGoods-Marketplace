/* eslint-disable react/no-unstable-nested-components */
// /* eslint-disable prettier/prettier */
// import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
// import ListingScreen from '../Screens/ListingScreen';
// import ListDetailScreen from '../Screens/ListDetailScreen';
// import AccountScreen from '../Screens/AccountScreen';
// import React from 'react';

// const AppNavigator = () => {
//   const Tab = createBottomTabNavigator();
//   return (
//     <Tab.Navigator>
//       <Tab.Screen name="Listings" component={ListingScreen} />
//       <Tab.Screen name="ListingEdit" component={ListDetailScreen} />
//       <Tab.Screen name="Account" component={AccountScreen} />
//     </Tab.Navigator>
//   );
// };

// export default AppNavigator;
/* eslint-disable prettier/prettier */
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import ListingScreen from '../Screens/ListingScreen';
import ListDetailScreen from '../Screens/ListDetailScreen';
import AccountScreen from '../Screens/AccountScreen';
import React from 'react';
import FeedNavigation from './FeedNavigator';
import ListEditScreen from '../Screens/ListEditScreen';
import AccountNavigator from './AccountNavigation';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import NewListButton from './NewListButton';

const Tab = createBottomTabNavigator();

const AppNavigator = () => {
  return (
    <Tab.Navigator screenOptions={{headerShown: false}}>
      <Tab.Screen
        name="Feed"
        component={FeedNavigation}
        options={{
          tabBarIcon: ({color, size}) => (
            <Icon name="home" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="ListingEdit"
        component={ListEditScreen}
        options={({navigation}) => ({
          tabBarIcon: ({color, size}) => (
            <Icon name="plus-circle" color={color} size={size} />
          ),
          tabBarButton: () => (
            <NewListButton onPress={() => navigation.navigate('ListingEdit')} />
          ),
        })}
      />
      <Tab.Screen
        name="Account"
        component={AccountNavigator}
        options={{
          tabBarIcon: ({color, size}) => (
            <Icon name="account" color={color} size={size} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default AppNavigator;
