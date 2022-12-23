import React from "react";
import data from "../../assets/data.json";
import { StyleSheet, Text, View } from "react-native";

const transactions = data.transactions;

const Transactions = () => {
  return (
    <View style={styles.section}>
      <Text style={styles.text}>Transactions</Text>
      {transactions.map((x) => (
        <View style={styles.transaction}>
          <Text style={styles.column}> {x.type} </Text>
          <Text style={styles.column}>
            {x.account ? x.account : x.fromAccount}{" "}
            {x.toAccount ? x.toAccount : null}
          </Text>
          <Text style={styles.column3}> $ {x.amount.toFixed(2)} </Text>
        </View>
      ))}
    </View>
  );
};

export default Transactions;

const styles = StyleSheet.create({
  text: {
    padding: 5,
    fontSize: 15,
    fontStyle: "normal",
    fontWeight: "bold",
    color: "rgb(99,99,99)",
    marginBottom: 30,
  },
  section: {
    backgroundColor: "white",
    marginBottom: 30,
    width: "90%",
    alignItems: "center",
    borderRadius: 15,
  },
  column: {
    fontStyle: "normal",
    fontWeight: "bold",
    color: "#fff",
    padding: 5,
    width: "33%",
  },
  transaction: {
    backgroundColor: "rgb(125,168,223)",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 15,
    borderRadius: 15,
    padding: 3,
  },
  column3: {
    fontSize: 16,
    fontStyle: "normal",
    fontWeight: "bold",
    color: "black",
    padding: 5,
    width: "30%",
    textAlign: "right",
  },
});
