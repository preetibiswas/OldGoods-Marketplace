/* eslint-disable prettier/prettier */
import {StyleSheet, Text, View, StatusBar, Image, Alert} from 'react-native';
import React, {useState} from 'react';
import Screen from '../component/Screen';
import auth from '@react-native-firebase/auth';

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
  const handleLogin = values => {
    const {email, password} = values;
    auth()
      .signInWithEmailAndPassword(email, password)
      .then(res => {
        const uid = res.user.uid;
        Alert.alert(uid);
        console.log('signed in');
      })
      .catch(error => {
        if (error.code === 'auth/email-already-in-use') {
          console.log('That email address is already in use!');
        }

        if (error.code === 'auth/invalid-email') {
          console.log('That email address is invalid!');
        }

        console.error(error);
      });
  };
  return (
    <Screen style={styles.container}>
      <StatusBar backgroundColor={colors.primary} />
      <Image source={require('../assets/logo-red.png')} style={styles.img} />
      <AppForm
        validationSchema={validationSchema}
        initialValues={{email: '', password: ''}}
        onSubmit={values => handleLogin(values)}
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
