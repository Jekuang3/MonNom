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
import Review from "./Review.js";

const RestaurantInfo = (props) => {
  console.log(props.location.state.name);
  let isOpen;
  let dollar;
  if (props.location.state.isOpen) {
    isOpen = (
      <View style={{ display: "flex", flexDirection: "row" }}>
        <Text style={{ fontWeight: "bold", marginLeft: 20, marginTop: 5 }}>
          Open •
        </Text>
        <Text style={{ marginTop: 5, marginLeft: 5 }}>
          {props.location.state.openTime} - {props.location.state.closeTime}
        </Text>
      </View>
    );
  } else {
    isOpen = (
      <Text style={{ fontWeight: "bold", marginLeft: 20, marginTop: 5 }}>
        Closed
      </Text>
    );
  }

  if (props.location.state.dollar == 1) {
    dollar = "$";
  } else if (props.location.state.dollar == 2) {
    dollar = "$$";
  } else if (props.location.state.dollar == 3) {
    dollar = "$$$";
  } else if (props.location.state.dollar == 4) {
    dollar = "$$$$";
  } else {
    dollar = "$$$$$";
  }

  return (
    <ScrollView>
      {/* <Carousel
        ref={(c) => {
          this._carousel = c;
        }}
        data={this.state.entries}
        renderItem={this._renderItem}
        sliderWidth={sliderWidth}
        itemWidth={itemWidth}
      /> */}
      <TouchableOpacity onPress={() => props.history.push("/Landing")}>
        <Image
          style={styles.backArrow}
          source={require("./images/whiteArrow.png")}
        />
      </TouchableOpacity>
      <Image
        style={styles.image}
        source={{
          uri: props.location.state.imageurl,
        }}
      />

      <View style={styles.flexContainer}>
        <Text style={styles.name}>{props.location.state.name}</Text>
        <Text style={styles.cuisine}>
          {props.location.state.cuisine} • {dollar}
        </Text>
      </View>
      <View style={{ marginLeft: 30 }}>
        <View style={{ display: "flex", flexDirection: "row" }}>
          <StarRating
            disabled={false}
            maxStars={5}
            rating={props.location.state.rating}
            fullStarColor={"#F1C644"}
            containerStyle={{
              width: 60,
              marginTop: 10,
              marginBottom: 10,
              marginLeft: -10,
            }}
            starSize={20}
            emptyStarColor={"#D4D4D4"}
          />
          <Text style={{ marginLeft: 40, marginTop: 11 }}>
            {props.location.state.numReviews}
          </Text>
        </View>
        <Text style={{ marginBottom: 10, marginLeft: -28 }}>{isOpen}</Text>
        <View style={{ display: "flex", flexDirection: "row" }}>
          <Image
            style={styles.location}
            source={require("./images/location.png")}
          />
          <Text style={{ marginLeft: 10, fontSize: 13, marginTop: 10 }}>
            {props.location.state.address}
          </Text>
          <Image style={styles.phone} source={require("./images/phone.png")} />
          <Text style={{ marginLeft: 10, fontSize: 13, marginTop: 10 }}>
            {props.location.state.phoneNumber}
          </Text>
        </View>
        <Text style={styles.menu}>Menu</Text>
      </View>
      <TouchableOpacity style={styles.continue} onPress={() => {}}>
        <Text style={styles.buttonText}>See Full Menu</Text>
      </TouchableOpacity>
      <Text style={styles.reviewLabel}>Reviews</Text>
      <TouchableOpacity style={styles.review} onPress={() => {}}>
        <Text style={styles.reviewText}>Write a Review</Text>
      </TouchableOpacity>
      <View style={styles.flexContainer1}>
        <TouchableOpacity style={styles.filterSort} onPress={() => {}}>
          <Text style={styles.sort}>Search</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.filterSort} onPress={() => {}}>
          <Text style={styles.sort}>Sort</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.filterSort} onPress={() => {}}>
          <Text style={styles.sort}>Egg</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.filterSort} onPress={() => {}}>
          <Text style={styles.sort}>Dairy</Text>
        </TouchableOpacity>
        {/* <TouchableOpacity style={styles.filterSort} onPress={() => {}}>
          <Text style={styles.sort}>Vegan</Text>
        </TouchableOpacity> */}
      </View>
      <Review
        profilepic="https://www.teachaway.com/sites/default/files/profile_picture.jpg"
        name="John Doe"
        rating={4}
        numReviews={3}
        reviewDate={2}
        reviewText="Wow found a gem. Went here with a friend absolutely delicious food and great area. We sat on the balcony and enjoyed the Florida night with some drinks and some delicious seafood our server Juan was extremely nice and attentive to what we needed."
        reviewImage1="https://chefjet.com/wp-content/uploads/2015/11/entree-salad.jpg"
        reviewImage2="https://nwatravelguide.com/wp-content/uploads/2016/11/italian-food-from-Bocca.jpg"
      />
      <Review
        profilepic="https://www.teachaway.com/sites/default/files/profile_picture.jpg"
        name="John Doe"
        rating={4}
        numReviews={3}
        reviewDate={2}
        reviewText="Wow found a gem. Went here with a friend absolutely delicious food and great area. We sat on the balcony and enjoyed the Florida night with some drinks and some delicious seafood our server Juan was extremely nice and attentive to what we needed."
        reviewImage1="https://chefjet.com/wp-content/uploads/2015/11/entree-salad.jpg"
        reviewImage2="https://nwatravelguide.com/wp-content/uploads/2016/11/italian-food-from-Bocca.jpg"
      />
      <Review
        profilepic="https://www.teachaway.com/sites/default/files/profile_picture.jpg"
        name="John Doe"
        rating={4}
        numReviews={3}
        reviewDate={2}
        reviewText="Wow found a gem. Went here with a friend absolutely delicious food and great area. We sat on the balcony and enjoyed the Florida night with some drinks and some delicious seafood our server Juan was extremely nice and attentive to what we needed."
        reviewImage1="https://chefjet.com/wp-content/uploads/2015/11/entree-salad.jpg"
        reviewImage2="https://nwatravelguide.com/wp-content/uploads/2016/11/italian-food-from-Bocca.jpg"
      />
    </ScrollView>
  );
};

export default RestaurantInfo;

const styles = StyleSheet.create({
  image: {
    // margin: 20,
    width: "100%",
    height: 290,
    marginTop: -80,
    zIndex: -50,
    // borderRadius: 20,
  },
  name: {
    marginLeft: 20,
    fontSize: 25,
    fontWeight: "bold",
  },
  flexContainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 30,
    marginRight: 10,
  },
  flexContainer1: {
    display: "flex",
    flexDirection: "row",
    marginTop: 30,
    marginLeft: 10,
  },
  distance: {
    marginRight: 22,
  },
  cuisine: {
    marginLeft: 20,
    marginTop: 5,
    marginRight: 10,
  },
  backArrow: {
    height: 20,
    width: 20,
    zIndex: 100,
    marginTop: 40,
    marginLeft: 10,
  },
  continue: {
    marginLeft: 35,
    marginTop: 20,
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
  review: {
    marginLeft: 35,
    marginTop: 20,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 40,
    height: 56,
    width: 343,
    backgroundColor: "white",
    color: "white",
    borderWidth: 1,
    borderColor: "#F58005",
  },
  reviewText: {
    fontSize: 16,
    lineHeight: 21,
    fontWeight: "bold",
    letterSpacing: 0.25,
    color: "#F58005",
  },
  filterSort: {
    width: 80,
    height: 40,
    marginTop: 20,
    marginLeft: 10,
    borderWidth: 2,
    borderColor: "#CCCCCC",
    borderRadius: 20,
    alignItems: "center",
  },
  sort: {
    fontSize: 12,
    // marginLeft: 18,
    marginTop: 10,
    color: "#CCCCCC",
    fontWeight: "bold",
  },
  menu: {
    fontSize: 20,
    fontWeight: "bold",
    marginTop: 50,
  },
  reviewLabel: {
    marginLeft: 30,
    marginTop: 50,
    fontWeight: "bold",
    fontSize: 20,
  },
  location: {
    marginLeft: -8,
    marginTop: 10,
  },
  phone: {
    marginLeft: 60,
    marginTop: 10,
  },
});
