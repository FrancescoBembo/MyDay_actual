import React from "react";
import { NavigationContainer } from "@react-navigation/native";

import AuthNavigator from "./app/navigation/AuthNavigator";
import AppNavigator from "./app/navigation/AppNavigator";
import navTheme from "./app/navigation/navTheme";

export default function App() {
  return (
    <NavigationContainer theme={navTheme}>
      <AppNavigator />
    </NavigationContainer>
  );
}

/////////////////////// Screen List for easy testing /////////////////////////

//    WelcomeScreen
//    RegisterScreen
//    LoginScreen
//    AccountScreen
//    ListingsScreen
//    ListingEditScreen
//    ListingDetailsScreen

// COMMENT FOR THE PROFESSOR: Use the 2 nav below to check out the 2 parts of the app as i coudln't finish the authentication implementation

/////////////////////// Navigator List for easy testing /////////////////////////

//    <AuthNavigator/>
//    <AppNavigator/>
