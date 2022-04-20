import {
  Dimensions,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import { Path, Svg } from "react-native-svg";

import Container from "../components/Container";
import React from "react";

export default function Scrap() {
  return (
    <Container>
      {/* <ScrollView
        bounces={false}
        showsVerticalScrollIndicator={false}
        style={{ height: Dimensions.get("window").height }}
      >
        <View style={stylesheet._Group_79}>
          <View style={stylesheet._Rectangle}></View>
          <View style={stylesheet._Mask_group}>
            <View style={stylesheet._Rectangle_2}></View>
            <View style={stylesheet._Mask_group_2}>
              <Svg style={stylesheet._Vector_3} fill={undefined}>
                <Path
                  fillRule={"none"}
                  d={
                    "M 0 77.99794006347656 C 96.97306126451812 48.48653053066448 141.13043737603977 16.772374802943347 218.18938784516575 5.268029492303394 C 252.86780414464752 0.09079211889844707 322.9549272470112 -3.390303476929672 342.00320713825585 5.268018757934373 C 367.8601569411292 17.02119665112432 342.00320713825585 77.99794006347656 342.00320713825585 77.99794006347656 L 0 77.99794006347656 Z"
                  }
                />
              </Svg>
              <Image
                style={stylesheet._Screenshot_2022_04_01_at_4_14_1}
                source={{ uri: imageUrl_Screenshot_2022_04_01_at_4_14_1 }}
              ></Image>
            </View>
          </View>
          <View style={stylesheet._Peer_Group_Meetup}>
            <View
              style={[
                stylesheet._1_on_1_Sessions,
                { display: "flex", flexDirection: "row", alignItems: "center" },
              ]}
            >
              <Text
                style={[
                  stylesheet._1_on_1_Sessions,
                  {
                    position: "relative",
                    flexGrow: 1,
                    left: 0,
                    top: 0,
                    height: "auto",
                    transform: [{ translateX: 0 }, { translateY: 0 }],
                  },
                ]}
              >
                1 on 1 Sessions
              </Text>
            </View>
            <View
              style={[
                stylesheet._Let_s_open_up_to_the_things_that_matter_the_most,
                { display: "flex", flexDirection: "row", alignItems: "center" },
              ]}
            >
              <Text
                style={[
                  stylesheet._Let_s_open_up_to_the_things_that_matter_the_most,
                  {
                    position: "relative",
                    flexGrow: 1,
                    left: 0,
                    top: 0,
                    height: "auto",
                    transform: [{ translateX: 0 }, { translateY: 0 }],
                  },
                ]}
              >
                Let’s open up to the things that matter the most
              </Text>
            </View>
            <View style={stylesheet._Watch_Now}>
              <View style={stylesheet._Rectangle_37}></View>
              <View
                style={[
                  stylesheet._Book_Now,
                  {
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "center",
                  },
                ]}
              >
                <Text
                  style={[
                    stylesheet._Book_Now,
                    {
                      position: "relative",
                      flexGrow: 1,
                      left: 0,
                      top: 0,
                      height: "auto",
                      transform: [{ translateX: 0 }, { translateY: 0 }],
                    },
                  ]}
                >
                  Book Now
                </Text>
              </View>
              <View style={stylesheet._ic_outline_date_range}>
                <Svg style={stylesheet._Vector} fill={"rgba(254, 130, 53, 1)"}>
                  <Path
                    fillRule={"nonzero"}
                    d={
                      "M 2.8333333333333335 6.374999713897705 L 4.25 6.374999713897705 L 4.25 7.791666316986085 L 2.8333333333333335 7.791666316986085 L 2.8333333333333335 6.374999713897705 Z M 12.75 2.833333206176758 L 12.75 12.74999942779541 C 12.75 13.529166076382001 12.112500016887983 14.166666030883789 11.333333333333334 14.166666030883789 L 1.4166666666666667 14.166666030883789 C 1.0409432922800383 14.166666030883789 0.6806085221469402 14.017410236589958 0.4149319926897685 13.751733719056029 C 0.1492554632325967 13.4860572015221 3.1456319031046104e-16 13.125722785320027 0 12.74999942779541 L 0.007083326578140259 2.833333206176758 C 0.007083326578140259 2.0541665575901678 0.6304166565338771 1.416666603088379 1.4166666666666667 1.416666603088379 L 2.125 1.416666603088379 L 2.125 0 L 3.541666666666667 0 L 3.541666666666667 1.416666603088379 L 9.208333333333334 1.416666603088379 L 9.208333333333334 0 L 10.625 0 L 10.625 1.416666603088379 L 11.333333333333334 1.416666603088379 C 12.112500016887983 1.416666603088379 12.75 2.0541665575901678 12.75 2.833333206176758 Z M 1.4166666666666667 4.249999809265137 L 11.333333333333334 4.249999809265137 L 11.333333333333334 2.833333206176758 L 1.4166666666666667 2.833333206176758 L 1.4166666666666667 4.249999809265137 Z M 11.333333333333334 12.74999942779541 L 11.333333333333334 5.666666412353516 L 1.4166666666666667 5.666666412353516 L 1.4166666666666667 12.74999942779541 L 11.333333333333334 12.74999942779541 Z M 8.5 7.791666316986085 L 9.916666666666668 7.791666316986085 L 9.916666666666668 6.374999713897705 L 8.5 6.374999713897705 L 8.5 7.791666316986085 Z M 5.666666666666667 7.791666316986085 L 7.083333333333334 7.791666316986085 L 7.083333333333334 6.374999713897705 L 5.666666666666667 6.374999713897705 L 5.666666666666667 7.791666316986085 Z"
                    }
                    strokeLinejoin={"miter"}
                  />
                </Svg>
              </View>
            </View>
          </View>
          <View style={stylesheet._Meetup_Icon}>
            <View style={stylesheet._Layer_2}>
              <View style={stylesheet._Layer_1}>
                <Svg
                  style={stylesheet._Vector_2}
                  fill={"rgba(240, 158, 84, 1)"}
                >
                  <Path
                    fillRule={"nonzero"}
                    d={
                      "M 0 6.556057994424904 C 0.44227027560857624 4.977371893508958 1.0201422144016963 3.4779343294856337 2.230127035796921 2.295483852648576 C 4.316307693735691 0.2684258639444681 6.788432051928301 -0.4510529195336909 9.55679388051082 0.27676932383661385 C 12.325155709093341 1.0045915672069186 14.133874454919395 2.8189335790943626 14.851520613187553 5.594668346485094 C 16.136607866645246 10.562211489061815 12.379395658133868 15.187733957770321 7.251563616836667 15.02506882096391 C 5.577341445916908 14.96416834569778 3.9711322907011777 14.347417618159197 2.6866507517566065 13.27222959229596 C 1.402169212812035 12.197041566432722 0.5126321137227152 10.724710010744774 0.1585497280138096 9.087798015006447 C 0.11828285005224835 8.960395208954893 0.06515965916742374 8.837414092825352 1.7486749789783164e-15 8.720756681920358 L 0 6.556057994424904 Z"
                    }
                    strokeLinejoin={"miter"}
                  />
                </Svg>
                <Svg
                  style={stylesheet._Vector_4}
                  fill={"rgba(240, 158, 84, 1)"}
                >
                  <Path
                    fillRule={"nonzero"}
                    d={
                      "M 14.368954177959731 11.889961604399682 L 24.336726018239553 29.147072780067166 C 25.740725733372877 28.344174008855834 27.092572220488584 27.549619571083795 28.463193073875797 26.790515237621324 C 30.655769193575825 25.57469708415244 32.82539719661012 25.774899929821018 34.54232393956694 27.32439028827411 C 36.86632947660756 29.409841693727994 36.72029705594519 33.21787362120926 34.141777598613615 34.99259281498271 C 32.4728329196784 36.13542018914912 30.684975996034236 37.090559999640504 28.926325476941066 38.097833012564 C 27.317880034659105 39.021687949380926 25.726124421157618 39.985163242967175 24.055093513624843 40.785976564761896 C 20.2665891242745 42.60031924772995 15.576853876149492 41.60556221289451 12.71252766642471 38.46278700851843 C 16.957905773047646 33.749666752638994 17.99682314332591 28.55689124153932 14.840431495415238 22.859438065482227 C 13.448948853436706 20.356896378937563 11.27932085040241 18.65099766228579 8.581888949408183 17.633297352558195 C 6.003682048354198 16.645915339563523 3.16930911540578 16.54828490305967 0.5292313908254186 17.355928751628962 C -0.860165022555554 13.633397913340119 0.5626104515252388 8.676280622648418 3.9004998093956678 6.486556646921838 C 7.161200499739788 4.348968956331605 10.576277729321687 2.417842398780194 13.997614241557393 0.5576197292045962 C 16.325792036839424 -0.7061638105674101 19.190119241332752 0.2760826160518697 20.483551327716803 2.5179428769147973 C 21.130973407885328 3.602334708440882 21.335062709463443 4.894563454074327 21.053329285579604 6.125599426732255 C 20.771595861695765 7.356635399390183 20.025749988773782 8.431615337111145 18.971070212431766 9.126738492173283 C 17.52117456239754 10.11732790976388 15.944020758495581 10.949422972807785 14.368954177959731 11.889961604399682 Z"
                    }
                    strokeLinejoin={"miter"}
                  />
                </Svg>
                <View style={stylesheet._Mask_group_3}>
                  <Svg style={stylesheet._Vector_5} fill={undefined}>
                    <Path
                      fillRule={"nonzero"}
                      d={
                        "M 14.368954177959731 11.889961604399682 L 24.336726018239553 29.147072780067166 C 25.740725733372877 28.344174008855834 27.092572220488584 27.549619571083795 28.463193073875797 26.790515237621324 C 30.655769193575825 25.57469708415244 32.82539719661012 25.774899929821018 34.54232393956694 27.32439028827411 C 36.86632947660756 29.409841693727994 36.72029705594519 33.21787362120926 34.141777598613615 34.99259281498271 C 32.4728329196784 36.13542018914912 30.684975996034236 37.090559999640504 28.926325476941066 38.097833012564 C 27.317880034659105 39.021687949380926 25.726124421157618 39.985163242967175 24.055093513624843 40.785976564761896 C 20.2665891242745 42.60031924772995 15.576853876149492 41.60556221289451 12.71252766642471 38.46278700851843 C 16.957905773047646 33.749666752638994 17.99682314332591 28.55689124153932 14.840431495415238 22.859438065482227 C 13.448948853436706 20.356896378937563 11.27932085040241 18.65099766228579 8.581888949408183 17.633297352558195 C 6.003682048354198 16.645915339563523 3.16930911540578 16.54828490305967 0.5292313908254186 17.355928751628962 C -0.860165022555554 13.633397913340119 0.5626104515252388 8.676280622648418 3.9004998093956678 6.486556646921838 C 7.161200499739788 4.348968956331605 10.576277729321687 2.417842398780194 13.997614241557393 0.5576197292045962 C 16.325792036839424 -0.7061638105674101 19.190119241332752 0.2760826160518697 20.483551327716803 2.5179428769147973 C 21.130973407885328 3.602334708440882 21.335062709463443 4.894563454074327 21.053329285579604 6.125599426732255 C 20.771595861695765 7.356635399390183 20.025749988773782 8.431615337111145 18.971070212431766 9.126738492173283 C 17.52117456239754 10.11732790976388 15.944020758495581 10.949422972807785 14.368954177959731 11.889961604399682 Z"
                      }
                    />
                  </Svg>
                  <Image
                    style={stylesheet._Screenshot_2022_04_01_at_4_14_2}
                    source={{ uri: imageUrl_Screenshot_2022_04_01_at_4_14_2 }}
                  ></Image>
                </View>
                <View style={stylesheet._Group_74}>
                  <Svg
                    style={stylesheet._Vector_6}
                    fill={"rgba(240, 158, 84, 1)"}
                  >
                    <Path
                      fillRule={"nonzero"}
                      d={
                        "M 35.69976127944682 17.384596985322386 C 32.414025173642486 16.450314907797853 29.25554488341529 16.710996588252048 26.238926203080588 18.26465758595827 C 23.99775736056403 19.40992060233617 22.167958696553516 21.22304581141036 21.00260897703421 23.453260834121167 C 18.634792719619096 27.870246236541377 18.9790142046569 33.9451649906349 23.52063176195537 38.46850844469553 C 21.891811239044145 40.27079804962764 19.650543715449572 41.40292743054102 17.232877199425683 41.64464633139682 C 14.860888682157581 41.90741316259303 12.685002744501125 41.283865382837114 10.642630912724393 40.08264552625898 C 8.0161281779028 38.53732632482549 5.3541629254379846 37.05248509664828 2.7339186798727675 35.4946532008057 C -0.5059213738259687 33.57395276933103 -0.94819186070105 29.46769813448647 1.8472914767192172 27.190385564305295 C 3.384807332195743 25.939114930090764 5.160145978368368 25.595019562917635 6.979296436781064 26.464652669607464 C 8.623207604384925 27.25086771412791 10.181585753895328 28.212257596556125 11.869306744201397 29.146539674080657 L 21.8349997864057 11.897775763434995 C 20.464378403601355 11.103218922641815 19.110440688456734 10.314917136306462 17.75442261304542 9.530787540854197 C 15.974909717481944 8.502660205540398 15.006921883542693 6.974023303905653 15.029869881617616 4.909426837005323 C 15.077852060541055 1.4225528128573917 18.872618693575777 -1.1112687994056378 21.962253811398757 0.4924430753790318 C 25.567541132736785 2.3237202383910884 29.059180082713272 4.370474960845871 32.41819524500383 6.621583554966347 C 35.50365790402003 8.72997450201955 37.03074519887884 13.063542538364768 35.69976127944682 17.384596985322386 Z"
                      }
                      strokeLinejoin={"miter"}
                    />
                  </Svg>
                  <Svg
                    style={stylesheet._Vector_7}
                    fill={"rgba(240, 158, 84, 1)"}
                  >
                    <Path
                      fillRule={"nonzero"}
                      d={
                        "M 15.133147135143242 7.652755955359118 C 15.133147135143242 11.665162933288805 11.707642462116857 15.03107722239586 7.662541587765112 15.00813726551274 C 3.440115422309022 14.98519730862962 -0.004168571067460061 11.671415450715031 0.000003786757467169575 7.642324883599762 C 0.000003786757467169575 3.4714236095229802 3.32328951201377 0.07005671709173822 7.291201987707013 0.0012368433348153502 C 11.757711107293307 -0.07801027987822315 15.183215429042368 3.6632890617226592 15.133147135143242 7.652755955359118 Z"
                      }
                      strokeLinejoin={"miter"}
                    />
                  </Svg>
                </View>
              </View>
            </View>
          </View>
        </View>
      </ScrollView> */}

      <View
        style={{
          width: 375,
          height: 150,
          backgroundColor: "white",
        }}
      >
        <View
          style={{
            width: 100,
            height: 30,
            backgroundColor: "red",
            position: "absolute",
            borderBottomEndRadius: "100%",
            // left: 275,
            // top: 80,
            // right: 50,
            // borderRadius: 5,
            // borderTopRightRadius: 90,
            // borderBottomRightRadius: 100,
            // borderBottomLeftRadius: 100,
          }}
        ></View>
      </View>
    </Container>
  );
}

const stylesheet = StyleSheet.create({
  _Group_79: {
    position: "absolute",
    width: 325,
    height: 151,
    transform: [{ translateX: 0 }, { translateY: 0 }, { rotate: "0deg" }],
    overflow: "hidden",
    backgroundColor: "rgba(0,0,0,0)",
  },
  _Rectangle: {
    position: "absolute",
    width: 325,
    height: 151,
    borderRadius: 20,
    opacity: 1,
    left: 0,
    right: "auto",
    top: 0,
    bottom: "auto",
    transform: [{ translateX: 0 }, { translateY: 0 }, { rotate: "0deg" }],
    backgroundColor: "rgba(253, 243, 230, 1)",
  },
  _Mask_group: {
    position: "absolute",
    width: 325,
    height: 151,
    transform: [{ translateX: 0 }, { translateY: 0 }, { rotate: "0deg" }],
    overflow: "hidden",
    backgroundColor: "rgba(0,0,0,0)",
  },
  _Rectangle_2: {},
  _Mask_group_2: {
    position: "absolute",
    width: 356.4974670410156,
    height: 92.9886703491211,
    transform: [{ translateX: 67 }, { translateY: 116 }, { rotate: "0deg" }],
    overflow: "hidden",
    backgroundColor: "rgba(0,0,0,0)",
  },
  _Vector_3: {},
  _Screenshot_2022_04_01_at_4_14_1: {
    position: "absolute",
    width: 111.5223159790039,
    height: 200.24667358398438,
    borderRadius: 0,
    opacity: 0.30000001192092896,
    left: 248.5478515625,
    right: "auto",
    top: -41.66943359375,
    bottom: "auto",
    transform: [
      { translateX: 0 },
      { translateY: 0 },
      { rotate: "60.0000050490214deg" },
    ],
    backgroundColor: "rgba(0,0,0,0)",
  },
  _Peer_Group_Meetup: {
    position: "absolute",
    width: 199,
    height: "auto",
    borderRadius: 0,
    left: 20,
    right: "auto",
    top: 23.119384765625,
    bottom: "auto",
    transform: [{ translateX: 0 }, { translateY: 0 }, { rotate: "0deg" }],
    backgroundColor: "rgba(0,0,0,0)",
    paddingTop: 0,
    paddingLeft: 0,
    paddingRight: 0,
    paddingBottom: 0,
    display: "flex",
    flexDirection: "column",
  },
  _1_on_1_Sessions: {
    position: "relative",
    width: "auto",
    height: "auto",
    minWidth: 0,
    transform: [{ translateX: 0 }, { translateY: 0 }],

    fontWeight: "400",
    textDecorationLine: "none",
    fontSize: 22,
    color: "rgba(87, 57, 38, 1)",
    textAlign: "left",
    textAlignVertical: "top",
    letterSpacing: 0.1,
    flexShrink: 0,
    marginBottom: 8,
  },
  _Let_s_open_up_to_the_things_that_matter_the_most: {
    position: "relative",
    width: 199,
    height: "auto",
    minWidth: 0,
    transform: [{ translateX: 0 }, { translateY: 0 }],

    fontWeight: "400",
    textDecorationLine: "none",
    lineHeight: 18,
    fontSize: 12,
    color: "rgba(87, 57, 38, 1)",
    textAlign: "left",
    textAlignVertical: "top",
    letterSpacing: 0.1,
    flexShrink: 0,
    marginBottom: 8,
  },
  _Watch_Now: {
    position: "relative",
    width: 138,
    height: 39,
    transform: [{ translateX: 0 }, { translateY: 0 }],
    overflow: "hidden",
    backgroundColor: "rgba(0,0,0,0)",
    minWidth: 0,
    flexShrink: 0,
  },
  _Rectangle_37: {
    position: "absolute",
    width: 138,
    height: 39,
    borderRadius: 10,
    opacity: 1,
    borderWidth: 1,
    borderColor: "rgba(239, 93, 168, 1)",
    left: 0,
    right: "auto",
    top: 0,
    bottom: "auto",
    transform: [{ translateX: 0 }, { translateY: 0 }, { rotate: "0deg" }],
    backgroundColor: "rgba(239, 93, 168, 0)",
  },
  _Book_Now: {
    position: "absolute",
    width: "auto",
    height: "auto",
    left: 0,
    right: "auto",
    top: 3.880615234375,
    bottom: "auto",
    transform: [{ translateX: 0 }, { translateY: 0 }, { rotate: "0deg" }],

    fontWeight: "700",
    textDecorationLine: "none",
    lineHeight: 32,
    fontSize: 16,
    color: "rgba(254, 130, 53, 1)",
    textAlign: "left",
    textAlignVertical: "top",
    letterSpacing: 0.1,
  },
  _ic_outline_date_range: {
    position: "absolute",
    width: 17,
    height: 17,
    borderRadius: 0,
    overflow: "hidden",
    left: 84,
    right: "auto",
    top: 9.880615234375,
    bottom: "auto",
    transform: [{ translateX: 0 }, { translateY: 0 }, { rotate: "0deg" }],
    backgroundColor: "rgba(254, 130, 53, 0)",
  },
  _Vector: {
    position: "absolute",
    color: "rgba(254, 130, 53, 1)",
    width: "auto",
    height: 14.166666030883789,
    borderRadius: 0,
    left: 2.125,
    right: 2.125,
    transform: [
      { translateX: 0 },
      { translateY: 1.416656494140625 },
      { rotate: "0deg" },
    ],
  },
  _Meetup_Icon: {
    position: "absolute",
    width: 85.27472686767578,
    height: 80,
    borderRadius: 0,
    overflow: "hidden",
    left: 217,
    right: "auto",
    top: 36,
    bottom: "auto",
    transform: [{ translateX: 0 }, { translateY: 0 }, { rotate: "0deg" }],
    backgroundColor: "rgba(240, 158, 84, 0)",
  },
  _Layer_2: {
    position: "absolute",
    width: 81.93898010253906,
    height: 66.99899291992188,
    transform: [{ translateX: 2 }, { translateY: 7 }, { rotate: "0deg" }],
    overflow: "hidden",
    backgroundColor: "rgba(0,0,0,0)",
  },
  _Layer_1: {
    position: "absolute",
    width: 81.93898010253906,
    height: 66.99899291992188,
    transform: [{ translateX: 0 }, { translateY: 0 }, { rotate: "0deg" }],
    overflow: "hidden",
    backgroundColor: "rgba(0,0,0,0)",
  },
  _Vector_2: {
    position: "absolute",
    color: "rgba(240, 158, 84, 1)",
    width: "auto",
    height: 15.02923583984375,
    borderRadius: 0,
    left: 0,
    right: 66.83363914489746,
    transform: [
      { translateX: 0 },
      { translateY: 47.073822021484375 },
      { rotate: "0deg" },
    ],
  },
  _Vector_4: {
    position: "absolute",
    color: "rgba(240, 158, 84, 1)",
    width: "auto",
    height: 41.68850326538086,
    borderRadius: 0,
    left: 3.4586181640625,
    right: 42.29415512084961,
    transform: [
      { translateX: 0 },
      { translateY: 25.31048583984375 },
      { rotate: "0deg" },
    ],
  },
  _Mask_group_3: {
    position: "absolute",
    width: 36.18620681762695,
    height: 41.68850326538086,
    transform: [
      { translateX: 3.4586181640625 },
      { translateY: 25.31048583984375 },
      { rotate: "0deg" },
    ],
    overflow: "hidden",
    backgroundColor: "rgba(0,0,0,0)",
  },
  _Vector_5: {},
  _Screenshot_2022_04_01_at_4_14_2: {
    position: "absolute",
    width: 64.40190124511719,
    height: 115.63843536376953,
    borderRadius: 0,
    opacity: 0.30000001192092896,
    left: 51.6871337890625,
    right: "auto",
    top: -36.42987060546875,
    bottom: "auto",
    transform: [
      { translateX: 0 },
      { translateY: 0 },
      { rotate: "60.0000050490214deg" },
    ],
    backgroundColor: "rgba(0,0,0,0)",
  },
  _Group_74: {
    position: "absolute",
    width: 39.644309997558594,
    height: 41.70412063598633,
    transform: [
      { translateX: 26 },
      { translateY: 34.332977294921875 },
      { rotate: "59.9999982188319deg" },
    ],
    overflow: "hidden",
    backgroundColor: "rgba(0,0,0,0)",
  },
  _Vector_6: {
    position: "absolute",
    color: "rgba(240, 158, 84, 1)",
    width: "auto",
    height: 41.70412063598633,
    borderRadius: 0,
    left: 0,
    right: 3.4618072509765625,
    transform: [
      { translateX: 0 },
      { translateY: 0 },
      { rotate: "-59.9999982188319deg" },
    ],
  },
  _Vector_7: {
    position: "absolute",
    color: "rgba(240, 158, 84, 1)",
    width: "auto",
    height: 15.008255004882812,
    borderRadius: 0,
    left: 31.1259765625,
    right: -6.6153564453125,
    transform: [
      { translateX: 0 },
      { translateY: -10.331817626953125 },
      { rotate: "-59.9999982188319deg" },
    ],
  },
});

const imageUrl_Screenshot_2022_04_01_at_4_14_2 =
  "https://sizze-figma-plugin-images-upload.s3.us-east-2.amazonaws.com/58be7c47c7d90544e787bed5db94e420";
const imageUrl_Screenshot_2022_04_01_at_4_14_1 =
  "https://sizze-figma-plugin-images-upload.s3.us-east-2.amazonaws.com/b54751ce943fe764ea1d4620b78a25dc";
