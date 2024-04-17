import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';

import {useSelector, useDispatch} from 'react-redux';
import HeaderLayout from '../Components/HeaderLayout';
import TextElement from '../Components/TextElement';
import {WINDOW_HEIGHT, WINDOW_WIDTH} from '../Components/Mixuns';
import {PRIMARY_COLOR, WHITE} from '../assets/Colors';
import {Calendar} from '../Components/Calendar';
function Welcome({navigation}) {
  return (
    <HeaderLayout>
      <View style={{alignItems: 'center', paddingTop: WINDOW_HEIGHT * 0.1}}>
        <TextElement textStyle={{fontSize: 28}}>Who are you?</TextElement>
        <TouchableOpacity
          onPress={() => navigation.navigate('Login', {role: 'student'})}
          style={{
            backgroundColor: PRIMARY_COLOR,
            width: WINDOW_WIDTH * 0.8,
            padding: 20,
            borderRadius: 20,
            shadowColor: '#000',
            shadowOffset: {width: 0, height: 1},
            shadowOpacity: 0.8,
            shadowRadius: 2,
            elevation: 5,
            marginTop: WINDOW_HEIGHT * 0.05,
          }}>
          <TextElement textStyle={{color: WHITE, fontSize: 20}}>
            Student
          </TextElement>
          <TextElement
            textStyle={{
              color: WHITE,
              fontSize: 14,
              marginTop: WINDOW_HEIGHT * 0.008,
            }}>
            {`I am a student oking for a\ntutor  tutor school subject.`}
          </TextElement>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => navigation.navigate('Login', {role: 'tutor'})}
          style={{
            width: WINDOW_WIDTH * 0.8,
            padding: 20,
            borderRadius: 20,
            borderWidth: 1,
            marginTop: WINDOW_HEIGHT * 0.03,
          }}>
          <TextElement textStyle={{fontSize: 20}}>Tutor</TextElement>
          <TextElement
            textStyle={{
              fontSize: 14,
              marginTop: WINDOW_HEIGHT * 0.008,
            }}>
            {`I am a tutor who wants to offer\nservices a tutor new students.`}
          </TextElement>
        </TouchableOpacity>
      </View>
    </HeaderLayout>
  );
}

const styles = StyleSheet.create({});

export default Welcome;
