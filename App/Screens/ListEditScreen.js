/* eslint-disable prettier/prettier */
import {StyleSheet, Text, View, StatusBar} from 'react-native';
import React from 'react';
import colors from '../Config/colors';
import Screen from '../component/Screen';
import {AppForm, AppFormField, SubmitButton} from '../component/Forms';
import * as yup from 'yup';
import AppFormPicker from '../component/AppFormPicker';

export default function ListEditScreen() {
  const categories = [
    {label: 'Furniture', value: 1},
    {label: 'Clothing', value: 2},
    {label: 'Camera', value: 3},
  ];

  const validationSchema = yup.object().shape({
    title: yup.string().required('Title is required'),
    price: yup.number().required().min(1).max(10000).label('Price'),
    description: yup.string().label('Description').required(),
    category: yup.object().required().nullable().label('category'),
  });
  return (
    <Screen style={styles.scrn}>
      <StatusBar backgroundColor={colors.primary} />
      <AppForm
        validationSchema={validationSchema}
        initialValues={{title: '', price: '', category: '', description: ''}}
        onSubmit={values => console.log(values)}
      >
        <>
          <AppFormField
            placeholder={'Title'}
            name="title"
            autoCapitalize="none"
          />
          <AppFormField
            placeholder={'Price'}
            name="price"
            autoCapitalize="none"
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
