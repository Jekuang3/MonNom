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

const DietaryOptions = (props) => {
  if (props.isDietaryVisible) {
    return (
      <View>
        <View style={styles.flexContainer2}>
          <Text stye={styles.dietaryText}>Vegetarian</Text>
          <Checkbox style={styles.checkbox} />
        </View>
        <View style={styles.flexContainer2}>
          <Text>Vegan</Text>
          <Checkbox style={styles.checkbox} />
        </View>
        <View style={styles.flexContainer2}>
          <Text>Gluten-Free</Text>
          <Checkbox style={styles.checkbox} />
        </View>
      </View>
    );
  }
  return null;
};

export default DietaryOptions;

const styles = StyleSheet.create({
  flexContainer2: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 15,
  },
  checkbox: {
    alignSelf: "flex-end",
    width: 25,
    height: 25,
    borderColor: "#000000",
    borderRadius: 5,
    marginBottom: 10,
  },
  dietaryText: {
    marginTop: 40,
  },
});
