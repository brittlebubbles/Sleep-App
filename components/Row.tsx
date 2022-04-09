import { StyleSheet, Text, View } from "react-native";

import React from "react";

export default function Row(props: any) {
  return (
    <View style={styles.row} {...props}>
      {props.children}
    </View>
  );
}

const styles = StyleSheet.create({
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    // backgroundColor: "#fea",
    marginBottom: 20,
    marginTop: 10,
  },
});
