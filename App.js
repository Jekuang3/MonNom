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
} from "react-native";

import Home from "./Home";
import SignUp from "./SignUp.js";
import SetUpProfile from "./SetUpProfile";
import Username from "./Username";
import Preferences from "./Preferences";
import Landing from "./Landing";
import AllowLocation from "./AllowLocation";
import RestaurantInfo from "./RestaurantInfo";

var NativeRouter = require("react-router-native").NativeRouter;
var Route = require("react-router-native").Route;
var Switch = require("react-router-native").Switch;

export default function Main() {
  return (
    <NativeRouter>
      <View style={styles.container}>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/SignUp" component={SignUp} />
          <Route exact path="/SetUpProfile" component={SetUpProfile} />
          <Route exact path="/Username" component={Username} />
          <Route exact path="/Preferences" component={Preferences} />
          <Route exact path="/AllowLocation" component={AllowLocation} />
          <Route exact path="/Landing" component={Landing} />
          <Route exact path="/RestaurantInfo" component={RestaurantInfo} />
        </Switch>
      </View>
    </NativeRouter>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
