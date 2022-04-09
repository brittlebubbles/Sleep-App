import { StyleSheet, Text, View } from "react-native";

import React from "react";

const RegularText = (props: any) => {
  return (
    <Text {...props} style={styles.large}>
      {props.children}
    </Text>
  );
};

export default RegularText;

const styles = StyleSheet.create({
  large: {
    fontSize: 22,
    textAlign: "left",
    color: "#fff",
    fontWeight: "700",
  },
});
