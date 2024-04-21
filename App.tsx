import React from "react";
import { Button, StyleSheet, Text, View } from "react-native";

import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import AntDesign from "react-native-vector-icons/AntDesign";
import { store } from "./store";
import { Provider } from "react-redux";
import { useSelector, useDispatch } from "react-redux";
import { decrement, increment } from "./Reducers/counterSlice";
import Welcome from "./Screens/Welcome";
import Login from "./Screens/Login";
import SignIn from "./Screens/SignIn";
import TutorRegistration from "./Screens/TutorRegistration";
import StudentHome from "./Screens/StudentHome";
import SearchScreen from "./Screens/SearchScreen";
import { ChatScreen } from "./Screens/ChatScreen";
import TutorProfile from "./Screens/TutorProfile";
import UploadFIle from "./Screens/UploadFIle";
import StudentProfile from "./Screens/StudentProfile";
import TutorHome from "./Screens/TutorHome";

const Stack = createNativeStackNavigator();
function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Welcome">
          <Stack.Screen
            name="TutorHome"
            component={TutorHome}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="StudentProfile"
            component={StudentProfile}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="UploadFIle"
            component={UploadFIle}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="TutorProfile"
            component={TutorProfile}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="ChatScreen"
            component={ChatScreen}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="SearchScreen"
            component={SearchScreen}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="StudentHome"
            component={StudentHome}
            options={{ headerShown: false, gestureEnabled: false }}
          />
          <Stack.Screen
            name="TutorRegistration"
            component={TutorRegistration}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="SignIn"
            component={SignIn}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="Login"
            component={Login}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="Welcome"
            component={Welcome}
            options={{ headerShown: false }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: "600",
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: "400",
  },
  highlight: {
    fontWeight: "700",
  },
});

export default App;
