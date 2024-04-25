/* eslint-disable prettier/prettier */
/* eslint-disable prettier/prettier */
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  Dimensions,
  ScrollView,
  TextInput,
  Switch,
  Button,
  Image,
} from 'react-native';
import React, {useState} from 'react';
import {Registration} from './App/Screens/Registration';
import WelcomeScreen from './App/Screens/WelcomeScreen';
import ViewImage from './App/Screens/ViewImage';
import colors from './App/Config/colors';
import AppText from './App/component/AppText';
import AppButton from './App/component/AppButton';
import AppCard from './App/component/AppCard';
import ListDetailScreen from './App/Screens/ListDetailScreen';
import MessageScreen from './App/Screens/MessageScreen';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import AppIcon from './App/component/AppIcon';
import ListItem from './App/component/ListItem';
import AccountScreen from './App/Screens/AccountScreen';
import ListingScreen from './App/Screens/ListingScreen';
import AppTextInput from './App/component/AppTextInput';
import {Picker} from '@react-native-picker/picker';
import AppPicker from './App/component/AppPicker';
import Login from './App/Screens/Login';
import ListEditScreen from './App/Screens/ListEditScreen';
import RegistrationScreen from './App/Screens/RegistrationScreen';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import AuthNavigator from './App/navigator/AuthNavigator';

export default function App() {
  const [imageuris, setImageuris] = useState([]);

  const [isEnabled, setIsEnabled] = useState(false);
  const [selectedLanguage, setSelectedLanguage] = useState(null);
  console.log(selectedLanguage);
  const toggleSwitch = () => setIsEnabled(prevstate => !prevstate);

  const categories = [
    {
      label: 'Furniture',
      value: 1,
    },
    {
      label: 'Clothing',
      value: 2,
    },
    {
      label: 'Camera',
      value: 3,
    },
  ];

  const [catList, setCatList] = useState(categories[0]);
  return (
    <GestureHandlerRootView style={{flex: 1}}>
      <NavigationContainer>
        <AuthNavigator />
      </NavigationContainer>
    </GestureHandlerRootView>
  );
}

const styles = StyleSheet.create({
  con: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
