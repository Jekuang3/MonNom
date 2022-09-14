import React, { useState } from "react";
import { Text, StyleSheet, TouchableOpacity, View, Image } from "react-native";
import { CheckBox } from "react-native-elements";

const Checkbox = (props) => {
  const [checked, setToggleCheckBox] = useState(false);

  const toggleChecked = () => {
    setToggleCheckBox(!checked);
  };

  return (
    <CheckBox
      checked={checked}
      onPress={toggleChecked}
      checkedColor="#F58005"
      checkedIcon={<Image source={require("./images/checked.jpg")} />}
      uncheckedIcon={<Image source={require("./images/unchecked.jpg")} />}
      // style={{ width: 90, height: 90 }}
    />
  );
};

export default Checkbox;

const styles = StyleSheet.create({
  flexContainer2: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    margin: 15,
  },
  checkbox: {
    alignSelf: "flex-end",
    width: 30,
    height: 30,
    borderColor: "#000000",
    borderRadius: 5,
  },
});
