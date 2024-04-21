import React, { useEffect, useState } from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";

import { useSelector, useDispatch } from "react-redux";
import HeaderLayout from "../Components/HeaderLayout";
import TextElement from "../Components/TextElement";
import { WINDOW_HEIGHT, WINDOW_WIDTH } from "../Components/Mixuns";
import { BLACK, GRAY, PRIMARY_COLOR, WHITE } from "../assets/Colors";
import { Calendar } from "../Components/Calendar";
import AntDesign from "react-native-vector-icons/AntDesign";
import Button from "../Components/Button";
import ModalView from "../Components/ModalView";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import PushNotification, { Importance } from "react-native-push-notification";

function TutorProfile({ navigation, route }) {
  const [showModal, setShowModal] = useState(false);
  const [showCalendar, setShowCalendar] = useState(false);
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [localSubjects, setLocalSubjectsl] = useState(route.params.subjects);

  const dateFormat = (dateAvalue) => {
    const date = new Date(dateAvalue);

    const options = {
      day: "numeric",
      month: "short",
    };

    const formattedDate = date.toLocaleDateString("en-US", options);
    return formattedDate;
  };
  useEffect(() => {
    PushNotification.createChannel(
      {
        channelId: "12", // (required)
        channelName: "My channel", // (required)
        channelDescription: "A channel to categorise your notifications", // (optional) default: undefined.
        playSound: true, // (optional) default: true
        soundName: "default", // (optional) See `soundName` parameter of `localNotification` function
        importance: Importance.HIGH, // (optional) default: Importance.HIGH. Int value of the Android notification importance
        vibrate: true, // (optional) default: true. Creates the default vibration pattern if true.
      },
      (created) => console.log(`createChannel returned '${created}'`) // (optional) callback returns whether the channel was created, false means it already existed.
    );
  });
  const handleNotification = () => {
    PushNotification.localNotification({
      channelId: "12", // (required) channelId, if the channel doesn't exist, notification will not trigger.
      vibration: 300, // vibration length in milliseconds, ignored if vibrate=false, default: 1000
      vibrate: true,
      playSound: true,
      title: "Schedule  Lessons", // (optional)
      message: `You just schedule lesons with ${
        route.params.data?.Name
      } from ${dateFormat(startDate)} to ${dateFormat(endDate)}`, // (required)
    });
  };
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
          source={route.params.data?.Picture}
          style={{ height: 200, width: 200, borderRadius: 100 }}
        />
        <TextElement textStyle={{ fontSize: 30, marginTop: 10 }}>
          {`${route.params.data?.Name} ${route.params.data?.lastName}`}
        </TextElement>
        <View
          style={{
            width: WINDOW_WIDTH * 0.8,
            flexDirection: "row",
            flexWrap: "wrap",
          }}
        >
          {route.params.from !== "student" && (
            <View
              style={{
                marginTop: WINDOW_HEIGHT * 0.02,
                marginLeft: 15,
                flexDirection: "row",
              }}
            >
              <TextElement textStyle={{ fontSize: 16 }}>
                What subjects can you teach
              </TextElement>

              <TouchableOpacity
                style={{ marginLeft: 5 }}
                onPress={() => setShowModal(true)}
              >
                <MaterialIcons
                  name="add-circle"
                  color={PRIMARY_COLOR}
                  size={25}
                />
              </TouchableOpacity>
            </View>
          )}

          {route.params.from == "student"
            ? route.params.data?.Subject.map((item) => (
                <View
                  style={{
                    borderWidth: 1,
                    borderTopWidth: 0,
                    justifyContent: "center",
                    height: WINDOW_HEIGHT * 0.08,
                    width: WINDOW_WIDTH * 0.2,
                    borderBottomEndRadius: 20,
                    borderBottomStartRadius: 20,
                    marginLeft: 10,
                    marginTop: 10,
                  }}
                >
                  <TextElement textStyle={{ textAlign: "center" }}>
                    {item}
                  </TextElement>
                </View>
              ))
            : localSubjects.map((item) => (
                <View
                  style={{
                    borderWidth: 1,
                    borderTopWidth: 0,
                    justifyContent: "center",
                    height: WINDOW_HEIGHT * 0.08,
                    width: WINDOW_WIDTH * 0.2,
                    borderBottomEndRadius: 20,
                    borderBottomStartRadius: 20,
                    marginLeft: 10,
                    marginTop: 10,
                  }}
                >
                  <TextElement textStyle={{ textAlign: "center" }}>
                    {item}
                  </TextElement>
                </View>
              ))}
        </View>
        <View
          style={{ width: WINDOW_WIDTH * 0.8, marginLeft: 10, marginTop: 20 }}
        >
          <TextElement textStyle={{ fontSize: 24, color: GRAY }}>
            About me:
          </TextElement>
          <TextElement
            textStyle={{
              fontSize: 16,
              color: BLACK,
            }}
          >
            {route.params.data?.aboutMe}
          </TextElement>
          <View
            style={[
              {
                flexDirection: "row",

                marginTop: 20,
              },
              route.params.from == "student"
                ? { justifyContent: "space-between" }
                : { justifyContent: "center" },
            ]}
          >
            {route.params.from == "student" && (
              <Button
                onPress={() => setShowCalendar(true)}
                value="Schedule"
                disabled={route.params.data.Availability}
                style={{ width: 150 }}
              />
            )}
            {route.params?.from == "tutor" ? (
              <Button
                value="upload Filke"
                style={{ width: 150 }}
                onPress={() =>
                  navigation.navigate("UploadFIle", { data: route.params.data })
                }
              />
            ) : (
              <Button
                value="Message"
                style={{ width: 150 }}
                onPress={() =>
                  navigation.navigate("ChatScreen", { data: route.params.data })
                }
              />
            )}
          </View>
        </View>
      </View>
      <ModalView
        showModal={showModal}
        setShowModal={setShowModal}
        subjects={[
          "English",
          "Math",
          "Science",
          "Spanish",
          "French",
          "Computer Science",
          "Programming",
          "Art",
          "Music",
          "History",
          "Geography",
          "Physics",
          "Chemistry",
        ]}
        setSubjects={["English", "Math", "Science"]}
        selectedSubjects={localSubjects}
        setSelectedSubjects={(subjects) => {
          route.params?.setSubecjts(subjects);
          setLocalSubjectsl(subjects);
        }}
      />
      <Calendar
        showModal={showCalendar}
        setShowModal={setShowCalendar}
        setStartDate={setStartDate}
        setEndDate={setEndDate}
        close={() => {
          setShowCalendar(false);
          handleNotification();
        }}
      />
    </HeaderLayout>
  );
}

const styles = StyleSheet.create({});

export default TutorProfile;
