import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import Accounts from "./src/components/Accounts";
import Transactions from "./src/components/Transactions";
import User from "./src/components/User";
import Friends from "./src/components/Friends";

export default function App() {
  return (
    <>
      <View style={styles.container}>
        <User />
        <Accounts />
        <Transactions />
        <Friends />
        <StatusBar style="auto" />
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    display: "flex",
    width: "90%",
    backgroundColor: "rgb(240,240,247)",
    alignItems: "center",
    left: "5%",
    top: "6%",
    borderRadius: 15,
  },
});
