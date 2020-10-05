import React from "react";
import { ImageBackground, StyleSheet, View, Image, Text } from "react-native";

import Button from "../components/Button";
import ButtonSecond from "../components/ButtonSecond";
import colors from "../config/colors";

function WelcomeScreen({ navigation }) {
  return (
    <ImageBackground
      style={styles.background}
      source={require("../assets/background.jpg")}
    >
      <View style={styles.logoContainer}>
        <Image style={styles.logo} source={require("../assets/logo.png")} />
        <Text style={styles.tagline}>Tell me how you feel...</Text>
      </View>
      <View style={styles.buttonsContainer}>
        <Button title="Login" onPress={() => navigation.navigate("Login")} />
        <ButtonSecond
          title="Register"
          color="white"
          onPress={() => navigation.navigate("Register")}
        />
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "center",
  },
  buttonsContainer: {
    padding: 20,
    width: "100%",
    marginBottom: 60,
  },

  logoContainer: {
    position: "absolute",
    top: 150,
    alignItems: "center",
  },
  tagline: {
    fontSize: 25,
    fontWeight: "600",
    paddingVertical: 30,
    color: colors.white,
  },
});

export default WelcomeScreen;
