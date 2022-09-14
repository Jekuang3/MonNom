import React, { useState } from "react";
import { Text, StyleSheet, TouchableOpacity, View, Image } from "react-native";

export function Restriction(props) {
  const [pickoption, setpickOption] = useState(false);

  if (!pickoption) {
    return (
      <View>
        <TouchableOpacity
          style={styles.restrictionOptionNotPicked}
          onPress={() => {
            setpickOption(!pickoption);
          }}
        >
          {/* <Image style={styles.add} source={require("./images/check.jpg")} /> */}
          <View style={styles.flex}>
            <Text style={styles.text}>+ </Text>
            <Text style={styles.text}> {props.option}</Text>
          </View>
        </TouchableOpacity>
      </View>
    );
  }
  return (
    <View>
      <TouchableOpacity style={styles.restrictionOptionPicked}>
        {/* <Image style={styles.check} source={require("./images/check.jpg")} /> */}
        {/* <Text style={styles.text}>+</Text> */}
        <Text style={styles.textcheck}>{props.option}</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  restrictionOptionNotPicked: {
    margin: 9,
    borderRadius: 24,
    borderWidth: 1,
    height: 50,
    alignSelf: "flex-start",
    paddingLeft: 10,
    paddingRight: 10,
    backgroundColor: "white",
    borderColor: "#CCCCCC",
  },
  restrictionOptionPicked: {
    margin: 9,
    borderRadius: 24,
    borderWidth: 1,
    height: 50,
    alignSelf: "flex-start",
    paddingLeft: 10,
    paddingRight: 10,
    backgroundColor: "#F58005",
    borderColor: "#CCCCCC",
  },
  text: {
    marginTop: 12,
    textAlign: "center",
    fontSize: 16,
    lineHeight: 21,
    borderColor: "#CCCCCC",
    letterSpacing: 0.25,
    color: "black",
  },
  textcheck: {
    marginTop: 12,
    textAlign: "center",
    fontSize: 16,
    lineHeight: 21,
    borderColor: "#CCCCCC",
    letterSpacing: 0.25,
    color: "white",
  },
  check: {
    height: 20,
    width: 20,
    // backgroundColor: "#D8D8D8",
  },
  flex: {
    flexDirection: "row",
    alignItems: "flex-start",
  },
});
