import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  TouchableHighlight,
  TouchableOpacity,
  View,
} from "react-native";

import { effects } from "../data/typesOfEffects";

const RoundTabs = ({ name, id }: any) => {
  const [active, setActive] = useState("rgba(28, 32, 49, 1)");
  const change = () => setActive("#4A80F0");

  return (
    // <TouchableOpacity onPress={() => setActive("#4A80F0")}>
    <TouchableOpacity onPress={() => change()}>
      <View style={[styles.roundButton, { backgroundColor: active }]} key={id}>
        <Text style={{ textAlign: "center", color: "white", fontSize: 17 }}>
          {name}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

export default RoundTabs;

const styles = StyleSheet.create({
  roundButton: {
    width: 101,
    height: 48,
    borderRadius: 12,
    justifyContent: "center",
    marginRight: 15,
  },
});
