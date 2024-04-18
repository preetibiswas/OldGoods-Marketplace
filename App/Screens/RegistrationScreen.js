/* eslint-disable prettier/prettier */
import {StatusBar, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import * as yup from 'yup';
import Screen from '../component/Screen';
import colors from '../Config/colors';
import {AppForm, AppFormField, SubmitButton} from '../component/Forms';
import auth from '@react-native-firebase/auth';
import storage from '@react-native-firebase/storage';
import firestore from '@react-native-firebase/firestore';

export default function RegistrationScreen() {
  const handleRegistration = values => {
    auth()
      .createUserWithEmailAndPassword(values.email, values.password)
      .then(async () => {
        console.log('User account created & signed in!');
        // Save additional user data to Firebase Storage
        firestore()
          .collection('Userdata')
          .add(values)
          .then(async user => {
            console.log(user);
          });
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
  const validationSchema = yup.object().shape({
    Uname: yup.string().required('Name is required'),
    email: yup
      .string()
      .email('Please enter valid Email')
      .required('Email Address is required'),
    password: yup.string().min(4).label('Password').required(),
  });
  return (
    <Screen style={styles.screen}>
      <StatusBar backgroundColor={colors.primary} />
      <AppForm
        initialValues={{email: '', Uname: '', password: ''}}
        onSubmit={values => handleRegistration(values)}
        validationSchema={validationSchema}
      >
        <>
          <AppFormField
            placeholder={'Name'}
            icon="account"
            name="Uname"
            autoCapitalize="none"
          />
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

          <SubmitButton title={'Registration'} />
        </>
      </AppForm>
    </Screen>
  );
}

const styles = StyleSheet.create({
  screen: {
    padding: 10,
  },
});
