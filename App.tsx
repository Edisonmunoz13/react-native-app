import { StatusBar } from "expo-status-bar";
import data from "./assets/data.json";
import { StyleSheet, Text, View } from "react-native";

const user = data.user;
console.log(user);

export default function App() {
  return (
    <>
      <View style={styles.container}>
        <Text style={styles.title}> {user.name}</Text>
        <Text style={styles.text}> {user.email}</Text>

        <View style={styles.section}>
          <Text style={styles.text}>Accounts</Text>
          <View
            style={{ flexDirection: "row", justifyContent: "space-between" }}
          >
            <View style={{ width: 50, height: 50, backgroundColor: "red" }}>
              <Text>{}</Text>
            </View>
            <View
              style={{ width: 50, height: 50, backgroundColor: "green" }}
            ></View>
          </View>
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
    fontWeight: "bold",
    color: "rgb(56,56,56)",
    padding: 50,
  },
  background: {
    width: "100%",
    display: "flex",
  },
  text: {
    fontStyle: "normal",
    fontWeight: "bold",
    color: "rgb(56,56,56)",
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
    height: 300,
    width: "80%",
    alignItems: "center",
    borderRadius: 15,
  },
});
