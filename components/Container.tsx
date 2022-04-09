import { StyleSheet, Text, View } from "react-native";

import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";

const Container = (props: any) => {
  return (
    <SafeAreaView style={styles.container} {...props}>
      {props.children}
    </SafeAreaView>
  );
};

export default Container;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#121421",
    // backgroundColor: "#fff",
    paddingHorizontal: 20,
    paddingTop: 20,
  },
});
