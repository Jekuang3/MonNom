import React, { useState } from "react";
import { Text, StyleSheet, TouchableOpacity, View, Image } from "react-native";
import StarRating from "react-native-star-rating";

const Restaurant = (props) => {
  let isOpen;
  let dollar;
  if (props.isOpen) {
    isOpen = (
      <View style={{ display: "flex", flexDirection: "row" }}>
        <Text style={{ fontWeight: "bold", marginLeft: 20, marginTop: 5 }}>
          Open •
        </Text>
        <Text style={{ marginTop: 5 }}> Closes at {props.closeTime}</Text>
      </View>
    );
  } else {
    isOpen = (
      <Text style={{ fontWeight: "bold", marginLeft: 20, marginTop: 5 }}>
        Closed
      </Text>
    );
  }

  if (props.dollar == 1) {
    dollar = "$";
  } else if (props.dollar == 2) {
    dollar = "$$";
  } else if (props.dollar == 3) {
    dollar = "$$$";
  } else if (props.dollar == 4) {
    dollar = "$$$$";
  } else {
    dollar = "$$$$$";
  }

  return (
    <View style={{ marginTop: 30 }}>
      <TouchableOpacity
        onPress={() =>
          props.history.push({
            pathname: "/RestaurantInfo",
            state: {
              name: props.name,
              distance: "4.1",
              isOpen: true,
              openTime: "9AM",
              closeTime: "7PM",
              rating: props.rating,
              numReviews: 46,
              cuisine: "American",
              dollar: 1,
              imageurl:
                "https://images2.houstonpress.com/imager/u/slideshow/11481555/_jennduncan-2_1_.jpg",
              history: props.history,
              address: "490 Mandalay Ave Ste 1,\nClearwater, FL 33767",
              phoneNumber: "(111) 111-1111",
            },
          })
        }
      >
        <View style={styles.flexContainer}>
          <View
            style={{
              height: 30,
              width: 170,
              backgroundColor: "white",
              marginLeft: 30,
              borderRadius: 10,
            }}
          >
            <Text style={styles.category}>{props.category}</Text>
          </View>
          <Image
            style={styles.image}
            source={{
              uri: props.imageurl,
            }}
          />
        </View>
      </TouchableOpacity>
      <View style={styles.flexContainer}>
        <Text style={styles.name}>{props.name}</Text>
        <Text style={styles.distance}>{props.distance} mi. away</Text>
      </View>
      <StarRating
        disabled={false}
        maxStars={5}
        rating={props.rating}
        fullStarColor={"#F1C644"}
        containerStyle={{ width: 60, marginLeft: 20, marginTop: 10 }}
        starSize={20}
        emptyStarColor={"#D4D4D4"}
      />
      <Text style={styles.cuisine}>
        {props.cuisine} • {dollar}
      </Text>
      {isOpen}
    </View>
  );
};

export default Restaurant;

const styles = StyleSheet.create({
  image: {
    margin: 20,
    width: 370,
    height: 200,
    borderRadius: 20,
    marginTop: -10,
    marginLeft: -390,
    marginRight: 25,
    zIndex: -1,
  },
  name: {
    marginLeft: 20,
    fontSize: 18,
    fontWeight: "bold",
  },
  flexContainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  distance: {
    marginRight: 22,
  },
  cuisine: {
    marginLeft: 20,
    marginTop: 5,
  },
  // flexContainer: {
  //   display: "
  // },
  category: {
    // marginBottom: -650,
    alignSelf: "center",
    marginTop: 5,

    // marginLeft: 30,
  },
});
