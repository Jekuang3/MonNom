import React from "react";
import {
  StyleSheet,
  Text,
  View,
  Pressable,
  Button,
  Image,
  TouchableOpacity,
} from "react-native";

export default function SignUp({ history }) {
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => history.push("/")}>
        <Image
          style={styles.backArrow}
          source={require("./images/backArrow.jpg")}
        />
        <Text style={styles.back}>Back</Text>
      </TouchableOpacity>

      <Text style={styles.getStarted}>Get Started</Text>
      <Text style={styles.titleDescription}>
        Connect with social media to create a new account!
      </Text>
      <TouchableOpacity
        style={styles.startGoogle}
        onPress={() => history.push("/SetUpProfile")}
      >
        <View style={{ display: "flex", flexDirection: "row" }}>
          <Image
            style={{ marginLeft: -12, marginRight: 17 }}
            source={require("./images/google.png")}
          />
          <Text style={styles.buttonText}>Continue with Google</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.startFacebook}
        onPress={() => history.push("/SetUpProfile")}
      >
        <View style={{ display: "flex", flexDirection: "row" }}>
          <Image
            style={{ marginLeft: 10, marginRight: 26 }}
            source={require("./images/facebook.png")}
          />
          <Text style={styles.buttonText}>Continue with Facebook</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.startApple}
        onPress={() => history.push("/SetUpProfile")}
      >
        <View style={{ display: "flex", flexDirection: "row" }}>
          <Image
            style={{ marginLeft: -20, marginRight: 20 }}
            source={require("./images/apple.png")}
          />
          <Text style={styles.buttonText}>Continue with Apple</Text>
        </View>
      </TouchableOpacity>

      <Image
        style={styles.bottomLine}
        source={require("./images/HomeIndicator.jpg")}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  flex: {
    flex: 1,
    flexDirection: "row",
  },
  back: {
    marginLeft: 40,
    marginTop: -20,
  },
  backArrow: {
    marginTop: 50,
    marginLeft: 18,
    height: 25,
    width: 20,
  },
  getStarted: {
    fontWeight: "bold",
    fontSize: 34,
    textAlign: "center",
    alignItems: "center",
    marginTop: 220,
  },
  titleDescription: {
    alignSelf: "center",
    textAlign: "center",
    marginTop: 15,
    color: "#A6A6A6",
    width: 250,
  },
  startGoogle: {
    alignItems: "center",
    justifyContent: "center",
    marginTop: 60,
    marginLeft: 30,
    width: 343,
    height: 56,
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 40,
    backgroundColor: "#4C8BF5",
  },
  buttonText: {
    fontSize: 16,
    lineHeight: 21,
    fontWeight: "bold",
    letterSpacing: 0.25,
    color: "white",
  },
  startFacebook: {
    alignItems: "center",
    justifyContent: "center",
    marginTop: 10,
    marginLeft: 30,
    width: 343,
    height: 56,
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 40,
    backgroundColor: "#4267B2",
  },

  loginbuttonText: {
    fontSize: 16,
    lineHeight: 21,
    fontWeight: "bold",
    letterSpacing: 0.25,
    color: "black",
  },
  startApple: {
    alignItems: "center",
    justifyContent: "center",
    marginTop: 10,
    marginLeft: 30,
    width: 343,
    height: 56,
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 40,
    backgroundColor: "#000000",
  },
  bottomLine: {
    marginLeft: 130,
    marginTop: 80,
    width: 140,
    height: 5,
  },
  logo: {
    // height: 20,
    // width: 20,
    marginRight: 20,
  },
});
