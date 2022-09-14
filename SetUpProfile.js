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
  ScrollView,
} from "react-native";

export default function SetUpProfile({ history }) {
  const [name, onChangeName] = React.useState("John Doe");
  const [email, onChangeEmail] = React.useState("johndoe@gmail.com");

  return (
    <View>
      <View style={styles.container}>
        <TouchableOpacity onPress={() => history.push("/SignUp")}>
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
      {/* <Image
        style={styles.shortRectangle}
        source={require("./images/shortRectangle.jpg")}
      /> */}
      <Text style={styles.confirmDetails}>Confirm Details</Text>
      <Text style={styles.titleDescription}>
        Verify your full name and email below.
      </Text>
      <Text style={styles.fullName}>FULL NAME</Text>
      <TextInput
        style={styles.nameInput}
        onChangeText={onChangeName}
        value={name}
      />
      <Text style={styles.email}>EMAIL</Text>
      <TextInput
        style={styles.emailInput}
        onChangeText={onChangeEmail}
        value={email}
      />
      <TouchableOpacity
        style={styles.continue}
        onPress={() => history.push("/Username")}
      >
        <Text style={styles.buttonText}>Continue</Text>
      </TouchableOpacity>
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
  shortRectangle: {
    marginTop: 60,
    marginLeft: 75,
    marginRight: 40,
    borderRadius: 20,
  },
  backArrow: {
    marginTop: 50,
    marginLeft: 20,
    height: 25,
    width: 20,
  },
  confirmDetails: {
    fontWeight: "bold",
    fontSize: 34,
    textAlign: "center",
    alignItems: "center",
    marginTop: 160,
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
  nameInput: {
    alignSelf: "center",
    height: 56,
    width: 343,
    margin: 8,
    padding: 10,
    borderRadius: 40,
    backgroundColor: "#F2F2F2",
    paddingLeft: 25,
  },
  emailInput: {
    alignSelf: "center",
    height: 56,
    width: 343,
    margin: 8,
    padding: 10,
    borderRadius: 40,
    backgroundColor: "#F2F2F2",
    paddingLeft: 25,
  },
  email: {
    marginLeft: 45,
    marginTop: 5,
    fontSize: 10,
    lineHeight: 22,
  },
  bottomLine: {
    marginLeft: 130,
    marginTop: 65,
    width: 140,
    height: 5,
  },
  continue: {
    marginLeft: 35,
    marginTop: 110,
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
});
