import React from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';

import {useSelector, useDispatch} from 'react-redux';
import HeaderLayout from '../Components/HeaderLayout';
import TextElement from '../Components/TextElement';
import {WINDOW_HEIGHT, WINDOW_WIDTH} from '../Components/Mixuns';
import {BLACK, GRAY, PRIMARY_COLOR, WHITE} from '../assets/Colors';
import {Calendar} from '../Components/Calendar';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Button from '../Components/Button';

function TutorHome({navigation, route}) {
  console.log('route', route.params.from);

  return (
    <HeaderLayout>
      <View style={{flexDirection: 'row', marginTop: 20}}>
        {route.params.from !== 'Login' && (
          <TouchableOpacity
            style={{paddingLeft: WINDOW_WIDTH * 0.05}}
            onPress={() => navigation.goBack()}>
            <AntDesign name="arrowleft" color={BLACK} size={30} />
          </TouchableOpacity>
        )}
      </View>
      <View
        style={{
          justifyContent: 'center',
          alignItems: 'center',
          paddingTop: WINDOW_WIDTH * 0.1,
        }}>
        <Image
          source={route.params.data?.Picture}
          style={{height: 200, width: 200, borderRadius: 100}}
        />
        <TextElement textStyle={{fontSize: 30, marginTop: 10}}>
          {`${route.params.data?.Name} ${route.params.data?.lastName}`}
        </TextElement>
        <View
          style={{
            width: WINDOW_WIDTH * 0.8,
            flexDirection: 'row',
            flexWrap: 'wrap',
          }}>
          {route.params.data?.Subject.map(item => (
            <View
              style={{
                borderWidth: 1,
                borderTopWidth: 0,
                justifyContent: 'center',
                height: WINDOW_HEIGHT * 0.08,
                width: WINDOW_WIDTH * 0.2,
                borderBottomEndRadius: 20,
                borderBottomStartRadius: 20,
                marginLeft: 10,
                marginTop: 10,
              }}>
              <TextElement textStyle={{textAlign: 'center'}}>
                {item}
              </TextElement>
            </View>
          ))}
        </View>
        <View
          style={{width: WINDOW_WIDTH * 0.8, marginLeft: 10, marginTop: 20}}>
          <TextElement textStyle={{fontSize: 24, color: GRAY}}>
            About me:
          </TextElement>
          <TextElement
            textStyle={{
              fontSize: 16,
              color: BLACK,
            }}>
            {route.params.data?.aboutMe}
          </TextElement>
          <View
            style={[
              {
                flexDirection: 'row',

                marginTop: 20,
              },
              route.params.data?.Availability
                ? {justifyContent: 'space-between'}
                : {justifyContent: 'center'},
            ]}>
            {route.params.data?.Availability && (
              <Button value="Available" disabled={true} style={{width: 150}} />
            )}
            <Button
              value="Message"
              style={{width: 150}}
              onPress={() =>
                navigation.navigate('ChatScreen', {data: route.params.data})
              }
            />
          </View>
        </View>
      </View>
    </HeaderLayout>
  );
}

const styles = StyleSheet.create({});

export default TutorHome;
