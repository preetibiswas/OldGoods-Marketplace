/* eslint-disable prettier/prettier */
import {StyleSheet, Text, View, StatusBar, Image} from 'react-native';
import React, {useState} from 'react';
import Screen from '../component/Screen';

import colors from '../Config/colors';
import * as yup from 'yup';
import AppFormField from '../component/Forms/AppFormField';
import SubmitButton from '../component/Forms/SubmitButton';
import AppForm from '../component/Forms/AppForm';

export default function Login() {
  const validationSchema = yup.object().shape({
    email: yup
      .string()
      .email('Please enter valid Email')
      .required('Email Address is Required'),
    password: yup
      .string()
      .min(4, ({min}) => `Password must be atleast ${min} characters`)
      .label('Password')
      .required(),
  });
  return (
    <Screen style={styles.container}>
      <StatusBar backgroundColor={colors.primary} />
      <Image source={require('../assets/logo-red.png')} style={styles.img} />
      <AppForm
        validationSchema={validationSchema}
        initialValues={{email: '', password: ''}}
        onSubmit={values => console.log(values)}
      >
        <>
          <AppFormField
            placeholder={'Email'}
            icon="email"
            name="email"
            autoCapitalize="none"
          />

          <AppFormField
            name="password"
            placeholder={'Password'}
            icon="lock"
            textContentType="password"
            keyboardType="numeric"
          />

          <SubmitButton title={'Login'} />
        </>
      </AppForm>
    </Screen>
  );
}

const styles = StyleSheet.create({
  img: {
    width: 80,
    height: 80,
    alignSelf: 'center',
    marginTop: 50,
    marginBottom: 20,
  },
  container: {
    padding: 10,
  },
});
