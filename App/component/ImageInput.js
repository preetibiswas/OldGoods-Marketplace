/* eslint-disable prettier/prettier */
import {
  Alert,
  Image,
  StyleSheet,
  Text,
  View,
  TouchableWithoutFeedback,
} from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import colors from '../Config/colors';

import {launchCamera, launchImageLibrary} from 'react-native-image-picker';

export default function ImageInput({imguri, onChangeImage}) {
  // image picking
  const openImagePicker = () => {
    const options = {
      mediaType: 'photo',
      includeBase64: false,
    };

    launchImageLibrary(options, response => {
      if (response.didCancel) {
        console.log('User cancled image ');
      } else if (response.errorCode) {
        console.log('image picker error', response.errorMessage);
      } else {
        const imgUri = response.assets?.[0]?.uri;
        console.log(imgUri);
        onChangeImage(imgUri);
      }
    });
  };
  const handleResponse = response => {
    if (response.didCancel) {
      console.log('User cancelled image picker');
    } else if (response.error) {
      console.log('Image picker error: ', response.error);
    } else {
      let imageUri = response.uri || response.assets?.[0]?.uri;
      console.log(imageUri);
      onChangeImage(imageUri);
      // setSelectedImage(imageUri);
    }
  };
  const handlePress = () => {
    console.log('click');
    if (!imguri) {
      openImagePicker();
    } else {
      Alert.alert('DElete', 'Are you sure you want to delete', [
        {text: 'Yes', onPress: () => onChangeImage(null)},
        {text: 'no'},
      ]);
    }
  };
  return (
    <TouchableWithoutFeedback onPress={handlePress}>
      <View style={styles.container}>
        {!imguri && <Icon name="camera" size={40} color={colors.medium} />}
        {imguri && <Image source={{uri: imguri}} style={styles.image} />}
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  image: {width: '100%', height: '100%'},
  container: {
    height: 100,
    width: 100,
    backgroundColor: colors.light,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 15,
    overflow: 'hidden',
  },
});
