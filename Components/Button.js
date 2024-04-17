import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {WINDOW_HEIGHT, WINDOW_WIDTH} from './Mixuns';
import {
  BLACK,
  DISABLED,
  DISABLED_TEXT,
  PRIMARY_COLOR,
  WHITE,
} from '../assets/Colors';
import TextElement from './TextElement';

function Button(props) {
  const {
    children,
    textStyle,
    value = '',
    style = {},
    disabled = false,
    onPress = () => {},
  } = props;
  return (
    <TouchableOpacity
      disabled={disabled}
      style={[
        {
          backgroundColor: PRIMARY_COLOR,
          width: WINDOW_WIDTH * 0.8,
          paddingVertical: 15,
          borderRadius: 30,
        },

        style,
        disabled && {
          backgroundColor: DISABLED,
        },
      ]}
      onPress={onPress}>
      <TextElement
        textStyle={[
          {fontSize: 18, alignSelf: 'center', color: DISABLED},
          disabled && {color: DISABLED_TEXT},
        ]}>
        {value}
      </TextElement>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({});

export default Button;
