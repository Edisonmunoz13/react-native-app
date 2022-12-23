import React from "react";
import data from "../../assets/data.json";
import { StyleSheet, Text, View, Image } from "react-native";

const user = data.user;

const User = () => {
  return (
    <>
      <Image source={require("../../assets/avatar.png")} style={styles.img} />
      <Text style={styles.title}> Hi! {user.name}</Text>
      <Text style={styles.text}> {user.email}</Text>
    </>
  );
};

export default User;

const styles = StyleSheet.create({
  title: {
    fontStyle: "normal",
    fontSize: 30,
    fontWeight: "bold",
    color: "rgb(56,56,56)",
    padding: 3,
  },
  text: {
    fontSize: 15,
    fontStyle: "normal",
    fontWeight: "bold",
    color: "rgb(99,99,99)",
    marginBottom: 10,
  },
  img: {
    width: 60,
    height: 60,
    marginTop: 10,
  },
});
