/* eslint-disable prettier/prettier */
import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {useFormikContext} from 'formik';
import ImageInputList from '../ImageInputList';
import ErrorComponent from './ErrorComponent';

export default function FormImagePicker({name}) {
  const {errors, setFieldValue, touched, values} = useFormikContext();
  const handleAdd = uri => {
    console.log('added', uri);
    setFieldValue(name, [...values[name], uri]);
  };
  const handleRemove = uri => [
    setFieldValue(
      name,
      values[name].filter(imageuri => imageuri !== uri),
    ),
  ];

  return (
    <>
      <ImageInputList
        imageUris={values[name]}
        onAddImage={handleAdd}
        onRemoveImage={handleRemove}
      />
      <ErrorComponent error={errors[name]} visible={touched[name]} />
    </>
  );
}

const styles = StyleSheet.create({});
