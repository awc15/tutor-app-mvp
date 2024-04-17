import React from 'react';
import {SafeAreaView, StyleSheet, Text, View} from 'react-native';
import {WINDOW_HEIGHT} from './Mixuns';
import {BLACK, WHITE} from '../assets/Colors';

function TextElement(props) {
  const {children, textStyle} = props;
  return (
    <Text
      style={[
        {color: BLACK, fontFamily: 'Poppins-Medium', fontSize: 12},
        textStyle,
      ]}>
      {children}
    </Text>
  );
}

const styles = StyleSheet.create({});

export default TextElement;
