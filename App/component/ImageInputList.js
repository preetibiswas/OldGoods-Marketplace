/* eslint-disable prettier/prettier */
import {ScrollView, StyleSheet, Text, View} from 'react-native';
import React, {useRef} from 'react';
import ImageInput from './ImageInput';

export default function ImageInputList({
  imageUris = [],
  onRemoveImage,
  onAddImage,
}) {
  const scrollView = useRef();
  return (
    <View>
      <ScrollView
        ref={scrollView}
        style={styles.conatiner}
        horizontal
        onContentSizeChange={() => scrollView.current.scrollToEnd()}
      >
        {imageUris.map(uri => (
          <ImageInput imguri={uri} onChangeImage={() => onRemoveImage(uri)} />
        ))}
        <ImageInput onChangeImage={uri => onAddImage(uri)} />
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  conatiner: {
    flexDirection: 'row',
  },
});
