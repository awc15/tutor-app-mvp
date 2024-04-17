import React, {useState} from 'react';
import {
  TextInput,
  StyleSheet,
  Text,
  View,
  Touchable,
  TouchableOpacity,
} from 'react-native';
import {WINDOW_HEIGHT, WINDOW_WIDTH} from './Mixuns';
import {BLACK, GRAY, WHITE} from '../assets/Colors';
import Ionicons from 'react-native-vector-icons/Ionicons';

function InputField(props) {
  const {
    placeHolderValue = '',
    IsSecure,
    value = '',
    setValue = () => {},
    inputType = 'default',
    style = {},
  } = props;
  const [showEye, setShowEye] = useState(IsSecure);

  return (
    <View
      style={[
        {
          width: WINDOW_WIDTH * 0.8,
          borderWidth: 1,
          alignItems: 'center',
          paddingVertical: WINDOW_HEIGHT * 0.006,
          borderRadius: 30,
          flexDirection: 'row',
          justifyContent: 'space-between',
          paddingHorizontal: 10,
        },
        style,
      ]}>
      <TextInput
        placeholder={placeHolderValue}
        width={WINDOW_WIDTH * 0.65}
        style={{paddingLeft: 20, color: BLACK}}
        secureTextEntry={showEye}
        value={value}
        onChangeText={setValue}
        keyboardType={inputType}
        height={WINDOW_HEIGHT * 0.045}
        placeholderTextColor={GRAY}
      />

      {IsSecure && (
        <TouchableOpacity
          style={{marginRight: 5}}
          onPress={() => {
            setShowEye(!showEye);
          }}>
          {showEye ? (
            <Ionicons name="eye-off" color={BLACK} size={20} />
          ) : (
            <Ionicons name="eye" color={BLACK} size={20} />
          )}
        </TouchableOpacity>
      )}
    </View>
  );
}

const styles = StyleSheet.create({});

export default InputField;
