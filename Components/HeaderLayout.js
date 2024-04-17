import React from 'react';
import {SafeAreaView, StyleSheet, Text, View} from 'react-native';
import {WINDOW_HEIGHT} from './Mixuns';
import {WHITE} from '../assets/Colors';

function HeaderLayout(props) {
  const {children} = props;
  return (
    <View style={{backgroundColor: WHITE, height: WINDOW_HEIGHT * 1}}>
      <SafeAreaView />
      {children}
    </View>
  );
}

const styles = StyleSheet.create({});

export default HeaderLayout;
