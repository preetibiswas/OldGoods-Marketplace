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

export default function App() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  const [isEnabled, setIsEnabled] = useState(false);
  const [selectedLanguage, setSelectedLanguage] = useState();
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
      <ListEditScreen />
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
