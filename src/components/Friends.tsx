import React from "react";
import data from "../../assets/data.json";
import { StyleSheet, Text, View, Image } from "react-native";

const friends = data.friends;

const Friends = () => {
  return (
    <View style={styles.section}>
      <Text style={styles.text}>Friends</Text>
      {friends.map((x) => (
        <View style={styles.friendsList}>
          <Image
            source={require("../../assets/avatar1.jpg")}
            style={styles.img}
          />
          <Text style={styles.friends}>{x.name} </Text>
          <Text style={styles.friendsEmail}>{x.email} </Text>
        </View>
      ))}
    </View>
  );
};

export default Friends;

const styles = StyleSheet.create({
  section: {
    display: "flex",
    backgroundColor: "white",
    marginBottom: 30,
    width: "90%",
    alignItems: "center",
    borderRadius: 15,
  },
  friends: {
    fontSize: 12,
    fontStyle: "normal",
    fontWeight: "bold",
    color: "rgb(99,99,99)",
    paddingBottom: 3,
  },
  friendsEmail: {
    fontSize: 12,
    fontStyle: "normal",
    fontWeight: "bold",
    color: "rgb(125,168,223)",
    paddingBottom: 3,
    marginLeft: 10,
  },
  text: {
    padding: 5,
    fontSize: 15,
    fontStyle: "normal",
    fontWeight: "bold",
    color: "rgb(99,99,99)",
    marginBottom: 10,
  },
  friendsList: {
    display: "flex",
    justifyContent: "flex-start",
    flexDirection: "row",
  },
  img: {
    width: 40,
    height: 40,
    borderRadius: 10,
    bottom: 12,
  },
});
