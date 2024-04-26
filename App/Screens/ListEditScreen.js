/* eslint-disable semi */
/* eslint-disable prettier/prettier */
import {StyleSheet, Text, View, StatusBar} from 'react-native';
import React, {useState} from 'react';
import colors from '../Config/colors';
import Screen from '../component/Screen';
import {AppForm, AppFormField, SubmitButton} from '../component/Forms';
import * as yup from 'yup';
import AppFormPicker from '../component/AppFormPicker';
import ImageInputList from '../component/ImageInputList';
import FormImagePicker from '../component/Forms/FormImagePicker';
import firestore from '@react-native-firebase/firestore';
import storage from '@react-native-firebase/storage';
export default function ListEditScreen() {
  const [imagUrl, setImagUrl] = useState('');
  const categories = [
    {label: 'Furniture', value: 1},
    {label: 'Clothing', value: 2},
    {label: 'Camera', value: 3},
  ];

  const validationSchema = yup.object().shape({
    title: yup.string().required('Title is required'),
    price: yup.number().required().min(1).max(10000).label('Price'),
    images: yup.array().min(1, 'please select atlest one Image'),
    description: yup.string().label('Description').required(),
    category: yup.object().required().nullable().label('category'),
  });
  // const submitValue = value => {
  //   console.log('submit form', value);
  //   return firestore()
  //     .collection('ListingDetail')
  //     .add(value)
  //     .then(async user => {
  //       console.log(user);
  //     });
  // };
  const submitValue = async value => {
    try {
      const filePath = value.images[0]; // Assuming you're uploading the first image in the array
      const reference = storage().ref(filePath);
      await reference.putFile(filePath);
      const downloadURL = await reference.getDownloadURL();
      console.log('Download URL:', downloadURL);
      setImagUrl(downloadURL);

      await firestore()
        .collection('ListingDetail')
        .add({
          title: value.title,
          price: value.price,
          description: value.description,
          images: value.images,
          category: value.category.label,
        })
        .then(() => {
          console.log('UserDtate');
        });
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <Screen style={styles.scrn}>
      <StatusBar backgroundColor={colors.primary} />
      <AppForm
        validationSchema={validationSchema}
        initialValues={{
          images: [],
          title: '',
          price: '',
          category: '',
          description: '',
        }}
        onSubmit={submitValue}
      >
        <>
          <FormImagePicker name="images" />

          <AppFormField
            placeholder={'Title'}
            name="title"
            autoCapitalize="none"
          />
          <AppFormField
            placeholder={'Price'}
            name="price"
            autoCapitalize="none"
            keyboardType="numeric"
          />
          <AppFormPicker
            items={categories}
            placeholder={'Category'}
            name="category"
            autoCapitalize="none"
          />

          <AppFormField
            placeholder={'Description'}
            name="description"
            autoCapitalize="none"
          />
          <SubmitButton title="Post" />
        </>
      </AppForm>
    </Screen>
  );
}

const styles = StyleSheet.create({
  scrn: {
    padding: 20,
  },
});
