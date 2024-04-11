/* eslint-disable prettier/prettier */
import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  SafeAreaView,
  TouchableOpacity,
  Alert,
} from 'react-native';
import auth from '@react-native-firebase/auth';
import Login from './Login';

export const Registration = props => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const createUser = () => {
    auth()
      .createUserWithEmailAndPassword(email, password)
      .then(() => {
        console.log('User account created & signed in!');
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
  const LoginUser = () => {
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
    <View style={styles.container}>
      <TextInput
        placeholder="Enter Email"
        style={styles.inputtxt}
        value={email}
        onChangeText={txt => setEmail(txt)}
      />
      <TextInput
        placeholder="Enter Password"
        style={styles.pass}
        value={password}
        onChangeText={txt => setPassword(txt)}
      />
      <TouchableOpacity style={styles.btn} onPress={() => LoginUser()}>
        <Text>login Account</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
  },
  inputtxt: {
    width: '90%',
    height: 50,
    borderColor: 'white',
    borderRadius: 20,
    borderWidth: 0.5,
    paddingHorizontal: 15, // Added horizontal padding
    marginBottom: 10, // Added bottom margin for spacing
  },
  pass: {
    width: '90%',
    height: 50,
    borderColor: 'white',
    borderRadius: 20,
    borderWidth: 0.5,
    marginTop: 30,
    paddingHorizontal: 15, // Added horizontal padding
  },
  btn: {
    marginTop: 30,
    width: '90%',
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'green',
    borderRadius: 20,
    borderWidth: 0.5,
  },
});
