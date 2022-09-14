import React, { useState } from "react";
import {
  Text,
  StyleSheet,
  TouchableOpacity,
  View,
  Image,
  ScrollView,
} from "react-native";
import StarRating from "react-native-star-rating";
import Carousel from "react-native-snap-carousel";

const Review = (props) => {
  return (
    <View style={styles.container}>
      <View style={styles.flexContainer}>
        <Image
          style={styles.profilepic}
          source={{
            uri: props.profilepic,
          }}
        />
        <View style={styles.columnflexcontainer}>
          <Text style={{ marginLeft: 10, fontWeight: "bold", fontSize: 15 }}>
            {props.name}
          </Text>
          <View style={{ display: "flex", flexDirection: "row" }}>
            <Text style={{ marginLeft: 10, fontSize: 12 }}>
              {props.numReviews} reviews
            </Text>
            <TouchableOpacity>
              <Image
                style={styles.threedots}
                source={require("./images/threedots.png")}
              />
            </TouchableOpacity>
          </View>
        </View>
      </View>
      <View style={{ display: "flex", flex: 1, flexDirection: "row" }}>
        <StarRating
          disabled={false}
          maxStars={5}
          rating={props.rating}
          fullStarColor={"#F1C644"}
          containerStyle={{ width: 60, marginTop: 10, marginBottom: 10 }}
          starSize={24}
          emptyStarColor={"#D4D4D4"}
        />
        <Text style={{ marginLeft: 60, marginTop: 17, fontSize: 11 }}>
          {props.reviewDate} days ago
        </Text>
      </View>
      <Text>{props.reviewText}</Text>
      <View style={styles.flexContainer}>
        <Image
          style={styles.reviewpic}
          source={{
            uri: props.reviewImage1,
          }}
        />
        <Image
          style={styles.reviewpic}
          source={{
            uri: props.reviewImage2,
          }}
        />
      </View>
    </View>
  );
};

export default Review;

const styles = StyleSheet.create({
  container: {
    margin: 30,
  },
  flexContainer: {
    display: "flex",
    flexDirection: "row",
  },
  profilepic: {
    height: 50,
    width: 50,
  },
  reviewpic: {
    marginTop: 15,
    height: 170,
    width: 170,
    marginRight: 15,
  },
  columnflexcontainer: {
    display: "flex",
    flexDirection: "column",
  },
  threedots: {
    marginLeft: 210,
  },
});
