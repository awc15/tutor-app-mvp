import React, { useState } from "react";
import {
  FlatList,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";

import { useSelector, useDispatch } from "react-redux";
import HeaderLayout from "../Components/HeaderLayout";
import TextElement from "../Components/TextElement";
import { WINDOW_HEIGHT, WINDOW_WIDTH } from "../Components/Mixuns";
import { BLACK, PRIMARY_COLOR, SearchIcon, WHITE } from "../assets/Colors";
import { Calendar } from "../Components/Calendar";
import Ionicons from "react-native-vector-icons/Ionicons";
import Entypo from "react-native-vector-icons/Entypo";
import AntDesign from "react-native-vector-icons/AntDesign";
import { TutorData } from "../assets/MockData";

function SearchScreen({ navigation }) {
  const [newList, setNewList] = useState([]);
  return (
    <HeaderLayout>
      <View
        style={{
          justifyContent: "center",
        }}
      >
        <View style={{ flexDirection: "row", marginTop: 20 }}>
          <TouchableOpacity
            style={{ paddingLeft: WINDOW_WIDTH * 0.05 }}
            onPress={() => navigation.goBack()}
          >
            <AntDesign name="arrowleft" color={BLACK} size={30} />
          </TouchableOpacity>
          <TextElement
            textStyle={{
              fontSize: 24,

              width: WINDOW_WIDTH * 0.8,
              textAlign: "center",
            }}
          >
            Search Tutor
          </TextElement>
        </View>
        <View
          style={{ alignItems: "center", paddingTop: WINDOW_HEIGHT * 0.02 }}
        >
          <View
            style={{
              width: WINDOW_WIDTH * 0.8,
              borderWidth: 1,
              alignItems: "center",
              borderRadius: 20,
              flexDirection: "row",
              height: 50,
              paddingHorizontal: 20,
            }}
          >
            <Ionicons name="search" color={SearchIcon} size={20} />
            <TextInput
              onChangeText={(value) => {
                const filteredList = TutorData.filter((tutor) => {
                  // Check if the search text is present in the tutor's subjects, first name, or last name
                  return (
                    tutor.Subject.some((subject) =>
                      subject.toLowerCase().includes(value.toLowerCase())
                    ) ||
                    tutor.Name.toLowerCase().includes(value.toLowerCase()) ||
                    tutor.lastName.toLowerCase().includes(value.toLowerCase())
                  );
                });
                setNewList(filteredList);
              }}
              placeholder="Search"
              style={{
                marginLeft: 10,
                color: BLACK,
                width: WINDOW_WIDTH * 0.6,
              }}
            />
          </View>
        </View>
        <View
          style={{
            width: WINDOW_WIDTH * 0.9,
            height: WINDOW_HEIGHT * 0.8,
            alignSelf: "center",
          }}
        >
          <FlatList
            data={newList.length > 0 ? newList : TutorData}
            scrollEnabled={true}
            renderItem={({ item }) => (
              <View
                style={{
                  borderWidth: 1,
                  padding: 10,
                  borderRadius: 15,
                  marginTop: 10,
                }}
              >
                <View style={{ marginTop: 5, flexDirection: "row" }}>
                  <Image
                    source={item.Picture}
                    style={{
                      width: 50,
                      height: 50,
                      borderRadius: 25,
                    }}
                  />
                  <View style={{ marginLeft: 10, flex: 1 }}>
                    <View
                      style={{ flexDirection: "row", alignItems: "center" }}
                    >
                      <TextElement textStyle={{ color: BLACK, marginLeft: 5 }}>
                        {`${item.Name} ${item.lastName}`}
                      </TextElement>
                    </View>
                    <View style={{ flexDirection: "row", flexWrap: "wrap" }}>
                      {item?.Subject.map((item) => (
                        <View
                          style={{
                            flexDirection: "row",
                            alignItems: "center",
                            marginTop: 8,
                            marginLeft: 8,
                          }}
                        >
                          <Entypo name="book" color={PRIMARY_COLOR} />
                          <TextElement
                            textStyle={{ color: BLACK, marginLeft: 5 }}
                          >
                            {item}
                          </TextElement>
                        </View>
                      ))}
                    </View>
                    <TouchableOpacity
                      onPress={() => {
                        navigation.navigate("TutorProfile", {
                          data: item,
                          from: "student",
                        });
                      }}
                      style={{
                        flexDirection: "row",
                        alignItems: "center",
                        borderWidth: 1,
                        borderRadius: 10,
                        paddingHorizontal: 15,
                        marginTop: 8,
                        alignSelf: "flex-end",
                      }}
                    >
                      <Entypo name="info" color={BLACK} />
                      <TextElement textStyle={{ color: BLACK, marginLeft: 5 }}>
                        More Info
                      </TextElement>
                    </TouchableOpacity>
                  </View>
                </View>
              </View>
            )}
            keyExtractor={(item, index) => item.index}
          />
        </View>
      </View>
    </HeaderLayout>
  );
}

const styles = StyleSheet.create({});

export default SearchScreen;
