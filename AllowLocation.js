import React from "react";
import {
  StyleSheet,
  Text,
  View,
  Pressable,
  Button,
  Image,
  TouchableOpacity,
  TextInput,
} from "react-native";

export default function AllowLocation({ history }) {
  const [username, onChangeUsername] = React.useState("johndoe123");

  return (
    <View>
      <View style={styles.container}>
        <TouchableOpacity onPress={() => history.push("/Preferences")}>
          <Image
            style={styles.backArrow}
            source={require("./images/backArrow.jpg")}
          />
        </TouchableOpacity>
        <Image
          style={styles.longRectangle}
          source={require("./images/fullRectangle.png")}
        />
      </View>
      {/* <Image
        style={styles.shortRectangle}
        source={require("./images/shortRectangle.jpg")}
      /> */}
      <Image
        style={styles.locationSymbol}
        source={require("./images/locationsymbol.png")}
      />
      <Text style={styles.enablelocation}>Enable Location</Text>
      <Text style={styles.titleDescription}>
        We’ll only use your location to show nearby restaurants
      </Text>

      <TouchableOpacity
        style={styles.continue}
        onPress={() => history.push("/Landing")}
      >
        <Text style={styles.buttonText}>Continue</Text>
      </TouchableOpacity>
      <Text style={styles.skip}>Skip for now</Text>
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
    marginTop: 60,
    marginLeft: 35,

    height: 14,
    width: 310,
    borderRadius: 20,
  },
  backArrow: {
    marginTop: 50,
    marginLeft: 20,
    height: 25,
    width: 20,
  },
  enablelocation: {
    fontWeight: "bold",
    fontSize: 34,
    textAlign: "center",
    alignItems: "center",
    marginTop: 20,
  },
  titleDescription: {
    alignSelf: "center",
    textAlign: "center",
    marginTop: 15,
    color: "#A6A6A6",
    width: 250,
  },
  fullName: {
    marginLeft: 45,
    marginTop: 35,
    fontSize: 10,
    lineHeight: 22,
  },
  usernameInput: {
    alignSelf: "center",
    height: 56,
    width: 343,
    margin: 8,
    padding: 10,
    borderRadius: 40,
    backgroundColor: "white",
    paddingLeft: 25,
    borderColor: "#F58005",
    borderWidth: 1,
  },
  bottomLine: {
    marginLeft: 130,
    marginTop: 65,
    width: 140,
    height: 5,
  },
  continue: {
    marginLeft: 35,
    marginTop: 150,
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
  check: {
    marginTop: 30,
    marginLeft: -90,
    position: "absolute",
    zIndex: 10,
  },
  skip: {
    alignSelf: "center",
    marginTop: 30,
  },
  locationSymbol: {
    alignSelf: "center",
    marginTop: 120,
  },
});
