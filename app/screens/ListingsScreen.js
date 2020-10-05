import React from "react";
import { FlatList, StyleSheet, ImageBackground } from "react-native";

import Card from "../components/Card";
import colors from "../config/colors";
import Screen from "../components/Screen";

const memories = [
  {
    id: 1,
    title: "Great day in the city!",
    date: "23.08.2018",
    image: require("../assets/placeholder.jpg"),
  },
  {
    id: 2,
    title: "Couch in great condition",
    date: "03.12.2019",
    image: require("../assets/placeholder.jpg"),
  },
];

function ListingsScreen({ navigation }) {
  return (
    <ImageBackground
      style={styles.background}
      source={require("../assets/background.jpg")}
    >
      <Screen style={styles.screen}>
        <FlatList
          data={memories}
          keyExtractor={(memory) => memory.id.toString()}
          renderItem={({ item }) => (
            <Card
              title={item.title}
              subTitle={item.date}
              image={item.image}
              onPress={() => navigation.navigate("ListingDetails", item)}
            />
          )}
        />
      </Screen>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  screen: {
    padding: 20,
  },
  background: {
    flex: 1,
  },
});

export default ListingsScreen;
