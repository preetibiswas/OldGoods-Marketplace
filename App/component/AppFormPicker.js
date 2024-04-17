/* eslint-disable prettier/prettier */
import {View, Text} from 'react-native';
import React from 'react';
import AppPicker from './AppPicker';
import {ErrorComponent} from './Forms';
import {useFormikContext} from 'formik';

export default function AppFormPicker({items, name, placeholder}) {
  const {errors, setFieldValue, touched, values} = useFormikContext();
  return (
    <>
      <AppPicker
        items={items}
        onSelectItem={item => setFieldValue(name, item)}
        selectedItem={values[name]}
        placeholder={placeholder}
      />
      <ErrorComponent error={errors[name]} visible={touched[name]} />
    </>
  );
}
