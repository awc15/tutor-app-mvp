import React, {useState, useCallback, useEffect} from 'react';
import {
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import {GiftedChat} from 'react-native-gifted-chat';
import HeaderLayout from '../Components/HeaderLayout';
import {WINDOW_WIDTH} from '../Components/Mixuns';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {BLACK} from '../assets/Colors';
import TextElement from '../Components/TextElement';

export function ChatScreen({navigation, route}) {
  const [messages, setMessages] = useState([]);
  useEffect(() => {
    setMessages([
      {
        _id: 1,
        text: 'How May I help you?',
        createdAt: new Date(),
        user: {
          _id: 2,
          name: 'React Native',
          avatar: route.params.data.Picture,
        },
      },
      {
        _id: 2,
        text: 'Hello',
        createdAt: new Date(),
        user: {
          _id: 2,
          name: 'React Native',
          avatar: route.params.data.Picture,
        },
      },
    ]);
  }, []);

  const onSend = useCallback((messages = []) => {
    setMessages(previousMessages =>
      GiftedChat.append(previousMessages, messages),
    );
  }, []);

  return (
    <>
      <View style={{flexDirection: 'row'}}>
        <TouchableOpacity
          style={{paddingLeft: WINDOW_WIDTH * 0.05}}
          onPress={() => navigation.goBack()}>
          <AntDesign name="arrowleft" color={BLACK} size={30} />
        </TouchableOpacity>
        <TextElement
          textStyle={{
            fontSize: 24,
            width: WINDOW_WIDTH * 0.8,
            textAlign: 'center',
          }}>
          {`${route.params.data.Name} ${route.params.data.lastName}`}
        </TextElement>
      </View>
      <View
        style={{
          flex: 1,
        }}>
        <GiftedChat
          messages={messages}
          onSend={messages => onSend(messages)}
          user={{
            _id: 1,
          }}
        />
        {Platform.OS === 'android' && (
          <KeyboardAvoidingView behavior="padding" />
        )}
      </View>
    </>
  );
}
