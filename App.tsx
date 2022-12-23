import { StatusBar } from "expo-status-bar";
import data from "./assets/data.json";
import { StyleSheet, Text, View } from "react-native";

const user = data.user;
const transactions = data.transactions;
console.log(user);

export default function App() {
  return (
    <>
      <View style={styles.container}>
        <Text style={styles.title}> {user.name}</Text>
        <Text style={styles.text}> {user.email}</Text>

        <View style={styles.section}>
          <Text style={styles.text}>Account</Text>
          {user.accounts.map((x) => (
            <View style={styles.account}>
              <Text style={styles.column1}> {x.type} </Text>
              <Text style={styles.column2}> $ {x.balance} </Text>
            </View>
          ))}
        </View>

        <View style={styles.section}>
          <Text style={styles.text}>Transactions</Text>
          {transactions.map((x) => (
            <View style={styles.account}>
              <Text style={styles.column}> {x.type} </Text>
              <Text style={styles.column}> {x.account} </Text>
              <Text style={styles.column3}> $ {x.amount} </Text>
            </View>
          ))}
        </View>

        <StatusBar style="auto" />
      </View>

      <View>
        <StatusBar style="auto" />
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  title: {
    fontStyle: "normal",
    fontSize: 22,
    fontWeight: "bold",
    color: "rgb(56,56,56)",
    padding: 15,
  },
  background: {
    width: "100%",
    display: "flex",
  },
  text: {
    padding: 5,
    fontStyle: "normal",
    fontWeight: "bold",
    color: "rgb(99,99,99)",
    marginBottom: 30,
  },
  container: {
    display: "flex",
    width: "90%",
    height: 800,
    backgroundColor: "rgb(240,240,247)",
    alignItems: "center",
    left: "5%",
    top: "6%",
    borderRadius: 15,
  },
  section: {
    backgroundColor: "white",
    marginBottom: 50,
    width: "80%",
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
    fontStyle: "normal",
    fontWeight: "bold",
    color: "rgb(99,99,99)",
    padding: 5,
    width: "50%",
  },
  column2: {
    fontStyle: "normal",
    fontWeight: "bold",
    color: "rgb(99,99,99)",
    padding: 5,
    width: "45%",
    textAlign: "right",
  },
  column3: {
    fontStyle: "normal",
    fontWeight: "bold",
    color: "rgb(99,99,99)",
    padding: 5,
    width: "33%",
    textAlign: "right",
  },
  column: {
    fontStyle: "normal",
    fontWeight: "bold",
    color: "rgb(99,99,99)",
    padding: 5,
    width: "33%",
  },
});
