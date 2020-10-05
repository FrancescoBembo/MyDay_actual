import React from "react";
import { View } from "react-native";
import { MaterialCommunityIcons, Image } from "@expo/vector-icons";

function Emoji({ imageURL, size, backgroundColor = "#000" }) {
  return (
    <View
      style={{
        width: size,
        height: size,
        borderRadius: size / 2,
        backgroundColor,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Image src={imageURL} size={size * 0.5} />
    </View>
  );
}

export default Emoji;
