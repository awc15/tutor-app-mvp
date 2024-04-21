import React, { useState } from "react";
import {
  Modal,
  StyleSheet,
  Text,
  TouchableHighlight,
  TouchableOpacity,
  View,
} from "react-native";
import CalendarPicker from "react-native-calendar-picker";
import { BLACK, PRIMARY_COLOR, WHITE } from "../assets/Colors";
import { WINDOW_HEIGHT, WINDOW_WIDTH } from "./Mixuns";
import Button from "./Button";

export const Calendar = (props) => {
  const [selectedStartDate, setSelectedStartDate] = useState(null);
  const [selectedEndDate, setSelectedEndDate] = useState(null);
  const {
    showModal,
    setShowModal,
    setStartDate = () => {},
    setEndDate = () => {},
    close = () => {},
  } = props;
  //   constructor(props) {
  //     super(props);
  //     this.state = {
  //       selectedStartDate: null,
  //       selectedEndDate: null,
  //     };
  //     this.onDateChange = this.onDateChange.bind(this);
  //   }

  // onDateChange(date, type) {
  //   if (type === 'END_DATE') {
  //     this.setState({
  //       selectedEndDate: date,
  //     });
  //   } else {
  //     this.setState({
  //       selectedStartDate: date,
  //       selectedEndDate: null,
  //     });
  //   }
  // }
  const minDate = new Date(); // Today
  const maxDate = new Date(2030, 6, 3);
  const startDate = selectedStartDate ? selectedStartDate.toString() : "";
  const endDate = selectedEndDate ? selectedEndDate.toString() : "";

  return (
    <View style={{}}>
      <Modal
        animationType="slide"
        transparent={true}
        visible={showModal}
        onRequestClose={() => {
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
                alignItems: "center",
                flex: 1,
              }}
            >
              <CalendarPicker
                startFromMonday={true}
                allowRangeSelection={true}
                minDate={minDate}
                maxDate={maxDate}
                todayBackgroundColor="#f2e6ff"
                selectedDayColor={PRIMARY_COLOR}
                selectedDayTextColor="#FFFFFF"
                onDateChange={(date, type) => {
                  if (type === "END_DATE") {
                    setSelectedEndDate(date);
                    setEndDate(date);
                  } else {
                    setSelectedStartDate(date);
                    setStartDate(date);
                  }
                }}
              />
              <Button
                onPress={close}
                value={"Continue"}
                style={{ alinSelf: "center" }}
              />
            </View>
          </TouchableHighlight>
        </TouchableOpacity>
      </Modal>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    height: 2,
    backgroundColor: "#FFFFFF",
  },
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
