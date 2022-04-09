import { StyleSheet, Text, View } from "react-native";

import React from "react";

const LargeText = (props: any) => {
  return (
    <Text {...props} style={styles.large}>
      {props.children}
    </Text>
  );
};

export default LargeText;

const styles = StyleSheet.create({
  large: {
    fontSize: 34,
    textAlign: "left",
    color: "#fff",
  },
});
