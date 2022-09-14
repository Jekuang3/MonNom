import * as React from "react";
import MapView from "react-native-maps";
import { Marker } from "react-native-maps";
import { Callout } from "react-native-maps";
import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  ScrollView,
  Image,
  TouchableOpacity,
  TouchableHighlight,
  Animated,
  Button,
  Pressable,
} from "react-native";
import { useState } from "react";
import Modal from "react-native-modal";
import { NavigationContainer } from "@react-navigation/native";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import Home from "./Home.js";
import Tabs from "./Tabs.js";
import Restaurant from "./Restaurant.js";
import { GooglePlacesAutocomplete } from "react-native-google-places-autocomplete";
import DietaryOptions from "./DietaryOptions.js";
import AllergyOptions from "./AllergyOptions.js";
import { CheckBox } from "react-native-elements";
import Checkbox from "./Checkbox.js";
import MakeMarker from "./MakeMarker.js";
import axios from "axios";

const Tab = createMaterialBottomTabNavigator();

export default function Landing({ history }) {
  const [isModalVisible, setModalVisible] = useState(false);
  const [isOpeningScreenModalVisible, setOpeningScreenModalVisible] =
    useState(true);
  const [isDietaryVisible, setDietaryVisible] = useState(false);
  const [isAllergyVisible, setAllergyVisible] = useState(false);
  const [isArrow, setArrow] = useState(true);
  const [restaurantList, setRestaurantList] = useState([]);
  const [pickedAllergies, setPickedAllergies] = useState([]);

  const [region, setRegion] = useState({
    latitude: 40.7808,
    longitude: -73.9772,
    latitudeDelta: 0.09,
    longitudeDelta: 0.035,
  });

  const coordinates = [
    { name: "1", latitude: 37.8025259, longitude: -122.4351431 },
    // {name: '2', latitude: 37.8025259, longitude: -122.4351431}
  ];
  const [markers, setmarkersList] = useState([]);

  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };

  const toggleDietary = () => {
    setDietaryVisible(!isDietaryVisible);
  };

  const toggleArrow = () => {
    setArrow(!isArrow);
  };

  const toggleAllergies = () => {
    setAllergyVisible(!isAllergyVisible);
  };
  const toggleOpeningScreenModal = () => {
    setOpeningScreenModalVisible(!isOpeningScreenModalVisible);
  };

  const getDataUsingAsyncAwaitGetCall = async (cityOption) => {
    const allergiesObject = {};

    for (var i = 0; i < pickedAllergies.length; i++) {
      allergiesObject[pickedAllergies[i]] = "false";
    }

    console.log("length");
    allergiesObject["city"] = cityOption;
    allergiesObject["state"] = "New York";
    console.log(allergiesObject);

    // const first = {
    //   city: cityOption,
    //   state: "New York",
    // };

    try {
      await axios
        .post("http://10.0.0.165:19003/restaurantQuery", allergiesObject)
        .then((response) => setRestaurantList(response.data));
      // .then((response) => console.log(response));
    } catch (error) {
      // handle error
      alert("error");
    }
  };

  return (
    <View style={styles.container1}>
      <Modal
        isVisible={isOpeningScreenModalVisible}
        // onBackdropPress={toggleModal}
        style={styles.openingScreenModal}
      >
        <Text style={styles.welcome}>Welcome to MonNom!</Text>
        <Text style={styles.description}>
          We do our best to list only accurate restaurant information. However,
          menu items and processes are subject to change, so we highly recommend
          verifying with venues before visiting to ensure a safe dining
          experience!
        </Text>
        <TouchableOpacity
          style={styles.understandButton}
          onPress={toggleOpeningScreenModal}
        >
          <Text style={styles.understand}>I understand</Text>
        </TouchableOpacity>
      </Modal>
      <GooglePlacesAutocomplete
        query={{
          key: "AIzaSyAoEnQ7VOycVMUx4zwgd_JxUK8S0j2ecKQ",
          language: "en",
          type: ["(cities)"],
          components: "country:us",
          radius: 30000,
          location: `${region.latitude}, ${region.longitude}`,
        }}
        placeholder="Search"
        fetchDetails={true}
        GooglePlacesSearchQuery={{
          rankby: "distance",
        }}
        onPress={(data, details = null) => {
          // 'details' is provided when fetchDetails = true
          getDataUsingAsyncAwaitGetCall(details.name);
          console.log(details.name);
          setRegion({
            latitude: details.geometry.location.lat,
            longitude: details.geometry.location.lng,
            latitudeDelta: 0.09,
            longitudeDelta: 0.035,
          });
        }}
        styles={{
          container: {
            flex: 1,
            position: "absolute",
            width: "85%",

            zIndex: 1,
            marginTop: 30,
            marginLeft: 25,
          },
          listView: { backgroundColor: "white" },
        }}
      />
      <ScrollView>
        <MapView
          style={styles.map}
          region={{
            latitude: region.latitude,
            longitude: region.longitude,
            latitudeDelta: region.latitudeDelta,
            longitudeDelta: region.longitudeDelta,
          }}
        >
          {restaurantList.map((val, key) => {
            return (
              <MakeMarker
                latitude={val.lat}
                longitude={val.long}
                image="https://www.deputy.com/uploads/2018/10/The-Most-Popular-Menu-Items-That-You-should-Consider-Adding-to-Your-Restaurant_Content-image1-min-1024x569.png"
                name={val.restaurant_name}
                category="Breakfast & Brunch"
              />
            );
          })}
        </MapView>
        <Image
          style={styles.mapRectangle}
          source={require("./images/mapRectangle.jpg")}
        />
        <View style={styles.flexContainer}>
          <TouchableOpacity style={styles.filterGeneral} onPress={() => {}}>
            <Image
              style={styles.filterSymbol}
              source={require("./images/filter3.png")}
            />
          </TouchableOpacity>
          <TouchableOpacity style={styles.filterSort} onPress={() => {}}>
            <View style={{ display: "flex", flexDirection: "row" }}>
              <Text
                style={{
                  fontSize: 14,
                  marginLeft: 12,
                  marginTop: 10,
                  color: "#CCCCCC",
                }}
              >
                Sort
              </Text>
              <Image
                style={{
                  marginTop: 13,
                  height: "40%",
                  width: "20%",
                  marginLeft: 7,
                }}
                source={require("./images/filterdownArrow.png")}
              />
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.filterRestriction}
            onPress={toggleModal}
          >
            <View style={{ display: "flex", flexDirection: "row" }}>
              <Text style={styles.restriction}>Restrictions</Text>
              <Image
                style={{
                  marginTop: 15,
                  height: "33%",
                  width: "13%",
                  marginLeft: 6,
                }}
                source={require("./images/orangeArrow.png")}
              />
            </View>
          </TouchableOpacity>
          <TouchableOpacity style={styles.filterOpen} onPress={toggleModal}>
            <Text style={styles.open}>Open Now</Text>
          </TouchableOpacity>
        </View>
        <Text style={styles.recommended}>Recommended</Text>
        <Text style={styles.preferences}>
          Based on your profile and preferences
        </Text>

        {restaurantList.map((val, key) => {
          return (
            <Restaurant
              name={val.restaurant_name}
              distance="4.1"
              isOpen={true}
              rating={val.restaurant_rating}
              cuisine="American"
              dollar={1}
              closeTime="9PM"
              imageurl="https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fstatic.onecms.io%2Fwp-content%2Fuploads%2Fsites%2F9%2F2020%2F12%2F30%2F2021-restaurant-openings-etta-FT-BLOG1220-2.jpg"
              history={history}
              category="Dairy-Free Friendly"
            />
          );
        })}
      </ScrollView>
      <NavigationContainer>
        <Tabs />
      </NavigationContainer>
      <Image
        style={styles.bottomLine}
        source={require("./images/HomeIndicator.jpg")}
      />

      <View>
        <Modal
          isVisible={isModalVisible}
          onBackdropPress={toggleModal}
          style={styles.model}
        >
          <ScrollView>
            <View
              style={{
                flex: 1,
                flexDirection: "row",
                justifyContent: "space-around",
                margin: 15,
              }}
            >
              <Button
                title="Close"
                color="#000000"
                style={styles.close}
                onPress={toggleModal}
              />
              <TouchableOpacity
                title="Restrictions"
                style={styles.restrictions}
                onPress={toggleModal}
                color="#000000"
              >
                <Text style={styles.restrictionText}>Restrictions</Text>
              </TouchableOpacity>
              <Button
                title="Reset"
                style={styles.reset}
                onPress={toggleModal}
                color="#000000"
              />
            </View>
            <View style={styles.selection}>
              <Text style={{ fontWeight: "bold" }}>Sort by</Text>
              <View style={styles.flexContainer2}>
                <Text style={styles.sortText}>Recommended</Text>
                <Checkbox />
              </View>
              <View style={styles.flexContainer2}>
                <Text style={styles.sortText}>Distance</Text>
                <Checkbox />
              </View>
              <View style={styles.flexContainer2}>
                <Text style={styles.sortText}>Rating</Text>
                <Checkbox />
              </View>
              <View style={styles.flexContainer2}>
                <Text style={styles.sortText}>Most Reviewed</Text>
                <Checkbox />
              </View>
              <View style={styles.flexContainer2}>
                <Text style={{ fontWeight: "bold" }}>Open Now</Text>
                <Checkbox />
              </View>
              <Text style={{ fontWeight: "bold" }}>Price</Text>
              <View style={styles.flexContainer3}>
                <Pressable style={styles.dollarButton}>
                  <Text>$</Text>
                </Pressable>
                <Pressable style={styles.dollarButton}>
                  <Text>$$</Text>
                </Pressable>
                <Pressable style={styles.dollarButton}>
                  <Text>$$$</Text>
                </Pressable>
                <Pressable style={styles.dollarButton}>
                  <Text>$$$$</Text>
                </Pressable>
              </View>
              <View style={styles.flexContainer2}>
                <Text style={{ fontWeight: "bold" }}>Dietary</Text>
                <TouchableOpacity
                  onPress={toggleDietary}
                  isVisible={isDietaryVisible}
                >
                  <Image
                    style={{ marginRight: 14 }}
                    source={require("./images/downArrow.png")}
                  />
                </TouchableOpacity>
              </View>
              <DietaryOptions isDietaryVisible={isDietaryVisible} />
            </View>
            <View style={styles.flexContainer2}>
              <Text style={{ fontWeight: "bold", marginLeft: 35 }}>
                Allergy/Sensitivity
              </Text>
              <TouchableOpacity
                onPress={toggleAllergies}
                isVisible={isAllergyVisible}
              >
                <Image
                  style={{ marginRight: 48 }}
                  source={require("./images/downArrow.png")}
                  // isVisible={isAllergyVisible}
                />
              </TouchableOpacity>
            </View>
            <AllergyOptions
              isAllergyVisible={isAllergyVisible}
              setPickedAllergies={setPickedAllergies}
            />
          </ScrollView>
          <TouchableOpacity style={styles.applyButton} onPress={toggleModal}>
            <Text style={styles.apply}>Apply</Text>
          </TouchableOpacity>
        </Modal>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container1: {
    // backgroundColor: "#fff",
    flex: 1,
    zIndex: -50,
    // alignItems: "center",
    // justifyContent: "center",
  },
  map: {
    width: Dimensions.get("window").width,
    height: 400,

    // height: Dimensions.get("window").height,
  },
  mapRectangle: {
    alignSelf: "center",
    height: 8,
    width: 60,
    marginTop: 20,
    borderRadius: 10,
  },
  filterGeneral: {
    width: 70,
    height: 40,
    marginTop: 20,
    marginLeft: 20,
    borderWidth: 2,
    borderColor: "#CCCCCC",
    borderRadius: 20,
  },
  filterSymbol: {
    width: 20,
    height: 25,
    marginLeft: 20,
    marginTop: 5,
    // alignSelf: "flex-start",
  },
  filterSort: {
    width: 80,
    height: 40,
    marginTop: 20,
    marginLeft: 10,
    borderWidth: 2,
    borderColor: "#CCCCCC",
    borderRadius: 20,
  },
  // sort: {
  //   fontSize: 10,
  //   marginLeft: 10,
  //   marginTop: 10,
  //   color: "#F58005",
  // },
  flexContainer: {
    display: "flex",
    flexDirection: "row",
  },
  flexContainer2: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    margin: 3,
  },
  flexContainer3: {
    display: "flex",
    flexDirection: "row",
    margin: 3,
  },
  filterRestriction: {
    width: 130,
    height: 40,
    marginTop: 20,
    marginLeft: 10,
    borderWidth: 2,
    borderColor: "#F58005",
    borderRadius: 20,
  },
  restriction: {
    fontSize: 14,
    marginLeft: 10,
    marginTop: 10,
    color: "#F58005",
  },
  filterOpen: {
    width: 90,
    height: 40,
    marginTop: 20,
    marginLeft: 10,
    borderWidth: 2,
    borderColor: "#CCCCCC",
    borderRadius: 20,
  },
  open: {
    fontSize: 12,
    marginLeft: 12,
    marginTop: 10,
    color: "#CCCCCC",
  },
  sort: {
    fontSize: 8,
    marginLeft: 5,
    marginTop: 10,
  },
  recommended: {
    fontSize: 24,
    marginLeft: 20,
    marginTop: 20,
    fontWeight: "bold",
  },
  preferences: {
    marginLeft: 20,
    marginTop: 10,
    color: "#3C3C43",
  },
  bottomLine: {
    marginLeft: 130,
    marginTop: 25,
    width: 140,
    height: 5,
    marginBottom: 3,
  },
  overlay: {
    backgroundColor: "rgba(0,0,0,0.2)",
    flex: 1,
    justifyContent: "flex-end",
  },
  container: {
    backgroundColor: "white",
    paddingTop: 12,
    borderTopRightRadius: 12,
    borderTopLeftRadius: 12,
  },
  model: {
    backgroundColor: "white",
    marginTop: 50,
    marginLeft: 0,
    marginBottom: 0,
    width: 414,
    height: 400,
    borderRadius: 11,
  },
  checkbox: {
    alignSelf: "flex-end",
    width: 100,
    height: 100,
    borderColor: "#000000",
    borderRadius: 5,
  },
  selection: {
    margin: 35,
  },

  dollarButton: {
    height: 40,
    width: 70,
    borderWidth: 1,
    borderRadius: 21,
    justifyContent: "center",
    alignItems: "center",
    borderColor: "#CCCCCC",
    marginTop: 18,
    marginRight: 8,
    marginBottom: 18,
  },
  applyButton: {
    width: 343,
    height: 56,
    backgroundColor: "#F58005",
    alignSelf: "center",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 40,
    marginBottom: 15,
  },
  apply: {
    color: "white",
  },
  openingScreenModal: {
    backgroundColor: "white",
    marginTop: 170,
    marginLeft: 40,
    marginRight: 40,
    marginBottom: 150,
    // width: 370,
    borderRadius: 20,
  },
  welcome: {
    fontWeight: "bold",
    fontSize: 24,
    alignSelf: "center",
  },
  description: {
    marginTop: 20,
    height: 200,
    width: 250,
    alignSelf: "center",
    color: "#3C3C4366",
    fontSize: 16,
  },
  understandButton: {
    width: 270,
    height: 60,
    marginTop: 20,
    alignSelf: "center",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F58005",
    borderRadius: 40,
  },
  understand: {
    fontWeight: "bold",
    color: "white",
    fontSize: 15,
  },
  restrictions: {
    marginTop: 10,
  },
  restrictionText: {
    fontWeight: "bold",
    fontSize: 16,
  },
  sortText: {
    marginTop: 10,
  },
  sort: {
    fontSize: 12,
    marginLeft: 23,
    marginTop: 10,
    color: "#CCCCCC",
  },
});
