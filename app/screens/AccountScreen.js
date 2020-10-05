import React from "react";
import { StyleSheet, View, Image, TouchableOpacity } from "react-native";

import colors from "../config/colors";
import Icon from "../components/Icon";
import Screen from "../components/Screen";
import Text from "../components/Text";

function AccountScreen(props) {
  return (
    <Screen style={styles.screen}>
      <View style={styles.info}>
        <View style={styles.container}>
          <Image
            style={styles.proPic}
            source={require("../assets/profilePic.png")}
          />
          <View style={styles.nameContainer}>
            <Text style={styles.name}>Francesco</Text>
            <Text style={styles.name}>Bembo</Text>
          </View>
        </View>
        <Text style={styles.mail}>bembofrancesco@gmail.com</Text>
      </View>

      <TouchableOpacity style={styles.logoutContainer}>
        <Image
          style={styles.logoutIcon}
          source={require("../assets/logoutIcon.png")}
        />
        <Text style={styles.logoutBtn}>Logout</Text>
      </TouchableOpacity>
    </Screen>
  );
}

const styles = StyleSheet.create({
  screen: {
    backgroundColor: colors.light,
    alignItems: "center",
  },

  container: {
    flexDirection: "row",
    alignItems: "center",
    padding: 50,
  },
  proPic: {
    height: 140,
    width: 140,
    borderRadius: 75,
    padding: 10,
  },
  nameContainer: {
    paddingLeft: 30,
  },
  info: {
    alignItems: "center",
  },
  name: {
    fontSize: 25,
    fontWeight: "bold",
    padding: 5,
  },
  mail: {
    fontSize: 18,
    fontWeight: "bold",
    padding: 5,
  },
  logoutBtn: {
    fontSize: 30,
    fontWeight: "bold",
    color: colors.danger,
    paddingStart: 10,
  },
  logoutIcon: {
    width: 30,
    height: 30,
  },
  logoutContainer: {
    flexDirection: "row",
    alignItems: "center",
    position: "absolute",
    bottom: 100,
  },
});

export default AccountScreen;

/*
  <View style={styles.container}>
        <ListItem
          title="Francesco Bembo"
          subTitle="bembofrancesco@gmail.com"
          image={require("../assets/profilePic.png")}
        />
      </View>

      <ListItem
        title="Log Out"
        IconComponent={<Icon name="logout" backgroundColor="#ffe66d" />}
      />

*/
