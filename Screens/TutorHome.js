import React, { useState } from "react";
import {
  Image,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

import HeaderLayout from "../Components/HeaderLayout";
import TextElement from "../Components/TextElement";
import { WINDOW_HEIGHT, WINDOW_WIDTH } from "../Components/Mixuns";
import {
  BLACK,
  GRAY,
  PRIMARY_COLOR,
  SearchIcon,
  WHITE,
} from "../assets/Colors";
import Ionicons from "react-native-vector-icons/Ionicons";
import Feather from "react-native-vector-icons/Feather";
import Entypo from "react-native-vector-icons/Entypo";
import { StudentData, TutorData } from "../assets/MockData";

function TutorHome({ navigation, route }) {
  const [subjects, setSubecjts] = useState(route?.params?.data?.Subject);
  return (
    <View>
      <View
        style={{
          paddingTop: WINDOW_HEIGHT * 0.08,
          backgroundColor: PRIMARY_COLOR,
          alignItems: "center",
          justifyContent: "center",
          borderBottomEndRadius: 20,
          borderBottomStartRadius: 20,
          paddingBottom: 30,
        }}
      >
        <SafeAreaView />
        <View style={{ width: WINDOW_WIDTH * 0.8, flexDirection: "row" }}>
          <TouchableOpacity
            onPress={() =>
              navigation.navigate("TutorProfile", {
                data: route?.params?.data,
                from: "tutor",
                subjects: subjects,
                setSubecjts: (subjects) => setSubecjts(subjects),
              })
            }
          >
            <Image
              source={route?.params?.data?.Picture}
              style={{
                width: 50,
                height: 50,
                borderRadius: 25,
              }}
            />
          </TouchableOpacity>
          <View style={{ marginLeft: 15 }}>
            <TextElement textStyle={{ color: WHITE, fontSize: 14 }}>
              Hello
            </TextElement>

            <TextElement textStyle={{ color: WHITE, fontSize: 14 }}>
              {`${route?.params?.data?.Name} ${route?.params?.data?.lastName}`}
            </TextElement>
          </View>
        </View>
      </View>
      <ScrollView
        showsVerticalScrollIndicator={false}
        style={{
          width: WINDOW_WIDTH * 0.8,
          marginTop: 40,
          alignSelf: "center",
          height: WINDOW_HEIGHT * 0.7,
        }}
      >
        <TextElement textStyle={{ color: BLACK, fontSize: 20 }}>
          Upcoming Lessons
        </TextElement>
        {StudentData.map((item, index) => (
          <View
            style={{
              backgroundColor: PRIMARY_COLOR,
              padding: 10,
              borderRadius: 15,
              marginTop: 10,
            }}
          >
            <TextElement textStyle={{ color: WHITE }}>
              Adam Evan , Math lesson
            </TextElement>
            <View style={{ marginTop: 5, flexDirection: "row" }}>
              <Image
                source={item.Picture}
                style={{
                  width: 50,
                  height: 50,
                  borderRadius: 25,
                }}
              />
              <View style={{ marginLeft: 10 }}>
                <View style={{ flexDirection: "row", alignItems: "center" }}>
                  <Feather name="video" color={WHITE} />
                  <TextElement textStyle={{ color: WHITE, marginLeft: 5 }}>
                    Video call
                  </TextElement>
                </View>
                <View style={{ flexDirection: "row", alignItems: "center" }}>
                  <Entypo name="calendar" color={WHITE} />
                  <TextElement textStyle={{ color: WHITE, marginLeft: 5 }}>
                    Tuesday, 9 june
                  </TextElement>
                </View>
                <View style={{ flexDirection: "row", alignItems: "center" }}>
                  <Feather name="clock" color={WHITE} />
                  <TextElement textStyle={{ color: WHITE, marginLeft: 5 }}>
                    12:00 AM
                  </TextElement>
                </View>
              </View>
            </View>
          </View>
        ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({});

export default TutorHome;
