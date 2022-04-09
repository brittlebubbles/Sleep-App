import {
  FlatList,
  ImageBackground,
  ScrollView,
  StyleSheet,
  Text,
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
import RegularText from "../components/Text/RegularText";
import RoundTabs from "../components/RoundTabs";
import Row from "../components/Row";
import SmallCards from "../components/SmallCards";
import { StatusBar } from "expo-status-bar";

export default function Profile() {
  return (
    <Container>
      <StatusBar style="light" />
      <Text> Profile Screen</Text>
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
