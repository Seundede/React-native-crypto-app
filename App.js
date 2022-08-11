import { NavigationContainer } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, View } from "react-native";
import { Navigation } from "./src/Navigation";
import ListContextProvider from "./src/Context";
import { RecoilRoot } from "recoil";
import { LogBox } from "react-native";


LogBox.ignoreLogs(["Setting a timer for a long period of time"]);

export default function App() {
  return (
    <NavigationContainer
      theme={{
        colors: {
          background: "#121212",
        },
      }}
    >
      <ListContextProvider>
       <RecoilRoot>
          <View style={styles.container}>
            <StatusBar style="light" />
            <Navigation />
          </View>
        </RecoilRoot>
      </ListContextProvider>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#121212",
    paddingTop: 50,
  },
});
