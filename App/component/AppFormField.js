/* eslint-disable prettier/prettier */
import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import AppTextInput from './AppTextInput';
import ErrorComponent from './ErrorComponent';
import {useFormikContext} from 'formik';

export default function AppFormField({name, ...otherProps}) {
  const {
    setFieldTouched,
    touched,
    handleChange,
    errors,
    values,
  } = useFormikContext();
  return (
    <>
      <AppTextInput
        onChangeText={handleChange(name)}
        value={values[name]}
        onBlur={() => setFieldTouched(name)}
        {...otherProps}
      />
      <ErrorComponent error={errors[name]} visible={touched[name]} />
    </>
  );
}

const styles = StyleSheet.create({});
