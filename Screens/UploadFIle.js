import React, { useCallback, useState } from "react";
import {
  FlatList,
  Linking,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

import { useSelector, useDispatch } from "react-redux";
import HeaderLayout from "../Components/HeaderLayout";
import TextElement from "../Components/TextElement";
import { WINDOW_HEIGHT, WINDOW_WIDTH } from "../Components/Mixuns";
import { BLACK, PRIMARY_COLOR, WHITE } from "../assets/Colors";
import { Calendar } from "../Components/Calendar";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";
import AntDesign from "react-native-vector-icons/AntDesign";
import Button from "../Components/Button";
import DocumentPicker, { types } from "react-native-document-picker";
import ModalView from "../Components/ModalView";
import ModalConfirmation from "../Components/ModalConfirmation";

function UploadFIle({ navigation, route }) {
  const [fileResponse, setFileResponse] = useState([]);
  const [showModal, setShowModal] = useState(false);

  const handleDocumentSelection = useCallback(async () => {
    try {
      const response = await DocumentPicker.pick({
        presentationStyle: "fullScreen",
        type: [types.pdf],
      });

      if (fileResponse.length == 0) {
        setFileResponse(response);
      } else {
        const newResponse = [[response, fileResponse]];
        console.log("newResponse==newResponse", newResponse);
        setFileResponse(newResponse);
      }

      //   console.log("response--response", response);
      //   console.log("fileResponse--fileResponse", fileResponse);

      //   console.log("new Response", ...newResponse);
      //   if (fileResponse.length == 0) {
      //     setFileResponse(response);
      //   } else {
      //     setFileResponse();
      //   }
    } catch (err) {
      console.warn(err);
    }
  }, []);

  return (
    <>
      <View style={{ flexDirection: "row", marginTop: 20 }}>
        <TouchableOpacity
          style={{ paddingLeft: WINDOW_WIDTH * 0.05, alignSelf: "center" }}
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
          Upload File
        </TextElement>
      </View>
      <View style={{ marginTop: WINDOW_WIDTH * 0.1 }}>
        <Button
          onPress={async () => {
            try {
              const response = await DocumentPicker.pick({
                presentationStyle: "fullScreen",
                type: [types.pdf],
              });

              if (fileResponse.length == 0) {
                setFileResponse(response);
              } else {
                const newResponse = [...response, ...fileResponse];
                console.log("newResponse==newResponse", newResponse);
                setFileResponse(newResponse);
              }

              //   console.log("response--response", response);
              //   console.log("fileResponse--fileResponse", fileResponse);

              //   console.log("new Response", ...newResponse);
              //   if (fileResponse.length == 0) {
              //     setFileResponse(response);
              //   } else {
              //     setFileResponse();
              //   }
            } catch (err) {
              console.warn(err);
            }
          }}
          value="UploadFIle"
          style={{ width: WINDOW_WIDTH * 0.5, alignSelf: "center" }}
        />
      </View>
      <FlatList
        data={fileResponse}
        numColumns={2}
        style={{
          marginVertical: 20,
          width: WINDOW_WIDTH * 0.9,
        }}
        renderItem={({ item }) => (
          <View
            style={{
              paddingVertical: 20,
              borderWidth: 1,
              width: 130,
              justifyContent: "center",
              alignItems: "center",
              borderRadius: 10,
              marginLeft: 40,
              marginTop: 20,
            }}
          >
            {console.log("item", item)}
            <FontAwesome5 name="file-pdf" color="#AD0B00" size={100} />
            {console.log("item==item", item)}
            <TextElement
              textStyle={{ marginTop: 10, fontSize: 10, width: 100 }}
            >
              {item.name}
            </TextElement>
          </View>
        )}
        keyExtractor={(item) => item.id}
        // extraData={selectedId}
      />
      {/* <ModalConfirmation showModal={showModal} setShowModal={setShowModal} /> */}
    </>
  );
}

const styles = StyleSheet.create({});

export default UploadFIle;
