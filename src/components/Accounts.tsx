import React from "react";
import data from "../../assets/data.json";
import { StyleSheet, Text, View } from "react-native";

const user = data.user;

const Accounts = () => {
  return (
    <>
      <View style={styles.section}>
        <Text style={styles.text}>Accounts</Text>
        {user.accounts.map((x) => (
          <View style={styles.account}>
            <Text style={styles.column1}> {x.type} </Text>
            <Text
              style={{
                fontSize: 10,
                fontStyle: "normal",
                fontWeight: "bold",
                color: "rgb(99,99,99)",
              }}
            >
              account
            </Text>
            <Text style={styles.column2}> $ {x.balance.toFixed(2)} </Text>
          </View>
        ))}
      </View>
    </>
  );
};

export default Accounts;

const styles = StyleSheet.create({
  section: {
    display: "flex",
    backgroundColor: "white",
    marginBottom: 30,
    width: "90%",
    alignItems: "center",
    borderRadius: 15,
  },
  account: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 15,
  },
  column1: {
    fontSize: 15,
    fontStyle: "normal",
    fontWeight: "bold",
    color: "rgb(56,56,56)",
    padding: 5,
    width: "25%",
  },
  column2: {
    fontSize: 20,
    fontStyle: "normal",
    fontWeight: "bold",
    color: "rgb(125,168,223)",
    padding: 5,
    width: "60%",
    textAlign: "right",
  },
  text: {
    padding: 5,
    fontSize: 15,
    fontStyle: "normal",
    fontWeight: "bold",
    color: "rgb(99,99,99)",
    marginBottom: 30,
  },
});
