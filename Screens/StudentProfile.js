import React from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";

import { useSelector, useDispatch } from "react-redux";
import HeaderLayout from "../Components/HeaderLayout";
import TextElement from "../Components/TextElement";
import { WINDOW_HEIGHT, WINDOW_WIDTH } from "../Components/Mixuns";
import { BLACK, GRAY, Green, PRIMARY_COLOR, WHITE } from "../assets/Colors";
import { Calendar } from "../Components/Calendar";
import AntDesign from "react-native-vector-icons/AntDesign";
import Button from "../Components/Button";
import { StudentData } from "../assets/MockData";

function StudentProfile({ navigation, route }) {
  return (
    <HeaderLayout>
      <View style={{ flexDirection: "row", marginTop: 20 }}>
        <TouchableOpacity
          style={{ paddingLeft: WINDOW_WIDTH * 0.05 }}
          onPress={() => navigation.goBack()}
        >
          <AntDesign name="arrowleft" color={BLACK} size={30} />
        </TouchableOpacity>
      </View>
      <View
        style={{
          justifyContent: "center",
          alignItems: "center",
          paddingTop: WINDOW_WIDTH * 0.1,
        }}
      >
        <Image
          source={route?.params?.data.Picture}
          style={{ height: 200, width: 200, borderRadius: 100 }}
        />
        <TextElement textStyle={{ fontSize: 30, marginTop: 10 }}>
          {`${StudentData[0].Name} ${StudentData[0].lastName}`}
        </TextElement>
      </View>
      <View style={{ marginHorizontal: WINDOW_WIDTH * 0.1 }}>
        <TextElement
          textStyle={{ fontSize: 24, marginTop: 20, marginBottom: 20 }}
        >
          Complete Lectures
        </TextElement>
        {route?.params?.data.Subject.map((item, index) => (
          <>
            <TextElement textStyle={{ fontSize: 18, marginTop: 20 }}>
              {item}
            </TextElement>
            <View
              style={{
                height: 4,
                width: WINDOW_WIDTH * (StudentData[0].ratting[index] / 100),
                backgroundColor: Green,
                marginTop: 5,
              }}
            />
          </>
        ))}
      </View>
    </HeaderLayout>
  );
}

const styles = StyleSheet.create({});

export default StudentProfile;
