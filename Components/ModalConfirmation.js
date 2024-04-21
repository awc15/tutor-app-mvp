import React, { useState } from "react";
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
} from "react-native";
import { WINDOW_HEIGHT, WINDOW_WIDTH } from "./Mixuns";
import { BLACK, PRIMARY_COLOR, WARNING, WHITE } from "../assets/Colors";
import TextElement from "./TextElement";
import Button from "./Button";
import Ionicons from "react-native-vector-icons/Ionicons";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";

const ModalConfirmation = (props) => {
  const singleSelectCondition = () => {};

  const { showModal, setShowModal, data } = props;
  return (
    <View style={{}}>
      <Modal
        animationType="slide"
        transparent={true}
        visible={showModal}
        onRequestClose={() => {
          Alert.alert("Modal has been closed.");
          setShowModal(!showModal);
        }}
      >
        <TouchableOpacity
          style={styles.centeredView}
          onPress={() => setShowModal(false)}
        >
          <TouchableHighlight style={styles.modalView}>
            <View
              style={{
                width: WINDOW_WIDTH * 0.95,
                justifyContent: "space-between",
                flex: 1,
              }}
            >
              <View>
                <TextElement
                  textStyle={{
                    fontSize: 24,
                    marginTop: 20,
                    textAlign: "center",
                    alignItems: "center",
                  }}
                >
                  What you want
                </TextElement>

                <View
                  style={{
                    paddingVertical: 20,
                    borderWidth: 1,
                    width: 130,
                    justifyContent: "center",
                    alignItems: "center",
                    borderRadius: 10,

                    marginTop: 20,

                    alignSelf: "center",
                  }}
                >
                  <FontAwesome5 name="file-pdf" color="#AD0B00" size={100} />
                  <TextElement
                    textStyle={{ marginTop: 10, fontSize: 10, width: 100 }}
                  >
                    Fahad
                  </TextElement>
                </View>
              </View>
              <View>
                <Button
                  onPress={() => setShowModal(false)}
                  value="Open"
                  style={{ alignSelf: "center" }}
                  textStyle={{ color: WHITE }}
                />
                <Button
                  onPress={() => setShowModal(false)}
                  value="Delete"
                  style={{
                    alignSelf: "center",
                    backgroundColor: WARNING,
                    marginTop: 10,
                  }}
                  textStyle={{ color: WHITE }}
                />
              </View>
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
    justifyContent: "flex-end",
    bottom: 0,
    position: "absolute",
    height: WINDOW_HEIGHT * 1,
    width: WINDOW_WIDTH * 1,
    alignItems: "center",
  },
  modalView: {
    backgroundColor: WHITE,
    borderRadius: 20,
    padding: 15,
    alignItems: "center",
    shadowColor: "#000",
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
    backgroundColor: "#F194FF",
  },
  buttonClose: {
    backgroundColor: "#2196F3",
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center",
  },
});

export default ModalConfirmation;
