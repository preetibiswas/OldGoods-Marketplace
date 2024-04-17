/* eslint-disable prettier/prettier */
import {StyleSheet, Text, View} from 'react-native';
import React, {useState} from 'react';
import {useFormikContext} from 'formik';
import AppButton from './AppButton';

export default function SubmitButton({title}) {
  const {handleSubmit} = useFormikContext();
  return <AppButton title={title} onPress={handleSubmit} />;
}

const styles = StyleSheet.create({});
