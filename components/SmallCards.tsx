import { StyleSheet, Text, View } from "react-native";

import HeadphonesSvg from "../svgs/HeadphonesSvg";
import { LinearGradient } from "expo-linear-gradient";
import MovieSvg from "../svgs/MovieSvg";
import React from "react";
import RegularText from "./Text/RegularText";
import { effects } from "../data/typesOfEffects";

const SmallCards = ({ name, colors, id }: any) => {
  return (
    <View
      key={id}
      style={{
        flexDirection: "row",
        // justifyContent: ,
        flexWrap: "wrap",
        backgroundColor: "#93f",
        // alignItems: "center",
        // alignContent: "center",
        // paddingHorizontal: 5,
      }}
    >
      <LinearGradient
        // colors={["#441DFC", "#4E81EB", "transparent"]}
        colors={colors}
        style={{
          width: "45%",
          height: 150,
          borderRadius: 25,
          marginRight: 14.5,
          marginTop: 20,
        }}
      >
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

export default SmallCards;

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
