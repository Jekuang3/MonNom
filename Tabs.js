import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Ionicons from "react-native-vector-icons/Ionicons";
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
import Home from "./Home";
import Landing from "./Landing";
import SignUp from "./SignUp";

const Tab = createBottomTabNavigator();

const Tabs = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarStyle: { position: "absolute", height: 50, paddingTop: 10 },
      }}
    >
      <Tab.Screen
        name=" "
        component={Home}
        options={{
          tabBarIcon: ({ focused }) => (
            <View
              style={{
                alignItems: "center",
                justifyContent: "center",
                top: 10,
                width: 60,
              }}
            >
              <Image
                source={require("./images/search.jpg")}
                resizeMode="contain"
                style={{
                  width: 40,
                  height: 25,
                  marginBottom: 6,
                }}
              />
              <Text
                style={{ fontSize: 12, fontWeight: "bold", color: "#F58005" }}
              >
                Search
              </Text>
            </View>
          ),
          tabBarShowLabel: false,
        }}
      ></Tab.Screen>
      <Tab.Screen
        name=" ."
        component={Home}
        options={{
          tabBarIcon: ({ focused }) => (
            <View
              style={{
                alignItems: "center",
                justifyContent: "center",
                top: 10,
                width: 60,
              }}
            >
              <Image
                source={require("./images/save.jpg")}
                resizeMode="contain"
                style={{
                  width: 40,
                  height: 25,
                  marginBottom: 6,
                  // tintColor: focused ? "#e32f45" : "#748c94",
                }}
              />
              <Text style={{ fontSize: 12, color: "#B9BCBE" }}>Saved</Text>
            </View>
          ),
          tabBarShowLabel: false,
        }}
      ></Tab.Screen>
      <Tab.Screen
        name="Account"
        component={Home}
        options={{
          tabBarIcon: ({ focused }) => (
            <View
              style={{
                alignItems: "center",
                justifyContent: "center",
                top: 10,
                width: 70,
              }}
            >
              <Image
                source={require("./images/account.png")}
                resizeMode="contain"
                style={{
                  width: 30,
                  height: 25,
                  marginBottom: 6,
                  // tintColor: focused ? "#e32f45" : "#748c94",
                }}
              />
              <Text style={{ fontSize: 12, color: "#B9BCBE" }}>Account</Text>
            </View>
          ),
          tabBarShowLabel: false,
        }}
      ></Tab.Screen>
    </Tab.Navigator>
  );
};

export default Tabs;
