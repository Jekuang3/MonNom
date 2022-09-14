import React, { useState } from "react";
import {
  Text,
  StyleSheet,
  TouchableOpacity,
  View,
  Image,
  CheckBox,
} from "react-native";
import Checkbox from "./Checkbox.js";
import { Marker } from "react-native-maps";
import { Callout } from "react-native-maps";
import StarRating from "react-native-star-rating";

const MakeMarker = (props) => {
  return (
    <Marker
      coordinate={{ latitude: props.latitude, longitude: props.longitude }}
    >
      <Callout>
        <Image source={{ uri: props.image }} style={styles.photo} />
        <Text style={{ marginLeft: 10, fontWeight: "bold", fontSize: 15 }}>
          {props.name}
        </Text>
        <Text style={{ marginLeft: 10, fontSize: 12 }}>{props.category}</Text>
        <StarRating
          disabled={false}
          maxStars={5}
          rating={4}
          fullStarColor={"#F1C644"}
          containerStyle={{ width: 60, marginLeft: 10, marginTop: 6 }}
          starSize={20}
          emptyStarColor={"#D4D4D4"}
        />
      </Callout>
    </Marker>
  );
};

export default MakeMarker;

const styles = StyleSheet.create({
  flexContainer2: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    margin: 15,
  },
  checkbox: {
    alignSelf: "flex-end",
    width: 25,
    height: 25,
    borderColor: "#000000",
    borderRadius: 5,
  },
  photo: {
    width: 125,
    height: 100,
    margin: 10,
  },
});
