import React, { useState } from "react";
import { Text, StyleSheet, TouchableOpacity, View, Image } from "react-native";
import Checkbox from "./Checkbox.js";
import { CheckBox } from "react-native-elements";

const allergies = [
  {
    name: "dairy",
  },
  {
    name: "eggs",
  },
  {
    name: "peanuts",
  },
  {
    name: "fish",
  },
  {
    name: "wheat",
  },
  {
    name: "soybean",
  },
  {
    name: "treenut",
  },
  {
    name: "soy",
  },
  {
    name: "barley",
  },
  {
    name: "shellfish",
  },
  {
    name: "garlic",
  },
  {
    name: "sesame",
  },
  {
    name: "banana",
  },
];

const AllergyOptions = (props) => {
  const [checked, setToggleCheckBox] = useState(false);

  const [checkedState, setCheckedState] = useState(
    new Array(allergies.length).fill(false)
  );
  // const [pickedAllergies, setPickedAllergies] = useState([]);

  // const toggleChecked = () => {
  //   setToggleCheckBox(!checked);
  // };

  const handleOnChange = (position) => {
    console.log(position);
    // setToggleCheckBox(!checked);
    const updatedCheckedState = checkedState.map((item, index) =>
      index === position ? !item : item
    );

    setCheckedState(updatedCheckedState);

    const choseAllergies = [];

    const totalPrice = updatedCheckedState.reduce(
      (sum, currentState, index) => {
        if (currentState === true) {
          choseAllergies.push(allergies[index].name);
        }
        // return sum;
        // props.setPickedAllergies(choseAllergies);
      }
    );
    props.setPickedAllergies(choseAllergies);
  };

  if (props.isAllergyVisible) {
    return (
      <View style={{ margin: 12 }}>
        {allergies.map(({ name }, index) => {
          return (
            <View style={styles.flexContainer2}>
              <Text style={{ marginLeft: 15 }}>{name}</Text>
              <CheckBox
                checked={checkedState[index]}
                onPress={() => handleOnChange(index)}
                checkedColor="#F58005"
                checkedIcon={<Image source={require("./images/checked.jpg")} />}
                uncheckedIcon={
                  <Image source={require("./images/unchecked.jpg")} />
                }
                style={{
                  width: 90,
                  height: 90,
                  marginRight: 55,
                  marginBotton: 20,
                }}
              />
            </View>
          );
        })}
      </View>
    );
  }
  return null;
};

export default AllergyOptions;

const styles = StyleSheet.create({
  flexContainer2: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    margin: 15,
    marginRight: 21,
  },
  checkbox: {
    alignSelf: "flex-end",
    width: 25,
    height: 25,
    borderColor: "#000000",
    borderRadius: 5,
  },
});
