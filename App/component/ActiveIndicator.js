/* eslint-disable prettier/prettier */
import LottieView from 'lottie-react-native';
import React from 'react';
function ActiveIndicator({visible}) {
  if (!visible) return null;
  else {
    return (
      <LottieView
        autoPlay
        loop
        source={require('../assets/aniki.json')}
        style={{
          width: '100%',
          height: '80%',
          justifyContent: 'center',
          alignItems: 'center',
          alignSelf: 'center',
          alignContent: 'center',
          bottom: 50,
        }}
      />
    );
  }
}

export default ActiveIndicator;
