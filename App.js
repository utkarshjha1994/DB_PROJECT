import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  Button,
  TextInput,
  TouchableOpacity,
  useState,
} from "react-native";
import RadioButtonComponenet from "./radio_component.js";

export default function App() {
  return <RadioButtonComponenet />;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  subContainer: {
    marginTop: 0,
    height: 800,
    width: 400,
    borderColor: "black",
  },

  radioButtonContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginLeft: 0,
    marginTop: 0,
  },
  radioButton: {
    height: 20,
    width: 20,
    backgroundColor: "#F8F8F8",
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "#E6E6E6",
    alignItems: "center",
    justifyContent: "center",
  },
  radioButtonIcon: {
    height: 14,
    width: 14,
    borderRadius: 7,
    backgroundColor: "#98CFB6",
  },
  radioButtonText: {
    fontSize: 16,
    marginLeft: 16,
  },

  input: {
    height: 300,
    margin: 12,
    marginTop: 0,
    borderWidth: 1,
    padding: 10,
  },
});
