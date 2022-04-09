import { StyleSheet, Text, View } from "react-native";

import HeadphonesSvg from "../svgs/HeadphonesSvg";
import { LinearGradient } from "expo-linear-gradient";
import MovieSvg from "../svgs/MovieSvg";
import React from "react";
import RegularText from "./Text/RegularText";
import { effects } from "../data/typesOfEffects";

const BigCards = ({ name, type, colors, id }: any) => {
  return (
    <View key={id} style={{ marginRight: 25 }}>
      <LinearGradient
        // Background Linear Gradient
        // colors={["#441DFC", "#4E81EB", "transparent"]}
        colors={colors}
        // locations={[0.2, 1]}
        style={{
          width: 305,
          height: 176,
          borderRadius: 30,
        }}
      >
        {/* <View style={styles.roundButton}> */}
        <View
          style={{
            paddingHorizontal: 25,
            marginTop: 20,
          }}
        >
          <RegularText
            style={{
              textAlign: "center",
              color: "white",
            }}
          >
            {name}
          </RegularText>
          <Text
            style={{
              color: "white",
              fontSize: 17,
              opacity: 0.7,
              lineHeight: 22,
              paddingTop: 3,
            }}
          >
            {type}
          </Text>
          <View
            style={{
              flexDirection: "row",
              paddingTop: 60,
              marginRight: 20,
            }}
          >
            <View style={{ marginRight: 20 }}>
              <HeadphonesSvg />
            </View>
            <MovieSvg />
          </View>
        </View>
        {/* </View> */}
      </LinearGradient>
    </View>
  );
};

export default BigCards;

const styles = StyleSheet.create({
  roundButton: {
    width: 101,
    height: 48,
    borderRadius: 12,
    // backgroundColor: {bgcolor},
    justifyContent: "center",
    marginRight: 15,
  },
});
