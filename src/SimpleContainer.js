import { View } from "react-native";
import React from "react";
import { FONT_COLOR, CONTAINER_BACKGROUND_COLOR } from "./Constants";

const SimpleContainer = ({ children, style }) => {
  return (
    <View
      style={{
        
        margin: "auto",
        padding: 20,
        borderColor: FONT_COLOR,
        borderWidth: 4,
        borderStyle: "solid",
        borderRadius: 25,
        backgroundColor: CONTAINER_BACKGROUND_COLOR,
        ...style,
      }}
    >
      {children}
    </View>
  );
};

export default SimpleContainer;
