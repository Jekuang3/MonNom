import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Pressable,
  Button,
  Image,
  TouchableOpacity,
  TextInput,
  ScrollView,
} from "react-native";
import { SearchBar } from "react-native-elements";
import { Restriction } from "./Restriction.js";

export default function Preferences({ history }) {
  const [username, onChangeUsername] = React.useState("johndoe123");

  return (
    <View>
      <ScrollView>
        <View style={styles.container}>
          <TouchableOpacity onPress={() => history.push("/Username")}>
            <Image
              style={styles.backArrow}
              source={require("./images/backArrow.jpg")}
            />
          </TouchableOpacity>
          <Image
            style={styles.longRectangle}
            source={require("./images/longRectangle.jpg")}
          />
        </View>
        <Image
          style={styles.shortRectangle}
          source={require("./images/mediumRectangle.jpg")}
        />
        <Text style={styles.selectRestrictions}>Select Your Restrictions</Text>
        <SearchBar
          placeholder="Search"
          inputContainerStyle={{ backgroundColor: "white" }}
          leftIconContainerStyle={{ backgroundColor: "white" }}
          inputStyle={{ backgroundColor: "white" }}
          containerStyle={{
            backgroundColor: "white",
            justifyContent: "space-around",
            width: 320,
            height: 50,
            marginLeft: 40,
            marginTop: 20,
            borderTopWidth: 1,
            borderLeftWidth: 1,
            borderRightWidth: 1,
            borderBottomWidth: 1,
            borderRadius: 10,
            borderLeftColor: "#D8D8D8",
            borderRightColor: "#D8D8D8",
            borderBottomColor: "#D8D8D8",
            borderTopColor: "#D8D8D8",
          }}
        />

        <View style={styles.selection}>
          <Restriction option="Dairy" />
          <Restriction option="Eggs" />
          <Restriction option="Peanuts" />
          <Restriction option="Fish" />
          <Restriction option="Wheat" />
          <Restriction option="Soybean" />
          <Restriction option="Treenut" />
          <Restriction option="Gluten" />
          <Restriction option="Corn" />
          <Restriction option="Soy" />
          <Restriction option="Sesame" />
          <Restriction option="Lupin" />
          <Restriction option="Barley" />
          <Restriction option="Vegan" />
        </View>

        <Pressable style={styles.moreButton}>
          <Text style={styles.morebuttonText}>More</Text>
        </Pressable>
      </ScrollView>
      <TouchableOpacity
        style={styles.continue}
        onPress={() => history.push("/AllowLocation")}
      >
        <Text style={styles.buttonText}>Continue</Text>
      </TouchableOpacity>
      <Pressable style={styles.skipButton}>
        <Text style={styles.skipbuttonText}>Skip for now</Text>
      </Pressable>
      <Image
        style={styles.bottomLine}
        source={require("./images/HomeIndicator.jpg")}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
  },
  longRectangle: {
    marginTop: 50,
    marginLeft: 35,

    height: 14,
    width: 310,
    borderRadius: 20,
  },
  shortRectangle: {
    marginTop: -20,
    marginLeft: 75,
    marginRight: 40,
    borderRadius: 20,
  },
  backArrow: {
    marginTop: 45,
    marginLeft: 20,
    height: 25,
    width: 20,
  },
  selectRestrictions: {
    fontWeight: "bold",
    fontSize: 28,
    textAlign: "center",
    alignItems: "center",
    marginTop: 30,
  },
  selection: {
    flex: 1,
    flexDirection: "row",
    flexWrap: "wrap",
    marginTop: 20,
    marginLeft: 20,
    marginRight: 20,
  },
  bottomLine: {
    marginLeft: 130,
    marginTop: 19,
    width: 140,
    height: 5,
  },

  continue: {
    marginLeft: 35,
    marginTop: 3,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 40,
    height: 56,
    width: 343,
    backgroundColor: "#F58005",
    color: "white",
  },
  buttonText: {
    fontSize: 16,
    lineHeight: 21,
    fontWeight: "bold",
    letterSpacing: 0.25,
    color: "white",
  },
  moreButton: {
    alignItems: "center",
    justifyContent: "center",
    // marginTop: 10,
    marginLeft: 30,
    width: 343,
    height: 56,
  },
  skipButton: {
    alignItems: "center",
    marginTop: 10,
  },
});
