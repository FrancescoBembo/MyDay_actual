import React from "react";
import { View, Image, StyleSheet, TouchableOpacity } from "react-native";

function AddMemoryBtn({ onPress }) {
  return (
    <TouchableOpacity onPress={onPress}>
      <Image style={styles.btnImg} source={require("../assets/AddBtn.png")} />
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  btnImg: {
    width: 80,
    height: 80,
    bottom: 35,
  },
});

export default AddMemoryBtn;
