import { FontAwesome, Ionicons } from "@expo/vector-icons";
import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

import Container from "../components/Container";
import HeadphonesSvg from "../svgs/HeadphonesSvg";
import LargeText from "../components/Text/LargeText";
import MovieSvg from "../svgs/MovieSvg";
import React from "react";
import RegularText from "../components/Text/RegularText";
import Row from "../components/Row";
import { StatusBar } from "expo-status-bar";

const DiscoverDetails = ({ navigation }: any) => {
  const [liked, setLiked] = React.useState(false);
  const [tab, setTab] = React.useState(false);

  return (
    <Container>
      <StatusBar style="light" />
      <Row>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Ionicons name="md-arrow-back" size={24} color="white" />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => setLiked(!liked)}>
          {liked ? (
            <FontAwesome name="heart" size={24} color="white" />
          ) : (
            <FontAwesome name="heart-o" size={24} color="white" />
          )}
        </TouchableOpacity>
      </Row>
      <ScrollView>
        <Text
          style={{
            lineHeight: 41,
            fontWeight: "700",
            fontSize: 34,
            letterSpacing: -0.41,
            marginBottom: 5,
            color: "rgba(255, 255, 255, 1)",
          }}
        >
          Sleep Meditation
        </Text>
        <Text
          style={{
            lineHeight: 41,
            fontWeight: "700",
            fontSize: 16,
            letterSpacing: -0.408,
            marginBottom: 15,
            color: "rgba(255, 255, 255, 1)",
            opacity: 0.7,
          }}
        >
          Best practice meditations
        </Text>

        <ScrollView horizontal>
          <View
            style={{
              width: 280,
              height: 279,
              borderRadius: 30,
              marginRight: 20,
            }}
          >
            <Image
              source={require("../assets/mount.png")}
              style={{
                width: 280,
                height: 279,
                borderRadius: 20,
              }}
            />
          </View>
          <View
            style={{
              width: 280,
              height: 279,
              borderRadius: 30,
            }}
          >
            <Image
              source={require("../assets/mount.png")}
              style={{
                width: 280,
                height: 279,
                borderRadius: 20,
              }}
            />
          </View>
        </ScrollView>
        <View
          style={{
            // backgroundColor: "red",
            marginTop: 20,
            flexDirection: "row",
          }}
        >
          <View>
            <TouchableOpacity onPress={() => setTab(!tab)}>
              <View
                style={{
                  width: 56,
                  height: 56,
                  backgroundColor: "rgba(255, 255, 255, 0.1)",
                  borderRadius: 10,
                  alignContent: "center",
                  alignItems: "center",
                  justifyContent: "center",
                  marginRight: 15,
                }}
              >
                <HeadphonesSvg />

                {/* <MovieSvg /> */}
              </View>
              {tab ? null : (
                <View
                  style={{
                    backgroundColor: "#4A80F0",
                    width: 34,
                    height: 2,
                    marginTop: 20,
                  }}
                />
              )}
            </TouchableOpacity>
          </View>
          <TouchableOpacity onPress={() => setTab(!tab)}>
            <View>
              <View
                style={{
                  width: 56,
                  height: 56,
                  backgroundColor: "rgba(255, 255, 255, 0.1)",
                  borderRadius: 10,
                  alignContent: "center",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <MovieSvg />
              </View>
              {tab ? (
                <View
                  style={{
                    backgroundColor: "#4A80F0",
                    width: 34,
                    height: 2,
                    marginTop: 20,
                  }}
                />
              ) : null}
            </View>
          </TouchableOpacity>
        </View>
        <View>
          <Text
            style={{
              color: "rgba(255, 255, 255, 1)",
              fontSize: 16,
              lineHeight: 25,
              letterSpacing: -0.408,
              opacity: 0.7,
              marginTop: 20,
            }}
          >
            Meditation is a practice where an individual uses a technique – such
            as mindfulness, or focusing their mind on a particular object,
            thought or activity – to train attention and awareness, and achieve
            a mentally clear and emotionally calm and stable state. Scholars
            have found meditation difficult to define, as practices vary both
            between traditions and within them. Meditation is a practice where
            an individual uses a technique – such as mindfulness, or focusing
            their mind on a particular object, thought or activity – to train
            attention and awareness, and achieve a mentally clear and
            emotionally calm and stable state. Scholars have found meditation
            difficult to define, as practices vary both between traditions and
            within them
          </Text>
        </View>
      </ScrollView>
      <View
        style={{
          backgroundColor: "#rgba(74, 128, 240, 1)",
          width: 319,
          height: 56,
          borderRadius: 16,
          alignItems: "center",
          justifyContent: "center",
          alignSelf: "center",
        }}
      >
        <Text
          style={{
            color: "rgba(255, 255, 255, 1)",
            textAlign: "center",
            letterSpacing: -0.408,
            fontSize: 17,
            fontWeight: "500",
          }}
        >
          Start
        </Text>
      </View>
    </Container>
  );
};

export default DiscoverDetails;

const styles = StyleSheet.create({});
