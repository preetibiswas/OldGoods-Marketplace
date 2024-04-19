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

import ImageInput from './App/component/ImageInput';
import ImageInputList from './App/component/ImageInputList';

export default function App() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [imageuris, setImageuris] = useState([]);

  const [isEnabled, setIsEnabled] = useState(false);
  const [selectedLanguage, setSelectedLanguage] = useState(null);
  console.log(selectedLanguage);
  const toggleSwitch = () => setIsEnabled(prevstate => !prevstate);

  const handleAdd = uri => {
    setImageuris([...imageuris, uri]);
  };
  const handleRemove = uri => {
    setImageuris(imageuris.filter(img => img !== uri));
  };
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
      <View style={{marginTop: 20}}>
        {/* {selectedImage && (
          <Image
            source={{uri: selectedImage}}
            resizeMode="contain"
            style={{width: 100, height: 100}}
          />
        )} */}
        {/* <Button title="Choose from Device" onPress={openImagePicker} /> */}
        <ImageInput
          imguri={selectedImage}
          onChangeImage={imageUri => setSelectedImage(imageUri)}
        />
        <ImageInputList
          imageUris={imageuris}
          onAddImage={handleAdd}
          onRemoveImage={handleRemove}
        />
      </View>
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
