import { Image, ImageBackground, StyleSheet, Text, View } from "react-native";

import Container from "../components/Container";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Man() {
  return (
    <SafeAreaView>
      <View style={styles.Group79}>
        <View style={styles.PeerGroupMeetup}>
          <View style={styles.WatchNow}>
            <Text style={styles.Txt8108}>Book Now</Text>
            <Image
              style={styles.IcOutlineDateRange}
              source={{
                uri: "https://firebasestorage.googleapis.com/v0/b/unify-bc2ad.appspot.com/o/3fm7qaich66-7%3A778?alt=media&token=7dac9bd6-427f-4ad5-ac7d-3edc364807a2",
              }}
            />
          </View>
          <Text style={styles.Txt610}>
            Let’s open up to the things that matter the most{" "}
          </Text>
          <Text style={styles.Txt689}>1 on 1 Sessions</Text>
        </View>
        <Image
          style={styles.MeetupIcon}
          source={{
            uri: "https://firebasestorage.googleapis.com/v0/b/unify-bc2ad.appspot.com/o/3fm7qaich66-3%3A57?alt=media&token=4c820bd2-dd32-4b47-8cab-4235a2a4efe6",
          }}
        />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  Group79: {
    position: "relative",
    paddingTop: 22,
    paddingBottom: 13,
    paddingLeft: 19,
    paddingRight: 22,
    borderRadius: 20,
    backgroundColor: "white",
    /* url(https://firebasestorage.googleapis.com/v0/b/unify-bc2ad.appspot.com/o/3fm7qaich66-5%3A355?alt=media&token=ae624f58-aab3-47a8-bdf0-1a34784503f9), linear-gradient(0deg, rgba(254,243,231,1), rgba(254,243,231,1)) */
    width: 325,
    height: 151,
  },
  PeerGroupMeetup: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "flex-start",
    position: "relative",
    width: 199,
  },
  WatchNow: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    position: "absolute",
    top: 285,
    left: 45,
    paddingTop: 4,
    paddingBottom: 2,
    paddingLeft: 0,
    paddingRight: 37,
    marginBottom: 8,
    width: 138,
    height: 39,
  },
  Txt8108: {
    fontSize: 16,
    fontFamily: "Epilogue, sans-serif",
    fontWeight: "700",
    lineHeight: 32,
    color: "rgba(254,130,53,1)",
    marginRight: 3,
  },
  IcOutlineDateRange: {
    width: 17,
    height: 17,
  },

  Txt610: {
    position: "absolute",
    top: 329,
    left: 45,
    fontSize: 12,
    fontFamily: "Rubik, sans-serif",
    fontWeight: "400",
    lineHeight: 18,
    color: "rgba(87,57,38,1)",
    width: 200,
    height: 36,
    opacity: 0.9,
    marginBottom: 8,
  },
  Txt689: {
    position: "absolute",
    top: 360,
    left: 45,
    fontSize: 22,
    fontFamily: "Epilogue, sans-serif",
    fontWeight: "800",
    color: "rgba(87,57,38,1)",
    width: 167,
    height: 23,
  },

  MeetupIcon: {
    position: "absolute",
    top: 36,
    left: 217,
    width: 85.27,
    height: 80,
  },
});
