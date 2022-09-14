import { StatusBar } from "expo-status-bar";
import React from "react";
import {
  StyleSheet,
  Text,
  View,
  Pressable,
  Button,
  Image,
  TouchableOpacity,
  ImageBackground,
  Dimensions,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";

import axios from "axios";

// const getDataUsingAsyncAwaitGetCall = async () => {
//   try {
//     await axios.post("http://10.0.0.165:19003/restaurantQuery", {
//       city: "New York City",
//       state: "New York",
//     })
//     .then(response => console.log(response.data[5].long))
//   } catch (error) {
//     // handle error
//     alert("error");
//   }
// };

const getDataUsingAsyncAwaitGetCall = async () => {
  try {
    await axios
      .post("http://10.0.0.165:19003/restaurantQuery", {
        city: "Albany",
        state: "New York",
      })
      .then((response) => console.log(response));
  } catch (error) {
    // handle error
    alert("error");
  }
};

export default function Home({ history }) {
  return (
    <View style={styles.container}>
      <ImageBackground
        source={require("./images/monnom.png")}
        resizeMode="cover"
        style={styles.monnomimage}
      ></ImageBackground>

      <Text style={styles.Food4Me}>MonNom</Text>
      <Text style={styles.titleDescription}>Stress-free Restaurant Dining</Text>
      <TouchableOpacity
        style={styles.getStartedButton}
        onPress={() => history.push("/SignUp")}
        // onPress={getDataUsingAsyncAwaitGetCall}
      >
        <Text style={styles.buttonText}>Get Started</Text>
      </TouchableOpacity>
      <Pressable
        style={styles.loginButton}
        onPressIn={getDataUsingAsyncAwaitGetCall}
      >
        <Text style={styles.loginbuttonText}>Log In</Text>
      </Pressable>
      <Pressable style={styles.guestButton}>
        <Text style={styles.guestbuttonText}>Forgot Your Password?</Text>
      </Pressable>
      <Image
        style={styles.bottomLine}
        source={require("./images/homeindicator.png")}
      />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  monnomimage: {
    flex: 1,
    justifyContent: "center",
    width: Dimensions.get("screen").width,
    height: Dimensions.get("screen").height,
  },
  Food4Me: {
    fontWeight: "bold",
    fontSize: 60,
    textAlign: "center",
    alignItems: "center",
    marginTop: 150,
    color: "white",
  },
  titleDescription: {
    textAlign: "center",
    marginTop: 15,
    color: "white",
    fontSize: 20,
  },
  getStartedButton: {
    alignItems: "center",
    justifyContent: "center",
    marginTop: 240,
    marginLeft: 30,
    width: 343,
    height: 56,
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 40,
    backgroundColor: "#F58005",
  },
  buttonText: {
    fontSize: 16,
    lineHeight: 21,
    fontWeight: "bold",
    letterSpacing: 0.25,
    color: "white",
  },
  loginButton: {
    alignItems: "center",
    justifyContent: "center",
    marginTop: 10,
    marginLeft: 30,
    width: 343,
    height: 56,
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 40,
    backgroundColor: "#F2F2F2",
  },

  loginbuttonText: {
    fontSize: 16,
    lineHeight: 21,
    fontWeight: "bold",
    letterSpacing: 0.25,
    color: "black",
  },
  guestButton: {
    alignItems: "center",
    justifyContent: "center",
    marginTop: 10,
    marginLeft: 30,
    width: 343,
    height: 56,
  },
  bottomLine: {
    marginLeft: 110,
    marginTop: 5,
    width: 200,
    height: 30,
  },
  guestbuttonText: {
    color: "white",
  },
});
