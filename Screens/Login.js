import React, { useState } from "react";
import {
  KeyboardAvoidingView,
  Platform,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

import { useSelector, useDispatch } from "react-redux";
import HeaderLayout from "../Components/HeaderLayout";
import TextElement from "../Components/TextElement";
import { WINDOW_HEIGHT, WINDOW_WIDTH } from "../Components/Mixuns";
import { PRIMARY_COLOR, WARNING, WHITE } from "../assets/Colors";
import InputField from "../Components/InputField";
import Button from "../Components/Button";
import { StudentData, TutorData } from "../assets/MockData";
function Login({ navigation, route }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailError, setEmailError] = useState(false);
  const [passwordError, setPasswordError] = useState(false);
  const keyboardVerticalOffset = Platform.OS === "ios" ? 40 : 20;
  return (
    <HeaderLayout>
      <View
        style={{
          alignItems: "center",
          paddingTop: WINDOW_HEIGHT * 0.1,
          justifyContent: "space-between",
          height:
            Platform.OS == "ios" ? WINDOW_HEIGHT * 0.89 : WINDOW_HEIGHT * 0.95,
        }}
      >
        <TextElement textStyle={{ fontSize: 28 }}>Login</TextElement>
        <KeyboardAvoidingView
          behavior="position"
          keyboardVerticalOffset={keyboardVerticalOffset}
        >
          <InputField
            placeHolderValue="Email"
            value={email}
            setValue={(value) => {
              setEmailError(false);
              setEmail(value);
            }}
            style={emailError && { borderColor: WARNING }}
          />
          {emailError && (
            <TextElement
              textStyle={{ marginLeft: 15, marginVertical: 5, color: WARNING }}
            >
              Please enter correct Email
            </TextElement>
          )}

          <InputField
            placeHolderValue="Password"
            value={password}
            setValue={(value) => {
              setPasswordError(false);
              setPassword(value);
            }}
            IsSecure={true}
            style={[
              { marginTop: WINDOW_HEIGHT * 0.02 },
              passwordError && { borderColor: WARNING },
            ]}
          />
          {passwordError && (
            <TextElement
              textStyle={{ marginLeft: 15, marginVertical: 5, color: WARNING }}
            >
              Please enter correct Password
            </TextElement>
          )}
          <Button
            onPress={() => {
              if (route?.params?.role == "student") {
                if (
                  !StudentData.find(
                    (user) => user.email.toLowerCase() === email.toLowerCase()
                  )
                ) {
                  setEmailError(true);
                }
                if (!StudentData.find((user) => user.Password === password)) {
                  setPasswordError(true);
                }
                if (
                  StudentData.find(
                    (user) =>
                      user.email.toLowerCase() === email.toLowerCase() &&
                      user.Password === password
                  )
                ) {
                  const user = StudentData.find(
                    (user) =>
                      user.email.toLowerCase() === email.toLowerCase() &&
                      user.Password === password
                  );

                  navigation.navigate("StudentHome", { data: user });
                }
              } else {
                if (
                  !TutorData.find(
                    (user) => user.email.toLowerCase() === email.toLowerCase()
                  )
                ) {
                  setEmailError(true);
                }
                if (!TutorData.find((user) => user.Password === password)) {
                  setPasswordError(true);
                }
                if (
                  TutorData.find(
                    (user) =>
                      user.email.toLowerCase() === email.toLowerCase() &&
                      user.Password === password
                  )
                ) {
                  const user = TutorData.find(
                    (user) =>
                      user.email.toLowerCase() === email.toLowerCase() &&
                      user.Password === password
                  );

                  navigation.navigate("TutorHome", {
                    data: user,
                    from: "Login",
                  });
                }
              }
            }}
            value="Login"
            style={{ marginTop: WINDOW_HEIGHT * 0.05 }}
            disabled={
              !(
                email.match(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/) &&
                password.length > 7
              )
            }
          />
          <TouchableOpacity
            onPress={() => {
              route?.params?.role == "student"
                ? navigation.navigate("SignIn")
                : navigation.navigate("TutorRegistration");
            }}
            style={{ justifyContent: "center", alignSelf: "center" }}
          >
            <TextElement
              textStyle={{ fontSize: 14, marginTop: WINDOW_HEIGHT * 0.02 }}
            >
              Create Account?
            </TextElement>
          </TouchableOpacity>
        </KeyboardAvoidingView>
      </View>
    </HeaderLayout>
  );
}

const styles = StyleSheet.create({});

export default Login;
