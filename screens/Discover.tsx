import {
  FlatList,
  ImageBackground,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { effects, recent, recommended } from "../data/typesOfEffects";

import BigCards from "../components/BigCards";
import Bluebackground from "../svgs/Bluebackground";
import Container from "../components/Container";
import { Feather } from "@expo/vector-icons";
import FileFill from "../svgs/FileFill";
import HeadphoneSvg from "../svgs/HeadphonesSvg";
import HeadphonesSvg from "../svgs/HeadphonesSvg";
import LargeText from "../components/Text/LargeText";
import { LinearGradient } from "expo-linear-gradient";
import MovieSvg from "../svgs/MovieSvg";
import React from "react";
import RegularText from "../components/Text/RegularText";
import RoundTabs from "../components/RoundTabs";
import Row from "../components/Row";
import SmallCards from "../components/SmallCards";
import { StatusBar } from "expo-status-bar";

export default function Discover({ navigation }: any) {
  return (
    <Container>
      <StatusBar style="light" />
      <Row>
        <LargeText>Discover</LargeText>
        <Feather name="search" size={24} color="white" />
      </Row>

      <View style={{ marginBottom: 30 }}>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          {effects.map((effect) => {
            return <RoundTabs name={effect.name} key={effect.id} />;
          })}
        </ScrollView>
      </View>

      <ScrollView>
        <View>
          <Row>
            <Text style={{ color: "white" }}>Recommended</Text>
            <Text
              style={{
                color: "white",
                textAlign: "center",
                alignContent: "center",
              }}
            >
              See All
            </Text>
          </Row>
          <ScrollView horizontal>
            {recommended.map((recommend) => {
              return (
                <TouchableOpacity
                  onPress={() => navigation.navigate("DiscoverDetails")}
                  key={recommend.id}
                >
                  <BigCards
                    name={recommend.name}
                    key={recommend.id}
                    type={recommend.type}
                    colors={recommend.colors}
                    // onPress={handlePress}
                  />
                </TouchableOpacity>
              );
            })}
          </ScrollView>
          <Row>
            <Text style={{ color: "white" }}>Recent</Text>
          </Row>

          <View
            style={{
              flexDirection: "row",
              flexWrap: "wrap",
              // backgroundColor: "#311",
              alignItems: "center",
              alignContent: "center",
            }}
          >
            <LinearGradient
              colors={["#13DEA0", "#06B782", "transparent"]}
              // locations={[0.2, 1]}
              style={{
                width: "48%",
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
                <Text
                  style={{
                    textAlign: "left",
                    color: "white",
                    fontSize: 20,
                    lineHeight: 22,
                    paddingBottom: 40,
                    fontWeight: "bold",
                  }}
                >
                  Calming Sounds
                </Text>

                <View
                  style={{
                    flexDirection: "row",
                    // paddingTop: 60,
                    marginRight: 20,
                  }}
                >
                  <View style={{ marginRight: 20 }}>
                    <HeadphonesSvg />
                  </View>
                </View>
              </View>
            </LinearGradient>

            <LinearGradient
              // Background Linear Gradient
              colors={["#FC67A7", "#F6815B", "transparent"]}
              // locations={[0.2, 1]}
              style={{
                width: "48%",
                height: 150,
                borderRadius: 25,
                marginRight: 1,
                marginTop: 20,
              }}
            >
              <View
                style={{
                  paddingHorizontal: 25,
                  marginTop: 20,
                }}
              >
                <Text
                  style={{
                    textAlign: "left",
                    color: "white",
                    fontSize: 20,
                    lineHeight: 22,
                    paddingBottom: 62,
                    fontWeight: "bold",
                  }}
                >
                  Insomnia
                </Text>

                <View
                  style={{
                    flexDirection: "row",

                    marginRight: 20,
                  }}
                >
                  {/* <View style={{ marginRight: 20 }}>
                  <HeadphonesSvg />
                </View> */}
                  <MovieSvg />
                </View>
              </View>
            </LinearGradient>

            <LinearGradient
              // Background Linear Gradient
              colors={["#F9B50F", "#8A6508", "transparent"]}
              // locations={[0.2, 1]}
              style={{
                width: "48%",
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
                <Text
                  style={{
                    textAlign: "left",
                    color: "white",
                    fontSize: 20,
                    lineHeight: 22,
                    paddingBottom: 45,
                    fontWeight: "bold",
                  }}
                >
                  For {"     "}Children
                </Text>

                <View
                  style={{
                    flexDirection: "row",
                    marginRight: 20,
                  }}
                >
                  <View style={{ marginRight: 20 }}>
                    <FileFill />
                  </View>
                </View>
              </View>
            </LinearGradient>

            <LinearGradient
              // Background Linear Gradient
              colors={["#441DFC", "#4E81EB", "transparent"]}
              // locations={[0.2, 1]}
              style={{
                width: "48%",
                height: 150,
                borderRadius: 25,
                marginRight: 1,
                marginTop: 20,
              }}
            >
              <View
                style={{
                  paddingHorizontal: 25,
                  marginTop: 20,
                }}
              >
                <Text
                  style={{
                    textAlign: "left",
                    color: "white",
                    fontSize: 20,
                    lineHeight: 22,
                    paddingBottom: 45,
                    fontWeight: "bold",
                  }}
                >
                  Tips for Sleeping
                </Text>

                <View
                  style={{
                    flexDirection: "row",

                    marginRight: 20,
                  }}
                >
                  <View style={{ marginRight: 20 }}>
                    <FileFill />
                  </View>
                </View>
              </View>
            </LinearGradient>
          </View>
        </View>
      </ScrollView>
    </Container>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  roundButton: {
    width: 305,
    height: 176,
    borderRadius: 30,
    backgroundColor: "#4A80F0",
    // justifyContent: "center",
    marginRight: 25,
  },
});
