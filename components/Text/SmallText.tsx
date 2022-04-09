import { StyleSheet, Text, View } from "react-native";

import React from "react";

const SmallText = (props: any) => {
  return (
    <Text {...props} style={styles.small}>
      {props.children}
    </Text>
  );
};

export default SmallText;

const styles = StyleSheet.create({
  small: {
    fontSize: 14,
    // textAlign: "left",
    color: "#fff",
  },
});
