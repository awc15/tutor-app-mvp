import React, {useState} from 'react';
import {
  Alert,
  Modal,
  StyleSheet,
  Text,
  Pressable,
  View,
  Touchable,
  TouchableWithoutFeedback,
  TouchableOpacity,
  TouchableHighlight,
  ScrollView,
} from 'react-native';
import {WINDOW_HEIGHT, WINDOW_WIDTH} from './Mixuns';
import {BLACK, PRIMARY_COLOR, WHITE} from '../assets/Colors';
import TextElement from './TextElement';
import Button from './Button';
import Ionicons from 'react-native-vector-icons/Ionicons';

const ModalView = props => {
  const singleSelectCondition = () => {};
  const {
    showModal,
    setShowModal,
    subjects = [],
    setSubjects = () => {},
    selectedSubjects = [],
    setSelectedSubjects = () => {},
    singleSelect = false,
  } = props;
  return (
    <View style={{}}>
      <Modal
        animationType="slide"
        transparent={true}
        visible={showModal}
        onRequestClose={() => {
          Alert.alert('Modal has been closed.');
          setShowModal(!showModal);
        }}>
        <TouchableOpacity
          style={styles.centeredView}
          onPress={() => setShowModal(false)}>
          <TouchableHighlight style={styles.modalView}>
            <View
              style={{
                width: WINDOW_WIDTH * 0.95,
                justifyContent: 'center',
              }}>
              <TextElement
                textStyle={{
                  fontSize: 24,
                  marginTop: 20,
                  textAlign: 'center',
                  alignItems: 'center',
                }}>
                Please select subjects
              </TextElement>
              <ScrollView style={{height: WINDOW_HEIGHT * 0.42}}>
                {subjects.map(item => (
                  <View>
                    <TouchableOpacity
                      onPress={() => {
                        singleSelect
                          ? (setSelectedSubjects(item), setShowModal(false))
                          : !selectedSubjects.includes(item) &&
                            setSelectedSubjects([...selectedSubjects, item]);
                      }}
                      style={{
                        marginTop: 10,
                        flexDirection: 'row',
                        justifyContent: 'space-between',
                      }}>
                      <TextElement textStyle={{fontSize: 18}}>
                        {item}
                      </TextElement>
                      {selectedSubjects.includes(item) && (
                        <Ionicons
                          name="checkmark-sharp"
                          color={PRIMARY_COLOR}
                          size={20}
                        />
                      )}
                    </TouchableOpacity>
                  </View>
                ))}
              </ScrollView>
              <Button
                onPress={() => setShowModal(false)}
                value="Confirm"
                style={{alignSelf: 'center'}}
                textStyle={{color: WHITE}}
              />
            </View>
          </TouchableHighlight>
        </TouchableOpacity>
      </Modal>
      {/* <Pressable
        style={[styles.button, styles.buttonOpen]}
        onPress={() => setModalVisible(true)}>
        <Text style={styles.textStyle}>Show Modal</Text>
      </Pressable> */}
    </View>
  );
};

const styles = StyleSheet.create({
  centeredView: {
    backgroundColor: `${BLACK}60`,
    flex: 1,
    justifyContent: 'flex-end',
    bottom: 0,
    position: 'absolute',
    height: WINDOW_HEIGHT * 1,
    width: WINDOW_WIDTH * 1,
    alignItems: 'center',
  },
  modalView: {
    backgroundColor: WHITE,
    borderRadius: 20,
    padding: 15,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
    height: WINDOW_HEIGHT * 0.6,
    width: WINDOW_WIDTH * 1,
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  buttonOpen: {
    backgroundColor: '#F194FF',
  },
  buttonClose: {
    backgroundColor: '#2196F3',
  },
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  modalText: {
    marginBottom: 15,
    textAlign: 'center',
  },
});

export default ModalView;
