import React, {useRef, useState} from 'react';
import {
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

import {useSelector, useDispatch} from 'react-redux';
import HeaderLayout from '../Components/HeaderLayout';
import TextElement from '../Components/TextElement';
import {WINDOW_HEIGHT, WINDOW_WIDTH} from '../Components/Mixuns';
import {PRIMARY_COLOR, WARNING, WHITE} from '../assets/Colors';
import InputField from '../Components/InputField';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Entypo from 'react-native-vector-icons/Entypo';

import Button from '../Components/Button';
import ModalView from '../Components/ModalView';
import {Calendar} from '../Components/Calendar';
function TutorRegistration({navigation}) {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [grade, setGrade] = useState('');
  const [frequency, setFrequency] = useState('');
  const [profession, setProfession] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [emailError, setEmailError] = useState(false);
  const [passwordError, setPasswordError] = useState(false);
  const [subjects, setSubjects] = useState(['English', 'Math', 'Science']);
  const [selectedSubjects, setSelectedSubjects] = useState([]);
  const [selectedSession, setSelectedSession] = useState('');
  const [showModal, setShowModal] = useState(false);
  const [showSession, setShowSession] = useState(false);
  const [showCalendar, setShowCalendar] = useState(false);
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const keyboardVerticalOffset = Platform.OS === 'ios' ? 40 : 20;
  return (
    <HeaderLayout>
      <KeyboardAvoidingView
        style={{
          flexDirection: 'column',
          marginBottom: 20,
          height:
            Platform.OS == 'ios' ? WINDOW_HEIGHT * 0.89 : WINDOW_HEIGHT * 0.95,
        }}
        behavior="padding"
        enabled
        keyboardVerticalOffset={keyboardVerticalOffset}>
        <ScrollView style={{}}>
          <View
            style={{
              alignItems: 'center',
              paddingTop: WINDOW_HEIGHT * 0.1,
              paddingBottom: 100,
            }}>
            <TextElement textStyle={{fontSize: 28}}>SignIn</TextElement>

            <InputField
              placeHolderValue="First Name"
              value={firstName}
              setValue={setFirstName}
              style={{marginTop: WINDOW_HEIGHT * 0.02}}
            />
            <InputField
              placeHolderValue="Last Name"
              value={lastName}
              setValue={setLastName}
              style={{marginTop: WINDOW_HEIGHT * 0.02}}
            />
            <InputField
              placeHolderValue="Profession"
              value={profession}
              setValue={setProfession}
              style={{marginTop: WINDOW_HEIGHT * 0.02}}
            />
            <InputField
              placeHolderValue="Grade"
              value={grade}
              setValue={setGrade}
              style={{marginTop: WINDOW_HEIGHT * 0.02}}
              inputType="number-pad"
            />

            <View
              style={{
                marginTop: WINDOW_HEIGHT * 0.02,
                marginLeft: 15,
                flexDirection: 'row',
              }}>
              <TextElement textStyle={{fontSize: 16}}>
                What subjects can you teach
              </TextElement>

              <TouchableOpacity
                style={{marginLeft: 5}}
                onPress={() => setShowModal(true)}>
                <MaterialIcons
                  name="add-circle"
                  color={PRIMARY_COLOR}
                  size={25}
                />
              </TouchableOpacity>
            </View>
            <View
              style={{
                flexDirection: 'row',
                maxWidth: WINDOW_WIDTH * 0.8,
                flexWrap: 'wrap',
              }}>
              {selectedSubjects.map(item => (
                <View
                  style={{
                    backgroundColor: PRIMARY_COLOR,
                    padding: 5,
                    width: 60,
                    borderRadius: 20,
                    paddingHorizontal: 10,
                    minWidth: 80,
                    flexDirection: 'row',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    marginLeft: 10,
                    marginTop: 10,
                  }}>
                  <TextElement textStyle={{color: WHITE}}>{item}</TextElement>
                  <TouchableOpacity
                    onPress={() => {
                      const newList = selectedSubjects.filter(
                        value => item !== value,
                      );
                      setSelectedSubjects(newList);
                    }}>
                    <Entypo name="cross" color={WHITE} size={20} />
                  </TouchableOpacity>
                </View>
              ))}
            </View>
            <View
              style={{
                marginTop: WINDOW_HEIGHT * 0.02,
                marginLeft: 15,
                flexDirection: 'row',
              }}>
              <TextElement textStyle={{fontSize: 16}}>Availablity</TextElement>

              <TouchableOpacity
                style={{marginLeft: 5}}
                onPress={() => setShowCalendar(true)}>
                <MaterialIcons
                  name="add-circle"
                  color={PRIMARY_COLOR}
                  size={25}
                />
              </TouchableOpacity>
            </View>
            {startDate && endDate && (
              <TextElement
                textStyle={{
                  textAlign: 'center',
                  fontSize: 16,
                }}>{`${startDate}\nTo\n${endDate}`}</TextElement>
            )}

            <View
              style={{
                marginTop: WINDOW_HEIGHT * 0.02,
                marginLeft: 15,
                flexDirection: 'row',
              }}>
              <TextElement textStyle={{fontSize: 16}}>
                What terms can you tutor
              </TextElement>

              <TouchableOpacity
                style={{marginLeft: 5}}
                onPress={() => setShowSession(true)}>
                <MaterialIcons
                  name="add-circle"
                  color={PRIMARY_COLOR}
                  size={25}
                />
              </TouchableOpacity>
            </View>
            <View
              style={{
                flexDirection: 'row',
                maxWidth: WINDOW_WIDTH * 0.8,
                flexWrap: 'wrap',
              }}>
              {selectedSession && (
                <View
                  style={{
                    backgroundColor: PRIMARY_COLOR,
                    padding: 10,
                    paddingHorizontal: 30,
                    borderRadius: 50,
                  }}>
                  <TextElement
                    textStyle={{
                      fontSize: 18,
                      alignItems: 'flex-start',
                      color: WHITE,
                    }}>
                    {selectedSession}
                  </TextElement>
                </View>
              )}
            </View>
            <InputField
              placeHolderValue="Hours per week can you tutor"
              value={frequency}
              setValue={setFrequency}
              style={{marginTop: WINDOW_HEIGHT * 0.02}}
              inputType="number-pad"
            />
            <InputField
              placeHolderValue="Email"
              value={email}
              setValue={setEmail}
              style={{marginTop: WINDOW_HEIGHT * 0.02}}
            />

            <InputField
              placeHolderValue="Password"
              value={password}
              setValue={setPassword}
              IsSecure={true}
              style={[{marginTop: WINDOW_HEIGHT * 0.02}]}
            />
            <InputField
              placeHolderValue="Confirm Passowrd"
              value={confirmPassword}
              setValue={setConfirmPassword}
              style={{marginTop: WINDOW_HEIGHT * 0.02}}
            />

            <Button
              onPress={() =>
                navigation.navigate('TutorHome', {
                  data: {
                    Name: firstName,
                    lastName: lastName,
                    Subject: selectedSubjects,
                    Picture: require('../assets/Images/genralImage.jpeg'),
                    aboutMe:
                      "Art and music are my passions, and I'm excited to share them with you. Let's get creative!",
                    Availability:
                      startDate !== '' && endDate !== '' ? true : false,
                    showHome: false,
                    email: email,
                    password: password,
                  },
                  from: 'Login',
                })
              }
              value="Login"
              style={{marginTop: WINDOW_HEIGHT * 0.05}}
              disabled={
                !(
                  email.match(
                    /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
                  ) &&
                  password.length > 7 &&
                  firstName.length > 2 &&
                  lastName.length > 2 &&
                  grade.length > 0 &&
                  frequency.length > 0 &&
                  selectedSubjects.length > 0 &&
                  password == confirmPassword &&
                  selectedSession !== ''
                )
              }
            />
          </View>
          <ModalView
            showModal={showModal}
            setShowModal={setShowModal}
            subjects={subjects}
            setSubjects={subjects}
            selectedSubjects={selectedSubjects}
            setSelectedSubjects={setSelectedSubjects}
          />
          <ModalView
            showModal={showSession}
            setShowModal={setShowSession}
            subjects={['Summer', 'Fall', 'Spring', 'Winter']}
            setSubjects={subjects}
            selectedSubjects={selectedSession}
            setSelectedSubjects={setSelectedSession}
            singleSelect={true}
          />
          <Calendar
            showModal={showCalendar}
            setShowModal={setShowCalendar}
            setStartDate={setStartDate}
            setEndDate={setEndDate}
          />
        </ScrollView>
      </KeyboardAvoidingView>
    </HeaderLayout>
  );
}

const styles = StyleSheet.create({});

export default TutorRegistration;
